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
    const guide = respell(text, override);
    if (!guide || guide === text) return "";
    return `<div class="respell">${escape(guide)}</div>`;
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
    const batch = SRS.pickBatch(ids, state.cards, { size });
    if (batch.length === 0) {
      toast("Nothing due. Pick a theme to learn new cards.");
      navigate("browse");
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
  function navigate(view) {
    currentView = view;
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
      default:       viewEl = renderHome();
    }
    if (viewEl) main.appendChild(viewEl);
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

    // Backup reminder banner — shown when last export is >= 7 days ago,
    // OR has never happened and the user has any review data to lose.
    const days = Store.daysSinceExport(state);
    const hasData = (state.sessions || []).length > 0 || Object.keys(state.cards).length > 0;
    if (hasData && days >= 7) {
      const stale = days === Infinity
        ? "Never backed up."
        : `Last backup: ${Math.floor(days)} days ago.`;
      const banner = el(`
        <div class="backup-banner">
          <div class="backup-banner-text">
            <strong>Back up your progress.</strong> ${stale} It only lives in this browser.
          </div>
          <button class="btn primary" id="banner-backup">Download backup</button>
          <button class="icon-btn" id="banner-dismiss" aria-label="Dismiss">✕</button>
        </div>
      `);
      banner.querySelector("#banner-backup").addEventListener("click", () => {
        Store.downloadBackup(state, Lang.cfg().backupPrefix);
        persist();
        banner.remove();
        toast("Backup saved to your Downloads folder.");
      });
      banner.querySelector("#banner-dismiss").addEventListener("click", () => {
        // Snooze for 24h: bump lastExportAt forward by (current - 6 days) so
        // we won't nag again for ~24 hours.
        state.lastExportAt = Date.now() - 6 * 24 * 60 * 60 * 1000;
        persist();
        banner.remove();
      });
      wrap.appendChild(banner);
    }

    // Hero
    const heroEl = el(`
      <section class="hero home-hero">
        <div class="row spread" style="margin-bottom: 14px;">
          <span class="streak-badge">🔥 ${state.streak} day streak</span>
          <span class="chip">${todayLabel()}</span>
        </div>
        <h1><span class="greeting-nl">${greeting.target}!</span></h1>
        <p class="muted">${greeting.en}. ${tip.body}</p>
      </section>
    `);
    wrap.appendChild(heroEl);

    // Session CTA
    const dueLabel = counts.due === 0
      ? `Nothing due — start fresh ones`
      : `${counts.due} card${counts.due === 1 ? "" : "s"} due`;
    const cta = el(`
      <button class="session-cta home-cta" id="cta-session">
        <div>
          <div class="session-due">${dueLabel}</div>
          <div class="session-label">Start a ${state.settings.sessionSize}-card mixed session</div>
        </div>
        <span class="arrow">→</span>
      </button>
    `);
    cta.addEventListener("click", () => startSession());
    wrap.appendChild(cta);

    // Quick stats
    const todayReviews = todaySession ? todaySession.reviewed : 0;
    const accuracy = todaySession && todaySession.reviewed
      ? Math.round((todaySession.correct / todaySession.reviewed) * 100)
      : null;
    wrap.appendChild(el(`
      <div class="grid-2 home-stats">
        <div class="stat">
          <span class="stat-label">Today</span>
          <span class="stat-value">${todayReviews}</span>
          <span class="stat-sub">reviews · goal ${state.settings.dailyGoal}</span>
        </div>
        <div class="stat">
          <span class="stat-label">Mastered</span>
          <span class="stat-value">${counts.mature}</span>
          <span class="stat-sub">of ${counts.total} cards</span>
        </div>
      </div>
    `));

    // Tip card
    wrap.appendChild(el(`
      <article class="card home-tip">
        <span class="eyebrow">Today's principle</span>
        <h3 style="margin-top:6px">${escape(tip.title)}</h3>
        <p class="muted" style="margin:0">${escape(tip.body)}</p>
      </article>
    `));

    // Quick links
    const quickLinks = el(`
      <div class="grid-2 home-quick">
        <button class="list-item" data-jump="study">
          <div class="li-main">
            <div class="li-title">Quick session</div>
            <div class="li-sub">${state.settings.sessionSize} mixed cards</div>
          </div>
          <span class="li-arrow">→</span>
        </button>
        <button class="list-item" data-jump="browse">
          <div class="li-main">
            <div class="li-title">Browse content</div>
            <div class="li-sub">Vocab, sentences, scenarios, grammar</div>
          </div>
          <span class="li-arrow">→</span>
        </button>
      </div>
    `);
    $$("[data-jump]", quickLinks).forEach((b) => {
      b.addEventListener("click", () => {
        if (b.dataset.jump === "study") startSession();
        else navigate(b.dataset.jump);
      });
    });
    wrap.appendChild(quickLinks);

    // Mastery breakdown
    wrap.appendChild(el(`
      <article class="card home-maturity">
        <span class="eyebrow">Card maturity</span>
        <h3 style="margin: 6px 0 12px">Where your cards are</h3>
        ${maturityBars(counts)}
      </article>
    `));

    // Drills (Speaking, Shadowing, Min-pairs, Chunks, Numbers, Times, Conjugation)
    const drillCard = el(`
      <article class="card home-drills">
        <span class="eyebrow">Quick drills</span>
        <h3 style="margin: 6px 0 4px">30-second sprints</h3>
        <p class="muted" style="margin: 0 0 12px; font-size: 13px">Targeted practice — each drill closes a gap flashcards can't catch.</p>
        <div class="drill-chips">
          ${hasSpeech() ? `
          <button class="drill-chip" data-drill="speaking">
            <span class="drill-chip-emoji">🎙️</span>
            <span class="drill-chip-label">Speaking</span>
            <span class="drill-chip-sub">say it · Whisper-scored</span>
          </button>
          <button class="drill-chip" data-drill="shadow">
            <span class="drill-chip-emoji">🌓</span>
            <span class="drill-chip-label">Shadowing</span>
            <span class="drill-chip-sub">repeat after the voice · prosody</span>
          </button>
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
            <span class="drill-chip-sub">top 25 verbs · present tense</span>
          </button>
        </div>
      </article>
    `);
    $$("[data-drill]", drillCard).forEach((b) => {
      b.addEventListener("click", () => startDrill(b.dataset.drill));
    });
    wrap.appendChild(drillCard);

    // Extensive reading (Liu & Zhang 2018: small-medium effect across all
    // language domains). 6 short Dutch passages, hand-tuned to ~95-98%
    // comprehensible relative to the existing vocab.
    if ((window.PASSAGES || []).length) {
      const readCard = el(`
        <article class="card home-read">
          <span class="eyebrow">Read</span>
          <h3 style="margin: 6px 0 4px">Short ${Lang.cfg().name} passages</h3>
          <p class="muted" style="margin: 0 0 12px; font-size: 13px">Tap any word for the translation.</p>
          <div class="passage-list" id="passage-list"></div>
        </article>
      `);
      const list = $("#passage-list", readCard);
      window.PASSAGES.forEach((p) => {
        const item = el(`
          <button class="passage-item" data-pid="${p.id}">
            <span class="passage-level">${escape(p.level)}</span>
            <div class="passage-meta">
              <div class="passage-title">${escape(p.title)}</div>
              <div class="passage-blurb">${escape(p.blurb)}</div>
            </div>
            <span class="li-arrow">→</span>
          </button>
        `);
        item.addEventListener("click", () => {
          nav.passageId = p.id;
          navigate("passage");
        });
        list.appendChild(item);
      });
      wrap.appendChild(readCard);
    }

    return wrap;
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
      <div style="display:grid; grid-template-columns: 90px 1fr 40px; gap:10px; align-items:center; padding:6px 0;">
        <span class="muted" style="font-size:13px">${label}</span>
        <div class="progress-track"><div class="progress-fill" style="width:${(val/total)*100}%; background: ${cls}"></div></div>
        <span class="mono" style="font-size:13px; text-align:end">${val}</span>
      </div>
    `;
    return mk("Mature",   c.mature,   "var(--success)") +
           mk("Young",    c.young,    "var(--primary)") +
           mk("Learning", c.learning, "var(--accent)")  +
           mk("New",      c.new,      "var(--text-subtle)");
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

    wrap.appendChild(el(`
      <div class="row spread" style="margin-bottom: 4px">
        <span class="muted" style="font-size:13px">${idx} / ${total}</span>
        <button class="btn ghost" id="quit-session" style="font-size:13px; padding:4px 10px">Quit</button>
      </div>
      <div class="progress-track" style="margin-bottom: 16px"><div class="progress-fill" style="width:${pct}%"></div></div>
    `));

    const id = currentSession.queue[idx];
    const mode = currentSession.modes[idx];
    const card = getCard(id);

    const cardEl = renderCardForMode(card, mode);
    wrap.appendChild(cardEl);

    const quitBtn = $("#quit-session", wrap);
    if (quitBtn) quitBtn.addEventListener("click", () => {
      if (confirm("Quit this session? Progress so far is saved.")) {
        currentSession = null;
        navigate("home");
      }
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
            <button class="audio-btn" id="audio-btn" title="Hear it">
              ${iconSound()}
            </button>
            <span class="prompt-line">${Lang.cfg().name} · what does this mean?</span>
            <div class="prompt-word">${gloss(card)}</div>
            ${respellLine(card.nl, card.respell)}
            ${card.gender ? `<div class="prompt-meta"><span class="chip primary">${card.gender}</span><span class="chip">${card.pos || ""}</span></div>` : `<div class="prompt-meta"><span class="chip">${card.pos || ""}</span></div>`}
          </div>
          <div class="face back">
            <span class="prompt-line">English</span>
            <div class="speak-row">
              <div class="prompt-en">${escape(card.en)}</div>
              <button class="speak-inline" data-speak-en="${escape(card.en)}" aria-label="Hear English">${iconSound()}</button>
            </div>
            <div class="speak-row" style="margin-top: 6px;">
              <span class="nl-text" style="font-size: 22px;">${escape(card.nl)}</span>
              <button class="speak-inline" data-speak-nl="${escape(card.nl)}" aria-label="Hear ${Lang.cfg().name}">${iconSound()}</button>
            </div>
            ${respellLine(card.nl, card.respell)}
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
            <p class="muted" style="margin-top:14px; font-size:14px">Say it aloud first. Then tap to check.</p>
          </div>
          <div class="face back">
            <button class="audio-btn" id="audio-btn">${iconSound()}</button>
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
        <div class="prompt-word ${askInDutch ? "" : "small"}">${escape(promptText)}</div>
        ${askInDutch ? respellLine(card.nl, card.respell) : ""}
        <div class="choice-grid" id="choices"></div>
        <div id="reveal-area"></div>
      </div>
    `);

    const grid = $("#choices", wrap);
    choices.forEach((text) => {
      const btn = el(`<button class="choice-btn">${escape(text)}</button>`);
      btn.addEventListener("click", () => {
        const isCorrect = text === correctAnswer;
        $$(".choice-btn", grid).forEach((b) => {
          b.disabled = true;
          if (b === btn) b.classList.add(isCorrect ? "correct" : "incorrect");
          if (b.textContent === correctAnswer && !isCorrect) b.classList.add("correct");
          if (b !== btn && b.textContent !== correctAnswer) b.classList.add("dim");
        });
        Speech.speak(card.nl, { lang: Lang.cfg().langCode, rate: state.settings.prefRate });
        showRatingPad(wrap, { auto: isCorrect ? 4 : 0 });
      });
      grid.appendChild(btn);
    });

    if (askInDutch) {
      const audioBtn = el(`<button class="btn ghost" style="font-size:13px; padding:6px 12px;">${iconSound()} Hear it</button>`);
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
          <button class="btn primary" id="play-btn">${iconSound()} Play</button>
          <button class="btn ghost" id="play-slow">Slow</button>
        </div>
        <input type="text" class="cloze-input" id="answer" placeholder="Type ${Lang.cfg().name} here…" autocomplete="off" autocapitalize="none" />
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
      const got = inp.value.trim().toLowerCase();
      const want = card.nl.trim().toLowerCase();
      const ok = got === want;
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
            <button class="audio-btn" id="audio-btn">${iconSound()}</button>
            <span class="prompt-line">Sentence · what does it mean?</span>
            <div class="prompt-word small">${escape(card.nl)}</div>
            ${respellLine(card.nl, card.respell)}
            ${card.pattern ? `<div class="prompt-meta"><span class="chip">${escape(card.pattern)}</span></div>` : ""}
          </div>
          <div class="face back">
            <span class="prompt-line">English</span>
            <div class="speak-row">
              <div class="prompt-en">${escape(card.en)}</div>
              <button class="speak-inline" data-speak-en="${escape(card.en)}" aria-label="Hear English">${iconSound()}</button>
            </div>
            <div class="speak-row" style="margin-top: 6px;">
              <span class="nl-text" style="font-size: 18px;">${escape(card.nl)}</span>
              <button class="speak-inline" data-speak-nl="${escape(card.nl)}" aria-label="Hear ${Lang.cfg().name}">${iconSound()}</button>
            </div>
            ${respellLine(card.nl, card.respell)}
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
        <input type="text" class="cloze-input" id="answer" placeholder="…" autocomplete="off" autocapitalize="none" />
        <div class="row">
          <button class="btn ghost" id="hear-btn">${iconSound()} Hear full sentence</button>
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
      const got = inp.value.trim().toLowerCase().replace(/[.,!?]/g, "");
      const want = chosen.tok.toLowerCase();
      const ok = got === want;
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
          <button class="btn ghost" id="hear-btn">${iconSound()} Hear it</button>
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
      const chip = el(`<button class="word-chip" data-bank-i="${i}">${escape(t)}</button>`);
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
      const built = $$(".word-chip.placed", ans).map((c) => c.textContent).join(" ");
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
          <button class="btn primary" id="play-btn">${iconSound()} Play</button>
          <button class="btn ghost" id="play-slow">Slow</button>
        </div>
        <textarea class="cloze-input" id="answer" rows="2" placeholder="Type what you hear…" autocomplete="off" autocapitalize="none"></textarea>
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

    function normalize(s) {
      return s.toLowerCase().replace(/[.,!?]/g, "").replace(/\s+/g, " ").trim();
    }
    function check() {
      const ok = normalize(inp.value) === normalize(card.nl);
      inp.classList.add(ok ? "correct" : "incorrect");
      checkBtn.disabled = true;
      const reveal = $("#reveal-area", wrap);
      reveal.innerHTML = `
        <div class="feedback ${ok ? "correct" : "incorrect"}">
          ${ok ? "Bullseye." : `Correct: <strong>${escape(card.nl)}</strong>`}
        </div>
        <div class="muted" style="margin-top:8px; font-size:14px">${escape(card.en)}</div>
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
      <div class="rating-row" id="rating-pad">
        <button class="rate-btn" data-q="0">Again<small>< 1 day</small></button>
        <button class="rate-btn" data-q="3">Hard<small>1–2 days</small></button>
        <button class="rate-btn" data-q="4">Good<small>days+</small></button>
        <button class="rate-btn" data-q="5">Easy<small>weeks</small></button>
      </div>
    `);
    reveal.appendChild(pad);
    $$(".rate-btn", pad).forEach((b) => {
      b.addEventListener("click", () => gradeAndAdvance(parseInt(b.dataset.q, 10)));
    });
    if (auto != null) {
      // Pre-highlight the suggested rating, but let the user override.
      const suggested = pad.querySelector(`.rate-btn[data-q="${auto}"]`);
      if (suggested) suggested.style.borderColor = "var(--primary)";
    }
  }

  function showHintBeforeReveal(wrap, msg) {
    const reveal = $("#reveal-area", wrap);
    if (!reveal) return;
    reveal.innerHTML = `<p class="muted" style="text-align:center; margin-top:18px; font-size:14px">${escape(msg)}</p>`;
  }

  /* ===== card content blocks ===== */
  function gloss(card) {
    if (card.gender) {
      // Trailing space INSIDE the span keeps copy/paste readable: "de tram"
      // not "detram", while CSS margin-right gives the visual gap.
      return `<span style="color:var(--text-subtle); font-size:24px; font-family:var(--sans); font-weight:400; margin-inline-end:6px">${card.gender} </span>${escape(card.nl)}`;
    }
    return escape(card.nl);
  }
  function exampleBlock(card) {
    if (!card.example) return "";
    return `
      <div class="prompt-example">
        <div class="speak-row">
          <span class="nl-text">${escape(card.example.nl)}</span>
          <button class="speak-inline" data-speak-nl="${escape(card.example.nl)}" aria-label="Hear ${Lang.cfg().name}">${iconSound()}</button>
        </div>
        <div class="speak-row muted">
          <span>${escape(card.example.en)}</span>
          <button class="speak-inline" data-speak-en="${escape(card.example.en)}" aria-label="Hear English">${iconSound()}</button>
        </div>
      </div>`;
  }
  function noteBlock(card) {
    if (!card.note) return "";
    return `<div class="prompt-note">${escape(card.note)}</div>`;
  }
  function revealsBlock(card) {
    if (!card.reveals || !card.reveals.length) return "";
    return `<div class="prompt-example">
      <span class="muted" style="font-size:13px">This sentence shows:</span>
      <ul style="margin:6px 0 0 18px; padding:0; font-size:14px">
        ${card.reveals.map((r) => `<li>${escape(r)}</li>`).join("")}
      </ul>
    </div>`;
  }

  function iconSound() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;
  }
  function iconCopy() {
    return `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
  }
  // Copy text to the clipboard, with a graceful fallback for older browsers.
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    try {
      const ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); ta.remove();
      return Promise.resolve();
    } catch (e) { return Promise.reject(e); }
  }
  // Directional arrows that mirror automatically under <html dir="rtl">.
  // Use these instead of a bare "→"/"←" glyph so RTL languages flip correctly.
  function arrowFwd()  { return `<span class="icon-arrow">→</span>`; }      // → (LTR) / ← (RTL)
  function arrowBack() { return `<span class="icon-arrow-back">→</span>`; } // ← (LTR) / → (RTL)

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
        <div class="row spread" style="margin-bottom: 4px">
          <span class="muted" style="font-size:13px">${d.idx + 1} / ${d.total}</span>
          <button class="btn ghost" id="quit-drill" style="font-size:13px; padding:4px 10px">Quit</button>
        </div>
        <div class="progress-track" style="margin-bottom: 16px"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="card lg drill-card">
          <span class="eyebrow">${drillLabel(d.kind)}</span>
          <div class="drill-prompt">${q.prompt}</div>
          <input type="text" class="cloze-input" id="drill-input" placeholder="type your answer…" autocomplete="off" autocapitalize="none" />
          <div class="row" style="gap: 10px">
            <button class="btn ghost" id="drill-skip" style="flex: 0">Skip</button>
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
          ? `<button class="btn ghost full" data-hear style="margin-top:8px">${iconSound()} Hear it</button>`
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
      if (confirm("Quit this drill?")) { currentDrill = null; navigate("home"); }
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
          <div style="font-size:48px; margin-bottom:8px;">${pct >= 80 ? "🔥" : pct >= 50 ? "👍" : "💪"}</div>
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
                <div class="muted" style="font-size:12px">${w.q.hint || ""}</div>
                <div class="nl-text" style="font-size: 17px;">${escape(w.q.answer)}</div>
                ${w.gave ? `<div class="muted" style="font-size:13px; margin-top:4px">you said: <s>${escape(w.gave)}</s></div>` : ""}
              </div>
              <button class="audio-btn-inline" data-speak>${iconSound()}</button>
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
        <div class="row spread" style="margin-bottom: 4px">
          <span class="muted" style="font-size:13px">${d.idx + 1} / ${d.total}</span>
          <button class="btn ghost" id="quit-drill" style="font-size:13px; padding:4px 10px">Quit</button>
        </div>
        <div class="progress-track" style="margin-bottom: 16px"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="card lg drill-card">
          <span class="eyebrow">Speaking · say it in ${Lang.cfg().name}</span>
          <div class="speaking-prompt">${escape(q.prompt)}</div>
          <div class="muted" style="font-size: 13px;">Tap the mic, say it aloud, then stop.</div>
          <div class="speaking-controls">
            <button class="btn primary lg" id="rec-toggle" aria-label="Record">
              <span id="rec-icon">●</span>
              <span id="rec-label">Tap to record</span>
            </button>
            <button class="btn ghost" id="rec-listen">${iconSound()} Hear answer</button>
          </div>
          <div id="rec-status" class="muted" style="font-size: 13px; min-height: 20px;"></div>
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
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        toast("This browser doesn't support audio recording.");
        return;
      }
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (e) {
        toast("Microphone permission denied.");
        return;
      }
      // Pick a supported mime type
      const candidates = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"];
      const mime = candidates.find((c) => MediaRecorder.isTypeSupported(c)) || "audio/webm";
      mediaRecorder = new MediaRecorder(stream, { mimeType: mime });
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
      status.textContent = "First speaking question downloads Whisper (~1 min). Subsequent ones are fast.";
    }
    async function onRecordingDone() {
      const blob = new Blob(chunks, { type: chunks[0]?.type || "audio/webm" });
      try {
        const heard = await Speech.transcribe(blob, { lang: Lang.active() });
        const grade = gradeSpeaking(q.answer, heard);
        showFeedback(heard, grade);
      } catch (e) {
        console.error(e);
        status.textContent = "Transcription failed: " + e.message;
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
            <div class="muted" style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">What felt hard?</div>
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
          <button class="btn ghost" id="speak-retry" style="flex:0">Retry</button>
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
      if (confirm("Quit this drill?")) { currentDrill = null; navigate("home"); }
    });

    // Probe: warn if MLX server isn't running
    Speech.probeMlx().then((ok) => {
      if (!ok) status.textContent = "Speech server not running — start with ./start-mlx.sh to score speaking.";
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
        <div class="row spread" style="margin-bottom: 4px">
          <span class="muted" style="font-size:13px">${d.idx + 1} / ${d.total}</span>
          <button class="btn ghost" id="quit-drill" style="font-size:13px; padding:4px 10px">Quit</button>
        </div>
        <div class="progress-track" style="margin-bottom: 16px"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="card lg drill-card">
          <span class="eyebrow">Shadowing · listen, then echo it back</span>
          <div class="speaking-prompt nl-text">${escape(q.answer)}</div>
          <div class="muted" style="font-size: 13px;">${escape(q.prompt)}</div>
          <div class="speaking-controls">
            <button class="btn primary lg" id="rec-toggle" aria-label="Listen, then shadow">
              <span id="rec-icon">▶</span>
              <span id="rec-label">Hear it, then shadow</span>
            </button>
            <button class="btn ghost" id="rec-listen-only">${iconSound()} Hear again</button>
          </div>
          <div id="rec-status" class="muted" style="font-size: 13px; min-height: 20px;"></div>
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
      recIcon.textContent = "▶";
      recLabel.textContent = "Playing target…";
      status.textContent = "Listen carefully — recording starts when audio ends.";
      Speech.speak(q.answer, {
        lang: Lang.cfg().langCode,
        rate: state.settings.prefRate,
        onend: async () => {
          // Then record
          if (!navigator.mediaDevices?.getUserMedia) {
            toast("This browser doesn't support audio recording.");
            stage = "ready"; recBtn.disabled = false; return;
          }
          try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
          catch { toast("Microphone permission denied."); stage = "ready"; recBtn.disabled = false; return; }
          const mime = ["audio/webm;codecs=opus","audio/webm","audio/mp4"].find((m) => MediaRecorder.isTypeSupported(m)) || "audio/webm";
          mediaRecorder = new MediaRecorder(stream, { mimeType: mime });
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
      const blob = new Blob(chunks, { type: chunks[0]?.type || "audio/webm" });
      try {
        const heard = await Speech.transcribe(blob, { lang: Lang.active() });
        const grade = gradeSpeaking(q.answer, heard);
        showFeedback(heard, grade);
      } catch (e) {
        status.textContent = "Transcription failed: " + e.message;
        stage = "ready"; recBtn.disabled = false;
        recIcon.textContent = "▶"; recLabel.textContent = "Hear it, then shadow";
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
          <button class="btn ghost" id="shadow-retry" style="flex:0">Retry</button>
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
      if (confirm("Quit this drill?")) { currentDrill = null; navigate("home"); }
    });
    Speech.probeMlx().then((ok) => {
      if (!ok) status.textContent = "Speech server not running — start with ./start-mlx.sh to score shadowing.";
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
        <div class="row spread" style="margin-bottom: 4px">
          <span class="muted" style="font-size:13px">${d.idx + 1} / ${d.total}</span>
          <button class="btn ghost" id="quit-drill" style="font-size:13px; padding:4px 10px">Quit</button>
        </div>
        <div class="progress-track" style="margin-bottom: 16px"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="card lg drill-card">
          <span class="eyebrow">Minimal pairs · which did you hear?</span>
          <div class="muted" style="text-align:center; font-size: 12px;">contrast: <strong>${escape(q.hint)}</strong></div>
          <button class="btn primary lg" id="play-pair" style="margin: 8px 0">${iconSound()} Play</button>
          <div class="minpair-grid">
            <button class="minpair-choice" data-side="left">
              <span class="nl-text">${escape(left.nl)}</span>
              <span class="muted" style="font-size: 13px;">${escape(left.en)}</span>
            </button>
            <button class="minpair-choice" data-side="right">
              <span class="nl-text">${escape(right.nl)}</span>
              <span class="muted" style="font-size: 13px;">${escape(right.en)}</span>
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
      if (confirm("Quit this drill?")) { currentDrill = null; navigate("home"); }
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
    const stale = (days >= 7) && (Object.keys(state.cards).length > 0);
    const wrap = el(`
      <div class="view stack">
        <div class="hero" style="text-align:center">
          <div style="font-size:48px; margin-bottom:8px;">🎉</div>
          <h1 style="margin-bottom:4px;">${Lang.cfg().doneHeading}</h1>
          <p class="muted">You finished the session. Streak: ${state.streak} day${state.streak === 1 ? "" : "s"}.</p>
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
          <div class="backup-banner" style="margin-top: 8px">
            <div class="backup-banner-text">
              <strong>Save your progress.</strong> No backup in ${Math.floor(days)} days.
            </div>
            <button class="btn primary" id="summary-backup">Download backup</button>
          </div>` : ""}
        <div class="row" style="gap:10px">
          <button class="btn full" id="back-home">Home</button>
          <button class="btn primary full" id="another">Another session</button>
        </div>
      </div>
    `);
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
  function renderBrowse() {
    const wrap = el(`
      <div class="view view-browse">
        <h1 style="margin-bottom:0">Browse</h1>
        <p class="muted" style="margin-top:0">Pick a category to learn or revisit.</p>

        <div class="section-header"><h2>Vocabulary themes</h2></div>
        <div class="grid-2 browse-vocab" id="theme-grid"></div>

        <div class="section-header"><h2>Sentence patterns</h2></div>
        <div class="stack-sm browse-list" id="sentence-themes"></div>

        <div class="section-header"><h2>Scenario dialogues</h2></div>
        <div class="stack-sm browse-list" id="scenario-list"></div>

        <div class="section-header"><h2>Grammar capsules</h2></div>
        <div class="stack-sm browse-list" id="grammar-list"></div>
      </div>
    `);

    // Themes
    const themeGrid = $("#theme-grid", wrap);
    VOCAB_THEMES.forEach((t) => {
      const items = VOCAB.filter((v) => v.theme === t.id);
      const counts = SRS.counts(items.map((i) => i.id), state.cards);
      const learned = counts.young + counts.mature;
      const btn = el(`
        <button class="list-item">
          <span style="font-size:24px">${t.icon}</span>
          <div class="li-main">
            <div class="li-title">${escape(t.name)}</div>
            <div class="li-sub">${learned}/${items.length} learned</div>
          </div>
          <span class="li-arrow">→</span>
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
      const items = SENTENCES.filter((s) => s.theme === t.id);
      const btn = el(`
        <button class="list-item">
          <span style="font-size:22px">${t.icon}</span>
          <div class="li-main">
            <div class="li-title">${escape(t.name)}</div>
            <div class="li-sub">${escape(t.blurb)}</div>
          </div>
          <span class="li-arrow">→</span>
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
          <span style="font-size:22px">${s.icon || "📍"}</span>
          <div class="li-main">
            <div class="li-title">${escape(s.title)}</div>
            <div class="li-sub">${s.dialogue.length} lines</div>
          </div>
          <span class="li-arrow">→</span>
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
          <span class="li-arrow">→</span>
        </button>
      `);
      btn.addEventListener("click", () => {
        nav.grammarId = g.id;
        navigate("grammar-detail");
      });
      grList.appendChild(btn);
    });

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
          <button class="btn ghost" id="back" style="align-self:flex-start; padding:6px 12px; font-size:13px">${arrowBack()} Back</button>
          <h1>${t.icon} ${escape(t.name)}</h1>
          <p class="muted">${items.length} cards. Tap a card to hear it.</p>
          <div class="row" style="gap: 8px; flex-wrap: wrap;">
            <button class="btn primary lg" id="study-theme" style="flex: 1; min-width: 200px;">Study this theme</button>
            <button class="btn lg" id="challenge-theme" title="Test yourself before studying — even failed pretests boost later retention">Challenge me · 5</button>
          </div>
          <div class="stack-sm" id="vocab-list"></div>
        </div>
      `);
      const list = $("#vocab-list", wrap);
      items.forEach((v) => {
        const st = state.cards[v.id];
        const m = SRS.maturity(st);
        const item = el(`
          <div class="list-item vocab-item">
            <div class="li-main">
              <button class="vocab-word" title="Hear the word">
                <span class="li-title nl-text" style="font-size:18px">${v.gender ? `<span class="muted" style="font-weight:400">${v.gender}</span> ` : ""}${escape(v.nl)}</span>
                <span class="li-sub">${escape(v.en)}</span>
              </button>
              ${v.example ? `
                <div class="vocab-example-row">
                  <button class="vocab-example" title="Hear the example sentence">
                    ${iconSound()}<em class="nl-text">${escape(v.example.nl)}</em>
                  </button>
                  <button class="vocab-copy" title="Copy sentence" aria-label="Copy sentence">${iconCopy()}</button>
                </div>` : ""}
            </div>
            <span class="chip ${m === "mature" ? "success" : m === "young" ? "primary" : ""}">${m}</span>
          </div>
        `);
        // Clicking anywhere on the card → word pronunciation; the example
        // sentence → sentence pronunciation; the copy button → copy only.
        item.addEventListener("click", () => Speech.speak(v.nl, { rate: state.settings.prefRate }));
        const exBtn = $(".vocab-example", item);
        if (exBtn) exBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          Speech.speak(v.example.nl, { rate: state.settings.prefRate });
        });
        const copyBtn = $(".vocab-copy", item);
        if (copyBtn) copyBtn.addEventListener("click", (e) => {
          e.stopPropagation();  // don't play the word or the sentence
          copyText(v.example.nl).then(() => {
            copyBtn.classList.add("copied");
            toast("Copied");
            setTimeout(() => copyBtn.classList.remove("copied"), 1200);
          }).catch(() => toast("Couldn't copy"));
        });
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
          <button class="btn ghost" id="back" style="align-self:flex-start; padding:6px 12px; font-size:13px">${arrowBack()} Back</button>
          <h1>${t.icon} ${escape(t.name)}</h1>
          <p class="muted">${escape(t.blurb)}</p>
          <button class="btn primary lg full" id="study-theme">Drill these patterns</button>
          <div class="stack-sm" id="sent-list"></div>
        </div>
      `);
      const list = $("#sent-list", wrap);
      items.forEach((s) => {
        const item = el(`
          <article class="card">
            <div class="row spread" style="align-items:flex-start">
              <div style="flex:1">
                <div class="nl-text" style="font-size:19px">${escape(s.nl)}</div>
                <div class="muted" style="margin-top:4px; font-size:14px">${escape(s.en)}</div>
                ${s.pattern ? `<div style="margin-top:8px"><span class="chip">${escape(s.pattern)}</span></div>` : ""}
                ${s.reveals ? `<ul class="muted" style="font-size:13px; margin:8px 0 0 18px; padding:0">${s.reveals.map((r) => `<li>${escape(r)}</li>`).join("")}</ul>` : ""}
              </div>
              <button class="audio-btn-inline" data-speak="${escape(s.nl)}" style="margin-top:2px; flex-shrink:0;">${iconSound()}</button>
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
        <button class="btn ghost" id="back" style="align-self:flex-start; padding:6px 12px; font-size:13px">${arrowBack()} Back</button>
        <h1>${s.icon || "📍"} ${escape(s.title)}</h1>
        <p class="muted">${escape(s.setting)}</p>
        <div class="row" style="flex-wrap: wrap; gap: 8px;">
          <button class="btn primary" id="play-all">${iconSound()} Play full dialogue</button>
          <button class="btn" id="narrow-listen" title="Same dialogue, 3 passes, alternating speakers">${iconSound()} Narrow listen · 3×</button>
        </div>
        <div id="narrow-status" class="muted" style="font-size: 13px; min-height: 0;"></div>
        <div class="dialogue" id="dlg"></div>
        ${s.notes && s.notes.length ? `
          <div class="card" style="background: var(--accent-soft); border-color: transparent">
            <span class="eyebrow" style="color:var(--accent)">Notes</span>
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
          <button class="audio-btn-inline" data-line="${i}">${iconSound()}</button>
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
        btn.textContent = "🔁 Narrow listen · 3×";
        status.textContent = "";
        return;
      }
      btn.innerHTML = "■ Stop narrow listen";
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
        btn.innerHTML = `${iconSoundInline()} Narrow listen · 3×`;
        narrowCancel = null;
      })();
    });

    return wrap;
  }
  function iconSoundInline() { return iconSound(); }

  // ----- Reader view (Extensive Reading) -----
  // Tokenises each paragraph into <span class="readable"> elements. Tapping
  // a word looks up the translation: passage glosses[] first, then VOCAB,
  // then the first token of any sentence whose .nl matches. Misses fall
  // through to a "no gloss yet" message rather than the dictionary attempt.
  function renderPassage(pId) {
    const p = (window.PASSAGES || []).find((x) => x.id === pId);
    if (!p) { navigate("home"); return el(`<div></div>`); }

    function lookup(word) {
      const w = word.toLowerCase().replace(/[.,!?;:"'()]/g, "");
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
        <button class="btn ghost" id="back" style="align-self:flex-start; padding:6px 12px; font-size:13px">${arrowBack()} Back</button>
        <article class="card lg passage-card">
          <span class="eyebrow">${escape(p.level)} · Reading</span>
          <h1 style="margin: 8px 0 6px">${escape(p.title)}</h1>
          <p class="muted" style="margin: 0 0 14px">${escape(p.blurb)}</p>
          <div class="passage-body" id="passage-body"></div>
          <div class="row" style="gap: 8px; margin-top: 14px;">
            <button class="btn" id="play-passage">${iconSound()} Read it to me</button>
          </div>
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
      const tokens = para.split(/(\s+|[.,!?;:"'()])/);
      tokens.forEach((tok) => {
        if (/^\s+$/.test(tok) || /^[.,!?;:"'()]$/.test(tok)) {
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
            <button class="audio-btn-inline" data-speak>${iconSound()}</button>
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
            <button class="audio-btn-inline" data-speak>${iconSound()}</button>
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

    $("#back", wrap).addEventListener("click", () => navigate("home"));
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
        <button class="btn ghost" id="back" style="align-self:flex-start; padding:6px 12px; font-size:13px">${arrowBack()} Back</button>
        <article class="capsule">
          <span class="eyebrow">Grammar capsule</span>
          <h1 style="margin: 6px 0 8px">${escape(g.title)}</h1>
          <p class="muted" style="margin:0">${escape(g.blurb)}</p>
          <p style="margin-top:14px">${escape(g.body)}</p>
          <div class="stack-sm" style="margin-top: 16px" id="examples"></div>
          <div class="pitfall"><strong>Pitfall:</strong> ${escape(g.pitfall)}</div>
        </article>
      </div>
    `);
    const exWrap = $("#examples", wrap);
    g.examples.forEach((ex) => {
      const exEl = el(`
        <div class="card" style="background: var(--surface-2); padding: 14px 16px;">
          <div class="row spread" style="align-items: flex-start">
            <div style="flex:1">
              <div class="nl-text" style="font-size:18px">${escape(ex.nl)}</div>
              <div class="muted" style="font-size:14px; margin-top:4px">${escape(ex.en)}</div>
              ${ex.tag ? `<div style="margin-top:8px"><span class="chip">${escape(ex.tag)}</span></div>` : ""}
            </div>
            <button class="audio-btn-inline" data-speak>${iconSound()}</button>
          </div>
        </div>
      `);
      exEl.querySelector("[data-speak]").addEventListener("click", () => Speech.speak(ex.nl, { rate: state.settings.prefRate }));
      exWrap.appendChild(exEl);
    });
    $("#back", wrap).addEventListener("click", () => navigate("browse"));
    return wrap;
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
        <h1 style="margin-bottom:0">Stats</h1>
        <p class="muted" style="margin-top:0">Your learning protocol, in numbers.</p>

        <div class="grid-2 stats-tiles">
          <div class="stat">
            <span class="stat-label">Streak</span>
            <span class="stat-value">${state.streak}</span>
            <span class="stat-sub">consecutive days</span>
          </div>
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
          <p class="muted" style="font-size:12px; margin-top:10px">Each cell is a day. Darker = more reviews. Aim for any colour every day — even 5 minutes counts.</p>
        </article>

        <article class="card stats-maturity">
          <span class="eyebrow">Maturity breakdown</span>
          <h3 style="margin: 6px 0 12px">Card progression</h3>
          ${maturityBars(counts)}
          <p class="muted" style="font-size:13px; margin-top:14px;">
            <strong>New</strong> = unseen · <strong>Learning</strong> = next review &lt; 7 days · <strong>Young</strong> = &lt; 30 days · <strong>Mature</strong> = ≥ 30 days. Mature cards rarely come back.
          </p>
        </article>

        <article class="card stats-settings">
          <span class="eyebrow">Settings</span>
          <h3 style="margin: 6px 0 14px">Tune your protocol</h3>
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
                ${Lang.cfg().voices.map(v => `<option value="${v.value}" ${state.settings.targetVoice === v.value ? "selected" : ""}>${v.label}</option>`).join("")}
              </select>
            </label>
            <label class="row spread" style="gap:12px">
              <span>English voice</span>
              <select id="set-english-voice">
                ${[["M1","Male 1"],["F1","Female 1"],["M2","Male 2"],["F2","Female 2"]]
                  .map(([v,l]) => `<option value="${v}" ${state.settings.englishVoice === v ? "selected" : ""}>Supertonic · ${l}</option>`).join("")}
              </select>
            </label>
            <div id="tts-status" class="muted" style="font-size:12px;"></div>
          </div>
        </article>

        <article class="card stats-data">
          <span class="eyebrow">Data</span>
          <h3 style="margin: 6px 0 12px">Backup & reset</h3>
          <div class="row" style="gap: 10px; flex-wrap: wrap">
            <button class="btn" id="export-btn">Export JSON</button>
            <button class="btn" id="import-btn">Import JSON</button>
            <button class="btn" id="reset-btn" style="color: var(--error); border-color: var(--error)">Reset everything</button>
          </div>
          <p class="muted" style="font-size:12px; margin-top:10px">Your progress lives only in this browser's localStorage. Export to back it up.</p>
        </article>
      </div>
    `);

    // Heatmap
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

    // Settings
    $("#set-size", wrap).addEventListener("change", (e) => {
      state.settings.sessionSize = parseInt(e.target.value, 10);
      persist();
    });
    $("#set-goal", wrap).addEventListener("change", (e) => {
      state.settings.dailyGoal = parseInt(e.target.value, 10);
      persist();
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
      const mlxOK = Speech.probeMlx ? await Speech.probeMlx() : false;
      const parts = [];
      if (mlxOK) {
        parts.push(`<span class="chip success">TTS: Supertonic-3 (on-device) ready</span>`);
      } else {
        parts.push(`<span class="chip">TTS: not running — start with <span class="mono">./start-mlx.sh</span></span>`);
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
      if (confirm("This will erase all progress, streaks, and settings. Continue?")) {
        Store.reset();
        location.reload();
      }
    });

    return wrap;
  }

  /* ============ THEME TOGGLE ============ */
  function applyTheme() {
    const t = state.settings.theme;
    document.documentElement.setAttribute("data-theme", t);
  }
  function cycleTheme() {
    const order = ["auto", "light", "dark"];
    const i = order.indexOf(state.settings.theme);
    state.settings.theme = order[(i + 1) % order.length];
    persist();
    applyTheme();
    toast(`Theme: ${state.settings.theme}`);
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

  // Does the active language have a wired-up speech (TTS/STT) model?
  function hasSpeech() { return Lang.cfg().hasSpeech !== false; }

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
    // Root flags: hide audio-only UI when there's no speech; flip the WHOLE app
    // to right-to-left for scripts like Sorani (Arabic-based). Latin-script
    // languages — including Kurmanji — stay left-to-right (the default).
    document.documentElement.toggleAttribute("data-no-speech", !speech);
    document.documentElement.setAttribute("dir", cfg.rtl ? "rtl" : "ltr");
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

  /* ============ INIT ============ */
  function init() {
    loadLanguage(activeLangId());
    applyTheme();
    buildLangSwitcher();

    $$(".tab, .bn-tab").forEach((b) => {
      b.addEventListener("click", () => navigate(b.dataset.view));
    });
    const tt = document.getElementById("theme-toggle");
    if (tt) tt.addEventListener("click", cycleTheme);

    // Streak housekeeping: if last session was more than 1 day ago, break streak
    if (state.lastSessionDate) {
      const gap = daysBetween(state.lastSessionDate, todayISO());
      if (gap > 1) {
        state.streak = 0;
        persist();
      }
    }

    render();
  }

  // expose for debugging
  window.__app = { state: () => state, store: Store, srs: SRS, lang: Lang };

  return { init, navigate, startSession, arrowFwd, arrowBack };
})();

document.addEventListener("DOMContentLoaded", App.init);
