/* =====================================================================
 * FSRS-4.5 (Free Spaced Repetition Scheduler) — the algorithm modern Anki
 * defaults to. Tracks per-card stability (how long memory lasts) and
 * difficulty (how hard the card is). Predicts retrievability R(t) and
 * schedules the next review when R drops to the target retention.
 *
 * Replaces the previous SM-2 implementation. Backward compatible with
 * existing SM-2 card states: when we see a card with `ef`/`interval` but
 * no `stability`, we seed FSRS state from those values.
 *
 * Quality scale stays the same as SM-2 (0/3/4/5 = Again/Hard/Good/Easy)
 * for compatibility with the rating-pad UI; we map to FSRS 1-4 internally.
 * =================================================================== */
window.SRS = (function () {
  const DAY_MS = 24 * 60 * 60 * 1000;

  // Default parameters from the FSRS-4.5 paper (Open Spaced Repetition).
  // These are tuned across 20k+ users; user-specific optimisation can
  // improve them further but isn't necessary for v1.
  const W = [
    0.4072, 1.1829, 3.1262, 15.4722,    // initial stabilities for q=1..4
    7.2102, 0.5316, 1.0651, 0.0234,     // initial difficulty + mean-reversion
    1.616,  0.1544, 1.0824, 1.9813,     // stability gain factors (success)
    0.0953, 0.2975, 2.2042, 0.2407, 2.9466,  // post-lapse + hard/easy multipliers
  ];

  const REQUEST_RETENTION = 0.90;       // target 90% retention at review time
  const F_FACTOR = 19 / 81;             // ~0.2346, derives from R(t) formula

  // Mapping from UI rating (0/3/4/5 = Again/Hard/Good/Easy) → FSRS grade (1..4)
  function uiToFsrs(q) {
    if (q < 3) return 1;        // again
    if (q === 3) return 2;       // hard
    if (q === 4) return 3;       // good
    return 4;                    // easy
  }

  function defaultState() {
    return {
      stability: 0,
      difficulty: 0,
      reps: 0,
      lapses: 0,
      due: 0,
      interval: 0,
      lastReview: 0,
      lastQuality: null,
    };
  }

  // R(t) = (1 + F * t/S)^-1 where F = 19/81 (gives ~90% retention at t=S)
  function retrievability(stability, elapsedDays) {
    if (stability <= 0) return 0;
    return Math.pow(1 + F_FACTOR * elapsedDays / stability, -1);
  }

  function intervalFor(stability) {
    // Solve for t such that R(t) = target retention
    // (1 + F * t/S)^-1 = target → t = (S/F) * (1/target - 1)
    const t = (stability / F_FACTOR) * (1 / REQUEST_RETENTION - 1);
    return Math.max(1, Math.round(t));
  }

  function initialDifficulty(grade) {
    // Difficulty seeded from first grade. Easier first review → lower D.
    return clamp(W[4] - (grade - 3) * W[5], 1, 10);
  }

  function nextDifficulty(d, grade) {
    // Penalty/credit per rating, then mean-revert toward initial-good.
    const newD = d - W[6] * (grade - 3);
    const meanReversion = W[7] * W[4] + (1 - W[7]) * newD;
    return clamp(meanReversion, 1, 10);
  }

  function nextStabilitySuccess(d, s, r, grade) {
    // Stability grows when you successfully retrieve. Growth depends on:
    //   - difficulty (harder cards grow slower)
    //   - current stability (longer-stable cards grow more slowly per review)
    //   - retrievability at review time (lower R → bigger gain on success)
    const hardPenalty = grade === 2 ? W[15] : 1;
    const easyBonus = grade === 4 ? W[16] : 1;
    const factor = Math.exp(W[8]) * (11 - d) * Math.pow(s, -W[9])
                   * (Math.exp((1 - r) * W[10]) - 1) * hardPenalty * easyBonus;
    return Math.max(0.1, s * (1 + factor));
  }

  function nextStabilityLapse(d, s, r) {
    // After forgetting, stability collapses to a smaller value that depends
    // on prior stability and difficulty. Avoids resetting all the way to zero.
    return Math.max(0.1,
      W[11] * Math.pow(d, -W[12])
            * (Math.pow(s + 1, W[13]) - 1)
            * Math.exp((1 - r) * W[14])
    );
  }

  function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }

  // Migrate an SM-2 state to FSRS. We seed stability from the SM-2 interval
  // (which is roughly equivalent to expected retention duration), and
  // difficulty from the ease factor (lower ef = higher difficulty).
  function migrateFromSM2(s) {
    const stability = Math.max(1, s.interval || 1);
    const ef = s.ef || 2.5;
    const difficulty = clamp(11 - 2 * ef, 1, 10);  // ef ∈ [1.3, 3.0] → d ∈ [5, 8]
    return {
      ...defaultState(),
      stability,
      difficulty,
      reps: s.reps || 0,
      lapses: s.lapses || 0,
      due: s.due || 0,
      interval: s.interval || 0,
      lastReview: s.due ? Math.max(0, s.due - (s.interval || 1) * DAY_MS) : Date.now(),
      lastQuality: s.lastQuality,
    };
  }

  function review(state, uiQuality) {
    const grade = uiToFsrs(uiQuality);
    let s = !state || state.due === 0
      ? defaultState()
      : (state.stability !== undefined ? { ...state } : migrateFromSM2(state));

    const isFirst = s.reps === 0;
    if (isFirst) {
      s.stability = W[grade - 1];           // initial stability for this grade
      s.difficulty = initialDifficulty(grade);
    } else {
      const elapsedDays = Math.max(0, (Date.now() - (s.lastReview || s.due - s.interval * DAY_MS)) / DAY_MS);
      const r = retrievability(s.stability, elapsedDays);
      s.difficulty = nextDifficulty(s.difficulty, grade);
      if (grade === 1) {
        s.stability = nextStabilityLapse(s.difficulty, s.stability, r);
        s.lapses += 1;
      } else {
        s.stability = nextStabilitySuccess(s.difficulty, s.stability, r, grade);
      }
    }

    s.interval = intervalFor(s.stability);
    s.due = Date.now() + s.interval * DAY_MS;
    s.reps += 1;
    s.lastReview = Date.now();
    s.lastQuality = uiQuality;
    return s;
  }

  function isDue(state, atMs = Date.now()) {
    if (!state || state.due === 0) return true;
    return state.due <= atMs;
  }

  function maturity(state) {
    if (!state || state.reps === 0) return "new";
    if (state.interval < 7) return "learning";
    if (state.interval < 30) return "young";
    return "mature";
  }

  function pickBatch(allIds, cardStates, opts = {}) {
    const { size = 16, newRatio = 0.4 } = opts;
    const now = Date.now();
    const due = [];
    const fresh = [];
    for (const id of allIds) {
      const st = cardStates[id];
      if (!st || st.due === 0) fresh.push(id);
      else if (st.due <= now) due.push(id);
    }
    due.sort((a, b) => (cardStates[a].due || 0) - (cardStates[b].due || 0));
    for (let i = fresh.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [fresh[i], fresh[j]] = [fresh[j], fresh[i]];
    }
    const targetNew = Math.round(size * newRatio);
    const selectedDue = due.slice(0, size - Math.min(targetNew, fresh.length));
    const selectedNew = fresh.slice(0, size - selectedDue.length);
    const all = [...selectedDue, ...selectedNew];
    for (let i = all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all[i], all[j]] = [all[j], all[i]];
    }
    return all;
  }

  function dueCount(allIds, cardStates) {
    const now = Date.now();
    let count = 0;
    for (const id of allIds) {
      const st = cardStates[id];
      if (!st || st.due === 0 || st.due <= now) count++;
    }
    return count;
  }

  function counts(allIds, cardStates) {
    const now = Date.now();
    const out = { new: 0, due: 0, learning: 0, young: 0, mature: 0, total: allIds.length };
    for (const id of allIds) {
      const st = cardStates[id];
      if (!st || st.reps === 0) {
        out.new++;
        if (!st || st.due === 0 || st.due <= now) out.due++;
        continue;
      }
      if (st.due <= now) out.due++;
      const m = maturity(st);
      out[m]++;
    }
    return out;
  }

  return {
    defaultState, review, isDue, maturity, pickBatch, dueCount, counts,
    retrievability, intervalFor,
    _algorithm: "FSRS-4.5",
  };
})();
