/* =====================================================================
 * Drills — quick, focused practice rounds outside the SRS rotation.
 *
 * Each drill is a stream of generated questions:
 *   { prompt: string|HTMLString, answer: string, hint?: string,
 *     accept?: (input: string) => boolean }
 *
 * Drills are not persisted in the SRS — they're rapid sprints used to
 * close skill gaps that flashcard recall can't catch (number swaps,
 * clock-on-half-hour, present-tense conjugation, spoken production).
 * =================================================================== */
window.Drills = (function () {
  const NUMBER_WORDS = {
    0: "nul", 1: "een", 2: "twee", 3: "drie", 4: "vier", 5: "vijf",
    6: "zes", 7: "zeven", 8: "acht", 9: "negen", 10: "tien",
    11: "elf", 12: "twaalf", 13: "dertien", 14: "veertien", 15: "vijftien",
    16: "zestien", 17: "zeventien", 18: "achttien", 19: "negentien",
    20: "twintig", 30: "dertig", 40: "veertig", 50: "vijftig",
    60: "zestig", 70: "zeventig", 80: "tachtig", 90: "negentig",
    100: "honderd",
  };

  // Number → Dutch (0-100). Combining vowel rules:
  //   Words ending in -ee or -ie use a diaeresis joiner (-ën).
  //   Otherwise the joiner is plain -en.
  function numberToDutch(n) {
    if (n < 0 || n > 100) return null;
    if (NUMBER_WORDS[n] !== undefined) return NUMBER_WORDS[n];
    const ones = n % 10;
    const tens = n - ones;
    const onesWord = NUMBER_WORDS[ones];
    const tensWord = NUMBER_WORDS[tens];
    const joiner = (onesWord.endsWith("ee") || onesWord.endsWith("ie")) ? "ën" : "en";
    return onesWord + joiner + tensWord;
  }

  // Time → Dutch.
  // Dutch tells time RELATIVE to the half-hour:
  //   8:30 = "half negen"  (half-of-9, meaning "halfway to 9")
  //   8:25 = "vijf voor half negen"  (5 before half-9)
  //   8:35 = "vijf over half negen"  (5 after half-9)
  // Outside the 25-35 window, normal "over" / "voor" the hour applies.
  function timeToDutch(h24, m) {
    let h12 = h24 % 12; if (h12 === 0) h12 = 12;
    const nextH = (h12 % 12) + 1;
    const hr = (n) => numberToDutch(n);
    if (m === 0)  return `${hr(h12)} uur`;
    if (m === 15) return `kwart over ${hr(h12)}`;
    if (m === 30) return `half ${hr(nextH)}`;
    if (m === 45) return `kwart voor ${hr(nextH)}`;
    if (m < 15)   return `${hr(m)} over ${hr(h12)}`;
    if (m < 30)   return `${hr(30 - m)} voor half ${hr(nextH)}`;
    if (m < 45)   return `${hr(m - 30)} over half ${hr(nextH)}`;
    return          `${hr(60 - m)} voor ${hr(nextH)}`;
  }

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
    // Bias toward the tricky 21-99 range where Dutch swaps tens & ones.
    const r = Math.random();
    let n;
    if (r < 0.7) n = rand(21, 99);
    else if (r < 0.85) n = rand(0, 20);
    else n = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100][rand(0, 9)];
    return {
      kind: "number",
      prompt: `<div class="drill-big">${n}</div><div class="drill-sub">type it in Dutch</div>`,
      answer: numberToDutch(n),
      hint: `${n}`,
    };
  }

  // Round to 5-minute intervals; 30% pure round/half/quarter
  // for the 5-minute drill rhythm Dutch uses everywhere.
  function genTime() {
    const choices = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    const h = rand(1, 12);
    const m = choices[rand(0, choices.length - 1)];
    return {
      kind: "time",
      prompt: `<div class="drill-big">${pad2(h)}:${pad2(m)}</div><div class="drill-sub">type it as Dutch tells time</div>`,
      answer: timeToDutch(h, m),
      hint: `${pad2(h)}:${pad2(m)}`,
    };
  }

  // Chunks drill: pick a chunk, ask the user to translate it (EN → NL).
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
    const pronouns = [
      { key: "ik",      label: "ik" },
      { key: "jij",     label: "jij" },
      { key: "hij",     label: "hij/zij/het" },
      { key: "wij",     label: "wij" },
      { key: "jullie",  label: "jullie" },
      { key: "zij",     label: "zij (zij allemaal)" },
    ];
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

  /* ---------- Drill controllers ---------- */

  // Minimal-pair perception drill: two near-identical Dutch words, user
  // hears one (server picks at random), taps which they heard. Pure ear
  // training — the user never types or speaks.
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

  /* ---------- Metalinguistic error diagnosis ----------
   * When a typed Dutch answer is wrong, this returns a short tag describing
   * WHAT KIND of error it is, so the feedback can teach a rule rather than
   * just dump the right answer. Heuristic — covers the 6 most common Dutch
   * mistakes for English speakers. Returns null when no obvious pattern.
   */
  const COMMON_VERBS_2P = new Set([
    "ben","bent","is","zijn","heb","hebt","heeft","hebben","ga","gaat","gaan",
    "wil","willen","kan","kunt","kunnen","moet","moeten","mag","mogen","doe","doet","doen",
    "zal","zult","zullen","weet","weten","zie","ziet","zien","kom","komt","komen",
    "geef","geeft","geven","spreek","spreekt","spreken","werk","werkt","werken",
    "woon","woont","wonen","eet","eten","drink","drinkt","drinken","leer","leert","leren",
  ]);
  const TIME_PLACE_FRONTERS = new Set([
    "morgen","gisteren","vandaag","vanavond","vanmorgen","vanmiddag","nu","later","straks",
    "in","op","bij","naar","aan","met","over","onder","achter","voor",
  ]);

  function diagnoseError(target, given) {
    if (!given) return null;
    const t = normalize(target);
    const g = normalize(given);
    if (t === g) return null;
    const tw = t.split(/\s+/);
    const gw = g.split(/\s+/);

    // niet vs geen confusion
    if (t.includes(" geen ") && g.includes(" niet een ")) {
      return { tag: "niet vs geen", note: "Use <strong>geen</strong> (one word) before indefinite nouns — never 'niet een'." };
    }
    if (t.includes(" niet") && /\bgeen\b/.test(g) && !/\bgeen\b/.test(t)) {
      return { tag: "niet vs geen", note: "Here you want <strong>niet</strong>. 'Geen' is only for indefinite nouns; 'niet' negates verbs, adjectives, and definite objects." };
    }

    // de / het mismatch (article gender)
    if (tw[0] === "de" && gw[0] === "het") {
      return { tag: "de/het", note: "Wrong article. This noun is a <strong>de</strong>-word." };
    }
    if (tw[0] === "het" && gw[0] === "de") {
      return { tag: "de/het", note: "Wrong article. This noun is a <strong>het</strong>-word (~25% are; diminutives in -je always)." };
    }

    // V2 violation: target has fronted time/place + verb in slot 2;
    // user kept SVO (subject before verb).
    if (tw.length >= 3 && gw.length >= 3) {
      const targetFronted = TIME_PLACE_FRONTERS.has(tw[0]);
      const targetVerbSlot2 = COMMON_VERBS_2P.has(tw[1]);
      const givenSubjectFirst = ["ik","jij","je","hij","zij","ze","wij","we","u","jullie"].includes(gw[1]);
      if (targetFronted && targetVerbSlot2 && givenSubjectFirst && gw[0] === tw[0]) {
        return { tag: "V2 word order", note: `When time/place is first, the verb goes in slot 2 and the subject moves: <strong>${tw[0]} ${tw[1]} ...</strong>, not <em>${tw[0]} ik/jij ...</em>.` };
      }
    }

    // Missing -t on jij/hij verb form
    // If user wrote the same word as target minus a final t, it's likely the conjugation drop.
    if (tw.length === gw.length) {
      for (let i = 0; i < tw.length; i++) {
        if (tw[i].endsWith("t") && tw[i].slice(0, -1) === gw[i]) {
          return { tag: "missing -t", note: "Jij/hij/zij/het verbs end in <strong>-t</strong>. (Inverted form 'werk je?' drops it again.)" };
        }
      }
    }

    // jij / je swap (almost-equivalent but stylistic)
    if (t.replace(/\bje\b/g, "jij") === g.replace(/\bje\b/g, "jij")) {
      return { tag: "jij vs je", note: "'Je' (unstressed) is the natural choice in most contexts. Use 'jij' only for emphasis." };
    }

    // Wij / we swap (same)
    if (t.replace(/\bwe\b/g, "wij") === g.replace(/\bwe\b/g, "wij")) {
      return { tag: "wij vs we", note: "'We' (unstressed) is more natural. 'Wij' is for emphasis." };
    }

    // Single-letter typo — encourage rather than penalise.
    if (Math.abs(t.length - g.length) <= 1 && tw.join(" ") !== gw.join(" ")) {
      let edits = 0;
      const a = tw.join(" "), b = gw.join(" ");
      const m = Math.min(a.length, b.length);
      for (let i = 0; i < m; i++) if (a[i] !== b[i]) edits++;
      edits += Math.abs(a.length - b.length);
      if (edits <= 2) return { tag: "small typo", note: "Almost — one or two letters off. You've got the idea." };
    }

    // Different word order entirely (token sets match but order doesn't)
    const sortedT = [...tw].sort().join(" ");
    const sortedG = [...gw].sort().join(" ");
    if (sortedT === sortedG && t !== g) {
      return { tag: "word order", note: "All the right words — wrong order. Check time-manner-place ordering and where the verb sits." };
    }

    // Completely different = no useful diagnosis
    return null;
  }

  return { numberToDutch, timeToDutch, normalize, makeDrill, check, advance, diagnoseError };
})();
