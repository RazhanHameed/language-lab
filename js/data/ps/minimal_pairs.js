// Pashto (standard Afghan, Arabic script) minimal pairs for ear training. Each
// pair targets a contrast English speakers conflate: the retroflex ټ ډ ړ vs
// dental ت د and tapped ر, curled ښ vs plain ش, kh vs gh, ts vs ch, long ā vs
// short a, and the word-final yes (ی -ay, ي -i, ې -e, ۍ -əy, ئ -əy) that carry
// gender, number and person. Format:
//   { a: { nl, en }, b: { nl, en }, contrast: <descriptive label> }
// During the drill we play one of the two and the user picks which they heard.
// (`nl` = target-language slot, holds Pashto in Arabic script.)
window.__DECK.ps.MINIMAL_PAIRS = [
  // ---- ټ (retroflex ṭ) vs ت (dental t) ----
  { a: { nl: "ټول", en: "all, whole" },  b: { nl: "تول", en: "weight, weighing" }, contrast: "retroflex ṭ vs dental t" },
  { a: { nl: "پټ", en: "hidden" },       b: { nl: "پت", en: "honour, dignity" },  contrast: "retroflex ṭ vs dental t" },

  // ---- ډ (retroflex ḍ) vs د (dental d) ----
  { a: { nl: "ډال", en: "shield" },      b: { nl: "دال", en: "lentils" },          contrast: "retroflex ḍ vs dental d" },

  // ---- ړ (retroflex flap ṛ) vs ر (tap r) ----
  { a: { nl: "زوړ", en: "old" },         b: { nl: "زور", en: "force, strength" },  contrast: "retroflex ṛ vs tap r" },
  { a: { nl: "پوړ", en: "floor, storey" }, b: { nl: "پور", en: "loan, debt" },     contrast: "retroflex ṛ vs tap r" },
  { a: { nl: "وړ", en: "worthy, fitting" }, b: { nl: "ور", en: "door, gate" },     contrast: "retroflex ṛ vs tap r" },

  // ---- ښ (curled ṣ̌) vs ش (plain sh) ----
  { a: { nl: "ښخ", en: "buried" },       b: { nl: "شخ", en: "stiff, rigid" },     contrast: "curled ṣ̌ vs plain sh" },

  // ---- خ (kh) vs غ (gh) : voiceless vs voiced ----
  { a: { nl: "خر", en: "donkey" },       b: { nl: "غر", en: "mountain" },         contrast: "kh vs gh" },
  { a: { nl: "خوږ", en: "sweet" },       b: { nl: "غوږ", en: "ear" },             contrast: "kh vs gh" },

  // ---- خ (kh) vs ح (plain h) ----
  { a: { nl: "خال", en: "mole, beauty spot" }, b: { nl: "حال", en: "state, condition" }, contrast: "kh vs h" },

  // ---- څ (ts) vs چ (ch) ----
  { a: { nl: "څوک", en: "who" },         b: { nl: "چوک", en: "square, roundabout" }, contrast: "ts vs ch" },

  // ---- ا (long ā) vs unwritten short a ----
  { a: { nl: "لاس", en: "hand" },        b: { nl: "لس", en: "ten" },              contrast: "long ā vs short a" },
  { a: { nl: "وار", en: "turn (as in 'my turn')" }, b: { nl: "ور", en: "door, gate" }, contrast: "long ā vs short a" },
  { a: { nl: "مال", en: "goods, property" }, b: { nl: "مل", en: "companion" },     contrast: "long ā vs short a" },

  // ---- ی (-ay) vs ي (-i) : singular vs plural/oblique ----
  { a: { nl: "سړی", en: "man" },         b: { nl: "سړي", en: "men" },             contrast: "final -ay (ی) vs -i (ي)" },
  { a: { nl: "زلمی", en: "young man" },  b: { nl: "زلمي", en: "young men" },      contrast: "final -ay (ی) vs -i (ي)" },

  // ---- ی (-ay) vs ې (-e) : masculine vs feminine ----
  { a: { nl: "ستړی", en: "tired (man)" }, b: { nl: "ستړې", en: "tired (woman)" }, contrast: "final -ay (ی) vs -e (ې)" },
  { a: { nl: "وږی", en: "hungry (man)" }, b: { nl: "وږې", en: "hungry (woman)" }, contrast: "final -ay (ی) vs -e (ې)" },

  // ---- ی (-ay) vs ۍ (-əy) : masculine vs feminine ----
  { a: { nl: "سپی", en: "dog" },         b: { nl: "سپۍ", en: "female dog" },      contrast: "final -ay (ی) vs -əy (ۍ)" },
  { a: { nl: "لېونی", en: "crazy (man)" }, b: { nl: "لېونۍ", en: "crazy (woman)" }, contrast: "final -ay (ی) vs -əy (ۍ)" },

  // ---- verb endings: ې (-e) vs ئ (-əy), ي (-i) vs ې (-e) ----
  { a: { nl: "ځې", en: "you go (one person)" }, b: { nl: "ځئ", en: "you go (several, or polite)" }, contrast: "final -e (ې) vs -əy (ئ)" },
  { a: { nl: "ګوري", en: "he/she looks" }, b: { nl: "ګورې", en: "you look (one person)" }, contrast: "final -i (ي) vs -e (ې)" },
];
