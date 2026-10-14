/* =====================================================================
   Goals / Plan
   ---------------------------------------------------------------------
   Part 1  Goals.Model  - pure functions (no DOM, unit-tested in node).
   Part 2  Views        - Plan page, create-goal flow, home goal card.
   The numbers come from published research; every estimate is labelled
   as an estimate and the sources are listed on the Plan page.
   ===================================================================== */
(function (root) {
  "use strict";

  /* ============================ PART 1: MODEL ============================ */

  // Difficulty of each language for an English speaker. `m` scales time.
  const LANGS = {
    nl: {
      fsi: "I", hours: "600-750", weeks: "24-30", m: 1.0, estimated: false,
      basis: "Listed by the US Foreign Service Institute (FSI) as Category I: about 24-30 weeks, 600-750 class hours.",
      source: "FSI language difficulty ranking for English speakers",
    },
    de: {
      fsi: "II", hours: "~750", weeks: "30", m: 1.15, estimated: false,
      basis: "Listed by the FSI as Category II: about 30 weeks, ~750 class hours.",
      source: "FSI language difficulty ranking for English speakers",
    },
    ckb: {
      fsi: "III (est.)", hours: "~1100 (est.)", weeks: "44 (est.)", m: 1.7, estimated: true,
      basis: "No direct study exists for Kurdish. Estimated from its closest rated relatives (Persian, Dari, Tajik, Pashto: all FSI Category III, about 44 weeks, ~1100 hours). Sorani also uses the Arabic script, split ergativity and pronoun clitics, so we scale it a little higher.",
      source: "Estimate from FSI ratings of Iranian-branch languages",
    },
    kmr: {
      fsi: "III (est.)", hours: "~1100 (est.)", weeks: "44 (est.)", m: 1.65, estimated: true,
      basis: "No direct study exists for Kurdish. Estimated from its closest rated relatives (Persian, Dari, Tajik, Pashto: all FSI Category III). The Latin script lowers the start-up cost slightly; ergativity, case and gender remain.",
      source: "Estimate from FSI ratings of Iranian-branch languages",
    },
  };

  // Cambridge English guided-learning hours, cumulative, for an "average" language.
  const CEFR = {
    A1: { lo: 90, hi: 100, vocab: "under 1,500 words" },
    A2: { lo: 180, hi: 200, vocab: "1,500-2,500 words" },
    B1: { lo: 350, hi: 400, vocab: "2,750-3,250 words" },
    B2: { lo: 500, hi: 600, vocab: "3,250-3,750 words" },
  };

  const BANDS = [
    { id: "comfortable", max: 10, label: "Comfortable" },
    { id: "ambitious", max: 20, label: "Ambitious but doable" },
    { id: "heavy", max: 30, label: "Heavy: expect long sessions and more forgetting" },
    { id: "not", max: Infinity, label: "Not recommended" },
  ];
  const AMBITIOUS_MAX = 20;
  const LEARNING_LAG_DAYS = 2;

  function multiplier(langId) { return (LANGS[langId] || LANGS.nl).m; }

  /* ---- dates (ISO yyyy-mm-dd, UTC arithmetic so time zones never shift a day) ---- */
  function isoToUTC(iso) { const [y, m, d] = iso.split("-").map(Number); return Date.UTC(y, m - 1, d); }
  function diffDays(aISO, bISO) { return Math.round((isoToUTC(bISO) - isoToUTC(aISO)) / 86400000); }
  function addDays(iso, n) { return new Date(isoToUTC(iso) + n * 86400000).toISOString().slice(0, 10); }
  function fmtDate(iso, withWeekday) {
    return new Date(isoToUTC(iso)).toLocaleDateString("en-GB", {
      timeZone: "UTC", day: "numeric", month: "short", ...(withWeekday ? { weekday: "short" } : {}),
    });
  }

  function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }

  function bandFor(scaled) { return BANDS.find((b) => scaled <= b.max); }

  /* ---- words-goal workload ---- */
  function bufferDays(days) { return Math.ceil(days * 0.2); }
  function introDays(days) { return Math.max(1, days - bufferDays(days)); }
  function reviewRatio(m) { return 7 + 4 * (m - 1); }

  function planWords({ n, days, dpw = 7, m = 1 }) {
    const intro = introDays(days);
    const newPerDay = Math.max(0, Math.ceil(n / (intro * dpw / 7)));
    const r = reviewRatio(m);
    const reviewsPerDay = Math.round(newPerDay * r);
    const minutes = Math.ceil((newPerDay * 30 * m + reviewsPerDay * 9) / 60);
    const scaled = newPerDay * m;
    return { n, days, dpw, m, introDays: intro, bufferDays: days - intro, newPerDay, reviewRatio: r, reviewsPerDay, minutes, scaled, band: bandFor(scaled) };
  }

  // Reviews expected on day t of a goal (ramps up over the first two weeks).
  function reviewsOnDay(newPerDay, m, t) { return Math.round(newPerDay * reviewRatio(m) * Math.min(1, t / 14)); }

  // Fewest days that land the plan at (or under) the "Ambitious" ceiling.
  function suggestDays({ n, dpw = 7, m = 1, maxScaled = AMBITIOUS_MAX }) {
    for (let d = 1; d <= 1500; d++) if (planWords({ n, days: d, dpw, m }).scaled <= maxScaled) return d;
    return 1500;
  }
  // Most words that fit in `days` at the "Ambitious" ceiling.
  function suggestN({ days, dpw = 7, m = 1, maxScaled = AMBITIOUS_MAX }) {
    let n = Math.floor(Math.floor(maxScaled / m) * introDays(days) * dpw / 7);
    while (n > 0 && planWords({ n, days, dpw, m }).scaled > maxScaled) n--;
    return Math.max(0, n);
  }

  /* ---- what counts as learned ---- */
  // Recalled on two different days, with the next review at least 3 days out.
  function isLearned(st) {
    if (!st) return false;
    if ((st.reps || 0) >= 2 && (st.interval || 0) >= 3) return true;
    return (st.interval || 0) >= 7 && (st.reps || 0) > 0;   // young / mature
  }
  function isIntroduced(st) { return !!st && (st.reps || 0) > 0; }

  // How many cards in `scopeIds` were introduced / learned since the goal started.
  function progressWords(goal, cards, scopeIds) {
    const base = new Set((goal.baseline && goal.baseline.seen) || []);
    let introduced = 0, learned = 0;
    for (const id of scopeIds) {
      if (base.has(id)) continue;
      const st = cards[id];
      if (isIntroduced(st)) introduced++;
      if (isLearned(st)) learned++;
    }
    return { introduced, learned };
  }

  /* ---- pausing ---- */
  function currentPauseDays(goal, today) {
    return goal.status === "paused" && goal.pausedAt ? Math.max(0, diffDays(goal.pausedAt, today)) : 0;
  }
  function effectiveEnd(goal, today) { return addDays(goal.endDate, (goal.pausedDays || 0) + currentPauseDays(goal, today)); }
  // Active (unpaused) days since the start.
  function elapsedActive(goal, today) {
    return Math.max(0, diffDays(goal.startDate, today) - (goal.pausedDays || 0) - currentPauseDays(goal, today));
  }

  /* ---- pace tracking ---- */
  function expectedCount(n, elapsed, intro) {
    return n * clamp((elapsed - LEARNING_LAG_DAYS) / intro, 0, 1);
  }
  function paceStatus(done, expected, n) {
    const tol = Math.max(2, Math.ceil(n * 0.1));
    if (done - expected > tol) return "ahead";
    if (expected - done > tol) return "behind";
    return "on";
  }

  // Re-plan the words still to introduce over the days that remain.
  function adjustPlan({ n, introduced, dpw = 7, m = 1, goal, today }) {
    const totalDays = diffDays(goal.startDate, goal.endDate);   // original span in days
    const buf = bufferDays(Math.max(1, totalDays));
    const end = effectiveEnd(goal, today);
    const introEnd = addDays(end, -buf);
    const remaining = Math.max(0, n - introduced);
    const daysLeft = Math.max(1, diffDays(today, introEnd));
    const newPerDay = Math.ceil(remaining / (daysLeft * dpw / 7));
    const scaled = newPerDay * m;
    const band = bandFor(scaled);
    let suggestedEnd = null;
    if (remaining > 0 && scaled > AMBITIOUS_MAX) {
      let d = 1;
      while (d < 1500 && Math.ceil(remaining / (d * dpw / 7)) * m > AMBITIOUS_MAX) d++;
      suggestedEnd = addDays(today, d - 1 + buf);
      if (diffDays(end, suggestedEnd) <= 0) suggestedEnd = null;
    }
    return { remaining, daysLeft, newPerDay, band, scaled, suggestedEnd };
  }

  // Today's new-word allowance for an active words goal (never above "Heavy").
  function newQuotaToday({ n, introduced, doneToday, dpw = 7, m = 1, goal, today }) {
    const adj = adjustPlan({ n, introduced: Math.max(0, introduced - doneToday), dpw, m, goal, today });
    const cap = Math.max(1, Math.floor(30 / m));
    const plannedToday = Math.min(adj.newPerDay, cap);
    return { planned: plannedToday, left: Math.max(0, plannedToday - doneToday), remaining: adj.remaining };
  }

  /* ---- consistency (not a streak) ---- */
  function practisedDates(sessions) {
    const s = new Set();
    for (const x of sessions || []) if (x && x.date && (x.reviewed || 0) > 0) s.add(x.date);
    return s;
  }
  function consistency(sessions, today, n = 14) {
    const set = practisedDates(sessions);
    const days = [];
    for (let i = n - 1; i >= 0; i--) { const d = addDays(today, -i); days.push({ date: d, on: set.has(d) }); }
    const last7 = days.slice(-7).filter((d) => d.on).length;
    return { days, last7, lastN: days.filter((d) => d.on).length };
  }
  // Days practised in the 7-day window ending `today` (for habit dots).
  function practisedThisWeek(sessions, today) { return consistency(sessions, today, 7); }

  /* ---- level horizon (estimate only) ---- */
  function horizon({ level, m = 1, minutesPerDay = 15, dpw = 5 }) {
    const c = CEFR[level];
    const loH = c.lo * m, hiH = c.hi * m;
    const perWeek = (minutesPerDay * dpw) / 60;       // hours a week
    return { level, hoursLo: Math.round(loH), hoursHi: Math.round(hiH), weeksLo: Math.ceil(loH / perWeek), weeksHi: Math.ceil(hiH / perWeek), perWeek };
  }

  function fmtDuration(weeks) {
    if (weeks < 16) return `${weeks} week${weeks === 1 ? "" : "s"}`;
    const months = weeks / 4.345;
    if (months < 24) return `about ${Math.round(months)} months`;
    return `about ${(months / 12).toFixed(1)} years`;
  }

  const Model = {
    LANGS, CEFR, BANDS, AMBITIOUS_MAX, LEARNING_LAG_DAYS,
    multiplier, bandFor, bufferDays, introDays, reviewRatio, planWords, reviewsOnDay,
    suggestDays, suggestN, isLearned, isIntroduced, progressWords,
    currentPauseDays, effectiveEnd, elapsedActive, expectedCount, paceStatus,
    adjustPlan, newQuotaToday, consistency, practisedThisWeek, horizon, fmtDuration,
    addDays, diffDays, fmtDate,
  };

  /* ====================== PART 2: STATE + SCOPES ====================== */

  function ensure(state) {
    if (!Array.isArray(state.goals)) state.goals = [];
    if (!state.newByDate || typeof state.newByDate !== "object") state.newByDate = {};
    if (!state.passagesRead || typeof state.passagesRead !== "object") state.passagesRead = {};
    return state;
  }

  function langId() { return (root.Lang && root.Lang.active && root.Lang.active()) || "nl"; }
  function langName() { return (root.Lang && root.Lang.cfg().name) || "this language"; }
  function mNow() { return multiplier(langId()); }

  const CONTENT_KINDS = {
    pronunciation: { label: "Pronunciation guide", unit: "section", all: () => ((root.PRONUNCIATION && root.PRONUNCIATION.sections) || []).map((s) => s.id), seen: (st) => (st.pronunciation && st.pronunciation.read) || {} },
    grammar: { label: "Grammar capsules", unit: "capsule", all: () => (root.GRAMMAR || []).map((g) => g.id), seen: (st) => st.seenGrammar || {} },
    dialogues: { label: "Scenario dialogues", unit: "dialogue", all: () => (root.SCENARIOS || []).map((s) => s.id), seen: (st) => st.seenScenarios || {} },
    passages: { label: "Short passages", unit: "passage", all: () => (root.PASSAGES || []).map((p) => p.id), seen: (st) => st.passagesRead || {} },
  };

  // Card ids a words goal draws from.
  function scopeIds(scope) {
    const V = root.VOCAB || [], S = root.SENTENCES || [];
    if (!scope || scope.kind === "all") return V.map((v) => v.id);
    if (scope.kind === "sentences") return S.map((s) => s.id);
    if (scope.kind === "theme") return V.filter((v) => v.theme === scope.themeId).map((v) => v.id);
    return V.map((v) => v.id);
  }
  function scopeLabel(scope) {
    if (!scope || scope.kind === "all") return "words";
    if (scope.kind === "sentences") return "sentences";
    if (scope.kind === "theme") {
      const t = (root.VOCAB_THEMES || []).find((x) => x.id === scope.themeId);
      return t ? `${t.name} words` : "words";
    }
    return "words";
  }

  function goalTitle(g) {
    if (g.type === "words") return `Learn ${g.target.n} ${scopeLabel(g.scope)}`;
    if (g.type === "habit") return `Practise ${g.minutesPerDay} min, ${g.daysPerWeek} days a week`;
    const k = CONTENT_KINDS[g.scope.kind];
    return `Finish: ${k ? k.label.toLowerCase() : "content"}`;
  }

  /* ---- snapshots / progress for one goal ---- */
  function describe(state, g, today) {
    ensure(state);
    const m = mNow();
    const out = { goal: g, title: goalTitle(g), end: effectiveEnd(g, today), daysLeft: Math.max(0, diffDays(today, effectiveEnd(g, today))) };
    if (g.type === "words") {
      const ids = scopeIds(g.scope);
      const pr = progressWords(g, state.cards, ids);
      const total = g.target.n;
      const spanDays = diffDays(g.startDate, g.endDate);
      const intro = introDays(Math.max(1, spanDays));
      const exp = expectedCount(total, elapsedActive(g, today), intro);
      out.done = Math.min(total, pr.learned);
      out.introduced = pr.introduced;
      out.total = total;
      out.expected = exp;
      out.pace = paceStatus(out.done, exp, total);
      const q = newQuotaToday({ n: total, introduced: pr.introduced, doneToday: state.newByDate[today] || 0, dpw: g.daysPerWeek, m, goal: g, today });
      out.quota = q;
      out.adjust = adjustPlan({ n: total, introduced: pr.introduced, dpw: g.daysPerWeek, m, goal: g, today });
      out.finished = out.done >= total;
      out.unit = "words";
    } else if (g.type === "content") {
      const k = CONTENT_KINDS[g.scope.kind];
      const ids = k ? k.all() : [];
      const seen = k ? k.seen(state) : {};
      const base = new Set((g.baseline && g.baseline.seen) || []);
      const total = Math.max(0, ids.length - base.size);
      const done = ids.filter((id) => seen[id] && !base.has(id)).length;
      const spanDays = Math.max(1, diffDays(g.startDate, g.endDate));
      out.total = total; out.done = done;
      out.expected = expectedCount(total, elapsedActive(g, today) + LEARNING_LAG_DAYS, spanDays);
      out.pace = paceStatus(done, out.expected, total);
      out.finished = total === 0 || done >= total;
      out.unit = k ? k.unit + "s" : "items";
      out.perDay = Math.ceil((total - done) / Math.max(1, out.daysLeft));
    } else {
      const wk = g.target.weeks;
      const goalDays = wk * 7;
      const sessionsSince = new Set(Array.from(practisedDates(state.sessions)).filter((d) => d >= g.startDate && d <= today));
      out.practised = sessionsSince.size;
      const elapsedWeeks = Math.min(wk, Math.max(1, Math.ceil((elapsedActive(g, today) + 1) / 7)));
      out.week = elapsedWeeks;
      out.weeks = wk;
      out.thisWeek = practisedThisWeek(state.sessions, today);
      out.total = Math.round(wk * g.daysPerWeek);
      out.done = Math.min(out.total, sessionsSince.size);
      const expectedSoFar = (elapsedActive(g, today) / 7) * g.daysPerWeek;
      out.expected = Math.min(out.total, expectedSoFar);
      out.finished = diffDays(g.startDate, today) >= goalDays + (g.pausedDays || 0) && g.status !== "paused";
      out.pace = elapsedActive(g, today) < 7 || out.thisWeek.last7 >= g.daysPerWeek - 1 ? "on" : "behind";   // never "behind" in week one
      out.unit = "days";
    }
    return out;
  }

  // Promote finished goals to "done" (calmly, no fanfare). Returns true if changed.
  function refresh(state, today) {
    ensure(state);
    let changed = false;
    for (const g of state.goals) {
      if (g.status !== "active") continue;
      const d = describe(state, g, today);
      if (d.finished) { g.status = "done"; g.doneDate = today; changed = true; }
    }
    return changed;
  }

  function activeGoals(state) { ensure(state); return state.goals.filter((g) => g.status === "active" || g.status === "paused"); }

  function urgent(state, today) {
    const list = activeGoals(state).filter((g) => g.status === "active").map((g) => describe(state, g, today));
    const rank = { behind: 0, on: 1, ahead: 2 };
    list.sort((a, b) => (rank[a.pace] - rank[b.pace]) || (a.daysLeft - b.daysLeft));
    return list;
  }

  /* ---- hooks the app calls ---- */
  function onReview(state, cardId, prev, today) {
    ensure(state);
    if (!prev || !(prev.reps > 0)) state.newByDate[today] = (state.newByDate[today] || 0) + 1;
  }
  function markPassage(state, id) {
    ensure(state);
    if (!state.passagesRead[id]) state.passagesRead[id] = Date.now();
  }

  // Options for SRS.pickBatch from the active words goal(s). null = no goal.
  function sessionOpts(state, today) {
    ensure(state);
    const words = activeGoals(state).filter((g) => g.status === "active" && g.type === "words");
    if (!words.length) return null;
    let left = 0, planned = 0;
    const prefer = new Set();
    for (const g of words) {
      const d = describe(state, g, today);
      if (d.finished) continue;
      left += d.quota.left; planned += d.quota.planned;
      scopeIds(g.scope).forEach((id) => prefer.add(id));
    }
    // Several words goals share one allowance: the newest limit applies per-day total.
    return { newLimit: left, preferIds: prefer, quotaReached: left === 0 && planned > 0 };
  }

  /* ============================ DOM HELPERS ============================ */

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function mk(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function uid() { return "g" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
  function plural(n, w) { return `${n} ${w}${n === 1 ? "" : "s"}`; }

  const PACE_TEXT = { on: "On track", ahead: "Ahead", behind: "A little behind" };
  const PACE_CLASS = { on: "success", ahead: "success", behind: "accent" };

  function bandChip(band) {
    const cls = band.id === "comfortable" ? "success" : band.id === "ambitious" ? "primary" : "accent";
    return `<span class="chip ${cls} goal-band goal-band--${band.id}">${esc(band.label)}</span>`;
  }

  function progressBar(done, total, expected, label) {
    const pct = total ? clamp(done / total, 0, 1) * 100 : 0;
    const mark = total ? clamp(expected / total, 0, 1) * 100 : 0;
    return `<div class="goal-bar" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${Math.round(done)}">
        <div class="goal-bar-fill" style="width:${pct.toFixed(1)}%"></div>
        ${mark > 0 && mark < 100 ? `<div class="goal-bar-mark" style="inset-inline-start:${mark.toFixed(1)}%" title="Where the plan expects you to be today"></div>` : ""}
      </div>`;
  }

  function dotsHtml(days, label) {
    return `<div class="goal-dots" role="img" aria-label="${esc(label)}">${days.map((d) => `<span class="goal-dot${d.on ? " is-on" : ""}"></span>`).join("")}</div>`;
  }

  /* ---- consistency pieces used by app.js ---- */
  function consistencyBadgeHtml(state, today) {
    const c = consistency(state.sessions, today, 7);
    return `<span class="consistency-badge" aria-label="Practised ${c.last7} of the last 7 days">
        <span class="goal-dots" aria-hidden="true">${c.days.map((d) => `<span class="goal-dot${d.on ? " is-on" : ""}"></span>`).join("")}</span>
        <span>Practised ${c.last7} of the last 7 days</span></span>`;
  }
  function consistencyLine(state, today) {
    const c = consistency(state.sessions, today, 7);
    return `Practised ${c.last7} of the last 7 days. Rest days are normal.`;
  }
  function consistencyTileHtml(state, today) {
    const c = consistency(state.sessions, today, 14);
    return `<div class="stat">
        <span class="stat-label">Consistency · last 14 days</span>
        <span class="stat-value">${c.lastN}<span class="goal-of"> of 14</span></span>
        ${dotsHtml(c.days, `Practised ${c.lastN} of the last 14 days`)}
        <span class="stat-sub">days practised. Missing one day does not hurt.</span>
      </div>`;
  }

  /* ============================ HOME CARD ============================ */

  function todayLine(d, state, today) {
    const m = mNow();
    const g = d.goal;
    if (g.type === "words") {
      const nowMs = Date.now();
      let due = 0;
      for (const id of Object.keys(state.cards)) { const st = state.cards[id]; if (st && st.reps > 0 && st.due <= nowMs) due++; }
      const left = d.quota.left;
      const mins = Math.max(1, Math.ceil((left * 30 * m + due * 9) / 60));
      if (left === 0) return `New words are done for today. ${due ? `${plural(due, "review")} waiting, about ${mins} min` : "Extra practice is optional"}.`;
      return `Today: ${plural(left, "new word")} + ${due ? `${due} review${due === 1 ? "" : "s"}` : "reviews as they come due"} · about ${mins} min`;
    }
    if (g.type === "habit") {
      return `This week: ${d.thisWeek.last7} of ${g.daysPerWeek} days · about ${g.minutesPerDay} min a day`;
    }
    return d.perDay ? `Pace: about ${plural(d.perDay, d.unit.replace(/s$/, ""))} a day` : "Nearly there";
  }

  function homeCard(ctx) {
    const { state, navigate, startSession } = ctx;
    const today = ctx.todayISO();
    if (refresh(state, today)) ctx.persist();
    const list = urgent(state, today);
    if (!list.length) {
      const c = mk(`
        <article class="card goal-card goal-card--empty">
          <span class="eyebrow">Plan</span>
          <h3>Set a goal for ${esc(langName())}</h3>
          <p class="muted">A specific goal with a date works better than "do my best". Pick a pace that feels reachable. Takes about a minute.</p>
          <div class="goal-actions"><button class="btn primary" id="goal-set">Set a goal</button></div>
        </article>`);
      c.querySelector("#goal-set").addEventListener("click", () => { ui.mode = "create"; ui.step = 1; ui.draft = {}; navigate("plan"); });
      return c;
    }
    const d = list[0];
    const g = d.goal;
    const more = list.length - 1;
    const c = mk(`
      <article class="card goal-card">
        <div class="goal-head">
          <span class="eyebrow">Your goal</span>
          <span class="chip ${PACE_CLASS[d.pace]} goal-status">${PACE_TEXT[d.pace]}</span>
        </div>
        <h3 class="goal-title">${esc(d.title)}</h3>
        <p class="goal-sub muted">by ${esc(fmtDate(d.end, true))} · ${plural(d.daysLeft, "day")} left</p>
        ${g.type === "habit"
          ? dotsHtml(d.thisWeek.days, `Practised ${d.thisWeek.last7} of the last 7 days`)
          : progressBar(d.done, d.total, d.expected, `${d.title}: ${d.done} of ${d.total}`)}
        <p class="goal-progress-text">${g.type === "habit" ? `${d.done} of ${d.total} planned days practised` : `${Math.round(d.done)} of ${d.total} ${d.unit}`}</p>
        <p class="goal-today">${esc(todayLine(d, state, today))}</p>
        ${g.cue ? `<p class="goal-cue muted">When I ${bdiCue(g.cue)}, I will practise.</p>` : ""}
        <div class="goal-actions">
          <button class="btn" id="goal-plan">Open your plan</button>
        </div>
        ${more > 0 ? `<p class="goal-more muted"><button class="linklike" id="goal-more">${more} more goal${more === 1 ? "" : "s"}</button></p>` : ""}
      </article>`);
    c.querySelector("#goal-plan").addEventListener("click", () => { ui.mode = "list"; navigate("plan"); });
    const mm = c.querySelector("#goal-more");
    if (mm) mm.addEventListener("click", () => { ui.mode = "list"; navigate("plan"); });
    return c;
  }

  // The cue is free text typed by the learner: isolate it so any script stays tidy in an English sentence.
  function bdiCue(text) { return `<bdi dir="auto">${esc(text)}</bdi>`; }

  /* ============================ PLAN PAGE ============================ */

  const ui = { mode: "list", step: 1, draft: {} };

  function renderPlan(ctx) {
    const wrap = mk(`<div class="view view-plan"></div>`);
    function paint() {
      wrap.innerHTML = "";
      if (ui.mode === "create") wrap.appendChild(createView(ctx, paint));
      else wrap.appendChild(listView(ctx, paint));
      if (root.A11y && root.A11y.refresh) try { root.A11y.refresh(); } catch (_) {}
    }
    paint();
    return wrap;
  }

  function listView(ctx, repaint) {
    const { state, navigate } = ctx;
    const today = ctx.todayISO();
    if (refresh(state, today)) ctx.persist();
    const frag = mk(`<div class="plan-body"></div>`);
    frag.innerHTML = `
      <button class="btn ghost back-btn plan-back" id="plan-back" type="button"><span class="icon-arrow-back" aria-hidden="true">←</span> Back</button>
      <header class="plan-head">
        <h1>Your plan</h1>
        <p class="muted">A goal is specific, has an end date, and is reachable. Practice is spaced and retrieval-based, which the scheduler already handles; the plan only sets how fast new material arrives.</p>
      </header>
      <div id="plan-goals" class="plan-goals"></div>
      <div><button class="btn primary" id="plan-new">Set a new goal</button></div>
      <article class="card plan-consistency">
        <span class="eyebrow">Consistency</span>
        <h3>The last 14 days</h3>
        <div id="plan-dots"></div>
        <p class="muted small">Habits take about two months to settle (median 66 days), and missing a single day does not set you back. Rest days are part of the plan. There is no streak to lose.</p>
      </article>
      <details class="card plan-why" id="plan-why">
        <summary><strong>Why these numbers</strong></summary>
        <div id="plan-why-body"></div>
      </details>`;
    frag.querySelector("#plan-back").addEventListener("click", () => navigate("home"));
    frag.querySelector("#plan-new").addEventListener("click", () => { ui.mode = "create"; ui.step = 1; ui.draft = {}; repaint(); window.scrollTo(0, 0); });
    const c14 = consistency(state.sessions, today, 14);
    frag.querySelector("#plan-dots").innerHTML = dotsHtml(c14.days, `Practised ${c14.lastN} of the last 14 days`) + `<p class="goal-progress-text">Practised ${c14.lastN} of the last 14 days</p>`;
    frag.querySelector("#plan-why-body").innerHTML = whyHtml();

    const host = frag.querySelector("#plan-goals");
    const open = state.goals.filter((g) => g.status === "active" || g.status === "paused");
    const past = state.goals.filter((g) => g.status === "done");
    if (!open.length && !past.length) {
      host.innerHTML = `<article class="card goal-card goal-card--empty"><h3>No goals yet</h3><p class="muted">Choose a goal and the app sets how many new cards to meet each day. Without a goal, sessions work as before.</p></article>`;
    }
    open.forEach((g) => host.appendChild(goalCard(ctx, g, today, repaint)));
    if (past.length) {
      host.appendChild(mk(`<h2 class="plan-sub">Finished</h2>`));
      past.forEach((g) => host.appendChild(goalCard(ctx, g, today, repaint)));
    }
    return frag;
  }

  function goalCard(ctx, g, today, repaint) {
    const { state, startSession, navigate } = ctx;
    const d = describe(state, g, today);
    const paused = g.status === "paused";
    const done = g.status === "done";
    const card = mk(`
      <article class="card goal-card ${paused ? "is-paused" : ""}">
        <div class="goal-head">
          <span class="eyebrow">${g.type === "words" ? "Words" : g.type === "habit" ? "Habit" : "Finish content"}</span>
          <span class="chip ${done ? "success" : paused ? "" : PACE_CLASS[d.pace]} goal-status">${done ? "Reached" : paused ? "Paused" : PACE_TEXT[d.pace]}</span>
        </div>
        <h3 class="goal-title">${esc(d.title)}</h3>
        <p class="goal-sub muted">${fmtDate(g.startDate)} to ${esc(fmtDate(d.end, true))}${done ? "" : ` · ${plural(d.daysLeft, "day")} left`}${g.pausedDays ? ` · shifted by ${plural(g.pausedDays, "paused day")}` : ""}</p>
        ${g.type === "habit"
          ? `<p class="small muted">Week ${d.week} of ${d.weeks}. Last 7 days:</p>${dotsHtml(d.thisWeek.days, `Practised ${d.thisWeek.last7} of the last 7 days`)}`
          : ""}
        ${progressBar(d.done, d.total, d.expected, `${d.title}: ${Math.round(d.done)} of ${d.total}`)}
        <p class="goal-progress-text">${g.type === "habit" ? `${d.done} of ${d.total} planned days practised` : `${Math.round(d.done)} of ${d.total} ${d.unit}`}</p>
        ${g.type === "words" ? `<p class="small muted">A word counts once you have recalled it on two different days.</p>` : ""}
        ${!done && !paused ? `<p class="goal-today">${esc(todayLine(d, state, today))}</p>` : ""}
        ${g.cue ? `<p class="goal-cue muted">When I ${bdiCue(g.cue)}, I will practise.</p>` : ""}
        <div class="goal-note" aria-live="polite"></div>
        <div class="goal-actions"></div>
      </article>`);
    const actions = card.querySelector(".goal-actions");
    const note = card.querySelector(".goal-note");

    if (g.type === "words" && !done && !paused && d.pace === "behind") {
      const a = d.adjust;
      let html = `<p><strong>Life happens. Here's an adjusted plan.</strong> `;
      if (a.suggestedEnd) {
        html += `Catching up by the original date would mean ${plural(a.newPerDay, "new word")} a day (${esc(a.band.label.toLowerCase())}). A later end date keeps it reachable.</p>
          <button class="btn primary" data-act="move">Move the end date to ${esc(fmtDate(a.suggestedEnd, true))}</button>`;
      } else {
        html += `${plural(a.newPerDay, "new word")} a day over the days left is ${esc(a.band.label.toLowerCase())}, so the plan stays as it is.</p>`;
      }
      note.innerHTML = html;
      const mv = note.querySelector("[data-act=move]");
      if (mv) mv.addEventListener("click", () => {
        g.endDate = addDays(g.endDate, diffDays(effectiveEnd(g, today), a.suggestedEnd));
        ctx.persist(); ctx.toast("End date moved."); repaint();
      });
    } else if (g.type === "words" && !done && d.adjust && d.adjust.band.id === "not") {
      note.innerHTML = `<p>This pace is not recommended. Consider a later end date or fewer words.</p>`;
    }

    function btn(label, cls, fn) {
      const b = mk(`<button class="btn ${cls || ""}">${esc(label)}</button>`);
      b.addEventListener("click", fn);
      actions.appendChild(b);
      return b;
    }
    if (!done && !paused) btn("Start today's session", "primary", () => startSession());
    if (!done) {
      if (paused) btn("Resume", "primary", () => {
        g.pausedDays = (g.pausedDays || 0) + currentPauseDays(g, today);
        g.pausedAt = null; g.status = "active"; ctx.persist(); ctx.toast("Welcome back. The end date moved by the days you were away."); repaint();
      });
      else btn("Pause", "", () => { g.status = "paused"; g.pausedAt = today; ctx.persist(); repaint(); });
    }
    btn("Remove", "ghost danger", () => {
      actions.innerHTML = `<span class="small">Remove this goal? Your cards and progress stay.</span>`;
      const y = mk(`<button class="btn danger">Yes, remove</button>`), n = mk(`<button class="btn">Keep it</button>`);
      y.addEventListener("click", () => { state.goals = state.goals.filter((x) => x.id !== g.id); ctx.persist(); repaint(); });
      n.addEventListener("click", () => repaint());
      actions.append(y, n);
      y.focus();
    });
    return card;
  }

  function whyHtml() {
    const id = langId();
    const L = LANGS[id] || LANGS.nl;
    return `
      <p class="small"><strong>${esc(langName())} difficulty (for English speakers).</strong> FSI category ${esc(L.fsi)}, ${esc(L.weeks)} weeks, ${esc(L.hours)} class hours. Time multiplier used here: ×${L.m}. ${esc(L.basis)}${L.estimated ? " <strong>This is an estimate, not a measurement.</strong>" : ""}</p>
      <p class="small"><strong>How the workload is computed.</strong> A few days at the end are kept free so every word gets at least two spaced reviews before the deadline. Daily reviews are roughly 7-10 times the number of new cards (more for harder languages). Each new card is assumed to take about 30 seconds and each review about 9 seconds. These are rules of thumb: your own speed will differ.</p>
      <p class="small"><strong>Pace bands</strong> (new words a day, scaled by the language multiplier): up to 10 comfortable, up to 20 ambitious but doable, up to 30 heavy, above that not recommended.</p>
      <ul class="why-list small">
        <li>Foreign Service Institute, language learning difficulty for English speakers (Category I to V, class hours).</li>
        <li>Cambridge English, guided learning hours per CEFR level: A1 about 90-100, A2 180-200, B1 350-400, B2 500-600 (cumulative, an average language; scaled here).</li>
        <li>Milton 2010, and Milton &amp; Alexiou 2009: typical vocabulary size per CEFR level.</li>
        <li>Cepeda et al. 2006: spaced practice beats massed practice.</li>
        <li>Roediger &amp; Karpicke 2006: retrieval practice (testing) beats re-reading.</li>
        <li>Lally et al. 2010: habits form in about 66 days (range 18-254), and one missed day does not matter.</li>
        <li>Gollwitzer &amp; Sheeran 2006: "when X, I will do Y" plans improve follow-through (d about 0.65).</li>
        <li>Locke &amp; Latham 2002: specific, challenging but reachable goals beat "do your best".</li>
        <li>FSRS (Free Spaced Repetition Scheduler): the algorithm that times each review in this app.</li>
      </ul>
      <p class="small muted">The app holds about 520 words per language. A CEFR goal goes beyond this app, so the planner only estimates time for those.</p>`;
  }

  /* ============================ CREATE FLOW ============================ */

  const TYPES = [
    { id: "words", title: "Learn words", text: "Meet and keep a set number of new words by a date." },
    { id: "habit", title: "Build a habit", text: "Practise a few minutes, a few days a week, for several weeks." },
    { id: "content", title: "Finish something", text: "Work through the pronunciation guide, grammar, dialogues or passages." },
    { id: "horizon", title: "How long to a level?", text: "An estimate of when you could reach A1, A2, B1 or B2." },
  ];

  function createView(ctx, repaint) {
    const { state } = ctx;
    const today = ctx.todayISO();
    const d = ui.draft;
    const root0 = mk(`<section class="goal-sheet card" aria-labelledby="sheet-h"></section>`);
    const m = mNow();

    function head(step, title) {
      return `<div class="sheet-top"><span class="eyebrow">Step ${step} of 3</span><button class="btn ghost" id="sheet-cancel">Cancel</button></div><h1 id="sheet-h" class="sheet-h" tabindex="-1">${esc(title)}</h1>`;
    }
    function wireCancel() {
      root0.querySelector("#sheet-cancel").addEventListener("click", () => { ui.mode = "list"; repaint(); window.scrollTo(0, 0); });
    }
    function focusHeading() { const h = root0.querySelector("#sheet-h"); if (h) setTimeout(() => h.focus({ preventScroll: true }), 0); }

    /* ---- step 1 ---- */
    if (ui.step === 1) {
      root0.innerHTML = `${head(1, "What kind of goal?")}
        <fieldset class="sheet-types"><legend class="sr-only">Goal type</legend>
          ${TYPES.map((t) => `<label class="type-card"><input type="radio" name="gtype" value="${t.id}" ${d.type === t.id ? "checked" : ""}><span class="type-body"><strong>${esc(t.title)}</strong><span class="muted small">${esc(t.text)}</span></span></label>`).join("")}
        </fieldset>
        <div class="sheet-foot"><button class="btn primary" id="sheet-next" ${d.type ? "" : "disabled"}>Next</button></div>`;
      wireCancel();
      const next = root0.querySelector("#sheet-next");
      root0.querySelectorAll("input[name=gtype]").forEach((r) => r.addEventListener("change", () => { d.type = r.value; next.disabled = false; }));
      next.addEventListener("click", () => { ui.step = 2; repaint(); window.scrollTo(0, 0); });
      focusHeading();
      return root0;
    }

    /* ---- step 2: parameters + live preview ---- */
    if (ui.step === 2) {
      const type = d.type;
      if (type === "words") {
        d.n = d.n || 50; d.days = d.days || 14; d.scopeKey = d.scopeKey || "all"; d.dpw = d.dpw || 7; d.minutes = d.minutes || 15;
        const themes = root.VOCAB_THEMES || [];
        root0.innerHTML = `${head(2, "Learn words")}
          <div class="sheet-presets" role="group" aria-label="Quick choices">
            <button type="button" class="chip-btn" data-p="50,14">50 in 14 days</button>
            <button type="button" class="chip-btn" data-p="100,20">100 in 20 days</button>
            <button type="button" class="chip-btn" data-p="100,30">100 in 30 days</button>
            <button type="button" class="chip-btn" data-p="theme,7">A theme in 7 days</button>
          </div>
          <div class="field"><label for="f-scope">What to learn</label>
            <select id="f-scope"><option value="all">Any vocabulary</option><option value="sentences">Sentences</option>${themes.map((t) => `<option value="theme:${esc(t.id)}">${esc(t.icon || "")} ${esc(t.name)} (theme)</option>`).join("")}</select></div>
          <div class="field-row">
            <div class="field"><label for="f-n">How many</label><input id="f-n" type="number" inputmode="numeric" min="1" max="500" value="${d.n}"></div>
            <div class="field"><label for="f-days">In how many days</label><input id="f-days" type="number" inputmode="numeric" min="2" max="365" value="${d.days}"></div>
          </div>
          <div class="field-row">
            <div class="field"><label for="f-date">Or by this date</label><input id="f-date" type="date" min="${addDays(today, 2)}" value="${addDays(today, d.days)}"></div>
            <div class="field"><label for="f-min">Minutes you have a day</label><input id="f-min" type="number" inputmode="numeric" min="5" max="180" value="${d.minutes}"></div>
          </div>
          <div class="field"><label for="f-dpw">Days a week you will practise</label>
            <select id="f-dpw">${[3, 4, 5, 6, 7].map((x) => `<option ${x === d.dpw ? "selected" : ""}>${x}</option>`).join("")}</select></div>
          <div class="preview" id="preview" role="status" aria-live="polite"></div>
          <div class="sheet-foot"><button class="btn" id="sheet-back">Back</button><button class="btn primary" id="sheet-next">Next</button></div>`;
        const scopeEl = root0.querySelector("#f-scope");
        scopeEl.value = d.scopeKey;
        const f = { n: root0.querySelector("#f-n"), days: root0.querySelector("#f-days"), date: root0.querySelector("#f-date"), min: root0.querySelector("#f-min"), dpw: root0.querySelector("#f-dpw") };
        const pv = root0.querySelector("#preview");
        const nextBtn = root0.querySelector("#sheet-next");
        function maxAvail() {
          const ids = scopeIds(parseScope(d.scopeKey));
          return ids.filter((id) => !Model.isIntroduced(state.cards[id])).length;
        }
        function update() {
          d.n = Math.max(0, parseInt(f.n.value, 10) || 0); d.days = Math.max(0, parseInt(f.days.value, 10) || 0);
          d.minutes = parseInt(f.min.value, 10) || 15; d.dpw = parseInt(f.dpw.value, 10) || 7; d.scopeKey = scopeEl.value;
          const avail = maxAvail();
          let html = "";
          let ok = d.n >= 1 && d.days >= 2;
          if (!ok) { pv.innerHTML = `<p>Enter at least 1 word and 2 days.</p>`; nextBtn.disabled = true; return; }
          let n = d.n;
          if (n > avail) {
            html += `<p class="warn">Only ${avail} not-yet-met ${esc(scopeLabel(parseScope(d.scopeKey)))} are left here, so the most you can aim for is ${avail}.</p>`;
            if (avail < 1) ok = false;
          }
          const p = planWords({ n: Math.min(n, Math.max(avail, 1)), days: d.days, dpw: d.dpw, m });
          const end = addDays(today, d.days);
          html += `<p><strong>Estimate:</strong> about ${plural(p.newPerDay, "new word")} a day on practice days, plus reviews (roughly ${p.reviewsPerDay} a day once it settles in). About <strong>${p.minutes} min a day</strong>. You'd finish on <strong>${esc(fmtDate(end, true))}</strong>, with the last ${plural(p.bufferDays, "day")} kept for reviews.</p>
            <p>${bandChip(p.band)}</p>`;
          if (p.minutes > d.minutes) html += `<p class="warn">That is more than the ${d.minutes} min a day you have. Try more days or fewer words.</p>`;
          if (p.band.id === "not" || p.band.id === "heavy") {
            const sd = suggestDays({ n: p.n, dpw: d.dpw, m }), sn = suggestN({ days: d.days, dpw: d.dpw, m });
            html += `<p>A reachable alternative: <button type="button" class="linklike" data-set="days:${sd}">${p.n} words in ${sd} days (by ${esc(fmtDate(addDays(today, sd), true))})</button>${sn > 0 ? ` or <button type="button" class="linklike" data-set="n:${sn}">${sn} words in ${d.days} days</button>` : ""}.</p>`;
          }
          html += `<p class="small muted">${L_est()} Estimates, not promises.</p>`;
          pv.innerHTML = html;
          pv.querySelectorAll("[data-set]").forEach((b) => b.addEventListener("click", () => {
            const [k, v] = b.dataset.set.split(":");
            if (k === "days") f.days.value = v; else f.n.value = v;
            syncDate(); update();
          }));
          nextBtn.disabled = !ok;
        }
        function L_est() { const L = LANGS[langId()] || LANGS.nl; return `${esc(langName())} time multiplier ×${L.m}${L.estimated ? " (estimated from related languages)" : " (FSI-based)"}.`; }
        function syncDate() { const dd = parseInt(f.days.value, 10); if (dd > 0) f.date.value = addDays(today, dd); }
        root0.querySelectorAll("[data-p]").forEach((b) => b.addEventListener("click", () => {
          const [a, dy] = b.dataset.p.split(",");
          if (a === "theme") {
            const t = themes[0];
            if (t) { scopeEl.value = "theme:" + t.id; const cnt = scopeIds({ kind: "theme", themeId: t.id }).length; f.n.value = Math.min(cnt, 40); }
          } else f.n.value = a;
          f.days.value = dy; syncDate(); update();
        }));
        [f.n, f.days, f.min, f.dpw, scopeEl].forEach((e) => e.addEventListener("input", () => { if (e === f.days) syncDate(); update(); }));
        f.date.addEventListener("input", () => { if (f.date.value) { f.days.value = Math.max(2, diffDays(today, f.date.value)); } update(); });
        root0.querySelector("#sheet-back").addEventListener("click", () => { ui.step = 1; repaint(); });
        nextBtn.addEventListener("click", () => {
          update();
          if (nextBtn.disabled) return;
          ui.step = 3; repaint(); window.scrollTo(0, 0);
        });
        wireCancel(); update(); focusHeading();
        return root0;
      }

      if (type === "habit") {
        d.minutes = d.minutes || 15; d.dpw = d.dpw || 5; d.weeks = d.weeks || 8;
        root0.innerHTML = `${head(2, "Build a habit")}
          <p class="muted">Defaults follow the research: habits take about two months (median 66 days), so 8 weeks.</p>
          <div class="field-row">
            <div class="field"><label for="f-min">Minutes a day</label><input id="f-min" type="number" inputmode="numeric" min="5" max="180" value="${d.minutes}"></div>
            <div class="field"><label for="f-dpw">Days a week</label><select id="f-dpw">${[2, 3, 4, 5, 6, 7].map((x) => `<option ${x === d.dpw ? "selected" : ""}>${x}</option>`).join("")}</select></div>
          </div>
          <div class="field"><label for="f-weeks">For how many weeks</label><input id="f-weeks" type="number" inputmode="numeric" min="2" max="52" value="${d.weeks}"></div>
          <div class="preview" id="preview" role="status" aria-live="polite"></div>
          <div class="sheet-foot"><button class="btn" id="sheet-back">Back</button><button class="btn primary" id="sheet-next">Next</button></div>`;
        const fm = root0.querySelector("#f-min"), fd = root0.querySelector("#f-dpw"), fw = root0.querySelector("#f-weeks"), pv = root0.querySelector("#preview");
        function update() {
          d.minutes = Math.max(1, parseInt(fm.value, 10) || 15); d.dpw = parseInt(fd.value, 10) || 5; d.weeks = Math.max(2, parseInt(fw.value, 10) || 8);
          const total = d.dpw * d.weeks, hrs = (total * d.minutes) / 60;
          pv.innerHTML = `<p>${plural(total, "practice day")} over ${plural(d.weeks, "week")}, about <strong>${hrs.toFixed(hrs < 10 ? 1 : 0)} hours</strong> in total. You'd finish on <strong>${esc(fmtDate(addDays(today, d.weeks * 7), true))}</strong>.</p>
            <p class="small muted">You'll see dots for the days you practised. No streak to break: missing a day is fine, and ${7 - d.dpw} rest day${7 - d.dpw === 1 ? "" : "s"} a week ${7 - d.dpw === 1 ? "is" : "are"} built in.</p>`;
        }
        [fm, fd, fw].forEach((e) => e.addEventListener("input", update));
        root0.querySelector("#sheet-back").addEventListener("click", () => { ui.step = 1; repaint(); });
        root0.querySelector("#sheet-next").addEventListener("click", () => { update(); ui.step = 3; repaint(); window.scrollTo(0, 0); });
        wireCancel(); update(); focusHeading();
        return root0;
      }

      if (type === "content") {
        d.kind = d.kind || "pronunciation"; d.days = d.days || 14;
        root0.innerHTML = `${head(2, "Finish something")}
          <div class="field"><label for="f-kind">What to finish</label>
            <select id="f-kind">${Object.entries(CONTENT_KINDS).map(([k, v]) => `<option value="${k}">${esc(v.label)}</option>`).join("")}</select></div>
          <div class="field"><label for="f-days">In how many days</label><input id="f-days" type="number" inputmode="numeric" min="1" max="365" value="${d.days}"></div>
          <div class="preview" id="preview" role="status" aria-live="polite"></div>
          <div class="sheet-foot"><button class="btn" id="sheet-back">Back</button><button class="btn primary" id="sheet-next">Next</button></div>`;
        const fk = root0.querySelector("#f-kind"), fd = root0.querySelector("#f-days"), pv = root0.querySelector("#preview"), nb = root0.querySelector("#sheet-next");
        fk.value = d.kind;
        function update() {
          d.kind = fk.value; d.days = Math.max(1, parseInt(fd.value, 10) || 7);
          const k = CONTENT_KINDS[d.kind], ids = k.all(), seen = k.seen(state);
          const left = ids.filter((id) => !seen[id]).length;
          if (!ids.length) { pv.innerHTML = `<p>This isn't available for ${esc(langName())} yet.</p>`; nb.disabled = true; return; }
          if (!left) { pv.innerHTML = `<p>You have already opened all ${ids.length} of these. Nothing left to finish.</p>`; nb.disabled = true; return; }
          nb.disabled = false;
          const per = left / d.days;
          pv.innerHTML = `<p>${left} of ${ids.length} ${esc(k.unit)}s still to open: about <strong>${per < 1 ? `1 every ${Math.round(1 / per)} days` : `${Math.ceil(per)} a day`}</strong>. Finish by <strong>${esc(fmtDate(addDays(today, d.days), true))}</strong>.</p><p class="small muted">An item counts when you open it. This is a pace guide, not a test of knowing it.</p>`;
        }
        [fk, fd].forEach((e) => e.addEventListener("input", update));
        root0.querySelector("#sheet-back").addEventListener("click", () => { ui.step = 1; repaint(); });
        nb.addEventListener("click", () => { update(); if (nb.disabled) return; ui.step = 3; repaint(); window.scrollTo(0, 0); });
        wireCancel(); update(); focusHeading();
        return root0;
      }

      // horizon: estimate only
      d.level = d.level || "A2"; d.minutes = d.minutes || 15; d.dpw = d.dpw || 5;
      root0.innerHTML = `${head(2, "How long to a level?")}
        <p class="muted">An estimate for ${esc(langName())}, based on the Cambridge English guided-learning hours for each CEFR level, scaled for how far ${esc(langName())} is from English.</p>
        <div class="field-row">
          <div class="field"><label for="f-level">Level</label><select id="f-level">${Object.keys(CEFR).map((l) => `<option>${l}</option>`).join("")}</select></div>
          <div class="field"><label for="f-min">Minutes a day</label><input id="f-min" type="number" inputmode="numeric" min="5" max="240" value="${d.minutes}"></div>
        </div>
        <div class="field"><label for="f-dpw">Days a week</label><select id="f-dpw">${[2, 3, 4, 5, 6, 7].map((x) => `<option ${x === d.dpw ? "selected" : ""}>${x}</option>`).join("")}</select></div>
        <div class="preview" id="preview" role="status" aria-live="polite"></div>
        <div class="sheet-foot"><button class="btn" id="sheet-back">Back</button><button class="btn primary" id="sheet-next">Make it a habit goal</button></div>`;
      const fl = root0.querySelector("#f-level"), fm = root0.querySelector("#f-min"), fd = root0.querySelector("#f-dpw"), pv = root0.querySelector("#preview");
      fl.value = d.level;
      function update() {
        d.level = fl.value; d.minutes = Math.max(1, parseInt(fm.value, 10) || 15); d.dpw = parseInt(fd.value, 10) || 5;
        const h = horizon({ level: d.level, m, minutesPerDay: d.minutes, dpw: d.dpw });
        const L = LANGS[langId()] || LANGS.nl;
        pv.innerHTML = `<p><strong>Estimate:</strong> ${h.hoursLo}-${h.hoursHi} hours of study, so roughly <strong>${esc(fmtDuration(h.weeksLo))} to ${esc(fmtDuration(h.weeksHi))}</strong> at ${d.minutes} min, ${d.dpw} days a week.</p>
          <p class="small muted">Typical vocabulary at ${d.level}: ${esc(CEFR[d.level].vocab)} (Milton). This app holds about 520 words per language, which covers roughly A1 to early A2 vocabulary. Reaching ${d.level} needs reading, listening and speaking beyond this app, so treat this only as a time estimate.${L.estimated ? ` For Kurdish the language multiplier (×${L.m}) is itself an estimate from related languages, so widen the range.` : ""}</p>`;
      }
      [fl, fm, fd].forEach((e) => e.addEventListener("input", update));
      root0.querySelector("#sheet-back").addEventListener("click", () => { ui.step = 1; repaint(); });
      root0.querySelector("#sheet-next").addEventListener("click", () => { update(); d.type = "habit"; d.weeks = 8; ui.step = 3; repaint(); window.scrollTo(0, 0); });
      wireCancel(); update(); focusHeading();
      return root0;
    }

    /* ---- step 3: cue + save ---- */
    const needsDpw = d.type === "content";
    root0.innerHTML = `${head(3, "Make it automatic")}
      <p class="muted">Linking practice to a moment you already have roughly doubles follow-through (Gollwitzer &amp; Sheeran 2006). Optional.</p>
      <div class="field"><label for="f-cue">When I&hellip; (a cue, like "finish breakfast")</label>
        <input id="f-cue" type="text" dir="auto" maxlength="80" value="${esc(d.cue || "")}" placeholder="finish breakfast" autocomplete="off"></div>
      ${needsDpw ? `<div class="field"><label for="f-dpw">Days a week you will practise</label><select id="f-dpw">${[3, 4, 5, 6, 7].map((x) => `<option ${x === (d.dpw || 5) ? "selected" : ""}>${x}</option>`).join("")}</select></div>` : ""}
      <p class="preview" aria-live="polite" id="cue-preview"></p>
      <div class="sheet-foot"><button class="btn" id="sheet-back">Back</button><button class="btn primary" id="sheet-save">Save goal</button></div>`;
    const cue = root0.querySelector("#f-cue"), cp = root0.querySelector("#cue-preview");
    function upCue() { cp.innerHTML = cue.value.trim() ? `When I ${bdiCue(cue.value.trim())}, I will practise.` : ""; }
    cue.addEventListener("input", upCue); upCue();
    root0.querySelector("#sheet-back").addEventListener("click", () => { d.cue = cue.value; ui.step = 2; repaint(); });
    root0.querySelector("#sheet-save").addEventListener("click", () => {
      d.cue = cue.value.trim();
      if (needsDpw) d.dpw = parseInt(root0.querySelector("#f-dpw").value, 10) || 5;
      const g = buildGoal(state, d, today);
      ensure(state).goals.push(g);
      ctx.persist(); ctx.toast("Goal saved.");
      ui.mode = "list"; ui.step = 1; ui.draft = {};
      repaint(); window.scrollTo(0, 0);
    });
    wireCancel(); focusHeading();
    return root0;
  }

  function parseScope(key) {
    if (key === "sentences") return { kind: "sentences" };
    if (key && key.startsWith("theme:")) return { kind: "theme", themeId: key.slice(6) };
    return { kind: "all" };
  }

  function buildGoal(state, d, today) {
    const base = { id: uid(), startDate: today, cue: d.cue || "", createdAt: Date.now(), status: "active", pausedDays: 0, pausedAt: null };
    if (d.type === "words") {
      const scope = parseScope(d.scopeKey);
      const seen = scopeIds(scope).filter((id) => Model.isIntroduced(state.cards[id]));
      return { ...base, type: "words", scope, target: { n: d.n }, endDate: addDays(today, d.days), daysPerWeek: d.dpw, minutesPerDay: d.minutes, baseline: { seen } };
    }
    if (d.type === "habit") {
      return { ...base, type: "habit", scope: { kind: "habit" }, target: { weeks: d.weeks }, endDate: addDays(today, d.weeks * 7), daysPerWeek: d.dpw, minutesPerDay: d.minutes, baseline: { seen: [] } };
    }
    const k = CONTENT_KINDS[d.kind];
    return { ...base, type: "content", scope: { kind: d.kind }, target: { n: k.all().length }, endDate: addDays(today, d.days), daysPerWeek: d.dpw || 5, minutesPerDay: 0, baseline: { seen: [] } };
  }

  /* ---- Plan card for the Stats page ---- */
  function statsCard(ctx) {
    const today = ctx.todayISO();
    const list = urgent(ctx.state, today);
    const c = mk(`
      <article class="card goal-card stats-plan">
        <span class="eyebrow">Your plan</span>
        ${list.length
          ? `<h3 class="goal-title">${esc(list[0].title)}</h3>
             ${list[0].goal.type === "habit" ? "" : progressBar(list[0].done, list[0].total, list[0].expected, "Goal progress")}
             <p class="goal-progress-text">${list[0].goal.type === "habit" ? `${list[0].done} of ${list[0].total} planned days practised` : `${Math.round(list[0].done)} of ${list[0].total} ${list[0].unit}`} · ${PACE_TEXT[list[0].pace]}</p>`
          : `<h3>No goal set</h3><p class="muted">A dated, reachable goal sets the pace of new cards.</p>`}
        <div class="goal-actions"><button class="btn ${list.length ? "" : "primary"}" id="stats-plan">${list.length ? "Open plan" : "Set a goal"}</button></div>
      </article>`);
    c.querySelector("#stats-plan").addEventListener("click", () => { ui.mode = list.length ? "list" : "create"; ui.step = 1; ui.draft = {}; ctx.navigate("plan"); });
    return c;
  }

  root.Goals = {
    Model, ensure, describe, refresh, activeGoals, urgent, onReview, markPassage, sessionOpts,
    renderPlan, homeCard, statsCard, consistencyBadgeHtml, consistencyLine, consistencyTileHtml,
    _ui: ui,
  };
  if (typeof module !== "undefined" && module.exports) module.exports = root.Goals;
})(typeof window !== "undefined" ? window : globalThis);
