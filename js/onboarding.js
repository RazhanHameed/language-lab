/* =====================================================================
   Onboarding — first-run tour, in-context coaching, "How it works" page.
   ---------------------------------------------------------------------
   Everything a first-time learner needs to know WHAT to do and (briefly)
   WHY, without a manual. Three parts, one file:

   1. Tour      A skippable, re-openable 6-step dialog. Shown once per
                browser (flag lives outside per-language state).
   2. Coach     A one/two-line instruction on every card type, drill and
                reader/scenario/grammar view. Expanded the first few times
                you meet it, then collapses to a small "?" that re-opens it.
                Seen-counts live in state.coach (per language).
   3. Help      The "How it works" view: routine, card types, drills,
                ratings, and the science in plain words.

   Language-specific copy comes from Lang.cfg().onboarding (optional):
     { typing: "…",            // appended to typed-answer coaching
       tips:   [{icon, text}], // step 5 of the tour + Help page
       tourNote: "…" }         // optional extra line on the welcome step
   When missing, sensible tips are derived from the pack's flags.
   ===================================================================== */
window.Onboarding = (function () {
  const TOUR_KEY = "langlab:tour:v1";
  const COACH_SHOW_FOR = 1;      // a coach tip stays open for the first N meetings, then it is a one-line disclosure
  const FIRST_SESSION_SIZE = 5;

  let ctx = null;                // wired by App via init()

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  const cfg = () => Lang.cfg();
  const L = () => cfg().name;
  const ob = () => cfg().onboarding || {};
  const hasSpeech = () => cfg().hasSpeech !== false;
  const hasStt = () => hasSpeech() && cfg().hasStt !== false;

  /* ---------- storage helpers ---------- */
  function coachState() {
    const s = ctx.getState();
    if (!s.coach || typeof s.coach !== "object") s.coach = { seen: {}, dismissed: {} };
    if (!s.coach.seen) s.coach.seen = {};
    if (!s.coach.dismissed) s.coach.dismissed = {};
    return s.coach;
  }
  function tourSeen() { try { return !!localStorage.getItem(TOUR_KEY); } catch (_) { return true; } }
  function markTourSeen() { try { localStorage.setItem(TOUR_KEY, String(Date.now())); } catch (_) {} }

  // True when this language has never been studied (no reviews at all).
  function isFirstRun() {
    const s = ctx.getState();
    return (s.sessions || []).length === 0 && Object.keys(s.cards || {}).length === 0;
  }

  /* ---------- copy: language-aware pieces ---------- */
  function typing() { return ob().typing ? " " + ob().typing : ""; }

  function tips() {
    if (ob().tips && ob().tips.length) return ob().tips;
    const out = [];
    if (hasSpeech()) out.push({ icon: "🔊", text: `Tap the speaker on any ${L()} word or sentence to hear it. Listen first, then say it back out loud.` });
    if (hasStt()) out.push({ icon: "🎙️", text: "Speaking and Shadowing listen to you through a local Whisper server. If it isn't running, just skip those two. Everything else works without it." });
    else out.push({ icon: "🎙️", text: `Speaking and Shadowing need speech recognition, which ${L()} doesn't have yet, so they're hidden. Everything else works.` });
    return out;
  }

  // The language's pronunciation guide (window.PRONUNCIATION), or null.
  const pron = () => (ctx && ctx.pronunciation ? ctx.pronunciation() : null);
  function pronLine() {
    const P = pron();
    return P ? `${P.title} — ${Number(P.minutes) || 15} min${hasSpeech() ? " with audio" : ""}` : "";
  }

  /* ---------- coaching text ---------- */
  const RATE = "Then rate it.";
  function coachText(key) {
    const n = L();
    return ({
      recognize: `Look at the ${n} word and try to recall its meaning before you tap the card. ${RATE}`,
      recall: `Say it out loud first (a guess is fine), then tap the card to check. ${RATE}`,
      choice: "Pick the right meaning. A wrong guess is fine: seeing the answer straight after is how it sticks.",
      cloze: `Fill in the missing word.${typing() || " Type it, then press Enter or Check."}`,
      reorder: "Tap the words in the right order to build the sentence, then press Check. Tap a placed word to take it back.",
      listen: `Listen, then type what you hear. Tap the speaker to replay it.${typing()}`,
      listen_sentence: `Listen, then type the whole sentence. Replay as often as you like.${typing()}`,
      sentence_recognize: `Read the sentence and work out what it means before you tap the card. ${RATE}`,
      speaking: "Say the phrase out loud, then tap the mic. Tap again when you're done and you'll see how close you were.",
      shadow: "Listen to the voice, then repeat straight after it. Copy the rhythm and melody, not just the words.",
      minpair: "Two words that sound almost the same. Press Play, then pick the one you heard. Replay as much as you need.",
      chunk: `Translate the whole phrase as one unit. These are set expressions people say as a block.${typing()}`,
      number: `You'll see a number. Type it in ${n} words.${typing()}`,
      time: `You'll see a time on the clock. Type how you'd say it in ${n}.${typing()}`,
      conjugation: `Pick up the pronoun and the verb, then type the right form.${typing()}`,
      reader: "Read at your own pace and aim for the gist first. Tap any word for its meaning, and use \"Read it to me\" to hear it.",
      scenario: "Press Play to hear the whole dialogue, or tap a speaker button to hear one line. \"Narrow listen\" plays it three times: each pass you catch more.",
      grammar: "Read the rule, then look at the examples and the pitfall. Two minutes is enough: the cards will practise it for you.",
      pronunciation: `Read a section, then tap the speaker on each example and say it back out loud. "Play both" plays a pair back to back so you can hear the difference.`,
    })[key] || "";
  }

  const COACH_TITLES = {
    recognize: "Recognise", recall: "Recall", choice: "Multiple choice", cloze: "Fill the blank",
    reorder: "Reorder", listen: "Listen and type", listen_sentence: "Listen and type",
    sentence_recognize: "Sentence", speaking: "Speaking", shadow: "Shadowing",
    minpair: "Minimal pairs", chunk: "Chunks", number: "Numbers", time: "Times",
    conjugation: "Conjugation", reader: "Reading", scenario: "Dialogues", grammar: "Grammar",
    pronunciation: "Pronunciation",
  };

  /* ---------- coaching component ----------
   * bump(key) counts one "meeting" with this exercise; coachEl(key) returns
   * the element (expanded for the first COACH_SHOW_FOR meetings unless the
   * learner dismissed it, otherwise a small "?" that re-opens it). */
  function bump(key) {
    if (!coachText(key)) return;
    const c = coachState();
    c.seen[key] = (c.seen[key] || 0) + 1;
    ctx.persist();
  }

  // First meeting: a compact open tip (max ~3 lines). Every later meeting: one
  // line, "How this works", that opens in place (a native <details>).
  function coachEl(key) {
    const text = coachText(key);
    if (!text) return null;
    const c = coachState();
    const open0 = (c.seen[key] || 0) <= COACH_SHOW_FOR && !c.dismissed[key];
    const title = COACH_TITLES[key] || "Tip";
    const wrap = el(`<div class="coach" data-coach="${key}"></div>`);

    function paint(open, focusBtn) {
      wrap.classList.toggle("is-open", open);
      if (open) {
        wrap.innerHTML = `
          <div class="coach-card" role="note">
            <span class="coach-icon" aria-hidden="true">💡</span>
            <div class="coach-body">
              <span class="eyebrow">${esc(title)} · what to do</span>
              <p>${esc(text)}</p>
            </div>
            <button class="coach-dismiss" type="button" aria-label="Got it, hide this tip">Got it</button>
          </div>`;
        wrap.querySelector(".coach-dismiss").addEventListener("click", () => {
          const cs = coachState();
          cs.dismissed[key] = true;
          ctx.persist();
          paint(false, true);
        });
      } else {
        wrap.innerHTML = `
          <details class="coach-details">
            <summary><span aria-hidden="true">💡</span> How this works<span class="coach-sum-title"> · ${esc(title)}</span></summary>
            <p>${esc(text)}</p>
          </details>`;
        if (focusBtn) wrap.querySelector("summary").focus();
      }
    }
    paint(open0);
    return wrap;
  }

  // First few times the rating pad shows, say what it's for.
  function ratingHint() {
    const c = coachState();
    c.seen.rating = (c.seen.rating || 0) + 1;
    ctx.persist();
    if (c.seen.rating > 3) return "";
    return `<p class="rating-hint">How hard was it? This schedules your next review.</p>`;
  }

  // Forget what's been dismissed/seen so every tip shows again.
  function resetCoaching() {
    const s = ctx.getState();
    s.coach = { seen: {}, dismissed: {} };
    ctx.persist();
  }

  /* =====================================================================
     TOUR
     ===================================================================== */
  function tourSteps() {
    const n = L();
    const brand = cfg().brand;
    const nav = [
      ["📚", "Browse", `${pron() ? "The pronunciation guide, v" : "V"}ocabulary by theme, sentence patterns, dialogues and short grammar notes. Go here when you want to pick a topic.`],
      ["📖", "Read", `Short passages from beginner level up. Tap any word for its meaning.`],
      ["⚡", "Drills", `30-second sprints on one skill: ${hasSpeech() ? "ear training, " : ""}set phrases, numbers, times, verb forms${hasStt() ? ", speaking" : ""}.`],
    ];
    return [
      {
        id: "welcome", title: `Welcome to ${brand}`,
        visual: `<div class="ob-hero" aria-hidden="true"><span class="ob-hero-mark">${esc(cfg().flag)}</span><span class="ob-hero-word" data-no-guide>${esc(cfg().greeting(new Date().getHours()).target)}</span></div>`,
        body: `<p>A small daily practice that helps ${esc(n)} stick for good. About 15 minutes a day is plenty.</p>
               <p class="muted">No account needed. Your progress is saved in this browser, separately for each language.</p>
               ${ob().tourNote ? `<p class="muted">${esc(ob().tourNote)}</p>` : ""}`,
      },
      {
        id: "day", title: "How a day works",
        visual: `<ol class="ob-steps" aria-label="A typical day">
            <li><span class="ob-num">1</span><span class="ob-step-text"><strong>Review your due cards</strong><small>the main thing</small></span><span class="chip">~8 min</span></li>
            <li><span class="ob-num">2</span><span class="ob-step-text"><strong>One quick drill</strong><small>pick any</small></span><span class="chip">~3 min</span></li>
            <li><span class="ob-num">3</span><span class="ob-step-text"><strong>Read or listen to one thing</strong><small>a passage or dialogue</small></span><span class="chip">~4 min</span></li>
          </ol>`,
        body: `<p>That's the whole routine. Short and often beats long and rare: the app brings each card back just before you'd forget it.</p>`,
      },
      {
        id: "cards", title: "How the cards work",
        visual: `<div class="ob-mock" aria-hidden="true">
            <div class="ob-mock-card"><span class="ob-mock-q">?</span><small>try to recall first</small></div>
            <span class="ob-mock-arrow">→</span>
            <div class="ob-mock-rates">
              <span class="ob-pill again">Again</span><span class="ob-pill hard">Hard</span><span class="ob-pill good">Good</span><span class="ob-pill easy">Easy</span>
            </div>
          </div>`,
        body: `<p>You'll see different kinds of cards mixed together, on purpose. It feels harder than doing one kind at a time, and it works better.</p>
               <p><strong>Try to recall the answer before you flip.</strong> Then rate honestly. Again, Hard, Good or Easy decides when you'll see that card next.</p>`,
      },
      {
        id: "areas", title: "The other areas",
        visual: `<ul class="ob-areas" aria-label="Areas of the app">${nav.map(([i, t, d]) =>
          `<li><span class="ob-area-ico" aria-hidden="true">${i}</span><span class="ob-step-text"><strong>${t}</strong><small>${esc(d)}</small></span></li>`).join("")}</ul>`,
        body: `<p class="muted">You don't need to visit them all today. The first session is enough.</p>`,
      },
      {
        id: "lang", title: `Tips for ${n}`,
        visual: `${pron() ? `<div class="ob-pron">
            <span class="ob-area-ico" aria-hidden="true">🔊</span>
            <span class="ob-step-text"><strong>Start here: ${esc(pronLine())}</strong><small>Every sound explained with real words you can play. Read it once now, come back any time from Browse.</small></span>
            <button class="btn primary" type="button" data-ob-pron>Open the guide</button>
          </div>` : ""}<ul class="ob-areas" aria-label="Tips for ${esc(n)}">${tips().map((t) =>
          `<li><span class="ob-area-ico" aria-hidden="true">${t.icon}</span><span class="ob-step-text"><small class="ob-tip-text">${esc(t.text)}</small></span></li>`).join("")}</ul>`,
        body: "",
      },
      {
        id: "go", title: "Ready when you are",
        visual: `<div class="ob-hero" aria-hidden="true"><span class="ob-hero-mark">▶</span></div>`,
        body: `<p>Your first session is just ${FIRST_SESSION_SIZE} cards, about two minutes. Don't worry about getting things wrong: that's how it works.</p>
               <p class="muted">Every exercise has a short tip on screen. Need this tour or a refresher later? Tap <strong>?</strong> in the top bar.</p>`,
        final: true,
      },
    ];
  }

  let tourOpen = false;
  function openTour(opts = {}) {
    if (tourOpen) return;
    tourOpen = true;
    markTourSeen();
    const steps = tourSteps();
    let i = 0;
    const opener = document.activeElement;
    const siblings = ["header.app-header", "#app", "nav.bottom-nav"]
      .map((s) => document.querySelector(s)).filter(Boolean);

    const overlay = el(`
      <div class="ob-backdrop">
        <div class="ob-modal" role="dialog" aria-modal="true" aria-labelledby="ob-title" aria-describedby="ob-desc">
          <div class="ob-top">
            <span class="ob-count eyebrow" id="ob-count"></span>
            <button class="ob-skip" type="button" id="ob-skip">Skip tour</button>
          </div>
          <h2 id="ob-title" tabindex="-1" data-no-guide></h2>
          <div class="ob-visual" id="ob-visual"></div>
          <div class="ob-text" id="ob-desc"></div>
          <div class="ob-foot">
            <button class="btn ghost" type="button" id="ob-back">Back</button>
            <div class="ob-dots" id="ob-dots" aria-hidden="true"></div>
            <button class="btn primary" type="button" id="ob-next">Next</button>
          </div>
          <button class="btn full ob-alt" type="button" id="ob-look" hidden>Just look around</button>
        </div>
      </div>`);
    const $ = (s) => overlay.querySelector(s);

    function close(thenStart) {
      document.removeEventListener("keydown", onKey, true);
      siblings.forEach((s) => s.removeAttribute("inert"));
      document.body.classList.remove("ob-open");
      overlay.remove();
      tourOpen = false;
      if (thenStart) ctx.startFirst();
      else if (opener && opener.focus && document.contains(opener)) opener.focus();
    }

    function paint(focus) {
      const s = steps[i];
      $("#ob-count").textContent = `Step ${i + 1} of ${steps.length}`;
      $("#ob-visual").innerHTML = s.visual;
      $("#ob-title").textContent = s.title;
      $("#ob-desc").innerHTML = s.body;
      $("#ob-dots").innerHTML = steps.map((_, k) => `<span class="${k === i ? "on" : ""}"></span>`).join("");
      $("#ob-back").style.visibility = i === 0 ? "hidden" : "visible";
      const next = $("#ob-next");
      next.textContent = s.final ? `Start your first ${FIRST_SESSION_SIZE}-card session` : "Next";
      next.classList.toggle("lg", !!s.final);
      $("#ob-look").hidden = !s.final;
      $("#ob-skip").hidden = !!s.final;
      overlay.querySelector(".ob-modal").classList.toggle("is-final", !!s.final);
      if (focus) $("#ob-title").focus();
    }
    function go(d) {
      const j = i + d;
      if (j < 0 || j >= steps.length) return;
      i = j; paint(true);
    }
    function onKey(e) {
      if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); close(false); return; }
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        if (/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
        e.preventDefault();
        go(e.key === "ArrowRight" ? 1 : -1);
        return;
      }
      if (e.key === "Tab") {      // focus trap
        const f = Array.from(overlay.querySelectorAll("button, [href], [tabindex]:not([tabindex='-1'])"))
          .filter((b) => !b.hidden && !b.disabled && b.offsetParent !== null && getComputedStyle(b).visibility !== "hidden");
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (!overlay.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
        else if (e.shiftKey && (document.activeElement === first || document.activeElement === $("#ob-title"))) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }

    $("#ob-visual").addEventListener("click", (e) => {
      if (!e.target.closest("[data-ob-pron]")) return;
      close(false);
      ctx.openPronunciation();
    });
    $("#ob-skip").addEventListener("click", () => close(false));
    $("#ob-look").addEventListener("click", () => close(false));
    $("#ob-back").addEventListener("click", () => go(-1));
    $("#ob-next").addEventListener("click", () => {
      if (steps[i].final) close(true); else go(1);
    });
    overlay.addEventListener("mousedown", (e) => { if (e.target === overlay) close(false); });

    document.body.appendChild(overlay);
    document.body.classList.add("ob-open");
    siblings.forEach((s) => s.setAttribute("inert", ""));
    document.addEventListener("keydown", onKey, true);
    paint(true);
  }

  function maybeAutoTour() {
    if (!tourSeen() && isFirstRun()) setTimeout(() => openTour(), 250);
    else if (!tourSeen()) markTourSeen();   // returning user from before the tour existed: don't ambush them
  }

  /* =====================================================================
     HELP — "How it works"
     ===================================================================== */
  const SCIENCE = [
    ["Spaced repetition", "Each card comes back just before you'd forget it, so reviews are short but powerful."],
    ["Retrieval practice", "Pulling an answer out of memory teaches you more than re-reading it. The effort is the point."],
    ["Interleaving", "Card types and topics are mixed on purpose. It feels harder and sticks better."],
    ["Desirable difficulty", "Cards you know well get tougher formats. A little struggle makes memory stronger."],
    ["Pushed output", "Saying or writing it yourself (recall, fill the blank, reorder, speaking) shows what you can't say yet."],
    ["Comprehensible input", "Dialogues and reading sit just above your level, so you understand most and learn the rest."],
    ["Learning from errors", "A wrong guess before you know the answer is fine. It primes you to remember the right one."],
    ["Chunks", "Set phrases are learned as one block, which is how fluent speakers actually use them."],
    ["Shadowing", "Echoing a speaker in real time trains pronunciation, rhythm and flow."],
    ["Minimal pairs", "Ear training on sounds that are easy to confuse, until you can tell them apart."],
    ["Narrow listening", "Hearing the same short dialogue several times lets you notice more each time."],
    ["Explained mistakes", "Wrong answers get a one-line rule, not just a red mark."],
    ["Noticing", "After speaking, naming what felt hard (word order? a sound?) helps you fix it."],
    ["Extensive reading", "Lots of easy reading builds vocabulary and speed."],
  ];

  function renderHelp() {
    const n = L();
    const cardTypes = [
      ["Recognise", `See a ${n} word, recall its meaning, flip to check.`],
      ["Recall", `See the English, say the ${n} out loud, flip to check.`],
      ["Multiple choice", "Pick the right meaning from four. Used mostly for brand-new cards."],
      ["Fill the blank", "Type the missing word in a sentence."],
      ["Reorder", "Tap shuffled words into the right order."],
      hasSpeech() ? ["Listen and type", "Hear a word or sentence and type what you heard."] : null,
      ["Sentence", "Read a whole sentence, work out the meaning, flip to check."],
    ].filter(Boolean);
    const drills = [
      hasStt() ? ["Speaking", "Say a phrase out loud and get it scored."] : null,
      hasStt() ? ["Shadowing", "Echo the voice, copying its rhythm."] : null,
      hasSpeech() ? ["Minimal pairs", "Hear one of two near-identical words and pick it."] : null,
      ["Chunks", "Translate set phrases as whole units."],
      ["Numbers", "Type numbers in words."],
      ["Times", "Type the time the way you'd say it."],
      ["Conjugation", "Type the right verb form for each pronoun."],
    ].filter(Boolean);
    const rows = (a) => a.map(([t, d]) => `<li><strong>${esc(t)}</strong><span>${esc(d)}</span></li>`).join("");

    const wrap = el(`
      <div class="view stack help-view">
        <button class="btn ghost back-btn" id="help-back" type="button"><span class="icon-arrow-back" aria-hidden="true">←</span> Back</button>
        <div>
          <h1 style="margin-bottom:0">How it works</h1>
          <p class="muted" style="margin-top:4px">What to do, and why it works. Skim it once, then just start a session.</p>
        </div>
        <div class="row help-actions" style="gap:8px; flex-wrap:wrap">
          <button class="btn primary" id="help-tour">Replay the tour</button>
          <button class="btn" id="help-start">Start a session</button>
          <button class="btn ghost" id="help-reset">Show all tips again</button>
        </div>

        <article class="card help-plan">
          <span class="eyebrow">Plan</span>
          <h3 style="margin:6px 0 4px">Set a goal</h3>
          <p class="muted" style="margin:0 0 12px">Set a goal, e.g. 100 words in 20 days. The planner checks the pace is realistic for this language and adjusts kindly if life gets in the way.</p>
          <button class="btn primary" id="help-plan">Open the planner</button>
        </article>

        ${pron() ? `<article class="card help-pron">
          <span class="eyebrow">Start here · pronunciation</span>
          <h3 style="margin:6px 0 4px">${esc(pron().title)}</h3>
          <p class="muted" style="margin:0 0 12px">${Number(pron().minutes) || 15} minutes${hasSpeech() ? ", with audio for every example" : ""}. How each letter and sound works, the rules behind the spelling, and the classic mistakes. Read it once at the start, then dip back in.</p>
          <button class="btn primary" id="help-pron">Open the pronunciation guide</button>
        </article>` : ""}

        <article class="card">
          <span class="eyebrow">Your daily routine · ~15 min</span>
          <ol class="help-routine">
            <li><strong>Review your due cards.</strong> The home button shows how many are waiting.</li>
            <li><strong>Do one quick drill.</strong> Pick whichever skill feels weakest.</li>
            <li><strong>Read or listen to one thing.</strong> A short passage or a dialogue.</li>
          </ol>
          <p class="muted" style="margin:8px 0 0">Missed a day? Nothing breaks. Just do today's session.</p>
        </article>

        <article class="card">
          <span class="eyebrow">Rating a card</span>
          <p style="margin:6px 0 10px">Try to recall first, flip, then be honest. The rating schedules the next review.</p>
          <ul class="help-rates">
            <li><span class="ob-pill again">Again</span><span>Missed it. You'll see it again very soon.</span></li>
            <li><span class="ob-pill hard">Hard</span><span>Got it, but it took effort. Back in a day or two.</span></li>
            <li><span class="ob-pill good">Good</span><span>Got it. Back in a few days or more.</span></li>
            <li><span class="ob-pill easy">Easy</span><span>No effort at all. Back in weeks.</span></li>
          </ul>
        </article>

        <article class="card">
          <span class="eyebrow">Using a keyboard</span>
          <ul class="help-list">
            <li><strong>Tab</strong><span>Moves between buttons. The first stop is "Skip to main content".</span></li>
            <li><strong>Enter or Space</strong><span>Flips the card or presses the focused button.</span></li>
            <li><strong>1 2 3 4</strong><span>Rate a flipped card: Again, Hard, Good, Easy.</span></li>
            <li><strong>Esc</strong><span>Closes the tour and pop-up panels.</span></li>
          </ul>
        </article>

        <article class="card">
          <span class="eyebrow">The cards you'll meet</span>
          <ul class="help-list">${rows(cardTypes)}</ul>
          <p class="muted" style="margin:10px 0 0">They're mixed on purpose, and harder formats show up as a card matures.</p>
        </article>

        <article class="card">
          <span class="eyebrow">Drills · 30-second sprints</span>
          <ul class="help-list">${rows(drills)}</ul>
        </article>

        <article class="card">
          <span class="eyebrow">Browse, read, listen</span>
          <ul class="help-list">
            ${pron() ? `<li><strong>Pronunciation</strong><span>${esc(pron().title)}: a guide to every sound, with audio for each example. At the top of Browse.</span></li>` : ""}
            <li><strong>Vocabulary</strong><span>By theme. "Challenge me" tests you on words before you study them.</span></li>
            <li><strong>Sentence patterns</strong><span>Useful sentence frames you can reuse.</span></li>
            <li><strong>Dialogues</strong><span>Real situations. "Narrow listen" plays one three times.</span></li>
            <li><strong>Grammar</strong><span>Short notes: the rule, examples, and the classic pitfall.</span></li>
            <li><strong>Reading</strong><span>Tap any word for its meaning.</span></li>
          </ul>
        </article>

        <article class="card">
          <span class="eyebrow">Tips for ${esc(n)}</span>
          <ul class="help-list tips">${tips().map((t) => `<li><span aria-hidden="true">${t.icon}</span><span>${esc(t.text)}</span></li>`).join("")}</ul>
        </article>

        <article class="card">
          <span class="eyebrow">Why it works</span>
          <p class="muted" style="margin:6px 0 10px">Everything here is built on well-tested findings about how people learn languages.</p>
          <dl class="help-science">
            ${SCIENCE.map(([t, d]) => `<div><dt>${esc(t)}</dt><dd>${esc(d)}</dd></div>`).join("")}
          </dl>
        </article>
      </div>`);
    wrap.querySelector("#help-back").addEventListener("click", () => ctx.back());
    wrap.querySelector("#help-tour").addEventListener("click", () => openTour());
    const hp = wrap.querySelector("#help-pron");
    if (hp) hp.addEventListener("click", () => ctx.openPronunciation());
    wrap.querySelector("#help-plan").addEventListener("click", () => ctx.navigate("plan"));
    wrap.querySelector("#help-start").addEventListener("click", () => ctx.startSession());
    wrap.querySelector("#help-reset").addEventListener("click", (e) => {
      resetCoaching();
      e.target.textContent = "Done: tips will show again";
      e.target.disabled = true;
    });
    return wrap;
  }

  function init(c) { ctx = c; }

  return {
    init, bump, coachEl, ratingHint, openTour, maybeAutoTour, renderHelp,
    isFirstRun, resetCoaching, FIRST_SESSION_SIZE,
  };
})();
