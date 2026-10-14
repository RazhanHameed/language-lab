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
  // ---- B1 expansion ----
  {
    id: "g_b1_past_ergative",
    title: "The simple past and ergativity: Min nan xwar",
    blurb: "In the past tense, the doer of a transitive verb turns oblique and the verb agrees with the object.",
    body:
      "Present tense is straightforward: Ez nan dixwim. But in the PAST tense of transitive verbs, Kurmanji switches: the doer takes the OBLIQUE pronoun (min, te, wî, wê, me, we, wan) and the verb agrees with the OBJECT, not with the doer. So 'I ate bread' is literally 'By-me bread was-eaten': Min nan xwar. No di- prefix; just the past stem. Intransitive verbs (çûn, hatin, ketin, razan) do not switch: the subject stays direct (ez, tu, ew, em, hûn) and the verb ends in -m, -yî, nothing, -n, -n, -n.",
    examples: [
      { nl: "Ez çûm bazarê.", en: "I went to the market.", tag: "intransitive: direct subject, ending -m" },
      { nl: "Min nan xwar.", en: "I ate bread.", tag: "transitive: oblique doer, verb agrees with 'nan'" },
      { nl: "Wî ez dîtim.", en: "He saw me.", tag: "the verb agrees with the OBJECT: ez -> -im" },
      { nl: "Me ew dîtin.", en: "We saw them.", tag: "ew = they, so the ending is -in" },
      { nl: "Te çi kir?", en: "What did you do?", tag: "oblique te + object çi" },
    ],
    pitfall: "Never say 'Ez nan xwar' (direct pronoun + transitive past). The doer must be oblique: Min nan xwar. Negation puts ne- before the past stem: Min nan nexwar.",
  },
  {
    id: "g_b1_oblique",
    title: "Oblique case: -ê, -an and the pronoun set",
    blurb: "A second form of the noun and pronoun marks the doer in the past, and the noun after prepositions.",
    body:
      "Nouns and pronouns have two cases: direct and oblique. The oblique shows up (1) for the doer in the past tense, (2) after prepositions and (3) after the oblique demonstratives vî, vê and van. Feminine singular nouns take -ê (jin -> jinê, mal -> malê). Plural nouns take -an (zarok -> zarokan, pirtûk -> pirtûkan). Masculine singular nouns take no -ê ending (li bajêr 'in the city' only changes a vowel), but after vî or wî they take -î: vî zilamî 'this man'. Place names such as Wan and Amed do take -ê after li: li Wanê, li Amedê. Pronouns change: ez -> min, tu -> te, ew -> wî (he) / wê (she), em -> me, hûn -> we, ew (they) -> wan. Demonstratives: ev -> vî / vê / van, ew -> wî / wê / wan.",
    examples: [
      { nl: "Jinê nan xwar.", en: "The woman ate bread.", tag: "feminine doer in the past takes -ê" },
      { nl: "Ez li malê me.", en: "I am at home.", tag: "after 'li', mal -> malê" },
      { nl: "Ez ji van zarokan hez dikim.", en: "I like these children.", tag: "plural oblique -an, demonstrative van" },
      { nl: "Min ev pirtûk xwend.", en: "I read this book.", tag: "oblique 'min' as the doer" },
      { nl: "Ew bi wan re dixebite.", en: "He works with them.", tag: "wan = oblique they" },
    ],
    pitfall: "Gender decides the oblique: malê (fem, takes -ê) but bajêr (masc, no -ê ending; only the vowel changes). Learn each noun with its gender; the dictionary form alone does not tell you.",
  },
  {
    id: "g_b1_ezafe",
    title: "Ezafe in detail: -ê / -a / -ên and -yê / -ya / -yên",
    blurb: "The linker between noun and adjective or owner agrees with the noun and adds -y- after a vowel.",
    body:
      "A noun links to what follows (an adjective, an owner, another noun) with the ezafe: -ê for a masculine noun, -a for a feminine one, -ên for any plural. After a noun that already ends in a vowel, a -y- is inserted: -yê, -ya, -yên (bira -> birayê min, dê -> dêya min, xanî -> xaniyê me). You can chain ezafes: mala bavê min = the house of my father. With 'a/an', the ezafe shape moves to the adjective: zilamekî dirêj (a tall man), keçeke ciwan (a young girl). Possession and adjectives use the same linker.",
    examples: [
      { nl: "birayê min", en: "my brother", tag: "masculine, vowel-ending noun: -yê" },
      { nl: "dêya min", en: "my mother", tag: "feminine, vowel-ending noun: -ya" },
      { nl: "mala bavê min", en: "my father's house", tag: "two ezafes in a chain" },
      { nl: "pirtûkên nû", en: "new books", tag: "plural -ên" },
      { nl: "zilamekî dirêj, keçeke ciwan", en: "a tall man, a young girl", tag: "indefinite: -ekî (m) / -eke (f)" },
    ],
    pitfall: "The -y- is part of the sound, not an extra word: say 'birayê min', not 'bira ê min'. And an adjective after a noun always needs the linker: 'mala mezin', never 'mal mezin'.",
  },
  {
    id: "g_b1_perfect",
    title: "The present perfect: çûme, xwariye",
    blurb: "Past participle + a short form of 'to be' says what has happened and still matters now.",
    body:
      "The perfect is made from the past participle (past stem + -î) plus -me, -yî, -ye, -ne, -ne, -ne. With intransitive verbs the subject is direct: Ez çûme (I have gone), Tu çûyî, Ew çûye, Em çûne. With transitive verbs the doer is oblique and the ending agrees with the object: Min nan xwariye (I have eaten bread). Use it for experience (Te qet Wan dîtiye? Have you ever seen Van?), results (Ew hatiye: he is here) and 'not yet' (hîn nehatiye). English 'I have lived here for three years' uses the PRESENT in Kurdish: Ez sê sal in li vir dijîm.",
    examples: [
      { nl: "Ez gihîştime Amedê.", en: "I have arrived in Amed.", tag: "intransitive: participle + -me" },
      { nl: "Min nameyek nivîsiye.", en: "I have written a letter.", tag: "transitive: oblique doer, -ye agrees with 'name'" },
      { nl: "Te qet Wan dîtiye?", en: "Have you ever seen Van?", tag: "experience, 'qet' = ever" },
      { nl: "Ew hîn nehatiye.", en: "He hasn't come yet.", tag: "negative: ne- before the participle" },
      { nl: "Ez sê sal in li Amedê dijîm.", en: "I have been living in Amed for three years.", tag: "duration uses the present tense" },
    ],
    pitfall: "Do not translate 'I have lived here for three years' with the perfect. Kurdish says 'three years it-is I live here'. Use the perfect for completed actions with a present result.",
  },
  {
    id: "g_b1_past_progressive",
    title: "Past progressive and habitual past: di- + past stem",
    blurb: "Put di- in front of the past stem to say 'was doing' or 'used to do'.",
    body:
      "The simple past reports a finished event (Min nan xwar). Add di- to the past stem to describe something that was in progress or repeated: Min nan dixwar (I was eating bread / I used to eat bread). Endings are the same as in the simple past (ergative rules too). Use it for background: Dema ez hatim, wê xwarin çêdikir (When I arrived, she was cooking). Use it for habits, with words like berê, her roj, her sibeh. Negation: ne-di-: nedixwar. Preverbs come first: vedixwar.",
    examples: [
      { nl: "Berê em li Qamişloyê dijiyan.", en: "We used to live in Qamishlo.", tag: "habit/state in the past" },
      { nl: "Her sibeh min çay vedixwar.", en: "Every morning I used to drink tea.", tag: "preverb ve- stays before di-" },
      { nl: "Dema ez hatim, wê xwarin çêdikir.", en: "When I arrived, she was cooking.", tag: "background action vs. event" },
      { nl: "Em her havîn diçûn gund.", en: "Every summer we used to go to the village.", tag: "intransitive: diçûn" },
      { nl: "Wî nan nedixwar.", en: "He wasn't eating bread.", tag: "negative ne-di-" },
    ],
    pitfall: "Dixwar (was eating) is not dixwe (eats). Tense lives in the stem: past stem xwar-, present stem xw-. Pair di- with the past stem for 'was/used to', with the present stem for 'now'.",
  },
  {
    id: "g_b1_subjunctive",
    title: "The subjunctive (bi-) and the imperative",
    blurb: "After want, must and can, the second verb takes bi- + present stem and a personal ending.",
    body:
      "The subjunctive is bi- + present stem + -im, -î, -e, -in: bixwim, bixwî, bixwe, bixwin. It follows dixwazim (I want), divê (must), dikarim (can) and conjunctions like ji bo ku, beriya ku, heta: Ez dixwazim biçim (I want to go; lit. 'I want I-go'). The two verbs have their own personal endings, and Kurmanji uses no 'to'. Verbs with a preverb drop the bi-: radibim -> rabim. Hatin has two regional sets: werim / werî / were / werin (used in Badini, the Kurmanji of Duhok, and some other areas) and bêm / bêyî / bê / bên (the usual set in Turkey and Syria). Were / werin 'come!' as an imperative is understood everywhere. The imperative is bi- + stem (bixwe, bixwin) or just the stem for a few verbs (were/werin = come, rûne/rûnin = sit). Prohibition: me- + stem: Meçe! (don't go), Meke!",
    examples: [
      { nl: "Ez dixwazim biçim Wanê.", en: "I want to go to Van.", tag: "dixwazim + bi-çim" },
      { nl: "Divê tu zû bixwî.", en: "You must eat soon.", tag: "divê + subjunctive" },
      { nl: "Tu dikarî min bibînî?", en: "Can you see me?", tag: "dikarî + bi-bîn-î" },
      { nl: "Were vir û bixwe!", en: "Come here and eat!", tag: "imperative" },
      { nl: "Meçe wir!", en: "Don't go there!", tag: "prohibitive me-" },
    ],
    pitfall: "Do not use the infinitive after want. English 'I want to go' is Kurdish 'I want I-go': Ez dixwazim biçim. Forgetting the second personal ending is the classic mistake.",
  },
  {
    id: "g_b1_future",
    title: "The future: ez ê / tu yê / ew ê + subjunctive",
    blurb: "A short particle plus the subjunctive makes the future.",
    body:
      "Put ê (yê after a vowel) between the subject and a subjunctive verb: Ez ê biçim (I will go), Tu yê biçî, Ew ê biçe, Em ê biçin. Some regions say dê (Ez dê biçim). Negative: Ez ê neçim. The particle is written separately from the pronoun in Hawar spelling. Use it for plans and predictions. The present with di- also works for near plans with a time word: Sibê ez diçim Amedê.",
    examples: [
      { nl: "Ez ê sibê biçim Amedê.", en: "I'll go to Amed tomorrow.", tag: "ez ê + subjunctive" },
      { nl: "Tu yê çi bikî?", en: "What will you do?", tag: "yê after a vowel (tu)" },
      { nl: "Em ê bi hev re bixwin.", en: "We will eat together.", tag: "em ê + bixwin" },
      { nl: "Ew ê tiştek nebêje.", en: "She won't say anything.", tag: "negative: ne- + subjunctive" },
      { nl: "Hûn ê kengî vegerin?", en: "When will you come back?", tag: "question word before the verb" },
    ],
    pitfall: "The verb after ê is the SUBJUNCTIVE (with bi-), not the present: 'Ez ê biçim', never 'Ez ê diçim'. And ê is not 'is': it has no stress and no meaning on its own.",
  },
  {
    id: "g_b1_comparison",
    title: "Comparatives and superlatives: -tir and herî",
    blurb: "Add -tir to the adjective, and say 'ji' for 'than'; 'herî' makes the superlative.",
    body:
      "Comparative: adjective + -tir (mezin -> mezintir, xweş -> xweştir). Than = ji: Ew ji min mezintir e. Superlative: herî + adjective (herî mezin), or add -tirîn (mezintirîn). A few forms are irregular: baş -> çêtir (better), zêde -> zêdetir, hindik -> kêmtir. 'As ... as' is bi qasî: Ew bi qasî min dirêj e. Use 'pir' or 'gelek' for 'much': pir mezintir = much bigger.",
    examples: [
      { nl: "Amed ji Wanê germtir e.", en: "Amed is hotter than Van.", tag: "adjective + -tir; ji = than" },
      { nl: "Ev nan ji ya duh çêtir e.", en: "This bread is better than yesterday's.", tag: "irregular çêtir; 'ya' replaces the noun" },
      { nl: "Ew herî xweş e.", en: "It is the nicest.", tag: "herî + adjective" },
      { nl: "Gola Wanê mezintirîn gol e.", en: "Lake Van is the biggest lake.", tag: "-tirîn superlative" },
      { nl: "Ew bi qasî min dirêj e.", en: "He is as tall as me.", tag: "bi qasî = as ... as" },
    ],
    pitfall: "The thing compared goes after ji and in the oblique: ji min, ji wî, ji Wanê. 'Mezintir ji' is not Kurdish word order: put 'ji ...' before the adjective.",
  },
  {
    id: "g_b1_relative_conditional",
    title: "Linking clauses: ku, eger and dema",
    blurb: "'Ku' means 'who / which / that'; eger/heke build 'if' sentences.",
    body:
      "A relative clause comes straight after the noun with ku, and the noun takes the ezafe: zilamê ku li wir rûniştiye (the man who is sitting there). The same ku means 'that' after verbs of saying and thinking: Ez difikirim ku ew rast e. Conditionals use eger, heke or ger plus the subjunctive for realistic futures: Eger baran bibare, em ê li malê bimînin. For unreal 'if' use the past subjunctive (-ya / -a ending): Eger wext hebûya, em ê biçûna Wanê. Time clauses: dema (ku), piştî ku, beriya ku, heta.",
    examples: [
      { nl: "Zilamê ku li wir rûniştiye bavê min e.", en: "The man who is sitting there is my father.", tag: "relative clause with ku" },
      { nl: "Pirtûka ku min duh kirî pir xweş e.", en: "The book that I bought yesterday is very nice.", tag: "ku + ergative past inside" },
      { nl: "Eger baran bibare, em ê li malê bimînin.", en: "If it rains, we'll stay home.", tag: "eger + subjunctive" },
      { nl: "Heke tu bixwazî, ez ê alîkariya te bikim.", en: "If you want, I'll help you.", tag: "heke + subjunctive, main clause with ê" },
      { nl: "Dema ku ez hatim, ew çûbû.", en: "When I arrived, he had left.", tag: "dema ku + pluperfect" },
    ],
    pitfall: "Never drop 'ku' like English drops 'that'. Say Ez difikirim ku ew rast e. And after eger use the subjunctive, not 'ê': 'Eger tu werî', not 'Eger tu ê werî'.",
  },
  {
    id: "g_b1_passive",
    title: "The passive: hatin + infinitive",
    blurb: "To say something 'is done', use hatin ('to come') in front of the infinitive.",
    body:
      "Kurmanji forms the passive with the verb hatin (to come) followed by the infinitive of the main verb: Nan tê pijandin (Bread is baked), Mal hat firotin (The house was sold). Tense lives on hatin: tê / têne (present), hat / hatin (past), nayê (negative present), nehat (negative past). The doer, if needed, goes in ji aliyê ... ve: Ev pirtûk ji aliyê wî ve hat nivîsandin. The infinitive never changes. Many notices use it: Li vir cixare nayê kişandin (smoking is not allowed here).",
    examples: [
      { nl: "Ev xwarin bi nan tê xwarin.", en: "This dish is eaten with bread.", tag: "present passive: tê + infinitive" },
      { nl: "Mala wan hat firotin.", en: "Their house was sold.", tag: "past passive: hat + infinitive" },
      { nl: "Dikan saet nehan tê vekirin.", en: "The shop is opened at nine.", tag: "regular timetable" },
      { nl: "Li vir cixare nayê kişandin.", en: "Smoking is not allowed here.", tag: "negative nayê" },
      { nl: "Ev pirtûk ji aliyê wî ve hat nivîsandin.", en: "This book was written by him.", tag: "agent: ji aliyê ... ve" },
    ],
    pitfall: "Do not conjugate the main verb. In 'Nan tê pijandin' the infinitive pijandin stays as it is, and hatin carries the person and tense. Plural subject: Nan têne pijandin.",
  },
  {
    id: "g_b1_modals",
    title: "Modals: divê, dikarim, lazim e, gerek e",
    blurb: "Four everyday ways to say must, can and need, all followed by the subjunctive.",
    body:
      "Divê (must) takes the subjunctive and an oblique pronoun or a subject: Divê ez biçim / Min divê biçim. Dikarim (I can) is a regular present verb: dikarim, dikarî, dikare. Its negative is nikarim. Lazim e and gerek e (it is necessary) are impersonal: Lazim e ez biçim. 'Must not' is nabe: Nabe tu biçî. 'Don't need to' is ne pêwîst e or hewce nîne. Request politely with dikarî: Tu dikarî alîkariya min bikî? Permission is destûr heye.",
    examples: [
      { nl: "Divê ez îro biçim kontrolê.", en: "I have to go for a check-up today.", tag: "divê + subjunctive" },
      { nl: "Tu dikarî alîkariya min bikî?", en: "Can you help me?", tag: "dikarî + subjunctive" },
      { nl: "Lazim e em zû derkevin.", en: "We need to leave early.", tag: "impersonal lazim e" },
      { nl: "Nabe tu li vir cixare bikişînî.", en: "You must not smoke here.", tag: "nabe = must not" },
      { nl: "Ez nikarim wê bibînim.", en: "I can't see her.", tag: "nikarim, negative of dikarim" },
    ],
    pitfall: "Divê does not change for person; the subject is carried by the second verb: divê ez, divê tu, divê em. Do not say 'ez divêm'.",
  },
  {
    id: "g_b1_circumpositions",
    title: "Circumpositions: li ... de, ji ... re, bi ... re, ji ... ve",
    blurb: "Many Kurdish prepositions have a second half after the noun, which wraps it like brackets.",
    body:
      "A preposition before the noun often pairs with a particle after it. Di ... de = in/inside (di dibistanê de, di mal de). Li alone is used for towns and places (li Amedê), but li ... de adds 'inside'. Ji ... re = to/for (ji min re). Bi ... re = with (bi hevalê min re). Ji ... ve = since/from (ji sê rojan ve). Ji bo = for (the purpose). The noun between them is oblique. With pronouns, the particle fuses: bi min re, ji wî re, di wê de.",
    examples: [
      { nl: "Ez bi hevalê xwe re diçim bazarê.", en: "I go to the bazaar with my friend.", tag: "bi ... re = with" },
      { nl: "Ji min re çayek bîne.", en: "Bring me a tea.", tag: "ji ... re = for/to" },
      { nl: "Birayê min di nexweşxaneyê de ye.", en: "My brother is in the hospital.", tag: "di ... de = in" },
      { nl: "Ez ji sê rojan ve li vir im.", en: "I've been here for three days.", tag: "ji ... ve = since" },
      { nl: "Ew bi wan re axivî.", en: "He spoke with them.", tag: "pronoun in the middle: bi wan re" },
    ],
    pitfall: "Don't forget the second half: 'bi min' alone sounds unfinished; say 'bi min re'. And the noun in the middle is oblique: careful speech prefers di malê de (fem).",
  },
];
