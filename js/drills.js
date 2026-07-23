/* =====================================================================
 * Drills — quick, focused practice rounds outside the SRS rotation.
 *
 * Each drill is a stream of generated questions:
 *   { prompt: string|HTMLString, answer: string, hint?: string }
 *
 * Drills are not persisted in the SRS — they're rapid sprints used to
 * close skill gaps that flashcard recall can't catch (number swaps,
 * clock-on-half-hour, present-tense conjugation, spoken production).
 *
 * Everything language-specific (how numbers/time are spelled, which
 * pronouns the conjugation drill uses, how a wrong answer is diagnosed)
 * comes from the active language pack via Lang.cfg().
 * =================================================================== */
window.Drills = (function () {
  function pad2(n) { return n < 10 ? "0" + n : "" + n; }

  function normalize(s) {
    return String(s || "").toLowerCase()
      .replace(/[.,!?'"]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

  /* ---------- Question generators ---------- */

  function genNumber() {
    // Bias toward the tricky 21-99 range where tens & ones swap.
    const r = Math.random();
    let n;
    if (r < 0.7) n = rand(21, 99);
    else if (r < 0.85) n = rand(0, 20);
    else n = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100][rand(0, 9)];
    return {
      kind: "number",
      prompt: `<div class="drill-big">${n}</div><div class="drill-sub">type it in ${Lang.cfg().name}</div>`,
      answer: Lang.cfg().numberToWord(n),
      hint: `${n}`,
    };
  }

  // Round to 5-minute intervals.
  function genTime() {
    const choices = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    const h = rand(1, 12);
    const m = choices[rand(0, choices.length - 1)];
    return {
      kind: "time",
      prompt: `<div class="drill-big">${pad2(h)}:${pad2(m)}</div><div class="drill-sub">type it as ${Lang.cfg().name} tells time</div>`,
      answer: Lang.cfg().timeToWord(h, m),
      hint: `${pad2(h)}:${pad2(m)}`,
    };
  }

  // Chunks drill: pick a chunk, ask the user to translate it (EN → target).
  function genChunk() {
    const chunks = window.CHUNKS || [];
    const c = chunks[rand(0, chunks.length - 1)];
    return {
      kind: "chunk",
      prompt: `
        <div class="drill-chunk-prompt">${c.en.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</div>
        <div class="drill-sub">${c.context.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</div>
      `,
      answer: c.nl,
      hint: c.en,
    };
  }

  // Conjugation drill: pick a verb, pick a pronoun, ask for the form.
  function genConjugation() {
    const verbs = window.CONJUGATIONS;
    const pronouns = Lang.cfg().conjugationPronouns;
    const verb = verbs[rand(0, verbs.length - 1)];
    const pron = pronouns[rand(0, pronouns.length - 1)];
    const answer = verb[pron.key];
    return {
      kind: "conjugation",
      prompt: `
        <div class="drill-row">
          <span class="drill-pron">${pron.label}</span>
          <span class="drill-verb">${verb.inf}</span>
        </div>
        <div class="drill-sub">${verb.en}${verb.irregular ? " · irregular" : ""}</div>
      `,
      answer,
      hint: verb.inf,
    };
  }

  // Minimal-pair perception drill: two near-identical words, user hears one
  // (chosen at random), taps which they heard. Pure ear training.
  function genMinimalPair() {
    const pairs = window.MINIMAL_PAIRS || [];
    const p = pairs[rand(0, pairs.length - 1)];
    const which = Math.random() < 0.5 ? "a" : "b";
    return {
      kind: "minpair",
      pair: p,
      which,                    // 'a' or 'b' — the one the user will hear
      answer: p[which].nl,      // canonical answer
      hint: p.contrast,
    };
  }

  function makeDrill(kind, total = 10) {
    const gen = (
      kind === "number"      ? genNumber :
      kind === "time"        ? genTime :
      kind === "conjugation" ? genConjugation :
      kind === "chunk"       ? genChunk :
      kind === "minpair"     ? genMinimalPair :
      genNumber
    );
    const queue = [];
    for (let i = 0; i < total; i++) queue.push(gen());
    return {
      kind,
      total,
      queue,
      idx: 0,
      correct: 0,
      wrongAnswers: [], // collected for end-of-drill review
    };
  }

  function check(drill, input) {
    const q = drill.queue[drill.idx];
    const user = normalize(input);
    const target = normalize(q.answer);
    const ok = user === target;
    if (ok) drill.correct += 1;
    else drill.wrongAnswers.push({ q, gave: input.trim() });
    return ok;
  }

  function advance(drill) {
    drill.idx += 1;
    return drill.idx >= drill.total;
  }

  // Metalinguistic error diagnosis is language-specific — delegate to the
  // active language pack.
  function diagnoseError(target, given) {
    const fn = Lang.cfg() && Lang.cfg().diagnoseError;
    return fn ? fn(target, given) : null;
  }

  return { normalize, makeDrill, check, advance, diagnoseError };
})();
