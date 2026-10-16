// Pashto pronunciation & reading guide: how standard Afghan Pashto spelling maps
// to sound (Kandahari-leaning values, with Peshawari/northern variants noted).
window.__DECK.ps.PRONUNCIATION = {
  title: "How Pashto sounds",
  minutes: 22,
  intro: [
    "Pashto is written in an Arabic-based alphabet with a set of letters of its own: four 'retroflex' consonants (ټ ډ ړ ڼ), the two famous dialect letters ښ and ږ, the affricates څ and ځ, a ringed ګ, and five different yes. Once you know about forty-four letters, you can read most words you see, with one catch: the short vowels are not written.",
    "That catch is real. لس is 'las' (ten), but you have to know that, because the spelling only shows l-s. The long vowels (ā, e, i, o, u) are written; short a, ə ('uh'), i and u are not. The good news: a handful of patterns, and the fact that Pashto happily starts words with two consonants (ښځه, پلار, ستړی), take you a long way.",
    "The notes under each example use a simple Latin respelling. CAPITALS mark the stressed syllable where it is worth learning. ā is the long 'ah' of 'father', a is a short 'a', close to the u of 'cup', and ə is the weak 'uh' of 'about'. e and o are steady vowels, as in 'say' and 'go' without the glide. ay is the 'ai' of 'aisle', and əy is an 'uh-ee' run together. A dot marks a retroflex (ṭ ḍ ṛ ṇ). ṣ̌ and ẓ̌ are the Kandahari values of ښ and ږ. kh is the ch of Scottish 'loch', gh is its gargled partner, and ts and dz are single sounds.",
    "The five things that matter most: (1) read right to left, and learn the Pashto-only letters; (2) supply the unwritten short vowels, especially ə; (3) keep the five yes apart (ی ay, ي i, ې e, ۍ əy, ئ əy), because they carry gender, number and person; (4) curl the tongue back for ټ ډ ړ ڼ; (5) treat stress as part of the word, because in verbs it marks aspect. Press play on every example and say it out loud after the speaker.",
  ],
  sections: [
    // ------------------------------------------------------------------
    {
      id: "script-basics",
      title: "The script: right to left, joined up",
      summary: "Pashto runs right to left, letters join inside a word, and ten letters never join to the letter after them.",
      body: [
        "Pashto uses the Arabic alphabet, extended with extra letters for its own sounds. You read from right to left, so the first letter of a word is the one on the far right. There are no capital letters; instead most letters change shape a little depending on whether they stand at the start, in the middle, at the end of a word, or alone. Look at the dots and the small marks: they are what tells letters apart.",
        "Inside a word, letters normally hold hands with their neighbours. Ten letters only take a hand from the right and never join to the left: ا د ډ ذ ر ړ ز ږ ژ و. After one of these, the word continues after a small gap. That gap is not a space between words; real word spaces are wider.",
        "This app follows the standard written Pashto of Afghanistan, with a Kandahari-leaning pronunciation. Pashto is also spoken across Khyber Pakhtunkhwa in Pakistan, where the same letters are read a little differently; the dialect sections below show you how.",
      ],
      rules: [
        {
          rule: "Read from the right: the first letter is on the right",
          explain: "Follow each word letter by letter while you listen.",
          examples: [
            { nl: "پښتو", en: "Pashto", note: "p-ṣ̌-t-o: 'paṣ̌-TO'. The a after p is not written." },
            { nl: "سلام", en: "hello", note: "s-l-ā-m: 'sa-LĀM'." },
            { nl: "کابل", en: "Kabul", note: "'KĀ-bul': the short u is not written." },
            { nl: "کندهار", en: "Kandahar", note: "'kan-da-HĀR'." },
            { nl: "افغانستان", en: "Afghanistan", note: "'af-ghā-nis-TĀN'." },
            { nl: "پېښور", en: "Peshawar", note: "'pe-ṣ̌a-WAR'. In Peshawar itself you'll hear 'pe-kha-WAR'." },
          ],
        },
        {
          rule: "Words made only of non-joining letters fall into pieces",
          examples: [
            { nl: "ورور", en: "brother", note: "و ر و ر, four separate pieces: 'wror', one syllable." },
            { nl: "زوړ", en: "old (of things and people)", note: "ز و ړ, none of them join: 'zoṛ'." },
            { nl: "اوړی", en: "summer", note: "ا و ړ stand apart, then ی: 'o-ṛay'." },
            { nl: "دوه", en: "two", note: "د و ه: 'dwa'." },
            { nl: "ډوډۍ", en: "bread; a meal", note: "ډ and و, then ډ and ۍ: 'ḍo-ḌƏY'." },
          ],
        },
        {
          rule: "Joining letters flow into each other",
          examples: [
            { nl: "زه", en: "I", note: "'zə': a short 'uh' after z." },
            { nl: "ښکلی", en: "beautiful", note: "all five letters join in one stroke: 'ṣ̌KU-lay'." },
          ],
        },
      ],
      pitfall: "A word like ورور looks like four tiny words. Don't read the gaps as spaces: look for the wider gap between real words.",
    },
    // ------------------------------------------------------------------
    {
      id: "pashto-letters",
      title: "The letters only Pashto has",
      summary: "ټ ډ ړ ڼ ښ ږ څ ځ ګ ې ۍ ئ are Pashto's own. Learn their shapes, and don't swap in the Arabic or Persian look-alikes.",
      body: [
        "Most Pashto letters are shared with Arabic and Persian. Twelve are special. Four carry a small ring (ټ ډ ړ ڼ): the retroflex t, d, r and n. Two have a dot above and below (ښ ږ). Two are built on ح with extra marks: three dots for څ (ts), a hamza for ځ (dz). ګ is g with a ring under it, and ې ۍ ئ are three of Pashto's five yes.",
        "On a computer, use a Pashto keyboard. The Arabic ك (with a small mark inside its final form) is not Pashto ک, the Persian گ (two strokes) is a common stand-in for Pashto ګ but is not the standard letter, and the dotless Arabic ى is not Pashto ی. They may look almost the same on screen, but search, spellcheck and text-to-speech treat them as different letters.",
        "One example per letter below. Each sound gets its own section later.",
      ],
      rules: [
        {
          rule: "The retroflex four: ټ ډ ړ ڼ",
          explain: "The ring tells you to curl the tongue tip back.",
          examples: [
            { nl: "ټول", en: "all, whole", note: "ټ = ṭ: 'ṭol'." },
            { nl: "ډېر", en: "very, much, many", note: "ډ = ḍ: 'ḍer'." },
            { nl: "سړی", en: "man", note: "ړ = ṛ: 'sa-ṚAY'." },
            { nl: "مڼه", en: "apple", note: "ڼ = ṇ: 'ma-ṇa'." },
          ],
        },
        {
          rule: "ښ and ږ: the dialect letters",
          examples: [
            { nl: "ښه", en: "good, well", note: "ښ = ṣ̌ in Kandahar, kh in Peshawar: 'ṣ̌ə'." },
            { nl: "وږی", en: "hungry (man)", note: "ږ = ẓ̌ in Kandahar, g in Peshawar: 'WƏ-ẓ̌ay'." },
          ],
        },
        {
          rule: "څ and ځ: ts and dz in one letter",
          examples: [
            { nl: "څه", en: "what", note: "څ = ts: 'tsə'." },
            { nl: "ځم", en: "I go", note: "ځ = dz: 'dzəm'." },
          ],
        },
        {
          rule: "ګ, and three of the five yes: ې ۍ ئ",
          examples: [
            { nl: "ګل", en: "flower", note: "ګ = hard g, as in 'go': 'gul'." },
            { nl: "درې", en: "three", note: "ې = e: 'dre'." },
            { nl: "هګۍ", en: "egg", note: "ۍ = əy: 'ha-gəy'." },
            { nl: "کېنئ", en: "sit down (to several people, or politely)", note: "ئ at the end of a verb = əy: 'KE-nəy'." },
          ],
        },
      ],
      pitfall: "Don't type ك for ک or ى for ی. They look the same in many fonts, but they are different characters, and words spelled with them will not be found or read correctly.",
    },
    // ------------------------------------------------------------------
    {
      id: "long-vowels",
      title: "The written vowels: ا و ې ي and their partners",
      summary: "ا = ā, و = o / u (or w), ې = e, ی / ي = i (or y). These long vowels are always written.",
      body: [
        "Pashto writes its long, full vowels with letters. ا is a long ā, deep and open, as in 'father'; at the start of a word it is often written آ, though modern Afghan spelling also uses plain ا (اسمان، اسان). ې is a steady e, as in 'say' without the glide. ی (in the middle of a word) or ي (at the end) is i, as in 'see'. و is either o (as in 'go', without the glide) or u (as in 'food'); the spelling does not tell you which, so learn each word with its sound.",
        "و and ی also work as consonants. Before or after a vowel, و is w and ی is y: ورور 'wror', یو 'yaw'. Together with a vowel they make Pashto's diphthongs: ay (چای 'chāy', tea), aw (یو 'yaw', one) and oy (لوی 'loy', big).",
        "Hold these vowels steady. English speakers tend to slide 'say' into 'say-ee' and 'go' into 'go-oo'; Pashto e and o stay flat.",
      ],
      rules: [
        {
          rule: "ا = ā, the long open 'ah'",
          examples: [
            { nl: "کار", en: "work, job", note: "'kār'." },
            { nl: "ښار", en: "city", note: "'ṣ̌ār'." },
            { nl: "پلار", en: "father", note: "'plār': p and l together, then ā." },
          ],
        },
        {
          rule: "آ = ā at the start of a word",
          examples: [
            { nl: "آس", en: "horse", note: "'ās'." },
            { nl: "آسمان", en: "sky", note: "'ās-MĀN'." },
          ],
        },
        {
          rule: "و = o or u: learn which",
          examples: [
            { nl: "کور", en: "house, home", note: "o: 'kor'." },
            { nl: "تور", en: "black", note: "o: 'tor'." },
            { nl: "سور", en: "red", note: "u: 'sur'." },
            { nl: "پښتون", en: "a Pashtun", note: "u: 'paṣ̌-TUN'." },
          ],
        },
        {
          rule: "ې = e, a flat 'ay'",
          explain: "ې can stand in the middle or at the end of a word.",
          examples: [
            { nl: "ډېر", en: "very, much", note: "'ḍer'." },
            { nl: "درې", en: "three", note: "'dre'." },
            { nl: "چېرته", en: "where", note: "'cher-ta'." },
          ],
        },
        {
          rule: "ی / ي = i, the long 'ee'",
          explain: "In the middle of a word i is written ی; at the end of a word it is ي.",
          examples: [
            { nl: "مینه", en: "love", note: "'mi-na'." },
            { nl: "شین", en: "green; blue", note: "'shin'. One word covers both colours." },
            { nl: "سیند", en: "river", note: "'sind'." },
            { nl: "ټکسي", en: "taxi", note: "final ي = i: 'ṭak-si'." },
          ],
        },
        {
          rule: "Diphthongs: a vowel with ی or و",
          examples: [
            { nl: "چای", en: "tea", note: "āy: 'chāy'." },
            { nl: "یو", en: "one", note: "aw: 'yaw', like 'yow' said quickly." },
            { nl: "لوی", en: "big, great", note: "oy: 'loy'." },
          ],
        },
      ],
      pitfall: "Don't read every و as 'oo'. کور is 'kor', not 'koor'; سور is 'sur'. When in doubt, trust the audio.",
    },
    // ------------------------------------------------------------------
    {
      id: "short-vowels",
      title: "The unwritten vowels: a, ə, i and u",
      summary: "Short a, ə ('uh'), i and u are not written. ə is the most common vowel in Pashto, and some words have no vowel at all between their first consonants.",
      body: [
        "Pashto has four short vowels and leaves all of them out of normal spelling: a (a short 'a', like the u in 'cup'), ə (the weak 'uh' of 'about'), i (as in 'bit') and u (as in 'put'). Dictionaries and children's books mark them with small signs (zwarakay, zwar, zer, pesh), but ordinary text, and this app, writes none of them.",
        "ə is the workhorse. It appears in hundreds of everyday words (سل 'səl', نن 'nən', زه 'zə') and in many endings. Short a is next: لس 'las', غر 'ghar', سر 'sar'.",
        "Unlike Persian or Kurdish, Pashto is happy to start a word with two consonants: پلار 'plār', ښځه 'ṣ̌ə-dza' or even 'ṣ̌dza' in fast speech, ستړی 'stə-ṛay', زما 'zmā', ورور 'wror'. So don't automatically slide a vowel in after the first letter. Listen, then copy exactly what you hear.",
      ],
      rules: [
        {
          rule: "Short a, unwritten",
          examples: [
            { nl: "لس", en: "ten", note: "'las'." },
            { nl: "غر", en: "mountain", note: "'ghar'." },
            { nl: "سبا", en: "tomorrow", note: "'sa-BĀ'." },
          ],
        },
        {
          rule: "ə, the weak 'uh', unwritten",
          examples: [
            { nl: "سل", en: "a hundred", note: "'səl'." },
            { nl: "شل", en: "twenty", note: "'shəl'." },
            { nl: "نن", en: "today", note: "'nən'." },
            { nl: "دلته", en: "here", note: "'DƏL-ta'." },
          ],
        },
        {
          rule: "Short i and u, unwritten",
          examples: [
            { nl: "کتاب", en: "book", note: "i: 'ki-TĀB'." },
            { nl: "ګل", en: "flower", note: "u: 'gul'." },
            { nl: "پل", en: "bridge", note: "u: 'pul'." },
            { nl: "مسافر", en: "traveller, passenger", note: "u and i: 'mu-sā-FIR'." },
          ],
        },
        {
          rule: "Two consonants at the start: no vowel in between",
          explain: "Say both consonants together, as in English 'play' or 'stay'.",
          examples: [
            { nl: "زما", en: "my, mine", note: "'zmā', not 'zi-mā'." },
            { nl: "ستا", en: "your (one person)", note: "'stā'." },
            { nl: "پښه", en: "foot, leg", note: "'pṣ̌a'." },
            { nl: "ښکلی", en: "beautiful", note: "'ṣ̌KU-lay'. The -ay is unstressed, so the feminine is ښکلې." },
          ],
        },
      ],
      pitfall: "Don't fill the gaps with a full 'a' everywhere. Most unwritten vowels are ə, short and relaxed, and the commonest beginner accent comes from saying 'sal' for سل (a hundred), which sounds like 'year' to a Pashtun ear.",
    },
    // ------------------------------------------------------------------
    {
      id: "final-h",
      title: "Word-final ه: usually a, sometimes ə",
      summary: "A ه at the end of a word is mostly a vowel, not an h: -a in feminine nouns, -ə in a few common little words.",
      body: [
        "At the end of a word, ه is usually not an h at all but a vowel. In the great majority of nouns and adjectives it is -a, and it marks the word as feminine: ښځه 'woman', کوټه 'room', مڼه 'apple'.",
        "In a small set of very common words, final ه is the weak vowel ə instead: زه 'zə' (I), ته 'tə' (you), ښه 'ṣ̌ə' (good), څه 'tsə' (what), نه 'nə' (not), زړه 'zṛə' (heart). Older Afghan spelling marks this ə with a small sign on top (ۀ), but most modern text, including this app, just writes ه.",
        "A real h at the end of a word is rare in Pashto. In نهه 'nəha' (nine) the first ه is h, and the last one is the vowel a.",
      ],
      rules: [
        {
          rule: "Final ه = -a: the feminine ending",
          examples: [
            { nl: "ښځه", en: "woman; wife", note: "'ṣ̌ə-DZA'." },
            { nl: "کوټه", en: "room", note: "'ko-ṭa'." },
            { nl: "لاره", en: "road, way", note: "'lā-ra'." },
            { nl: "شپه", en: "night", note: "'shpa'." },
          ],
        },
        {
          rule: "Final ه = -ə in a few short, common words",
          examples: [
            { nl: "زه", en: "I", note: "'zə'." },
            { nl: "ته", en: "you (one person); to", note: "'tə' as 'you'. The postposition ته 'to' is usually a lighter 'ta'." },
            { nl: "ښه", en: "good, well", note: "'ṣ̌ə'." },
            { nl: "څه", en: "what; something", note: "'tsə'." },
            { nl: "زړه", en: "heart", note: "'zṛə'." },
            { nl: "اوبه", en: "water", note: "'o-bə'. Always plural in Pashto." },
          ],
        },
      ],
      pitfall: "Never pronounce an English h at the end of ښځه or کوټه. Say a clear, short -a and stop.",
    },
    // ------------------------------------------------------------------
    {
      id: "five-yes",
      title: "The five yes: ی ي ې ۍ ئ",
      summary: "At the end of a word: ی = ay, ي = i, ې = e, ۍ = əy, ئ = əy (in verbs). Each one is a different ending.",
      body: [
        "Pashto has five letters built on ی, and at the end of a word each has its own sound. ی (no dots at the end) is -ay, as in 'aisle': سړی 'saṛay', man. ي (two dots below) is -i: سړي 'saṛi', men. ې (two dots stacked) is -e: درې 'dre', three. ۍ (with a little hamza on its tail) is -əy: ډوډۍ 'ḍoḍəy', bread. ئ (hamza on a tooth) at the end of a verb is also -əy: کېنئ 'kenəy', sit down (to several people).",
        "In the middle of a word the shapes merge: ی and ي look the same, and they are read i or y. Only ې keeps its stacked dots inside a word (ډېر 'ḍer'), and ئ inside a word marks a vowel break in loanwords (مسئله 'mas-a-la', problem).",
        "These five are not spelling decoration. They carry grammar: whether a word is masculine or feminine, singular or plural, and who does a verb. The next section shows how.",
      ],
      rules: [
        {
          rule: "ی = -ay at the end of a word",
          examples: [
            { nl: "سړی", en: "man", note: "'sa-ṚAY'." },
            { nl: "زلمی", en: "young man", note: "'zal-MAY'." },
            { nl: "ښوونځی", en: "school", note: "'ṣ̌o-wən-DZAY'." },
          ],
        },
        {
          rule: "ی as the consonant y at the start",
          examples: [
            { nl: "یار", en: "friend, dear one", note: "'yār'." },
            { nl: "یخ", en: "cold; ice", note: "'yakh'." },
          ],
        },
        {
          rule: "ي = -i at the end of a word",
          examples: [
            { nl: "سړي", en: "men; (of) the man", note: "'sa-ṚI'." },
            { nl: "ګوري", en: "he/she looks, sees", note: "'go-ri'." },
            { nl: "اوسي", en: "he/she lives", note: "'o-si'." },
          ],
        },
        {
          rule: "ې = -e at the end of a word",
          examples: [
            { nl: "ښځې", en: "women", note: "'ṣ̌ə-DZE'." },
            { nl: "پیسې", en: "money", note: "'pay-SE'. Here the first ی is the y of the diphthong 'ay'." },
          ],
        },
        {
          rule: "ۍ = -əy at the end of nouns and adjectives",
          examples: [
            { nl: "ډوډۍ", en: "bread; a meal", note: "'ḍo-ḌƏY'." },
            { nl: "هګۍ", en: "egg", note: "'ha-gəy'." },
            { nl: "ټوپۍ", en: "cap, hat", note: "'ṭo-pəy'." },
          ],
        },
        {
          rule: "ئ = -əy at the end of verbs (you, plural)",
          examples: [
            { nl: "راشئ", en: "come! (to several people)", note: "'RĀ-shəy'." },
            { nl: "وګورئ", en: "look! (to several people)", note: "'WƏ-go-rəy'." },
            { nl: "مسئله", en: "problem, issue", note: "ئ inside a loanword: a break between vowels, 'mas-a-la'." },
          ],
        },
      ],
      pitfall: "ۍ and ئ sound the same (-əy) but do different jobs: ۍ ends nouns and adjectives, ئ ends verbs. Don't mix up -ay (ی) and -əy (ۍ): سپی 'spay' is a dog, سپۍ 'spəy' a female dog.",
    },
    // ------------------------------------------------------------------
    {
      id: "yes-grammar",
      title: "What the five yes tell you",
      summary: "The final ye of a word tells you its gender, its number, its case, or the person of a verb. Listen for it.",
      body: [
        "Many masculine words end in -ay (ی) in their basic form. When they are plural, or 'oblique' (after a preposition, or as the doer of a past transitive verb), that -ay changes to -i (ي): سړی 'man', سړي 'men', د سړي کور 'the man's house'.",
        "Adjectives follow their noun. ستړی 'tired' (to a man) becomes ستړې for a woman or for women, and ستړي for men. Some words with stressed -ay make their feminine in -əy (ۍ): لېونی 'crazy' (m), لېونۍ (f).",
        "On verbs, -e (ې) is 'you' (one person) and -əy (ئ) is 'you' (several, or polite): ته ځې 'you go', تاسو ځئ 'you all go'. The famous Pashto greeting shows almost all of them at once: ستړی مه شې to a man, ستړې مه شې to a woman, ستړي مه شئ to a group.",
      ],
      rules: [
        {
          rule: "-ay → -i: masculine plural and oblique",
          examples: [
            { nl: "سړی", en: "a man", note: "-ay." },
            { nl: "سړي", en: "men", note: "-i." },
            { nl: "د سړي کور", en: "the man's house", note: "-i after د (of): 'də sa-ṚI kor'." },
          ],
        },
        {
          rule: "Adjectives: ی for him, ې for her, ي for them",
          examples: [
            { nl: "ستړی سړی", en: "a tired man", note: "'STƏ-ṛay sa-ṚAY'." },
            { nl: "ستړې ښځه", en: "a tired woman", note: "'STƏ-ṛe ṣ̌ə-DZA'." },
            { nl: "ستړي سړي", en: "tired men", note: "'STƏ-ṛi sa-ṚI'." },
          ],
        },
        {
          rule: "Stressed -ay: feminine in -əy (ۍ)",
          examples: [
            { nl: "لېونی", en: "crazy, mad (m)", note: "'le-wa-NAY'." },
            { nl: "لېونۍ", en: "crazy, mad (f)", note: "'le-wa-NƏY'." },
            { nl: "سپی", en: "dog", note: "'spay'." },
            { nl: "سپۍ", en: "female dog", note: "'spəy'." },
          ],
        },
        {
          rule: "On verbs: ې = you (one), ئ = you (several), ي = he, she, they",
          examples: [
            { nl: "ته ځې", en: "you go (one person)", note: "'tə dze'." },
            { nl: "تاسو ځئ", en: "you go (several, or polite)", note: "'TĀ-so dzəy'." },
            { nl: "هغه ځي", en: "he/she goes", note: "'ha-GHA dzi'." },
            { nl: "تاسو څه کوئ؟", en: "what are you doing? (plural or polite)", note: "'TĀ-so tsə ka-WƏY'." },
          ],
        },
        {
          rule: "The greeting that uses them all",
          explain: "Literally 'may you not be tired'. The answer is خوار مه شې, 'may you not be poor'.",
          examples: [
            { nl: "ستړی مه شې", en: "hello (to a man)", note: "-ay on the adjective, -e on the verb." },
            { nl: "ستړې مه شې", en: "hello (to a woman)", note: "-e on both." },
            { nl: "ستړي مه شئ", en: "hello (to a group)", note: "-i on the adjective, -əy on the verb." },
            { nl: "خوار مه شې", en: "the reply: may you not be poor", note: "'khwār ma she'." },
          ],
        },
      ],
      pitfall: "English speakers tend to swallow the ends of words. In Pashto the end is where the grammar is: ستړی, ستړې and ستړي are three different words. Say the last vowel clearly.",
    },
    // ------------------------------------------------------------------
    {
      id: "retroflex-t-d",
      title: "ټ and ډ: the retroflex t and d",
      summary: "For ټ and ډ, curl the tongue tip back and tap the roof of the mouth. Plain ت and د touch the back of the teeth.",
      body: [
        "Pashto has two kinds of t and d. Plain ت (t) and د (d) are dental: the tongue tip touches the back of the upper teeth, a little further forward than in English.",
        "ټ (ṭ) and ډ (ḍ) are retroflex: curl the tongue tip back and hit the roof of the mouth behind the ridge. They sound duller and 'hollower', like an Indian-English t or d. If you speak Hindi, Urdu or Punjabi, these are exactly the same sounds.",
        "Fun fact: Pashtuns hear English t and d as retroflex, so loanwords from English are spelled with ټ and ډ: ډاکټر (doctor), ټکسي (taxi), ټېلیفون (telephone).",
      ],
      rules: [
        {
          rule: "ټ = ṭ, tongue curled back",
          examples: [
            { nl: "ټول", en: "all, whole", note: "'ṭol'." },
            { nl: "ټوټه", en: "piece, bit", note: "'ṭo-ṭa', two ṭ's." },
            { nl: "ټیټ", en: "low", note: "'ṭiṭ'." },
            { nl: "کوټه", en: "room", note: "'ko-ṭa'." },
          ],
        },
        {
          rule: "ډ = ḍ, tongue curled back",
          examples: [
            { nl: "ډېر", en: "very, much, many", note: "'ḍer'." },
            { nl: "ډک", en: "full", note: "'ḍak'." },
            { nl: "ډاکټر", en: "doctor", note: "'ḍāk-ṭar': both letters retroflex." },
            { nl: "لنډ", en: "short", note: "'lanḍ'." },
            { nl: "ګاډی", en: "cart, vehicle", note: "'gā-ḍay'." },
          ],
        },
        {
          rule: "Plain ت and د: tongue on the teeth",
          examples: [
            { nl: "توت", en: "mulberry", note: "'tut': both t's dental." },
            { nl: "دوه", en: "two", note: "'dwa'." },
          ],
        },
        {
          rule: "Minimal pairs: curled or not changes the word",
          explain: "Play each pair back to back.",
          examples: [
            { nl: "ټول", en: "all", note: "ṭ: tongue back." },
            { nl: "تول", en: "weight, weighing", note: "t: tongue on the teeth." },
            { nl: "پټ", en: "hidden", note: "ṭ: 'pəṭ'." },
            { nl: "پت", en: "honour, dignity", note: "t: 'pat'." },
            { nl: "ډال", en: "shield", note: "ḍ." },
            { nl: "دال", en: "lentils", note: "d." },
          ],
        },
      ],
      pitfall: "English t and d sit in between Pashto's two kinds, so both come out wrong. Exaggerate: teeth for ت د, curled tongue for ټ ډ.",
    },
    // ------------------------------------------------------------------
    {
      id: "retroflex-r-n",
      title: "ړ and ڼ: the retroflex flap and n",
      summary: "ړ is a quick flap with the tongue curled back; ڼ is an n made the same way. Neither starts a word.",
      body: [
        "Plain ر (r) is a light tap of the tongue tip on the ridge behind the teeth, like the tt in American 'butter', or a Spanish r. ړ (ṛ) starts with the tongue curled back and flicks it forward and down in one quick flap. It sounds a bit like an r and a d at the same time. Listen for it in سړی and زړه.",
        "ڼ (ṇ) is the retroflex n: an n with the tongue curled back. It only comes after a vowel, inside or at the end of a word. Many speakers outside the south pronounce it as a plain n or a nasal vowel, so it is not a big problem if yours is plain at first.",
        "ړ is one of the most frequent letters in Pashto, and many words differ only by ر against ړ.",
      ],
      rules: [
        {
          rule: "ړ = ṛ, a curled flap",
          examples: [
            { nl: "زړه", en: "heart", note: "'zṛə'." },
            { nl: "لوړ", en: "high, tall", note: "'lwaṛ'." },
            { nl: "وړوکی", en: "small, little", note: "'wa-ṛu-kay'." },
            { nl: "سوړ", en: "cold", note: "'soṛ'." },
          ],
        },
        {
          rule: "Minimal pairs: ر against ړ",
          examples: [
            { nl: "زور", en: "force, strength", note: "r: 'zor'." },
            { nl: "زوړ", en: "old", note: "ṛ: 'zoṛ'." },
            { nl: "پور", en: "loan, debt", note: "r: 'por'." },
            { nl: "پوړ", en: "floor, storey", note: "ṛ: 'poṛ'." },
            { nl: "ور", en: "door, gate", note: "r: 'war'." },
            { nl: "وړ", en: "worthy, fitting", note: "ṛ: 'waṛ'." },
          ],
        },
        {
          rule: "ڼ = ṇ, a curled n",
          examples: [
            { nl: "مڼه", en: "apple", note: "'ma-ṇa'." },
            { nl: "پاڼه", en: "leaf; page", note: "'pā-ṇa'." },
            { nl: "کاڼی", en: "stone", note: "'kā-ṇay'." },
            { nl: "تڼۍ", en: "button", note: "'ta-ṇəy'." },
            { nl: "اتڼ", en: "atan, the Pashtun circle dance", note: "'a-taṇ'." },
          ],
        },
      ],
      pitfall: "Don't use an English r (tongue curled but never touching). Both Pashto r's touch the roof of the mouth; ر at the ridge, ړ further back, with a flick.",
    },
    // ------------------------------------------------------------------
    {
      id: "sh-zh",
      title: "ښ and ږ: Pashto's dialect markers",
      summary: "In Kandahar ښ is a retroflex sh and ږ a retroflex zh; in Peshawar they are kh and g. Plain ش and ژ are sh and zh everywhere.",
      body: [
        "ښ and ږ are the most famous letters in Pashto, because each region reads them differently. In Kandahar and the south (the pronunciation this app follows), ښ is ṣ̌, a 'sh' with the tongue curled back, and ږ is ẓ̌, the same with the voice on: a curled 'zh'.",
        "In Peshawar and the north-east they become kh (as in 'loch') and g: پښتو is 'paṣ̌to' in Kandahar but 'pakhto' in Peshawar, ښه is 'ṣ̌ə' or 'khə', وږی is 'wəẓ̌ay' or 'wəgay'. In central Afghanistan (Wardak, Ghazni) you will also hear softer, palatal values, close to German 'ich' and a 'y'. This is why the people call themselves Pashtun in the south and Pakhtun in the north. Every one of these is correct; the spelling is the same for all.",
        "Plain ش (sh, as in 'shop') and ژ (zh, the s of 'pleasure') do not change between dialects. ژ is Pashto's ordinary 'zh' and is fairly common: ژبه 'language, tongue'.",
      ],
      rules: [
        {
          rule: "ښ = ṣ̌, a curled sh (kh in Peshawar)",
          examples: [
            { nl: "پښتو", en: "Pashto", note: "'paṣ̌-TO'; Peshawar 'pakh-TO'." },
            { nl: "ښار", en: "city", note: "'ṣ̌ār'." },
            { nl: "ښځه", en: "woman", note: "'ṣ̌ə-DZA'; Peshawar 'khə-ZA'." },
            { nl: "ښوونځی", en: "school", note: "'ṣ̌o-wən-DZAY'." },
            { nl: "غوښه", en: "meat", note: "'ghwa-ṣ̌a'." },
          ],
        },
        {
          rule: "ږ = ẓ̌, a curled zh (g in Peshawar)",
          examples: [
            { nl: "تږی", en: "thirsty (m)", note: "'TƏ-ẓ̌ay'; Peshawar 'TƏ-gay'." },
            { nl: "خوږ", en: "sweet", note: "'khwaẓ̌'." },
            { nl: "غوږ", en: "ear", note: "'ghwaẓ̌'." },
            { nl: "ږیره", en: "beard", note: "'ẓ̌i-ra'." },
            { nl: "شپږ", en: "six", note: "'shpaẓ̌'; Peshawar 'shpag'." },
          ],
        },
        {
          rule: "Plain ش = sh, ژ = zh, in every dialect",
          examples: [
            { nl: "شپه", en: "night", note: "'shpa'." },
            { nl: "ژبه", en: "language; tongue", note: "'zhə-BA'." },
            { nl: "ژمی", en: "winter", note: "'zhə-MAY'." },
          ],
        },
        {
          rule: "Minimal pair: curled ṣ̌ against plain sh",
          examples: [
            { nl: "ښخ", en: "buried", note: "ṣ̌: 'ṣ̌akh'." },
            { nl: "شخ", en: "stiff, rigid", note: "sh: 'shakh'." },
          ],
        },
      ],
      pitfall: "Pick one system and keep it. Mixing 'paṣ̌to' with 'khəza' in one sentence sounds odd; a Kandahari ښ in every word, or a Peshawari kh in every word, both sound natural.",
    },
    // ------------------------------------------------------------------
    {
      id: "ts-dz",
      title: "څ and ځ: ts and dz",
      summary: "څ is ts (as in 'cats'), ځ is dz (as in 'adds'). Don't confuse them with چ (ch) and ج (j).",
      body: [
        "څ (ts) and ځ (dz) are single sounds, made with the tongue tip on the teeth: the end of 'cats' and of 'adds', but at the start of a word. They are very common: څه (what), څوک (who), څنګه (how), ځم (I go), ورځ (day).",
        "Don't mix them up with their neighbours چ (ch, as in 'church') and ج (j, as in 'jam'), which are made further back and sound 'wetter'. In the script, څ and ځ are ح with a small mark: three dots above for څ, a hamza above for ځ.",
        "In Peshawar and much of the north, څ often becomes a plain s and ځ a plain z: څنګه 'sanga', ځم 'zəm'. In Kandahar and Kabul you'll hear the full ts and dz.",
      ],
      rules: [
        {
          rule: "څ = ts",
          examples: [
            { nl: "څوک", en: "who", note: "'tsok'." },
            { nl: "څلور", en: "four", note: "'tsa-LOR'." },
            { nl: "څنګه", en: "how", note: "'TSAN-ga'." },
            { nl: "څو", en: "how many; a few", note: "'tso'." },
          ],
        },
        {
          rule: "ځ = dz",
          examples: [
            { nl: "ځای", en: "place", note: "'dzāy'." },
            { nl: "ځوان", en: "young", note: "'dzwān'." },
            { nl: "ورځ", en: "day", note: "'wradz', one syllable." },
            { nl: "پنځه", en: "five", note: "'pin-dza'." },
          ],
        },
        {
          rule: "Compare: چ = ch and ج = j",
          examples: [
            { nl: "چای", en: "tea", note: "ch: 'chāy'." },
            { nl: "جوړ", en: "well, healthy; built, made", note: "j: 'joṛ'. جوړ یې؟ means 'are you well?'." },
            { nl: "څوک", en: "who", note: "ts." },
            { nl: "چوک", en: "square, roundabout", note: "ch." },
          ],
        },
      ],
      pitfall: "English speakers turn initial ts into s and dz into z. Start with the t or d: 't-sok', 'd-zāy'.",
    },
    // ------------------------------------------------------------------
    {
      id: "back-consonants",
      title: "خ غ ک ګ ق and h: the back of the mouth",
      summary: "خ = kh, غ = gh (its voiced partner), ک = k, ګ = g, ق = q (often said as k). ه and ح are both plain h.",
      body: [
        "خ (kh) is a rough, scraping sound at the back of the mouth: the ch of Scottish 'loch' or German 'Bach'. غ (gh) is the same with the voice on, like quiet gargling or a French r. Many Pashto words differ only by these two: خر 'donkey', غر 'mountain'.",
        "ک is an ordinary k and ګ an ordinary hard g, as in 'go'. ق (q) is a k made deeper in the throat. It appears mostly in words from Arabic, and in everyday speech many Pashtuns simply say k: قلم 'qalam' or 'kalam'.",
        "ه and ح are both a plain English h in Pashto; the throaty Arabic ḥ is not used. Unlike in Kurdish, there is no difference between them in sound.",
      ],
      rules: [
        {
          rule: "خ = kh, the 'loch' sound",
          examples: [
            { nl: "خوب", en: "sleep; dream", note: "'khob'." },
            { nl: "خوار", en: "poor; worn out", note: "'khwār'." },
            { nl: "خبره", en: "word, talk", note: "'kha-ba-ra'." },
          ],
        },
        {
          rule: "غ = gh, the gargled sound",
          examples: [
            { nl: "غرمه", en: "noon, midday", note: "'ghar-ma'." },
            { nl: "غوښه", en: "meat", note: "'ghwa-ṣ̌a'." },
          ],
        },
        {
          rule: "Minimal pairs: kh against gh",
          explain: "Put a finger on your throat: it buzzes for غ but not for خ.",
          examples: [
            { nl: "خر", en: "donkey", note: "kh: 'khar'." },
            { nl: "غر", en: "mountain", note: "gh: 'ghar'." },
            { nl: "خوږ", en: "sweet", note: "kh: 'khwaẓ̌'." },
            { nl: "غوږ", en: "ear", note: "gh: 'ghwaẓ̌'." },
          ],
        },
        {
          rule: "ک = k, ګ = g, ق = q",
          examples: [
            { nl: "کال", en: "year", note: "k: 'kāl'." },
            { nl: "ګرم", en: "hot, warm", note: "g: 'garm'." },
            { nl: "قلم", en: "pen", note: "q: 'qa-LAM', often 'ka-LAM'." },
          ],
        },
        {
          rule: "ه and ح: both a plain h",
          examples: [
            { nl: "هلته", en: "there", note: "'HAL-ta'." },
            { nl: "خال", en: "mole, beauty spot", note: "kh: 'khāl'." },
            { nl: "حال", en: "state, condition", note: "plain h: 'hāl'. ستاسو حال څنګه دی؟ = how are you?" },
          ],
        },
      ],
      pitfall: "Don't turn خ into k or h. خال (a mole) and حال (your condition) are different words, and کال is a year.",
    },
    // ------------------------------------------------------------------
    {
      id: "loan-letters",
      title: "Loan letters: ث ص ض ظ ذ ط ح ع",
      summary: "Arabic loanwords keep their Arabic spelling, but Pashto reads ث ص as s, ذ ض ظ as z, ط as t, ح as h, and ع as a vowel break or nothing.",
      body: [
        "Pashto has borrowed many words from Arabic, mostly through Persian, and keeps their spelling. That gives it several letters for the same sound. You just have to learn which letter a word uses; the sound is easy.",
        "s: س ث ص. z: ز ذ ض ظ. t: ت ط. h: ه ح. ع (ʿayn) is usually not pronounced as a separate consonant: at the start of a word you just say the vowel, in the middle you make a small break or lengthen the vowel.",
        "These letters appear mostly in more formal or educated words, but some are everyday: ساعت (hour, watch), حساب (bill), عکس (photo).",
      ],
      rules: [
        {
          rule: "ث and ص = s",
          examples: [
            { nl: "ثانیه", en: "second (of time)", note: "'sā-ni-ya'." },
            { nl: "مثال", en: "example", note: "'mi-sāl'." },
            { nl: "صحت", en: "health", note: "'si-hat'." },
            { nl: "مصروف", en: "busy", note: "'mas-ruf'." },
          ],
        },
        {
          rule: "ذ ض ظ = z",
          examples: [
            { nl: "لذیذ", en: "delicious", note: "two ذ: 'la-ziz'." },
            { nl: "ضرور", en: "certainly, surely", note: "'za-rur'." },
            { nl: "حاضر", en: "present, ready", note: "'hā-zir'." },
            { nl: "نظر", en: "opinion, view", note: "'na-zar'." },
          ],
        },
        {
          rule: "ط = t, ح = h",
          examples: [
            { nl: "طیاره", en: "aeroplane", note: "'tay-yā-ra'." },
            { nl: "خط", en: "letter (mail); line", note: "'khat'." },
            { nl: "حساب", en: "bill, account", note: "'hi-sāb'." },
          ],
        },
        {
          rule: "ع: a vowel, a break, or nothing",
          examples: [
            { nl: "عمر", en: "age", note: "just the vowel: 'umr'." },
            { nl: "عکس", en: "photo", note: "'aks'." },
            { nl: "ساعت", en: "hour; watch, clock", note: "a small break: 'sā-AT', often just 'sāt'." },
            { nl: "معلم", en: "teacher", note: "'mu-al-lim'." },
          ],
        },
      ],
      pitfall: "Don't try to make Arabic throat sounds for ح and ع. Pashto doesn't, and over-careful Arabic pronunciation sounds bookish. A plain h and a plain vowel are right.",
    },
    // ------------------------------------------------------------------
    {
      id: "stress-aspect",
      title: "Stress: part of the word, and the key to aspect",
      summary: "Stress is not predictable from spelling and can change meaning. In verbs, stress on و- (wə-) marks the perfective: one finished action.",
      body: [
        "Pashto stress is free: it can fall on any syllable, and you have to learn it with the word. Many nouns are stressed at the end (پښتو paṣ̌TO, ډوډۍ ḍoḌƏY), but by no means all (دلته DƏLta, څنګه TSANga). Adjectives ending in -ay come in two kinds: stressed -ÁY (لېونی lewaNAY) and unstressed -ay (ستړی STƏṛay), and the two kinds make their feminine differently.",
        "The big job of stress is in verbs. Pashto distinguishes imperfective (ongoing, repeated) and perfective (a single, whole action). For most verbs the perfective adds the prefix و- (wə-), and the stress jumps onto it: ما خط لیکه 'I was writing a letter' (stress at the end, li-KƏ) against ما خط ولیکه 'I wrote a letter' (WƏ-likə).",
        "For verbs that start with a prefix like را- (towards me), کې- or پرې-, the stress alone does the job, with no change in spelling: راوړم is rāwṛə́m 'I bring' (imperfective) but rā́wṛəm 'that I bring' (perfective). Listen for where the voice goes up.",
      ],
      rules: [
        {
          rule: "Nouns: often final, but learn each one",
          examples: [
            { nl: "پښتو", en: "Pashto", note: "paṣ̌-TO." },
            { nl: "پښتون", en: "a Pashtun", note: "paṣ̌-TUN." },
            { nl: "ډوډۍ", en: "bread; a meal", note: "ḍo-ḌƏY." },
            { nl: "څنګه", en: "how", note: "TSAN-ga: stress at the start." },
          ],
        },
        {
          rule: "Two kinds of -ay: stressed and unstressed",
          examples: [
            { nl: "سړی", en: "man", note: "sa-ṚAY: stressed -ay." },
            { nl: "لېونی", en: "crazy (m)", note: "le-wa-NAY: stressed -ay, feminine لېونۍ." },
            { nl: "ستړی", en: "tired (m)", note: "STƏ-ṛay: unstressed -ay, feminine ستړې." },
            { nl: "وږی", en: "hungry (m)", note: "WƏ-ẓ̌ay: unstressed, feminine وږې." },
          ],
        },
        {
          rule: "Imperfective against perfective: the stress moves to و-",
          explain: "Play each pair back to back and listen for the jump.",
          examples: [
            { nl: "ما خط لیکه", en: "I was writing a letter", note: "imperfective: stress on the end, li-KƏ." },
            { nl: "ما خط ولیکه", en: "I wrote a letter", note: "perfective: stress on wə-, WƏ-li-kə." },
            { nl: "ما ډوډۍ خوړله", en: "I was eating (the meal)", note: "imperfective." },
            { nl: "ما ډوډۍ وخوړه", en: "I ate (the meal)", note: "perfective: WƏ-khwa-ṛa. The verb is feminine, agreeing with ډوډۍ." },
          ],
        },
        {
          rule: "The و- prefix in the present and in commands",
          examples: [
            { nl: "لیکم", en: "I write, I am writing", note: "imperfective present." },
            { nl: "ولیکم", en: "(that) I write (once)", note: "WƏ-li-kəm: perfective, used after 'want', 'must', and with به for the future." },
            { nl: "وګوره", en: "look! (one person)", note: "WƏ-go-ra." },
            { nl: "وخوره", en: "eat! (one person)", note: "WƏ-khwra." },
          ],
        },
      ],
      pitfall: "Don't stress the last syllable of every verb out of habit. The stressed و- is how a Pashtun hears 'I did it' rather than 'I was doing it'.",
    },
    // ------------------------------------------------------------------
    {
      id: "connected-speech",
      title: "Small words, numbers and regional accents",
      summary: "Weak pronouns (مې، دې، یې، مو) and little words (د، به، نه) lean on their neighbours. Count to ten, and know how Kandahar, Kabul and Peshawar differ.",
      body: [
        "Pashto has a set of tiny unstressed words that never stand alone: the weak pronouns مې 'me/my', دې 'you/your', یې 'him/her/them', مو 'us/you all', and particles like به (future, 'will'), د (of), نه (not). They are said with the word before or after them, as if part of it: کتاب مې واخیست sounds like 'ki-tāb-me-wā-khist'.",
        "Numbers are a great drill, because they use most of the hard sounds: څ in څلور, ځ in پنځه, ږ in شپږ, ې in درې. Bigger numbers count up with او 'and', but in all target text in this app numbers are written as words.",
        "This app follows the Kandahari-leaning standard. In Kabul you hear a mixed, central accent; in Peshawar ښ and ږ become kh and g, څ and ځ are often s and z, and a few vowels shift. Pashtuns are used to all of these and will understand you everywhere.",
      ],
      rules: [
        {
          rule: "Weak pronouns and little words lean on their neighbours",
          examples: [
            { nl: "زما نوم احمد دی", en: "my name is Ahmad", note: "'zmā num ah-MAD day'." },
            { nl: "ستا نوم څه دی؟", en: "what is your name?", note: "'stā num tsə day'." },
            { nl: "کتاب مې واخیست", en: "I bought the book", note: "مې 'me' leans on کتاب." },
            { nl: "پلار یې ډاکټر دی", en: "his/her father is a doctor", note: "یې 'ye' leans on پلار." },
            { nl: "د کابل ښار", en: "the city of Kabul", note: "د 'də' leans on کابل." },
            { nl: "په کور کې", en: "at home", note: "'pə kor ke': both little words are unstressed." },
          ],
        },
        {
          rule: "One to ten",
          examples: [
            { nl: "یو", en: "one", note: "'yaw'." },
            { nl: "دوه", en: "two", note: "'dwa'." },
            { nl: "درې", en: "three", note: "'dre'." },
            { nl: "څلور", en: "four", note: "'tsa-LOR'." },
            { nl: "پنځه", en: "five", note: "'pin-dza'." },
            { nl: "شپږ", en: "six", note: "'shpaẓ̌'." },
            { nl: "اووه", en: "seven", note: "'o-wə'." },
            { nl: "اته", en: "eight", note: "'a-tə'." },
            { nl: "نهه", en: "nine", note: "'nə-ha'." },
            { nl: "لس", en: "ten", note: "'las'." },
          ],
        },
        {
          rule: "Everyday phrases",
          examples: [
            { nl: "ښه یم، مننه", en: "I'm fine, thank you", note: "'ṣ̌ə yəm, ma-nə-NA'." },
            { nl: "هو", en: "yes", note: "'ho'." },
            { nl: "نه", en: "no", note: "'na'. As the little word 'not' before a verb it is a weak 'nə'." },
            { nl: "په مخه دې ښه", en: "goodbye (literally: may your way ahead be good)", note: "'pə ma-kha de ṣ̌ə'." },
          ],
        },
      ],
      pitfall: "Don't stress the little words. د، په، مې and یې are light and quick; the stress belongs to the content word next to them.",
    },
    // ------------------------------------------------------------------
    {
      id: "top-mistakes",
      title: "Top mistakes English speakers make",
      summary: "A checklist to come back to: the habits that make Pashto sound English.",
      body: [
        "1. Retroflexes: ټ ډ ړ need a curled tongue; ت د ر do not. 2. Long and short a: لاس (hand) is not لس (ten). 3. Word endings: ی, ې, ي, ۍ and ئ are different words, so say the end clearly.",
        "4. Inserted vowels: پلار and ستا start with two consonants, so don't add a vowel. 5. Final ه: it is -a or -ə, never an h. 6. Stress: learn it with the word, and put it on و- in the perfective.",
      ],
      rules: [
        {
          rule: "Quick check: one word for each trap",
          examples: [
            { nl: "ټول", en: "all", note: "curl the tongue for ṭ." },
            { nl: "لاس", en: "hand", note: "long ā: 'lās'." },
            { nl: "لس", en: "ten", note: "short a: 'las'." },
            { nl: "ستړې", en: "tired (f)", note: "a clear -e at the end." },
            { nl: "پلار", en: "father", note: "no vowel between p and l." },
            { nl: "کوټه", en: "room", note: "ends in -a, no h." },
            { nl: "ولیکه", en: "wrote it (one finished action)", note: "stress on WƏ-." },
          ],
        },
      ],
    },
  ],
  practice: [
    { nl: "سلام، څنګه یې؟", en: "Hello, how are you?", note: "ts in څنګه, a clear -e at the end of یې." },
    { nl: "ستړی مه شې!", en: "Hello! (to a man; literally: may you not be tired)", note: "unstressed -ay in ستړی, -e in شې." },
    { nl: "زما نوم احمد دی.", en: "My name is Ahmad.", note: "'zmā', two consonants at the start." },
    { nl: "زه د کابل یم.", en: "I'm from Kabul.", note: "unstressed د; KĀ-bul." },
    { nl: "دا ښار ډېر ښکلی دی.", en: "This city is very beautiful.", note: "ṣ̌ in ښار and ښکلی, ḍ in ډېر." },
    { nl: "ما پرون ډوډۍ وخوړه.", en: "I ate a meal yesterday.", note: "ergative ما; the verb is feminine to agree with ډوډۍ; stress on WƏ-." },
    { nl: "په کندهار کې اوړی ډېر ګرم وي.", en: "In Kandahar the summer is very hot.", note: "ṛ in اوړی; final ي = i in وي." },
    { nl: "زما ورور په پېښور کې اوسي.", en: "My brother lives in Peshawar.", note: "'wror' in one syllable; e in پېښور." },
    { nl: "دا مڼې ډېرې خوږې دي.", en: "These apples are very sweet.", note: "ṇ in مڼې; feminine plural -e on all three words." },
    { nl: "ښځې او سړي په بازار کې دي.", en: "The women and the men are at the market.", note: "-e in ښځې against -i in سړي." },
    { nl: "زما غوږ خوږېږي.", en: "My ear hurts.", note: "gh in غوږ against kh in خوږېږي." },
    { nl: "ټول ماشومان ښوونځي ته ځي.", en: "All the children go to school.", note: "ṭ in ټول; ښوونځی becomes ښوونځي after ته." },
    { nl: "دا کوټه ډېره لویه او روښانه ده.", en: "This room is very big and bright.", note: "ṭ in کوټه, ḍ in ډېره, ṣ̌ in روښانه; feminine -a endings agree with کوټه." },
    { nl: "لاس مې ټپي دی، ډاکټر ته ځم.", en: "My hand is hurt, I'm going to the doctor.", note: "long ā in لاس; ṭ in ټپي; ḍ and ṭ in ډاکټر." },
    { nl: "مهرباني وکړئ، یو څه ورو خبرې وکړئ.", en: "Please speak a little more slowly.", note: "-əy (ئ) on both polite verbs." },
    { nl: "مننه، په مخه دې ښه!", en: "Thank you, goodbye!", note: "the weak pronoun دې leans on مخه." },
  ],
};
