/* =====================================================================
   Leer Nederlands — main app
   ---------------------------------------------------------------------
   Architecture:
   - state lives in Store (localStorage)
   - one current view at a time, re-rendered on state changes
   - study sessions are stateful objects held in memory
   - card-types are interleaved per the science: each item gets a
     randomly-chosen presentation mode (recognise / recall / cloze /
     choice / reorder / listen-type) appropriate to its maturity.
   ===================================================================== */

const App = (function () {
  let state = null;          // loaded in init(), after the active language is set
  let currentView = "home";
  let currentSession = null; // active study session
  let currentDrill = null;   // active drill round
  let nav = {};              // transient navigation state (selected theme, etc.)

  /* ---------- helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function escape(str) {
    return String(str).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ---------- respeller ----------
   * Crude target-language → English respelling. Rule-based, not perfect — the
   * actual rules live in the active language pack (Lang.cfg().respellWord).
   * Use the audio button as the source of truth; this is a reading aid, not a
   * phonetic standard.
   */
  function respell(text, override) {
    if (override) return override;
    if (!text) return "";
    const respellWord = Lang.cfg().respellWord;
    return text.split(/(\s+)/).map((tok) => /\S/.test(tok) ? respellWord(tok) : tok).join("");
  }

  function respellLine(text, override) {
    if (Lang.cfg().transliterate) return "";   // script languages: the reading guide covers it
    const guide = respell(text, override);
    if (!guide || guide === text) return "";
    return `<div class="respell">${escape(guide)}</div>`;
  }

  /* ---------- reading guide (transliteration) ----------
   * For a script the learner can't read yet (Sorani), the language pack
   * provides transliterate(). Every target-script word the app renders then
   * gets its Latin reading as ruby text underneath — applied centrally by a
   * MutationObserver, so no view has to remember it and new views get it for
   * free. All non-target UI is English, so "contains Arabic script" is exactly
   * "is target text". Toggle: Stats → Settings → Reading guide.
   *
   * Code that needs a word back must use a data-* attribute, never
   * textContent (which would include the guide). */
  const SCRIPT_WORD = /[\u0621-\u063A\u0641-\u064A\u0671-\u06D3\u06D5]+/g;
  const HAS_SCRIPT = /[\u0621-\u063A\u0641-\u064A\u0671-\u06D3\u06D5]/;
  const NO_GUIDE = "ruby, rt, script, style, textarea, input, select, option, [data-no-guide]";

  function guideActive() {
    return !!(Lang.cfg() && Lang.cfg().transliterate && state && state.settings.readingGuide !== false);
  }

  function annotateGuide(root) {
    if (!root || !guideActive()) return;
    const tr = Lang.cfg().transliterate;
    if (root.nodeType === 3) root = root.parentElement;
    if (!root || root.closest && root.closest(NO_GUIDE)) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => HAS_SCRIPT.test(n.nodeValue) && n.parentElement && !n.parentElement.closest(NO_GUIDE)
        ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT,
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const n of nodes) {
      const text = n.nodeValue;
      const frag = document.createDocumentFragment();
      let last = 0;
      for (const m of text.matchAll(SCRIPT_WORD)) {
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const ruby = document.createElement("ruby");
        ruby.className = "guide";
        ruby.appendChild(document.createTextNode(m[0]));
        const rt = document.createElement("rt");
        rt.textContent = tr(m[0]);
        ruby.appendChild(rt);
        frag.appendChild(ruby);
        last = m.index + m[0].length;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      n.replaceWith(frag);
    }
  }

  // One observer, fixed order: direction first (wraps Kurdish runs in <bdi>),
  // then the reading guide (adds ruby to the words inside those runs).
  new MutationObserver((muts) => {
    for (const m of muts) m.addedNodes.forEach((n) => {
      rtlFix(n);
      if (guideActive()) annotateGuide(n);
    });
  }).observe(document.body, { childList: true, subtree: true });

  /* ---------- direction: English UI, Kurdish content ----------
   * The interface is English, so <html dir> is always "ltr", whatever the
   * learning language. Only Kurdish CONTENT is right-to-left (Sorani):
   *   - blocks that hold target text get dir="rtl" (alignment, punctuation);
   *   - Kurdish inside English prose (notes, tips, feedback, chips) is wrapped
   *     in <bdi dir="rtl" lang="ckb"> so it keeps its own order and never
   *     scrambles the neighbouring English.
   * Applied centrally by the same observer as the reading guide, so no view
   * has to remember it. Kurmanji (Latin script) never reaches this code. */
  const AR_CLS = "\\u0600-\\u06FF\\u0750-\\u077F\\uFB50-\\uFDFF\\uFE70-\\uFEFF";
  const HAS_ARABIC = new RegExp(`[${AR_CLS}]`);
  const RTL_RUN = new RegExp(`[${AR_CLS}\\u200C\\u200D]+(?:[\\s\\u00A0.,:;!?'"()\\-\\u2013\\u2014\\u2026\\u00AB\\u00BB0-9]+[${AR_CLS}\\u200C\\u200D]+)*`, "g");
  const RTL_ALWAYS = ".word-chip, .reorder-area, .reorder-bank";
  const RTL_IF_ARABIC = ".nl-text, .prompt-word, .dlg-nl, .passage-para, .cloze-prompt, .greeting-nl, .drill-verb, .choice-btn, .speaking-prompt, .lookup-text > .nl-text";
  const NO_ISOLATE = "script, style, textarea, input, select, option, rt, bdi[dir]";

  function isRtlLang() { const c = Lang.cfg(); return !!(c && c.rtl); }

  // Does this element's text start (first letter) in Arabic script?
  function startsRtl(e) {
    const m = /\p{L}/u.exec(e.textContent || "");
    return !!m && HAS_ARABIC.test(m[0]);
  }

  // Wrap each Arabic-script run in a text node in <bdi dir="rtl" lang="..">.
  function isolateText(n) {
    const text = n.nodeValue;
    if (!HAS_ARABIC.test(text)) return;
    const p = n.parentElement;
    if (!p || p.closest(NO_ISOLATE)) return;
    const d = p.closest("[dir]");
    if (d && d.getAttribute("dir") === "rtl") return;     // already a Kurdish block
    const code = String(Lang.cfg().langCode || "ckb").toLowerCase().split("-")[0];
    const frag = document.createDocumentFragment();
    let last = 0;
    for (const m of text.matchAll(RTL_RUN)) {
      if (!HAS_ARABIC.test(m[0])) continue;
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      const b = document.createElement("bdi");
      b.setAttribute("dir", "rtl");
      b.setAttribute("lang", code);
      b.textContent = m[0];
      frag.appendChild(b);
      last = m.index + m[0].length;
    }
    if (last === 0) return;
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    n.replaceWith(frag);
  }

  function rtlFix(root) {
    if (!root || !isRtlLang()) return;
    if (root.nodeType === 3) root = root.parentElement;
    if (!root || root.nodeType !== 1) return;
    const tag = (e) => { if (!e.hasAttribute("dir")) e.setAttribute("dir", "rtl"); };
    const all = (sel, fn) => { if (root.matches(sel)) fn(root); root.querySelectorAll(sel).forEach(fn); };
    all(RTL_ALWAYS, tag);
    all(RTL_IF_ARABIC, (e) => { if (!e.hasAttribute("dir") && startsRtl(e)) tag(e); });
    all("input[type=text], textarea", (e) => { if (!e.hasAttribute("dir")) e.setAttribute("dir", "auto"); });
    if (!HAS_ARABIC.test(root.textContent || "")) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => HAS_ARABIC.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT,
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(isolateText);
  }

  // For code that assembles English HTML containing Kurdish: wraps Kurdish runs
  // in <bdi>. Pass already-escaped HTML; tags are left alone.
  function isolateRtl(html) {
    if (!isRtlLang() || !HAS_ARABIC.test(html)) return html;
    const code = String(Lang.cfg().langCode || "ckb").toLowerCase().split("-")[0];
    return String(html).split(/(<[^>]*>)/).map((part) => part.startsWith("<") ? part
      : part.replace(RTL_RUN, (run) => HAS_ARABIC.test(run) ? `<bdi dir="rtl" lang="${code}">${run}</bdi>` : run)).join("");
  }

  // Typed answers: one comparison for every exercise. Accepts the target script
  // and — for script languages — a Latin spelling of it (Lang.cfg().answerMatches).
  function answerOk(given, target) {
    if (Drills.normalize(given) === Drills.normalize(target)) return true;
    const m = Lang.cfg().answerMatches;
    return !!(m && m(target, given));
  }

  // Placeholder for answer boxes: tells script-language learners Latin is fine.
  function typeHint(fallback) {
    return Lang.cfg().inputHint || fallback;
  }

  function todayISO() {
    const d = new Date();
    const tz = d.getTimezoneOffset() * 60000;
    return new Date(d - tz).toISOString().slice(0, 10);
  }

  function daysBetween(aISO, bISO) {
    const a = new Date(aISO).getTime();
    const b = new Date(bISO).getTime();
    return Math.round((b - a) / (24 * 60 * 60 * 1000));
  }

  function persist() { Store.save(state); }

  // Context handed to the Plan feature (js/goals.js).
  function goalsCtx() {
    return { state, persist, navigate, toast, todayISO, startSession: () => startSession() };
  }

  function toast(msg) {
    let host = $(".toast-host");
    if (!host) {
      host = el(`<div class="toast-host"></div>`);
      document.body.appendChild(host);
    }
    const t = el(`<div class="toast">${escape(msg)}</div>`);
    host.appendChild(t);
    setTimeout(() => t.remove(), 2400);
  }

  /* ---------- small in-page dialog (never window.confirm) ----------
   * Focus goes to the safe choice; Escape cancels; the page behind is inert. */
  function confirmDialog({ title, body = "", confirmLabel = "Confirm", cancelLabel = "Keep going", onConfirm }) {
    const opener = document.activeElement;
    const back = el(`
      <div class="confirm-backdrop">
        <div class="confirm-box" role="alertdialog" aria-modal="true" aria-labelledby="confirm-t" aria-describedby="confirm-b">
          <h2 id="confirm-t">${escape(title)}</h2>
          <p id="confirm-b" class="muted">${escape(body)}</p>
          <div class="confirm-actions">
            <button class="btn primary lg" type="button" data-act="cancel">${escape(cancelLabel)}</button>
            <button class="btn lg danger" type="button" data-act="ok">${escape(confirmLabel)}</button>
          </div>
        </div>
      </div>`);
    const parts = ["header.app-header", "#app", "nav.bottom-nav"].map((q) => document.querySelector(q)).filter(Boolean);
    function close(ok) {
      document.removeEventListener("keydown", onKey, true);
      parts.forEach((x) => x.removeAttribute("inert"));
      back.remove();
      if (opener && opener.focus && document.contains(opener)) opener.focus();
      if (ok && onConfirm) onConfirm();
    }
    function onKey(e) {
      if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); close(false); return; }
      if (e.key !== "Tab") return;
      const f = Array.from(back.querySelectorAll("button"));
      const first = f[0], last = f[f.length - 1];
      if (!back.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
      else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    back.querySelector('[data-act="cancel"]').addEventListener("click", () => close(false));
    back.querySelector('[data-act="ok"]').addEventListener("click", () => close(true));
    back.addEventListener("mousedown", (e) => { if (e.target === back) close(false); });
    document.body.appendChild(back);
    parts.forEach((x) => x.setAttribute("inert", ""));
    document.addEventListener("keydown", onKey, true);
    back.querySelector('[data-act="cancel"]').focus();
  }

  // Ending a session/drill: confirm only if something was already answered.
  function confirmEnd(answered, noun, body, doEnd) {
    if (answered < 1) { doEnd(); return; }
    confirmDialog({ title: `End this ${noun}?`, body, confirmLabel: `End ${noun}`, onConfirm: doEnd });
  }

  // One header for every page. Order is always: Back, eyebrow, H1, lead, page actions.
  // (The coach tip is mounted right after it by mountCoach, then the content.)
  // `back` is the id of the Back button (true = "back"); `actions` is trusted HTML.
  function pageHeader({ back, eyebrow, title, lead, actions } = {}) {
    const backId = back === true ? "back" : back;
    return `<header class="page-head">
      ${backId ? `<button class="btn back-btn" id="${backId}" type="button">${arrowBack()} Back</button>` : ""}
      ${eyebrow ? `<span class="eyebrow">${escape(eyebrow)}</span>` : ""}
      <h1>${escape(title)}</h1>
      ${lead ? `<p class="lead">${escape(lead)}</p>` : ""}
      ${actions ? `<div class="page-actions">${actions}</div>` : ""}
    </header>`;
  }

  // Top bar of a session or drill: a clear End button and a labelled progress bar.
  function focusBar(idx, total, quitId, noun) {
    const n = Math.min(idx + 1, total);
    const label = `${noun === "drill" ? "Question" : "Card"} ${n} of ${total}`;
    return `
      <div class="session-bar">
        <button class="end-btn" id="${quitId}" type="button" aria-label="End ${noun}"><span aria-hidden="true">✕</span><span>End ${noun}</span></button>
        <div class="session-progress">
          <span class="session-count">${label}</span>
          <div class="progress-track" role="progressbar" aria-label="${noun === "drill" ? "Drill" : "Session"} progress" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${idx}" aria-valuetext="${label}"><div class="progress-fill" style="width:${(idx / total) * 100}%"></div></div>
        </div>
      </div>`;
  }

  /* ---------- learning-science tips (rotated daily, per language) ---------- */
  function tipForToday() {
    const tips = Lang.cfg().tips;
    const d = new Date();
    const idx = (d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate()) % tips.length;
    return tips[idx];
  }

  /* ---------- card universe ---------- */
  function allCardIds() {
    return [...VOCAB.map((v) => v.id), ...SENTENCES.map((s) => s.id)];
  }

  function getCard(id) {
    return VOCAB.find((v) => v.id === id) || SENTENCES.find((s) => s.id === id) || null;
  }

  function isVocab(card) { return card && card.id.startsWith("v_"); }
  function isSentence(card) { return card && card.id.startsWith("s_"); }

  /* ---------- session machinery ---------- */
  function startSession(opts = {}) {
    const size = opts.size || state.settings.sessionSize;
    const ids = allCardIds();
    const goalOpts = window.Goals ? Goals.sessionOpts(state, todayISO()) : null;   // new-card quota from an active Words goal
    const capped = goalOpts && !opts.extra;
    const batch = SRS.pickBatch(ids, state.cards, goalOpts ? { size, newLimit: capped ? goalOpts.newLimit : undefined, preferIds: goalOpts.preferIds } : { size });
    if (batch.length === 0) {
      if (capped && goalOpts.quotaReached) { toast("You've done today's new words. Tap “Study a little more” on Home for extra."); navigate("home"); return; }
      toast("All caught up. Try a drill or read something while you wait.");
      navigate("home");
      return;
    }
    currentSession = {
      queue: batch,
      index: 0,
      reviewed: 0,
      correct: 0,
      modes: batch.map((id) => pickMode(id)),
      cardStartMs: Date.now(),
    };
    navigate("study");
  }

  // Choose a presentation mode based on card type and SRS maturity.
  // The very first session: a short one (5 cards) so day one feels easy.
  function startFirstSession() {
    startSession({ size: Onboarding.FIRST_SESSION_SIZE });
  }

  function pickMode(cardId) {
    let mode = pickModeRaw(cardId);
    // Listen-and-type modes need a voice — swap them out when the language
    // has no speech model yet (Kurdish).
    if (!hasSpeech()) {
      if (mode === "listen") mode = "choice";
      else if (mode === "listen_sentence") mode = "cloze";
    }
    return mode;
  }

  function pickModeRaw(cardId) {
    const card = getCard(cardId);
    const st = state.cards[cardId];
    const mature = SRS.maturity(st);
    const r = Math.random();

    if (isVocab(card)) {
      if (mature === "new") {
        // Easier first contact: recognition + sometimes choice
        if (r < 0.6) return "recognize";
        if (r < 0.85) return "choice";
        return "listen";
      }
      if (mature === "learning") {
        if (r < 0.35) return "recognize";
        if (r < 0.7)  return "recall";
        if (r < 0.9)  return "choice";
        return "listen";
      }
      // young / mature: harder modes
      if (r < 0.25) return "recognize";
      if (r < 0.7)  return "recall";
      if (r < 0.9)  return "listen";
      return "choice";
    }

    // Sentences
    if (mature === "new") {
      if (r < 0.7) return "sentence_recognize";
      return "cloze";
    }
    if (mature === "learning") {
      if (r < 0.3) return "sentence_recognize";
      if (r < 0.7) return "cloze";
      return "reorder";
    }
    // young/mature sentences
    if (r < 0.2) return "sentence_recognize";
    if (r < 0.6) return "cloze";
    if (r < 0.9) return "reorder";
    return "listen_sentence";
  }

  function gradeAndAdvance(quality) {
    if (!currentSession) return;
    const id = currentSession.queue[currentSession.index];
    const prev = state.cards[id];
    if (window.Goals) Goals.onReview(state, id, prev, todayISO());   // counts first-time cards for the daily new-word quota
    const next = SRS.review(prev, quality);
    state.cards[id] = next;
    currentSession.reviewed += 1;
    if (quality >= 4) currentSession.correct += 1;
    persist();

    currentSession.index += 1;
    if (currentSession.index >= currentSession.queue.length) {
      finishSession();
    } else {
      currentSession.cardStartMs = Date.now();
      render();
    }
  }

  function finishSession() {
    const today = todayISO();
    const last = state.lastSessionDate;
    if (last !== today) {
      const gap = last ? daysBetween(last, today) : null;
      if (gap === 1) state.streak += 1;
      else if (gap === 0) {} // shouldn't happen
      else state.streak = 1;
      state.lastSessionDate = today;
    }
    // record session
    const existing = state.sessions.find((s) => s.date === today);
    if (existing) {
      existing.reviewed += currentSession.reviewed;
      existing.correct += currentSession.correct;
    } else {
      state.sessions.push({
        date: today,
        reviewed: currentSession.reviewed,
        correct: currentSession.correct,
      });
    }
    persist();
    currentView = "summary";
    render();
  }

  /* ---------- routing ---------- */
  let coachSig = null;       // last (view, object, index) the coaching counter ran for
  function navigate(view) {
    if (view === "help" && currentView !== "help") nav.helpBack = currentView;   // for the Back button on Help
    currentView = view;
    coachSig = null;
    // Sync top tabs
    $$(".tab").forEach((t) => t.classList.toggle("is-active", t.dataset.view === view));
    $$(".bn-tab").forEach((t) => t.classList.toggle("is-active", t.dataset.view === view));
    render();
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function render() {
    const main = $("#app");
    main.innerHTML = "";
    let viewEl;
    switch (currentView) {
      case "home":   viewEl = renderHome(); break;
      case "study":  viewEl = renderStudy(); break;
      case "browse": viewEl = renderBrowse(); break;
      case "stats":  viewEl = renderStats(); break;
      case "scenario": viewEl = renderScenarioDetail(nav.scenarioId); break;
      case "theme":   viewEl = renderThemeDetail(nav.theme); break;
      case "grammar-detail": viewEl = renderGrammarDetail(nav.grammarId); break;
      case "summary": viewEl = renderSummary(); break;
      case "drill":   viewEl = renderDrill(); break;
      case "drill-summary": viewEl = renderDrillSummary(); break;
      case "passage": viewEl = renderPassage(nav.passageId); break;
      case "help":    viewEl = Onboarding.renderHelp(); break;
      case "pronunciation": viewEl = renderPronunciation(); break;
      case "plan":    viewEl = Goals.renderPlan(goalsCtx()); break;
      default:       viewEl = renderHome();
    }
    if (viewEl) {
      mountCoach(viewEl);
      main.appendChild(viewEl);
    }
    // Focus mode: no bottom nav while a session or drill is running.
    document.body.classList.toggle("is-focus",
      (currentView === "study" && !!currentSession) || (currentView === "drill" && !!currentDrill));
    syncHeaderHeight();
  }

  // Sticky bars (Browse jump chips) sit just under the header: expose its height.
  function reducedMotion() { return !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches); }

  function syncHeaderHeight() {
    const h = document.querySelector(".app-header");
    if (h) document.documentElement.style.setProperty("--header-h", h.offsetHeight + "px");
  }
  window.addEventListener("resize", syncHeaderHeight);

  /* ---------- in-context coaching (see js/onboarding.js) ---------- */
  function coachKey() {
    switch (currentView) {
      case "study": return currentSession ? currentSession.modes[currentSession.index] : null;
      case "drill": return currentDrill ? currentDrill.kind : null;
      case "passage": return "reader";
      case "scenario": return "scenario";
      case "grammar-detail": return "grammar";
      case "pronunciation": return "pronunciation";
      default: return null;
    }
  }

  function mountCoach(viewEl) {
    const key = coachKey();
    if (!key) return;
    const obj = currentView === "study" ? currentSession : currentView === "drill" ? currentDrill : null;
    const idx = obj ? (obj.index !== undefined ? obj.index : obj.idx) : 0;
    const sig = { key, obj, idx };
    if (!coachSig || coachSig.key !== key || coachSig.obj !== obj || coachSig.idx !== idx) {
      coachSig = sig;
      Onboarding.bump(key);        // one more "meeting" with this exercise
    }
    const coach = Onboarding.coachEl(key);
    if (!coach) return;
    const anchor = viewEl.querySelector(".flashcard-wrap, .drill-card");
    const head = viewEl.querySelector(".page-head");
    const bar = viewEl.querySelector(".session-bar");
    if (bar) bar.after(coach);                 // focus bar first, then the tip, then the card
    else if (head) head.after(coach);          // header (Back, title, actions), then the tip, then the content
    else if (anchor) anchor.parentNode.insertBefore(coach, anchor);
    else viewEl.prepend(coach);
  }

  /* ============ HOME ============ */
  function renderHome() {
    const ids = allCardIds();
    const counts = SRS.counts(ids, state.cards);
    const today = todayISO();
    const todaySession = state.sessions.find((s) => s.date === today);
    const tip = tipForToday();
    const greeting = targetGreeting();

    const wrap = el(`<div class="view view-home"></div>`);

    // Backup reminder: only once there is something worth keeping (3+ sessions),
    // no backup in 14 days, and not dismissed in the last 7 days. One quiet row.
    const days = Store.daysSinceExport(state);
    const dismissedDays = state.backupDismissedAt ? (Date.now() - state.backupDismissedAt) / 86400000 : Infinity;
    if ((state.sessions || []).length >= 3 && days >= 14 && dismissedDays >= 7) {
      const banner = el(`
        <div class="backup-banner" role="region" aria-label="Back up your progress">
          <div class="backup-banner-text">
            <strong>Back up your progress.</strong> It only lives in this browser.
          </div>
          <button class="btn" id="banner-backup" type="button">Back up</button>
          <button class="icon-btn" id="banner-dismiss" type="button" aria-label="Dismiss">✕</button>
        </div>
      `);
      banner.querySelector("#banner-backup").addEventListener("click", () => {
        Store.downloadBackup(state, Lang.cfg().backupPrefix);
        persist();
        banner.remove();
        toast("Backup saved to your Downloads folder.");
      });
      banner.querySelector("#banner-dismiss").addEventListener("click", () => {
        state.backupDismissedAt = Date.now();
        persist();
        banner.remove();
      });
      wrap.appendChild(banner);
    }

    // Day one: one obvious next action, everything else stays below.
    const first = Onboarding.isFirstRun();
    if (first) {
      wrap.classList.add("is-first");
      wrap.appendChild(el(`
        <section class="hero home-hero home-welcome">
          <div class="row spread" style="margin-bottom: 14px;">
            <span class="chip accent">New here</span>
            <span class="chip">${todayLabel()}</span>
          </div>
          <h1><span class="greeting-nl">${greeting.target}!</span></h1>
          <p class="muted">${greeting.en}. Let's start small: ${Onboarding.FIRST_SESSION_SIZE} cards, about two minutes. Try to remember each answer before you flip the card, and rate it honestly.</p>
        </section>
      `));
      const firstCta = el(`
        <button class="session-cta home-cta home-cta--first" id="cta-first">
          <div>
            <div class="session-due">Start your first ${Onboarding.FIRST_SESSION_SIZE}-card session</div>
            <div class="session-label">Every card has a short tip on screen. No wrong way to begin.</div>
          </div>
          <span class="arrow">→</span>
        </button>
      `);
      firstCta.addEventListener("click", () => startFirstSession());
      wrap.appendChild(firstCta);
      const pronFirst = pronLinkItem("home-pron-first");
      if (pronFirst) {
        $(".li-sub", pronFirst).textContent = `New to the sounds? Start here: ${Number(pronGuide().minutes) || 15} minutes${hasSpeech() ? ", every example with audio" : ""}.`;
        wrap.appendChild(pronFirst);
      }
      const helpRow = el(`
        <div class="row home-first-links" style="gap:8px; flex-wrap:wrap">
          <button class="btn" id="home-tour">Take the 1-minute tour</button>
          <button class="btn" id="home-how">How it works</button>
        </div>
      `);
      $("#home-tour", helpRow).addEventListener("click", () => Onboarding.openTour());
      $("#home-how", helpRow).addEventListener("click", () => navigate("help"));
      wrap.appendChild(helpRow);
      wrap.appendChild(el(`<div class="section-header" style="margin: 24px 0 0"><h2 style="font-size:1.125rem">Or look around first</h2></div>`));
    }

    // Hero
    const heroEl = first ? null : el(`
      <section class="hero home-hero">
        <div class="row spread" style="margin-bottom: 14px;">
          ${Goals.consistencyBadgeHtml(state, today)}
          <span class="chip">${todayLabel()}</span>
        </div>
        <h1><span class="greeting-nl">${greeting.target}!</span></h1>
        <p class="muted">${greeting.en}. ${tip.body}</p>
      </section>
    `);
    if (heroEl) wrap.appendChild(heroEl);

    // Session CTA
    // "Due" in counts includes never-seen cards; learners care about reviews waiting.
    const nowMs = Date.now();
    const reviewDue = ids.filter((id) => {
      const st = state.cards[id];
      return st && st.reps > 0 && st.due <= nowMs;
    }).length;
    // An active Words goal caps today's new cards; the label must match what the session will hold.
    const goalCap = window.Goals ? Goals.sessionOpts(state, todayISO()) : null;
    const size = state.settings.sessionSize;
    const newToday = goalCap ? Math.min(goalCap.newLimit, size) : size;
    const planned = Math.min(size, reviewDue + newToday);
    const mins = Math.max(2, Math.round(Math.max(planned, 1) * 0.6));   // ~35 s a card
    const caughtUp = reviewDue === 0 && (!!todaySession || (goalCap && goalCap.quotaReached));
    const dueLabel = caughtUp ? "Study a little more" : "Start today's session";
    const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
    const dueSub = reviewDue === 0
      ? (caughtUp
          ? (goalCap && goalCap.quotaReached ? `Today's new words are done · extra practice is optional` : `About ${mins} min · nothing is waiting, so these are new cards`)
          : `About ${mins} min · ${plural(newToday, "new card")} to meet`)
      : `About ${mins} min · ${reviewDue} card${reviewDue === 1 ? " is" : "s are"} ready to review${goalCap && newToday > 0 ? ` + ${plural(Math.min(newToday, Math.max(0, size - reviewDue)), "new word")}` : ""}`;
    const cta = el(`
      <button class="session-cta home-cta" id="cta-session">
        <div>
          <div class="session-due">${dueLabel}</div>
          <div class="session-label">${dueSub}</div>
        </div>
        <span class="arrow" aria-hidden="true">→</span>
      </button>
    `);
    // Past today's goal quota the learner chose to keep going: let new cards through.
    cta.addEventListener("click", () => startSession(caughtUp && goalCap && goalCap.quotaReached ? { extra: true } : {}));
    if (!first) wrap.appendChild(cta);
    if (!first) wrap.appendChild(Goals.homeCard(goalsCtx()));

    // Caught up for today: say what to do instead of leaving a dead end.
    if (!first && reviewDue === 0 && todaySession) {
      const done = el(`
        <article class="card home-done">
          <span class="eyebrow">All done for today</span>
          <p style="margin:6px 0 10px">Nothing is due, so you're caught up. Want a bit more? Learn a few new words, try a quick drill below or read a short passage. Otherwise, come back tomorrow and your next cards will be waiting.</p>
          <button class="btn" id="more-new" type="button">Learn 5 new words</button>
        </article>
      `);
      $("#more-new", done).addEventListener("click", () => startNewWords(5));
      wrap.appendChild(done);
    }

    // Quick stats
    const todayReviews = todaySession ? todaySession.reviewed : 0;
    const accuracy = todaySession && todaySession.reviewed
      ? Math.round((todaySession.correct / todaySession.reviewed) * 100)
      : null;
    if (!first) wrap.appendChild(el(`
      <div class="grid-2 home-stats">
        <div class="stat">
          <span class="stat-label">Today</span>
          <span class="stat-value">${todayReviews}</span>
          <span class="stat-sub">reviews · goal ${state.settings.dailyGoal}</span>
        </div>
        <div class="stat">
          <span class="stat-label">Well known</span>
          <span class="stat-value">${counts.mature}</span>
          <span class="stat-sub">of ${counts.total} cards</span>
        </div>
      </div>
    `));

    // Tip card
    if (!first) wrap.appendChild(el(`
      <article class="card home-tip">
        <span class="eyebrow">Today's principle</span>
        <h3 style="margin-top:6px">${escape(tip.title)}</h3>
        <p class="muted" style="margin:0">${escape(tip.body)}</p>
      </article>
    `));

    // Quick links
    const quickLinks = el(`
      <div class="grid-2 home-quick">
        ${first ? "" : `<button class="list-item" data-jump="study">
          <div class="li-main">
            <div class="li-title">Quick session</div>
            <div class="li-sub">${state.settings.sessionSize} mixed cards</div>
          </div>
          <span class="li-arrow">→</span>
        </button>`}
        <button class="list-item" data-jump="browse">
          <div class="li-main">
            <div class="li-title">Browse content</div>
            <div class="li-sub">Vocab, sentences, scenarios, grammar</div>
          </div>
          <span class="li-arrow">→</span>
        </button>
      </div>
    `);
    const pronQuick = first ? null : pronLinkItem();
    if (pronQuick) quickLinks.appendChild(pronQuick);
    $$("[data-jump]", quickLinks).forEach((b) => {
      b.addEventListener("click", () => {
        if (b.dataset.jump === "study") startSession();
        else navigate(b.dataset.jump);
      });
    });
    wrap.appendChild(quickLinks);

    // Mastery breakdown
    if (!first) wrap.appendChild(el(`
      <article class="card home-maturity">
        <span class="eyebrow">Your cards</span>
        <h3 style="margin: 6px 0 12px">How well you know them</h3>
        ${maturityBars(counts)}
      </article>
    `));

    // Drills (Speaking, Shadowing, Min-pairs, Chunks, Numbers, Times, Conjugation)
    const drillCard = el(`
      <article class="card home-drills">
        <span class="eyebrow">Quick drills</span>
        <h3 style="margin: 6px 0 4px">30-second sprints</h3>
        <p class="muted" style="margin: 0 0 12px; font-size: 0.8125rem">${first ? "Try these after your first session. Each one trains a single skill, and has a tip on screen." : "Targeted practice — each drill closes a gap flashcards can't catch."}</p>
        <div class="drill-chips">
          ${hasStt() ? `
          <button class="drill-chip" data-drill="speaking">
            <span class="drill-chip-emoji">🎙️</span>
            <span class="drill-chip-label">Speaking</span>
            <span class="drill-chip-sub">say it · get a score</span>
          </button>
          <button class="drill-chip" data-drill="shadow">
            <span class="drill-chip-emoji">🌓</span>
            <span class="drill-chip-label">Shadowing</span>
            <span class="drill-chip-sub">repeat after the voice · prosody</span>
          </button>` : ``}
          ${hasSpeech() ? `
          <button class="drill-chip" data-drill="minpair">
            <span class="drill-chip-emoji">👂</span>
            <span class="drill-chip-label">Minimal pairs</span>
            <span class="drill-chip-sub">${Lang.cfg().drillHints.minpair}</span>
          </button>` : ``}
          <button class="drill-chip" data-drill="chunk">
            <span class="drill-chip-emoji">🧩</span>
            <span class="drill-chip-label">Chunks</span>
            <span class="drill-chip-sub">${Lang.cfg().drillHints.chunk}</span>
          </button>
          <button class="drill-chip" data-drill="number">
            <span class="drill-chip-emoji">🔢</span>
            <span class="drill-chip-label">Numbers</span>
            <span class="drill-chip-sub">${Lang.cfg().drillHints.number}</span>
          </button>
          <button class="drill-chip" data-drill="time">
            <span class="drill-chip-emoji">🕗</span>
            <span class="drill-chip-label">Times</span>
            <span class="drill-chip-sub">${Lang.cfg().drillHints.time}</span>
          </button>
          <button class="drill-chip" data-drill="conjugation">
            <span class="drill-chip-emoji">🧬</span>
            <span class="drill-chip-label">Conjugation</span>
            <span class="drill-chip-sub">top ${(window.CONJUGATIONS || []).length} verbs · present tense</span>
          </button>
        </div>
      </article>
    `);
    $$("[data-drill]", drillCard).forEach((b) => {
      b.addEventListener("click", () => startDrill(b.dataset.drill));
    });
    wrap.appendChild(drillCard);

    // Extensive reading (Liu & Zhang 2018: small-medium effect across all
    // language domains). Home offers just the next unread passage; the full
    // list lives in Browse → Reading.
    if ((window.PASSAGES || []).length) {
      const nextP = nextPassage();
      const readCard = el(`
        <article class="card home-read">
          <span class="eyebrow">Read</span>
          <h3 style="margin: 6px 0 4px">Read a short passage</h3>
          <p class="muted" style="margin: 0 0 12px">Tap any word for its translation. Aim for the gist, not every word.</p>
          <button class="passage-item" id="read-next" type="button">
            <span class="passage-level">${escape(nextP.level)}</span>
            <div class="passage-meta">
              <div class="passage-title">${escape(nextP.title)}</div>
              <div class="passage-blurb">${escape(nextP.blurb)}</div>
            </div>
            <span class="li-arrow" aria-hidden="true">→</span>
          </button>
          <button class="btn" id="read-all" type="button" style="margin-top:10px">All ${window.PASSAGES.length} passages ${arrowFwd()}</button>
        </article>
      `);
      $("#read-next", readCard).addEventListener("click", () => openPassage(nextP.id));
      $("#read-all", readCard).addEventListener("click", () => { nav.browseJump = "reading"; navigate("browse"); });
      wrap.appendChild(readCard);
    }

    return wrap;
  }

  // The first passage not read yet; once all are read, the one read longest ago.
  function nextPassage() {
    const list = window.PASSAGES || [];
    const read = state.passagesRead || {};
    const unread = list.find((p) => !read[p.id]);
    if (unread) return unread;
    return list.slice().sort((a, b) => (read[a.id] || 0) - (read[b.id] || 0))[0];
  }

  // Remember where the reader was opened from, so Back returns there.
  function openPassage(id) {
    nav.passageId = id;
    nav.passageBack = currentView === "home" ? "home" : "browse";
    navigate("passage");
  }

  function targetGreeting() {
    return Lang.cfg().greeting(new Date().getHours());
  }

  function todayLabel() {
    const { days, months } = Lang.cfg().calendar;
    const d = new Date();
    return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
  }

  function maturityBars(c) {
    const total = Math.max(1, c.total);
    const mk = (label, val, cls) => `
      <div style="display:grid; grid-template-columns: minmax(6.5rem, auto) 1fr 2.5rem; gap:10px; align-items:center; padding:6px 0;">
        <span class="muted" style="font-size:0.8125rem">${label}</span>
        <div class="progress-track"><div class="progress-fill" style="width:${(val/total)*100}%; background: ${cls}"></div></div>
        <span class="mono" style="font-size:0.8125rem; text-align:end">${val}</span>
      </div>
    `;
    return mk("Well known",    c.mature,   "var(--success)") +
           mk("Getting there", c.young,    "var(--primary)") +
           mk("Learning",      c.learning, "var(--accent)")  +
           mk("Not seen yet",  c.new,      "var(--text-subtle)");
  }

  /* ============ STUDY ============ */
  function renderStudy() {
    if (!currentSession) {
      const wrap = el(`
        <div class="view stack">
          <div class="empty-state">
            <div class="big-mark">?</div>
            <h2>No active session</h2>
            <p>Start one from Home or pick a theme to study from Browse.</p>
            <div class="row" style="justify-content:center; margin-top: 16px">
              <button class="btn primary" id="kick-session">Start mixed session</button>
            </div>
          </div>
        </div>
      `);
      $("#kick-session", wrap).addEventListener("click", () => startSession());
      return wrap;
    }
    const wrap = el(`<div class="view view-study"></div>`);
    const total = currentSession.queue.length;
    const idx = currentSession.index;
    const pct = (idx / total) * 100;

    wrap.appendChild(el(focusBar(idx, total, "quit-session", "session")));

    const id = currentSession.queue[idx];
    const mode = currentSession.modes[idx];
    const card = getCard(id);

    const cardEl = renderCardForMode(card, mode);
    wrap.appendChild(cardEl);

    const quitBtn = $("#quit-session", wrap);
    if (quitBtn) quitBtn.addEventListener("click", () => {
      confirmEnd(currentSession.reviewed, "session", "Cards you have already rated are saved.", () => {
        currentSession = null;
        navigate("home");
      });
    });

    return wrap;
  }

  function renderCardForMode(card, mode) {
    if (mode === "recognize") return cardRecognize(card);
    if (mode === "recall")    return cardRecall(card);
    if (mode === "choice")    return cardChoice(card);
    if (mode === "listen")    return cardListenVocab(card);
    if (mode === "sentence_recognize") return cardSentenceRecognize(card);
    if (mode === "cloze")     return cardCloze(card);
    if (mode === "reorder")   return cardReorder(card);
    if (mode === "listen_sentence") return cardListenSentence(card);
    return cardRecognize(card);
  }

  /* ===== card type: recognise (NL → EN, vocab) ===== */
  function cardRecognize(card) {
    const wrap = el(`
      <div class="flashcard-wrap">
        <div class="flashcard" id="flash">
          <div class="face front">
            <button class="voice-btn voice-btn--float" id="audio-btn" title="Hear it" aria-label="Hear it">
              ${iconSound()}
            </button>
            <span class="prompt-line">${Lang.cfg().name} · what does this mean?</span>
            <div class="prompt-word">${gloss(card)}</div>
            ${respellLine(card.nl, card.respell)}
            ${card.gender ? `<div class="prompt-meta"><span class="chip primary">${card.gender}</span><span class="chip">${card.pos || ""}</span></div>` : `<div class="prompt-meta"><span class="chip">${card.pos || ""}</span></div>`}
          </div>
          <div class="face back">
            <div class="speak-row">
              <div class="prompt-word">${escape(card.nl)}</div>
              <button class="voice-btn" data-speak-nl="${escape(card.nl)}" aria-label="Hear ${Lang.cfg().name}">${iconSound()}</button>
            </div>
            ${respellLine(card.nl, card.respell)}
            <div class="prompt-en">${escape(card.en)}</div>
            ${exampleBlock(card)}
            ${noteBlock(card)}
          </div>
        </div>
        <div id="reveal-area"></div>
      </div>
    `);

    const flash = $("#flash", wrap);
    const audioBtn = $("#audio-btn", wrap);

    audioBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      Speech.speak(card.nl, { rate: state.settings.prefRate });
    });

    wireSpeakButtons(wrap);

    flash.addEventListener("click", () => {
      // Don't flip if the user is selecting text (desktop-only, but harmless on mobile)
      if (window.getSelection && window.getSelection().toString().length > 0) return;
      if (!flash.classList.contains("is-flipped")) {
        flash.classList.add("is-flipped");
        if (state.settings.autoPlay) Speech.speak(card.nl, { rate: state.settings.prefRate });
        showRatingPad(wrap);
      }
    });

    showHintBeforeReveal(wrap, "Tap card to reveal");
    return wrap;
  }

  /* ===== card type: recall (EN → NL — production) ===== */
  function cardRecall(card) {
    const wrap = el(`
      <div class="flashcard-wrap">
        <div class="flashcard" id="flash">
          <div class="face front">
            <span class="prompt-line">Say it in ${Lang.cfg().name}</span>
            <div class="prompt-en">${escape(card.en)}</div>
            <div class="prompt-meta">
              ${card.gender ? `<span class="chip primary">${card.gender}</span>` : ""}
              <span class="chip">${card.pos || ""}</span>
            </div>
            <p class="muted" style="margin-top:14px; font-size:0.875rem">Say it aloud first. Then tap to check.</p>
          </div>
          <div class="face back">
            <button class="voice-btn voice-btn--float" id="audio-btn" aria-label="Hear it">${iconSound()}</button>
            <span class="prompt-line">${Lang.cfg().name}</span>
            <div class="prompt-word">${escape(card.nl)}</div>
            ${respellLine(card.nl, card.respell)}
            ${exampleBlock(card)}
            ${noteBlock(card)}
          </div>
        </div>
        <div id="reveal-area"></div>
      </div>
    `);

    const flash = $("#flash", wrap);
    flash.addEventListener("click", () => {
      // Don't flip if the user is selecting text (desktop-only, but harmless on mobile)
      if (window.getSelection && window.getSelection().toString().length > 0) return;
      if (!flash.classList.contains("is-flipped")) {
        flash.classList.add("is-flipped");
        if (state.settings.autoPlay) Speech.speak(card.nl, { rate: state.settings.prefRate });
        showRatingPad(wrap);
      }
    });

    setTimeout(() => {
      const ab = $("#audio-btn", wrap);
      if (ab) ab.addEventListener("click", (e) => {
        e.stopPropagation();
        Speech.speak(card.nl, { rate: state.settings.prefRate });
      });
    }, 0);

    wireSpeakButtons(wrap);
    showHintBeforeReveal(wrap, "Speak it aloud — tap card to check");
    return wrap;
  }

  /* ===== card type: choice (multiple choice) ===== */
  function cardChoice(card) {
    // Pick 3 distractors from same theme
    const sameTheme = VOCAB.filter((v) => v.theme === card.theme && v.id !== card.id);
    const distractors = shuffle(sameTheme).slice(0, 3);
    while (distractors.length < 3) {
      const random = VOCAB[Math.floor(Math.random() * VOCAB.length)];
      if (random.id !== card.id && !distractors.includes(random)) distractors.push(random);
    }
    const askInDutch = Math.random() < 0.5; // alternate direction
    const promptText = askInDutch ? card.nl : card.en;
    const correctAnswer = askInDutch ? card.en : card.nl;
    const choices = shuffle([
      correctAnswer,
      ...distractors.map((d) => askInDutch ? d.en : d.nl),
    ]);

    const wrap = el(`
      <div class="card lg stack-sm">
        <span class="prompt-line">${askInDutch ? Lang.cfg().name + " · pick the meaning" : "English · pick the " + Lang.cfg().name}</span>
        ${askInDutch ? `<div class="prompt-word">${escape(promptText)}</div>` : `<div class="prompt-en prompt-en--lg">${escape(promptText)}</div>`}
        ${askInDutch ? respellLine(card.nl, card.respell) : ""}
        <div class="choice-grid" id="choices"></div>
        <div id="reveal-area"></div>
      </div>
    `);

    const grid = $("#choices", wrap);
    choices.forEach((text) => {
      const btn = el(`<button class="choice-btn ${askInDutch ? "" : "tl"}" data-val="${escape(text)}">${escape(text)}</button>`);
      btn.addEventListener("click", () => {
        const isCorrect = text === correctAnswer;
        $$(".choice-btn", grid).forEach((b) => {
          b.disabled = true;
          if (b === btn) b.classList.add(isCorrect ? "correct" : "incorrect");
          if (b.dataset.val === correctAnswer && !isCorrect) b.classList.add("correct");
          if (b !== btn && b.dataset.val !== correctAnswer) b.classList.add("dim");
        });
        Speech.speak(card.nl, { lang: Lang.cfg().langCode, rate: state.settings.prefRate });
        showRatingPad(wrap, { auto: isCorrect ? 4 : 0 });
      });
      grid.appendChild(btn);
    });

    if (askInDutch) {
      const audioBtn = el(`<button class="btn audio voice-action" style="align-self:flex-start">${iconSound()} Hear it</button>`);
      audioBtn.addEventListener("click", () => Speech.speak(card.nl, { rate: state.settings.prefRate }));
      wrap.insertBefore(audioBtn, grid);
    }

    return wrap;
  }

  /* ===== card type: listen-and-type (vocab) ===== */
  function cardListenVocab(card) {
    const wrap = el(`
      <div class="card lg stack-sm">
        <span class="prompt-line">Listen and type</span>
        <p class="muted" style="margin:0">You'll hear a ${Lang.cfg().name} word — type what you hear.</p>
        <div class="row" style="gap: 10px">
          <button class="btn audio voice-action" id="play-btn">${iconSound()} Play</button>
          <button class="btn audio voice-action" id="play-slow">${iconSound()} Slow</button>
        </div>
        <input type="text" class="cloze-input" id="answer" placeholder="${escape(typeHint(`Type ${Lang.cfg().name} here…`))}" autocomplete="off" autocapitalize="none" />
        <button class="btn primary full" id="check-btn">Check</button>
        <div id="reveal-area"></div>
      </div>
    `);

    let played = false;
    const playBtn = $("#play-btn", wrap);
    const slowBtn = $("#play-slow", wrap);
    const inp = $("#answer", wrap);
    const checkBtn = $("#check-btn", wrap);

    playBtn.addEventListener("click", () => {
      Speech.speak(card.nl, { rate: state.settings.prefRate });
      played = true;
      setTimeout(() => inp.focus(), 200);
    });
    slowBtn.addEventListener("click", () => Speech.speak(card.nl, { rate: 0.6 }));

    setTimeout(() => playBtn.click(), 280);

    function check() {
      const ok = answerOk(inp.value, card.nl);
      inp.classList.add(ok ? "correct" : "incorrect");
      checkBtn.disabled = true;
      const reveal = $("#reveal-area", wrap);
      reveal.innerHTML = `
        <div class="feedback ${ok ? "correct" : "incorrect"}">
          ${ok ? "Spot on." : `Correct: <strong>${escape(card.nl)}</strong>`}
        </div>
        <div style="margin-top:8px" class="muted">${escape(card.en)}</div>
      `;
      showRatingPad(wrap, { auto: ok ? 4 : 0 });
    }
    checkBtn.addEventListener("click", check);
    inp.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });

    return wrap;
  }

  /* ===== card type: sentence recognise (NL → EN) ===== */
  function cardSentenceRecognize(card) {
    const wrap = el(`
      <div class="flashcard-wrap">
        <div class="flashcard" id="flash">
          <div class="face front">
            <button class="voice-btn voice-btn--float" id="audio-btn" aria-label="Hear it">${iconSound()}</button>
            <span class="prompt-line">Sentence · what does it mean?</span>
            <div class="prompt-word small">${escape(card.nl)}</div>
            ${respellLine(card.nl, card.respell)}
            ${card.pattern ? `<div class="prompt-meta"><span class="chip">${escape(card.pattern)}</span></div>` : ""}
          </div>
          <div class="face back">
            <div class="speak-row">
              <div class="prompt-word small">${escape(card.nl)}</div>
              <button class="voice-btn" data-speak-nl="${escape(card.nl)}" aria-label="Hear ${Lang.cfg().name}">${iconSound()}</button>
            </div>
            ${respellLine(card.nl, card.respell)}
            <div class="prompt-en">${escape(card.en)}</div>
            ${revealsBlock(card)}
          </div>
        </div>
        <div id="reveal-area"></div>
      </div>
    `);
    const flash = $("#flash", wrap);
    flash.addEventListener("click", () => {
      // Don't flip if the user is selecting text (desktop-only, but harmless on mobile)
      if (window.getSelection && window.getSelection().toString().length > 0) return;
      if (!flash.classList.contains("is-flipped")) {
        flash.classList.add("is-flipped");
        if (state.settings.autoPlay) Speech.speak(card.nl, { rate: state.settings.prefRate });
        showRatingPad(wrap);
      }
    });
    setTimeout(() => {
      const ab = $("#audio-btn", wrap);
      if (ab) ab.addEventListener("click", (e) => {
        e.stopPropagation();
        Speech.speak(card.nl, { rate: state.settings.prefRate });
      });
    }, 0);
    wireSpeakButtons(wrap);
    showHintBeforeReveal(wrap, "Tap card to reveal");
    return wrap;
  }

  /* ===== card type: cloze (fill the blank) ===== */
  function cardCloze(card) {
    // Pick a content word — strip articles and ultra-common closed-class words
    const tokens = card.nl.split(/\s+/);
    const skipSet = Lang.cfg().clozeStopwords;
    const cleaned = tokens.map((t) => t.replace(/[.,!?]/g, ""));
    const candidates = cleaned
      .map((t, i) => ({ tok: t, i }))
      .filter(({ tok }) => tok.length > 2 && !skipSet.has(tok.toLowerCase()));
    const chosen = candidates.length > 0
      ? candidates[Math.floor(Math.random() * candidates.length)]
      : { tok: cleaned[cleaned.length - 1], i: cleaned.length - 1 };

    const masked = tokens.slice();
    masked[chosen.i] = `<span class="blank">____</span>`;
    const promptHtml = masked.join(" ");

    const wrap = el(`
      <div class="card lg stack-sm">
        <span class="prompt-line">Fill the blank · ${escape(card.en)}</span>
        <div class="cloze-prompt">${promptHtml}</div>
        <input type="text" class="cloze-input" id="answer" placeholder="${escape(typeHint("…"))}" autocomplete="off" autocapitalize="none" />
        <div class="row">
          <button class="btn audio voice-action" id="hear-btn">${iconSound()} Hear full sentence</button>
          <button class="btn primary" id="check-btn" style="flex:1; justify-content:center">Check</button>
        </div>
        <div id="reveal-area"></div>
      </div>
    `);
    const inp = $("#answer", wrap);
    const checkBtn = $("#check-btn", wrap);
    const hearBtn = $("#hear-btn", wrap);
    setTimeout(() => inp.focus(), 50);

    hearBtn.addEventListener("click", () => Speech.speak(card.nl, { rate: state.settings.prefRate }));

    function check() {
      const ok = answerOk(inp.value, chosen.tok);
      inp.classList.add(ok ? "correct" : "incorrect");
      checkBtn.disabled = true;
      Speech.speak(card.nl, { rate: state.settings.prefRate });
      const reveal = $("#reveal-area", wrap);
      const diag = !ok ? Drills.diagnoseError(chosen.tok, inp.value) : null;
      reveal.innerHTML = `
        <div class="feedback ${ok ? "correct" : "incorrect"}">
          ${ok ? "Correct." : `Answer: <strong>${escape(chosen.tok)}</strong>`}
        </div>
        ${diag ? `<div class="metaling-tip"><span class="chip accent">${escape(diag.tag)}</span> ${diag.note}</div>` : ""}
        <div class="prompt-example" style="margin-top:8px"><span class="nl-text">${escape(card.nl)}</span></div>
      `;
      showRatingPad(wrap, { auto: ok ? 4 : 0 });
    }
    checkBtn.addEventListener("click", check);
    inp.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });

    return wrap;
  }

  /* ===== card type: reorder (jumbled words) ===== */
  function cardReorder(card) {
    const tokens = card.nl.split(/\s+/);
    const shuffled = shuffle(tokens.slice());
    // If shuffle accidentally returned the original order, swap two
    if (shuffled.join(" ") === tokens.join(" ") && tokens.length > 1) {
      [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
    }

    const wrap = el(`
      <div class="card lg stack-sm">
        <span class="prompt-line">Build the sentence · ${escape(card.en)}</span>
        <div class="reorder-area" id="answer-area" data-empty="Tap words below"></div>
        <div class="reorder-bank" id="bank"></div>
        <div class="row">
          <button class="btn audio voice-action" id="hear-btn">${iconSound()} Hear it</button>
          <button class="btn primary" id="check-btn" style="flex:1; justify-content:center">Check</button>
        </div>
        <div id="reveal-area"></div>
      </div>
    `);
    const ans = $("#answer-area", wrap);
    const bank = $("#bank", wrap);
    const checkBtn = $("#check-btn", wrap);
    $("#hear-btn", wrap).addEventListener("click", () => Speech.speak(card.nl, { rate: state.settings.prefRate }));

    shuffled.forEach((t, i) => {
      const chip = el(`<button class="word-chip" data-bank-i="${i}" data-word="${escape(t)}">${escape(t)}</button>`);
      chip.addEventListener("click", () => {
        if (chip.classList.contains("placed")) {
          // remove from answer
          chip.classList.remove("placed");
          bank.appendChild(chip);
        } else {
          chip.classList.add("placed");
          ans.appendChild(chip);
        }
      });
      bank.appendChild(chip);
    });

    function check() {
      const built = $$(".word-chip.placed", ans).map((c) => c.dataset.word).join(" ");
      const target = card.nl.replace(/[.!?]$/, "").trim();
      const builtClean = built.replace(/[.!?]$/, "").trim();
      const ok = builtClean.toLowerCase() === target.toLowerCase();
      Speech.speak(card.nl, { rate: state.settings.prefRate });
      checkBtn.disabled = true;
      const reveal = $("#reveal-area", wrap);
      reveal.innerHTML = `
        <div class="feedback ${ok ? "correct" : "incorrect"}">
          ${ok ? "Built it." : `Correct order: <strong>${escape(card.nl)}</strong>`}
        </div>
      `;
      showRatingPad(wrap, { auto: ok ? 4 : 0 });
    }
    checkBtn.addEventListener("click", check);

    return wrap;
  }

  /* ===== card type: listen sentence ===== */
  function cardListenSentence(card) {
    const wrap = el(`
      <div class="card lg stack-sm">
        <span class="prompt-line">Listen and type the sentence</span>
        <div class="row" style="gap: 10px">
          <button class="btn audio voice-action" id="play-btn">${iconSound()} Play</button>
          <button class="btn audio voice-action" id="play-slow">${iconSound()} Slow</button>
        </div>
        <textarea class="cloze-input" id="answer" rows="2" placeholder="${escape(typeHint("Type what you hear…"))}" autocomplete="off" autocapitalize="none"></textarea>
        <button class="btn primary full" id="check-btn">Check</button>
        <div id="reveal-area"></div>
      </div>
    `);
    const inp = $("#answer", wrap);
    const checkBtn = $("#check-btn", wrap);

    $("#play-btn", wrap).addEventListener("click", () => {
      Speech.speak(card.nl, { rate: state.settings.prefRate });
      setTimeout(() => inp.focus(), 200);
    });
    $("#play-slow", wrap).addEventListener("click", () => Speech.speak(card.nl, { rate: 0.6 }));

    setTimeout(() => $("#play-btn", wrap).click(), 300);

    function check() {
      const ok = answerOk(inp.value, card.nl);
      inp.classList.add(ok ? "correct" : "incorrect");
      checkBtn.disabled = true;
      const reveal = $("#reveal-area", wrap);
      reveal.innerHTML = `
        <div class="feedback ${ok ? "correct" : "incorrect"}">
          ${ok ? "Bullseye." : `Correct: <strong>${escape(card.nl)}</strong>`}
        </div>
        <div class="muted" style="margin-top:8px; font-size:0.875rem">${escape(card.en)}</div>
      `;
      showRatingPad(wrap, { auto: ok ? 4 : 0 });
    }
    checkBtn.addEventListener("click", check);
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); check(); }
    });

    return wrap;
  }

  /* ===== rating pad ===== */
  function showRatingPad(wrap, opts = {}) {
    const reveal = $("#reveal-area", wrap);
    if (!reveal) return;
    const auto = opts.auto;
    const pad = el(`
      <div class="rating-bar">
        <div class="rating-row" id="rating-pad">
          <button class="rate-btn" data-q="0">Again<small>&lt; 1 day</small></button>
          <button class="rate-btn" data-q="3">Hard<small>1–2 days</small></button>
          <button class="rate-btn" data-q="4">Good<small>days+</small></button>
          <button class="rate-btn" data-q="5">Easy<small>weeks</small></button>
        </div>
        <p class="kbd-hint">Keys: <kbd>1</kbd> Again · <kbd>2</kbd> Hard · <kbd>3</kbd> Good · <kbd>4</kbd> Easy</p>
      </div>
    `);
    $$(".reveal-hint", reveal).forEach((h) => h.remove());   // "tap to reveal" is done
    const hint = Onboarding.ratingHint();
    if (hint) reveal.appendChild(el(hint));
    reveal.appendChild(pad);
    $$(".rate-btn", pad).forEach((b) => {
      b.addEventListener("click", () => gradeAndAdvance(parseInt(b.dataset.q, 10)));
    });
    if (auto != null) {
      // Pre-highlight the suggested rating, but let the user override.
      const suggested = pad.querySelector(`.rate-btn[data-q="${auto}"]`);
      if (suggested) { suggested.classList.add("is-suggested"); suggested.style.borderColor = "var(--primary)"; }
    }
  }

  function showHintBeforeReveal(wrap, msg) {
    const reveal = $("#reveal-area", wrap);
    if (!reveal) return;
    reveal.innerHTML = `<p class="muted reveal-hint">${escape(msg)}<span class="kbd-hint-inline"> (or press <kbd>Space</kbd>)</span></p>`;
  }

  /* ===== card content blocks ===== */
  function gloss(card) {
    if (card.gender) {
      // Trailing space INSIDE the span keeps copy/paste readable: "de tram"
      // not "detram", while CSS margin-right gives the visual gap.
      return `<span style="color:var(--text-subtle); font-size:1.5rem; font-family:var(--sans); font-weight:400; margin-inline-end:6px">${card.gender} </span>${escape(card.nl)}`;
    }
    return escape(card.nl);
  }
  function exampleBlock(card) {
    if (!card.example) return "";
    return `
      <div class="prompt-example">
        <div class="speak-row">
          <span class="nl-text">${escape(card.example.nl)}</span>
          <button class="voice-btn" data-speak-nl="${escape(card.example.nl)}" aria-label="Hear ${Lang.cfg().name}">${iconSound()}</button>
        </div>
        <div class="prompt-example-en">${escape(card.example.en)}</div>
      </div>`;
  }
  function noteBlock(card) {
    if (!card.note) return "";
    return `<div class="prompt-note">${escape(card.note)}</div>`;
  }
  function revealsBlock(card) {
    if (!card.reveals || !card.reveals.length) return "";
    return `<div class="prompt-example">
      <span class="muted" style="font-size:0.8125rem">This sentence shows:</span>
      <ul style="margin:6px 0 0 18px; padding:0; font-size:0.875rem">
        ${card.reveals.map((r) => `<li>${escape(r)}</li>`).join("")}
      </ul>
    </div>`;
  }

  function iconSound() {
    return `<svg class="ico-sound" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
  }
  // Arrows. The interface is always left-to-right (only Kurdish content is
  // RTL), so these are plain glyphs: forward points right, back points left.
  function arrowFwd()  { return `<span class="icon-arrow" aria-hidden="true">→</span>`; }
  function arrowBack() { return `<span class="icon-arrow-back" aria-hidden="true">←</span>`; }

  // Delegated handler that wires every [data-speak-nl] / [data-speak-en] button
  // inside `root`. Buttons stop event propagation so they don't flip the card.
  function wireSpeakButtons(root) {
    $$("[data-speak-nl]", root).forEach((b) => {
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        Speech.speak(b.dataset.speakNl, { lang: Lang.cfg().langCode, rate: state.settings.prefRate });
      });
    });
    $$("[data-speak-en]", root).forEach((b) => {
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        Speech.speak(b.dataset.speakEn, { lang: "en-US", rate: 1 });
      });
    });
  }

  /* ============ DRILLS ============ */
  function startDrill(kind) {
    if (kind === "speaking")     currentDrill = makeSpeakingDrill();
    else if (kind === "shadow")  currentDrill = makeShadowDrill();
    else                         currentDrill = Drills.makeDrill(kind, kind === "minpair" ? 12 : 10);
    navigate("drill");
  }

  function renderDrill() {
    if (!currentDrill) { navigate("home"); return el(`<div></div>`); }
    if (currentDrill.kind === "speaking") return renderSpeakingQuestion();
    if (currentDrill.kind === "shadow")   return renderShadowQuestion();
    if (currentDrill.kind === "minpair")  return renderMinPairQuestion();
    return renderTextDrillQuestion();
  }

  // ----- Numbers / Times / Conjugation: typed answers -----
  function renderTextDrillQuestion() {
    const d = currentDrill;
    const q = d.queue[d.idx];
    const pct = (d.idx / d.total) * 100;

    const wrap = el(`
      <div class="view view-drill">
        ${focusBar(d.idx, d.total, "quit-drill", "drill")}
        <div class="card lg drill-card">
          <span class="eyebrow">${drillLabel(d.kind)}</span>
          <div class="drill-prompt">${q.prompt}</div>
          <input type="text" class="cloze-input" id="drill-input" placeholder="${escape(typeHint("type your answer…"))}" autocomplete="off" autocapitalize="none" />
          <div class="row" style="gap: 10px">
            <button class="btn" id="drill-skip" style="flex: 0">Skip</button>
            <button class="btn primary" id="drill-check" style="flex: 1; justify-content: center">Check</button>
          </div>
          <div id="drill-feedback"></div>
        </div>
      </div>
    `);
    const inp = $("#drill-input", wrap);
    const checkBtn = $("#drill-check", wrap);
    const skipBtn = $("#drill-skip", wrap);
    setTimeout(() => inp.focus(), 30);

    let answered = false;
    function submit(treatAsWrong) {
      if (answered) {
        // already showed feedback — Enter advances
        nextOrFinish();
        return;
      }
      answered = true;
      const userInput = treatAsWrong ? "" : inp.value;
      const ok = !treatAsWrong && Drills.check(d, userInput);
      inp.classList.add(ok ? "correct" : "incorrect");
      inp.disabled = true;
      const fb = $("#drill-feedback", wrap);
      const diag = !ok && !treatAsWrong ? Drills.diagnoseError(q.answer, userInput) : null;
      fb.innerHTML = `
        <div class="feedback ${ok ? "correct" : "incorrect"}">
          ${ok ? "Correct." : `Answer: <strong class="nl-text">${escape(q.answer)}</strong>`}
          ${treatAsWrong ? " (skipped)" : ""}
        </div>
        ${diag ? `<div class="metaling-tip"><span class="chip accent">${escape(diag.tag)}</span> ${diag.note}</div>` : ""}
        ${q.kind === "number" || q.kind === "time"
          ? `<button class="btn audio voice-action full" data-hear style="margin-top:8px">${iconSound()} Hear it</button>`
          : ""}
        <div style="margin-top:6px"><button class="btn primary full" id="drill-next">Next ${arrowFwd()}</button></div>
      `;
      checkBtn.disabled = true;
      skipBtn.disabled = true;
      const hearBtn = fb.querySelector("[data-hear]");
      if (hearBtn) hearBtn.addEventListener("click", () => Speech.speak(q.answer, { lang: Lang.cfg().langCode, rate: 0.85 }));
      // Auto-pronounce
      Speech.speak(q.answer, { lang: Lang.cfg().langCode, rate: 0.9 });
      $("#drill-next", fb).addEventListener("click", nextOrFinish);
      $("#drill-next", fb).focus();
    }
    function nextOrFinish() {
      const done = Drills.advance(d);
      if (done) finishDrill();
      else render();
    }
    checkBtn.addEventListener("click", () => submit(false));
    skipBtn.addEventListener("click", () => submit(true));
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); submit(false); }
    });
    $("#quit-drill", wrap).addEventListener("click", () => {
      endDrill();
    });
    return wrap;
  }

  function drillLabel(kind) {
    const L = Lang.cfg().name;
    return ({
      number: `Numbers · type ${L}`,
      time: `Times · type ${L}`,
      conjugation: "Conjugation · type the form",
      chunk: `Chunks · type ${L}`,
      speaking: `Speaking · say it in ${L}`,
      shadow: "Shadowing · repeat after the voice",
      minpair: "Minimal pairs · which did you hear?",
    })[kind] || kind;
  }

  function endDrill() {
    const d = currentDrill;
    confirmEnd(d ? d.idx : 0, "drill", "Your score for this drill won't be kept.", () => { currentDrill = null; navigate("home"); });
  }

  function finishDrill() {
    currentView = "drill-summary";
    render();
  }

  function renderDrillSummary() {
    const d = currentDrill || { correct: 0, total: 0, wrongAnswers: [] };
    const pct = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
    const wrap = el(`
      <div class="view stack">
        <div class="hero" style="text-align:center">
          <div style="font-size:3rem; margin-bottom:8px;">${pct >= 80 ? "🔥" : pct >= 50 ? "👍" : "💪"}</div>
          <h1 style="margin-bottom:4px">${d.correct}/${d.total} · ${pct}%</h1>
          <p class="muted">${drillLabel(d.kind)}</p>
        </div>
        ${d.wrongAnswers && d.wrongAnswers.length ? `
          <article class="card">
            <span class="eyebrow">Things to revisit</span>
            <h3 style="margin: 6px 0 12px">${d.wrongAnswers.length} miss${d.wrongAnswers.length === 1 ? "" : "es"}</h3>
            <div class="stack-sm" id="wrong-list"></div>
          </article>
        ` : ""}
        <div class="row" style="gap:10px">
          <button class="btn full" id="drill-back">Home</button>
          <button class="btn primary full" id="drill-again">Another round</button>
        </div>
      </div>
    `);
    if (d.wrongAnswers && d.wrongAnswers.length) {
      const list = $("#wrong-list", wrap);
      d.wrongAnswers.forEach((w) => {
        const item = el(`
          <div class="card" style="background: var(--surface-2); padding: 12px 14px;">
            <div class="row spread" style="align-items: flex-start; gap: 10px;">
              <div style="flex:1; min-width:0">
                <div class="muted" style="font-size:0.75rem">${w.q.hint || ""}</div>
                <div class="nl-text" style="font-size: 1.0625rem;">${escape(w.q.answer)}</div>
                ${w.gave ? `<div class="muted" style="font-size:0.8125rem; margin-top:4px">you said: <s>${escape(w.gave)}</s></div>` : ""}
              </div>
              <button class="voice-btn" data-speak aria-label="Hear it">${iconSound()}</button>
            </div>
          </div>
        `);
        item.querySelector("[data-speak]").addEventListener("click", () => Speech.speak(w.q.answer, { lang: Lang.cfg().langCode, rate: 0.85 }));
        list.appendChild(item);
      });
    }
    $("#drill-back", wrap).addEventListener("click", () => { currentDrill = null; navigate("home"); });
    $("#drill-again", wrap).addEventListener("click", () => {
      const kind = d.kind;
      currentDrill = null;
      startDrill(kind);
    });
    return wrap;
  }

  // ----- Speaking drill -----
  // Pulls 8 short Dutch sentences from the existing corpus and asks the user
  // to say each one. Recorded audio is sent to mlx-audio's Whisper endpoint
  // for transcription, then word-level edit distance grades the attempt.
  function makeSpeakingDrill() {
    // Pick short, common phrases (ordering, greetings, daily phrases)
    const pool = window.SENTENCES.filter((s) =>
      s.theme === "phrases" || s.theme === "ordering" || s.theme === "negation"
    );
    // Shuffle and take 8
    const queue = shuffle(pool).slice(0, 8).map((s) => ({
      kind: "speaking",
      sentenceId: s.id,
      prompt: s.en,
      answer: s.nl,
      hint: s.en,
    }));
    return { kind: "speaking", total: queue.length, queue, idx: 0, correct: 0, wrongAnswers: [] };
  }

  function levenshteinWords(a, b) {
    const A = a.split(/\s+/), B = b.split(/\s+/);
    const dp = Array.from({ length: A.length + 1 }, () => new Array(B.length + 1).fill(0));
    for (let i = 0; i <= A.length; i++) dp[i][0] = i;
    for (let j = 0; j <= B.length; j++) dp[0][j] = j;
    for (let i = 1; i <= A.length; i++) {
      for (let j = 1; j <= B.length; j++) {
        dp[i][j] = A[i - 1] === B[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      }
    }
    return { dist: dp[A.length][B.length], maxLen: Math.max(A.length, B.length) };
  }

  function gradeSpeaking(target, heard) {
    const t = Drills.normalize(target);
    const h = Drills.normalize(heard);
    if (!h) return { score: 0, accuracy: 0, label: "no audio" };
    const { dist, maxLen } = levenshteinWords(t, h);
    const acc = maxLen === 0 ? 0 : 1 - dist / maxLen;
    let score, label;
    if (t === h)        { score = 5; label = "perfect"; }
    else if (acc >= 0.85){ score = 4; label = "very close"; }
    else if (acc >= 0.6) { score = 3; label = "mostly there"; }
    else if (acc >= 0.3) { score = 2; label = "rough — try again"; }
    else                 { score = 0; label = "miss"; }
    return { score, accuracy: acc, label };
  }

  function renderSpeakingQuestion() {
    const d = currentDrill;
    const q = d.queue[d.idx];
    const pct = (d.idx / d.total) * 100;

    const wrap = el(`
      <div class="view view-drill">
        ${focusBar(d.idx, d.total, "quit-drill", "drill")}
        <div class="card lg drill-card">
          <span class="eyebrow">Speaking · say it in ${Lang.cfg().name}</span>
          <div class="speaking-prompt">${escape(q.prompt)}</div>
          <div class="muted" style="font-size: 0.8125rem;">Tap the mic, say it aloud, then stop.</div>
          <div class="speaking-controls">
            <button class="btn primary lg" id="rec-toggle" aria-label="Record">
              <span id="rec-icon">●</span>
              <span id="rec-label">Tap to record</span>
            </button>
            <button class="btn audio voice-action" id="rec-listen">${iconSound()} Hear answer</button>
          </div>
          <div id="rec-status" class="muted" style="font-size: 0.8125rem; min-height: 20px;"></div>
          <div id="rec-feedback"></div>
        </div>
      </div>
    `);

    const recBtn = $("#rec-toggle", wrap);
    const recIcon = $("#rec-icon", wrap);
    const recLabel = $("#rec-label", wrap);
    const status = $("#rec-status", wrap);
    let mediaRecorder = null, chunks = [], stream = null, recording = false;

    $("#rec-listen", wrap).addEventListener("click", () => {
      Speech.speak(q.answer, { lang: Lang.cfg().langCode, rate: 0.85 });
    });

    async function startRecording() {
      if (!Speech.recordingSupported()) {
        toast("This browser doesn't support audio recording.");
        return;
      }
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (e) {
        toast("Microphone permission denied.");
        return;
      }
      // Pick a supported mime type (Safari: mp4, not webm)
      mediaRecorder = new MediaRecorder(stream, Speech.recorderOptions());
      chunks = [];
      mediaRecorder.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
      mediaRecorder.onstop = onRecordingDone;
      mediaRecorder.start();
      recording = true;
      recBtn.classList.add("is-recording");
      recIcon.textContent = "■";
      recLabel.textContent = "Stop";
      status.textContent = "Recording… speak now.";
      // safety stop after 8 seconds
      setTimeout(() => { if (recording) stopRecording(); }, 8000);
    }
    function stopRecording() {
      if (!mediaRecorder || mediaRecorder.state === "inactive") return;
      mediaRecorder.stop();
      stream.getTracks().forEach((t) => t.stop());
      recording = false;
      recBtn.disabled = true;
      recIcon.textContent = "…";
      recLabel.textContent = "Transcribing…";
      status.textContent = "Checking what you said…";
    }
    async function onRecordingDone() {
      const blob = new Blob(chunks, { type: chunks[0]?.type || (mediaRecorder && mediaRecorder.mimeType) || "audio/webm" });
      try {
        const heard = await Speech.transcribe(blob, { lang: Lang.active() });
        const grade = gradeSpeaking(q.answer, heard);
        showFeedback(heard, grade);
      } catch (e) {
        console.error(e);
        status.textContent = "Couldn't check that recording. Try again, or play the answer and compare.";
        recBtn.disabled = false;
        recIcon.textContent = "●";
        recLabel.textContent = "Try again";
      }
    }
    function showFeedback(heard, grade) {
      const ok = grade.score >= 4;
      if (ok) currentDrill.correct += 1;
      else currentDrill.wrongAnswers.push({ q, gave: heard });
      status.textContent = "";
      const fb = $("#rec-feedback", wrap);
      // Output-prompted noticing (Swain/Schmidt): when accuracy is low,
      // ask what felt hard. The explicit reflection is what triggers
      // acquisition, not the score itself.
      const showNoticing = !ok && grade.accuracy >= 0.1;
      fb.innerHTML = `
        <div class="feedback ${ok ? "correct" : "incorrect"}">
          <strong>${grade.label}</strong> · ${Math.round(grade.accuracy * 100)}% match
        </div>
        <div class="speaking-compare">
          <div><span class="speaking-tag">target</span> <span class="nl-text">${escape(q.answer)}</span></div>
          <div><span class="speaking-tag">heard</span> ${escape(heard) || "<em>nothing</em>"}</div>
        </div>
        ${showNoticing ? `
          <div class="noticing-box">
            <div class="muted" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">What felt hard?</div>
            <div class="noticing-chips">
              <button class="chip noticing-chip" data-tag="word-order">word order</button>
              <button class="chip noticing-chip" data-tag="pronunciation">pronunciation</button>
              <button class="chip noticing-chip" data-tag="vocabulary">vocabulary</button>
              <button class="chip noticing-chip" data-tag="verb-form">verb form</button>
              <button class="chip noticing-chip" data-tag="speed">spoke too fast</button>
              <button class="chip noticing-chip" data-tag="other">other</button>
            </div>
          </div>
        ` : ""}
        <div class="row" style="gap:8px; margin-top: 12px;">
          <button class="btn" id="speak-retry" style="flex:0">Retry</button>
          <button class="btn primary" id="speak-next" style="flex:1; justify-content: center">Next ${arrowFwd()}</button>
        </div>
      `;
      Speech.speak(q.answer, { lang: Lang.cfg().langCode, rate: 0.85 });
      // Wire noticing chips: clicking one logs to the wrong-answer entry.
      $$(".noticing-chip", fb).forEach((chip) => {
        chip.addEventListener("click", () => {
          const tag = chip.dataset.tag;
          $$(".noticing-chip", fb).forEach((c) => c.classList.remove("is-selected"));
          chip.classList.add("is-selected");
          // attach to the just-pushed wrong answer
          const last = currentDrill.wrongAnswers[currentDrill.wrongAnswers.length - 1];
          if (last) last.noticed = tag;
        });
      });
      $("#speak-retry", fb).addEventListener("click", () => {
        if (!ok && currentDrill.wrongAnswers.length) currentDrill.wrongAnswers.pop();
        render();
      });
      $("#speak-next", fb).addEventListener("click", () => {
        const done = Drills.advance(currentDrill);
        if (done) finishDrill();
        else render();
      });
    }

    recBtn.addEventListener("click", () => {
      if (recording) stopRecording();
      else startRecording();
    });
    $("#quit-drill", wrap).addEventListener("click", () => {
      if (recording && stream) stream.getTracks().forEach((t) => t.stop());
      endDrill();
    });

    // Probe: warn if MLX server isn't running
    Speech.probeMlx().then((ok) => {
      if (!ok) status.textContent = "Record yourself, then play the answer and compare.";
    });

    return wrap;
  }

  // ----- Shadowing drill -----
  // Plays the target NL audio first, then records the user shadowing it,
  // transcribes, and grades on word-match. Same scoring engine as speaking
  // but with auto-play first so the user has a model to copy.
  function makeShadowDrill() {
    const pool = window.SENTENCES.filter((s) =>
      s.theme === "phrases" || s.theme === "ordering" || s.theme === "transport" || s.theme === "work"
    );
    const queue = shuffle(pool).slice(0, 8).map((s) => ({
      kind: "shadow",
      sentenceId: s.id,
      prompt: s.en,
      answer: s.nl,
      hint: s.en,
    }));
    return { kind: "shadow", total: queue.length, queue, idx: 0, correct: 0, wrongAnswers: [] };
  }

  function renderShadowQuestion() {
    const d = currentDrill;
    const q = d.queue[d.idx];
    const pct = (d.idx / d.total) * 100;
    const wrap = el(`
      <div class="view view-drill">
        ${focusBar(d.idx, d.total, "quit-drill", "drill")}
        <div class="card lg drill-card">
          <span class="eyebrow">Shadowing · listen, then echo it back</span>
          <div class="speaking-prompt nl-text">${escape(q.answer)}</div>
          <div class="muted" style="font-size: 0.8125rem;">${escape(q.prompt)}</div>
          <div class="speaking-controls">
            <button class="btn primary lg" id="rec-toggle" aria-label="Listen, then shadow">
              <span id="rec-icon">${iconSound()}</span>
              <span id="rec-label">Hear it, then shadow</span>
            </button>
            <button class="btn audio voice-action" id="rec-listen-only">${iconSound()} Hear again</button>
          </div>
          <div id="rec-status" class="muted" style="font-size: 0.8125rem; min-height: 20px;"></div>
          <div id="rec-feedback"></div>
        </div>
      </div>
    `);

    const recBtn = $("#rec-toggle", wrap);
    const recIcon = $("#rec-icon", wrap);
    const recLabel = $("#rec-label", wrap);
    const status = $("#rec-status", wrap);
    let stage = "ready";   // 'ready' → 'playing' → 'recording' → 'done'
    let mediaRecorder = null, chunks = [], stream = null;

    $("#rec-listen-only", wrap).addEventListener("click", () => {
      Speech.speak(q.answer, { lang: Lang.cfg().langCode, rate: state.settings.prefRate });
    });

    async function playThenRecord() {
      stage = "playing";
      recBtn.disabled = true;
      recIcon.innerHTML = iconSound();
      recLabel.textContent = "Playing target…";
      status.textContent = "Listen carefully — recording starts when audio ends.";
      Speech.speak(q.answer, {
        lang: Lang.cfg().langCode,
        rate: state.settings.prefRate,
        onend: async () => {
          // Then record
          if (!Speech.recordingSupported()) {
            toast("This browser doesn't support audio recording.");
            stage = "ready"; recBtn.disabled = false; return;
          }
          try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
          catch { toast("Microphone permission denied."); stage = "ready"; recBtn.disabled = false; return; }
          mediaRecorder = new MediaRecorder(stream, Speech.recorderOptions());
          chunks = [];
          mediaRecorder.ondataavailable = (e) => { if (e.data?.size) chunks.push(e.data); };
          mediaRecorder.onstop = onDone;
          mediaRecorder.start();
          stage = "recording";
          recBtn.disabled = false;
          recBtn.classList.add("is-recording");
          recIcon.textContent = "■";
          recLabel.textContent = "Stop";
          status.textContent = "Now repeat what you heard…";
          // Safety stop after 8s
          setTimeout(() => { if (stage === "recording") stopRec(); }, 8000);
        },
      });
    }
    function stopRec() {
      if (!mediaRecorder || mediaRecorder.state === "inactive") return;
      mediaRecorder.stop();
      stream.getTracks().forEach((t) => t.stop());
      stage = "transcribing";
      recBtn.disabled = true;
      recIcon.textContent = "…";
      recLabel.textContent = "Transcribing…";
      status.textContent = "";
    }
    async function onDone() {
      const blob = new Blob(chunks, { type: chunks[0]?.type || (mediaRecorder && mediaRecorder.mimeType) || "audio/webm" });
      try {
        const heard = await Speech.transcribe(blob, { lang: Lang.active() });
        const grade = gradeSpeaking(q.answer, heard);
        showFeedback(heard, grade);
      } catch (e) {
        status.textContent = "Couldn't check that recording. Try again, or play the answer and compare.";
        stage = "ready"; recBtn.disabled = false;
        recIcon.innerHTML = iconSound(); recLabel.textContent = "Hear it, then shadow";
      }
    }
    function showFeedback(heard, grade) {
      const ok = grade.score >= 4;
      if (ok) currentDrill.correct += 1;
      else currentDrill.wrongAnswers.push({ q, gave: heard });
      const fb = $("#rec-feedback", wrap);
      fb.innerHTML = `
        <div class="feedback ${ok ? "correct" : "incorrect"}">
          <strong>${grade.label}</strong> · ${Math.round(grade.accuracy * 100)}% match
        </div>
        <div class="speaking-compare">
          <div><span class="speaking-tag">target</span> <span class="nl-text">${escape(q.answer)}</span></div>
          <div><span class="speaking-tag">heard</span> ${escape(heard) || "<em>nothing</em>"}</div>
        </div>
        <div class="row" style="gap:8px; margin-top:12px">
          <button class="btn" id="shadow-retry" style="flex:0">Retry</button>
          <button class="btn primary" id="shadow-next" style="flex:1; justify-content:center">Next ${arrowFwd()}</button>
        </div>
      `;
      Speech.speak(q.answer, { lang: Lang.cfg().langCode, rate: state.settings.prefRate });
      $("#shadow-retry", fb).addEventListener("click", () => {
        if (!ok && currentDrill.wrongAnswers.length) currentDrill.wrongAnswers.pop();
        if (ok) currentDrill.correct -= 1;
        render();
      });
      $("#shadow-next", fb).addEventListener("click", () => {
        const done = Drills.advance(currentDrill);
        if (done) finishDrill(); else render();
      });
    }

    recBtn.addEventListener("click", () => {
      if (stage === "ready") playThenRecord();
      else if (stage === "recording") stopRec();
    });
    $("#quit-drill", wrap).addEventListener("click", () => {
      if (stream) stream.getTracks().forEach((t) => t.stop());
      endDrill();
    });
    Speech.probeMlx().then((ok) => {
      if (!ok) status.textContent = "Repeat after the voice, then play it again and compare.";
    });
    return wrap;
  }

  // ----- Minimal-pair perception drill -----
  // Plays one of two near-identical NL words, user picks which they heard.
  // No typing, no speaking — pure ear training (high-variability phonetic
  // training, HVPT). The TTS server pronounces the chosen word for each side.
  function renderMinPairQuestion() {
    const d = currentDrill;
    const q = d.queue[d.idx];
    const pct = (d.idx / d.total) * 100;
    const heard = q.pair[q.which];
    const other = q.pair[q.which === "a" ? "b" : "a"];
    // Randomise display order so position can't be the cue
    const left  = Math.random() < 0.5 ? heard : other;
    const right = left === heard ? other : heard;

    const wrap = el(`
      <div class="view view-drill">
        ${focusBar(d.idx, d.total, "quit-drill", "drill")}
        <div class="card lg drill-card">
          <span class="eyebrow">Minimal pairs · which did you hear?</span>
          <div class="drill-chip-row"><span class="chip">Contrast: ${escape(q.hint)}</span></div>
          <button class="btn audio voice-action" id="play-pair" style="align-self:flex-start">${iconSound()} Play</button>
          <div class="minpair-grid">
            <button class="minpair-choice" data-side="left">
              <span class="nl-text">${escape(left.nl)}</span>
              <span class="muted" style="font-size: 0.8125rem;">${escape(left.en)}</span>
            </button>
            <button class="minpair-choice" data-side="right">
              <span class="nl-text">${escape(right.nl)}</span>
              <span class="muted" style="font-size: 0.8125rem;">${escape(right.en)}</span>
            </button>
          </div>
          <div id="minpair-feedback"></div>
        </div>
      </div>
    `);
    let played = false;
    const playBtn = $("#play-pair", wrap);
    function playOnce() {
      played = true;
      Speech.speak(heard.nl, { lang: Lang.cfg().langCode, rate: state.settings.prefRate });
    }
    playBtn.addEventListener("click", playOnce);
    setTimeout(playOnce, 250);

    $$(".minpair-choice", wrap).forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!played) { playOnce(); return; }
        const chosen = btn.dataset.side === "left" ? left : right;
        const ok = chosen.nl === heard.nl;
        if (ok) currentDrill.correct += 1;
        else currentDrill.wrongAnswers.push({ q: { ...q, answer: heard.nl, hint: q.hint }, gave: chosen.nl });
        $$(".minpair-choice", wrap).forEach((b) => {
          b.disabled = true;
          const isHeard = (b.dataset.side === "left" ? left : right).nl === heard.nl;
          if (b === btn) b.classList.add(ok ? "correct" : "incorrect");
          if (isHeard && b !== btn) b.classList.add("correct");
          if (!isHeard && b !== btn) b.classList.add("dim");
        });
        const fb = $("#minpair-feedback", wrap);
        fb.innerHTML = `
          <div class="feedback ${ok ? "correct" : "incorrect"}">
            ${ok ? "Spot on." : `You heard: <strong class="nl-text">${escape(heard.nl)}</strong> — ${escape(heard.en)}`}
          </div>
          <button class="btn primary full" id="mp-next" style="margin-top: 10px">Next ${arrowFwd()}</button>
        `;
        $("#mp-next", fb).addEventListener("click", () => {
          const done = Drills.advance(currentDrill);
          if (done) finishDrill(); else render();
        });
      });
    });
    $("#quit-drill", wrap).addEventListener("click", () => {
      endDrill();
    });
    return wrap;
  }

  /* ============ SUMMARY (after session) ============ */
  function renderSummary() {
    const s = currentSession || {};
    const accuracy = s.reviewed ? Math.round((s.correct / s.reviewed) * 100) : 0;
    // Backup nudge at session end: if it's been a week since last export
    // AND the user has data, gently surface the option here.
    const days = Store.daysSinceExport(state);
    const stale = (days >= 14) && (state.sessions || []).length >= 3;
    const wrap = el(`
      <div class="view stack">
        <div class="hero" style="text-align:center">
          <div style="font-size:3rem; margin-bottom:8px;">🎉</div>
          <h1 style="margin-bottom:4px;">${Lang.cfg().doneHeading}</h1>
          <p class="muted">You finished the session. ${Goals.consistencyLine(state, todayISO())}</p>
        </div>
        <div class="grid-2">
          <div class="stat">
            <span class="stat-label">Reviewed</span>
            <span class="stat-value">${s.reviewed || 0}</span>
            <span class="stat-sub">cards this session</span>
          </div>
          <div class="stat">
            <span class="stat-label">Accuracy</span>
            <span class="stat-value">${accuracy}%</span>
            <span class="stat-sub">good or better</span>
          </div>
        </div>
        ${stale ? `
          <div class="backup-banner">
            <div class="backup-banner-text">
              <strong>Save your progress.</strong> ${days === Infinity ? "You haven't backed up yet." : `No backup in ${Math.floor(days)} days.`}
            </div>
            <button class="btn" id="summary-backup">Back up</button>
          </div>` : ""}
        <article class="card summary-next">
          <span class="eyebrow">${state.sessions.length <= 1 ? "Nice start" : "What next?"}</span>
          <p style="margin:6px 0 10px">${state.sessions.length <= 1
            ? "Your cards will come back right when you're about to forget them. If you have a few minutes left, try one of these. Otherwise, see you tomorrow."
            : "If you have a few minutes left, a drill or a short read rounds off the day."}</p>
          <div class="row" style="gap:8px; flex-wrap:wrap">
            <button class="btn" id="next-drill">Try a quick drill</button>
            ${(window.PASSAGES || []).length ? `<button class="btn" id="next-read">Read a short passage</button>` : ""}
          </div>
        </article>
        <div class="row" style="gap:10px">
          <button class="btn full" id="back-home">Home</button>
          <button class="btn primary full" id="another">Another session</button>
        </div>
      </div>
    `);
    $("#next-drill", wrap).addEventListener("click", () => { currentSession = null; startDrill("chunk"); });
    const nr = $("#next-read", wrap);
    if (nr) nr.addEventListener("click", () => { currentSession = null; nav.passageBack = "home"; nav.passageId = nextPassage().id; navigate("passage"); });
    $("#back-home", wrap).addEventListener("click", () => { currentSession = null; navigate("home"); });
    $("#another", wrap).addEventListener("click", () => { currentSession = null; startSession(); });
    const sb = $("#summary-backup", wrap);
    if (sb) sb.addEventListener("click", () => {
      Store.downloadBackup(state, Lang.cfg().backupPrefix);
      persist();
      sb.textContent = "Saved ✓";
      sb.disabled = true;
    });
    return wrap;
  }

  /* ============ BROWSE ============ */
  const BROWSE_SHOW = 6;   // long lists show this many, then "Show all N"
  function renderBrowse() {
    const hasPron = !!pronGuide();
    const read = state.passagesRead || {};
    const sections = [
      hasPron ? ["sounds", "Sounds"] : null,
      ["words", "Words"], ["sentences", "Sentences"], ["dialogues", "Dialogues"], ["grammar", "Grammar"],
      (window.PASSAGES || []).length ? ["reading", "Reading"] : null,
    ].filter(Boolean);

    const wrap = el(`
      <div class="view view-browse">
        ${pageHeader({ title: "Browse", lead: "Pick a category to learn or revisit." })}
        <nav class="jump-bar" aria-label="Jump to section">
          ${sections.map(([id, label]) => `<button type="button" class="jump-chip" data-jump="${id}">${label}</button>`).join("")}
        </nav>

        ${hasPron ? `<section class="browse-sec" id="sec-sounds" data-sec="sounds" aria-labelledby="h-sounds">
          <div class="section-header"><h2 id="h-sounds">Sounds</h2></div>
          <div class="stack-sm browse-pron" id="browse-pron"></div>
        </section>` : ""}

        <section class="browse-sec" id="sec-words" data-sec="words" aria-labelledby="h-words">
          <div class="section-header"><h2 id="h-words">Words</h2><span class="muted sec-count">${VOCAB_THEMES.length} themes</span></div>
          <div class="grid-2 browse-vocab" id="theme-grid"></div>
        </section>

        <section class="browse-sec" id="sec-sentences" data-sec="sentences" aria-labelledby="h-sentences">
          <div class="section-header"><h2 id="h-sentences">Sentence patterns</h2><span class="muted sec-count">${SENTENCE_THEMES.length}</span></div>
          <div class="stack-sm browse-list" id="sentence-themes"></div>
        </section>

        <section class="browse-sec" id="sec-dialogues" data-sec="dialogues" aria-labelledby="h-dialogues">
          <div class="section-header"><h2 id="h-dialogues">Scenario dialogues</h2><span class="muted sec-count">${SCENARIOS.length}</span></div>
          <div class="stack-sm browse-list" id="scenario-list"></div>
        </section>

        <section class="browse-sec" id="sec-grammar" data-sec="grammar" aria-labelledby="h-grammar">
          <div class="section-header"><h2 id="h-grammar">Grammar capsules</h2><span class="muted sec-count">${GRAMMAR.length}</span></div>
          <div class="stack-sm browse-list" id="grammar-list"></div>
        </section>

        ${(window.PASSAGES || []).length ? `<section class="browse-sec" id="sec-reading" data-sec="reading" aria-labelledby="h-reading">
          <div class="section-header"><h2 id="h-reading">Reading</h2><span class="muted sec-count">${window.PASSAGES.length} passages</span></div>
          <p class="muted" style="margin:-4px 0 12px">Tap any word for its translation. Aim for the gist, not every word.</p>
          <div class="stack-sm browse-list passage-list" id="passage-list"></div>
        </section>` : ""}
      </div>
    `);

    const pronItem = pronLinkItem();
    if (pronItem && hasPron) $("#browse-pron", wrap).appendChild(pronItem);

    // Themes
    const themeGrid = $("#theme-grid", wrap);
    VOCAB_THEMES.forEach((t) => {
      const items = VOCAB.filter((v) => v.theme === t.id);
      const counts = SRS.counts(items.map((i) => i.id), state.cards);
      const learned = counts.young + counts.mature;
      const btn = el(`
        <button class="list-item">
          <span class="li-icon" aria-hidden="true">${t.icon}</span>
          <div class="li-main">
            <div class="li-title">${escape(t.name)}</div>
            <div class="li-sub">${learned}/${items.length} learned</div>
          </div>
          <span class="li-arrow" aria-hidden="true">→</span>
        </button>
      `);
      btn.addEventListener("click", () => {
        nav.theme = { kind: "vocab", themeId: t.id };
        navigate("theme");
      });
      themeGrid.appendChild(btn);
    });

    // Sentence themes
    const sentList = $("#sentence-themes", wrap);
    SENTENCE_THEMES.forEach((t) => {
      const btn = el(`
        <button class="list-item">
          <span class="li-icon" aria-hidden="true">${t.icon}</span>
          <div class="li-main">
            <div class="li-title">${escape(t.name)}</div>
            <div class="li-sub">${escape(t.blurb)}</div>
          </div>
          <span class="li-arrow" aria-hidden="true">→</span>
        </button>
      `);
      btn.addEventListener("click", () => {
        nav.theme = { kind: "sentence", themeId: t.id };
        navigate("theme");
      });
      sentList.appendChild(btn);
    });

    // Scenarios
    const scList = $("#scenario-list", wrap);
    SCENARIOS.forEach((s) => {
      const btn = el(`
        <button class="list-item">
          <span class="li-icon" aria-hidden="true">${s.icon || "📍"}</span>
          <div class="li-main">
            <div class="li-title">${escape(s.title)}</div>
            <div class="li-sub">${s.dialogue.length} lines</div>
          </div>
          <span class="li-arrow" aria-hidden="true">→</span>
        </button>
      `);
      btn.addEventListener("click", () => {
        nav.scenarioId = s.id;
        navigate("scenario");
      });
      scList.appendChild(btn);
    });

    // Grammar
    const grList = $("#grammar-list", wrap);
    GRAMMAR.forEach((g) => {
      const btn = el(`
        <button class="list-item">
          <div class="li-main">
            <div class="li-title">${escape(g.title)}</div>
            <div class="li-sub">${escape(g.blurb)}</div>
          </div>
          <span class="li-arrow" aria-hidden="true">→</span>
        </button>
      `);
      btn.addEventListener("click", () => {
        nav.grammarId = g.id;
        navigate("grammar-detail");
      });
      grList.appendChild(btn);
    });

    // Reading (moved here from Home)
    const pList = $("#passage-list", wrap);
    if (pList) (window.PASSAGES || []).forEach((p) => {
      const item = el(`
        <button class="passage-item" data-pid="${p.id}" type="button">
          <span class="passage-level">${escape(p.level)}</span>
          <div class="passage-meta">
            <div class="passage-title">${escape(p.title)}</div>
            <div class="passage-blurb">${escape(p.blurb)}</div>
          </div>
          ${read[p.id] ? `<span class="chip success">Read</span>` : ""}
          <span class="li-arrow" aria-hidden="true">→</span>
        </button>
      `);
      item.addEventListener("click", () => openPassage(p.id));
      pList.appendChild(item);
    });

    // Long lists: first few, then "Show all N" (state kept for the session).
    nav.browseOpen = nav.browseOpen || {};
    [["sentences", "#sentence-themes"], ["dialogues", "#scenario-list"], ["grammar", "#grammar-list"], ["reading", "#passage-list"]].forEach(([key, sel]) => {
      const list = $(sel, wrap);
      if (!list) return;
      const items = Array.from(list.children);
      if (items.length <= BROWSE_SHOW + 1) return;
      if (!list.id) list.id = "list-" + key;
      const btn = el(`<button type="button" class="btn show-more" aria-expanded="false" aria-controls="${list.id}"></button>`);
      const paint = () => {
        const open = !!nav.browseOpen[key];
        items.forEach((it, i) => { it.hidden = !open && i >= BROWSE_SHOW; });
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        btn.textContent = open ? "Show fewer" : `Show all ${items.length}`;
      };
      btn.addEventListener("click", () => { nav.browseOpen[key] = !nav.browseOpen[key]; paint(); });
      paint();
      list.after(btn);
    });

    // Jump bar: chips scroll to a section; the chip of the section being read stays highlighted.
    const chips = $$(".jump-chip", wrap);
    const reduce = reducedMotion();
    const setActive = (id) => chips.forEach((c) => {
      const on = c.dataset.jump === id;
      c.classList.toggle("is-active", on);
      if (on) { c.setAttribute("aria-current", "true"); const bar = c.parentElement; if (bar.scrollWidth > bar.clientWidth) bar.scrollTo({ left: c.offsetLeft - 16, behavior: "auto" }); }
      else c.removeAttribute("aria-current");
    });
    const jumpTo = (id, smooth) => {
      const t = $(`#sec-${id}`, wrap);
      if (t) t.scrollIntoView({ behavior: smooth && !reduce ? "smooth" : "auto", block: "start" });
    };
    chips.forEach((c) => c.addEventListener("click", () => { setActive(c.dataset.jump); jumpTo(c.dataset.jump, true); }));
    if (chips.length) setActive(chips[0].dataset.jump);
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        if (!wrap.isConnected) { io.disconnect(); return; }
        entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.dataset.sec); });
      }, { rootMargin: "-25% 0px -65% 0px" });
      $$("[data-sec]", wrap).forEach((s) => io.observe(s));
    }
    if (nav.browseJump) {
      const id = nav.browseJump;
      nav.browseJump = null;
      setTimeout(() => { setActive(id); jumpTo(id, false); }, 0);
    }

    return wrap;
  }

  function renderThemeDetail(active) {
    if (!active) { navigate("browse"); return el(`<div></div>`); }
    if (active.kind === "vocab") {
      const t = VOCAB_THEMES.find((x) => x.id === active.themeId);
      const items = VOCAB.filter((v) => v.theme === active.themeId);
      // The theme may not exist in the active language (e.g. a German-only
      // category after switching languages) — fall back to Browse.
      if (!t || items.length === 0) { navigate("browse"); return el(`<div></div>`); }
      const wrap = el(`
        <div class="view stack">
          ${pageHeader({ back: true, eyebrow: "Vocabulary theme", title: t.name, lead: `${items.length} cards. Tap a speaker to hear a word or its example.`,
            actions: `<div class="theme-actions">
              <button class="btn primary" id="study-theme">Study this theme</button>
              <button class="btn" id="challenge-theme" title="Test yourself before studying — even failed pretests boost later retention">Challenge me · 5</button>
            </div>` })}
          <div class="stack-sm" id="vocab-list"></div>
        </div>
      `);
      const list = $("#vocab-list", wrap);
      items.forEach((v) => {
        const st = state.cards[v.id];
        const m = SRS.maturity(st);
        const item = el(`
          <div class="list-item vocab-item">
            <div class="vocab-top">
              <div class="vocab-word-text">
                <span class="li-title nl-text">${v.gender ? `<span class="vocab-gender">${v.gender}</span> ` : ""}${escape(v.nl)}</span>
                <span class="li-sub">${escape(v.en)}</span>
              </div>
              <span class="chip ${m === "mature" ? "success" : m === "young" ? "primary" : ""}">${({ mature: "well known", young: "getting there", learning: "learning", new: "new" })[m] || m}</span>
              <button class="voice-btn" data-speak-nl="${escape(v.nl)}" aria-label="Hear ${escape(v.nl)}">${iconSound()}</button>
            </div>
            ${v.example ? `
              <div class="vocab-ex">
                <span class="nl-text vocab-ex-nl">${escape(v.example.nl)}</span>
                <button class="voice-btn" data-speak-nl="${escape(v.example.nl)}" aria-label="Hear the example sentence">${iconSound()}</button>
              </div>` : ""}
          </div>
        `);
        wireSpeakButtons(item);
        list.appendChild(item);
      });
      $("#back", wrap).addEventListener("click", () => navigate("browse"));
      $("#study-theme", wrap).addEventListener("click", () => startThemeSession(items.map((i) => i.id)));
      $("#challenge-theme", wrap).addEventListener("click", () => startPretest(items.map((i) => i.id)));
      return wrap;
    } else {
      const t = SENTENCE_THEMES.find((x) => x.id === active.themeId);
      const items = SENTENCES.filter((s) => s.theme === active.themeId);
      if (!t || items.length === 0) { navigate("browse"); return el(`<div></div>`); }
      const wrap = el(`
        <div class="view stack">
          ${pageHeader({ back: true, eyebrow: "Sentence patterns", title: t.name, lead: t.blurb,
            actions: `<div class="theme-actions"><button class="btn primary" id="study-theme">Drill these patterns</button></div>` })}
          <div class="stack-sm" id="sent-list"></div>
        </div>
      `);
      const list = $("#sent-list", wrap);
      items.forEach((s) => {
        const item = el(`
          <article class="card">
            <div class="row spread" style="align-items:flex-start">
              <div style="flex:1">
                <div class="nl-text tl-sentence">${escape(s.nl)}</div>
                <div class="tl-gloss">${escape(s.en)}</div>
                ${s.pattern ? `<div class="ex-tag" style="margin-top:8px"><span class="chip">${escape(s.pattern)}</span></div>` : ""}
                ${s.reveals ? `<ul class="muted tl-notes">${s.reveals.map((r) => `<li>${escape(r)}</li>`).join("")}</ul>` : ""}
              </div>
              <button class="voice-btn" data-speak="${escape(s.nl)}" aria-label="Hear it">${iconSound()}</button>
            </div>
          </article>
        `);
        item.querySelector("[data-speak]").addEventListener("click", () => Speech.speak(s.nl, { rate: state.settings.prefRate }));
        list.appendChild(item);
      });
      $("#back", wrap).addEventListener("click", () => navigate("browse"));
      $("#study-theme", wrap).addEventListener("click", () => startThemeSession(items.map((i) => i.id)));
      return wrap;
    }
  }

  // Pretest / challenge mode: per Kornell's pretest effect, even failed
  // retrieval attempts on unfamiliar material BOOST subsequent learning.
  // We pick 5 unseen cards from a theme, force them into multiple-choice
  // mode (manageable for first contact), and run a quick round. The cards
  // still get logged in SRS — the pretest IS their first review.
  function startPretest(ids) {
    const unseen = ids.filter((id) => {
      const st = state.cards[id];
      return !st || st.reps === 0;
    });
    const batch = shuffle(unseen).slice(0, 5);
    if (batch.length === 0) {
      toast("No new cards in this theme — try regular study.");
      return;
    }
    currentSession = {
      queue: batch,
      index: 0,
      reviewed: 0,
      correct: 0,
      modes: batch.map(() => "choice"),  // pretest = multiple choice only
      cardStartMs: Date.now(),
      pretest: true,
    };
    navigate("study");
  }

  // "Nothing due. Learn 5 new words?": a short session of never-seen cards.
  function startNewWords(n) {
    const batch = SRS.pickBatch(allCardIds(), state.cards, { size: n, newRatio: 1 });
    if (batch.length === 0) { toast("You have met every card. Come back when reviews are due."); return; }
    currentSession = {
      queue: batch, index: 0, reviewed: 0, correct: 0,
      modes: batch.map((id) => pickMode(id)),
      cardStartMs: Date.now(),
    };
    navigate("study");
  }

  function startThemeSession(ids) {
    const batch = SRS.pickBatch(ids, state.cards, { size: Math.min(ids.length, 14), newRatio: 0.7 });
    if (batch.length === 0) {
      toast("Already learned. Re-study to reinforce.");
      currentSession = {
        queue: shuffle(ids).slice(0, 10),
        index: 0, reviewed: 0, correct: 0,
        modes: shuffle(ids).slice(0, 10).map((id) => pickMode(id)),
        cardStartMs: Date.now(),
      };
      navigate("study");
      return;
    }
    currentSession = {
      queue: batch, index: 0, reviewed: 0, correct: 0,
      modes: batch.map((id) => pickMode(id)),
      cardStartMs: Date.now(),
    };
    navigate("study");
  }

  function renderScenarioDetail(scId) {
    const s = SCENARIOS.find((x) => x.id === scId);
    if (!s) { navigate("browse"); return el(`<div></div>`); }
    state.seenScenarios[scId] = Date.now();
    persist();

    const wrap = el(`
      <div class="view stack">
        ${pageHeader({ back: true, eyebrow: "Dialogue", title: s.title, lead: s.setting,
          actions: `<button class="btn audio voice-action" id="play-all">${iconSound()} Play full dialogue</button>
            <button class="btn audio voice-action" id="narrow-listen" title="Same dialogue, 3 passes, alternating speakers">${iconSound()} Narrow listen · 3×</button>` })}
        <div id="narrow-status" class="muted" style="font-size: 0.8125rem; min-height: 0;"></div>
        <div class="dialogue" id="dlg"></div>
        ${s.notes && s.notes.length ? `
          <div class="card note-card">
            <span class="eyebrow">Notes</span>
            <ul style="margin:8px 0 0 18px; padding:0">
              ${s.notes.map((n) => `<li style="margin-bottom:6px">${escape(n)}</li>`).join("")}
            </ul>
          </div>
        ` : ""}
      </div>
    `);
    const dlg = $("#dlg", wrap);
    s.dialogue.forEach((line, i) => {
      const isYou = /^you$/i.test(line.speaker);
      const lineEl = el(`
        <div class="dlg-line ${isYou ? "you" : ""}">
          <div class="dlg-speaker">${escape(line.speaker)}</div>
          <div class="dlg-content">
            <div class="dlg-nl">${escape(line.nl)}</div>
            <div class="dlg-en">${escape(line.en)}</div>
          </div>
          <button class="voice-btn" data-line="${i}" aria-label="Hear this line">${iconSound()}</button>
        </div>
      `);
      lineEl.querySelector("[data-line]").addEventListener("click", () => {
        Speech.speak(line.nl, { rate: state.settings.prefRate });
      });
      dlg.appendChild(lineEl);
    });

    $("#back", wrap).addEventListener("click", () => navigate("browse"));
    $("#play-all", wrap).addEventListener("click", () => {
      let i = 0;
      const playNext = () => {
        if (i >= s.dialogue.length) return;
        Speech.speak(s.dialogue[i].nl, {
          rate: state.settings.prefRate,
          onend: () => { i += 1; setTimeout(playNext, 350); },
        });
      };
      playNext();
    });

    // Narrow listening: per Krashen 1996, repeated exposure to the same
    // topic with varied speakers is the gold-standard form of comprehensible
    // input. We loop the dialogue 3× alternating Voxtral voices on the
    // non-"You" lines so the user hears each turn from multiple voices.
    let narrowCancel = null;
    $("#narrow-listen", wrap).addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const status = $("#narrow-status", wrap);
      if (narrowCancel) {
        narrowCancel();
        narrowCancel = null;
        Speech.cancel();
        btn.classList.remove("is-playing");
        btn.innerHTML = `${iconSound()} Narrow listen · 3×`;
        status.textContent = "";
        return;
      }
      btn.classList.add("is-playing");
      btn.innerHTML = `${iconStop()} Stop narrow listen`;
      const passes = 3;
      const voiceSeq = Lang.cfg().narrowVoices;
      const altVoice = Lang.cfg().voices[1] ? Lang.cfg().voices[1].value : voiceSeq[0];
      let cancelled = false;
      narrowCancel = () => { cancelled = true; };
      (async () => {
        for (let p = 0; p < passes && !cancelled; p++) {
          status.textContent = `Pass ${p + 1} of ${passes} · voice: ${voiceSeq[p]}`;
          for (let i = 0; i < s.dialogue.length && !cancelled; i++) {
            const line = s.dialogue[i];
            // Alternate voices PER LINE within a pass too — gives high-variability exposure
            const voice = (i + p) % 2 === 0 ? voiceSeq[p] : (voiceSeq[p] === voiceSeq[0] ? altVoice : voiceSeq[0]);
            await new Promise((resolve) => {
              Speech.speak(line.nl, {
                lang: Lang.cfg().langCode,
                voice,
                rate: state.settings.prefRate,
                onend: () => setTimeout(resolve, 280),
              });
            });
          }
          await new Promise((r) => setTimeout(r, 800));
        }
        if (!cancelled) {
          status.textContent = "✓ Done. 3 passes complete.";
          setTimeout(() => { status.textContent = ""; }, 4000);
        }
        btn.classList.remove("is-playing");
        btn.innerHTML = `${iconSound()} Narrow listen · 3×`;
        narrowCancel = null;
      })();
    });

    return wrap;
  }
  function iconStop() {
    return `<svg class="ico-sound" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>`;
  }

  // ----- Reader view (Extensive Reading) -----
  // Tokenises each paragraph into <span class="readable"> elements. Tapping
  // a word looks up the translation: passage glosses[] first, then VOCAB,
  // then the first token of any sentence whose .nl matches. Misses fall
  // through to a "no gloss yet" message rather than the dictionary attempt.
  function renderPassage(pId) {
    const p = (window.PASSAGES || []).find((x) => x.id === pId);
    if (!p) { navigate("home"); return el(`<div></div>`); }
    Goals.markPassage(state, pId); persist();   // reading progress for "finish all passages" goals

    function lookup(word) {
      const w = word.toLowerCase().replace(/[.,!?;:"'()«»،؟؛—]/g, "");
      if (!w) return null;
      if (p.glosses && p.glosses[w]) return { en: p.glosses[w], source: "passage" };
      const v = window.VOCAB.find((x) => x.nl.toLowerCase() === w);
      if (v) return { en: v.en, source: "vocab", note: v.note };
      // try without leading article ("de tram" → "tram")
      for (const cand of window.VOCAB) {
        const tokens = cand.nl.toLowerCase().split(/\s+/);
        if (tokens.includes(w)) return { en: cand.en, source: "vocab" };
      }
      return null;
    }

    const wrap = el(`
      <div class="view stack">
        ${pageHeader({ back: true, eyebrow: `Reading · ${p.level}`, title: p.title, lead: p.blurb,
          actions: `<button class="btn audio voice-action" id="play-passage">${iconSound()} Read it to me</button>` })}
        <article class="card lg passage-card">
          <div class="passage-body" id="passage-body"></div>
        </article>
        <div class="lookup-bar" id="lookup-bar">
          <div class="lookup-empty">Tap any ${Lang.cfg().name} word for its meaning.</div>
        </div>
      </div>
    `);

    const body = $("#passage-body", wrap);
    p.paragraphs.forEach((para) => {
      const pEl = document.createElement("p");
      pEl.className = "passage-para";
      // Tokenise: words + non-word chunks
      const tokens = para.split(/(\s+|[.,!?;:"'()«»،؟؛—])/);
      tokens.forEach((tok) => {
        if (/^\s+$/.test(tok) || /^[.,!?;:"'()«»،؟؛—]$/.test(tok)) {
          pEl.appendChild(document.createTextNode(tok));
        } else if (tok.length === 0) {
          // skip empties
        } else {
          const span = document.createElement("span");
          span.className = "readable";
          span.textContent = tok;
          span.addEventListener("click", () => onWordTap(tok, span));
          pEl.appendChild(span);
        }
      });
      body.appendChild(pEl);
    });

    function onWordTap(word, span) {
      // mark active
      $$(".readable.is-active", body).forEach((s) => s.classList.remove("is-active"));
      span.classList.add("is-active");
      const r = lookup(word);
      const bar = $("#lookup-bar", wrap);
      if (r) {
        bar.innerHTML = `
          <div class="lookup-row">
            <button class="voice-btn" data-speak aria-label="Hear it">${iconSound()}</button>
            <div class="lookup-text">
              <div class="nl-text">${escape(word)}</div>
              <div class="muted">${escape(r.en)}</div>
              ${r.note ? `<div class="lookup-note">${escape(r.note)}</div>` : ""}
            </div>
            <span class="chip">${escape(r.source)}</span>
          </div>
        `;
        bar.querySelector("[data-speak]").addEventListener("click", () => {
          Speech.speak(word, { lang: Lang.cfg().langCode, rate: 0.85 });
        });
        // Auto-pronounce on tap (fast)
        Speech.speak(word, { lang: Lang.cfg().langCode, rate: 0.9 });
      } else {
        bar.innerHTML = `
          <div class="lookup-row">
            <button class="voice-btn" data-speak aria-label="Hear it">${iconSound()}</button>
            <div class="lookup-text">
              <div class="nl-text">${escape(word)}</div>
              <div class="muted">No gloss yet — try the audio for context.</div>
            </div>
          </div>
        `;
        bar.querySelector("[data-speak]").addEventListener("click", () => {
          Speech.speak(word, { lang: Lang.cfg().langCode, rate: 0.85 });
        });
        Speech.speak(word, { lang: Lang.cfg().langCode, rate: 0.9 });
      }
    }

    $("#back", wrap).addEventListener("click", () => navigate(nav.passageBack === "home" ? "home" : "browse"));
    $("#play-passage", wrap).addEventListener("click", () => {
      let i = 0;
      const playNext = () => {
        if (i >= p.paragraphs.length) return;
        Speech.speak(p.paragraphs[i], {
          lang: Lang.cfg().langCode,
          rate: state.settings.prefRate,
          onend: () => { i += 1; setTimeout(playNext, 600); },
        });
      };
      playNext();
    });

    return wrap;
  }

  function renderGrammarDetail(gId) {
    const g = GRAMMAR.find((x) => x.id === gId);
    if (!g) { navigate("browse"); return el(`<div></div>`); }
    state.seenGrammar[gId] = Date.now();
    persist();

    const wrap = el(`
      <div class="view stack">
        ${pageHeader({ back: true, eyebrow: g.level ? `Grammar · ${g.level}` : "Grammar", title: g.title, lead: g.blurb })}
        <article class="capsule">
          <p style="margin:0">${escape(g.body)}</p>
          <div class="stack-sm" style="margin-top: 16px" id="examples"></div>
          <div class="pitfall"><strong>Pitfall:</strong> ${escape(g.pitfall)}</div>
          ${gId === "g_pronunciation" && pronGuide() ? `<button class="btn primary pron-capsule-link" id="pron-open">Read the full guide: ${escape(pronGuide().title)} ${arrowFwd()}</button>` : ""}
        </article>
      </div>
    `);
    const pronOpen = $("#pron-open", wrap);
    if (pronOpen) pronOpen.addEventListener("click", () => openPronunciation());
    const exWrap = $("#examples", wrap);
    g.examples.forEach((ex) => {
      const exEl = el(`
        <div class="card ex-card">
          <div class="row spread" style="align-items: flex-start">
            <div style="flex:1">
              <div class="nl-text tl-sentence">${escape(ex.nl)}</div>
              <div class="tl-gloss">${escape(ex.en)}</div>
              ${ex.tag ? `<div class="ex-tag" style="margin-top:8px"><span class="chip">${escape(ex.tag)}</span></div>` : ""}
            </div>
            <button class="voice-btn" data-speak aria-label="Hear it">${iconSound()}</button>
          </div>
        </div>
      `);
      exEl.querySelector("[data-speak]").addEventListener("click", () => Speech.speak(ex.nl, { rate: state.settings.prefRate }));
      exWrap.appendChild(exEl);
    });
    $("#back", wrap).addEventListener("click", () => navigate("browse"));
    return wrap;
  }

  /* ============ PRONUNCIATION GUIDE ============ */
  // One long article per language (window.PRONUNCIATION, see js/data/<lang>/
  // pronunciation.js). Every example and practice sentence is playable; the
  // section last read is remembered in state.pronunciation.
  const PRON_BACK = ["home", "browse", "help", "grammar-detail", "passage", "stats"];
  const PRON_PRACTICE = "__practice";

  function pronGuide() {
    const P = window.PRONUNCIATION;
    return P && Array.isArray(P.sections) && P.sections.length ? P : null;
  }

  function pronState() {
    if (!state.pronunciation || typeof state.pronunciation !== "object") state.pronunciation = { last: null, read: {} };
    if (!state.pronunciation.read) state.pronunciation.read = {};
    return state.pronunciation;
  }

  // Title of the section to resume at, or null when there's nothing to resume.
  function pronResume() {
    const P = pronGuide();
    const last = P && pronState().last;
    if (!last || last === P.sections[0].id) return null;
    if (last === PRON_PRACTICE) return "Practice sentences";
    const s = P.sections.find((x) => x.id === last);
    return s ? s.title : null;
  }

  // A list-item link to the guide (Home, Browse). Null when the deck has none.
  function pronLinkItem(cls = "") {
    const P = pronGuide();
    if (!P) return null;
    const resume = pronResume();
    const sub = resume ? `Continue: ${resume}`
      : `${Number(P.minutes) || 15}-minute guide${hasSpeech() ? ", every example with audio" : ""}`;
    const btn = el(`
      <button class="list-item pron-link ${cls}">
        <span class="pron-link-ico" aria-hidden="true">🔊</span>
        <div class="li-main">
          <div class="li-title">${escape(P.title)}</div>
          <div class="li-sub">${escape(sub)}</div>
        </div>
        <span class="li-arrow">→</span>
      </button>
    `);
    btn.addEventListener("click", () => openPronunciation());
    return btn;
  }

  function openPronunciation(sectionId) {
    if (currentView !== "pronunciation") nav.pronBack = currentView;
    nav.pronSection = sectionId || null;
    navigate("pronunciation");
  }

  // All prose here is English (with inline target words); the target words
  // (.nl-text) and any Kurdish run inside a sentence are marked RTL by rtlFix().
  function renderPronunciation() {
    const P = pronGuide();
    const back = PRON_BACK.includes(nav.pronBack) ? nav.pronBack : "home";
    if (!P) {
      const empty = el(`
        <div class="view stack">
          ${pageHeader({ back: true, eyebrow: "Pronunciation", title: "Pronunciation guide" })}
          <div class="empty-state">The ${escape(Lang.cfg().name)} pronunciation guide isn't available yet.</div>
        </div>
      `);
      $("#back", empty).addEventListener("click", () => navigate(back));
      return empty;
    }
    const ps = pronState();
    const sections = P.sections;
    const practice = P.practice || [];
    const resume = pronResume();
    const exRow = (ex) => `
      <div class="pron-ex">
        <div class="pron-ex-main">
          <div class="pron-ex-word"><span class="nl-text">${escape(ex.nl)}</span>${ex.ipa
            ? `<span class="pron-ipa mono" dir="ltr">/${escape(String(ex.ipa).replace(/^[\/\[]|[\/\]]$/g, ""))}/</span>` : ""}</div>
          <div class="pron-ex-gloss">
            ${ex.en ? `<div class="muted pron-ex-en" dir="ltr">${escape(ex.en)}</div>` : ""}
            ${ex.note ? `<div class="subtle pron-ex-note" dir="ltr">${escape(ex.note)}</div>` : ""}
          </div>
        </div>
        <div class="pron-ex-btns" dir="ltr">
          <button class="voice-btn" data-say="${escape(ex.nl)}" aria-label="Hear ${escape(ex.nl)}">${iconSound()}</button>
          <button class="voice-btn voice-btn--slow" data-say-slow="${escape(ex.nl)}" aria-label="Play slowly: ${escape(ex.nl)}" title="Play slowly"><span aria-hidden="true">🐢</span></button>
        </div>
      </div>`;
    const playLabel = (n) => n === 2 ? "Play both" : `Play all ${n}`;

    const wrap = el(`
      <div class="view stack pron-view">
        ${pageHeader({ back: true, eyebrow: `Pronunciation · ${Number(P.minutes) || 15} min`, title: P.title, lead: (P.intro || [])[0],
          actions: resume ? `<button class="btn primary" id="pron-resume">Continue: ${escape(resume)} ${arrowFwd()}</button>` : "" })}
        ${(P.intro || []).length > 1 ? `<div class="pron-intro" dir="ltr">${P.intro.slice(1).map((p) => `<p>${escape(p)}</p>`).join("")}</div>` : ""}
        <nav class="card pron-toc" aria-label="Contents" dir="ltr">
          <span class="eyebrow">Contents · <span id="pron-count"></span></span>
          <ol>
            ${sections.map((s, i) => `<li><button class="pron-toc-item" data-jump="${escape(s.id)}"><span class="pron-toc-n">${i + 1}</span><span class="pron-toc-title">${escape(s.title)}</span><span class="pron-toc-done" aria-hidden="true">✓</span></button></li>`).join("")}
            ${practice.length ? `<li><button class="pron-toc-item" data-jump="${PRON_PRACTICE}"><span class="pron-toc-n">▶</span><span class="pron-toc-title">Practice sentences</span></button></li>` : ""}
          </ol>
        </nav>
        ${sections.map((s, si) => `
          <section class="card pron-section" data-sec="${escape(s.id)}">
            <span class="eyebrow" dir="ltr">Section ${si + 1} of ${sections.length}</span>
            <h2 dir="ltr">${escape(s.title)}</h2>
            ${s.summary ? `<p class="pron-summary" dir="ltr">${escape(s.summary)}</p>` : ""}
            ${(s.body || []).map((p) => `<p dir="ltr">${escape(p)}</p>`).join("")}
            ${(s.rules || []).map((r, ri) => `
              <div class="pron-rule">
                <div class="pron-rule-head">
                  <div class="pron-rule-text">
                    <h3 dir="ltr">${escape(r.rule)}</h3>
                    ${r.explain ? `<p class="muted pron-rule-explain" dir="ltr">${escape(r.explain)}</p>` : ""}
                  </div>
                  ${(r.examples || []).length > 1 ? `<button class="btn audio voice-action pron-play-rule" data-play-rule="${si}:${ri}">${iconSound()} ${playLabel(r.examples.length)}</button>` : ""}
                </div>
                <div class="pron-examples">${(r.examples || []).map(exRow).join("")}</div>
              </div>`).join("")}
            ${s.pitfall ? `<div class="pitfall" dir="ltr"><strong>Pitfall:</strong> ${escape(s.pitfall)}</div>` : ""}
            ${sections[si + 1] || practice.length ? `<div class="pron-sec-foot"><button class="btn pron-next" data-jump="${escape(sections[si + 1] ? sections[si + 1].id : PRON_PRACTICE)}">Next: ${escape(sections[si + 1] ? sections[si + 1].title : "Practice sentences")} ${arrowFwd()}</button></div>` : ""}
          </section>`).join("")}
        ${practice.length ? `
          <section class="card pron-section pron-practice" data-sec="${PRON_PRACTICE}">
            <span class="eyebrow" dir="ltr">Practice</span>
            <h2 dir="ltr">Read these aloud</h2>
            <p class="muted" dir="ltr">Say each sentence yourself first, then play it and compare. The notes say which sounds to listen for.</p>
            <button class="btn audio voice-action" id="pron-play-practice">${iconSound()} Play all practice sentences</button>
            <div class="pron-examples">${practice.map(exRow).join("")}</div>
            <div class="pron-sec-foot"><button class="btn" id="pron-top">Back to contents</button></div>
          </section>` : ""}
      </div>
    `);

    const rate = () => state.settings.prefRate;
    const lang = () => Lang.cfg().langCode;
    let chain = 0;   // bumps on every tap so a running "play all" stops
    function say(text, slow) {
      chain += 1;
      Speech.speak(text, { lang: lang(), rate: slow ? 0.6 : rate() });
    }
    function playSeq(texts, gap) {
      const my = ++chain;
      let i = 0;
      const next = () => {
        if (my !== chain || i >= texts.length || !wrap.isConnected) return;
        const t = texts[i++];
        let done = false;
        const advance = () => { if (!done) { done = true; setTimeout(next, gap); } };
        Speech.speak(t, { lang: lang(), rate: rate(), onend: advance }).then((ok) => { if (!ok) advance(); });
      };
      next();
    }
    function scrollToSec(id, smooth = true) {
      const t = $$("[data-sec]", wrap).find((x) => x.dataset.sec === id);
      if (t) t.scrollIntoView({ behavior: smooth && !reducedMotion() ? "smooth" : "instant", block: "start" });
    }

    // Reading progress: the section crossing the upper part of the screen is "being read".
    const countEl = $("#pron-count", wrap);
    function paintProgress() {
      const n = sections.filter((s) => ps.read[s.id]).length;
      countEl.textContent = `${n} of ${sections.length} read`;
      $$(".pron-toc-item", wrap).forEach((b) => b.classList.toggle("is-read", !!ps.read[b.dataset.jump]));
    }
    let saveTimer = null;
    function markRead(id) {
      if (ps.last === id && (id === PRON_PRACTICE || ps.read[id])) return;
      ps.last = id;
      if (id !== PRON_PRACTICE && !ps.read[id]) ps.read[id] = Date.now();
      paintProgress();
      clearTimeout(saveTimer);
      saveTimer = setTimeout(persist, 600);
    }
    paintProgress();
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        if (!wrap.isConnected) { io.disconnect(); return; }
        entries.forEach((en) => { if (en.isIntersecting) markRead(en.target.dataset.sec); });
      }, { rootMargin: "-20% 0px -70% 0px" });
      $$("[data-sec]", wrap).forEach((s) => io.observe(s));
    }

    wrap.addEventListener("click", (e) => {
      const b = e.target.closest("[data-say], [data-say-slow], [data-jump], [data-play-rule]");
      if (!b) return;
      if (b.dataset.say) say(b.dataset.say);
      else if (b.dataset.saySlow) say(b.dataset.saySlow, true);
      else if (b.dataset.jump) scrollToSec(b.dataset.jump);
      else {
        const [si, ri] = b.dataset.playRule.split(":").map(Number);
        playSeq(sections[si].rules[ri].examples.map((x) => x.nl), 450);
      }
    });
    $("#back", wrap).addEventListener("click", () => navigate(back));
    const resumeBtn = $("#pron-resume", wrap);
    if (resumeBtn) resumeBtn.addEventListener("click", () => scrollToSec(ps.last));
    const playPractice = $("#pron-play-practice", wrap);
    if (playPractice) playPractice.addEventListener("click", () => playSeq(practice.map((x) => x.nl), 800));
    const topBtn = $("#pron-top", wrap);
    if (topBtn) topBtn.addEventListener("click", () => $(".pron-toc", wrap).scrollIntoView({ behavior: reducedMotion() ? "instant" : "smooth", block: "start" }));

    // Opened at a section (e.g. from a grammar capsule): jump there once the
    // view is mounted and navigate() has scrolled to the top.
    if (nav.pronSection) {
      const id = nav.pronSection;
      nav.pronSection = null;
      setTimeout(() => scrollToSec(id, false), 0);
    }
    return wrap;
  }

  // "Supertonic · Female 1" / "OmniVoice · Male" -> "Voice 2 (female)": no engine names for learners.
  function voiceLabel(label, i) {
    const g = /female/i.test(label) ? "female" : /male/i.test(label) ? "male" : "";
    return `Voice ${i + 1}${g ? ` (${g})` : ""}`;
  }

  /* ============ STATS ============ */
  function renderStats() {
    const ids = allCardIds();
    const counts = SRS.counts(ids, state.cards);
    const totalReviews = state.sessions.reduce((sum, s) => sum + s.reviewed, 0);
    const totalCorrect = state.sessions.reduce((sum, s) => sum + s.correct, 0);
    const accuracy = totalReviews > 0 ? Math.round((totalCorrect / totalReviews) * 100) : 0;

    const wrap = el(`
      <div class="view view-stats">
        ${pageHeader({ title: "Stats", lead: "Your progress, in numbers." })}
        <div class="grid-2 stats-tiles">
          ${Goals.consistencyTileHtml(state, todayISO())}
          <div class="stat">
            <span class="stat-label">Total reviews</span>
            <span class="stat-value">${totalReviews}</span>
            <span class="stat-sub">${accuracy}% accuracy</span>
          </div>
        </div>

        <article class="card stats-heatmap">
          <span class="eyebrow">Last 12 weeks</span>
          <h3 style="margin: 6px 0 14px">Activity heatmap</h3>
          <div id="heatmap" class="heatmap"></div>
          <p class="muted" style="font-size:0.75rem; margin-top:10px">Each cell is a day. Darker = more reviews. Aim for any colour every day — even 5 minutes counts.</p>
        </article>

        <article class="card stats-maturity">
          <span class="eyebrow">Your cards</span>
          <h3 style="margin: 6px 0 12px">How well you know them</h3>
          ${maturityBars(counts)}
          <p class="muted" style="font-size:0.8125rem; margin-top:14px;">
            <strong>Not seen yet</strong> = new to you · <strong>Learning</strong> = coming back within a week · <strong>Getting there</strong> = coming back within a month · <strong>Well known</strong> = you can leave it for a month or more, and it will only return now and then.</p>
        </article>

        <article class="card stats-help">
          <span class="eyebrow">Help</span>
          <h3 style="margin: 6px 0 4px">New here, or need a refresher?</h3>
          <p class="muted" style="margin:0 0 12px">The daily routine, every card type and drill in one line each, and why it all works.</p>
          <div class="row" style="gap:8px; flex-wrap:wrap">
            <button class="btn" id="stats-how">How it works</button>
            <button class="btn" id="stats-tour">Replay the tour</button>
          </div>
        </article>

        <article class="card stats-display">
          <span class="eyebrow">Display</span>
          <h3 style="margin: 6px 0 10px">Make it comfortable to read</h3>
          <div id="display-slot"></div>
        </article>

        <article class="card stats-settings">
          <span class="eyebrow">Settings</span>
          <h3 style="margin: 6px 0 14px">Make it yours</h3>
          <div class="stack-sm">
            <label class="row spread" style="gap:12px">
              <span>Cards per session</span>
              <select id="set-size">
                ${[8, 12, 16, 20, 30].map((n) => `<option value="${n}" ${n === state.settings.sessionSize ? "selected" : ""}>${n}</option>`).join("")}
              </select>
            </label>
            <label class="row spread" style="gap:12px">
              <span>Daily goal</span>
              <select id="set-goal">
                ${[10, 20, 30, 50].map((n) => `<option value="${n}" ${n === state.settings.dailyGoal ? "selected" : ""}>${n}</option>`).join("")}
              </select>
            </label>
            ${Lang.cfg().transliterate ? `
            <label class="row spread" style="gap:12px">
              <span>Reading guide <span class="muted" style="font-size:0.75rem">(Latin under every ${escape(Lang.cfg().name)} word)</span></span>
              <input type="checkbox" id="set-guide" ${state.settings.readingGuide !== false ? "checked" : ""} />
            </label>
            <p class="muted guide-key" style="font-size:0.75rem; margin:0">${escape(Lang.cfg().guideKey || "")}</p>` : ""}
            <label class="row spread" style="gap:12px">
              <span>Auto-pronounce on flip</span>
              <input type="checkbox" id="set-autoplay" ${state.settings.autoPlay ? "checked" : ""} />
            </label>
            <label class="row spread" style="gap:12px">
              <span>Speech rate</span>
              <select id="set-rate">
                <option value="0.7" ${state.settings.prefRate === 0.7 ? "selected" : ""}>Slow (0.7×)</option>
                <option value="0.85" ${state.settings.prefRate === 0.85 ? "selected" : ""}>Relaxed (0.85×)</option>
                <option value="0.9" ${state.settings.prefRate === 0.9 ? "selected" : ""}>Default (0.9×)</option>
                <option value="1" ${state.settings.prefRate === 1 ? "selected" : ""}>Native (1×)</option>
              </select>
            </label>
            <label class="row spread" style="gap:12px">
              <span>${Lang.cfg().name} voice</span>
              <select id="set-dutch-voice">
                ${Lang.cfg().voices.map((v, i) => `<option value="${v.value}" ${state.settings.targetVoice === v.value ? "selected" : ""}>${voiceLabel(v.label, i)}</option>`).join("")}
              </select>
            </label>
            <label class="row spread" style="gap:12px">
              <span>English voice</span>
              <select id="set-english-voice">
                ${[["M1","Male 1"],["F1","Female 1"],["M2","Male 2"],["F2","Female 2"]]
                  .map(([v,l], i) => `<option value="${v}" ${state.settings.englishVoice === v ? "selected" : ""}>${voiceLabel(l, i)}</option>`).join("")}
              </select>
            </label>
            <details class="tech-info">
              <summary>Technical info</summary>
              <div id="tts-status" class="muted"></div>
            </details>
          </div>
        </article>

        <article class="card stats-data">
          <span class="eyebrow">Data</span>
          <h3 style="margin: 6px 0 12px">Backup & reset</h3>
          <div class="row" style="gap: 10px; flex-wrap: wrap">
            <button class="btn" id="export-btn">Export JSON</button>
            <button class="btn" id="import-btn">Import JSON</button>
          </div>
          <p class="muted" style="font-size:0.75rem; margin-top:10px">Your progress lives only in this browser. Export a backup to keep it safe.</p>
          <div class="danger-zone">
            <p class="muted">Start over: this deletes everything for this language.</p>
            <button class="btn danger" id="reset-btn" type="button">Reset everything</button>
          </div>
        </article>
      </div>
    `);

    // Heatmap
    $(".stats-tiles", wrap).after(Goals.statsCard(goalsCtx()));
    const heat = $("#heatmap", wrap);
    const today = new Date();
    const days = 12 * 7;
    const sessionMap = Object.fromEntries(state.sessions.map((s) => [s.date, s.reviewed]));
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
      const iso = d.toISOString().slice(0, 10);
      const r = sessionMap[iso] || 0;
      let cls = "";
      if (r >= 1 && r < 8) cls = "l1";
      else if (r >= 8 && r < 16) cls = "l2";
      else if (r >= 16 && r < 30) cls = "l3";
      else if (r >= 30) cls = "l4";
      const cell = el(`<div class="heat-cell ${cls}" title="${iso} · ${r} reviews"></div>`);
      heat.appendChild(cell);
    }

    $("#display-slot", wrap).appendChild(buildDisplayPanel("st"));

    // Settings
    $("#set-size", wrap).addEventListener("change", (e) => {
      state.settings.sessionSize = parseInt(e.target.value, 10);
      persist();
    });
    $("#set-goal", wrap).addEventListener("change", (e) => {
      state.settings.dailyGoal = parseInt(e.target.value, 10);
      persist();
    });
    $("#stats-how", wrap).addEventListener("click", () => navigate("help"));
    $("#stats-tour", wrap).addEventListener("click", () => Onboarding.openTour());
    const guideBox = $("#set-guide", wrap);
    if (guideBox) guideBox.addEventListener("change", (e) => {
      state.settings.readingGuide = e.target.checked;
      persist();
      render();   // re-render so the guide appears / disappears everywhere
    });
    $("#set-autoplay", wrap).addEventListener("change", (e) => {
      state.settings.autoPlay = e.target.checked;
      persist();
    });
    $("#set-rate", wrap).addEventListener("change", (e) => {
      state.settings.prefRate = parseFloat(e.target.value);
      persist();
    });
    $("#set-dutch-voice", wrap).addEventListener("change", (e) => {
      state.settings.targetVoice = e.target.value;
      if (Speech.setTargetVoice) Speech.setTargetVoice(e.target.value);
      persist();
      Speech.speak(Lang.cfg().voiceTest, { lang: Lang.cfg().langCode, voice: e.target.value, rate: state.settings.prefRate });
    });
    $("#set-english-voice", wrap).addEventListener("change", (e) => {
      state.settings.englishVoice = e.target.value;
      if (Speech.setEnglishVoice) Speech.setEnglishVoice(e.target.value);
      persist();
      Speech.speak("Hello, this is a quick voice test.", { lang: "en-US", voice: e.target.value, rate: 1 });
    });

    // Live TTS status: web speech presence + MLX availability
    (async () => {
      const statusEl = $("#tts-status", wrap);
      if (!statusEl) return;
      const webOK = Speech.supported && Speech.hasTargetVoice();
      const parts = [];
      if (Speech.pregenReady) { try { await Speech.pregenReady; } catch (_) {} }
      const pregen = Speech.pregenCount ? Speech.pregenCount() : 0;
      if (pregen > 0) parts.push(`<span class="chip success">TTS: pre-rendered audio (${pregen} clips)</span>`);
      const mlxOK = Speech.probeMlx ? await Speech.probeMlx() : false;
      if (mlxOK) {
        parts.push(`<span class="chip primary">Live TTS: Supertonic-3 ready</span>`);
      } else if (pregen === 0) {
        parts.push(`<span class="chip">Live voice service: not available</span>`);
      }
      if (Speech.supported) {
        parts.push(webOK
          ? `<span class="chip primary">Web Speech: ${Lang.cfg().name} voice OK</span>`
          : `<span class="chip">Web Speech: no ${Lang.cfg().name} voice on device</span>`);
      } else {
        parts.push(`<span class="chip">Web Speech: not supported</span>`);
      }
      statusEl.innerHTML = `<div class="row-wrap" style="gap:6px;">${parts.join("")}</div>`;
    })();

    $("#export-btn", wrap).addEventListener("click", () => {
      Store.downloadBackup(state, Lang.cfg().backupPrefix);
      persist();
      toast("Exported.");
    });
    $("#import-btn", wrap).addEventListener("click", () => {
      const inp = document.createElement("input");
      inp.type = "file";
      inp.accept = "application/json";
      inp.onchange = (e) => {
        const f = e.target.files[0];
        if (!f) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            state = Store.importJSON(reader.result);
            persist();
            toast("Imported. Reloading…");
            setTimeout(() => location.reload(), 800);
          } catch (err) {
            toast("Invalid file.");
          }
        };
        reader.readAsText(f);
      };
      inp.click();
    });
    $("#reset-btn", wrap).addEventListener("click", () => {
      confirmDialog({
        title: "Erase everything?",
        body: "This deletes all progress, goals and settings for this language in this browser. Export a backup first if you might want it back.",
        confirmLabel: "Erase everything",
        cancelLabel: "Keep my progress",
        onConfirm: () => { Store.reset(); location.reload(); },
      });
    });

    return wrap;
  }

  /* ============ DISPLAY: THEME + TEXT SIZE ============
     Global (not per language), kept in localStorage so the inline script in
     index.html can apply it before first paint. */
  const THEME_KEY = "learn:theme";
  const TEXTSIZE_KEY = "learn:textsize";
  const THEMES = [
    { id: "auto",     name: "Auto",          hint: "Matches your device: light by day, dark at night." },
    { id: "light",    name: "Light",         hint: "Warm paper, soft blue." },
    { id: "dark",     name: "Dark",          hint: "Easy on the eyes in a dim room." },
    { id: "easy",     name: "Easy read",     hint: "Cream paper, bigger and roomier text, a font made to be easy to tell apart." },
    { id: "contrast", name: "High contrast", hint: "Black on white with bold outlines, for the clearest possible text." },
  ];
  const TEXT_SIZES = ["Normal", "Large", "Larger", "Largest"];
  const THEME_COLORS = { light: "#faf7f2", dark: "#0f1216", easy: "#f6efdf", contrast: "#ffffff" };

  function storedTheme() {
    let t = null;
    try { t = localStorage.getItem(THEME_KEY); } catch (_) {}
    return THEMES.some((x) => x.id === t) ? t : "auto";
  }
  function storedTextSize() {
    let n = 0;
    try { n = parseInt(localStorage.getItem(TEXTSIZE_KEY), 10); } catch (_) {}
    return n >= 0 && n < TEXT_SIZES.length ? n : 0;
  }
  function applyTheme() {
    const t = storedTheme();
    const root = document.documentElement;
    root.setAttribute("data-theme", t);
    root.setAttribute("data-textsize", String(storedTextSize()));
    // Browser chrome colour: follow the device only in Auto.
    const dark = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
    const color = THEME_COLORS[t === "auto" ? (dark ? "dark" : "light") : t];
    $$('meta[name="theme-color"]').forEach((m) => { m.removeAttribute("media"); m.setAttribute("content", color); });
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.setAttribute("aria-label", `Display: theme and text size. Now ${THEMES.find((x) => x.id === t).name}, ${TEXT_SIZES[storedTextSize()].toLowerCase()} text`);
  }
  function setTheme(id) {
    try { localStorage.setItem(THEME_KEY, id); } catch (_) {}
    applyTheme();
  }
  function setTextSize(n) {
    n = Math.max(0, Math.min(TEXT_SIZES.length - 1, n));
    try { localStorage.setItem(TEXTSIZE_KEY, String(n)); } catch (_) {}
    applyTheme();
  }

  /** The picker itself: used in the header popover and on the Stats page. */
  function buildDisplayPanel(idp) {
    const sw = (id) => `<span class="sw-chip sw-${id}" aria-hidden="true"><b>Aa</b><i></i></span>`;
    const panel = el(`
      <div class="display-panel">
        <fieldset class="display-group">
          <legend id="${idp}-th">Theme</legend>
          <div class="theme-swatches" role="radiogroup" aria-labelledby="${idp}-th">
            ${THEMES.map((t) => `
              <button type="button" class="theme-swatch" role="radio" data-theme-id="${t.id}">
                ${sw(t.id)}<span class="sw-name">${t.name}</span>
              </button>`).join("")}
          </div>
          <p class="display-note" id="${idp}-hint" aria-live="polite"></p>
        </fieldset>
        <fieldset class="display-group">
          <legend id="${idp}-sz">Text size</legend>
          <div class="size-row" role="group" aria-labelledby="${idp}-sz">
            <button type="button" class="size-btn minus" data-size="-1" aria-label="Smaller text">A&minus;</button>
            <button type="button" class="size-btn reset" data-size="0" aria-label="Normal text size">A</button>
            <button type="button" class="size-btn plus" data-size="1" aria-label="Larger text">A+</button>
            <span class="size-readout" aria-live="polite"></span>
          </div>
        </fieldset>
      </div>
    `);
    const swatches = $$(".theme-swatch", panel);
    const hint = $(".display-note", panel);
    const readout = $(".size-readout", panel);
    const sizeBtns = $$(".size-btn", panel);
    function sync() {
      const cur = storedTheme();
      swatches.forEach((b) => {
        const on = b.dataset.themeId === cur;
        b.setAttribute("aria-checked", on ? "true" : "false");
        b.tabIndex = on ? 0 : -1;
      });
      hint.textContent = THEMES.find((t) => t.id === cur).hint;
      const s = storedTextSize();
      readout.textContent = TEXT_SIZES[s];
      sizeBtns.find((b) => b.dataset.size === "-1").disabled = s === 0;
      sizeBtns.find((b) => b.dataset.size === "1").disabled = s === TEXT_SIZES.length - 1;
    }
    swatches.forEach((b, i) => {
      b.addEventListener("click", () => { setTheme(b.dataset.themeId); sync(); });
      b.addEventListener("keydown", (e) => {
        const k = e.key;
        if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(k)) return;
        e.preventDefault();
        const n = swatches.length;
        const next = k === "Home" ? 0 : k === "End" ? n - 1
          : (k === "ArrowRight" || k === "ArrowDown") ? (i + 1) % n : (i - 1 + n) % n;
        swatches[next].focus();
        setTheme(swatches[next].dataset.themeId);
        sync();
      });
    });
    sizeBtns.forEach((b) => b.addEventListener("click", () => {
      const d = parseInt(b.dataset.size, 10);
      setTextSize(d === 0 ? 0 : storedTextSize() + d);
      sync();
    }));
    sync();
    return panel;
  }

  let displayPop = null;
  function closeDisplay(restoreFocus = true) {
    if (!displayPop) return;
    displayPop.remove();
    displayPop = null;
    document.removeEventListener("pointerdown", onDisplayOutside, true);
    document.removeEventListener("keydown", onDisplayKey, true);
    window.removeEventListener("resize", placeDisplay);
    const btn = document.getElementById("theme-toggle");
    if (btn) { btn.setAttribute("aria-expanded", "false"); if (restoreFocus) btn.focus(); }
  }
  function onDisplayOutside(e) {
    const btn = document.getElementById("theme-toggle");
    if (displayPop && !displayPop.contains(e.target) && !(btn && btn.contains(e.target))) closeDisplay(false);
  }
  function onDisplayKey(e) {
    if (e.key === "Escape") { e.stopPropagation(); closeDisplay(true); return; }
    if (e.key !== "Tab" || !displayPop) return;
    // Focus trap: Tab and Shift+Tab cycle through the popover's enabled controls.
    const f = $$("button:not(:disabled)", displayPop).filter((x) => x.tabIndex >= 0);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (!displayPop.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
    else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  function placeDisplay() {
    const hdr = document.querySelector(".app-header");
    if (!displayPop || !hdr) return;
    const top = Math.round(hdr.getBoundingClientRect().bottom + 6);
    displayPop.style.top = top + "px";
    displayPop.style.maxHeight = `calc(100dvh - ${top + 12}px)`;
  }
  function toggleDisplay() {
    if (displayPop) { closeDisplay(true); return; }
    const btn = document.getElementById("theme-toggle");
    displayPop = el(`
      <div class="display-pop" role="dialog" aria-modal="true" aria-labelledby="display-pop-h">
        <h2 id="display-pop-h">Make it comfortable to read</h2>
      </div>
    `);
    displayPop.appendChild(buildDisplayPanel("dp"));
    const done = el(`<button type="button" class="btn primary display-close">Done</button>`);
    done.addEventListener("click", () => closeDisplay(true));
    displayPop.appendChild(done);
    document.body.appendChild(displayPop);
    placeDisplay();
    if (btn) btn.setAttribute("aria-expanded", "true");
    document.addEventListener("pointerdown", onDisplayOutside, true);
    document.addEventListener("keydown", onDisplayKey, true);
    window.addEventListener("resize", placeDisplay);
    const cur = displayPop.querySelector('.theme-swatch[aria-checked="true"]');
    if (cur) cur.focus();
  }

  /* Gentle offline notice: lessons and text work offline, new audio may not. */
  function initOfflineNotice() {
    let bar = null;
    function update() {
      if (navigator.onLine === false) {
        if (!bar) {
          bar = el(`<div class="offline-bar" role="status">You're offline. Cards and reading still work; audio you haven't played before may be missing until you reconnect.</div>`);
          const hdr = document.querySelector(".app-header");
          hdr.parentNode.insertBefore(bar, hdr.nextSibling);
        }
      } else if (bar) { bar.remove(); bar = null; }
    }
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    update();
  }

  /* ============ LANGUAGE SWITCHING ============ */
  const LANG_PREF_KEY = "learn:lang";

  function activeLangId() {
    let id = null;
    try { id = localStorage.getItem(LANG_PREF_KEY); } catch (_) {}
    const q = new URLSearchParams(location.search).get("lang");
    if (q && Lang.has(q)) id = q;
    return (id && Lang.has(id)) ? id : Lang.list()[0].id;
  }

  // Does the active language have a voice (TTS)? And speech recognition (STT)
  // for the Speaking/Shadowing drills? Kurdish has TTS (OmniVoice) but no STT.
  function hasSpeech() { return Lang.cfg().hasSpeech !== false; }
  function hasStt() { return hasSpeech() && Lang.cfg().hasStt !== false; }

  // Load the active language's deck + state and configure the speech backend.
  function loadLanguage(id) {
    Lang.use(id);
    const cfg = Lang.cfg();
    Store.setKey(cfg.storageKey);
    state = Store.load();
    if (!state.settings.targetVoice) state.settings.targetVoice = cfg.defaultVoice;
    const speech = cfg.hasSpeech !== false;
    if (Speech.setTargetLang)   Speech.setTargetLang(cfg.langCode);
    if (Speech.setTargetVoice)  Speech.setTargetVoice(state.settings.targetVoice);
    if (Speech.setEnglishVoice) Speech.setEnglishVoice(state.settings.englishVoice || "M1");
    if (Speech.setTargetSpeech) Speech.setTargetSpeech(speech);
    if (Speech.setTargetLive)   Speech.setTargetLive(cfg.ttsLive !== false);
    // Root flags: hide audio-only UI when there's no speech.
    document.documentElement.toggleAttribute("data-no-speech", !speech);
    // Chrome is English → the document stays LTR for every language; only
    // Kurdish text blocks are RTL (see rtlFix). html.lang-rtl marks the script.
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.toggle("lang-rtl", !!cfg.rtl);
    applyBranding(cfg);
  }

  function applyBranding(cfg) {
    document.title = `${cfg.brand} — daily ${cfg.name} practice`;
    const nameEl = document.querySelector(".brand-name");
    if (nameEl) nameEl.textContent = cfg.brand;
    const markEl = document.querySelector(".brand-mark");
    if (markEl) markEl.textContent = cfg.brand.charAt(0);
    const fav = document.querySelector('link[rel="icon"]');
    if (fav) fav.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${encodeURIComponent(cfg.flag)}</text></svg>`;
  }

  // Switch language IN PLACE — no page reload, stay on the current view.
  // Both decks share the same theme/scenario/grammar/passage IDs, so a detail
  // view maps 1:1 to the other language and simply re-renders in it.
  //
  // Views backed by an in-progress session or drill can't survive the swap
  // (their queued card IDs belong to the old deck), so those fall back to Home.
  const SESSION_VIEWS = ["study", "summary", "drill", "drill-summary"];
  function switchLanguage(id) {
    if (!Lang.has(id) || id === Lang.active()) return;
    try { localStorage.setItem(LANG_PREF_KEY, id); } catch (_) {}
    Speech.cancel();
    currentSession = null;
    currentDrill = null;
    loadLanguage(id);          // re-point deck, reload that language's state, voices, branding
    applyTheme();              // each language keeps its own theme setting
    // Drop any ?lang= override from the URL so a later reload honours the stored choice.
    if (window.history && history.replaceState) {
      history.replaceState(null, "", location.pathname);
    }
    buildLangSwitcher();       // reflect the newly-active language in the selector
    const view = SESSION_VIEWS.includes(currentView) ? "home" : currentView;
    navigate(view);            // re-sync tabs, re-render the (preserved) view, scroll to top
  }

  function buildLangSwitcher() {
    const host = document.getElementById("lang-switch");
    if (!host) return;
    host.innerHTML = "";
    const sel = el(`<select id="lang-select" class="lang-select" name="lang-select" aria-label="Learning language"></select>`);
    Lang.list().forEach((cfg) => {
      const opt = document.createElement("option");
      opt.value = cfg.id;
      opt.textContent = `${cfg.flag} ${cfg.name}`;
      if (cfg.id === Lang.active()) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.addEventListener("change", (e) => switchLanguage(e.target.value));
    host.appendChild(sel);
  }

  // Mark the tapped voice button as .is-playing until speech goes quiet.
  function trackVoicePlayback() {
    let btn = null, started = 0, idleSince = 0, timer = null;
    const stop = () => {
      if (btn) btn.classList.remove("is-playing");
      btn = null; clearInterval(timer); timer = null;
    };
    document.addEventListener("click", (e) => {
      const b = e.target.closest(".voice-btn:not(.voice-btn--static), .voice-action:not(#narrow-listen)");
      if (!b || b.disabled) return;
      if (btn && btn !== b) btn.classList.remove("is-playing");
      btn = b; started = Date.now(); idleSince = 0;
      b.classList.add("is-playing");
      if (!timer) timer = setInterval(() => {
        if (!btn || !btn.isConnected) return stop();
        const age = Date.now() - started;
        if (Speech.isPlaying && Speech.isPlaying()) { idleSince = 0; return; }
        if (!idleSince) idleSince = Date.now();
        if (Date.now() - idleSince > (age < 4000 ? 2500 : 1200)) stop();
      }, 200);
    }, true);
  }

  /* ============ INIT ============ */
  function init() {
    trackVoicePlayback();
    loadLanguage(activeLangId());
    Onboarding.init({
      getState: () => state,
      persist,
      back: () => navigate(nav.helpBack && !["study", "summary", "drill", "drill-summary", "help"].includes(nav.helpBack) ? nav.helpBack : "home"),
      startFirst: startFirstSession,
      startSession: () => startSession(),
      navigate: (v) => navigate(v),
      openPronunciation: (id) => openPronunciation(id),
      pronunciation: () => pronGuide(),
    });
    applyTheme();
    buildLangSwitcher();

    $$(".tab, .bn-tab").forEach((b) => {
      b.addEventListener("click", () => navigate(b.dataset.view));
    });
    const tt = document.getElementById("theme-toggle");
    if (tt) tt.addEventListener("click", toggleDisplay);
    initOfflineNotice();
    const hb = document.getElementById("help-btn");
    if (hb) hb.addEventListener("click", () => navigate("help"));

    // Streak housekeeping: if last session was more than 1 day ago, break streak
    if (state.lastSessionDate) {
      const gap = daysBetween(state.lastSessionDate, todayISO());
      if (gap > 1) {
        state.streak = 0;
        persist();
      }
    }

    render();
    Onboarding.maybeAutoTour();
  }

  // expose for debugging
  window.__app = { state: () => state, store: Store, srs: SRS, lang: Lang };

  return { init, navigate, startSession, openPronunciation, arrowFwd, arrowBack, isolateRtl, confirmDialog, pageHeader };
})();

document.addEventListener("DOMContentLoaded", App.init);
