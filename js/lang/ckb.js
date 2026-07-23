// Central Kurdish (Sorani) language pack. Written in the Sorani Arabic-based
// alphabet (right-to-left). Spoken mainly in the Kurdistan Region of Iraq
// (Hewlêr/Erbil, Silêmanî, Kerkûk) and western Iran (Rojhelat).
//
// NOTE: speech (TTS/STT) is not wired for Kurdish yet — Voxtral/Whisper don't
// cover it. `hasSpeech: false` tells the engine to skip audio for this language
// (no garbled system-voice fallback, no audio-only drills) until we add a
// Kurdish speech model. All the text content works today.
(function () {
  function norm(s) {
    return String(s || "").toLowerCase()
      .replace(/[.,!?؟،'"]/g, "").replace(/\s+/g, " ").trim();
  }

  /* ---------- numbers (Sorani, Arabic script) ---------- */
  const NUMBER_WORDS = {
    0: "سفر", 1: "یەک", 2: "دوو", 3: "سێ", 4: "چوار", 5: "پێنج",
    6: "شەش", 7: "حەوت", 8: "هەشت", 9: "نۆ", 10: "دە",
    11: "یازدە", 12: "دوازدە", 13: "سێزدە", 14: "چواردە", 15: "پازدە",
    16: "شازدە", 17: "حەڤدە", 18: "هەژدە", 19: "نۆزدە",
    20: "بیست", 30: "سی", 40: "چل", 50: "پەنجا",
    60: "شەست", 70: "حەفتا", 80: "هەشتا", 90: "نەوەد",
    100: "سەد",
  };
  // Kurdish counts tens-first joined with "و" (û = and): 21 = بیست و یەک.
  function numberToWord(n) {
    if (n < 0 || n > 100) return null;
    if (NUMBER_WORDS[n] !== undefined) return NUMBER_WORDS[n];
    const ones = n % 10;
    const tens = n - ones;
    return NUMBER_WORDS[tens] + " و " + NUMBER_WORDS[ones];
  }

  /* ---------- time (Sorani) ----------
   * Kurdish tells time like English — minutes past (و) or to (بۆ) the hour.
   *   8:30 = هەشت و نیو, 8:15 = هەشت و چارەک, 8:45 = چارەک بۆ نۆ. */
  function timeToWord(h24, m) {
    let h12 = h24 % 12; if (h12 === 0) h12 = 12;
    const nextH = (h12 % 12) + 1;
    const hr = (n) => numberToWord(n);
    if (m === 0)  return `کاتژمێر ${hr(h12)}`;
    if (m === 15) return `${hr(h12)} و چارەک`;
    if (m === 30) return `${hr(h12)} و نیو`;
    if (m === 45) return `چارەک بۆ ${hr(nextH)}`;
    if (m < 30)   return `${hr(h12)} و ${hr(m)} خولەک`;
    return          `${hr(60 - m)} خولەک بۆ ${hr(nextH)}`;
  }

  /* ---------- conjugation drill pronouns ---------- */
  const conjugationPronouns = [
    { key: "s1", label: "من (min)" },
    { key: "s2", label: "تۆ (to)" },
    { key: "s3", label: "ئەو (ew)" },
    { key: "p1", label: "ئێمە (ême)" },
    { key: "p2", label: "ئێوە (êwe)" },
    { key: "p3", label: "ئەوان (ewan)" },
  ];

  /* ---------- respeller: Sorani Arabic script → Latin transliteration ----------
   * For English speakers who can't yet read the Sorani alphabet, the Latin
   * transliteration IS the pronunciation guide. Approximate but useful. */
  const S2L = {
    "ا": "a", "ب": "b", "پ": "p", "ت": "t", "ج": "c", "چ": "ç", "ح": "h",
    "خ": "x", "د": "d", "ر": "r", "ڕ": "rr", "ز": "z", "ژ": "j", "س": "s",
    "ش": "ş", "ع": "e", "غ": "x", "ف": "f", "ڤ": "v", "ق": "q", "ک": "k",
    "گ": "g", "ل": "l", "ڵ": "ll", "م": "m", "ن": "n", "ھ": "h", "ه": "h",
    "ە": "e", "ۆ": "o", "ی": "î", "ێ": "ê", "ئ": "", "ء": "", "أ": "a",
  };
  function respellWord(raw) {
    let s = String(raw).replace(/وو/g, "û").replace(/ئی|ئێ/g, "î");
    let out = "";
    for (const ch of s) {
      if (ch === "و") { out += "w"; continue; }
      out += (S2L[ch] !== undefined ? S2L[ch] : ch);
    }
    return out;
  }

  /* ---------- error diagnosis (kept simple for Kurdish) ---------- */
  function diagnoseError(target, given) {
    if (!given) return null;
    const t = norm(target);
    const g = norm(given);
    if (t === g) return null;
    const tw = t.split(/\s+/);
    const gw = g.split(/\s+/);
    // near-miss typo
    if (Math.abs(t.length - g.length) <= 1 && tw.join(" ") !== gw.join(" ")) {
      let edits = 0;
      const a = tw.join(" "), b = gw.join(" ");
      const mlen = Math.min(a.length, b.length);
      for (let i = 0; i < mlen; i++) if (a[i] !== b[i]) edits++;
      edits += Math.abs(a.length - b.length);
      if (edits <= 2) return { tag: "small typo", note: "Almost — one or two letters off. You've got the idea." };
    }
    // right words, wrong order
    const sortedT = [...tw].sort().join(" ");
    const sortedG = [...gw].sort().join(" ");
    if (sortedT === sortedG && t !== g) {
      return { tag: "word order", note: "All the right words — wrong order. Kurdish is Subject–Object–Verb: the verb comes last." };
    }
    return null;
  }

  Lang.register({
    id: "ckb",
    name: "Kurdish (Sorani)",
    endonym: "کوردیی ناوەندی",
    brand: "فێری کوردی ببە",
    flag: "☀️",
    langCode: "ckb",
    rtl: true,
    hasSpeech: false,
    storageKey: "fer-ckb:v1",
    backupPrefix: "fer-ckb",
    voices: [],
    defaultVoice: null,
    narrowVoices: [],
    greeting(h) {
      if (h < 12) return { target: "بەیانی باش", en: "Good morning" };
      if (h < 18) return { target: "ڕۆژ باش", en: "Good afternoon" };
      return { target: "ئێوارە باش", en: "Good evening" };
    },
    calendar: {
      days: ["یەکشەممە", "دووشەممە", "سێشەممە", "چوارشەممە", "پێنجشەممە", "هەینی", "شەممە"],
      months: ["کانوونی دووەم", "شوبات", "ئازار", "نیسان", "مایس", "حوزەیران", "تەمووز", "ئاب", "ئەیلوول", "تشرینی یەکەم", "تشرینی دووەم", "کانوونی یەکەم"],
    },
    clozeStopwords: new Set(["و", "لە", "بۆ", "من", "تۆ", "ئەو", "بە", "ئەم", "لەگەڵ", "یان", "بەڵام", "کە"]),
    voiceTest: "",
    doneHeading: "دەستت خۆش!",
    tips: [
      { title: "Retrieval > rereading", body: "Pulling a word from memory once teaches you more than reading it five times. The discomfort is the learning." },
      { title: "Embrace desirable difficulty", body: "If recall feels easy, the schedule is too short. The cards that strain you are the ones cementing." },
      { title: "Learn the script first", body: "The Sorani alphabet is only ~34 letters and mostly phonemic — an afternoon of practice unlocks reading everything else." },
      { title: "Interleave, don't block", body: "Mixed card types beat doing 20 of the same. Your brain learns to distinguish, not just recognise." },
      { title: "Kurdish is verb-final", body: "Subject–Object–Verb: 'Min çay dexwazim' = I tea want. The verb almost always lands last." },
      { title: "Meet the ezafe", body: "The little linker -î / -ی joins a noun to what describes it: 'kiteb-î min' = book-of me = my book. It's everywhere." },
      { title: "The past tense flips", body: "Kurdish is split-ergative: in the past, transitive verbs agree with the OBJECT, not the subject. Strange at first, natural with practice." },
      { title: "ح, خ, غ, ق from the throat", body: "Kurdish keeps the deep throat consonants ح/خ/غ/ق distinct. Lean into them — they carry meaning." },
      { title: "One 'silaw' fits all", body: "سڵاو (silaw) works morning, noon, or night, formal or casual. When in doubt, say silaw." },
      { title: "Hospitality is grammar", body: "فەرموو (fermû) — 'here you go / go ahead / please, come in' — is said constantly. Guests are sacred in Kurdish culture." },
    ],
    drillHints: {
      minpair: "ح vs ه · ear training (coming soon)",
      chunk: "'فەرموو', 'سوپاس'…",
      number: "بیست و یەک drill",
      time: "هەشت و نیو…",
    },
    numberToWord,
    timeToWord,
    conjugationPronouns,
    respellWord,
    diagnoseError,
  });
})();
