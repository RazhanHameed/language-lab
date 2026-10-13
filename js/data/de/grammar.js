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
      { nl: "Ich stehe um sieben Uhr auf.", en: "I get up at 7.", tag: "aufstehen → 'stehe...auf'" },
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
  // ---- B1 capsules ----
  {
    id: "g_b1_perfekt",
    title: "Perfekt: haben or sein + participle",
    blurb: "The everyday past tense: a helper verb in slot 2, the participle at the very end.",
    body:
      "In speech, Germans use the Perfekt for almost everything that happened. Most verbs take 'haben'. Verbs of movement (gehen, fahren, kommen, fliegen) and change of state (werden, einschlafen, aufwachen) plus 'sein', 'bleiben' and 'passieren' take 'sein'. Regular participles are ge-…-t (gemacht), strong ones are ge-…-en (gegangen, often with a stem change). Verbs with an unstressed prefix (be-, ver-, ent-, er-) and verbs ending in -ieren get no ge-: besucht, vergessen, studiert. With separable verbs ge- sits in the middle: eingekauft, angerufen.",
    examples: [
      { nl: "Ich habe gestern lange gearbeitet.", en: "I worked for a long time yesterday.", tag: "haben + regular participle" },
      { nl: "Wir sind am Samstag nach Potsdam gefahren.", en: "We went to Potsdam on Saturday.", tag: "movement → sein" },
      { nl: "Er ist früh eingeschlafen.", en: "He fell asleep early.", tag: "change of state → sein; ge- in the middle" },
      { nl: "Hast du das Paket schon abgeholt?", en: "Have you already picked up the parcel?", tag: "Question: auxiliary first, participle last" },
      { nl: "Ich habe die Nachricht leider nicht verstanden.", en: "I'm afraid I didn't understand the message.", tag: "ver- → no ge-" },
    ],
    pitfall: "English 'I have been to Berlin' is also Perfekt in German, but 'I have lived here for two years' is the PRESENT: 'Ich wohne seit zwei Jahren hier.' Don't use the Perfekt for ongoing situations.",
  },
  {
    id: "g_b1_praeteritum",
    title: "Präteritum: war, hatte, konnte … and storytelling",
    blurb: "For 'sein', 'haben' and the modals, the simple past beats the Perfekt in speech.",
    body:
      "Speak in the Perfekt, but use the simple past (Präteritum) for sein, haben and the modals: ich war, ich hatte, ich konnte, ich musste, ich wollte, ich durfte. Why: these are short, super-frequent verbs, and 'ich bin gewesen' or 'ich habe gekonnt' sound clumsy. Modals lose their umlaut in the Präteritum (können → konnte). In writing — stories, news, novels — the Präteritum is used for all verbs: er kam, sie ging, es regnete. You need to RECOGNISE it when reading even if you rarely produce it.",
    examples: [
      { nl: "Ich war gestern leider krank.", en: "I was unfortunately ill yesterday.", tag: "war" },
      { nl: "Wir hatten keine Zeit, deshalb sind wir nicht gekommen.", en: "We had no time, so we didn't come.", tag: "hatten + Perfekt for the result" },
      { nl: "Er musste lange warten und konnte nichts machen.", en: "He had to wait for a long time and couldn't do anything.", tag: "modals: musste, konnte" },
      { nl: "Als ich nach Berlin kam, wohnte ich zuerst in einer WG.", en: "When I came to Berlin, I first lived in a shared flat.", tag: "written / storytelling style: kam, wohnte" },
    ],
    pitfall: "Modals in the Präteritum drop the umlaut: 'ich konnte', not 'ich könnte' (that is Konjunktiv II, 'I could/would be able to').",
  },
  {
    id: "g_b1_akk_dat",
    title: "Accusative vs dative",
    blurb: "Who or what is acted on (accusative) versus who receives or is affected (dative).",
    body:
      "Accusative is the direct object: 'Ich sehe den Mann.' Dative is the indirect object or the recipient: 'Ich gebe dem Mann das Buch.' Masculine changes most: der → den (acc), dem (dat); neuter das → das, dem; feminine die → die, der; plural die → die, den (+n on the noun). Pronouns: mich/mir, dich/dir, ihn/ihm, sie/ihr, es/ihm, uns/uns, euch/euch, sie/ihnen. Some verbs ALWAYS take the dative: helfen, danken, gefallen, gehören, antworten, gratulieren, folgen. Others take the accusative: besuchen, fragen, anrufen, kennen. Learn each verb with its case.",
    examples: [
      { nl: "Ich rufe meinen Chef an.", en: "I'm calling my boss.", tag: "anrufen + accusative" },
      { nl: "Ich helfe meinem Kollegen bei dem Projekt.", en: "I'm helping my colleague with the project.", tag: "helfen + dative" },
      { nl: "Das Buch gehört mir.", en: "The book belongs to me.", tag: "gehören + dative" },
      { nl: "Ich schenke meiner Schwester einen Schal.", en: "I'm giving my sister a scarf.", tag: "dative person, accusative thing" },
      { nl: "Wie gefällt dir die neue Wohnung?", en: "How do you like the new flat?", tag: "gefallen + dative: the thing is the subject" },
    ],
    pitfall: "Don't translate English word-for-word: 'I like the film' is 'Der Film gefällt mir' (the film pleases me), and 'I help him' is 'Ich helfe ihm' (dative, not 'ihn').",
  },
  {
    id: "g_b1_wechsel",
    title: "Two-way prepositions: wo? or wohin?",
    blurb: "Nine prepositions switch case depending on position (dative) or movement (accusative).",
    body:
      "an, auf, in, über, unter, vor, hinter, neben, zwischen take the dative to answer 'wo?' (where something is) and the accusative to answer 'wohin?' (where it goes). Ask yourself: is there a change of place? Typical pairs: stehen/stellen, liegen/legen, sitzen/setzen, hängen/hängen. 'in dem' → im, 'an dem' → am, 'in das' → ins, 'an das' → ans.",
    examples: [
      { nl: "Das Fahrrad steht im Keller.", en: "The bike is in the cellar.", tag: "wo? → dative (im = in dem)" },
      { nl: "Ich stelle das Fahrrad in den Keller.", en: "I'm putting the bike in the cellar.", tag: "wohin? → accusative" },
      { nl: "Wir sitzen am Fenster.", en: "We are sitting at the window.", tag: "wo? → dative" },
      { nl: "Ich gehe ins Büro.", en: "I'm going to the office.", tag: "wohin? → accusative (ins = in das)" },
      { nl: "Die Lampe hängt über dem Tisch.", en: "The lamp hangs above the table.", tag: "wo? → dative" },
    ],
    pitfall: "Even with movement words the case is dative when the action happens INSIDE one place: 'Ich laufe im Park' (I run around in the park) versus 'Ich laufe in den Park' (I run into the park).",
  },
  {
    id: "g_b1_adjektiv",
    title: "Adjective endings",
    blurb: "An adjective in front of a noun takes an ending; after 'sein' it does not.",
    body:
      "Predicate adjectives stay bare: 'Das Haus ist groß.' Before a noun the adjective needs an ending. Three situations: (1) after a der-word (der, die, das, dieser, welcher): -e in the nominative singular and in the feminine/neuter accusative, -en everywhere else: 'der große Tisch', 'den großen Tisch', 'mit dem großen Tisch'. (2) after ein/kein/mein: like the der-words, but nominative masculine -er and nominative/accusative neuter -es: 'ein großer Tisch', 'ein großes Haus'. (3) with no article: the adjective shows the case itself: 'frischer Kaffee', 'kaltes Wasser'. Plural: -en after der-words and ein-words, -e with no article.",
    examples: [
      { nl: "Das ist ein schönes Café.", en: "That is a nice café.", tag: "ein + neuter nominative → -es" },
      { nl: "Ich suche eine kleine Wohnung.", en: "I'm looking for a small flat.", tag: "eine + feminine accusative → -e" },
      { nl: "Er wohnt in einem alten Haus.", en: "He lives in an old house.", tag: "dative → -en" },
      { nl: "Ich trinke gern heißen Tee.", en: "I like drinking hot tea.", tag: "no article, masculine accusative → -en" },
      { nl: "Die neuen Kollegen sind sehr nett.", en: "The new colleagues are very nice.", tag: "plural after 'die' → -en" },
    ],
    pitfall: "Start with the safe rule: when in doubt choose -en, which is correct in more than half of all slots. Common mistakes: forgetting the ending completely ('ein schön Café'), or ending -e instead of -es on neuter ('ein schöne Haus').",
  },
  {
    id: "g_b1_nebensaetze",
    title: "Subordinate clauses: weil, dass, wenn, obwohl, als",
    blurb: "After a subordinating conjunction the conjugated verb goes to the END.",
    body:
      "Conjunctions like weil (because), dass (that), wenn (if/when), obwohl (although), als (when, once in the past), ob (whether), damit (so that), bevor, nachdem, während and falls send the finite verb to the end of the clause. If the subordinate clause comes first, the main clause starts with the verb: 'Weil ich müde bin, gehe ich nach Hause.' Wenn vs als: 'wenn' = repeated or present/future events, 'als' = one event in the past. Separable verbs reunite at the end: 'weil er früh aufsteht'. In a Perfekt clause the auxiliary comes last: 'weil ich gearbeitet habe'.",
    examples: [
      { nl: "Ich komme nicht, weil ich arbeiten muss.", en: "I'm not coming because I have to work.", tag: "weil + modal at the end" },
      { nl: "Ich weiß, dass er morgen früh aufsteht.", en: "I know that he gets up early tomorrow.", tag: "dass + separable verb reunited" },
      { nl: "Wenn ich Zeit habe, gehe ich ins Fitnessstudio.", en: "When I have time, I go to the gym.", tag: "wenn clause first → verb–subject next" },
      { nl: "Als ich jung war, habe ich in Hamburg gewohnt.", en: "When I was young, I lived in Hamburg.", tag: "als = once in the past" },
      { nl: "Obwohl es kalt ist, fahren wir mit dem Rad.", en: "Although it's cold, we go by bike.", tag: "obwohl = although" },
    ],
    pitfall: "Don't keep English word order after 'weil' ('weil ich bin müde'). In spoken German 'weil' with verb-second is heard, but at B1 and in writing use verb-last.",
  },
  {
    id: "g_b1_relativ",
    title: "Relative clauses: der, die, das, dem …",
    blurb: "Add information to a noun with a clause that starts with a relative pronoun and ends with the verb.",
    body:
      "A relative pronoun looks like the definite article (der, die, das, die plural), but gender and number come from the noun it refers to, and the CASE comes from its role in the relative clause. Only the dative plural (denen) and the genitive (dessen, deren) differ from the article. The relative clause is always set off by commas and the verb goes to the end. You cannot leave out the pronoun as in English.",
    examples: [
      { nl: "Das ist der Kollege, der neben mir sitzt.", en: "That's the colleague who sits next to me.", tag: "nominative: der" },
      { nl: "Die Wohnung, die wir besichtigt haben, ist sehr hell.", en: "The flat that we viewed is very bright.", tag: "accusative: die" },
      { nl: "Der Kollege, dem ich geholfen habe, hat sich bedankt.", en: "The colleague I helped said thank you.", tag: "dative: dem (helfen + dative)" },
      { nl: "Das sind die Nachbarn, mit denen wir grillen.", en: "Those are the neighbours we barbecue with.", tag: "preposition + dative plural: denen" },
    ],
    pitfall: "Don't write 'Das ist der Mann, ich kenne.' You need 'den': 'Das ist der Mann, den ich kenne.' Masculine accusative is the form learners forget.",
  },
  {
    id: "g_b1_konjunktiv2",
    title: "Konjunktiv II: polite requests and 'what if'",
    blurb: "'würde', 'hätte', 'wäre' and 'könnte' make German sound polite and open.",
    body:
      "Konjunktiv II expresses wishes, polite requests, advice and hypothetical situations. For most verbs use 'würde' + infinitive at the end. Four verbs have their own forms, which you should know by heart: wäre (sein), hätte (haben), könnte (können), müsste, dürfte, sollte; also 'wüsste' and 'käme'. Polite requests: 'Könnten Sie mir helfen?', 'Ich hätte gern einen Kaffee.' Advice: 'Du solltest mehr schlafen.' Hypothetical: 'Wenn ich mehr Zeit hätte, würde ich mehr reisen.' Both halves of an 'if' sentence use Konjunktiv II; wishes: 'Ich wünschte, ich hätte mehr Zeit.'",
    examples: [
      { nl: "Könnten Sie mir bitte helfen?", en: "Could you please help me?", tag: "polite request: könnte" },
      { nl: "Ich hätte gern einen Tisch für zwei.", en: "I'd like a table for two.", tag: "polite: hätte gern" },
      { nl: "Wenn ich mehr Zeit hätte, würde ich öfter kochen.", en: "If I had more time I'd cook more often.", tag: "hypothetical: hätte … würde" },
      { nl: "Du solltest mal zum Arzt gehen.", en: "You should go to the doctor.", tag: "advice: sollte" },
      { nl: "Es wäre schön, wenn du kommen könntest.", en: "It would be nice if you could come.", tag: "wäre … könntest" },
    ],
    pitfall: "Don't use 'würde' with 'sein' or 'haben' or modals: say 'wäre' (not 'würde sein'), 'hätte' (not 'würde haben'), 'könnte' (not 'würde können').",
  },
  {
    id: "g_b1_passiv",
    title: "Passive with 'werden'",
    blurb: "Put the action in focus, not the person: 'Das Zimmer wird renoviert.'",
    body:
      "German passive = werden + past participle at the end. The thing acted on becomes the subject. The doer, if mentioned, appears with 'von' + dative (people) or 'durch' (means). Present: 'Die Wohnung wird geputzt.' Past (Präteritum): 'Die Wohnung wurde geputzt.' Perfect: 'Die Wohnung ist geputzt worden' (note 'worden', not 'geworden'). Passive with a modal: 'Das Formular muss ausgefüllt werden.' It is very common in official language: Anträge werden bearbeitet; Rechnungen werden bezahlt. For everyday talk, 'man' is a lighter alternative: 'Man putzt das Zimmer.'",
    examples: [
      { nl: "Das Büro wird jeden Abend geputzt.", en: "The office is cleaned every evening.", tag: "Present passive" },
      { nl: "Die Brücke wurde im Jahr neunzehnhundertneunundsechzig gebaut.", en: "The bridge was built in nineteen sixty-nine.", tag: "Past passive" },
      { nl: "Der Antrag muss bis Freitag abgegeben werden.", en: "The application must be submitted by Friday.", tag: "Passive with a modal" },
      { nl: "Das Paket wurde von einem Nachbarn angenommen.", en: "The parcel was accepted by a neighbour.", tag: "Agent with 'von'" },
    ],
    pitfall: "Don't mix up the passive 'wird gemacht' with the future 'wird machen'. The passive has a participle, the future has an infinitive.",
  },
  {
    id: "g_b1_reflexiv",
    title: "Reflexive verbs",
    blurb: "Many everyday verbs need 'mich/dich/sich' because the action points back at the subject.",
    body:
      "A reflexive verb has a reflexive pronoun: ich freue mich, du freust dich, er freut sich, wir freuen uns, ihr freut euch, sie freuen sich. Accusative forms mich, dich, sich, uns, euch, sich; dative forms mir, dir, sich, uns, euch, sich (when there is also an accusative object: 'Ich putze mir die Zähne'). Common ones: sich freuen (auf/über), sich ärgern (über), sich interessieren (für), sich treffen, sich erinnern (an), sich entscheiden (für), sich fühlen. With a modal or in a subordinate clause the pronoun stays near the subject: 'Ich muss mich beeilen.', 'weil ich mich ärgere'. The Perfekt uses 'haben': 'Ich habe mich gefreut.'",
    examples: [
      { nl: "Ich freue mich auf das Wochenende.", en: "I'm looking forward to the weekend.", tag: "sich freuen auf + accusative (future)" },
      { nl: "Ich ärgere mich über den Lärm.", en: "I'm annoyed about the noise.", tag: "sich ärgern über" },
      { nl: "Wir treffen uns um acht vor dem Kino.", en: "We're meeting at eight in front of the cinema.", tag: "reciprocal: uns" },
      { nl: "Ich putze mir jeden Morgen die Zähne.", en: "I brush my teeth every morning.", tag: "dative reflexive + body part" },
      { nl: "Hast du dich schon entschieden?", en: "Have you decided already?", tag: "Perfekt with haben + reflexive" },
    ],
    pitfall: "Don't translate English 'I feel good' as 'ich fühle gut'. Say 'Ich fühle mich gut.' And 'I am bored' is 'Ich langweile mich'.",
  },
  {
    id: "g_b1_zu_inf",
    title: "zu + infinitive and um … zu",
    blurb: "Link a second action to the first without 'dass' by using zu + infinitive at the clause end.",
    body:
      "After many verbs, nouns and adjectives you put 'zu' before the infinitive at the end: 'Ich habe vergessen, dich anzurufen.' With separable verbs 'zu' sits between prefix and verb: an-zu-rufen, auf-zu-stehen. 'um … zu' = in order to: 'Ich lerne Deutsch, um hier zu arbeiten.' 'ohne … zu' = without -ing; 'statt … zu' = instead of -ing. These clauses are used only when the subject of both actions is the same; if it changes, use 'dass' or 'damit'. Modals and 'werden' never take zu: 'Ich kann kommen' (not 'zu kommen').",
    examples: [
      { nl: "Ich habe keine Lust, heute zu kochen.", en: "I don't feel like cooking today.", tag: "keine Lust haben + zu" },
      { nl: "Es ist wichtig, pünktlich zu sein.", en: "It's important to be on time.", tag: "es ist + adj + zu" },
      { nl: "Ich fahre nach Hamburg, um meine Schwester zu besuchen.", en: "I'm going to Hamburg to visit my sister.", tag: "um … zu" },
      { nl: "Vergiss nicht, morgen früh aufzustehen.", en: "Don't forget to get up early tomorrow.", tag: "separable: auf-zu-stehen" },
      { nl: "Er ist gegangen, ohne sich zu verabschieden.", en: "He left without saying goodbye.", tag: "ohne … zu" },
    ],
    pitfall: "Don't use 'zu' after modals (können, müssen, wollen, dürfen, sollen). And with different subjects, 'um … zu' is wrong: say 'Ich helfe dir, damit du früher fertig bist.'",
  },
  {
    id: "g_b1_komparativ",
    title: "Comparatives and superlatives",
    blurb: "-er for 'more', am -sten for 'the most' — and a few irregular ones.",
    body:
      "Add -er for the comparative and 'am …-sten' for the superlative: schnell – schneller – am schnellsten. Short adjectives with a, o, u take an umlaut: alt – älter – am ältesten, groß – größer – am größten, jung – jünger. Irregular: gut – besser – am besten, viel – mehr – am meisten, gern – lieber – am liebsten. Compare with 'als' (than) for different, and 'so … wie' (as … as) for equal: 'Berlin ist größer als Hamburg.', 'Er ist so alt wie ich.' Before a noun the comparative takes adjective endings: 'eine größere Wohnung'.",
    examples: [
      { nl: "Mit dem Rad bin ich schneller als mit der U-Bahn.", en: "By bike I'm faster than by U-Bahn.", tag: "comparative + als" },
      { nl: "Das ist die beste Pizza der Stadt.", en: "That's the best pizza in the city.", tag: "superlative before a noun" },
      { nl: "Ich trinke lieber Tee als Kaffee.", en: "I prefer tea to coffee.", tag: "gern – lieber – am liebsten" },
      { nl: "Meine Wohnung ist nicht so groß wie deine.", en: "My flat isn't as big as yours.", tag: "so … wie" },
      { nl: "Im Sommer ist es hier am schönsten.", en: "In summer it's most beautiful here.", tag: "am + -sten" },
    ],
    pitfall: "Don't say 'mehr gut' or 'als' for equal: 'besser' not 'mehr gut', and 'so groß wie' not 'so groß als'.",
  },
];
