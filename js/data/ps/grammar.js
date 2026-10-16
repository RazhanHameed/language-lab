// Grammar capsules — Pashto (standard Afghan written Pashto), Arabic script, RTL.
// Short, pattern-based explanations in English; every example sentence is Pashto.
// (`nl` = target-language slot; here it holds Pashto written in Arabic script.)
// Capsule ids mirror the Sorani deck so switching languages maps 1:1; where
// Sorani has no Pashto counterpart the id is kept and the content replaced
// (g_dehet = gender, g_b1_demonstratives = the future with به,
//  g_b1_ezafe = the oblique case and declension, g_b1_passive = کول/کېدل
//  compound verbs and the passive).
window.__DECK = window.__DECK || {};
window.__DECK.ps = window.__DECK.ps || {};
window.__DECK.ps.GRAMMAR = [
  {
    id: "g_v2",
    title: "Word order: the verb comes LAST (S-O-V)",
    blurb: "Pashto is a Subject-Object-Verb language: the verb closes the sentence.",
    body:
      "Where English puts the verb straight after the subject ('I eat bread'), Pashto puts the object first and the verb at the very end ('I bread eat'). Time and place words also sit before the verb, usually near the start: subject, time, place, object, verb. Train your ear to wait for the action word: it arrives last.",
    examples: [
      { nl: "زه ډوډۍ خورم.", en: "I eat bread. (lit. I bread eat)", tag: "Subject - Object - Verb" },
      { nl: "هغه کتاب لولي.", en: "He reads a book. (lit. He book reads)", tag: "Verb still last" },
      { nl: "زه سبا بازار ته ځم.", en: "I'm going to the market tomorrow.", tag: "Time and place sit before the verb" },
    ],
    pitfall: "Don't copy English order. The verb lands at the very end of the clause: زه ډوډۍ خورم 'I bread eat', not 'زه خورم ډوډۍ'.",
  },
  {
    id: "g_modal",
    title: "The present tense: present stem + personal endings",
    blurb: "Pashto needs no prefix in the present: take the present stem and add -م، -ې، -ي، -و، -ئ، -ي.",
    body:
      "The imperfective present is PRESENT STEM + ENDING. The endings are -م (I), -ې (you), -ي (he/she), -و (we), -ئ (you pl. or polite), -ي (they). It covers 'I write', 'I'm writing' and often 'I'll write (soon)'. Many verbs have a present stem that looks different from the infinitive, so learn the pair: لیکل → لیک- (write), خوړل → خور- (eat), تلل → ځ- (go), لیدل → وین- (see), کول → کو- (do). The verb 'to be' has its own set: یم، یې، دی (he) / ده (she)، یو، یئ (also written یاست)، دي.",
    examples: [
      { nl: "لیکم / لیکې / لیکي", en: "I write / you write / he-she writes", tag: "stem لیک + م / ې / ي" },
      { nl: "لیکو / لیکئ / لیکي", en: "we write / you (pl) write / they write", tag: "-و (we), -ئ (you pl), -ي (they)" },
      { nl: "زه اوس ځم.", en: "I'm going now.", tag: "تلل → present stem ځ + م" },
      { nl: "تاسو څه خورئ؟", en: "What are you (pl) eating?", tag: "خوړل → present stem خور + ئ" },
      { nl: "زه ښوونکی یم.", en: "I am a teacher.", tag: "copula: یم، یې، دی / ده، یو، یئ، دي" },
    ],
    pitfall: "The ending -ي is the same for he, she and they (هغه لیکي، هغوی لیکي): the subject tells them apart. And don't build the present from the infinitive: it's ځم 'I go', never 'تلم' (that is the past 'I was going').",
  },
  {
    id: "g_dehet",
    title: "Gender: every noun is masculine or feminine",
    blurb: "Pashto nouns have gender, and adjectives, 'a/one' and the verb 'to be' agree with it.",
    body:
      "Most nouns ending in a consonant or in -ی are masculine (کور house, سړی man); most ending in -ه or -ۍ are feminine (کوټه room, ښځه woman, نجلۍ girl, ډوډۍ bread). Agreement then runs through the sentence: many adjectives add -ه or switch -ی to -ې for a feminine noun (لوی → لویه، نوی → نوې), 'a/one' is یو for masculine and یوه for feminine, and 'is' is دی with a masculine subject and ده with a feminine one. There is no word for 'the': context does that job.",
    examples: [
      { nl: "دا کور لوی دی.", en: "This house is big.", tag: "masculine: لوی ... دی" },
      { nl: "دا کوټه لویه ده.", en: "This room is big.", tag: "feminine: لویه ... ده" },
      { nl: "یو نوی موټر", en: "a new car", tag: "masculine: یو + نوی" },
      { nl: "یوه نوې کوټه", en: "a new room", tag: "feminine: یوه + نوې" },
      { nl: "زما ورور ښوونکی دی، زما خور ښوونکې ده.", en: "My brother is a teacher, my sister is a teacher.", tag: "ښوونکی (m) / ښوونکې (f)" },
    ],
    pitfall: "Speakers agree with themselves too: a man says زه ستړی یم 'I'm tired', a woman says زه ستړې یم. Learn each noun with its gender, as the verb in the past will agree with it as well.",
  },
  {
    id: "g_neg",
    title: "Negation: نه, and مه for 'don't'",
    blurb: "Put نه before the verb; with perfective verbs it slips inside, after و- or after the first part.",
    body:
      "In the present, نه sits right before the verb: زه نه ځم 'I'm not going'. 'Is not' is نه دی / نه ده. With perfective forms, نه goes INSIDE the verb: after the prefix و- (ونه خوړه 'didn't eat'), after را / در / ور (رانه غلم 'I didn't come'), or between the two parts of a compound (لاړ نه شوم 'I didn't go', پوه نه شوم 'I didn't understand'). Commands use مه instead of نه: مه ځه 'don't go'. 'There isn't / there aren't' is نشته.",
    examples: [
      { nl: "زه نه ځم.", en: "I'm not going.", tag: "نه + present verb" },
      { nl: "دا ښه نه دی.", en: "This is not good.", tag: "نه دی = 'is not'" },
      { nl: "ما ډوډۍ ونه خوړه.", en: "I didn't eat (the bread).", tag: "و + نه + خوړه" },
      { nl: "زه پرون رانه غلم.", en: "I didn't come yesterday.", tag: "را + نه + غلم" },
      { nl: "نن اوبه نشته.", en: "There's no water today.", tag: "نشته = there isn't" },
    ],
    pitfall: "Don't put نه in front of a perfective verb: 'نه وخوړه' is wrong, say ونه خوړه. And never use نه in a command: 'don't go' is مه ځه.",
  },
  {
    id: "g_separable",
    title: "Past transitive verbs: ergativity",
    blurb: "In the PAST, the doer of a transitive verb goes into the oblique case and the verb agrees with the OBJECT.",
    body:
      "Present and past behave differently. In the PRESENT the verb agrees with the subject: زه ډوډۍ خورم. In the PAST of a transitive verb the doer takes the OBLIQUE form (ما، تا، هغه، هغې، موږ، تاسو، هغوی) and the verb agrees in gender and number with the object, which stays in the direct case. So 'I ate the bread' is literally 'by-me the bread was eaten': ما ډوډۍ وخوړه, with a feminine verb because ډوډۍ is feminine. Intransitive verbs (go, come, arrive, sit) don't do this: their subject stays direct and the verb agrees with it.",
    examples: [
      { nl: "زه ډوډۍ خورم.", en: "I eat bread. (present)", tag: "direct زه, verb agrees with 'I'" },
      { nl: "ما ډوډۍ وخوړه.", en: "I ate the bread. (past)", tag: "oblique ما, verb feminine like ډوډۍ" },
      { nl: "ما یو کتاب واخیست.", en: "I bought a book.", tag: "کتاب is masculine, so واخیست" },
      { nl: "هغې خپل ورور ولید.", en: "She saw her brother.", tag: "oblique هغې, verb agrees with ورور" },
      { nl: "هغې زه ولیدم.", en: "She saw me.", tag: "object زه, so the verb ends in -م" },
      { nl: "زه کور ته لاړم.", en: "I went home.", tag: "intransitive: direct زه, ending -م" },
    ],
    pitfall: "Never say 'زه ډوډۍ وخوړه' (direct pronoun + past transitive) or 'ما ډوډۍ وخوړم' (verb agreeing with the doer). The doer is oblique, the verb follows the object: ما ډوډۍ وخوړه.",
  },
  {
    id: "g_pronouns",
    title: "Personal pronouns: direct, oblique and possessive",
    blurb: "Pashto pronouns change form: زه 'I' as a plain subject, ما as the past doer or after a postposition, زما for 'my'.",
    body:
      "Direct (subject of present verbs and intransitive past): زه (I), ته (you), هغه (he / she), موږ (we), تاسو (you pl. or polite), هغوی (they). Oblique (doer of a past transitive verb, and after ته، سره، کې…): ما، تا، هغه (him)، هغې (her)، موږ، تاسو، هغوی. Possessive: زما (my), ستا (your), د هغه (his), د هغې (her), زموږ (our), ستاسو (your pl.), د هغوی (their). هغه also means 'that', and دا means 'this': the same words serve as 'he / she' and as demonstratives.",
    examples: [
      { nl: "زه، ته، هغه", en: "I, you, he / she", tag: "direct singular" },
      { nl: "موږ، تاسو، هغوی", en: "we, you (pl), they", tag: "direct plural" },
      { nl: "ما، تا، هغه، هغې", en: "me, you, him, her", tag: "oblique: past doer, after postpositions" },
      { nl: "زما، ستا، زموږ، ستاسو", en: "my, your, our, your (pl)", tag: "possessive" },
      { nl: "دا زما کتاب دی.", en: "This is my book.", tag: "دا = this, زما = my" },
    ],
    pitfall: "Don't build 'my' with د: it's زما, not 'د ما' (and ستا, not 'د تا'). Use تاسو, not ته, with elders and strangers, even for one person.",
  },
  {
    id: "g_word_order",
    title: "Questions and circumpositions keep the verb last",
    blurb: "Question words don't move the verb, and Pashto wraps nouns in two-part circumpositions: په … کې 'in', له … څخه 'from'.",
    body:
      "Asking a question does NOT change word order: the question word fills a normal slot and the verb stays final. Location and direction are often expressed with a piece before the noun and a piece after it: په … کې (in, at), له … څخه or له … نه (from), تر … پورې (until, up to), د … لپاره (for), له … سره (with). Some use only the second piece: کابل ته 'to Kabul'. The noun in between goes into the oblique case.",
    examples: [
      { nl: "ته څه خورې؟", en: "What are you eating? (lit. You what eat?)", tag: "question word in the object slot, verb last" },
      { nl: "هغه چېرته ځي؟", en: "Where is he going?", tag: "no inversion, verb still final" },
      { nl: "زه په کور کې یم.", en: "I'm at home.", tag: "په … کې = in, at" },
      { nl: "زه له کابل څخه راغلی یم.", en: "I have come from Kabul.", tag: "له … څخه = from" },
      { nl: "زه تر ماښامه پورې کار کوم.", en: "I work until the evening.", tag: "تر … پورې = until" },
      { nl: "دا ستا لپاره دی.", en: "This is for you.", tag: "د … لپاره: ستا already contains د" },
    ],
    pitfall: "Don't drop the second piece: په کور 'in house' sounds cut off, say په کور کې. And don't invert for questions ('خورې ته څه؟'): keep normal order, ته څه خورې؟",
  },
  {
    id: "g_pronunciation",
    title: "The Pashto sounds and alphabet",
    blurb: "Retroflex ټ ډ ړ ڼ, the special letters ښ ږ څ ځ, and the five kinds of ی are what mark a Pashto ear.",
    body:
      "Pashto uses the Arabic script with extra letters. ټ ډ ړ ڼ are retroflex: curl the tongue tip back. څ is 'ts' and ځ is 'dz'. ښ and ږ vary by region: in Kandahar (and in this course) they are retroflex sh and zh; in Peshawar and the north they become kh and g, so ښه 'good' is sha in Kandahar and kha in Peshawar. Short vowels are mostly not written, but the yes are: ی (-ay), ې (-e), ي (-i), ۍ (-əy) and ئ, and they change meaning.",
    examples: [
      { nl: "دال / ډال", en: "lentils / shield ( dal / ḍal )", tag: "plain د vs retroflex ډ" },
      { nl: "لوړ", en: "high ( lwaṛ )", tag: "ړ = retroflex flap" },
      { nl: "ښه", en: "good ( ṣ̌a, Peshawar: kha )", tag: "ښ = retroflex sh (Kandahar)" },
      { nl: "موږ", en: "we ( muẓ̌, Peshawar: mug )", tag: "ږ = retroflex zh (Kandahar)" },
      { nl: "څه / ځه", en: "what / go! ( tsa / dza )", tag: "څ = ts, ځ = dz" },
      { nl: "سړی / سړي", en: "man / men ( saṛay / saṛi )", tag: "ی (-ay) vs ي (-i)" },
    ],
    pitfall: "Don't type ی for every y: سړی 'man' and سړي 'men' are different words. And keep د and ډ, ت and ټ, ر and ړ apart: a plain d where a retroflex ډ belongs can change the word.",
  },
  {
    id: "g_plurals",
    title: "Plurals, and 'a' without 'the'",
    blurb: "Pashto has no article for 'the'; یو / یوه means 'a'. Plurals depend on gender and the noun's ending.",
    body:
      "A bare noun can mean 'the book' or 'a book'; add یو (masc.) or یوه (fem.) when you really mean 'a / one'. Plurals: masculine nouns ending in a consonant usually take -ونه if they are things (کتاب → کتابونه) and -ان if they are people or animals (هلک → هلکان). Masculine nouns in -ی switch to -ي (سړی → سړي). Feminine nouns in -ه switch to -ې (کوټه → کوټې). Some very common nouns are irregular and must be learned.",
    examples: [
      { nl: "کتاب → کتابونه", en: "book → books", tag: "-ونه: masculine things" },
      { nl: "هلک → هلکان", en: "boy → boys", tag: "-ان: masculine people and animals" },
      { nl: "سړی → سړي", en: "man → men", tag: "-ی → -ي" },
      { nl: "کوټه → کوټې", en: "room → rooms", tag: "feminine -ه → -ې" },
      { nl: "یو کتاب / کتاب", en: "a book / the book", tag: "no word for 'the'" },
    ],
    pitfall: "A few everyday plurals are irregular: نجلۍ → نجونې (girls), ورور → وروڼه (brothers), خور → خویندې (sisters). And the plural form changes again after a postposition (کتابونه → په کتابونو کې): see the oblique capsule.",
  },
  // ---- B1 capsules ----
  {
    id: "g_b1_past_intrans",
    title: "Simple past of intransitive verbs: the subject stays direct",
    blurb: "Verbs with no object (go, come, arrive, get up) agree with their subject in the past: زه لاړم، هغه راغی، هغه راغله.",
    body:
      "With verbs that take no object, the past is PERFECTIVE PAST STEM + ENDING, and the subject stays in the direct case. The endings are -م (I), -ې (you), -و (we), -ئ (you pl.), -ل (they, masc.) / -ې (they, fem.); the 3rd person singular differs for 'he' and 'she': ورسېد 'he arrived' (the masculine is sometimes written ورسېده too), ورسېده 'she arrived'. Simple verbs add the perfective prefix و- (رسېدل → ورسېدم). The most common verbs are irregular: تلل → لاړم 'I went' (also ولاړم), راتلل → راغلم 'I came', راغی 'he came', راغله 'she came', کېدل → شوم 'I became'.",
    examples: [
      { nl: "زه پرون بازار ته لاړم.", en: "I went to the market yesterday.", tag: "لاړ + م" },
      { nl: "ته کله راغلې؟", en: "When did you come?", tag: "راغل + ې" },
      { nl: "هغه ناوخته ورسېد.", en: "He arrived late.", tag: "he: ورسېد" },
      { nl: "هغه ناوخته ورسېده.", en: "She arrived late.", tag: "she: ورسېده" },
      { nl: "موږ نن وختي پاڅېدو.", en: "We got up early today.", tag: "پاڅېد + و" },
      { nl: "هغوی ماښام کور ته راغلل.", en: "They came home in the evening.", tag: "they (m): -ل" },
    ],
    pitfall: "Don't use the oblique here: 'ما لاړم' is wrong, say زه لاړم. The oblique doer is only for past verbs that have an object (see the ergativity capsule).",
  },
  {
    id: "g_b1_clitics",
    title: "Weak pronouns: مې، دې، یې، مو",
    blurb: "Four short unstressed pronouns lean on the first word of the sentence and mean my/me/I, your/you, his/her/their/him/them, our/your.",
    body:
      "Pashto has a set of weak pronouns: مې (1st sing.), دې (2nd sing.), یې (3rd person, singular AND plural), مو (1st AND 2nd plural). They can be a possessor (کتاب مې 'my book'), an object (زه یې پېژنم 'I know him'), or the doer of a past transitive verb (ډوډۍ مې وخوړه 'I ate'). They can never start a sentence: they sit in SECOND position, right after the first word or phrase. With a perfective verb in first position they slip in after و-: ویې خوره 'eat it!'.",
    examples: [
      { nl: "کتاب مې په کور کې دی.", en: "My book is at home.", tag: "مې = my" },
      { nl: "نن مې یو کتاب واخیست.", en: "I bought a book today.", tag: "مې = past doer, after the first word" },
      { nl: "زه یې پېژنم.", en: "I know him / her.", tag: "یې = object" },
      { nl: "پرون مې ونه لید.", en: "I didn't see him yesterday.", tag: "مې after the first word" },
      { nl: "نوم دې څه دی؟", en: "What's your name?", tag: "دې = your" },
    ],
    pitfall: "Weak pronouns cannot stand first ('مې کتاب' is wrong) and cannot be stressed. To emphasise, use the full form: زما کتاب 'MY book', ما وخوړه 'I ate it'. Also remember یې covers both him/her and them, and مو both us and you (pl).",
  },
  {
    id: "g_b1_perfect",
    title: "Present perfect: participle -لی + 'to be'",
    blurb: "Past stem + -لی (masc.) / -لې (fem.) / -لي (masc. pl.), followed by یم، یې، دی، ده …: 'has done'.",
    body:
      "Build the participle from the past stem (the infinitive): راغلل → راغلی, خوړل → خوړلی, لیدل → لیدلی, کول → کړی. It agrees like an adjective: -ی (masc. sing.), -ې (fem. sing. and fem. pl.), -ي (masc. pl.). INTRANSITIVE verbs agree with the subject: زه راغلی یم (a man), زه راغلې یم (a woman). TRANSITIVE verbs follow the ergative rule again: oblique doer, participle and copula agree with the object: ما ډوډۍ خوړلې ده. Use it for results that matter now, for experience (کله هم 'ever'), and with لا 'not yet'.",
    examples: [
      { nl: "زه راغلی یم.", en: "I have come. (a man speaking)", tag: "intransitive: agrees with 'I' (m)" },
      { nl: "زه راغلې یم.", en: "I have come. (a woman speaking)", tag: "feminine participle -ې" },
      { nl: "ما ډوډۍ خوړلې ده.", en: "I have eaten.", tag: "transitive: agrees with ډوډۍ (f)" },
      { nl: "موږ لا نه یو رسېدلي.", en: "We haven't arrived yet.", tag: "نه + copula moves before the participle" },
      { nl: "تا کله هم په الوتکه کې سفر کړی دی؟", en: "Have you ever travelled by plane?", tag: "experience: oblique تا" },
    ],
    pitfall: "'I have lived here for three years' is a PRESENT in Pashto: درې کاله کېږي چې دلته اوسېږم, not a perfect. And a woman must use the feminine participle: زه ستړې شوې یم.",
  },
  {
    id: "g_b1_imperfect",
    title: "Aspect: imperfective vs perfective, و- and stress",
    blurb: "Every Pashto verb has two aspects: an ongoing one (خوړله 'was eating') and a completed one (وخوړه 'ate').",
    body:
      "Pashto splits every tense by aspect. The IMPERFECTIVE views an action as ongoing or repeated; the PERFECTIVE views it as one complete event. Simple verbs make the perfective with the stressed prefix و-: خوړل → وخوړل, لیکل → ولیکل. Verbs with a prefix (راتلل, کښېناستل) or a first part (پاک کول, پوهېدل) take no و- in front: the stress moves to the front instead, so the two aspects can look identical in writing. (When را / در / ور sits on a simple verb, و- goes in the middle: رسېدل → راورسېدم.) A few common verbs swap stems (تلل → لاړ، کېدل → شو، کول → وکړ). In stories the imperfective past paints the background and the perfective past reports the event; به + imperfective past means 'used to'.",
    examples: [
      { nl: "ما ډوډۍ خوړله.", en: "I was eating.", tag: "imperfective past: no و-" },
      { nl: "ما ډوډۍ وخوړه.", en: "I ate.", tag: "perfective past: و-" },
      { nl: "کله چې زه ورسېدم، باران اورېده.", en: "When I arrived, it was raining.", tag: "event vs background" },
      { nl: "زه به هر اوړی کلي ته تلم.", en: "I used to go to the village every summer.", tag: "به + imperfective past = habit" },
      { nl: "زما نیکه به ډېرې کیسې کولې.", en: "My grandfather used to tell lots of stories.", tag: "habit; agrees with کیسې (f pl)" },
    ],
    pitfall: "Don't use the perfective for a habit or a background action: 'it was raining' is the imperfective باران اورېده. And don't add و- to a verb that already has را- or a first part: راغلم, not 'وراغلم'.",
  },
  {
    id: "g_b1_subjunctive",
    title: "The subjunctive and the modals: باید، غواړم، کولای شم",
    blurb: "After 'want', 'must' and 'can', Pashto uses the perfective present: غواړم چې لاړ شم 'I want to go'.",
    body:
      "The subjunctive is the PERFECTIVE PRESENT: perfective stem + the present endings: ولیکم، ولیکې، ولیکي، ولیکو، ولیکئ، ولیکي; for irregulars لاړ شم (go), راشم (come), وکړم (do), وخورم (eat). There is no infinitive in 'I want to go': it's 'I want that I go', غواړم چې لاړ شم (چې is often dropped). It follows غوښتل (want), باید (must, never changes), کولای شم (I can), اړتیا لرم (I need), and چې 'so that'. 'Can' also has a short potential form: راتلای شم 'I can come', نه شم راتلای 'I can't come'.",
    examples: [
      { nl: "زه غواړم چې کابل ته لاړ شم.", en: "I want to go to Kabul.", tag: "want + subjunctive" },
      { nl: "باید وختي ویده شم.", en: "I have to go to sleep early.", tag: "باید + subjunctive" },
      { nl: "زه نن نه شم راتلای.", en: "I can't come today.", tag: "potential: نه شم + راتلای" },
      { nl: "ته باید پښتو زده کړې.", en: "You need to learn Pashto.", tag: "زده کړې: no و- after an adjective" },
      { nl: "ته باید یوازې لاړ نه شې.", en: "You mustn't go alone.", tag: "نه inside the compound" },
    ],
    pitfall: "Don't use the imperfective after a modal for a single act: 'غواړم چې ځم' is off, say غواړم چې لاړ شم. The ending on the second verb matches whoever does it: زه غواړم چې ته راشې 'I want you to come'.",
  },
  {
    id: "g_b1_imperative",
    title: "The imperative: و- + stem + ه / ئ, and مه for 'don't'",
    blurb: "Give commands with the perfective stem: ولیکه 'write!'; add -ئ for several people or politely; forbid with مه + imperfective.",
    body:
      "Singular imperative = perfective stem + -ه: ولیکه 'write!', وخوره 'eat!', وګوره 'look!', واخله 'take!'. Plural or polite = -ئ: ولیکئ، وخورئ، کښېنئ. The irregulars mirror the subjunctive: راشه 'come!', لاړ شه 'go!', وکړه 'do!', ووایه 'say!', راوړه 'bring!'. Negative commands use مه + the IMPERFECTIVE: مه ځه 'don't go', مه خوره 'don't eat'. Soften with مهرباني وکړه / مهرباني وکړئ 'please'.",
    examples: [
      { nl: "دننه راشه!", en: "Come in!", tag: "irregular: راشه" },
      { nl: "خپل نوم ولیکه.", en: "Write your name.", tag: "و + لیک + ه" },
      { nl: "مهرباني وکړه، ورو خبرې وکړه.", en: "Please speak slowly.", tag: "مهرباني وکړه = please" },
      { nl: "مه ځه، لا وختي دی.", en: "Don't go, it's still early.", tag: "مه + imperfective" },
      { nl: "ویې خوره!", en: "Eat it!", tag: "weak pronoun یې after و-" },
    ],
    pitfall: "Don't use نه for 'don't!', and don't use the perfective after مه: 'مه لاړ شه' is wrong, say مه ځه. With elders and guests use the -ئ form: کښېنئ 'please sit down'.",
  },
  {
    id: "g_b1_demonstratives",
    title: "The future: به + the perfective present",
    blurb: "Put the little word به in second position and use the subjunctive form: زه به سبا راشم 'I'll come tomorrow'.",
    body:
      "Pashto has no separate future verb form. The particle به (unstressed, like the weak pronouns it sits after the first word or phrase) + the PERFECTIVE present gives a one-off future: زه به راشم 'I'll come'. به + the IMPERFECTIVE present gives an ongoing or repeated future: زه به هره ورځ درځم 'I'll come to you every day'. With وي ('will be') it often means 'probably': هغه به په کور کې وي 'he's probably at home'. Plain present tense also covers the near future: سبا ځم 'I'm going tomorrow'.",
    examples: [
      { nl: "زه به سبا راشم.", en: "I'll come tomorrow.", tag: "به + perfective present" },
      { nl: "بیا به سره ووینو.", en: "We'll see each other again.", tag: "به after the first word" },
      { nl: "زه به ورته زنګ ووهم.", en: "I'll call him.", tag: "زنګ وهل = to phone" },
      { nl: "هغه به اوس په کور کې وي.", en: "He's probably at home now.", tag: "به + وي = probably" },
      { nl: "زه به سبا نه راځم.", en: "I won't come tomorrow.", tag: "negative: usually imperfective" },
    ],
    pitfall: "به can't start a sentence ('به زه راشم' is wrong): زه به راشم. And به + a PAST verb is not the future: زه به تلم means 'I used to go' or 'I would go'.",
  },
  {
    id: "g_b1_ezafe",
    title: "The oblique case: د for 'of', and the declension classes",
    blurb: "After د and after postpositions, and as the past doer, nouns take the oblique form, and how they change depends on their class.",
    body:
      "Possession puts the owner FIRST with د: د سړي موټر 'the man's car' (lit. of man car). The owner, the noun inside a circumposition and the doer of a past transitive verb all go into the OBLIQUE case. How a noun changes depends on its class. Masculine in a consonant: singular unchanged (کور، ورور), plural -و (کورونه → کورونو، ماشومان → ماشومانو). Masculine in -ی: -ی → -ي (سړی → سړي), plural -یو (سړیو). Feminine in -ه: -ه → -ې (ښځه → ښځې), plural -و (ښځو). Feminine in -ۍ: unchanged in the singular (نجلۍ). Adjectives follow along: خپل → خپلې for a feminine noun.",
    examples: [
      { nl: "زما د ورور کور", en: "my brother's house", tag: "masc. consonant: ورور unchanged" },
      { nl: "د سړي موټر", en: "the man's car", tag: "سړی → سړي" },
      { nl: "زه له خپلې ښځې سره ځم.", en: "I'm going with my wife.", tag: "ښځه → ښځې, خپل → خپلې" },
      { nl: "دا ډوډۍ ماشومانو ته ورکړه.", en: "Give this food to the children.", tag: "plural -ان → -انو" },
      { nl: "سړي ډوډۍ وخوړه.", en: "The man ate.", tag: "oblique سړي as the past doer" },
    ],
    pitfall: "Don't forget the oblique after a postposition: 'په کورونه کې' is wrong, say په کورونو کې. And the owner comes before the thing owned: د ښار مرکز 'the city centre', never 'مرکز د ښار'.",
  },
  {
    id: "g_b1_comparison",
    title: "Comparatives & superlatives: تر … and تر ټولو",
    blurb: "Pashto adjectives don't change for 'more': you say 'this house than that house big is' with تر.",
    body:
      "There is no -er ending. Put the thing compared after تر (or له … نه) and keep the plain adjective: دا کور تر هغه کور لوی دی 'this house is bigger than that one'. For 'the most', compare with everything: تر ټولو لوی 'the biggest', تر ټولو ښه 'the best'. The adjective still agrees in gender: تر ټولو ښکلې نجلۍ. 'One of the …-est' is د … له … څخه یو. Intensify with ډېر 'very / much'.",
    examples: [
      { nl: "دا کور تر هغه کور لوی دی.", en: "This house is bigger than that house.", tag: "تر = than, adjective unchanged" },
      { nl: "کندهار تر کابل ګرم دی.", en: "Kandahar is hotter than Kabul.", tag: "تر + oblique" },
      { nl: "دا تر ټولو ښه لاره ده.", en: "This is the best way.", tag: "تر ټولو = most" },
      { nl: "هغه تر ما ګړندی لولي.", en: "He reads faster than me.", tag: "تر ما = than me" },
      { nl: "کابل د نړۍ له زړو ښارونو څخه یو دی.", en: "Kabul is one of the oldest cities in the world.", tag: "one of the …-est" },
    ],
    pitfall: "ډېر لوی means 'very big', not 'bigger'. Without تر there is no comparison. And 'than me' is تر ما (oblique), not 'تر زه'.",
  },
  {
    id: "g_b1_conditional",
    title: "Conditionals with که: real and unreal",
    blurb: "که + subjunctive for possible conditions; که + وای / past forms with به for imaginary ones.",
    body:
      "REAL (possible) condition: که + the subjunctive (perfective present) in the if-part, and به + subjunctive, the present or an imperative in the result: که باران ووري، زه به په کور کې پاتې شم. The result often opens with نو 'then'. UNREAL (imaginary) condition: که + the counterfactual وای 'were' or a past form, and the result uses به + a past form: که هغه دلته وای، زه به ډېر خوشحال وم. For the past ('would have'), use the pluperfect with به: موږ به تللي وو. کنه means 'otherwise'.",
    examples: [
      { nl: "که باران ووري، زه به په کور کې پاتې شم.", en: "If it rains, I'll stay at home.", tag: "real: subjunctive + به" },
      { nl: "که مرستې ته اړتیا لرې، ما ته ووایه.", en: "If you need help, tell me.", tag: "real + imperative" },
      { nl: "که هغه دلته وای، زه به ډېر خوشحال وم.", en: "If he were here, I would be very happy.", tag: "unreal: وای + به وم" },
      { nl: "که زه ستا پر ځای وای، ما به دا کار نه کاوه.", en: "If I were you, I wouldn't do this.", tag: "unreal: به + imperfective past" },
      { nl: "که باران نه وای، موږ به پارک ته تللي وو.", en: "If it hadn't rained, we would have gone to the park.", tag: "past unreal: به + pluperfect" },
    ],
    pitfall: "After a real که don't use the plain present for a single event: say که باران ووري, not 'که باران اوري' (that means 'whenever it rains'). And in the unreal result clause, به is still in second position.",
  },
  {
    id: "g_b1_relative",
    title: "Relative clauses: چې 'who / which / that'",
    blurb: "One word, چې, links a noun to its clause: هغه سړی چې هلته ناست دی 'the man who is sitting there'.",
    body:
      "Pashto uses چې for who, which and that. The clause follows the noun it describes, and the main verb still comes last. If the noun plays a role inside the clause after a postposition, a pronoun is left behind there: هغه نجلۍ چې ما ورسره خبرې وکړې 'the girl I talked with' (lit. with her). هغه څه چې means 'what' (the thing that), and څوک چې 'whoever'. چې also introduces 'that'-clauses after say, know and think.",
    examples: [
      { nl: "هغه سړی چې هلته ناست دی، زما ښوونکی دی.", en: "The man who is sitting there is my teacher.", tag: "subject relative" },
      { nl: "هغه کتاب چې ما ولوست، ډېر ښه و.", en: "The book (that) I read was very good.", tag: "object relative, ergative inside" },
      { nl: "هغه نجلۍ چې ما ورسره خبرې وکړې، زما ملګرې ده.", en: "The girl I talked with is my friend.", tag: "leftover pronoun ورسره" },
      { nl: "هغه څه چې ته یې وایې، رښتیا دي.", en: "What you're saying is true.", tag: "هغه څه چې = what" },
      { nl: "زه یو داسې څوک لټوم چې په پښتو پوهېږي.", en: "I'm looking for someone who understands Pashto.", tag: "یو داسې … چې = someone who" },
    ],
    pitfall: "Don't look for separate words for 'who' and 'which': چې does it all. And with a postposition you need the leftover pronoun (ورسره، ورته), not 'whom'.",
  },
  {
    id: "g_b1_passive",
    title: "کول vs کېدل: compound verbs and the passive",
    blurb: "Adjective or noun + کول 'make' is transitive; + کېدل 'become' is intransitive. The same کېدل builds the passive.",
    body:
      "Many Pashto verbs are an adjective or a noun + کول (make, do) or کېدل (become): پاک کول 'to clean' / پاک کېدل 'to become clean', خلاص کول 'to open' / خلاص کېدل 'to open (by itself)', جوړ کول 'to build, fix' / جوړ کېدل 'to get well, be built'. In the present they are often written as one word (پاکوم 'I clean'). The adjective part agrees with the object (with کول) or the subject (with کېدل): ما دروازه خلاصه کړه, دروازه خلاصه شوه. The PASSIVE uses کېدل with the infinitive of a transitive verb: لیکل کېږي 'is written', ولیکل شو 'was written'. A doer, if mentioned, comes with د … له خوا.",
    examples: [
      { nl: "ما دروازه خلاصه کړه.", en: "I opened the door.", tag: "کول: oblique doer, خلاصه agrees with دروازه" },
      { nl: "دروازه خلاصه شوه.", en: "The door opened.", tag: "کېدل: no doer" },
      { nl: "زه هره ورځ کوټه پاکوم.", en: "I clean the room every day.", tag: "present: written as one word" },
      { nl: "دلته په پښتو خبرې کېږي.", en: "Pashto is spoken here.", tag: "present passive with کېږي" },
      { nl: "دا لیک د ښوونکي له خوا ولیکل شو.", en: "This letter was written by the teacher.", tag: "past passive + د … له خوا" },
    ],
    pitfall: "Don't mix the pair: 'زه دروازه خلاصه شوه' is wrong. If someone does it to something, use کول with an oblique doer (ما دروازه خلاصه کړه); if it just happens, use کېدل (دروازه خلاصه شوه). And no و- in the perfective of these compounds: پاک کړ, not 'پاک وکړ'.",
  },
];
