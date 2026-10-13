// Kurmanji (Northern Kurdish) pronunciation guide: the Hawar Latin alphabet, every vowel and tricky consonant, stress, ezafe and regional variation.
window.__DECK.kmr.PRONUNCIATION = {
  title: "How Kurmanji sounds",
  minutes: 18,
  intro: [
    "Good news first: Kurmanji is one of the easiest languages in the world to read aloud. It is written in the Hawar alphabet, a Latin alphabet designed in the 1930s by Celadet Bedirxan, and it was built on a simple promise: one letter, one sound. There are no silent letters, no 'ough' surprises, and every letter is pronounced, at the start, middle and end of a word.",
    "That means your job is not memorising spellings. It is learning about a dozen sounds or letter values that English doesn't have or uses differently. Once you know them, you can read any Kurmanji word correctly, even one you have never seen.",
    "The five things that matter most: (1) the little hat (ê î û) marks a long, steady vowel, and the hat changes the meaning (ker 'donkey', kêr 'knife'); (2) plain i is a very short, weak sound, close to the 'uh' in 'roses'; (3) c is English 'j', j is the 's' in 'measure', ç is 'ch' and ş is 'sh'; (4) x is a scratchy 'kh' and q is a 'k' made deep in the throat; (5) r is a quick tap, rr (and r at the start of a word) is rolled.",
    "Every example below is a real word or phrase with audio. Play the minimal pairs (two words that differ by one sound) back to back: training your ear on them is the fastest way to hear the difference, and then to say it.",
  ],
  sections: [
    // ------------------------------------------------------------------
    {
      id: "alphabet",
      title: "The Hawar alphabet: 31 letters, one sound each",
      summary: "Every letter always makes the same sound. Learn the letters and you can read anything.",
      body: [
        "The alphabet has 31 letters: a b c ç d e ê f g h i î j k l m n o p q r s ş t u û v w x y z. That is the English alphabet, plus ç ş ê î û. There is no separate letter for 'sh', 'ch' or 'kh': each of those is a single letter.",
        "About half the letters work just like English: b d f g k l m n p s t z, plus h, v, w and y (more on those later). Three need extra care because they look familiar but mean something else: c is the English 'j' sound, j is the 'zh' sound in 'measure', and x is the throaty 'kh' of Scottish 'loch'.",
        "Because spelling is phonemic, words sound the way they look. If you have learned Turkish, the consonants c, ç and ş work exactly as in Turkish; but careful, Kurmanji i is like Turkish ı, not Turkish i.",
      ],
      rules: [
        {
          rule: "Letters that sound just like English",
          explain: "b, d, f, k, l, m, n, p, s, t, z: no surprises. g is always hard, as in 'go', never as in 'gem'.",
          examples: [
            { nl: "bav", en: "father", note: "'bahv': b and v as in English" },
            { nl: "dest", en: "hand", note: "'dest', like English 'desk' with a t" },
            { nl: "nan", en: "bread", note: "'nahn'" },
            { nl: "gelek", en: "a lot, very", note: "hard g as in 'get': 'geh-LEK'" },
            { nl: "gund", en: "village", note: "hard g; u as in 'put'" },
            { nl: "zimanê kurdî", en: "the Kurdish language", note: "z, m, n, k, d all as in English" },
          ],
        },
        {
          rule: "Letters that look English but sound different",
          explain: "c = 'j' (jam), j = 'zh' (measure), x = 'kh' (loch), q = a deep 'k'.",
          examples: [
            { nl: "cil", en: "clothes", note: "c = English j: 'jil'" },
            { nl: "jin", en: "woman", note: "j = 'zh' as in 'measure': 'zhin'" },
            { nl: "xweş", en: "nice, pleasant", note: "x = 'kh': 'khwesh'" },
            { nl: "qehwe", en: "coffee", note: "q = a k pushed back into the throat" },
          ],
        },
        {
          rule: "The five letters with marks",
          explain: "The cedilla (ç ş) gives you 'ch' and 'sh'; the hat (ê î û) makes a long vowel.",
          examples: [
            { nl: "çay", en: "tea", note: "ç = 'ch': 'chai'" },
            { nl: "şev", en: "night", note: "ş = 'sh': 'shev'" },
            { nl: "êvar", en: "evening", note: "ê = long 'ay' without the glide: 'ay-VAHR'" },
            { nl: "îro", en: "today", note: "î = 'ee': 'ee-ROH'" },
            { nl: "dûr", en: "far", note: "û = 'oo': 'door' with a tapped r" },
          ],
        },
        {
          rule: "Every letter is pronounced, including at the end of a word",
          explain: "No silent letters: a final h, r or e is always heard.",
          examples: [
            { nl: "neh", en: "nine", note: "you hear a soft breathy h at the end" },
            { nl: "guh", en: "ear", note: "final h is pronounced: 'gooh' with a short u" },
            { nl: "mase", en: "table", note: "final e is pronounced: 'mah-SEH'" },
          ],
        },
      ],
      pitfall: "Don't read c as 'k' or 's' (cil is 'jil'), and don't read j as English 'j' (jin is 'zhin'). These two swaps are the most common reading mistakes for English speakers.",
    },

    // ------------------------------------------------------------------
    {
      id: "vowel-system",
      title: "Eight vowels: the hat means long",
      summary: "a ê î o û are long and steady; e i u are short. The hat on ê î û is not decoration, it changes the word.",
      body: [
        "Kurmanji has eight vowel letters: a, e, ê, i, î, o, u, û. Think of them as two teams. The long team (a, ê, î, o, û) is held a little longer and stays pure: it doesn't slide into another sound the way English 'day' or 'go' do. The short team (e, i, u) is quick and relaxed.",
        "The hat (circumflex) on ê, î and û is the key: without it you get a different vowel and often a different word. When you write Kurmanji, never drop the hats.",
        "Note that a and o have no hat but are long anyway. Vowels never 'go silent', and two vowels written next to each other are both pronounced.",
      ],
      rules: [
        {
          rule: "Hat vs no hat: three minimal pairs to start",
          examples: [
            { nl: "ker", en: "donkey", note: "short e, as in 'bet'" },
            { nl: "kêr", en: "knife", note: "long ê, like 'care' without the r-colour, or Scottish 'day'" },
            { nl: "dil", en: "heart", note: "short, weak i: almost 'dl'" },
            { nl: "dîl", en: "captive, prisoner", note: "long î: 'deel'" },
            { nl: "kur", en: "son, boy", note: "short u as in 'put'" },
            { nl: "kûr", en: "deep", note: "long û as in 'moon'" },
          ],
        },
        {
          rule: "Long vowels stay pure: no glide at the end",
          explain: "English 'say' ends in a 'y' glide and 'go' ends in a 'w' glide. Kurmanji ê and o don't.",
          examples: [
            { nl: "sê", en: "three", note: "like 'say' but cut off before the y-glide" },
            { nl: "rê", en: "road, way", note: "tapped r + pure ê" },
            { nl: "roj", en: "day, sun", note: "pure o, like 'rose' without the w-glide; j = zh" },
            { nl: "zû", en: "early, quickly", note: "'zoo'" },
          ],
        },
      ],
      pitfall: "English speakers tend to make every vowel a diphthong (say → 'sey', go → 'gow'). Keep ê and o flat and steady, and keep short vowels really short.",
    },

    // ------------------------------------------------------------------
    {
      id: "a-e-e-hat",
      title: "a, e and ê",
      summary: "a = 'ah' (father), e = short 'eh/a' (bet, cat), ê = long 'ay' (they, with no glide).",
      body: [
        "a is a long, open 'ah', like the a in 'father' or 'spa'. It is never the a of 'cat' or 'cake'.",
        "e is short. Standard speakers say it somewhere between the e in 'bet' and the a in 'cat'. It is the most frequent vowel in the language, so a relaxed, short 'eh' will serve you well.",
        "ê is long and tense, like the 'ay' in 'they' or the French é held a bit longer, without sliding into 'ee'. The difference between e and ê is one of the most important in the language: lots of word pairs rest on it.",
      ],
      rules: [
        {
          rule: "a vs e: open 'ah' vs short 'eh'",
          examples: [
            { nl: "sar", en: "cold", note: "'sahr'" },
            { nl: "ser", en: "head, on top", note: "'sehr', short" },
            { nl: "bar", en: "load, burden", note: "long ah" },
            { nl: "ber", en: "front; fruit, yield", note: "short eh" },
            { nl: "kar", en: "work, job", note: "'kahr'" },
            { nl: "ker", en: "donkey", note: "'kehr'" },
          ],
        },
        {
          rule: "e vs ê: short 'eh' vs long 'ay'",
          examples: [
            { nl: "şer", en: "war, fight", note: "short e" },
            { nl: "şêr", en: "lion", note: "long ê: 'shayr'" },
            { nl: "hez", en: "liking, love", note: "short e; as in 'hez kirin', to love" },
            { nl: "hêz", en: "strength, force", note: "long ê: 'hayz'" },
            { nl: "rez", en: "vineyard", note: "short e" },
            { nl: "rêz", en: "row, line; respect", note: "long ê" },
          ],
        },
        {
          rule: "More everyday words with a, e and ê",
          examples: [
            { nl: "av", en: "water", note: "'ahv'" },
            { nl: "mal", en: "house, home", note: "'mahl'" },
            { nl: "heval", en: "friend", note: "short e, long a: 'heh-VAHL'" },
            { nl: "pênc", en: "five", note: "long ê, then n and c (= j): 'paynj'" },
            { nl: "dê", en: "mother", note: "'day', no glide" },
          ],
        },
      ],
      pitfall: "Don't say a like the 'a' in 'cat': that sound belongs to e. Mal is 'mahl', not 'mal'.",
    },

    // ------------------------------------------------------------------
    {
      id: "i-and-i-hat",
      title: "i and î: the weak 'uh' and the long 'ee'",
      summary: "î = 'ee' (see). Plain i is a very short, central vowel, like the 'uh' in 'roses'. It is NOT the 'ee' sound.",
      body: [
        "î is easy: a long 'ee', as in 'see' or 'machine'.",
        "Plain i is the vowel English speakers get wrong most. It is short and central, made with the tongue relaxed in the middle of the mouth, like the second vowel of 'roses' or the i in 'pencil' said quickly. Many learners think of it as a schwa ('uh'). It is never 'ee', and only rarely the full 'i' of 'bit'.",
        "Because it is so weak, this i often almost disappears between consonants. That is why some words have two accepted spellings, with and without the i: sipas and spas ('thanks'), sipî and spî ('white'). Both are correct, and they sound nearly the same.",
      ],
      rules: [
        {
          rule: "i vs î: three classic minimal pairs",
          examples: [
            { nl: "dil", en: "heart", note: "short, central i" },
            { nl: "dîl", en: "captive", note: "long 'deel'" },
            { nl: "pir", en: "very, many; bridge", note: "short i: almost 'pr'" },
            { nl: "pîr", en: "old (person), elder", note: "'peer'" },
            { nl: "din", en: "other", note: "short i" },
            { nl: "dîn", en: "crazy; religion", note: "'deen'" },
          ],
        },
        {
          rule: "The weak i in everyday words",
          explain: "Keep it tiny and relaxed.",
          examples: [
            { nl: "min", en: "me, my", note: "'mn' with a tiny vowel; not 'meen'" },
            { nl: "bira", en: "brother", note: "'buh-RAH'" },
            { nl: "jin", en: "woman", note: "'zhn' with a tiny vowel" },
            { nl: "ji kerema xwe", en: "please", note: "ji = 'zhuh', very short" },
            { nl: "li vir", en: "here", note: "both i's short and weak" },
            { nl: "bibore", en: "sorry, excuse me", note: "'buh-BOH-reh'" },
          ],
        },
        {
          rule: "The vanishing i: two spellings, nearly one sound",
          explain: "The short i between two consonants is so weak that it is often dropped in writing too.",
          examples: [
            { nl: "sipas", en: "thanks", note: "the first i is barely there" },
            { nl: "spas", en: "thanks (shorter spelling)", note: "compare with sipas: nearly identical" },
            { nl: "sipî", en: "white", note: "tiny i, then long î" },
            { nl: "spî", en: "white (shorter spelling)", note: "same word" },
          ],
        },
        {
          rule: "î everywhere: long and clear",
          examples: [
            { nl: "şîr", en: "milk", note: "'sheer'" },
            { nl: "penîr", en: "cheese", note: "'peh-NEER'" },
            { nl: "kurdî", en: "Kurdish (language)", note: "'koor-DEE', with short u" },
            { nl: "kanî", en: "spring (of water)", note: "'kah-NEE'" },
          ],
        },
      ],
      pitfall: "Reading i as 'ee' is the number one accent giveaway. Min is not 'meen' and dil is not 'deel' (that is dîl, 'prisoner'!). If in doubt, make the i shorter and weaker than feels natural.",
    },

    // ------------------------------------------------------------------
    {
      id: "u-u-hat-o",
      title: "u, û and o",
      summary: "u = short 'oo' (put), û = long 'oo' (moon), o = pure long 'o' (like 'go' without the w-glide).",
      body: [
        "u is short, like the u in 'put' or the oo in 'book'. û is long, like the oo in 'moon' or 'food'. The difference changes meaning, so hold û noticeably longer.",
        "o is a long, rounded 'oh'. In English 'go' and 'rose' the vowel slides toward 'w'; in Kurmanji the lips stay still. Think of Spanish or Italian o, held a bit longer.",
        "o and û are close neighbours, so practise them as pairs too: kor 'blind' and kûr 'deep' are different words.",
      ],
      rules: [
        {
          rule: "u vs û: short vs long",
          examples: [
            { nl: "kur", en: "son, boy", note: "short, like 'put'" },
            { nl: "kûr", en: "deep", note: "long, like 'moon'" },
            { nl: "tu", en: "you (one person)", note: "short 'too', clipped" },
            { nl: "tû", en: "mulberry", note: "long 'tooo'" },
          ],
        },
        {
          rule: "o vs û: 'oh' vs 'oo'",
          examples: [
            { nl: "kor", en: "blind", note: "pure 'oh'" },
            { nl: "kûr", en: "deep", note: "'oo'" },
            { nl: "dor", en: "turn, round; around", note: "as in 'dora min', my turn" },
            { nl: "dûr", en: "far", note: "'oo'" },
          ],
        },
        {
          rule: "u vs i: rounded vs relaxed",
          explain: "Both are short. u rounds the lips; i doesn't.",
          examples: [
            { nl: "kur", en: "son", note: "rounded lips" },
            { nl: "kir", en: "did, made", note: "relaxed, 'kr' with a tiny vowel" },
          ],
        },
        {
          rule: "Everyday words with u, û and o",
          examples: [
            { nl: "du", en: "two", note: "short u" },
            { nl: "gul", en: "rose, flower", note: "short u" },
            { nl: "hûn", en: "you (plural/polite)", note: "long û: 'hoon'" },
            { nl: "pirtûk", en: "book", note: "short i, long û: 'pr-TOOK'" },
            { nl: "zarok", en: "child", note: "'zah-ROHK', pure o" },
            { nl: "poz", en: "nose", note: "pure o" },
            { nl: "sor", en: "red", note: "pure o, tapped r" },
          ],
        },
      ],
      pitfall: "Don't let o slide into 'ow' (roj is not 'rowzh'), and don't shorten û: kûr cut short becomes kur, 'son' instead of 'deep'.",
    },

    // ------------------------------------------------------------------
    {
      id: "diphthongs-xw",
      title: "Vowels with y and w, and the xw combination",
      summary: "ay, ey, aw, ew are just vowel + y/w, read letter by letter. xw is a rounded 'kh'.",
      body: [
        "Kurmanji has no special diphthong letters. A vowel followed by y or w simply glides into that sound: ay ≈ English 'eye' (çay sounds like 'chai'), ew ≈ 'eh' + 'w', a bit like 'ow' in 'how' but starting from a fronter vowel.",
        "The combination xw is very common: xwe, xweş, xwarin. In standard Kurmanji it is a 'kh' made with rounded lips, so the w melts into the x: 'khw'. You will also hear speakers who reduce it, and in Behdînî (Iraq) xwe is often said and written xo.",
        "When a vowel ending meets a vowel ending, a y appears in between to keep them apart: ode 'room' becomes odeya min 'my room'. You'll see more of this in the ezafe section.",
      ],
      rules: [
        {
          rule: "Vowel + y and vowel + w",
          examples: [
            { nl: "çay", en: "tea", note: "like 'chai'" },
            { nl: "dayik", en: "mother", note: "'DAH-yik'" },
            { nl: "ew", en: "he, she, they, that", note: "'ehw', one syllable" },
            { nl: "xew", en: "sleep", note: "'khehw'" },
            { nl: "kew", en: "partridge", note: "'kehw', a classic of Kurdish songs" },
            { nl: "çawa", en: "how", note: "'CHAH-wah'" },
          ],
        },
        {
          rule: "xw: a rounded 'kh'",
          examples: [
            { nl: "xwe", en: "oneself (my/your/his own)", note: "'khweh', lips rounded from the start" },
            { nl: "xweş", en: "nice, pleasant", note: "'khwesh'" },
            { nl: "xwarin", en: "food; to eat", note: "'khwah-RIN'" },
            { nl: "xwişk", en: "sister", note: "'khwishk'" },
            { nl: "xwendin", en: "to read, to study", note: "'khwen-DIN'" },
          ],
        },
      ],
      pitfall: "Don't add an extra syllable to xw ('kuh-weh'): it is one quick consonant cluster, like the start of 'quick' with a kh instead of a k.",
    },

    // ------------------------------------------------------------------
    {
      id: "c-c-j-s",
      title: "c, ç, j and ş: the 'j', 'ch', 'zh' and 'sh' family",
      summary: "c = j (jam), ç = ch (chair), j = zh (measure), ş = sh (shoe). Four letters, four sounds, no exceptions.",
      body: [
        "English writes these four sounds in many ways (j, g, ch, tch, s, si, sh…). Kurmanji uses exactly one letter each. The sounds themselves are easy for English speakers: the only challenge is reading the letters correctly.",
        "c is voiced (your throat buzzes) and ç is voiceless (no buzz): çar 'four' vs car 'time, occasion'. j is the buzzing version of ş: say 'sh' and switch on your voice, and you get j, as in 'measure' or French 'je'.",
        "Watch for ş vs plain s too. English speakers rarely mix them up when listening, but when reading fast it is easy to miss the little hook under the ş.",
      ],
      rules: [
        {
          rule: "ç vs c: 'ch' vs 'j'",
          examples: [
            { nl: "çar", en: "four", note: "'chahr'" },
            { nl: "car", en: "time, occasion", note: "'jahr'" },
            { nl: "çil", en: "forty", note: "'chl' with a tiny vowel" },
            { nl: "cil", en: "clothes", note: "'jl' with a tiny vowel" },
          ],
        },
        {
          rule: "c and j: 'j' vs 'zh'",
          examples: [
            { nl: "can", en: "soul; dear, darling", note: "c = 'j': 'jahn'" },
            { nl: "jan", en: "pain, ache", note: "j = 'zh': 'zhahn'" },
            { nl: "cîran", en: "neighbour", note: "'jee-RAHN'" },
            { nl: "jiyan", en: "life", note: "'zhi-YAHN'" },
            { nl: "cejn", en: "festival, holiday", note: "c then j: 'jezhn'" },
          ],
        },
        {
          rule: "ş vs s: 'sh' vs 's'",
          examples: [
            { nl: "şal", en: "trousers (traditional)", note: "'shahl'" },
            { nl: "sal", en: "year", note: "'sahl'" },
            { nl: "şîr", en: "milk", note: "'sheer'" },
            { nl: "sîr", en: "garlic", note: "'seer'" },
          ],
        },
        {
          rule: "The family in everyday words",
          examples: [
            { nl: "çav", en: "eye", note: "ç = ch" },
            { nl: "çiya", en: "mountain", note: "'chi-YAH'" },
            { nl: "ciwan", en: "young; beautiful", note: "c = j: 'ji-WAHN'" },
            { nl: "roj", en: "day, sun", note: "final j = 'zh': 'rohzh'" },
            { nl: "jî", en: "also, too", note: "'zhee'" },
            { nl: "baş", en: "good", note: "'bahsh'" },
          ],
        },
      ],
      pitfall: "Final j (roj, 'day') is 'zh', not 'j' and not 'sh': keep your voice buzzing to the end of the word.",
    },

    // ------------------------------------------------------------------
    {
      id: "x-h-hh",
      title: "x, h and the throat sounds (ḧ, ẍ, ʿ)",
      summary: "x = scratchy 'kh' (loch); h = a real breathed h, pronounced everywhere. Many speakers also have deeper throat sounds that standard spelling doesn't show.",
      body: [
        "x is made like a k, but without fully closing: air rushes through and scrapes the back of the tongue, as in Scottish 'loch', German 'Bach' or Spanish 'jota'. It is not a k and not an h.",
        "h is the English h, but Kurmanji pronounces it in every position, including the end of a word (neh 'nine', guh 'ear') and before consonants. A missing h can turn hev 'each other' into ev 'this'.",
        "Many speakers (especially in the south and in Syria) also use two sounds borrowed with Arabic words: a tight, whispered 'h' squeezed deep in the throat (some books write it ḧ), and a gargled, voiced version of x (some write ẍ). There is also a throat 'catch' (ʿayn, sometimes written with an apostrophe). Standard Hawar spelling writes these simply as h, x and nothing. You don't need to produce them, but it helps to know why heft 'seven' sometimes sounds 'thicker' than you expect.",
      ],
      rules: [
        {
          rule: "x vs h: minimal pairs",
          examples: [
            { nl: "xişt", en: "brick", note: "scratchy kh" },
            { nl: "hişt", en: "left, let (past tense)", note: "soft breathy h" },
            { nl: "xelat", en: "gift, prize", note: "kh" },
            { nl: "helat", en: "rose (the sun), rising", note: "h" },
            { nl: "xal", en: "maternal uncle; spot, point", note: "kh" },
            { nl: "hal", en: "state, condition", note: "h (many speakers use the deep ḧ here)" },
          ],
        },
        {
          rule: "h vs no h",
          examples: [
            { nl: "hev", en: "each other, together", note: "clear h" },
            { nl: "ev", en: "this", note: "no h, starts straight on the vowel" },
          ],
        },
        {
          rule: "x in everyday words",
          examples: [
            { nl: "xanî", en: "house, building", note: "'khah-NEE'" },
            { nl: "xêr", en: "good, goodness", note: "as in 'bi xêr hatî', welcome" },
            { nl: "bi xatirê te", en: "goodbye", note: "'bi khah-ti-RAY teh'" },
          ],
        },
        {
          rule: "h at the end of a word: always breathe it",
          examples: [
            { nl: "deh", en: "ten", note: "'deh' with an audible puff at the end" },
            { nl: "neh", en: "nine", note: "same" },
            { nl: "cih", en: "place", note: "'jih', the h is heard" },
            { nl: "hêdî", en: "slowly", note: "h at the start: 'hay-DEE'" },
          ],
        },
        {
          rule: "Words where many speakers use the deep throat sounds",
          explain: "All written with plain h, x or nothing. Listen for the 'thicker' sound in some voices.",
          examples: [
            { nl: "heft", en: "seven", note: "often with the deep, squeezed ḧ" },
            { nl: "heq", en: "right, justice", note: "deep ḧ for many speakers" },
            { nl: "xerîb", en: "stranger, foreigner", note: "many say a gargled ẍ here (from Arabic gharīb)" },
            { nl: "ezman", en: "sky", note: "some speakers start with a throat catch (ʿ)" },
          ],
        },
      ],
      pitfall: "Don't read x as 'ks' (like in English 'box') or as plain 'k'. And don't drop final h: deh without its h sounds unfinished to Kurdish ears.",
    },

    // ------------------------------------------------------------------
    {
      id: "q-k",
      title: "q vs k",
      summary: "k is the English k. q is a k made much further back, against the soft back of the throat (the uvula).",
      body: [
        "To make q, say 'k', then slide the contact point back as far as it goes, past where you'd make a k in 'cool'. The sound becomes deeper and more hollow, like a knock. Arabic and Turkish-influenced ears hear it instantly; English ears need practice.",
        "q comes mostly from Arabic loanwords, but those are everyday words in Kurmanji: qehwe 'coffee', qelem 'pen'. The vowel next to q also tends to sound darker and further back.",
      ],
      rules: [
        {
          rule: "q vs k: minimal pairs",
          examples: [
            { nl: "qelem", en: "pen", note: "deep q" },
            { nl: "kelem", en: "cabbage", note: "ordinary k" },
            { nl: "qam", en: "stature, height", note: "deep q" },
            { nl: "kam", en: "which", note: "ordinary k" },
            { nl: "qanûn", en: "law", note: "deep q" },
            { nl: "kanûn", en: "hearth; winter month", note: "ordinary k" },
          ],
        },
        {
          rule: "q in everyday words",
          examples: [
            { nl: "qehwe", en: "coffee", note: "'QAH-weh', q then a breathy h" },
            { nl: "li quncikê", en: "on the corner", note: "deep q, then n, then c (= j)" },
            { nl: "bi qertê", en: "by card", note: "deep q" },
          ],
        },
      ],
      pitfall: "If q and k sound the same in your mouth, you are making q too far forward. Try saying 'k' while yawning slightly: the back of the tongue drops and the contact moves back.",
    },

    // ------------------------------------------------------------------
    {
      id: "r-rr",
      title: "r vs rr: the tap and the trill",
      summary: "Single r between vowels is a quick tap (like the tt in American 'butter'). rr, and r at the start of a word, is rolled.",
      body: [
        "Kurmanji has two r sounds. The tap is a single quick flick of the tongue tip against the ridge behind your teeth: say American 'better' or 'ladder' fast and you have it. That's the normal r between vowels (bira, êvar).",
        "The trill is a rolled r, several taps in a row, as in Spanish 'perro'. Most writers spell it rr, though official Hawar spelling doesn't always mark it, so dictionaries and books vary. An r at the very start of a word is usually trilled as well (roj, rast, reş).",
        "Either way, r is never the soft English r and is never dropped: êvar and bajar end with a real r.",
      ],
      rules: [
        {
          rule: "Tap vs trill",
          explain: "Spellings with rr vary between writers; listen for the length of the r.",
          examples: [
            { nl: "birin", en: "to carry, to take", note: "single tap" },
            { nl: "birrîn", en: "to cut", note: "rolled rr" },
            { nl: "pir", en: "bridge", note: "tap" },
            { nl: "pirr", en: "very, many", note: "rolled; many writers spell this pir too" },
          ],
        },
        {
          rule: "r at the start of a word: rolled",
          examples: [
            { nl: "roj", en: "day, sun", note: "trilled r" },
            { nl: "rast", en: "right, true; straight", note: "trilled r" },
            { nl: "reş", en: "black", note: "trilled r" },
            { nl: "rê", en: "road, way", note: "trilled r" },
          ],
        },
        {
          rule: "r between vowels and at the end: tapped",
          examples: [
            { nl: "bira", en: "brother", note: "quick tap, like the d-sound in American 'buddy'" },
            { nl: "kerem", en: "kindness, favour", note: "as in 'ji kerema xwe'" },
            { nl: "êvar", en: "evening", note: "final tap, clearly heard" },
            { nl: "bajar", en: "city", note: "final tap" },
          ],
        },
      ],
      pitfall: "Don't use the English r (tongue curled back, no contact) and don't drop final r. If you can't roll yet, a clear tap everywhere is far better than an English r.",
    },

    // ------------------------------------------------------------------
    {
      id: "v-w-y",
      title: "v, w and y, and other consonants that work like English",
      summary: "v is English v (teeth on lip), w is English w (round lips), y is the y of 'yes'. Voiced consonants stay voiced at the end of a word.",
      body: [
        "Unlike German or Turkish speakers, you'll find v and w easy: they are exactly the English sounds. Just keep them apart when reading: vê 'this' and wê 'that, her' are different words.",
        "y is always a consonant, the y of 'yes', never a vowel as in English 'gym' or 'my'.",
        "Final b, d, g, v, z and j keep their voice: gund ends in a real d, roj in a buzzing zh. Don't harden them to p, t, k, f, s, sh. And the n+g in ling 'leg' is pronounced as n followed by a light g.",
      ],
      rules: [
        {
          rule: "v vs w",
          examples: [
            { nl: "vê", en: "this (with feminine/oblique nouns)", note: "teeth on lower lip" },
            { nl: "wê", en: "her; that", note: "rounded lips, no teeth" },
            { nl: "av", en: "water", note: "final v" },
            { nl: "welat", en: "country, homeland", note: "'weh-LAHT'" },
            { nl: "wext", en: "time", note: "w + short e + kh + t" },
            { nl: "vexwarin", en: "to drink", note: "v, then x and w: 'veh-khwah-RIN'" },
          ],
        },
        {
          rule: "y is always a consonant",
          examples: [
            { nl: "yek", en: "one", note: "'yek'" },
            { nl: "yar", en: "beloved, sweetheart", note: "'yahr'" },
          ],
        },
        {
          rule: "Voiced consonants stay voiced at the end",
          examples: [
            { nl: "gund", en: "village", note: "real d at the end" },
            { nl: "kurd", en: "Kurd", note: "real d" },
            { nl: "dev", en: "mouth", note: "real v, not f" },
            { nl: "ling", en: "leg", note: "n, then a light g" },
          ],
        },
      ],
      pitfall: "Don't devoice final consonants the way German speakers do: dev 'mouth' should not turn into 'def'.",
    },

    // ------------------------------------------------------------------
    {
      id: "aspiration",
      title: "The hidden contrast: puffed vs unpuffed p, t, k, ç",
      summary: "Many speakers have two versions of p, t, k and ç: with a puff of air and without. Spelling doesn't show it, and only a handful of words depend on it.",
      body: [
        "Hold your hand in front of your mouth and say 'pin', then 'spin'. You'll feel a puff of air after the p in 'pin' (aspiration) and almost none in 'spin'. English uses both kinds, but never to tell words apart.",
        "In many Kurmanji dialects, the puffed and unpuffed versions are separate sounds for p, t, k and ç. Linguistic descriptions give pairs like these, each spelled identically: ker 'donkey' (puffed) vs ker 'deaf' (unpuffed); kêr 'knife' (puffed) vs kêr 'useful', as in bi kêr (unpuffed); kal 'unripe' (puffed) vs kal 'old man, grandfather' (unpuffed); çil 'forty' (puffed) vs çil 'greedy' (unpuffed).",
        "Honest caveat: the contrast is only meaningful in a small number of short words, speakers and regions differ (sources don't always agree on which member is puffed), and context almost always tells you which word is meant. Our audio voice reads the spelling and will usually not show the difference. Treat this as listening knowledge, not something to worry about while speaking.",
        "What does matter for you: Kurmanji p, t, k and ç are generally lighter than English ones at the start of a word. If you aim for the gentle 'spin' p, you will sound more natural.",
      ],
      rules: [
        {
          rule: "Words from the classic pairs (spelling and audio can't show the puff)",
          explain: "Read the notes; context decides which word is meant.",
          examples: [
            { nl: "ker", en: "donkey", note: "described as puffed k: 'kʰer'" },
            { nl: "kêr", en: "knife", note: "described as puffed k" },
            { nl: "bi kêr", en: "useful", note: "the same letters kêr, described with an unpuffed k" },
            { nl: "kalê min", en: "my grandfather", note: "kal 'old man', described with an unpuffed k" },
            { nl: "çil", en: "forty", note: "described as puffed ç" },
          ],
        },
        {
          rule: "Aim for a light, 'spin-style' p, t, k at the start of words",
          examples: [
            { nl: "pênc", en: "five", note: "light p" },
            { nl: "kar", en: "work", note: "k with a modest puff" },
            { nl: "çawa yî", en: "how are you?", note: "light ç" },
          ],
        },
      ],
      pitfall: "Don't try to memorise aspiration for every word: even native speakers from different regions disagree. Learn the vowels and the letters first; this is the last layer of polish.",
    },

    // ------------------------------------------------------------------
    {
      id: "stress",
      title: "Stress: usually on the last syllable",
      summary: "Nouns and adjectives stress their last syllable. Verb prefixes (di-, bi-, na-, ne-) pull the stress to the front. Small endings don't take stress.",
      body: [
        "The default is simple: stress the last syllable of the word itself: heVAL, zaROK, pirTÛK, kurDÎ. This is the opposite of most English words, so it takes conscious effort at first.",
        "When a real suffix like the plural -an is added, the stress moves onto it: zarok → zarokAN. But small 'weak' endings, like the ezafe (-ê, -a, -ên) and the 'is/am/are' endings (e, im, in), don't take stress: hevalê min keeps the stress on VAL.",
        "Verbs are different: the prefixes di- (present), bi- (subjunctive/imperative), na- and ne- (negation) carry the main stress, so the beat comes early: DIxwazim 'I want', NAxwim 'I don't eat', BIbore 'sorry'. A few common words also break the rule: ÇAwa 'how', KÎjan 'which'.",
        "These are general tendencies, and stress in Kurmanji is lighter than in English: there is less shortening of unstressed vowels, so every syllable stays clear.",
      ],
      rules: [
        {
          rule: "Nouns and adjectives: last syllable",
          examples: [
            { nl: "heval", en: "friend", note: "heh-VAL" },
            { nl: "zarok", en: "child", note: "zah-ROHK" },
            { nl: "pirtûk", en: "book", note: "pr-TOOK" },
            { nl: "mezin", en: "big", note: "meh-ZIN" },
            { nl: "piçûk", en: "small", note: "pi-CHOOK" },
          ],
        },
        {
          rule: "Plural -an takes the stress; weak endings don't",
          examples: [
            { nl: "zarokan", en: "children (oblique plural)", note: "zah-roh-KAHN" },
            { nl: "hevalê min", en: "my friend (male)", note: "heh-VAH-lay min" },
            { nl: "Ez baş im", en: "I am well", note: "BAHSH im: 'im' is unstressed" },
          ],
        },
        {
          rule: "Verb prefixes take the stress",
          examples: [
            { nl: "dixwazim", en: "I want", note: "DI-khwah-zim" },
            { nl: "naxwim", en: "I don't eat", note: "NAH-khwim" },
            { nl: "bibore", en: "sorry, excuse me", note: "BI-boh-reh" },
          ],
        },
        {
          rule: "Common exceptions",
          examples: [
            { nl: "çawa", en: "how", note: "CHAH-wah" },
            { nl: "kîjan", en: "which", note: "KEE-zhahn" },
          ],
        },
      ],
      pitfall: "English speakers instinctively say HEval and ZArok. Lean on the end of the word: heVAL, zaROK.",
    },

    // ------------------------------------------------------------------
    {
      id: "ezafe-connected",
      title: "Ezafe and connected speech",
      summary: "Linking endings (-ê, -a, -ên) glue nouns to what follows. They are unstressed and flow into the next word; a y slides in after vowels.",
      body: [
        "Kurmanji links a noun to its describing word or owner with a small vowel called the ezafe: -ê for masculine, -a for feminine, -ên for plural. Navê min 'my name' (lit. 'name-of me'), mala min 'my house', çavên wê 'her eyes'. In speech, the ezafe is short, unstressed, and runs straight into the next word: 'NAH-vay-min'.",
        "Because the ezafe shows gender, you can hear it: hevalê min is a male friend, hevala min a female friend.",
        "When a word ends in a vowel, a y is inserted to avoid two vowels clashing: ode 'room' → odeya min 'my room'. The same thing happens with the 'to be' endings: ez baş im 'I'm well', but tu çawa yî 'how are you', ev çi ye 'what is this'.",
        "Watch the vowel change in the oblique case: some words swap a for ê when they take an ending, so bajar 'city' becomes li bajêr 'in the city'. And the future marker ê glues onto the pronoun: ez ê is said almost as one word, 'eh-ZAY'.",
      ],
      rules: [
        {
          rule: "Ezafe -ê (masculine), -a (feminine), -ên (plural)",
          examples: [
            { nl: "navê min", en: "my name", note: "NAH-vay min: one flowing phrase" },
            { nl: "mala min", en: "my house", note: "MAH-lah min" },
            { nl: "hevalê min", en: "my (male) friend", note: "-ê shows a male friend" },
            { nl: "hevala min", en: "my (female) friend", note: "-a shows a female friend" },
            { nl: "çavên wê", en: "her eyes", note: "plural -ên: 'chah-VAYN way'" },
          ],
        },
        {
          rule: "After a vowel, a y slides in",
          examples: [
            { nl: "odeya min", en: "my room", note: "ode + y + a" },
            { nl: "çaya min", en: "my tea", note: "the y of çay does the linking" },
            { nl: "Tu çawa yî?", en: "How are you?", note: "çawa + yî, said as one word" },
            { nl: "Ev çi ye?", en: "What is this?", note: "'ev CHEE-yeh'" },
          ],
        },
        {
          rule: "'To be' endings attach to the word before",
          examples: [
            { nl: "Ez baş im", en: "I am well", note: "'ez BAHSH-im'" },
            { nl: "Ew mezin e", en: "it is big", note: "'ew meh-ZIN-eh'" },
            { nl: "Ez birçî me", en: "I am hungry", note: "after a vowel, im becomes me" },
          ],
        },
        {
          rule: "Small sound changes when words combine",
          examples: [
            { nl: "bajar", en: "city", note: "a in the last syllable…" },
            { nl: "li bajêr", en: "in the city", note: "…becomes ê with the oblique ending" },
            { nl: "Ez ê werim", en: "I will come", note: "'ez ê' runs together: 'eh-ZAY weh-RIM'" },
            { nl: "Ez diçim malê", en: "I'm going home", note: "-ê on mal, unstressed: 'MAH-lay'" },
          ],
        },
      ],
      pitfall: "Don't pause between a noun and its ezafe, or stress the ezafe: it's navê min (NAH-vay min), never 'nah-VAY... min'.",
    },

    // ------------------------------------------------------------------
    {
      id: "regional-variation",
      title: "Regional variation: Bakur, Behdînî and beyond",
      summary: "Kurmanji is spoken from Turkey to Syria, Iraq, Iran and the diaspora. The written standard is shared, but accents differ noticeably.",
      body: [
        "This guide follows standard Hawar Kurmanji, close to the speech of Bakur (Kurdish areas of Turkey, e.g. Amed/Diyarbakır, Serhed, Botan) and Rojava (Syria). That is what most books, media and online material use.",
        "Behdînî, the Kurmanji of Duhok and the Behdînan area in Iraq, differs in some regular ways: long û often moves forward toward a French u or even 'ee' (dûr 'far' can sound like 'dür' or 'deer'); xwe is xo; v after a vowel can become w (av 'water' → 'aw'). Behdînî is also often written in Arabic script in Iraq.",
        "Further west (e.g. around Elbistan and Maraş), a tends to darken toward 'aw' and e toward 'a', so av can sound like 'ov'. Syrian and southern speakers keep the throat sounds (ḧ, ʿ, ẍ) in Arabic loanwords more strongly, while many speakers in Turkey soften them. Turkish loanwords are common in Bakur everyday speech.",
        "None of this blocks understanding. Learn the standard, and expect people to understand you everywhere; your ear will adapt to accents over time.",
      ],
      rules: [
        {
          rule: "Words that sound different across regions (standard spelling)",
          examples: [
            { nl: "dûr", en: "far", note: "standard 'door'; Behdînî often 'dür' or close to 'deer'" },
            { nl: "xwe", en: "oneself", note: "standard 'khweh'; Behdînî xo ('khoh')" },
            { nl: "av", en: "water", note: "standard 'ahv'; parts of Behdînan 'aw'; the far west 'ov'" },
            { nl: "heft", en: "seven", note: "Syria/south: deep ḧ; many in Turkey: plain h" },
            { nl: "kur", en: "son", note: "some eastern accents round the k: 'kwr'" },
          ],
        },
        {
          rule: "Behdînî forms you may hear (and read)",
          examples: [
            { nl: "xo", en: "oneself (Behdînî for xwe)", note: "'khoh'" },
            { nl: "Ez dê çim", en: "I will go (Behdînî)", note: "standard: Ez ê biçim" },
            { nl: "Ez ê biçim", en: "I will go (standard)", note: "compare with the Behdînî form" },
          ],
        },
      ],
      pitfall: "Don't mix features at random. Pick the standard as your base; it's understood everywhere, and you can add regional colour later if you live in or connect with a specific region.",
    },

    // ------------------------------------------------------------------
    {
      id: "top-mistakes",
      title: "Top mistakes English speakers make",
      summary: "Ten quick fixes. Play each word and check yourself.",
      body: [
        "Most accent problems come from reading Kurmanji letters with English habits. Run through this list every few weeks; each fix is small, and together they transform how you sound.",
        "1) i is not 'ee'. 2) The hat matters: e/ê, i/î, u/û. 3) a is always 'ah'. 4) c = j, j = zh. 5) x is 'kh', not 'ks'. 6) q is deep, not k. 7) r is tapped or rolled, never English. 8) Pronounce final h. 9) Keep long vowels pure, no glides. 10) Stress the end of nouns.",
      ],
      rules: [
        {
          rule: "Check yourself on these",
          examples: [
            { nl: "min", en: "me, my", note: "fix 1: tiny vowel, not 'meen'" },
            { nl: "pîr", en: "old (person)", note: "fix 2: long î, compare pir" },
            { nl: "nan", en: "bread", note: "fix 3: 'nahn', not 'nan' as in 'nanny'" },
            { nl: "cejn", en: "festival", note: "fix 4: 'jezhn'" },
            { nl: "xelk", en: "people", note: "fix 5: 'khelk'" },
            { nl: "qelem", en: "pen", note: "fix 6: deep q" },
            { nl: "êvar baş", en: "good evening", note: "fix 7: a quick tapped r at the end of êvar" },
            { nl: "guh", en: "ear", note: "fix 8: final h heard" },
            { nl: "sê", en: "three", note: "fix 9: no y-glide" },
            { nl: "zarok", en: "child", note: "fix 10: zah-ROHK" },
          ],
        },
      ],
      pitfall: "When reading a new word, go letter by letter: Kurmanji spelling never lies, so trust the letters, not your English instincts.",
    },
  ],
  practice: [
    { nl: "Silav, navê min Azad e.", en: "Hello, my name is Azad.", note: "ezafe in navê, 'is' as e; stress aZAD" },
    { nl: "Tu çawa yî? Ez baş im, sipas.", en: "How are you? I'm well, thanks.", note: "ç = ch, the linking y in yî, the weak i in sipas" },
    { nl: "Ez çayeke reş dixwazim.", en: "I'd like a black tea.", note: "trilled r in reş, xw in dixwazim, stress on DI-" },
    { nl: "Şêr şîr venaxwe.", en: "The lion doesn't drink milk.", note: "ê vs î: şêr / şîr" },
    { nl: "Qelemek û kelemek ji bazarê bikire.", en: "Buy a pen and a cabbage from the market.", note: "deep q vs ordinary k" },
    { nl: "Kurê min li gundekî dûr dijî.", en: "My son lives in a faraway village.", note: "short u in kurê, long û in dûr, j = zh in dijî" },
    { nl: "Xwişka min xwarineke xweş çêdike.", en: "My sister is making a delicious meal.", note: "four x's: the kh sound and xw" },
    { nl: "Bajar mezin e, lê gundê me piçûk e.", en: "The city is big, but our village is small.", note: "a = ah, final stress in meZIN, piÇÛK" },
    { nl: "Îro hewa sar e û berf dibare.", en: "Today the weather is cold and it's snowing.", note: "î, the h in hewa, tapped r in dibare" },
    { nl: "Ez kurdî hîn dibim, hêdî hêdî.", en: "I'm learning Kurdish, slowly.", note: "short i vs long î, clear h" },
    { nl: "Hevalê min Kurd e û li Amedê dijî.", en: "My friend is Kurdish and lives in Amed.", note: "ezafe -ê, final d in Kurd" },
    { nl: "Ji kerema xwe, hêdîtir biaxive.", en: "Please speak more slowly.", note: "weak i in ji, xw in xwe, stress on BI-" },
    { nl: "Çavên wê reş in û porê wê dirêj e.", en: "Her eyes are black and her hair is long.", note: "plural ezafe -ên, w vs v, j = zh at the end of dirêj" },
    { nl: "Şev baş, xewa xweş!", en: "Good night, sleep well!", note: "ş = sh, ew in xew" },
  ],
};
