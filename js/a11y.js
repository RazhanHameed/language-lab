// Accessibility layer (WCAG 2.2 AA). Loaded after app.js; it never renders UI of
// its own beyond one visually-hidden live region. Views are built imperatively
// all over app.js, so instead of repeating attributes in every template this
// file watches the DOM (one MutationObserver) and applies them centrally:
//
//   * target-language text gets lang="<code>" so screen readers switch voice
//     (Kurdish blocks also carry dir="rtl" — set in app.js, the chrome stays LTR)
//   * the Latin reading guide (<rt>) is aria-hidden, so it isn't read twice
//   * icon-only voice buttons get "Play pronunciation of <word>"
//   * flashcards are keyboard-operable (Enter / Space), hidden faces are inert
//   * keys 1-4 grade a revealed card (Again / Hard / Good / Easy)
//   * answer feedback and toasts are announced through one polite live region
//   * nav buttons expose aria-current instead of a tab role without panels
(function () {
  "use strict";

  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const cfg = () => (window.Lang && Lang.cfg && Lang.cfg()) || {};
  const primary = () => String(cfg().langCode || "").toLowerCase().split("-")[0];

  /* ---------- text helpers ---------- */
  // Visible text of a node without the <rt> reading guide.
  function plainText(node) {
    if (!node) return "";
    const c = node.cloneNode(true);
    c.querySelectorAll("rt, rp, .respell, svg, [aria-hidden='true']").forEach((x) => x.remove());
    return c.textContent.replace(/\s+/g, " ").trim();
  }

  /* ---------- live region ---------- */
  let live = null;
  function ensureLive() {
    if (live && document.body.contains(live)) return live;
    live = document.createElement("div");
    live.id = "sr-live";
    live.setAttribute("role", "status");
    live.setAttribute("aria-live", "polite");
    live.setAttribute("aria-atomic", "true");
    live.style.cssText = "position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;border:0";
    document.body.appendChild(live);
    return live;
  }
  let announceTimer = 0;
  function announce(text) {
    if (!text) return;
    const r = ensureLive();
    r.textContent = "";
    clearTimeout(announceTimer);
    announceTimer = setTimeout(() => { r.textContent = text; }, 60);
  }

  /* ---------- per-node enhancements ---------- */
  // Elements that always hold target-language text (see the classes app.js emits).
  const TARGET = "ruby.guide, .nl-text, .prompt-word, .dlg-nl, .passage-para, .word-chip, .pron-ex-word, [dir='rtl']:not(html)";

  function tagLang(root) {
    const code = primary();
    if (!code) return;
    const set = (e) => { if (!e.hasAttribute("lang")) e.setAttribute("lang", code); };
    if (root.matches && root.matches(TARGET)) set(root);
    root.querySelectorAll && root.querySelectorAll(TARGET).forEach(set);
  }

  // Which word does this voice button speak?
  function wordFor(btn) {
    const d = btn.dataset;
    if (d.speakNl) return { w: d.speakNl, en: false };
    if (d.say) return { w: d.say, en: false };
    if (d.speakEn) return { w: d.speakEn, en: true };
    if (d.speak) return { w: d.speak, en: false };
    let n = btn.parentElement;
    for (let i = 0; n && i < 4; i++, n = n.parentElement) {
      const t = n.querySelector(".nl-text, .prompt-word, .dlg-nl, .passage-para, .li-title, .prompt-en");
      if (t) return { w: plainText(t), en: t.classList.contains("prompt-en") };
    }
    return null;
  }

  function labelVoice(btn) {
    if (btn.getAttribute("aria-hidden") === "true") return;
    const info = wordFor(btn);
    if (!info || !info.w) return;
    const w = info.w.length > 80 ? info.w.slice(0, 77) + "…" : info.w;
    const label = info.en ? `Play English pronunciation of ${w}` : `Play pronunciation of ${w}`;
    if (btn.getAttribute("aria-label") !== label) btn.setAttribute("aria-label", label);
    if (btn.title && btn.title !== label) btn.title = label;
  }

  // Flashcard: a click-to-flip <div>. Make it a real keyboard control and keep
  // the face that is turned away out of the tab order and the reading order.
  function wireCard(card) {
    if (card.dataset.a11y) return;
    // Cards with an answer box are driven by the box, not by tapping the card.
    if (!card.querySelector(".face.back") || card.querySelector("input, textarea")) return;
    card.dataset.a11y = "1";
    if (!card.hasAttribute("tabindex")) {
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
    }
    syncCard(card);
  }
  function syncCard(card) {
    const flipped = card.classList.contains("is-flipped");
    card.setAttribute("aria-expanded", flipped ? "true" : "false");
    card.setAttribute("aria-label", flipped ? "Answer shown. Rate how well you knew it." : "Show the answer");
    const front = card.querySelector(".face.front"), back = card.querySelector(".face.back");
    if (front) { front.toggleAttribute("inert", flipped); front.setAttribute("aria-hidden", flipped ? "true" : "false"); }
    if (back) { back.toggleAttribute("inert", !flipped); back.setAttribute("aria-hidden", flipped ? "false" : "true"); }
    // A role=button must not hide interactive children from AT while it is the
    // control: once flipped, the card is just a container again.
    if (flipped) { card.removeAttribute("role"); card.removeAttribute("tabindex"); card.removeAttribute("aria-label"); card.removeAttribute("aria-expanded"); }
  }

  function enhance(root) {
    if (root.nodeType !== 1) return;
    tagLang(root);
    if (root.matches("rt")) root.setAttribute("aria-hidden", "true");
    root.querySelectorAll("rt:not([aria-hidden])").forEach((r) => r.setAttribute("aria-hidden", "true"));
    const vb = root.matches(".voice-btn, .voice-action") ? [root] : [];
    $$(".voice-btn, .voice-action", root).forEach((b) => vb.push(b));
    vb.forEach(labelVoice);
    const cards = root.matches(".flashcard") ? [root] : [];
    $$(".flashcard", root).forEach((c) => cards.push(c));
    cards.forEach(wireCard);
    // announcements
    const msgs = root.matches(".feedback, .toast") ? [root] : [];
    $$(".feedback, .toast", root).forEach((m) => msgs.push(m));
    if (msgs.length) announce(msgs.map(plainText).filter(Boolean).join(". "));
  }

  // Views are assembled from templates that don't always start with an h1 or
  // step down one level at a time. Fix that in one place: add a visually-hidden
  // h1 when a view has none, and give any heading that skips a level the
  // aria-level it should have (the visual size is untouched).
  let headingTimer = 0;
  function fixHeadings() {
    headingTimer = 0;
    const main = document.getElementById("app");
    if (!main) return;
    if (!main.querySelector("h1")) {
      const active = document.querySelector(".tab.is-active, .bn-tab.is-active");
      const h = document.createElement("h1");
      h.className = "sr-only";
      h.setAttribute("data-a11y-h1", "");
      h.textContent = (active && active.textContent.trim()) || "Practice";
      main.insertBefore(h, main.firstChild);
    } else if (main.querySelectorAll("h1").length > 1) {
      const gen = main.querySelector("h1[data-a11y-h1]");
      if (gen) gen.remove();
    }
    let prev = 0;
    main.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((h) => {
      let lvl = Number(h.tagName[1]);
      if (prev && lvl > prev + 1) { lvl = prev + 1; h.setAttribute("aria-level", String(lvl)); }
      else if (h.hasAttribute("aria-level")) h.removeAttribute("aria-level");
      prev = lvl;
    });
  }
  function scheduleHeadings() { if (!headingTimer) headingTimer = setTimeout(fixHeadings, 50); }

  new MutationObserver((muts) => {
    for (const m of muts) {
      if (m.type === "childList" && m.target.closest && m.target.closest("#app, main")) scheduleHeadings();
    }
    for (const m of muts) {
      if (m.type === "attributes") {
        const t = m.target;
        if (m.attributeName === "class") {
          if (t.classList.contains("flashcard") && t.dataset.a11y) syncCard(t);
          if (t.classList.contains("tab") || t.classList.contains("bn-tab")) syncNav(t);
        }
        continue;
      }
      m.addedNodes.forEach(enhance);
    }
  }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });

  /* ---------- navigation: aria-current instead of tab roles ---------- */
  function syncNav(b) {
    if (b.classList.contains("is-active")) b.setAttribute("aria-current", "page");
    else b.removeAttribute("aria-current");
  }
  $$(".tab, .bn-tab").forEach(syncNav);

  /* ---------- keyboard ---------- */
  document.addEventListener("keydown", (e) => {
    if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    // Flip the card with Enter / Space when the card itself has focus.
    if (t && t.classList && t.classList.contains("flashcard") && (e.key === "Enter" || e.key === " " || e.key === "Spacebar")) {
      e.preventDefault();
      t.click();
      // After the flip the card stops being a control; move focus to the rating pad.
      setTimeout(() => { const r = document.querySelector("#rating-pad .rate-btn"); if (r) r.focus({ preventScroll: true }); }, 0);
      return;
    }
    // 1-4 grade a revealed card.
    if (/^[1-4]$/.test(e.key) && !e.shiftKey) {
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      if (t && t.isContentEditable) return;
      if (document.body.classList.contains("ob-open")) return;
      const btns = $$("#rating-pad .rate-btn");
      const b = btns[Number(e.key) - 1];
      if (b && !b.disabled) { e.preventDefault(); b.click(); }
    }
  });

  /* ---------- init ---------- */
  function init() {
    ensureLive();
    enhance(document.body);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.A11y = { announce };
})();
