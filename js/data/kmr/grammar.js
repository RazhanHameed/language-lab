// Grammar capsules — Northern Kurdish (Kurmanji), Latin (Hawar) script.
// Short, pattern-based explanations in English; every example sentence is Kurmanji.
// (`nl` = target-language slot; here it holds Kurmanji written in Latin script.)
window.__DECK = window.__DECK || {};
window.__DECK.kmr = window.__DECK.kmr || {};
window.__DECK.kmr.GRAMMAR = [
  {
    id: "g_v2",
    title: "Word order: the verb comes LAST (S-O-V)",
    blurb: "Kurdish is a Subject-Object-Verb language — the verb closes the sentence.",
    body:
      "Where English puts the verb straight after the subject ('I eat bread'), Kurmanji puts the object first and the verb at the very end ('I bread eat'). Time and place words also sit before the verb. Train your ear to wait for the action word — it arrives last.",
    examples: [
      { nl: "Ez nan dixwim.", en: "I eat bread. (lit. I bread eat)", tag: "Subject - Object - Verb" },
      { nl: "Ew pirtûkê dixwîne.", en: "He reads the book. (lit. He the-book reads)", tag: "Verb still last" },
      { nl: "Em sibê diçin bajêr.", en: "We're going to town tomorrow.", tag: "Time word sits before the verb" },
    ],
    pitfall: "Don't copy English order. The finite verb almost always lands at the very end of the clause: 'I bread eat', not 'I eat bread'.",
  },
  {
    id: "g_modal",
    title: "The present tense: di- prefix + personal endings",
    blurb: "Build the present tense by stacking di- onto the present stem, then adding a personal ending.",
    body:
      "Kurmanji verbs conjugate as: di- (marks the present) + PRESENT STEM + PERSONAL ENDING. The endings are -im (I), -î (you), -e (he/she), -in (we/you-pl/they). Learn one verb this way and the whole system opens up. Example: kirin 'to do', present stem -k-.",
    examples: [
      { nl: "Ez dikim / Tu dikî / Ew dike", en: "I do / you do / he-she does", tag: "di + k + -im / -î / -e" },
      { nl: "Em dikin / Hûn dikin / Ew dikin", en: "we / you (pl) / they do", tag: "-in for all three plurals" },
      { nl: "Ez niha diçim.", en: "I'm going now.", tag: "di + ç (stem of 'to go') + im" },
      { nl: "Hûn çi dixwin?", en: "What are you (pl) eating?", tag: "di + xw (eat) + in" },
    ],
    pitfall: "The di- prefix marks the present. In the negative it is REPLACED by na-: dikim 'I do' becomes nakim 'I don't do' — never 'nadikim'.",
  },
  {
    id: "g_dehet",
    title: "The ezafe linker (-ê / -a / -ên)",
    blurb: "A little linker glues a noun to its adjective or owner — and its shape depends on the noun's gender and number.",
    body:
      "To say 'my house' or 'the pretty girl', Kurmanji links the two words with an ezafe vowel: NOUN-linker MODIFIER. Unlike Sorani's single -î, the Kurmanji linker shows GENDER and NUMBER: -ê after a masculine noun, -a after a feminine noun, -ên for any plural.",
    examples: [
      { nl: "birayê min", en: "my brother (bira is masculine)", tag: "masculine noun → -ê" },
      { nl: "mala min", en: "my house (mal is feminine)", tag: "feminine noun → -a" },
      { nl: "keça delal", en: "the lovely girl (keç is feminine)", tag: "fem noun → adjective, -a" },
      { nl: "hevalên min", en: "my friends", tag: "plural → -ên" },
    ],
    pitfall: "The linker isn't optional, and it isn't one-size-fits-all: pick -ê (m), -a (f), or -ên (pl). Saying 'mal min' for 'my house' is broken — it must be 'mala min'.",
  },
  {
    id: "g_neg",
    title: "Negation: na- / ne-",
    blurb: "Negate the present with na-, and the past / subjunctive with ne-. 'Is not' is 'ne … e' or 'nîne'.",
    body:
      "For present-tense verbs, swap the di- prefix for na-. For past-tense and subjunctive verbs, prefix ne-. The verb 'to be' negates as 'ne … e' (or the fused form nîne). The negative always sits at the FRONT of the verb.",
    examples: [
      { nl: "Ez naçim.", en: "I'm not going.", tag: "diçim → naçim (present na-)" },
      { nl: "Ez naxwim.", en: "I don't eat.", tag: "dixwim → naxwim" },
      { nl: "Ev ne baş e.", en: "This is not good.", tag: "'ne … e' negates 'to be'" },
      { nl: "Ez nehatim.", en: "I didn't come.", tag: "hatim → nehatim (past ne-)" },
    ],
    pitfall: "Present uses na-, past/subjunctive uses ne- — don't mix them. And 'to be' is negated by wrapping 'ne … e' around it: 'ne baş e', not 'nebaşe'.",
  },
  {
    id: "g_separable",
    title: "Past transitive verbs agree with the OBJECT",
    blurb: "In the PAST, a transitive verb agrees with its object, and the doer moves into the oblique case — this is split ergativity.",
    body:
      "Present and past behave differently. In the PRESENT the verb agrees with the SUBJECT (which stays in the direct case: ez, tu…). In the PAST of a transitive verb the doer takes the OBLIQUE case (min, te…) and the verb agrees with the OBJECT instead. Watch the verb ending track the object in the pairs below.",
    examples: [
      { nl: "Ez nan dixwim.", en: "I eat bread. (present)", tag: "'ez' direct, verb agrees with 'ez'" },
      { nl: "Min nan xwar.", en: "I ate bread. (past)", tag: "'min' oblique, verb agrees with 'nan'" },
      { nl: "Min tu dîtî.", en: "I saw you.", tag: "verb dîtî agrees with 'tu' (the object)" },
      { nl: "Te ez dîtim.", en: "You saw me.", tag: "'te' oblique doer, dîtim agrees with 'ez' (me)" },
    ],
    pitfall: "In the past transitive, don't keep the doer in the direct case or make the verb agree with it. It's 'Min tu dîtî' (I saw you) — oblique 'min', and the verb follows 'tu', not 'min'.",
  },
  {
    id: "g_pronouns",
    title: "Personal pronouns and the oblique case",
    blurb: "Kurmanji pronouns come in two sets: direct (ez, tu, ew…) for present subjects, and oblique (min, te, wî/wê…) for objects, possessors, and past agents.",
    body:
      "Direct case: ez (I), tu (you), ew (he/she/it), em (we), hûn (you pl), ew (they). Oblique case: min, te, wî (m) / wê (f), me, we, wan. Use the direct set only for the subject of a present verb; switch to the oblique for objects, for possession, and for the agent of a past transitive verb.",
    examples: [
      { nl: "ez / tu / ew", en: "I / you / he-she (direct)", tag: "direct case = subject of a present verb" },
      { nl: "min / te / wî, wê", en: "me / you / him, her (oblique)", tag: "oblique = objects, possessors, past agents" },
      { nl: "em / hûn / ew → me / we / wan", en: "we / you (pl) / they → their oblique forms", tag: "plural pronouns and their oblique" },
      { nl: "mala wî / mala wê", en: "his house / her house", tag: "oblique marks the possessor (and shows gender)" },
    ],
    pitfall: "'ez' is only for the subject of a present verb. The moment the pronoun is an object, a possessor, or the doer of a past verb, switch to the oblique: min, te, wî/wê, wan.",
  },
  {
    id: "g_word_order",
    title: "Questions and adpositions keep the verb last",
    blurb: "Question words don't move the verb, and Kurmanji wraps its nouns in circumpositions (di … de, bi … re) — but the verb still closes the clause.",
    body:
      "Asking a question does NOT trigger English-style inversion: the question word simply fills a normal slot and the verb stays final. Kurmanji also uses circumpositions — a piece before the noun and a piece after it (di … de 'in', bi … re 'with', ji … re 'to/for') — and these phrases still precede the verb.",
    examples: [
      { nl: "Tu çi dixwî?", en: "What do you eat? (lit. You what eat?)", tag: "question word in the object slot, verb last" },
      { nl: "Ew ku diçe?", en: "Where is he going?", tag: "no inversion — verb still final" },
      { nl: "Ew di malê de dimîne.", en: "He stays in the house.", tag: "circumposition di … de wraps 'house'" },
      { nl: "Ez bi te re têm.", en: "I'm coming with you.", tag: "circumposition bi … re = 'with'" },
    ],
    pitfall: "Don't invert for questions ('Dixwî tu çi?' is wrong). Keep normal order and just add the question word: 'Tu çi dixwî?'.",
  },
  {
    id: "g_pronunciation",
    title: "The Kurmanji sounds and Latin alphabet",
    blurb: "The Latin letters aren't English: x, q, ç, ş are their own sounds, and the six vowels e/ê, i/î, u/û must stay apart.",
    body:
      "Kurmanji uses the Hawar Latin alphabet, where each letter has a fixed value: x = raspy KH, q = a deep-throat Q, c = J (as in 'jam'), ç = CH, ş = SH, j = 'zh' (measure). Vowels come in pairs: short e/i/u versus long-tense ê/î/û — and mixing them up changes the word.",
    examples: [
      { nl: "xanî", en: "house ( x = throaty KH )", tag: "x is NOT English 'x' — it's a raspy KH" },
      { nl: "qelem", en: "pen ( q = deep-throat Q )", tag: "q is deeper than k (kar vs qar)" },
      { nl: "çav / şev", en: "eye / night", tag: "ç = CH (church), ş = SH (ship)" },
      { nl: "sêv / şîr / dûr", en: "apple / milk / far", tag: "the tense vowels ê (ay), î (ee), û (oo)" },
      { nl: "kur / kûr", en: "son / deep", tag: "short u vs long û — a real minimal pair" },
    ],
    pitfall: "Keep the six vowels apart: 'kur' (son) is not 'kûr' (deep). And remember c = J: 'ciwan' is 'jiwan' (young/beautiful), while ç = CH.",
  },
  {
    id: "g_plurals",
    title: "Plurals, the indefinite -ek, and noun gender",
    blurb: "Indefinite = -ek 'a/an'; the plural (oblique) ending is -an. And every Kurmanji noun is either masculine or feminine.",
    body:
      "Kurmanji marks 'a/an' with the suffix -ek. The plural surfaces mainly in the oblique case as -an (the bare direct plural often looks like the singular, with number shown by the ezafe -ên). Crucially, every noun has GENDER — masculine or feminine — which rarely shows on the noun itself but drives the ezafe and the oblique.",
    examples: [
      { nl: "pirtûk → pirtûkek", en: "book → a book", tag: "-ek = 'a/an' (indefinite)" },
      { nl: "pirtûk → pirtûkan", en: "book → books (oblique)", tag: "-an = plural, oblique case" },
      { nl: "bav / dê", en: "father / mother", tag: "gender: bav is masculine, dê is feminine" },
      { nl: "bavê min / dayika min", en: "my father / my mother", tag: "gender shows in the linker: -ê (m) vs -a (f)" },
    ],
    pitfall: "Unlike Sorani, Kurmanji nouns have GENDER. You rarely see it on the noun itself — it surfaces in the ezafe linker and the oblique — so learn each noun together with its gender.",
  },
];
