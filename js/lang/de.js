// German language pack. Everything language-specific about learning German
// lives here; the shared engine reads it via Lang.cfg(). Registers into Lang.
(function () {
  function norm(s) {
    return String(s || "").toLowerCase()
      .replace(/[.,!?'"]/g, "").replace(/\s+/g, " ").trim();
  }

  /* ---------- numbers ---------- */
  const NUMBER_WORDS = {
    0: "null", 1: "eins", 2: "zwei", 3: "drei", 4: "vier", 5: "fünf",
    6: "sechs", 7: "sieben", 8: "acht", 9: "neun", 10: "zehn",
    11: "elf", 12: "zwölf", 13: "dreizehn", 14: "vierzehn", 15: "fünfzehn",
    16: "sechzehn", 17: "siebzehn", 18: "achtzehn", 19: "neunzehn",
    20: "zwanzig", 30: "dreißig", 40: "vierzig", 50: "fünfzig",
    60: "sechzig", 70: "siebzig", 80: "achtzig", 90: "neunzig",
    100: "hundert",
  };
  // Number → German (0-100). ones + "und" + tens as one word (24 =
  // "vierundzwanzig"). Standalone "eins" drops to "ein" inside a compound.
  function numberToWord(n) {
    if (n < 0 || n > 100) return null;
    if (NUMBER_WORDS[n] !== undefined) return NUMBER_WORDS[n];
    const ones = n % 10;
    const tens = n - ones;
    const onesWord = ones === 1 ? "ein" : NUMBER_WORDS[ones];
    const tensWord = NUMBER_WORDS[tens];
    return onesWord + "und" + tensWord;
  }

  /* ---------- time ----------
   * German tells time RELATIVE to the half-hour, like Dutch:
   *   8:30 = "halb neun", 8:25 = "fünf vor halb neun", 8:35 = "fünf nach halb neun".
   * Only the whole hour 1:00 is special: "ein Uhr", not "eins Uhr". */
  function timeToWord(h24, m) {
    let h12 = h24 % 12; if (h12 === 0) h12 = 12;
    const nextH = (h12 % 12) + 1;
    const hr = (n) => numberToWord(n);
    if (m === 0)  return h12 === 1 ? "ein Uhr" : `${hr(h12)} Uhr`;
    if (m === 15) return `Viertel nach ${hr(h12)}`;
    if (m === 30) return `halb ${hr(nextH)}`;
    if (m === 45) return `Viertel vor ${hr(nextH)}`;
    if (m < 15)   return `${hr(m)} nach ${hr(h12)}`;
    if (m < 30)   return `${hr(30 - m)} vor halb ${hr(nextH)}`;
    if (m < 45)   return `${hr(m - 30)} nach halb ${hr(nextH)}`;
    return          `${hr(60 - m)} vor ${hr(nextH)}`;
  }

  /* ---------- conjugation drill pronouns ---------- */
  const conjugationPronouns = [
    { key: "ich", label: "ich" },
    { key: "du",  label: "du" },
    { key: "er",  label: "er/sie/es" },
    { key: "wir", label: "wir" },
    { key: "ihr", label: "ihr" },
    { key: "sie", label: "sie (Plural)" },
  ];

  /* ---------- respeller (German → crude English respelling) ---------- */
  function respellWord(raw) {
    const m = raw.match(/^([^A-Za-zÀ-ÿ]*)([A-Za-zÀ-ÿ]+)(.*)$/);
    if (!m) return raw;
    const [, pre, core, post] = m;
    let s = core.toLowerCase();
    s = s.replace(/^str/g, "shtr");
    s = s.replace(/^st/g,  "sht");
    s = s.replace(/^sp/g,  "shp");
    s = s.replace(/tsch/g, "tch");
    s = s.replace(/sch/g, "sh");
    s = s.replace(/ch/g,  "kh");
    s = s.replace(/ck/g,  "k");
    s = s.replace(/ph/g,  "f");
    s = s.replace(/qu/g,  "kv");
    s = s.replace(/ß/g,   "ss");
    s = s.replace(/ei/g, "eye");
    s = s.replace(/ai/g, "eye");
    s = s.replace(/ie/g, "ee");
    s = s.replace(/eu/g, "oy");
    s = s.replace(/äu/g, "oy");
    s = s.replace(/au/g, "ow");
    s = s.replace(/ä/g, "eh");
    s = s.replace(/ö/g, "ur");
    s = s.replace(/ü/g, "ew");
    s = s.replace(/aa/g, "ah");
    s = s.replace(/ee/g, "ay");
    s = s.replace(/oo/g, "oh");
    s = s.replace(/v/g, "f");
    s = s.replace(/w/g, "v");
    s = s.replace(/z/g, "ts");
    s = s.replace(/j/g, "y");
    s = s.replace(/er$/g, "uh");
    s = s.replace(/e$/g, "uh");
    s = s.replace(/d$/g, "t");
    s = s.replace(/g$/g, "k");
    if (core[0] === core[0].toUpperCase()) s = s[0].toUpperCase() + s.slice(1);
    return pre + s + post;
  }

  /* ---------- metalinguistic error diagnosis ---------- */
  const COMMON_VERBS_2P = new Set([
    "bin","bist","ist","sind","seid","habe","hast","hat","haben","habt",
    "gehe","gehst","geht","gehen","komme","kommst","kommt","kommen",
    "will","willst","wollen","wollt","kann","kannst","können","könnt",
    "muss","musst","müssen","müsst","darf","darfst","dürfen","dürft",
    "weiß","weißt","wissen","wisst","sehe","siehst","sieht","sehen","seht",
    "mache","machst","macht","machen","gebe","gibst","gibt","geben","gebt",
    "arbeite","arbeitest","arbeitet","arbeiten","wohne","wohnst","wohnt","wohnen",
    "esse","isst","essen","esst","trinke","trinkst","trinkt","trinken",
    "werde","wirst","wird","werden","werdet","fahre","fährst","fährt","fahren","fahrt",
    "spreche","sprichst","spricht","sprechen","sprecht","lerne","lernst","lernt","lernen",
  ]);
  const TIME_PLACE_FRONTERS = new Set([
    "morgen","gestern","heute","jetzt","später","dann","danach","abends","montags",
    "hier","dort","da","oft","manchmal",
    "in","auf","an","bei","nach","mit","über","unter","vor","zu","im","am",
  ]);

  function diagnoseError(target, given) {
    if (!given) return null;
    const t = norm(target);
    const g = norm(given);
    if (t === g) return null;
    const tw = t.split(/\s+/);
    const gw = g.split(/\s+/);

    if (/\bkein/.test(t) && g.includes("nicht ein")) {
      return { tag: "nicht vs kein", note: "Use <strong>kein</strong> (one word) before indefinite nouns — never 'nicht ein'." };
    }
    if (t.includes("nicht") && /\bkein/.test(g) && !/\bkein/.test(t)) {
      return { tag: "nicht vs kein", note: "Here you want <strong>nicht</strong>. 'kein' is only for indefinite nouns; 'nicht' negates verbs, adjectives, and definite objects." };
    }
    const ARTICLES = ["der", "die", "das"];
    if (ARTICLES.includes(tw[0]) && ARTICLES.includes(gw[0]) && tw[0] !== gw[0]) {
      return { tag: "der/die/das", note: `Wrong article. This noun is a <strong>${tw[0]}</strong>-word — German gender has to be memorised with the noun.` };
    }
    if (/\bSie\b/.test(target) && /\bdu\b/.test(given) && !/\bSie\b/.test(given)) {
      return { tag: "du vs Sie", note: "This sentence is <strong>formal</strong> — use <strong>Sie</strong> and the Sie-verb form, not 'du'." };
    }
    if (/\bdu\b/.test(target) && /\bSie\b/.test(given)) {
      return { tag: "du vs Sie", note: "This one is <strong>informal</strong> — use <strong>du</strong>, not the formal 'Sie'." };
    }
    if (tw.length >= 3 && gw.length >= 3) {
      const targetFronted = TIME_PLACE_FRONTERS.has(tw[0]);
      const targetVerbSlot2 = COMMON_VERBS_2P.has(tw[1]);
      const givenSubjectFirst = ["ich","du","er","sie","es","wir","ihr"].includes(gw[1]);
      if (targetFronted && targetVerbSlot2 && givenSubjectFirst && gw[0] === tw[0]) {
        return { tag: "V2 word order", note: `When time/place is first, the verb goes in slot 2 and the subject moves: <strong>${tw[0]} ${tw[1]} ...</strong>, not <em>${tw[0]} ich/du ...</em>.` };
      }
    }
    if (tw.length === gw.length) {
      for (let i = 0; i < tw.length; i++) {
        if (tw[i].endsWith("st") && tw[i].slice(0, -2) === gw[i]) {
          return { tag: "missing -st", note: "The <strong>du</strong>-form ends in <strong>-st</strong>: du gehst, du kommst, du machst." };
        }
        if (tw[i].endsWith("t") && !tw[i].endsWith("st") && tw[i].slice(0, -1) === gw[i]) {
          return { tag: "missing -t", note: "The <strong>er/sie/es</strong>-form (and 'ihr') ends in <strong>-t</strong>: er geht, er macht." };
        }
      }
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
    id: "de",
    name: "German",
    endonym: "Deutsch",
    brand: "Lern Deutsch",
    flag: "🇩🇪",
    langCode: "de-DE",
    storageKey: "lern-de:v1",
    backupPrefix: "lern-de",
    voices: [
      { value: "de_male",   label: "Voxtral · de_male" },
      { value: "de_female", label: "Voxtral · de_female" },
    ],
    defaultVoice: "de_male",
    narrowVoices: ["de_male", "de_female", "de_male"],
    greeting(h) {
      if (h < 11) return { target: "Guten Morgen", en: "Good morning" };
      if (h < 18) return { target: "Guten Tag", en: "Good afternoon" };
      return { target: "Guten Abend", en: "Good evening" };
    },
    calendar: {
      days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
      months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    },
    clozeStopwords: new Set(["der", "die", "das", "ein", "eine", "einen", "und", "oder", "ich", "ist", "in", "auf", "zu", "ja", "nein", "es", "du"]),
    voiceTest: "Hallo, das ist ein Test.",
    doneHeading: "Gut gemacht!",
    tips: [
      { title: "Retrieval > rereading", body: "Pulling a word from memory once teaches you more than reading it five times. The discomfort is the learning." },
      { title: "Embrace desirable difficulty", body: "If recall feels easy, the schedule is too short. The cards that strain you are the ones cementing." },
      { title: "Sleep is part of the protocol", body: "Long-term consolidation happens during sleep. An evening session compounds overnight." },
      { title: "Interleave, don't block", body: "Mixed card types beat doing 20 of the same. Your brain learns to distinguish, not just recognise." },
      { title: "Production beats recognition", body: "Recognising 'Kaffee' on a flashcard is half the work. Producing it from English is the real test." },
      { title: "Speak to the room", body: "Even in an empty kitchen, say it aloud. Articulation engages motor memory the eyes alone don't." },
      { title: "The 1/3/7/14/30 ladder", body: "Ebbinghaus's intervals — that's why your cards come back tomorrow, then in three days, then a week." },
      { title: "V2 is the German tell", body: "Saying 'morgen ich gehe…' is the #1 give-away you're a beginner. The verb belongs in slot 2: 'morgen gehe ich…'." },
      { title: "The little words do the work", body: "doch, mal, halt, eben — sprinkle these modal particles in and your German instantly sounds native. 'Komm mal her' beats 'komm her'." },
      { title: "Kennen vs wissen", body: "Like Spanish saber/conocer. Wissen = facts you know. Kennen = people and places you're familiar with." },
    ],
    drillHints: {
      minpair: "Kirche vs Kirsche · ear training",
      chunk: "'mal schauen', 'schönen Tag noch'…",
      number: "vierundzwanzig drill",
      time: "halb neun, Viertel nach…",
    },
    numberToWord,
    timeToWord,
    conjugationPronouns,
    respellWord,
    diagnoseError,
  });
})();
