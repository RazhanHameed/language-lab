// Dutch language pack. Everything language-specific about learning Dutch lives
// here; the shared engine reads it via Lang.cfg(). Registers into Lang.
(function () {
  function norm(s) {
    return String(s || "").toLowerCase()
      .replace(/[.,!?'"]/g, "").replace(/\s+/g, " ").trim();
  }

  /* ---------- numbers ---------- */
  const NUMBER_WORDS = {
    0: "nul", 1: "een", 2: "twee", 3: "drie", 4: "vier", 5: "vijf",
    6: "zes", 7: "zeven", 8: "acht", 9: "negen", 10: "tien",
    11: "elf", 12: "twaalf", 13: "dertien", 14: "veertien", 15: "vijftien",
    16: "zestien", 17: "zeventien", 18: "achttien", 19: "negentien",
    20: "twintig", 30: "dertig", 40: "veertig", 50: "vijftig",
    60: "zestig", 70: "zeventig", 80: "tachtig", 90: "negentig",
    100: "honderd",
  };
  // Number → Dutch (0-100). Words ending in -ee/-ie take a diaeresis joiner (-ën).
  function numberToWord(n) {
    if (n < 0 || n > 100) return null;
    if (NUMBER_WORDS[n] !== undefined) return NUMBER_WORDS[n];
    const ones = n % 10;
    const tens = n - ones;
    const onesWord = NUMBER_WORDS[ones];
    const tensWord = NUMBER_WORDS[tens];
    const joiner = (onesWord.endsWith("ee") || onesWord.endsWith("ie")) ? "ën" : "en";
    return onesWord + joiner + tensWord;
  }

  /* ---------- time ----------
   * Dutch tells time RELATIVE to the half-hour:
   *   8:30 = "half negen", 8:25 = "vijf voor half negen", 8:35 = "vijf over half negen". */
  function timeToWord(h24, m) {
    let h12 = h24 % 12; if (h12 === 0) h12 = 12;
    const nextH = (h12 % 12) + 1;
    const hr = (n) => numberToWord(n);
    if (m === 0)  return `${hr(h12)} uur`;
    if (m === 15) return `kwart over ${hr(h12)}`;
    if (m === 30) return `half ${hr(nextH)}`;
    if (m === 45) return `kwart voor ${hr(nextH)}`;
    if (m < 15)   return `${hr(m)} over ${hr(h12)}`;
    if (m < 30)   return `${hr(30 - m)} voor half ${hr(nextH)}`;
    if (m < 45)   return `${hr(m - 30)} over half ${hr(nextH)}`;
    return          `${hr(60 - m)} voor ${hr(nextH)}`;
  }

  /* ---------- conjugation drill pronouns ---------- */
  const conjugationPronouns = [
    { key: "ik",     label: "ik" },
    { key: "jij",    label: "jij" },
    { key: "hij",    label: "hij/zij/het" },
    { key: "wij",    label: "wij" },
    { key: "jullie", label: "jullie" },
    { key: "zij",    label: "zij (zij allemaal)" },
  ];

  /* ---------- respeller (Dutch → crude English respelling) ---------- */
  function respellWord(raw) {
    const m = raw.match(/^([^A-Za-zÀ-ÿ]*)([A-Za-zÀ-ÿ]+)(.*)$/);
    if (!m) return raw;
    const [, pre, core, post] = m;
    let s = core.toLowerCase();
    s = s.replace(/schr/g, "skhr");
    s = s.replace(/sch/g,  "skh");
    s = s.replace(/ch/g,   "kh");
    s = s.replace(/aai/g, "eye");
    s = s.replace(/ooi/g, "oy");
    s = s.replace(/oei/g, "ooy");
    s = s.replace(/eeuw/g, "ay-oo");
    s = s.replace(/ieuw/g, "ee-oo");
    s = s.replace(/uw/g,   "oo");
    s = s.replace(/ij/g, "eye");
    s = s.replace(/ei/g, "eye");
    s = s.replace(/ui/g, "ow");
    s = s.replace(/au/g, "ow");
    s = s.replace(/ou/g, "ow");
    s = s.replace(/eu/g, "uh");
    s = s.replace(/aa/g, "ah");
    s = s.replace(/ee/g, "ay");
    s = s.replace(/oo/g, "oh");
    s = s.replace(/uu/g, "oo");
    s = s.replace(/oe/g, "oo");
    s = s.replace(/ie/g, "ee");
    s = s.replace(/g/g, "kh");
    s = s.replace(/j/g, "y");
    s = s.replace(/v/g, "f");
    s = s.replace(/w/g, "v");
    s = s.replace(/d$/g, "t");
    if (core[0] === core[0].toUpperCase()) s = s[0].toUpperCase() + s.slice(1);
    return pre + s + post;
  }

  /* ---------- metalinguistic error diagnosis ---------- */
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
    const t = norm(target);
    const g = norm(given);
    if (t === g) return null;
    const tw = t.split(/\s+/);
    const gw = g.split(/\s+/);

    if (t.includes(" geen ") && g.includes(" niet een ")) {
      return { tag: "niet vs geen", note: "Use <strong>geen</strong> (one word) before indefinite nouns — never 'niet een'." };
    }
    if (t.includes(" niet") && /\bgeen\b/.test(g) && !/\bgeen\b/.test(t)) {
      return { tag: "niet vs geen", note: "Here you want <strong>niet</strong>. 'Geen' is only for indefinite nouns; 'niet' negates verbs, adjectives, and definite objects." };
    }
    if (tw[0] === "de" && gw[0] === "het") {
      return { tag: "de/het", note: "Wrong article. This noun is a <strong>de</strong>-word." };
    }
    if (tw[0] === "het" && gw[0] === "de") {
      return { tag: "de/het", note: "Wrong article. This noun is a <strong>het</strong>-word (~25% are; diminutives in -je always)." };
    }
    if (tw.length >= 3 && gw.length >= 3) {
      const targetFronted = TIME_PLACE_FRONTERS.has(tw[0]);
      const targetVerbSlot2 = COMMON_VERBS_2P.has(tw[1]);
      const givenSubjectFirst = ["ik","jij","je","hij","zij","ze","wij","we","u","jullie"].includes(gw[1]);
      if (targetFronted && targetVerbSlot2 && givenSubjectFirst && gw[0] === tw[0]) {
        return { tag: "V2 word order", note: `When time/place is first, the verb goes in slot 2 and the subject moves: <strong>${tw[0]} ${tw[1]} ...</strong>, not <em>${tw[0]} ik/jij ...</em>.` };
      }
    }
    if (tw.length === gw.length) {
      for (let i = 0; i < tw.length; i++) {
        if (tw[i].endsWith("t") && tw[i].slice(0, -1) === gw[i]) {
          return { tag: "missing -t", note: "Jij/hij/zij/het verbs end in <strong>-t</strong>. (Inverted form 'werk je?' drops it again.)" };
        }
      }
    }
    if (t.replace(/\bje\b/g, "jij") === g.replace(/\bje\b/g, "jij")) {
      return { tag: "jij vs je", note: "'Je' (unstressed) is the natural choice in most contexts. Use 'jij' only for emphasis." };
    }
    if (t.replace(/\bwe\b/g, "wij") === g.replace(/\bwe\b/g, "wij")) {
      return { tag: "wij vs we", note: "'We' (unstressed) is more natural. 'Wij' is for emphasis." };
    }
    if (Math.abs(t.length - g.length) <= 1 && tw.join(" ") !== gw.join(" ")) {
      let edits = 0;
      const a = tw.join(" "), b = gw.join(" ");
      const mlen = Math.min(a.length, b.length);
      for (let i = 0; i < mlen; i++) if (a[i] !== b[i]) edits++;
      edits += Math.abs(a.length - b.length);
      if (edits <= 2) return { tag: "small typo", note: "Almost — one or two letters off. You've got the idea." };
    }
    const sortedT = [...tw].sort().join(" ");
    const sortedG = [...gw].sort().join(" ");
    if (sortedT === sortedG && t !== g) {
      return { tag: "word order", note: "All the right words — wrong order. Check time-manner-place ordering and where the verb sits." };
    }
    return null;
  }

  Lang.register({
    id: "nl",
    name: "Dutch",
    endonym: "Nederlands",
    brand: "Leer Nederlands",
    flag: "🇳🇱",
    langCode: "nl-NL",
    storageKey: "leer-nl:v1",
    backupPrefix: "leer-nl",
    voices: [
      { value: "M1", label: "Supertonic · Male 1" },
      { value: "F1", label: "Supertonic · Female 1" },
      { value: "M2", label: "Supertonic · Male 2" },
      { value: "F2", label: "Supertonic · Female 2" },
    ],
    defaultVoice: "F1",
    narrowVoices: ["M1", "F1", "M1"],
    greeting(h) {
      if (h < 12) return { target: "Goedemorgen", en: "Good morning" };
      if (h < 18) return { target: "Goedemiddag", en: "Good afternoon" };
      return { target: "Goedenavond", en: "Good evening" };
    },
    calendar: {
      days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
      months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
    },
    clozeStopwords: new Set(["de", "het", "een", "en", "of", "ik", "is", "in", "op", "te", "ja", "nee"]),
    voiceTest: "Hallo, dit is een test.",
    doneHeading: "Goed gedaan!",
    tips: [
      { title: "Retrieval > rereading", body: "Pulling a word from memory once teaches you more than reading it five times. The discomfort is the learning." },
      { title: "Embrace desirable difficulty", body: "If recall feels easy, the schedule is too short. The cards that strain you are the ones cementing." },
      { title: "Sleep is part of the protocol", body: "Long-term consolidation happens during sleep. An evening session compounds overnight." },
      { title: "Interleave, don't block", body: "Mixed card types beat doing 20 of the same. Your brain learns to distinguish, not just recognise." },
      { title: "Production beats recognition", body: "Recognising 'koffie' on a flashcard is half the work. Producing it from English is the real test." },
      { title: "Speak to the room", body: "Even in an empty kitchen, say it aloud. Articulation engages motor memory the eyes alone don't." },
      { title: "The 1/3/7/14/30 ladder", body: "Ebbinghaus's intervals — that's why your cards come back tomorrow, then in three days, then a week." },
      { title: "V2 is the Dutch tell", body: "Saying 'morgen ik ga…' is the #1 give-away you're a beginner. Drill the inversion every day." },
      { title: "Lekker covers everything", body: "It's the Dutch Swiss Army knife: tasty, nice, fun, well. Use it generously and you'll sound local." },
      { title: "Kennen vs weten", body: "Like Spanish saber/conocer. Weten = facts you know. Kennen = people and places you're familiar with." },
    ],
    drillHints: {
      minpair: "huis vs heus · ear training",
      chunk: "'doe maar', 'fijne dag verder'…",
      number: "vierentwintig drill",
      time: "half negen, kwart over…",
    },
    numberToWord,
    timeToWord,
    conjugationPronouns,
    respellWord,
    diagnoseError,
  });
})();
