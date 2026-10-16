// Pashto language pack. Standard Afghan written Pashto in the Pashto
// Perso-Arabic alphabet (right-to-left), with a Kandahari-leaning reading:
// ښ is a retroflex sh (ṣh) and ږ a retroflex zh (ẓh). Peshawari/northern
// speakers say kh and g for them; the guide key and the notes mention it.
// Everyday life in Afghanistan (Kabul, Kandahar) and Pashtun culture.
//
// Speech: TTS is OmniVoice (k2-fsa, language id `ps`), pre-rendered offline to
// audio/<hash>.mp3 by build_static_audio.py. There's no live Pashto server, so
// `ttsLive: false` keeps the app from falling back to a wrong system voice.
// Speech recognition: Whisper does list Pashto, but its accuracy on Pashto is
// far too weak to score a learner fairly, so `hasStt: false` hides the
// Speaking/Shadowing drills.
//
// Reading guide: Pashto script leaves the short vowels (a, ə, i, u) unwritten,
// so no letter-by-letter rule can read it correctly. js/lang/ps_roman.js holds a
// hand-made dictionary (window.__PS_ROMAN) from every word form in the deck to
// its romanisation with the stress marked; transliterate() looks words up there
// and only falls back to a cautious consonant + written-vowel rendering for a
// word it has never seen.
(function () {
  function norm(s) {
    return normalizePs(s).toLowerCase()
      .replace(/[.,!?؟،؛'"«»:—]/g, "").replace(/\s+/g, " ").trim();
  }

  // Arabic-keyboard and Persian look-alikes → the Pashto letters; drop harakat,
  // tatweel and ZWNJ/ZWJ; Arabic-Indic digits → ASCII.
  function normalizePs(t) {
    return String(t || "")
      .replace(/ك/g, "ک").replace(/گ/g, "ګ").replace(/ى/g, "ی").replace(/ة/g, "ه")
      .replace(/ۀ/g, "ه").replace(/ہ/g, "ه")
      .replace(/[ً-ْٰـ‌‍]/g, "")
      .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x660))
      .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x6F0));
  }

  /* ---------- numbers (Pashto) ---------- */
  const NUMBER_WORDS = {
    0: "صفر", 1: "یو", 2: "دوه", 3: "درې", 4: "څلور", 5: "پنځه",
    6: "شپږ", 7: "اووه", 8: "اته", 9: "نهه", 10: "لس",
    11: "یوولس", 12: "دولس", 13: "دیارلس", 14: "څوارلس", 15: "پنځلس",
    16: "شپاړس", 17: "اوولس", 18: "اتلس", 19: "نولس",
    20: "شل", 30: "دېرش", 40: "څلوېښت", 50: "پنځوس",
    60: "شپېته", 70: "اویا", 80: "اتیا", 90: "نوي",
    100: "سل",
  };
  // Pashto counts units first, with no "and": 25 = پنځه ویشت, 47 = اووه څلوېښت.
  // Twenty has its own combining form ویشت (wisht): 21 = یو ویشت.
  function numberToWord(n) {
    if (n < 0 || n > 100) return null;
    if (NUMBER_WORDS[n] !== undefined) return NUMBER_WORDS[n];
    const ones = n % 10;
    const tens = n - ones;
    return NUMBER_WORDS[ones] + " " + (tens === 20 ? "ویشت" : NUMBER_WORDS[tens]);
  }

  /* ---------- time (Pashto) ----------
   * بجې 'o'clock' is plural (یوه بجه for one o'clock). Half past is نیمې:
   * اته نیمې بجې = 8:30. Quarter is پاو: اته بجې او پاو = 8:15, and
   * minutes TO the hour use کم 'less': نهه بجې کم پاو = 8:45. */
  function timeToWord(h24, m) {
    let h12 = h24 % 12; if (h12 === 0) h12 = 12;
    const nextH = (h12 % 12) + 1;
    const at = (h) => h === 1 ? "یوه بجه" : `${numberToWord(h)} بجې`;
    const mins = (n) => n === 1 ? "یوه دقیقه" : `${numberToWord(n)} دقیقې`;
    if (m === 0)  return at(h12);
    if (m === 15) return `${at(h12)} او پاو`;
    if (m === 30) return h12 === 1 ? "یوه نیمه بجه" : `${numberToWord(h12)} نیمې بجې`;
    if (m === 45) return `${at(nextH)} کم پاو`;
    if (m < 30)   return `${at(h12)} او ${mins(m)}`;
    return          `${at(nextH)} کم ${mins(60 - m)}`;
  }

  /* ---------- conjugation drill pronouns ---------- */
  const conjugationPronouns = [
    { key: "s1", label: "زه (zə)" },
    { key: "s2", label: "ته (tə)" },
    { key: "s3", label: "هغه (hágha)" },
    { key: "p1", label: "موږ (muẓh)" },
    { key: "p2", label: "تاسو (tā́so)" },
    { key: "p3", label: "هغوی (haghúy)" },
  ];

  /* ---------- reading guide: dictionary lookup + cautious fallback ---------- */
  const PUNCT = { "،": ",", "؟": "?", "؛": ";", "«": "\"", "»": "\"" };
  const LETTER = /[ء-غف-يٱ-ە]/;

  function dict() { return (window.__PS_ROMAN) || {}; }

  // Fallback for a word missing from the dictionary: consonants plus the
  // vowels the spelling actually shows. Short vowels stay unwritten (the
  // script doesn't record them), so this is a skeleton, never a guess.
  const CONS = {
    "ب": "b", "پ": "p", "ت": "t", "ټ": "ṭ", "ث": "s", "ج": "j", "چ": "ch",
    "ح": "h", "خ": "kh", "څ": "ts", "ځ": "dz", "د": "d", "ډ": "ḍ", "ذ": "z",
    "ر": "r", "ړ": "ṛ", "ز": "z", "ژ": "zh", "ږ": "ẓh", "س": "s", "ش": "sh",
    "ښ": "ṣh", "ص": "s", "ض": "z", "ط": "t", "ظ": "z", "ع": "", "غ": "gh",
    "ف": "f", "ق": "q", "ک": "k", "ګ": "g", "ل": "l", "م": "m", "ن": "n",
    "ڼ": "ṇ", "ه": "h",
  };
  function fallbackWord(w) {
    const ch = [...w];
    let out = "";
    for (let i = 0; i < ch.length; i++) {
      const c = ch[i], first = i === 0, last = i === ch.length - 1;
      const afterVowel = /[aāeiouəy]$/.test(out);
      if (c === "آ") out += "ā";
      else if (c === "ا") out += first ? "a" : "ā";
      else if (c === "و") out += first ? "w" : (afterVowel ? "w" : (last ? "o" : (ch[i + 1] === "ا" || ch[i + 1] === "ې" ? "w" : "o")));
      else if (c === "ی") out += first ? "y" : (last ? "ay" : (afterVowel || ch[i + 1] === "ا" ? "y" : "i"));
      else if (c === "ي") out += first ? "y" : "i";
      else if (c === "ې") out += "e";
      else if (c === "ۍ") out += "əy";
      else if (c === "ئ") out += last ? "əy" : "y";
      else if (c === "ه" && last && !first) out += "a";
      else if (c === "ء" || c === "أ" || c === "إ") out += "";
      else if (c in CONS) out += CONS[c];
      else out += c;
    }
    return out;
  }

  function transliterateWord(w) {
    const d = dict();
    if (d[w] !== undefined) return d[w];
    return fallbackWord(w);
  }

  // Full text → Latin, keeping spaces and punctuation in place.
  function transliterate(text) {
    return normalizePs(text)
      .split(/([ء-غف-يٱ-ە]+)/)
      .map((part) => LETTER.test(part) ? transliterateWord(part)
        : [...part].map((ch) => PUNCT[ch] !== undefined ? PUNCT[ch] : ch).join(""))
      .join("");
  }

  // Loose Latin key for typed answers: no accents or dots, kh/x and gh/ğ
  // unified (ṣh / ẓh lose their dots, so sh / zh match), ə counted as a,
  // doubled letters collapsed. "manana", "manə́na" and "mannana" all match مننه.
  function looseLatin(text) {
    return String(text).toLowerCase()
      .replace(/ə/g, "a").replace(/ğ|ǧ/g, "gh").replace(/x/g, "kh")
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/v/g, "w").replace(/[^a-z\s]/g, "")
      .replace(/(.)\1+/g, "$1").replace(/\s+/g, " ").trim();
  }
  // The short vowels are where learners (and spellings) differ most, so an
  // answer also counts when only a / e / i / o / u inside words differ.
  const skeleton = (s) => s.replace(/\B[aeiou]\B/g, "");

  // Does a typed answer (Pashto script OR Latin) match the target?
  function answerMatches(target, given) {
    if (!/[a-z]/i.test(given || "")) return false;              // script answers: normal path
    const t = looseLatin(transliterate(target)), g = looseLatin(given);
    return t === g || (g.length >= 2 && skeleton(t) === skeleton(g));
  }

  function respellWord(raw) { return transliterate(raw); }

  /* ---------- error diagnosis ---------- */
  const YES = /[یيېۍئ]/g;
  function diagnoseError(target, given) {
    if (!given) return null;
    const t = norm(target);
    const g = norm(given);
    if (t === g) return null;
    const tw = t.split(/\s+/);
    const gw = g.split(/\s+/);
    // Same words except for which "ye" letter ends them: gender/number/person.
    if (t.replace(YES, "ی") === g.replace(YES, "ی")) {
      return { tag: "the five yes", note: "Only the ye letters differ: ی (-ay), ي (-i), ې (-e), ۍ (-əy), ئ (-əy). They carry gender, number and person, so ستړی (m), ستړې (f) and ستړي (m pl) are different words." };
    }
    // ګ vs Persian/Arabic-keyboard look-alikes are normalised away; retroflex vs plain.
    const plain = (s) => s.replace(/ټ/g, "ت").replace(/ډ/g, "د").replace(/ړ/g, "ر").replace(/ڼ/g, "ن").replace(/ښ/g, "ش").replace(/ږ/g, "ژ");
    if (plain(t) === plain(g)) {
      return { tag: "retroflex letters", note: "Watch the Pashto-only letters: ټ ډ ړ ڼ (tongue curled back) and ښ ږ are separate letters from ت د ر ن ش ژ." };
    }
    // Perfective و- missing or added.
    if (tw.length === gw.length) {
      const diff = tw.map((w, i) => [w, gw[i]]).filter(([a, b]) => a !== b);
      if (diff.length === 1) {
        const [a, b] = diff[0];
        if (a === "و" + b || b === "و" + a) {
          return { tag: "aspect (و-)", note: "The perfective prefix و- (wə-) marks one whole action: ولیکه 'wrote it', لیکه 'was writing'. Check whether this sentence wants it." };
        }
      }
    }
    // near-miss typo
    if (Math.abs(t.length - g.length) <= 1) {
      let edits = 0;
      const mlen = Math.min(t.length, g.length);
      for (let i = 0; i < mlen; i++) if (t[i] !== g[i]) edits++;
      edits += Math.abs(t.length - g.length);
      if (edits <= 2) return { tag: "small typo", note: "Almost: one or two letters off. You've got the idea." };
    }
    // right words, wrong order
    const sortedT = [...tw].sort().join(" ");
    const sortedG = [...gw].sort().join(" ");
    if (sortedT === sortedG) {
      return { tag: "word order", note: "All the right words, wrong order. Pashto is Subject–Object–Verb: the verb comes last, and weak pronouns (مې، دې، یې) sit second in the clause." };
    }
    return null;
  }

  Lang.register({
    id: "ps",
    name: "Pashto",
    endonym: "پښتو",
    brand: "پښتو زده کړئ",
    flag: "🪁",
    langCode: "ps",
    rtl: true,
    hasSpeech: true,
    hasStt: false,
    ttsEngine: "omnivoice",
    ttsLive: false,
    storageKey: "ps:v1",
    backupPrefix: "ps",
    voices: [
      { value: "F1", label: "OmniVoice · Female" },
      { value: "M1", label: "OmniVoice · Male" },
    ],
    defaultVoice: "F1",
    narrowVoices: ["F1", "M1", "F1"],
    greeting(h) {
      if (h < 12) return { target: "سهار مو په خیر", en: "Good morning" };
      if (h < 18) return { target: "ستړي مه شئ", en: "Hello (may you not be tired)" };
      return { target: "ماښام مو په خیر", en: "Good evening" };
    },
    calendar: {
      days: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
      months: ["جنوري", "فبروري", "مارچ", "اپرېل", "مۍ", "جون", "جولای", "اګست", "سپتمبر", "اکتوبر", "نومبر", "دسمبر"],
    },
    clozeStopwords: new Set(["او", "په", "د", "له", "ته", "زه", "هغه", "دا", "چې", "کې", "یې", "مې", "دې", "مو", "به", "نه", "هم", "یا", "خو", "سره", "څخه"]),
    voiceTest: "سلام، دا یوه ازموینه ده.",
    doneHeading: "شاباس!",
    tips: [
      { title: "Retrieval > rereading", body: "Pulling a word from memory once teaches you more than reading it five times. The discomfort is the learning." },
      { title: "Embrace desirable difficulty", body: "If recall feels easy, the schedule is too short. The cards that strain you are the ones cementing." },
      { title: "Learn the script first", body: "Pashto adds a handful of letters to the Arabic alphabet: ټ ډ ړ ڼ, ښ ږ, څ ځ and ګ. Learn those and the five yes (ی ي ې ۍ ئ), and you can read everything else." },
      { title: "Interleave, don't block", body: "Mixed card types beat doing 20 of the same. Your brain learns to distinguish, not just recognise." },
      { title: "Pashto is verb-final", body: "Subject–Object–Verb: زه چای څښم (zə chāy tsṣhəm) = I tea drink. The verb almost always lands last." },
      { title: "Every noun has a gender", body: "Masculine or feminine, and adjectives and past verbs agree: ښه سړی 'a good man', ښه ښځه 'a good woman', ستړی / ستړې 'tired' (m / f)." },
      { title: "The past tense flips", body: "Pashto is split-ergative: in the past, a transitive verb agrees with the OBJECT and the doer goes oblique. ما ډوډۍ وخوړه: the verb is feminine because ډوډۍ is." },
      { title: "Stress carries aspect", body: "The perfective prefix و- (wə-) takes the stress: ولیکه (wə́likə) 'wrote it' against لیکه (likə́) 'was writing'." },
      { title: "Say 'stəṛay ma she'", body: "ستړی مه شې, 'may you not be tired', is how you greet someone arriving or working. The reply is خوار مه شې, 'may you not be poor'." },
      { title: "Hospitality is grammar", body: "ښه راغلاست (welcome) and تشریف راوړئ (please come in) are said constantly. A guest is honoured in Pashtun culture (melmastyā́)." },
    ],
    drillHints: {
      minpair: "ټ vs ت · ړ vs ر · ear training",
      chunk: "ستړی مه شې، مننه…",
      number: "یو ویشت drill",
      time: "اته نیمې بجې…",
    },
    numberToWord,
    timeToWord,
    conjugationPronouns,
    respellWord,
    transliterate,
    answerMatches,
    inputHint: "Type in Pashto script or Latin letters (e.g. manana)…",
    guideKey: "Guide letters: ā as in 'father' · a short, like the u in 'cup' · ə the weak 'uh' of 'about' · e as in 'they' · i 'ee' · o 'oh' · u 'oo' · ay as in 'aisle' · əy 'uh-ee' · ṭ ḍ ṛ ṇ = tongue curled back · ṣh ẓh = retroflex sh / zh (Kandahari; Peshawar says kh / g) · kh as in 'loch' · gh its gargled partner · ts, dz single sounds · zh as in 'measure' · q a deep k. The accent marks the stressed syllable (wə́likə). Short vowels are not written in Pashto script; the guide restores them.",
    onboarding: {
      typing: "Pashto script or Latin letters both work (e.g. manana).",
      tourNote: "Pashto is written right to left. The app itself stays in English and reads left to right; only the Pashto text runs right to left.",
      tips: [
        { icon: "🔤", text: "Under every Pashto word you'll see a small Latin reading guide with the stressed syllable marked. Read it aloud, and tap the speaker to hear how it really sounds." },
        { icon: "⌨️", text: "Type answers in Latin letters (manana) or in Pashto script. Both count as correct." },
        { icon: "⚙️", text: "Want the guide off once you can read? Stats, then Settings, then Reading guide." },
        { icon: "🎙️", text: "Speaking and Shadowing need speech recognition that's good enough for Pashto, which doesn't exist yet, so they're hidden. Everything else works." },
      ],
    },
    diagnoseError,
  });
})();
