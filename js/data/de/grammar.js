// Grammar capsules — short, pattern-based explanations.
// Use as a reference; the real learning happens through the pattern sentences.
// (`nl` = target-language slot, holds German.)
window.__DECK.de.GRAMMAR = [
  {
    id: "g_v2",
    title: "The V2 rule",
    blurb: "In German main clauses the conjugated verb ALWAYS sits in second position.",
    body:
      "If you start a sentence with anything other than the subject — a time word, a place, an object — the verb stays in slot 2 and the subject moves to slot 3. Dutch and German share this rule, and it's the bug that exposes a non-native speaker fastest.",
    examples: [
      { nl: "Ich gehe morgen zur Arbeit.", en: "I'm going to work tomorrow.", tag: "Standard SVO" },
      { nl: "Morgen gehe ich zur Arbeit.", en: "Tomorrow I'm going to work.", tag: "Time first → verb stays in slot 2 → subject moves" },
      { nl: "Zur Arbeit gehe ich morgen.", en: "To work I'm going tomorrow.", tag: "Place first — same rule" },
    ],
    pitfall: "Don't say 'Morgen ich gehe…' (English-style). The finite verb never slides to third position.",
  },
  {
    id: "g_modal",
    title: "Modal verbs send the action to the END",
    blurb: "Modal verbs (wollen, können, müssen, dürfen, sollen, mögen) push the main verb's infinitive to the final position.",
    body:
      "When you use a modal, the modal sits in slot 2 and the actual action verb (in infinitive form) jumps to the very end. Same pattern as Dutch.",
    examples: [
      { nl: "Ich will essen.", en: "I want to eat.", tag: "Just the modal + infinitive" },
      { nl: "Ich will die Suppe essen.", en: "I want to eat the soup.", tag: "Object slips between" },
      { nl: "Ich will heute die Suppe essen.", en: "I want to eat the soup today.", tag: "More content in the middle, infinitive still last" },
      { nl: "Kannst du mir kurz helfen?", en: "Can you help me for a sec?", tag: "Question form — modal first, infinitive last" },
    ],
    pitfall: "Resist the English instinct to keep verbs together. The infinitive ALWAYS goes to the end with modals.",
  },
  {
    id: "g_dehet",
    title: "der, die or das?",
    blurb: "German nouns are der (m), die (f), or das (n). Three genders — and you must learn each one with the noun.",
    body:
      "German has three grammatical genders and, unlike Dutch's two, there's no 'safe bet'. There are useful patterns, but the reliable strategy is to memorise every noun together with its article.",
    examples: [
      { nl: "der Mann, der Tisch, der Kaffee", en: "(masculine)", tag: "'der' words" },
      { nl: "die Frau, die U-Bahn, die Wohnung", en: "(feminine)", tag: "All -ung / -heit / -keit nouns are 'die'" },
      { nl: "das Haus, das Kind, das Wasser", en: "(neuter)", tag: "'das' words" },
      { nl: "das Mädchen, das Brötchen", en: "(any -chen diminutive)", tag: "ALL -chen / -lein diminutives are 'das'" },
    ],
    pitfall: "Diminutives in -chen/-lein are always 'das', regardless of real-world gender: 'das Mädchen' (the girl) is grammatically neuter.",
  },
  {
    id: "g_neg",
    title: "nicht vs kein",
    blurb: "Two words for 'not' — and choosing the wrong one is the most common German mistake.",
    body:
      "Use KEIN to negate indefinite nouns (a/some/any). Use NICHT to negate verbs, adjectives, definite nouns, and almost everything else. 'kein' inflects like 'ein'.",
    examples: [
      { nl: "Ich habe keine Zeit.", en: "I don't have time.", tag: "kein → indefinite noun" },
      { nl: "Ich habe keine Ahnung.", en: "I have no idea.", tag: "kein → indefinite noun" },
      { nl: "Ich komme nicht.", en: "I'm not coming.", tag: "nicht → negates the verb" },
      { nl: "Das ist nicht lecker.", en: "It's not tasty.", tag: "nicht → negates an adjective" },
      { nl: "Ich kenne den Mann nicht.", en: "I don't know that man.", tag: "nicht → definite object, comes at the end" },
    ],
    pitfall: "Never say 'nicht ein' — it's always 'kein' for 'not a/any'. And 'kein' takes ein-endings: kein / keine / keinen.",
  },
  {
    id: "g_separable",
    title: "Separable verbs",
    blurb: "Many German verbs split into two pieces in main clauses. The prefix flies to the END.",
    body:
      "Verbs like 'aufstehen' (to get up), 'mitkommen' (to come along), 'einkaufen' (to shop), 'ankommen' (to arrive) are 'separable'. In a present-tense main clause the prefix detaches and lands at the end of the clause.",
    examples: [
      { nl: "Ich stehe um 7 Uhr auf.", en: "I get up at 7.", tag: "aufstehen → 'stehe...auf'" },
      { nl: "Kommst du mit?", en: "Are you coming along?", tag: "mitkommen → 'kommst...mit'" },
      { nl: "Ich kaufe heute ein.", en: "I'm doing the shopping today.", tag: "einkaufen → 'kaufe...ein'" },
      { nl: "Ich will kurz einkaufen.", en: "I want to run and shop quickly.", tag: "With a modal, it stays whole at the end" },
    ],
    pitfall: "With a modal, separable verbs DON'T split — the full infinitive sits at the end intact. In the perfect tense the -ge- lands inside: 'aufgestanden', 'eingekauft'.",
  },
  {
    id: "g_pronouns",
    title: "du vs Sie: informal and formal 'you'",
    blurb: "German has two words for 'you', and picking the wrong one is a real social signal.",
    body:
      "'du' is informal singular (friends, family, kids, peers — and often colleagues in Berlin tech). 'Sie' (always capitalised) is formal (strangers, older people, officials, most service settings). 'ihr' is informal plural. Moving from 'Sie' to 'du' is a small ceremony: 'Wollen wir uns duzen?'.",
    examples: [
      { nl: "Wie heißt du?", en: "What's your name? (informal)", tag: "du — a peer at a party" },
      { nl: "Wie heißen Sie?", en: "What's your name? (formal)", tag: "Sie — at the Bürgeramt" },
      { nl: "Kommt ihr mit?", en: "Are you all coming?", tag: "ihr — informal plural" },
      { nl: "Möchten Sie etwas trinken?", en: "Would you like something to drink?", tag: "Sie — formal / service" },
    ],
    pitfall: "When unsure, default to 'Sie' with strangers and older people. Berlin startups and casual cafés often use 'du' — let the setting or the other person cue you.",
  },
  {
    id: "g_word_order",
    title: "Time–Manner–Place (TMP)",
    blurb: "When stacking adverbials, German orders them: Time, then Manner, then Place.",
    body:
      "Where English is fairly free, German likes a strict Time → Manner → Place order in the middle of the sentence (the formal rule is 'te-ka-mo-lo': temporal, causal, modal, local).",
    examples: [
      { nl: "Ich fahre morgen mit der Bahn ins Büro.", en: "I'm going to the office by train tomorrow.", tag: "Time (morgen) → Manner (mit der Bahn) → Place (ins Büro)" },
      { nl: "Wir essen samstags gemütlich bei Pieter.", en: "We eat cosily at Pieter's on Saturdays.", tag: "Time → Manner → Place" },
    ],
    pitfall: "English speakers want to say 'ins Büro mit der Bahn morgen' — wrong order. TMP is the rule.",
  },
  {
    id: "g_pronunciation",
    title: "The German sounds (ch, r, ä ö ü, ß)",
    blurb: "The sounds that give you away: the two 'ch's, the uvular R, the umlauts, and ß.",
    body:
      "'ch' has two flavours: a soft 'ich-laut' (after e, i, ä, ö, ü, ei) and a throaty 'ach-laut' (after a, o, u, au). R is made at the back of the throat, and vocalises to 'uh' at word end ('-er'). ß is just a sharp 'ss'.",
    examples: [
      { nl: "ich, nicht, Milch", en: "(soft ch — a whispered hiss)", tag: "ich-laut: front of the mouth" },
      { nl: "acht, Nacht, Buch", en: "(throaty ch)", tag: "ach-laut: from the back of the throat" },
      { nl: "schön, hören, Öl", en: "(ö — round lips, say 'ay')", tag: "Round your lips like 'oh', then say 'ay'" },
      { nl: "über, Tür, fünf", en: "(ü — round lips, say 'ee')", tag: "Round your lips like 'oo', then say 'ee'" },
      { nl: "Straße, heiß, weiß", en: "(ß — a crisp 'ss')", tag: "Also: initial st/sp = 'sht'/'shp' — 'Straße' = 'shtrahse'" },
    ],
    pitfall: "Don't flatten both 'ch' sounds into English 'k' or 'sh'. 'ich' is soft, 'ach' is throaty — keep them apart.",
  },
  {
    id: "g_plurals",
    title: "Plurals: -e, -en, -er, -s and umlauts",
    blurb: "German has five plural patterns and often stacks an umlaut on top. There's no single default.",
    body:
      "Common patterns: many masculine/neuter nouns add -e, often with an umlaut (Tisch → Tische, Stuhl → Stühle). Feminine nouns and -e nouns usually add -(e)n (Frau → Frauen, Lampe → Lampen). Many neuters add -er + umlaut (Kind → Kinder, Haus → Häuser). Loanwords add -s (Auto → Autos). Some don't change at all (Fenster → Fenster).",
    examples: [
      { nl: "der Tisch → die Tische", en: "table → tables", tag: "Masculine, add -e" },
      { nl: "die Frau → die Frauen", en: "woman → women", tag: "Feminine, add -en" },
      { nl: "das Kind → die Kinder", en: "child → children", tag: "Neuter, add -er" },
      { nl: "das Auto → die Autos", en: "car → cars", tag: "Loanword, add -s" },
      { nl: "der Apfel → die Äpfel", en: "apple → apples", tag: "Umlaut only, no ending" },
    ],
    pitfall: "Unlike Dutch's tidy -en/-s split, German plurals are irregular enough that you should learn each noun's plural WITH its article: 'das Haus, die Häuser'.",
  },
];
