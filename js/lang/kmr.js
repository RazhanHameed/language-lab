// Kurmanji (Northern Kurdish) language pack. Written in the Latin-based Hawar
// alphabet. The most widely spoken Kurdish variety — northern Kurdistan
// (Amed/Diyarbakır, Wan, Mêrdîn in Turkey), north-east Syria (Rojava), and
// parts of Iraq (Duhok) and Iran.
//
// NOTE: speech (TTS/STT) is not wired for Kurdish yet. `hasSpeech: false` tells
// the engine to skip audio for this language until we add a Kurdish speech
// model. All the text content works today.
(function () {
  function norm(s) {
    return String(s || "").toLowerCase()
      .replace(/[.,!?'"]/g, "").replace(/\s+/g, " ").trim();
  }

  /* ---------- numbers (Kurmanji, Latin) ---------- */
  const NUMBER_WORDS = {
    0: "sifir", 1: "yek", 2: "du", 3: "sê", 4: "çar", 5: "pênc",
    6: "şeş", 7: "heft", 8: "heşt", 9: "neh", 10: "deh",
    11: "yanzdeh", 12: "diwanzdeh", 13: "sêzdeh", 14: "çardeh", 15: "panzdeh",
    16: "şanzdeh", 17: "hevdeh", 18: "hîjdeh", 19: "nozdeh",
    20: "bîst", 30: "sî", 40: "çil", 50: "pêncî",
    60: "şêst", 70: "heftê", 80: "heştê", 90: "nod",
    100: "sed",
  };
  // Kurdish counts tens-first joined with "û" (and): 21 = bîst û yek.
  function numberToWord(n) {
    if (n < 0 || n > 100) return null;
    if (NUMBER_WORDS[n] !== undefined) return NUMBER_WORDS[n];
    const ones = n % 10;
    const tens = n - ones;
    return NUMBER_WORDS[tens] + " û " + NUMBER_WORDS[ones];
  }

  /* ---------- time (Kurmanji) ----------
   * Kurdish tells time like English — minutes past (û) or to (kêm) the hour.
   *   8:30 = heşt û nîv, 8:15 = heşt û çaryek, 8:45 = çaryek kêm neh. */
  function timeToWord(h24, m) {
    let h12 = h24 % 12; if (h12 === 0) h12 = 12;
    const nextH = (h12 % 12) + 1;
    const hr = (n) => numberToWord(n);
    if (m === 0)  return `Saet ${hr(h12)}`;
    if (m === 15) return `${hr(h12)} û çaryek`;
    if (m === 30) return `${hr(h12)} û nîv`;
    if (m === 45) return `çaryek kêm ${hr(nextH)}`;
    if (m < 30)   return `${hr(h12)} û ${hr(m)} deqe`;
    return          `${hr(60 - m)} deqe kêm ${hr(nextH)}`;
  }

  /* ---------- conjugation drill pronouns ---------- */
  const conjugationPronouns = [
    { key: "s1", label: "ez" },
    { key: "s2", label: "tu" },
    { key: "s3", label: "ew" },
    { key: "p1", label: "em" },
    { key: "p2", label: "hûn" },
    { key: "p3", label: "ew (pl.)" },
  ];

  /* ---------- respeller: Kurmanji Latin → crude English respelling ---------- */
  function respellWord(raw) {
    const m = raw.match(/^([^A-Za-zÀ-ÿ]*)([A-Za-zÀ-ÿ]+)(.*)$/);
    if (!m) return raw;
    const [, pre, core, post] = m;
    let s = core.toLowerCase();
    s = s.replace(/xw/g, "khw");
    s = s.replace(/ç/g, "ch");
    s = s.replace(/ş/g, "sh");
    s = s.replace(/c/g, "j");
    s = s.replace(/j/g, "zh");
    s = s.replace(/x/g, "kh");
    s = s.replace(/q/g, "k");   // uvular k — from the back of the throat
    s = s.replace(/î/g, "ee");
    s = s.replace(/û/g, "oo");
    s = s.replace(/ê/g, "ay");
    s = s.replace(/i/g, "ih");  // Kurmanji 'i' is a short schwa
    if (core[0] === core[0].toUpperCase()) s = s[0].toUpperCase() + s.slice(1);
    return pre + s + post;
  }

  /* ---------- error diagnosis (kept simple for Kurdish) ---------- */
  function diagnoseError(target, given) {
    if (!given) return null;
    const t = norm(target);
    const g = norm(given);
    if (t === g) return null;
    const tw = t.split(/\s+/);
    const gw = g.split(/\s+/);
    if (Math.abs(t.length - g.length) <= 1 && tw.join(" ") !== gw.join(" ")) {
      let edits = 0;
      const a = tw.join(" "), b = gw.join(" ");
      const mlen = Math.min(a.length, b.length);
      for (let i = 0; i < mlen; i++) if (a[i] !== b[i]) edits++;
      edits += Math.abs(a.length - b.length);
      if (edits <= 2) return { tag: "small typo", note: "Almost — one or two letters off (watch the ê / î / û and ç / ş)." };
    }
    const sortedT = [...tw].sort().join(" ");
    const sortedG = [...gw].sort().join(" ");
    if (sortedT === sortedG && t !== g) {
      return { tag: "word order", note: "All the right words — wrong order. Kurdish is Subject–Object–Verb: the verb comes last." };
    }
    return null;
  }

  Lang.register({
    id: "kmr",
    name: "Kurdish (Kurmanji)",
    endonym: "Kurmancî",
    brand: "Fêrî Kurmancî bibe",
    flag: "🏔️",
    langCode: "kmr",
    rtl: false,
    hasSpeech: false,
    storageKey: "fer-kmr:v1",
    backupPrefix: "fer-kmr",
    voices: [],
    defaultVoice: null,
    narrowVoices: [],
    greeting(h) {
      if (h < 12) return { target: "Beyanî baş", en: "Good morning" };
      if (h < 18) return { target: "Roj baş", en: "Good afternoon" };
      return { target: "Êvar baş", en: "Good evening" };
    },
    calendar: {
      days: ["Yekşem", "Duşem", "Sêşem", "Çarşem", "Pêncşem", "În", "Şemî"],
      months: ["Rêbendan", "Reşemî", "Adar", "Nîsan", "Gulan", "Hezîran", "Tîrmeh", "Tebax", "Îlon", "Cotmeh", "Mijdar", "Berfanbar"],
    },
    clozeStopwords: new Set(["û", "li", "bo", "ez", "tu", "ew", "bi", "ev", "ji", "di", "ku", "min", "te", "na"]),
    voiceTest: "",
    doneHeading: "Aferîn!",
    tips: [
      { title: "Retrieval > rereading", body: "Pulling a word from memory once teaches you more than reading it five times. The discomfort is the learning." },
      { title: "Embrace desirable difficulty", body: "If recall feels easy, the schedule is too short. The cards that strain you are the ones cementing." },
      { title: "The Latin alphabet helps you", body: "Kurmanji's Hawar script is phonemic: every letter is one sound. ê = 'ay', î = 'ee', û = 'oo', c = 'j', ç = 'ch', ş = 'sh', x = 'kh'." },
      { title: "Interleave, don't block", body: "Mixed card types beat doing 20 of the same. Your brain learns to distinguish, not just recognise." },
      { title: "Kurdish is verb-final", body: "Subject–Object–Verb: 'Ez çayê vedixwim' = I tea drink. The verb almost always lands last." },
      { title: "Nouns have gender", body: "Kurmanji marks masculine/feminine — it shows up in the ezafe (-a / -ê / -ê) and cases, not in the article. Learn each noun's gender with the word." },
      { title: "The past tense flips", body: "Kurmanji is split-ergative: in the past, transitive verbs agree with the OBJECT and the subject takes the oblique case. Odd at first, natural with practice." },
      { title: "Mind the case endings", body: "The oblique case (-î / -ê / -an) marks objects and possessors. Small endings, big meaning." },
      { title: "One 'silav' fits all", body: "Silav works morning, noon, or night, formal or casual. When in doubt, say silav." },
      { title: "Hospitality is grammar", body: "Fermo — 'here you go / go ahead / please, come in' — is said constantly. Guests are sacred in Kurdish culture." },
    ],
    drillHints: {
      minpair: "ç vs c · ear training (coming soon)",
      chunk: "'fermo', 'spas'…",
      number: "bîst û yek drill",
      time: "heşt û nîv…",
    },
    numberToWord,
    timeToWord,
    conjugationPronouns,
    respellWord,
    diagnoseError,
  });
})();
