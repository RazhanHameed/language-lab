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
      { nl: "Ik sta om zeven uur op.", en: "I get up at 7.", tag: "opstaan → 'sta...op'" },
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
  // ---- B1 grammar ----
  {
    id: "g_b1_perfectum",
    title: "The perfect tense: hebben or zijn + participle",
    blurb: "The everyday past tense: a helper verb in slot 2 and the past participle at the END.",
    body:
      "Use 'hebben' for most verbs and 'zijn' for (1) movement to a destination (gaan, komen, fietsen naar), (2) change of state (worden, opstaan, vallen) and (3) zijn, blijven, gebeuren. The participle is ge- + stem + -t/-d for regular verbs. Choose -t if the stem ends in t, k, f, s, ch or p ('t kofschip), else -d: werken → gewerkt, wonen → gewoond. Separable verbs put ge- in the middle (opgestaan); verbs with an unstressed prefix (ver-, be-, ont-) get no ge- (vergeten, bezocht). Unlike English 'have', Dutch uses the perfect for most finished events, even yesterday.",
    examples: [
      { nl: "Ik heb gisteren lang gewerkt.", en: "I worked a long time yesterday.", tag: "hebben + regular participle" },
      { nl: "Ze is naar huis gefietst.", en: "She cycled home.", tag: "movement with destination → zijn" },
      { nl: "Hij is ziek geworden.", en: "He became ill.", tag: "change of state → zijn" },
      { nl: "Wij hebben drie jaar in Rotterdam gewoond.", en: "We lived in Rotterdam for three years.", tag: "stem 'woon' ends in n → -d" },
      { nl: "Ze is om zeven uur opgestaan.", en: "She got up at seven.", tag: "separable: op-ge-staan" },
    ],
    pitfall: "Don't translate 'I have lived here since 2020' with a perfect: for something still going on Dutch uses the present tense — 'Ik woon hier sinds twee jaar'.",
  },
  {
    id: "g_b1_imperfectum",
    title: "The simple past (imperfectum)",
    blurb: "Used for stories, background and the verbs 'zijn', 'hebben' and the modals.",
    body:
      "Weak verbs add -te/-de to the stem (-ten/-den in the plural): werken → werkte, wonen → woonde ('t kofschip again). Strong verbs change their vowel and add nothing: gaan → ging(en), komen → kwam(en), zien → zag(en). The high-frequency ones are was/waren, had/hadden, kon, wilde, moest, mocht. In conversation the Dutch prefer the perfect for events but nearly always use the imperfect of zijn, hebben and modals. Stories mix both: imperfect for the scenery, perfect for the sequence of events.",
    examples: [
      { nl: "Het was druk en het regende.", en: "It was busy and it was raining.", tag: "Background in the imperfect" },
      { nl: "Ik wilde bellen, maar ik had geen tijd.", en: "I wanted to call, but I had no time.", tag: "Modal + hebben → imperfect" },
      { nl: "Vroeger fietste ik elke dag naar mijn werk.", en: "I used to cycle to work every day.", tag: "Habit in the past" },
      { nl: "Toen ik aankwam, was niemand er.", en: "When I arrived, no one was there.", tag: "Strong verb: aankomen → kwam aan" },
    ],
    pitfall: "Don't use the imperfect for every past event in conversation. 'Ik ging gisteren naar de dokter' is fine, but 'Ik ben gisteren naar de dokter gegaan' sounds more natural.",
  },
  {
    id: "g_b1_future",
    title: "Talking about the future: gaan, zullen or present",
    blurb: "Dutch has three common ways to talk about what is coming.",
    body:
      "The present tense plus a time word is the most common: 'Morgen werk ik thuis.' Use 'gaan' + infinitive for plans and things that are about to happen. Use 'zullen' for promises, predictions and polite offers, and in questions like 'Zullen we…?' ('shall we…?'). 'Zullen' also adds a flavour of guess: 'Het zal wel goed komen.' English 'will' is spread across all three.",
    examples: [
      { nl: "Morgen werk ik thuis.", en: "Tomorrow I'll work from home.", tag: "Present + time word" },
      { nl: "Ik ga volgende maand verhuizen.", en: "I'm going to move next month.", tag: "Plan → gaan" },
      { nl: "Ik zal het je laten weten.", en: "I'll let you know.", tag: "Promise → zullen" },
      { nl: "Het zal wel goed komen.", en: "It'll be all right, I suppose.", tag: "Soft guess → zullen" },
      { nl: "Zullen we vanavond uit eten gaan?", en: "Shall we go out for dinner tonight?", tag: "Suggestion" },
    ],
    pitfall: "Don't use 'zullen' as a general English 'will' for plans: 'Ik zal morgen naar Utrecht gaan' sounds stiff; say 'Ik ga morgen naar Utrecht'.",
  },
  {
    id: "g_b1_subordinate",
    title: "Subordinate clauses: the verb goes to the end",
    blurb: "After omdat, dat, als, wanneer, hoewel, terwijl and friends, the conjugated verb falls to the end of the clause.",
    body:
      "A small group of conjunctions (omdat, dat, als, wanneer, hoewel, terwijl, zodat, voordat, nadat, of, tenzij, sinds) start a subordinate clause in which the verbs gather at the end. When the subordinate clause comes FIRST, the main clause that follows starts with its verb (V2 rule: the whole clause counts as slot 1). Coordinating conjunctions (en, maar, want, of, dus) don't change word order. Separable verbs reunite at the end: 'omdat hij vroeg opstaat'.",
    examples: [
      { nl: "Ik denk dat hij morgen komt.", en: "I think he's coming tomorrow.", tag: "dat → verb-final" },
      { nl: "Omdat het regent, blijf ik thuis.", en: "Because it's raining, I'm staying at home.", tag: "Subordinate first → main verb right after the comma" },
      { nl: "Hoewel ik moe was, ben ik gaan hardlopen.", en: "Although I was tired, I went running.", tag: "hoewel + imperfect" },
      { nl: "Ik weet niet of hij het gelezen heeft.", en: "I don't know if he has read it.", tag: "Participle + auxiliary at the end" },
      { nl: "Ik ben moe, want ik heb slecht geslapen.", en: "I'm tired, for I slept badly.", tag: "want = normal order" },
    ],
    pitfall: "'Omdat ik ben moe' is wrong. Say 'omdat ik moe ben'. Compare 'want ik ben moe' (normal order).",
  },
  {
    id: "g_b1_relative",
    title: "Relative clauses: die, dat, wat, waar-",
    blurb: "Pick the pronoun by the noun's gender: die (de-words and plural), dat (het-words).",
    body:
      "A relative clause is a subordinate clause, so the verb sits at the end. 'Die' follows de-words and plurals, 'dat' follows het-words. After alles, iets, niets, and for a whole clause, use 'wat'. When the pronoun belongs to a preposition and it refers to a thing, Dutch uses waar- + preposition: 'de app waarmee ik werk'. For people, use preposition + wie: 'de collega met wie ik werk'.",
    examples: [
      { nl: "De collega die naast me zit, is nieuw.", en: "The colleague who sits next to me is new.", tag: "de-word → die" },
      { nl: "Het project dat we doen, is leuk.", en: "The project we're doing is fun.", tag: "het-word → dat; Dutch can't drop it" },
      { nl: "Alles wat je zegt, klopt.", en: "Everything you say is right.", tag: "After alles → wat" },
      { nl: "Dit is de app waarmee ik werk.", en: "This is the app I work with.", tag: "waar + mee" },
      { nl: "De stad waar ik woon, is mooi.", en: "The city where I live is beautiful.", tag: "waar = where" },
    ],
    pitfall: "English often omits 'that' ('the app I use'). Dutch never drops the relative pronoun: 'de app die ik gebruik'.",
  },
  {
    id: "g_b1_er",
    title: "The little word 'er'",
    blurb: "'Er' looks small but does at least four jobs.",
    body:
      "(1) Introducing something new: 'Er is een probleem' (there is). (2) Place: 'there' unstressed — 'Ik woon er al drie jaar.' (3) Quantity, with a number left over: 'Ik heb er twee.' (4) Instead of 'het/ze' after a preposition: 'erover, ermee, ervan, eraan'. Word order: 'er' sits just after the verb or subject pronoun, early in the middle of the sentence. In the third use, it replaces the noun you already mentioned.",
    examples: [
      { nl: "Er staat een fiets voor de deur.", en: "There is a bike in front of the door.", tag: "Existential" },
      { nl: "Ik woon er al drie jaar.", en: "I've lived there for three years.", tag: "Place" },
      { nl: "Heb je kinderen? Ja, ik heb er twee.", en: "Do you have children? Yes, I have two.", tag: "Quantity" },
      { nl: "Wat vind je ervan?", en: "What do you think about it?", tag: "Prepositional: van + het" },
      { nl: "We praten er morgen over.", en: "We'll talk about it tomorrow.", tag: "er … over" },
    ],
    pitfall: "In the existential use, the subject is indefinite: 'Er is een probleem' (not 'Een probleem is'). With definite subjects ('het probleem') don't use 'er'.",
  },
  {
    id: "g_b1_reflexive",
    title: "Reflexive verbs with 'zich'",
    blurb: "Some Dutch verbs need a reflexive pronoun where English has none.",
    body:
      "Pronouns: me, je, zich, ons, je, zich. Many verbs are always reflexive: zich voelen, zich vergissen (to be mistaken), zich herinneren, zich haasten, zich vervelen, zich ergeren aan, zich verheugen op, zich zorgen maken over. The perfect uses 'hebben': 'Ik heb me vergist'. In the 'u' form, use 'zich': 'Voelt u zich goed?'",
    examples: [
      { nl: "Ik voel me niet lekker.", en: "I don't feel well.", tag: "zich voelen" },
      { nl: "Hij ergert zich aan het lawaai.", en: "He's annoyed by the noise.", tag: "zich ergeren aan" },
      { nl: "Ik verheug me op de vakantie.", en: "I'm looking forward to the holiday.", tag: "zich verheugen op" },
      { nl: "We vervelen ons nooit.", en: "We never get bored.", tag: "zich vervelen" },
      { nl: "Sorry, ik heb me vergist.", en: "Sorry, I made a mistake.", tag: "Perfect: hebben + me" },
    ],
    pitfall: "Don't drop the pronoun: 'Ik voel niet goed' is wrong. Also 'Ik herinner me dat' (I remember that), not 'Ik herinner dat'.",
  },
  {
    id: "g_b1_passive",
    title: "The passive: worden + participle",
    blurb: "'Worden' for the process, 'zijn' for the result.",
    body:
      "Passive = form of 'worden' + past participle: 'De deur wordt gesloten.' Past: 'werd/werden'. Perfect: 'is/zijn' + participle (no 'geworden'): 'De deur is gesloten' means the process happened. The agent is introduced by 'door'. With no subject, Dutch uses 'er': 'Er wordt gefietst'. In speech people often avoid the passive and say 'ze' or 'men' instead.",
    examples: [
      { nl: "Het kantoor wordt vandaag schoongemaakt.", en: "The office is being cleaned today.", tag: "Process: wordt + participle" },
      { nl: "Het pakket is gisteren bezorgd.", en: "The parcel was delivered yesterday.", tag: "Perfect passive" },
      { nl: "Het artikel werd door een journalist geschreven.", en: "The article was written by a journalist.", tag: "Agent with door" },
      { nl: "Hier wordt veel gefietst.", en: "There is a lot of cycling here.", tag: "Impersonal passive" },
      { nl: "De winkel is gesloten.", en: "The shop is closed.", tag: "State: zijn + participle" },
    ],
    pitfall: "Don't add 'geworden' to the perfect passive: say 'De brief is verstuurd', not 'is verstuurd geworden'.",
  },
  {
    id: "g_b1_conditional",
    title: "Polite wishes and 'if' sentences with zou",
    blurb: "'Zou' + infinitive is the Dutch 'would'.",
    body:
      "Use 'zou' (zouden in the plural) + infinitive at the end for polite requests, wishes and advice: 'Zou je me kunnen helpen?' For hypothetical 'if' sentences use the imperfect in the 'als' clause and 'zou' in the main clause: 'Als ik meer tijd had, zou ik vaker sporten.' For a negative, 'niet' stays before the infinitive. Past hypotheticals use 'zou … hebben': 'Ik zou het gedaan hebben.'",
    examples: [
      { nl: "Zou je me kunnen helpen?", en: "Would you be able to help me?", tag: "Polite request" },
      { nl: "Ik zou graag een afspraak willen maken.", en: "I'd like to make an appointment.", tag: "Polite wish" },
      { nl: "Als ik meer tijd had, zou ik vaker sporten.", en: "If I had more time, I'd exercise more.", tag: "Als + imperfect, zou + infinitive" },
      { nl: "Ik zou liever thuiswerken.", en: "I'd rather work from home.", tag: "Preference" },
      { nl: "Als ik jou was, zou ik de huisarts bellen.", en: "If I were you, I'd call the GP.", tag: "Advice" },
    ],
    pitfall: "Avoid 'zou' in both clauses ('Als ik meer tijd zou hebben, zou ik…'): it's common in speech but teachers mark it as non-standard. Use the imperfect after 'als'.",
  },
  {
    id: "g_b1_adjectives",
    title: "Adjective endings: when to add -e",
    blurb: "Adjectives take -e before a noun, except one little case.",
    body:
      "Before a noun the adjective gets -e: de grote tafel, een leuke collega, grote huizen. The single exception is an INDEFINITE singular het-word: 'een groot huis', 'geen mooi weer', 'oud brood'. After the verb (zijn, worden, lijken) there is no ending: 'Het huis is groot.' Spelling adjusts: groot → grote, lang → lange, vies → vieze, duur → dure. After 'iets', 'niets' or 'veel', add -s: 'iets leuks'.",
    examples: [
      { nl: "Ik heb een leuke collega.", en: "I have a nice colleague.", tag: "de-word → -e" },
      { nl: "Ik heb een leuk kantoor.", en: "I have a nice office.", tag: "indefinite het-word → no -e" },
      { nl: "Het nieuwe kantoor is groot.", en: "The new office is big.", tag: "definite het → -e, but predicate: no -e" },
      { nl: "Dat zijn grote problemen.", en: "Those are big problems.", tag: "Plural → -e" },
      { nl: "Zullen we iets leuks doen?", en: "Shall we do something fun?", tag: "iets + adjective + -s" },
    ],
    pitfall: "'Een mooie huis' is wrong — it's 'een mooi huis'. The test: is the noun a 'het' word, singular, with 'een/geen/no article'? Then no -e.",
  },
  {
    id: "g_b1_comparison",
    title: "Comparatives & superlatives",
    blurb: "-er, -st, and a handful of irregular ones.",
    body:
      "Comparative: adjective + -er (+ 'dan'): sneller dan, groter dan. After an -r, add -der: duur → duurder, ver → verder. Superlative: -st, usually with 'het' (predicate) or 'de' + -ste (attributive): 'het mooist', 'de mooiste stad'. 'Even … als' is 'as … as'. Irregular: goed – beter – best, veel – meer – meest, weinig – minder – minst, graag – liever – liefst. The pattern 'hoe … hoe' = 'the … the'.",
    examples: [
      { nl: "Mijn fiets is sneller dan de tram.", en: "My bike is faster than the tram.", tag: "-er + dan" },
      { nl: "Dit is de beste koffie van de stad.", en: "This is the best coffee in the city.", tag: "Irregular superlative" },
      { nl: "Thuiswerken is even leuk als op kantoor werken.", en: "Working from home is as nice as working at the office.", tag: "even … als" },
      { nl: "Hoe eerder, hoe beter.", en: "The sooner, the better.", tag: "hoe … hoe" },
      { nl: "Ik drink liever thee dan koffie.", en: "I prefer tea to coffee.", tag: "liever … dan" },
    ],
    pitfall: "Don't use 'meer' with short adjectives ('meer duur'): say 'duurder'. Don't use 'als' after a comparative either: 'groter dan', not 'groter als'.",
  },
  {
    id: "g_b1_om_te",
    title: "'Om … te' + infinitive",
    blurb: "The standard way to say 'in order to' or to add a verb to an adjective.",
    body:
      "For purpose, Dutch needs 'om … te' + infinitive at the end: 'Ik fiets om fit te blijven.' It also follows many adjectives and nouns: 'Het is moeilijk om een woning te vinden.' With separable verbs, 'te' sits between the prefix and the verb: 'om vroeg op te staan'. After modal verbs, no 'te' (and no 'om'): 'Ik wil werken.' Related patterns: 'zonder … te' (without -ing) and 'in plaats van … te' (instead of -ing).",
    examples: [
      { nl: "Ik fiets naar mijn werk om fit te blijven.", en: "I cycle to work to stay fit.", tag: "Purpose" },
      { nl: "Het is moeilijk om een woning te vinden.", en: "It is hard to find a home.", tag: "After adjective" },
      { nl: "Vergeet niet om je sleutels mee te nemen.", en: "Don't forget to take your keys.", tag: "Separable: mee te nemen" },
      { nl: "Hij ging weg zonder iets te zeggen.", en: "He left without saying anything.", tag: "zonder … te" },
      { nl: "In plaats van te bellen, stuur ik een bericht.", en: "Instead of calling, I'll send a message.", tag: "in plaats van … te" },
    ],
    pitfall: "Don't translate 'in order to' as just 'te' or use 'voor' + verb: 'Ik leer Nederlands om hier te werken', not 'voor hier werken'.",
  },
];
