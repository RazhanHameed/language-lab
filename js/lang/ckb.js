// Central Kurdish (Sorani) language pack. Written in the Sorani Arabic-based
// alphabet (right-to-left). Spoken mainly in the Kurdistan Region of Iraq
// (Hewlêr/Erbil, Silêmanî, Kerkûk) and western Iran (Rojhelat).
//
// Speech: TTS is OmniVoice (k2-fsa, language id `ckb`), pre-rendered offline to
// audio/<hash>.mp3 by build_static_audio.py — there's no live Kurdish server, so
// `ttsLive: false` keeps the app from falling back to a wrong system voice.
// Whisper has no Kurdish, so `hasStt: false` hides the Speaking/Shadowing drills.
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

  /* ---------- transliteration: Sorani Arabic script → Kurdish Latin ----------
   * The learner's reading guide, shown under every Sorani word. Output uses the
   * standard Kurdish Latin letters (the ones Kurmanji is written in), plus the
   * Sorani-only ř (ڕ, rolled r), ł (ڵ, dark l), ḧ (ح), ẍ (غ):
   *   ê = "ay", î = "ee", û = "oo", e = "e" in "bed", i = short "i" in "bit",
   *   c = "j", ç = "ch", ş = "sh", j = "zh", x = "kh", q = deep k.
   *
   * Two things make Sorani script ambiguous, and both are handled here:
   *  1. و and ی are either a consonant (w, y) or a vowel (u/û, î) — decided by
   *     the neighbouring letters.
   *  2. The short vowel i is NEVER written (من = min, کتێب = kitêb). It's
   *     restored by syllable rules: at most one consonant before a vowel (bar
   *     the glide w: xw-/kw-/gw-), at most two after it, and endings never
   *     obstruent+sonorant or liquid+n (هاتن = hatin, دەزانن = dezanin). Clitic
   *     -m / -t and the comparative -tir get their own i (برنجم = birincim,
   *     گرنگتر = giringtir). A few true lexical exceptions are listed below.
   * Rule-based, so a rare word can still be off — the audio is the source of
   * truth. */
  const CONS = {
    "ب": "b", "پ": "p", "ت": "t", "ج": "c", "چ": "ç", "ح": "ḧ", "خ": "x",
    "د": "d", "ر": "r", "ڕ": "ř", "ز": "z", "ژ": "j", "س": "s", "ش": "ş",
    "ع": "ʿ", "غ": "ẍ", "ف": "f", "ڤ": "v", "ق": "q", "ک": "k", "گ": "g",
    "ل": "l", "ڵ": "ł", "م": "m", "ن": "n", "ه": "h", "ھ": "h",
  };
  const VOWELS = { "ا": "a", "ە": "e", "ۆ": "o", "ێ": "ê" };
  const SONORANT = new Set(["m", "n", "r", "ř", "l", "ł", "w", "y"]);
  const PUNCT = { "،": ",", "؟": "?", "؛": ";", "«": "\"", "»": "\"" };

  function normalizeSorani(t) {
    return String(t)
      .replace(/[ك]/g, "ک").replace(/[يى]/g, "ی").replace(/ة/g, "ە")
      .replace(/[ً-ْـ‌‍]/g, "")         // harakat, tatweel, ZWNJ/ZWJ
      .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x660))
      .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x6F0));
  }

  // Private-use marker: an unwritten short i that the spelling hides inside a
  // lexical exception (see HIDDEN_I_WORDS).
  const HI = "";

  // One Sorani word (letters only) → [{c: latin, v: isVowel, g?: glide}] segments.
  function segments(word) {
    const chars = [...word];
    const segs = [];
    for (let i = 0; i < chars.length; i++) {
      const ch = chars[i], next = chars[i + 1];
      const prevV = segs.length ? segs[segs.length - 1].v : null; // null = word start
      if (ch === HI) { segs.push({ c: "i", v: true }); continue; }
      if (ch === "ئ" || ch === "ء" || ch === "أ" || ch === "إ") {
        if (ch === "أ" || ch === "إ") segs.push({ c: ch === "أ" ? "a" : "i", v: true });
        continue;                                                 // glottal stop: silent
      }
      if (ch in VOWELS) { segs.push({ c: VOWELS[ch], v: true }); continue; }
      if (ch === "و") {
        if (next === "و") { segs.push({ c: "û", v: true }); i++; continue; }  // وو = û
        if (i === 0 && next !== undefined) { segs.push({ c: "w", v: false }); continue; } // word-initial: vowels start with ئ
        if (next === "ی" && prevV === false && chars[i + 2] !== undefined && !(chars[i + 2] in VOWELS)) {
          segs.push({ c: "w", v: false, g: true }); continue;       // demwîst: w + long î
        }
        if (next in VOWELS || next === HI || prevV === true) {
          // A w straight after a consonant and before a vowel is a glide (xw-,
          // kw-, tw-): it joins the consonant before it instead of forming its own.
          segs.push({ c: "w", v: false, g: prevV === false && (next in VOWELS) });
        } else segs.push({ c: "u", v: true });
        continue;
      }
      if (ch === "ی") {
        // …ایی + vowel (asayîye): a glide y, then the long î, then (glide) y again
        if (prevV === true && next === "ی" && chars[i + 2] in VOWELS) { segs.push({ c: "y", v: false, yy: true }); continue; }
        if (segs.length && segs[segs.length - 1].yy) { segs.push({ c: "î", v: true }, { c: "y", v: false }); continue; }
        if (next in VOWELS || prevV === true) segs.push({ c: "y", v: false });
        else segs.push({ c: "î", v: true });
        continue;
      }
      if (ch in CONS) { segs.push({ c: CONS[ch], v: false }); continue; }
      segs.push({ c: ch, v: null });                              // anything else: pass through
    }
    return segs;
  }

  // Word-final consonant runs. Sorani endings are at most two consonants, and
  // never obstruent + sonorant (…tn, …bm) or liquid/nasal + n (…rn, …ln, …nn):
  // those get the hidden i before the last consonant (hatin, kitêbim, dezanin).
  // `s` is a v-flagged segment list ending in the run being fixed.
  const LIQ = new Set(["m", "n", "r", "ř", "l", "ł"]);
  // Obstruent + obstruent endings Sorani really has (dest, goşt, ḧewt-less: baxt,
  // xuşk…); any other stop+stop ending (kewçik, fistiq) gets a hidden i.
  const OBS_FIRST = new Set(["s", "ş", "x", "f", "ẍ", "ḧ"]);
  const SIB_AFTER = new Set(["c", "ç", "t", "d", "k", "p", "q", "x", "ẍ", "f"]);   // …ts, …cş
  const OBS_SECOND = new Set(["t", "k", "p", "s", "ş", "d"]);
  // Can these two consonants stand side by side (in a coda, or coda + onset)?
  function badPair(x, y) {
    const a = x.c, b = y.c;
    if (a === "j" && b === "n") return false;                       // جەژن cejn
    return (!SONORANT.has(a) && SONORANT.has(b)) || (b === "n" && LIQ.has(a)) ||
      (!SONORANT.has(a) && !SONORANT.has(b) && !(OBS_FIRST.has(a) && OBS_SECOND.has(b)) && !((b === "s" || b === "ş") && SIB_AFTER.has(a)));
  }
  function fixTail(s) {
    let k = s.length;
    while (k > 0 && !s[k - 1].v) k--;
    // a w/y right after the vowel belongs to a diphthong (ew, ay): not part of the run
    if (k > 0 && k < s.length && (s[k].c === "w" || s[k].c === "y")) k++;
    const L = s.length - k;
    if (k === 0 || L < 2) return s;
    const a = s[s.length - 2].c, b = s[s.length - 1].c;
    const bad = badPair({ c: a }, { c: b });
    if (bad) return fixTail(s.slice(0, -1)).concat([I_SEG(), s[s.length - 1]]);
    if (L >= 3)   // keep the final pair (rd, rm, st, ng…), split what comes before it
      return fixTail(s.slice(0, -2)).concat([I_SEG(), s[s.length - 2], s[s.length - 1]]);
    return s;
  }
  const I_SEG = () => ({ c: "i", v: true });

  // Restore the unwritten short i (see the header comment for the rules).
  function insertHiddenI(segs) {
    let s = segs.filter((x) => x.v !== null);
    if (!s.length) return segs;
    // 1. Word-initial cluster: C C… → C i C… (except a glide w: xw, kw, sw…).
    if (!s[0].v && s[1] && !s[1].v && s[1].c !== "w") s.splice(1, 0, I_SEG());
    // 2. Medial runs of 3+ consonants: CC i C…  (xwênd-i-newe, kurd-i-stan).
    //    A glide w after a consonant doesn't count (nan-xw-ardin, not nanxiwardin).
    //    A run of exactly 3 (C1 C2 C3) only needs one if a neighbouring pair is
    //    illegal: C2+C3 (xwênd-i-newe: dn) → i before C3; else C1+C2 (gir-i-nge,
    //    řab-i-rdû: rn, br) → i after C1; else none (germker, jiyanmda).
    for (let i = 0; i < s.length; i++) {
      if (!s[i].v) continue;
      let j = i + 1, n = 0, third = -1, first = -1;
      while (j < s.length && !s[j].v) {
        if (!s[j].g) { n++; if (n === 1) first = j; if (n === 3) third = j; }
        j++;
      }
      if (j >= s.length || third < 0) continue;
      if (n === 3) {
        const c1 = s[first], c2 = s[third - 1].g ? s[third - 2] : s[third - 1], c3 = s[third];
        const ngSeam = c1.c === "n" && (c2.c === "g" || c2.c === "k" || c2.c === "c") && c3.c !== "h";   // deng|dan (but bang-i-hêşt)
        if ((!ngSeam && badPair(c2, c3)) || c3.c === "y") s.splice(third, 0, I_SEG());
        else if (badPair(c1, c2)) s.splice(first + 1, 0, I_SEG());
        continue;
      }
      s.splice(third, 0, I_SEG());
    }
    // 3. Word-final runs (see fixTail).
    return fixTail(s);
  }

  // True lexical exceptions — spellings the rules can't know:
  //  * the -m ending is a clitic ("my") on most words (dezanim, birincim) but part
  //    of the stem in these (germ, not germim).
  //  * the hidden i before a written و that would otherwise read as a glide
  //    (جوان ciwan, not cwan; سوار siwar; شوان şiwan).
  //  * the -t ending is a clitic ("your") after a few suffixes and sonorants, but
  //    حەوت (seven) is one word.
  const STEM_M = new Set(["گەرم", "نەرم", "شەرم", "چەرم", "ڕەسم", "ئیسم", "جەرم"]);
  const HIDDEN_I_WORDS = [["جوان", "ج" + HI + "وان"], ["سوار", "س" + HI + "وار"], ["شوان", "ش" + HI + "وان"]];
  const WHOLE_WORDS = { "هەموان": "hemuwan" };
  // (also: the ending ەون is the verb plural -ewin, except خەون "dream" — see transliterateWord)
  const STEM_T = new Set(["حەوت"]);
  const T_CLITIC_SUFFIX = /(ەکان|ێک|ێکی|ەکە)(یش)?ت$/;

  const isConsonantEnd = (stem) => {
    const sg = segments(stem);
    return sg.length > 0 && sg[sg.length - 1].v === false;
  };

  function transliterateWord(word) {
    if (word === "و") return "û";                  // "and"
    if (WHOLE_WORDS[word]) return WHOLE_WORDS[word];
    // Past participle + بوو/بێت/بێ (pluperfect, subjunctive): the cluster stays
    // whole and the i follows it — řoyşt-i-bû, kird-i-bû, xward-i-bû, never řoyşit-bû.
    const pp = word.match(/^(.*(?:شت|ست|رد|رت|خت))(بوو|بوون|بێت|بێ)$/);
    if (pp && pp[1].length >= 3) return transliterateWord(pp[1]) + "i" + transliterateWord(pp[2]);
    // Compound verbs are written as one word (گەشتکردن = geşt + kirdin): the
    // light verb کرد starts its own syllable chain, so transliterate it apart.
    const m = word.match(/^(.{2,}?)(کرد.*)$/);
    if (m) return transliterateWord(m[1]) + transliterateWord(m[2]);
    // Comparative/superlative -tir / -tirîn / -tire: its own syllable (giring+tir).
    const cmp = word.match(/^(.{2,}?)(ترین|ترە|تر)$/);
    if (cmp && cmp[1].length >= 3)
      return transliterateWord(cmp[1]) + { "تر": "tir", "ترین": "tirîn", "ترە": "tire" }[cmp[2]];
    // Clitic -m ("my") on a consonant-final stem: stem + im.
    if (word.length >= 3 && word.endsWith("م") && !STEM_M.has(word)) {
      const stem = word.slice(0, -1);
      if (isConsonantEnd(stem)) return transliterateWord(stem) + "im";
    }
    // Clitic -t ("your") after a stem ending in a sonorant, a clitic-bearing suffix or t.
    if (word.length >= 4 && word.endsWith("ت") && !STEM_T.has(word) &&
        (T_CLITIC_SUFFIX.test(word) || /[نتملڵ]ت$/.test(word))) {
      const stem = word.slice(0, -1);
      if (isConsonantEnd(stem)) return transliterateWord(stem) + "it";
    }
    // Verb plural -ewn (dekewin, pêşbikewin); only خەون "dream" is a noun.
    if (word.length > 4 && word.endsWith("ەون") && word !== "خەون") word = word.slice(0, -1) + HI + "ن";
    for (const [from, to] of HIDDEN_I_WORDS)
      if (word.startsWith(from)) word = to + word.slice(from.length);
    return insertHiddenI(segments(word)).map((x) => x.c).join("");
  }

  // Full text → Latin, keeping spaces and punctuation in place.
  function transliterate(text) {
    return normalizeSorani(text)
      .split(/([؀-ۿ]+)/)
      .map((part) => /[؀-ۿ]/.test(part)
        ? part.split(/([،؛؟«»]+)/).map((p) => /[،؛؟«»]/.test(p)
            ? [...p].map((ch) => PUNCT[ch]).join("") : transliterateWord(p)).join("")
        : [...part].map((ch) => PUNCT[ch] !== undefined ? PUNCT[ch] : ch).join(""))
      .join("");
  }

  // Loose Latin key for comparing typed answers: no diacritics, no hidden-i
  // ambiguity, no punctuation. "Siław", "silaw" and "slaw" all match سڵاو.
  function looseLatin(text) {
    return String(text).toLowerCase().replace(/ł/g, "l").normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/ʿ/g, "").replace(/ı/g, "i").replace(/[^a-z\s]/g, "")
      .replace(/i/g, "").replace(/\s+/g, " ").trim();
  }

  // Does a typed answer (Sorani script OR Latin) match the target?
  function answerMatches(target, given) {
    if (!/[a-z]/i.test(given || "")) return false;              // script answers: normal path
    return looseLatin(transliterate(target)) === looseLatin(given);
  }

  function respellWord(raw) { return transliterate(raw); }

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
    hasSpeech: true,
    hasStt: false,
    ttsEngine: "omnivoice",
    ttsLive: false,
    storageKey: "fer-ckb:v1",
    backupPrefix: "fer-ckb",
    // Female is the default: the male voice whispers isolated words, so it only
    // voices whole sentences (narrow listening, or when picked in settings).
    voices: [
      { value: "F1", label: "OmniVoice · Female" },
      { value: "M1", label: "OmniVoice · Male" },
    ],
    defaultVoice: "F1",
    narrowVoices: ["F1", "M1", "F1"],
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
    voiceTest: "سڵاو، ئەمە تاقیکردنەوەیەکە.",
    doneHeading: "دەستت خۆش!",
    tips: [
      { title: "Retrieval > rereading", body: "Pulling a word from memory once teaches you more than reading it five times. The discomfort is the learning." },
      { title: "Embrace desirable difficulty", body: "If recall feels easy, the schedule is too short. The cards that strain you are the ones cementing." },
      { title: "Learn the script first", body: "The Sorani alphabet is only ~34 letters and mostly phonemic — an afternoon of practice unlocks reading everything else." },
      { title: "Interleave, don't block", body: "Mixed card types beat doing 20 of the same. Your brain learns to distinguish, not just recognise." },
      { title: "Kurdish is verb-final", body: "Subject–Object–Verb: 'Min çay dexwazim' = I tea want. The verb almost always lands last." },
      { title: "Meet the danepał", body: "The little linker -î / -ی, called ئامرازی دانەپاڵ (amrazî danepał) in Kurdish, joins a noun to what describes it: 'kiteb-î min' = book-of me = my book. It's everywhere." },
      { title: "The past tense flips", body: "Kurdish is split-ergative: in the past, transitive verbs agree with the OBJECT, not the subject. Strange at first, natural with practice." },
      { title: "ح, خ, غ, ق from the throat", body: "Kurdish keeps the deep throat consonants ح/خ/غ/ق distinct. Lean into them — they carry meaning." },
      { title: "One 'silaw' fits all", body: "سڵاو (silaw) works morning, noon, or night, formal or casual. When in doubt, say silaw." },
      { title: "Hospitality is grammar", body: "فەرموو (fermû) — 'here you go / go ahead / please, come in' — is said constantly. Guests are sacred in Kurdish culture." },
    ],
    drillHints: {
      minpair: "ح vs ه · ڕ vs ر · ear training",
      chunk: "'فەرموو', 'سوپاس'…",
      number: "بیست و یەک drill",
      time: "هەشت و نیو…",
    },
    numberToWord,
    timeToWord,
    conjugationPronouns,
    respellWord,
    transliterate,
    answerMatches,
    inputHint: "Type in Kurdish script or Latin letters (e.g. siław)…",
    guideKey: "Guide letters: ê = 'ay' · î = 'ee' · û = 'oo' · e as in 'bed' · i as in 'bit' · c = 'j' · ç = 'ch' · ş = 'sh' · j = 'zh' · x = 'kh' · q = deep k · ř = rolled r · ł = dark l · ḧ = breathy h · ẍ = French r. The short i is never written in Sorani script — the guide restores it.",
    onboarding: {
      typing: "Kurdish script or Latin letters both work (e.g. siław).",
      tourNote: "Sorani is written right to left. The app itself stays in English and reads left to right; only the Sorani text runs right to left.",
      tips: [
        { icon: "🔤", text: "Under every Kurdish word you'll see a small Latin reading guide. Read it aloud, and tap the speaker to hear how it really sounds." },
        { icon: "⌨️", text: "Type answers in Latin letters (siław) or in Kurdish script. Both count as correct." },
        { icon: "⚙️", text: "Want the guide off once you can read? Stats, then Settings, then Reading guide." },
        { icon: "🎙️", text: "Speaking and Shadowing need speech recognition, which Kurdish doesn't have yet, so they're hidden. Everything else works." },
      ],
    },
    diagnoseError,
  });
})();
