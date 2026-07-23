// Grammar capsules — short, pattern-based explanations.
// Use as a reference; the real learning happens through the pattern sentences.
window.__DECK.nl.GRAMMAR = [
  {
    id: "g_v2",
    title: "The V2 rule",
    blurb: "In Dutch main clauses the conjugated verb ALWAYS sits in second position.",
    body:
      "If you start a sentence with anything other than the subject — a time word, a place, an object — the verb stays in slot 2 and the subject moves to slot 3. This is the single biggest difference between Dutch and English word order, and the bug that exposes a non-native speaker fastest.",
    examples: [
      { nl: "Ik ga morgen naar werk.", en: "I'm going to work tomorrow.", tag: "Standard SVO" },
      { nl: "Morgen ga ik naar werk.", en: "Tomorrow I'm going to work.", tag: "Time first → verb stays in slot 2 → subject moves" },
      { nl: "Naar werk ga ik morgen.", en: "To work I'm going tomorrow.", tag: "Place first — same rule" },
    ],
    pitfall: "Don't say 'Morgen ik ga…' (English-style). Slot 2 is sacred.",
  },
  {
    id: "g_modal",
    title: "Modal verbs send the action to the END",
    blurb: "Modal verbs (willen, kunnen, moeten, mogen, zullen) push the main verb's infinitive to the final position.",
    body:
      "When you use a modal, the modal sits in slot 2 and the actual action verb (in infinitive form) jumps to the very end. This is the same pattern as German.",
    examples: [
      { nl: "Ik wil eten.", en: "I want to eat.", tag: "Just the modal + infinitive" },
      { nl: "Ik wil de soep eten.", en: "I want to eat the soup.", tag: "Object slips between" },
      { nl: "Ik wil vandaag de soep eten.", en: "I want to eat the soup today.", tag: "More content in the middle, infinitive still last" },
      { nl: "Kan je me even helpen?", en: "Can you help me for a sec?", tag: "Question form — modal first, infinitive last" },
    ],
    pitfall: "Resist English instinct to keep verbs together. The infinitive ALWAYS goes to the end with modals.",
  },
  {
    id: "g_dehet",
    title: "de or het?",
    blurb: "Dutch nouns are 'de' or 'het'. ~75% are 'de'. There are patterns, but you'll memorise.",
    body:
      "Dutch has only two articles. The bad news: there's no shortcut to know which one applies. The good news: 'de' is the safe bet — when in doubt, say 'de' and you'll be right ~3 times out of 4.",
    examples: [
      { nl: "de man, de vrouw, de tafel, de fiets", en: "(common, plural, & most things)", tag: "'de' words" },
      { nl: "het huis, het kind, het brood, het water", en: "(diminutives, neuter, abstracts)", tag: "'het' words" },
      { nl: "het meisje, het broodje, het kopje", en: "(any -je diminutive)", tag: "ALL diminutives are 'het'" },
    ],
    pitfall: "Diminutives ending in -je are always 'het', regardless of the base word's gender. 'de man' → 'het mannetje'.",
  },
  {
    id: "g_neg",
    title: "niet vs geen",
    blurb: "Two words for 'not' — and choosing the wrong one is the most common Dutch mistake.",
    body:
      "Use GEEN to negate indefinite nouns (a/some/any). Use NIET to negate verbs, adjectives, definite nouns, and almost everything else.",
    examples: [
      { nl: "Ik heb geen tijd.", en: "I don't have time.", tag: "geen → indefinite noun" },
      { nl: "Ik heb geen idee.", en: "I have no idea.", tag: "geen → indefinite noun" },
      { nl: "Ik kom niet.", en: "I'm not coming.", tag: "niet → negates the verb" },
      { nl: "Het is niet lekker.", en: "It's not tasty.", tag: "niet → negates an adjective" },
      { nl: "Ik ken die man niet.", en: "I don't know that man.", tag: "niet → definite object, comes at the end" },
    ],
    pitfall: "Never say 'niet een' — it's always 'geen' for 'not a/any'.",
  },
  {
    id: "g_separable",
    title: "Separable verbs",
    blurb: "Many Dutch verbs split into two pieces in main clauses. The prefix flies to the END.",
    body:
      "Verbs like 'opstaan' (to get up), 'meegaan' (to come along), 'afrekenen' (to settle up), 'inchecken' (to check in) are 'separable'. In a present-tense main clause, the prefix detaches and lands at the end of the clause.",
    examples: [
      { nl: "Ik sta om 7 uur op.", en: "I get up at 7.", tag: "opstaan → 'sta...op'" },
      { nl: "Ga je mee?", en: "Are you coming with?", tag: "meegaan → 'ga...mee'" },
      { nl: "Ik check nu in.", en: "I'm checking in now.", tag: "inchecken → 'check...in'" },
      { nl: "Ik wil even afrekenen.", en: "I'd like to settle up.", tag: "With a modal, it stays whole at the end" },
    ],
    pitfall: "When using a modal, separable verbs DON'T split — the full infinitive sits at the end intact.",
  },
  {
    id: "g_pronouns",
    title: "Pronoun pairs: stressed vs unstressed",
    blurb: "Dutch pronouns have two forms. You almost always want the unstressed one.",
    body:
      "'jij/je', 'wij/we', 'zij/ze', 'mij/me', 'haar/'r' — every personal pronoun has a stressed and unstressed form. In normal speech, use the unstressed (shorter) form. Reserve the stressed form for emphasis or contrast.",
    examples: [
      { nl: "Wat doe je?", en: "What are YOU doing?", tag: "Default — 'je' (unstressed)" },
      { nl: "Wat doe JIJ hier?", en: "What are YOU doing here? (emphasis)", tag: "Stressed — for contrast" },
      { nl: "We gaan naar huis.", en: "We're going home.", tag: "Default 'we'" },
      { nl: "Geef me het zout.", en: "Pass me the salt.", tag: "Default 'me' — not 'mij'" },
    ],
    pitfall: "Beginners over-use stressed forms ('jij', 'mij') because textbooks teach those first. Sounds robotic.",
  },
  {
    id: "g_word_order",
    title: "Time–Manner–Place (TMP)",
    blurb: "When stacking adverbials, Dutch orders them: Time, then Manner, then Place.",
    body:
      "Where English is fairly free, Dutch likes a strict TMP order in the middle of the sentence.",
    examples: [
      { nl: "Ik ga morgen met de tram naar kantoor.", en: "I'm going to the office by tram tomorrow.", tag: "Time (morgen) → Manner (met de tram) → Place (naar kantoor)" },
      { nl: "We eten zaterdag gezellig bij Pieter.", en: "We're eating cosily at Pieter's on Saturday.", tag: "Time → Manner → Place" },
    ],
    pitfall: "English speakers want to say 'naar kantoor met de tram morgen' — wrong order. TMP is the rule.",
  },
  {
    id: "g_pronunciation",
    title: "The Dutch G (and other sounds)",
    blurb: "The signature Dutch sound is the harsh, throaty G — same as the J in Spanish 'mojito' on steroids.",
    body:
      "Dutch G is the world's most famous Dutch sound. Practise it on these words: goed, graag, gezellig, geld, goedemorgen. In southern accents (Limburg, Flanders) it softens. In Amsterdam it's harsh and proud.",
    examples: [
      { nl: "graag", en: "gladly", tag: "Throat-clearing G" },
      { nl: "gezellig", en: "cosy", tag: "Two G sounds in one word — the ultimate test" },
      { nl: "ij — wijn, fiets", en: "(diphthong like 'eye' but tighter)", tag: "Practise: rhyme with English 'mate' but shorter" },
      { nl: "ui — huis, ui", en: "(notoriously hard — like rounded 'ow')", tag: "No English equivalent. Round your lips, say 'ow' through them." },
      { nl: "eu — neus, leuk", en: "(like French 'eu')", tag: "Round your lips like 'oo' but say 'ay'" },
    ],
    pitfall: "Don't soften the G to a French 'r'. Lean into the harshness — that's the Amsterdam sound.",
  },
  {
    id: "g_plurals",
    title: "Plurals: -en or -s",
    blurb: "Most Dutch plurals add -en. Some add -s. There are patterns.",
    body:
      "Default: add -en (boek → boeken). Add -s when the word ends in unstressed -e, -el, -em, -en, -er (tafel → tafels, jongen → jongens), or after a vowel (foto → foto's).",
    examples: [
      { nl: "boek → boeken", en: "book → books", tag: "Default -en" },
      { nl: "tafel → tafels", en: "table → tables", tag: "Ends in -el → -s" },
      { nl: "appel → appels", en: "apple → apples", tag: "Ends in -el → -s" },
      { nl: "foto → foto's", en: "photo → photos", tag: "After a vowel, add 's" },
      { nl: "kind → kinderen", en: "child → children", tag: "Irregular — like English" },
    ],
    pitfall: "Spelling: short vowel before -en doubles the consonant: 'man → mannen', 'pen → pennen'. Long vowels drop one: 'naam → namen', 'boom → bomen'.",
  },
];
