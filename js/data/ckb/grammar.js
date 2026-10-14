// Grammar capsules — Central Kurdish (Sorani), Arabic script, RTL.
// Short, pattern-based explanations in English; every example sentence is Sorani.
// (`nl` = target-language slot; here it holds Sorani written in Arabic script.)
window.__DECK = window.__DECK || {};
window.__DECK.ckb = window.__DECK.ckb || {};
window.__DECK.ckb.GRAMMAR = [
  {
    id: "g_v2",
    title: "Word order: the verb comes LAST (S-O-V)",
    blurb: "Kurdish is a Subject-Object-Verb language — the verb closes the sentence.",
    body:
      "Where English puts the verb straight after the subject ('I eat bread'), Sorani puts the object first and the verb at the very end ('I bread eat'). Time and place words also sit before the verb. Train your ear to wait for the action word — it arrives last.",
    examples: [
      { nl: "من نان دەخۆم.", en: "I eat bread. (lit. I bread eat)", tag: "Subject - Object - Verb" },
      { nl: "ئەو کتێبەکە دەخوێنێت.", en: "He reads the book. (lit. He the-book reads)", tag: "Verb still last" },
      { nl: "من سبەینێ دەچمە بازاڕ.", en: "I'm going to the market tomorrow.", tag: "Time word sits before the verb" },
    ],
    pitfall: "Don't copy English order. The finite verb almost always lands at the very end of the clause: 'I bread eat', not 'I eat bread'.",
  },
  {
    id: "g_modal",
    title: "The present tense: de- prefix + personal endings",
    blurb: "Build the present indicative by stacking de- (دە-) onto the present stem, then adding a personal ending.",
    body:
      "Sorani verbs conjugate as: dە- (marks the present/indicative) + PRESENT STEM + PERSONAL ENDING. The endings are -m (I), -y/-ît (you), -ê(t) (he/she), -în (we), -n (you pl / they). Learn one verb this way and the whole system opens up. Example stem: کردن 'to do', present stem که-.",
    examples: [
      { nl: "دەکەم / دەکەیت / دەکات", en: "I do / you do / he-she does", tag: "دە + که + m / -yt / -at" },
      { nl: "دەکەین / دەکەن", en: "we do / you (pl) & they do", tag: "-în (we), -n (plural)" },
      { nl: "من ئێستا دەڕۆم.", en: "I'm going now.", tag: "دە + ڕۆ (stem of 'to go') + m" },
      { nl: "ئێوە چی دەخۆن؟", en: "What are you (pl) eating?", tag: "دە + خۆ (eat) + n" },
    ],
    pitfall: "The dە- prefix carries stress and marks the present. In the negative it is REPLACED by نا- (na-): دەکەم 'I do' becomes ناکەم 'I don't do' — never 'نادەکەم'.",
  },
  {
    id: "g_dehet",
    title: "The ezafe linker (-î) and 'the' (-eke)",
    blurb: "A tiny -î glues a noun to its adjective or owner; -eke (ەکە) makes a noun definite ('the').",
    body:
      "To say 'my house' or 'a big book', Sorani links the two words with the ezafe vowel -î (ی): NOUN-î MODIFIER. Definiteness is a suffix, not a separate word: add -eke (ەکە) for 'the'. The two can stack: کتێبەکەی من = 'my book' (the-book-of me).",
    examples: [
      { nl: "ماڵی من", en: "my house (lit. house-OF me)", tag: "-î links house to its owner" },
      { nl: "کچێکی جوان", en: "a pretty girl", tag: "-î links noun to adjective" },
      { nl: "کتێبەکە", en: "the book", tag: "-eke = 'the' (definite)" },
      { nl: "کتێبەکەی من", en: "my book (the book of me)", tag: "definite -eke + ezafe + 'me'" },
    ],
    pitfall: "Don't drop the ezafe -î — 'ماڵ من' sounds broken. The linker is obligatory whenever a noun takes a following adjective or possessor: 'ماڵی من'.",
  },
  {
    id: "g_neg",
    title: "Negation: na- / ne- / nîye",
    blurb: "Negate the present with نا- (na-), the past with نە- (ne-), and 'is not' with نییە (nîye).",
    body:
      "For present-tense verbs, swap the dە- prefix for نا- (na-). For past-tense verbs, prefix نە- (ne-). The verb 'to be' negates with the standalone نییە (nîye) 'is not'. The negative prefix always sits at the FRONT of the verb.",
    examples: [
      { nl: "ناچم.", en: "I'm not going.", tag: "دەچم → ناچم (present na-)" },
      { nl: "ناخۆم.", en: "I don't eat / won't eat.", tag: "دەخۆم → ناخۆم" },
      { nl: "ئەمە باش نییە.", en: "This is not good.", tag: "نییە = 'is not' (copula)" },
      { nl: "نەهاتم.", en: "I didn't come.", tag: "هاتم → نەهاتم (past ne-)" },
    ],
    pitfall: "Present uses نا-, past uses نە- — don't mix them. And 'is not' is the separate word نییە, not a prefix: 'باش نییە', never 'نەباشە'.",
  },
  {
    id: "g_separable",
    title: "Past transitive verbs: the agent is a clitic",
    blurb: "In the PAST, a transitive verb doesn't take a subject ending. The doer is marked by a little attached clitic (=m, =t, =î, =man, =tan, =yan) — this is split ergativity.",
    body:
      "Present and past behave differently. In the PRESENT the verb agrees with the subject (an ending on the verb). In the PAST of a transitive verb the verb stays bare and the AGENT is shown by a mobile clitic that hooks onto the object (or an earlier word). Compare the pairs below — same 'I', different machinery.",
    examples: [
      { nl: "من نان دەخۆم.", en: "I eat bread. (present)", tag: "subject shown by -m ON the verb" },
      { nl: "من نانم خوارد.", en: "I ate bread. (past)", tag: "agent shown by =m ON 'nan', verb bare" },
      { nl: "تۆ نانت خوارد.", en: "You ate bread.", tag: "=t clitic = 'you' as the past agent" },
      { nl: "ئەوان نانیان خوارد.", en: "They ate bread.", tag: "=yan clitic = 'they' as the past agent" },
    ],
    pitfall: "In the past transitive, don't put a subject ending on the verb ('خواردم' for 'I ate bread' is wrong here). The doer rides as a clitic on the object: 'نانم خوارد'.",
  },
  {
    id: "g_pronouns",
    title: "Personal pronouns and the possessive clitics",
    blurb: "The free pronouns (min, to, ew…) don't change for case; the little clitics (=m, =t, =î…) carry possession and the past-tense agent.",
    body:
      "Free pronouns: من min (I), تۆ to (you), ئەو ew (he/she/it), ئێمە ême (we), ئێوە êwe (you pl), ئەوان ewan (they). Sorani does its case work with enclitics that attach to nouns: =m (my), =t (your), =î (his/her), =man (our), =tan (your pl), =yan (their) — the very same set that marks the agent of a past transitive verb.",
    examples: [
      { nl: "من / تۆ / ئەو", en: "I / you / he-she", tag: "free pronouns (subject)" },
      { nl: "ئێمە / ئێوە / ئەوان", en: "we / you (pl) / they", tag: "free pronouns (plural)" },
      { nl: "ناوم / ناوت / ناوی", en: "my name / your name / his-her name", tag: "clitics =m =t =î" },
      { nl: "کتێبمان / کتێبتان / کتێبیان", en: "our / your (pl) / their book", tag: "clitics =man =tan =yan" },
    ],
    pitfall: "Don't force the free pronoun to do possession ('کتێب من' for 'my book' is off). Attach the clitic: 'کتێبم' = my book, 'کتێبیان' = their book.",
  },
  {
    id: "g_word_order",
    title: "Questions and adpositions keep the verb last",
    blurb: "Question words don't move the verb, and Sorani wraps its objects in circumpositions (لە … ەوە) — but the verb still closes the clause.",
    body:
      "Asking a question does NOT trigger English-style inversion: the question word simply fills a normal slot and the verb stays final. Sorani also loves circumpositions — a piece before the noun and a piece after it (لە …ەوە 'from/at', بۆ 'to/for') — and these phrases still precede the verb.",
    examples: [
      { nl: "تۆ چی دەخۆیت؟", en: "What do you eat? (lit. You what eat?)", tag: "question word in the object slot, verb last" },
      { nl: "ئەو کوا دەڕوات؟", en: "Where is he going?", tag: "no inversion — verb still final" },
      { nl: "ئەو لە ماڵەوە دەمێنێتەوە.", en: "He stays at home.", tag: "circumposition لە …ەوە wraps 'home'" },
      { nl: "ئەمە بۆ تۆ.", en: "This is for you.", tag: "بۆ = 'for / to'" },
    ],
    pitfall: "Don't invert for questions ('دەخۆیت تۆ چی؟' is wrong). Keep normal order and just add the question word: 'تۆ چی دەخۆیت؟'.",
  },
  {
    id: "g_pronunciation",
    title: "The Sorani sounds and alphabet",
    blurb: "The throat consonants (ح خ غ ق) and the two R's (ر vs ڕ) are what mark a native ear.",
    body:
      "Sorani is written in a full-vowel Arabic script (each vowel has its own letter). The sounds that trip up English speakers live at the back of the throat: ح (deep H), خ (raspy KH), غ (voiced KH), ق (a K made deep down). Two R's contrast: a light tap ر versus a strongly trilled ڕ — and ڵ is a dark, velarised L.",
    examples: [
      { nl: "حەوت", en: "seven ( hewt )", tag: "ح = deep pharyngeal H, from the throat" },
      { nl: "خۆر", en: "sun ( xor )", tag: "خ = raspy KH (as in German 'Bach')" },
      { nl: "قەڵەم", en: "pen ( qelem )", tag: "ق = Q made deep in the throat, not K" },
      { nl: "کەر / کەڕ", en: "donkey / deaf ( ker / kerr )", tag: "tapped ر vs trilled ڕ — a real minimal pair" },
      { nl: "ماڵ", en: "house, home ( mall )", tag: "ڵ = dark, velarised L" },
    ],
    pitfall: "Don't flatten ح خ غ ق into a plain English H or K — they are made further back. And the two R's can change the word: 'ker' (donkey) vs 'kerr' (deaf).",
  },
  {
    id: "g_plurals",
    title: "Plurals and definiteness: -êk, -eke, -an",
    blurb: "One noun stacks three layers: -êk 'a/an', -eke/-ekan 'the', and -an the plain plural. And Sorani has NO grammatical gender.",
    body:
      "Sorani marks number and definiteness with suffixes, not articles. Indefinite singular = -êk (ێک) 'a/an'. Definite singular = -eke (ەکە) 'the'; its plural is -ekan (ەکان). The plain (often oblique) plural is -an (ان). Best of all: nouns have no gender to memorise.",
    examples: [
      { nl: "کتێب → کتێبێک", en: "book → a book", tag: "-êk = 'a/an' (indefinite)" },
      { nl: "کتێب → کتێبەکە", en: "book → the book", tag: "-eke = 'the' (definite singular)" },
      { nl: "کتێب → کتێبەکان", en: "book → the books", tag: "-ekan = 'the' (definite plural)" },
      { nl: "منداڵ → منداڵان", en: "child → children", tag: "-an = plain plural" },
    ],
    pitfall: "Keep the layers apart: -êk is indefinite, -eke/-ekan is definite, -an is the bare plural. They attach to the SAME noun — 'کتێبێک' (a book) vs 'کتێبەکە' (the book).",
  },
  // ---- B1 capsules ----
  {
    id: "g_b1_past_intrans",
    title: "Simple past of intransitive verbs: stem + endings",
    blurb: "Take the infinitive, drop -ن, and add -م, -یت, nothing, -ین, -ن, -ن — no دە- prefix.",
    body:
      "With verbs that take no object (go, come, arrive, get up) the simple past is regular: PAST STEM + PERSONAL ENDING. The past stem is the infinitive minus the final -ن: چوون → چوو-, هاتن → هات-, گەیشتن → گەیشت-. The endings are -م (I), -یت (you), none (he/she), -ین (we), -ن (you pl.), -ن (they). So: چووم، چوویت، چوو، چووین، چوون. Here the ending really agrees with the subject — the opposite of transitive verbs, where the doer is a clitic (see the past-transitive capsule).",
    examples: [
      { nl: "من دوێنێ چووم بۆ بازاڕ.", en: "I went to the market yesterday.", tag: "çû- + -m" },
      { nl: "تۆ کەی هاتیت؟", en: "When did you come?", tag: "hat- + -ît" },
      { nl: "ئەو درەنگ گەیشت.", en: "He/she arrived late.", tag: "3sg = bare past stem" },
      { nl: "ئێمە ئەمڕۆ زوو هەستاین.", en: "We got up early today.", tag: "hesta- + -yn" },
    ],
    pitfall: "Don't add دە- for a finished event. دەچووم means 'I used to go / I was going', not 'I went'. Also don't confuse the 3sg past (no ending) with the present: چوو (went) vs دەچێت (goes).",
  },
  {
    id: "g_b1_clitics",
    title: "Pronoun clitics: four jobs and where they attach",
    blurb: "The short endings -م -ت -ی -مان -تان -یان hop onto whatever word comes before the verb.",
    body:
      "Sorani has one set of short pronoun endings: -م (I/my/me), -ت (you), -ی (he/she/it), -مان (we/our), -تان (you pl.), -یان (they). They are glued onto the preceding word and do four jobs: (1) possessor on a noun — کتێبەکەم 'my book'; (2) the DOER of a past transitive verb — کتێبێکم کڕی 'I bought a book'; (3) pronoun after a preposition — لەگەڵم 'with me', بۆت 'for you'; (4) object inside the verb — دەیبینم 'I see him/her/it'. Where do they land? On the word just before the verb (usually the object); if a prefix like نە- or دە- is there, the clitic sits right after it: نەمبینی 'I didn't see (him/it)'. English uses separate pronoun words; Kurdish tucks them in.",
    examples: [
      { nl: "کتێبەکەم لە ماڵەوەیە.", en: "My book is at home.", tag: "possessor on the noun" },
      { nl: "ئەمڕۆ کتێبێکم کڕی.", en: "I bought a book today.", tag: "doer clitic on the object" },
      { nl: "دوێنێ نەمبینی.", en: "I didn't see him/her/it yesterday.", tag: "clitic after ne- prefix" },
      { nl: "لەگەڵم وەرە.", en: "Come with me.", tag: "clitic after the preposition" },
      { nl: "ئەمە بۆتە.", en: "This is for you.", tag: "بۆ + ت + ە" },
    ],
    pitfall: "Clitics are not words — they can't stand alone or be stressed. To emphasise, add the full pronoun: من کتێبێکم کڕی. And in the past, the verb stays 3sg whoever the doer is: ئێمە کتێبێکمان کڕی.",
  },
  {
    id: "g_b1_perfect",
    title: "Present perfect: -ووە / -یوە",
    blurb: "Past stem + -ووە says 'has done' — with the same doer-clitic split as the simple past.",
    body:
      "Build the participle from the past stem: after a consonant add -وو (خوارد → خواردوو), after -ی add -یو (بینی → بینیو). The perfect then adds a copula: INTRANSITIVE verbs take personal endings — گەیشتووم، گەیشتوویت، گەیشتووە، گەیشتووین، گەیشتوون. TRANSITIVE verbs again keep the doer as a clitic on the object and end in -ە: نانم خواردووە 'I have eaten'. Use it for results that matter now, for experience (هەرگیز … نەکردووە), and with هێشتا 'not yet'.",
    examples: [
      { nl: "من گەیشتووم.", en: "I have arrived.", tag: "intransitive: ending -م" },
      { nl: "نانم خواردووە.", en: "I have eaten.", tag: "transitive: clitic -م + verb in -ە" },
      { nl: "هێشتا نەگەیشتووین.", en: "We haven't arrived yet.", tag: "ne- + participle" },
      { nl: "هەرگیز بە شەمەندەفەر گەشتت کردووە؟", en: "Have you ever travelled by train?", tag: "experience" },
    ],
    pitfall: "'I have lived here for three years' is a PRESENT in Kurdish: سێ ساڵە لێرە دەژیم — not a perfect. The perfect is for completed events with present relevance.",
  },
  {
    id: "g_b1_imperfect",
    title: "Past progressive & habitual: دە- + past stem",
    blurb: "Put دە- before the past stem to say 'was doing' or 'used to do'.",
    body:
      "The imperfect is built exactly like the simple past, with the present prefix دە- in front: دەچووم 'I was going / used to go', دەخوارد 'he was eating'. For transitive verbs the doer is still a clitic: نانم دەخوارد 'I was eating'. Stories use the two together: the imperfect paints the background, the simple past reports the event that happened in it. States like 'know' and 'live' are almost always imperfect in the past: دەژیام، دەزانی.",
    examples: [
      { nl: "لە منداڵیدا هەموو هاوینێک دەچوومە گوند.", en: "As a child I went to the village every summer.", tag: "habit" },
      { nl: "کاتێک گەیشتم، باران دەباری.", en: "When I arrived, it was raining.", tag: "background vs event" },
      { nl: "ئێمە شەوانە لەسەر سەربان دەنووستین.", en: "At night we used to sleep on the roof.", tag: "habit" },
      { nl: "باپیرم چیرۆکی زۆری دەزانی.", en: "My grandfather knew many stories.", tag: "past state" },
    ],
    pitfall: "Don't use the simple past for a habit or an interrupted action. 'I was eating when you called' = نانم دەخوارد کاتێک تەلەفۆنت کرد: imperfect for the meal, simple past for the call.",
  },
  {
    id: "g_b1_subjunctive",
    title: "The subjunctive (ب-) and modal verbs",
    blurb: "After want, must, can and need, Sorani uses ب- + present stem: 'I want that I go'.",
    body:
      "The subjunctive is ب- + present stem + the present endings: بچم، بچیت، بچێت، بچین، بچن. The negative uses نە- instead: نەچم. It follows modals and linkers: دەمەوێت (I want), دەبێت (must), دەتوانم (I can), پێویستە (it's necessary), با (let), بۆ ئەوەی (so that), پێش ئەوەی (before). There is no infinitive: 'I want to go' is 'I want that I go' — دەمەوێت بچم. Common subjunctive forms: بخۆم، بکەم، بدەم، ببینم، بزانم، بڕۆم، بێم (come). With separable prefixes ب goes inside: تێبگەم، فێر ببم. Negative modals: نابێت 'must not', ناتوانم 'can't', پێویست نییە 'no need'. دەکرێت = 'it's possible / may'.",
    examples: [
      { nl: "دەمەوێت بچم بۆ هەولێر.", en: "I want to go to Hewlêr.", tag: "want + subjunctive" },
      { nl: "دەبێت زوو بخەوم.", en: "I have to sleep early.", tag: "must + subjunctive" },
      { nl: "ناتوانم ئەمڕۆ بێم.", en: "I can't come today.", tag: "can't + subjunctive" },
      { nl: "پێویستە کوردی فێر ببیت.", en: "You need to learn Kurdish.", tag: "need + subjunctive" },
      { nl: "نابێت لێرە جگەرە بکێشیت.", en: "You must not smoke here.", tag: "prohibition" },
    ],
    pitfall: "Never put دە- on the second verb: 'دەمەوێت دەچم' is wrong, say دەمەوێت بچم. The person ending on the second verb must match the person who does it.",
  },
  {
    id: "g_b1_imperative",
    title: "The imperative: ب- + stem, and مە- for 'don't'",
    blurb: "Give commands with ب- + stem; plural/polite adds -ن; negative commands use مە-.",
    body:
      "Singular imperative = ب- + present stem, with -ە added if the stem ends in a consonant: بخۆ 'eat!', بکە 'do!', بڕۆ 'go!', بنووسە 'write!', بخوێنە 'read!'. Plural or polite = add -ن: بخۆن، بنووسن. Negative commands replace ب- with مە-: مەڕۆ 'don't go', مەکە 'don't do', مەنووسە 'don't write'. Irregular: وەرە 'come!' (plural وەرن). Add تکایە for politeness, or use the question form (دەتوانیت ... بکەیت؟) with strangers and elders.",
    examples: [
      { nl: "وەرە ژوورەوە!", en: "Come in!", tag: "irregular: وەرە" },
      { nl: "ناوەکەت بنووسە.", en: "Write your name.", tag: "stem ends in consonant: + ە" },
      { nl: "تکایە هێواش قسە بکە.", en: "Please speak slowly.", tag: "تکایە + imperative" },
      { nl: "مەڕۆ، هێشتا زووە.", en: "Don't go, it's still early.", tag: "مە- = don't" },
      { nl: "بیخۆ!", en: "Eat it!", tag: "object clitic inside the verb" },
    ],
    pitfall: "Don't use نا- for 'don't!' (that's the present negative). A command to several people or to someone senior takes -ن: بخۆن، فەرموون.",
  },
  {
    id: "g_b1_demonstratives",
    title: "This / that: ئەم … ە and ئەو … ە",
    blurb: "Put ئەم or ئەو before the noun and add -ە to the noun: ئەم کتێبە 'this book'.",
    body:
      "Sorani demonstratives wrap the noun: ئەم + NOUN + ە = 'this …' (near), ئەو + NOUN + ە = 'that …' (far). The plural adds -انە: ئەم کتێبانە 'these books', ئەو شارانە 'those cities'. On their own they become ئەمە 'this one' and ئەوە 'that one' (also used as 'it is …': ئەوە کێیە؟ 'who is that?'). The noun with ئەم/ئەو is already definite, so you do not also add -ەکە.",
    examples: [
      { nl: "ئەم کتێبە زۆر باشە.", en: "This book is very good.", tag: "ئەم + noun + ە" },
      { nl: "ئەو شارە زۆر جوانە.", en: "That city is very beautiful.", tag: "ئەو + noun + ە" },
      { nl: "ئەم کتێبانە هی منن.", en: "These books are mine.", tag: "plural -انە" },
      { nl: "ئەوە چییە؟", en: "What is that?", tag: "stand-alone ئەوە" },
      { nl: "ئەمە کێیە؟", en: "Who is this?", tag: "stand-alone ئەمە" },
    ],
    pitfall: "Don't stop at ئەم کتێب or stack the definite suffix (ئەم کتێبەکە). Nouns that end in a vowel keep the -ە as a separate sound (ئەم کورسییە 'this chair').",
  },
  {
    id: "g_b1_ezafe",
    title: "The ezafe -ی in detail: chains and possessors",
    blurb: "One little -ی links noun to adjective, noun to possessor and noun to noun — and it chains.",
    body:
      "Whenever a noun is followed by something that describes or owns it, the noun takes the ezafe -ی: ماڵی باوکم 'my father's house', کتێبی نوێ 'new book', شاری هەولێر 'the city of Hewlêr'. After a vowel it is still written -ی (دەرگای ماڵ 'door of the house'). The order is HEAD first, then describers, then the owner, each link marked by -ی: کتێبی نوێی خوشکم 'my sister's new book'. With -ێک the ezafe still appears: کتێبێکی نوێ 'a new book'. With the definite -ەکە, the ezafe attaches after it: ماڵەکەی ئارام 'Aram's house'. Plural definite adjectives are glued: کتێبە نوێکان 'the new books'.",
    examples: [
      { nl: "ماڵی باوکم گەورەیە.", en: "My father's house is big.", tag: "noun + ی + possessor" },
      { nl: "کتێبێکی نوێم کڕی.", en: "I bought a new book.", tag: "-ێک + ی + adjective" },
      { nl: "کتێبی نوێی خوشکم لێرەیە.", en: "My sister's new book is here.", tag: "chain: noun - adj - owner" },
      { nl: "دەرگای ماڵەکە کراوەیە.", en: "The door of the house is open.", tag: "after a vowel" },
      { nl: "ماڵەکەی ئارام لە سلێمانییە.", en: "Aram's house is in Silêmanî.", tag: "-ەکە + ی" },
    ],
    pitfall: "No ezafe after a verb or a demonstrative (ئەم کتێبە نوێیە, not ئەم کتێبی نوێ). And possessor clitic OR ezafe — not both: کتێبی من or کتێبەکەم, never کتێبی منم.",
  },
  {
    id: "g_b1_comparison",
    title: "Comparatives & superlatives: -تر, -ترین",
    blurb: "Add -تر to the adjective for 'more', لە for 'than', and -ترین for 'most'.",
    body:
      "Comparison is simple: ADJECTIVE + تر. گەورە → گەورەتر 'bigger', باش → باشتر 'better', جوان → جوانتر 'prettier'. 'Than' is لە placed before the thing compared: هەولێر لە سلێمانی گەرمترە. 'The most' adds -ین: باشترین، گەورەترین، جوانترین. Equality uses وەک 'like / as'. 'One of the most …' = یەکێکە لە … ترین …. Intensify with زۆر or زۆر زۆر; never put 'more' before the adjective.",
    examples: [
      { nl: "ئەم ماڵە لەو ماڵە گەورەترە.", en: "This house is bigger than that house.", tag: "-تر + لە" },
      { nl: "هەولێر لە سلێمانی گەرمترە.", en: "Hewlêr is hotter than Silêmanî.", tag: "لە = than" },
      { nl: "ئەمە باشترین ڕێگایە.", en: "This is the best way.", tag: "-ترین" },
      { nl: "ئەو زۆر خێراتر لە من دەخوێنێتەوە.", en: "He reads much faster than me.", tag: "adverbial comparative" },
      { nl: "هەولێر یەکێکە لە کۆنترین شارەکانی جیهان.", en: "Hewlêr is one of the oldest cities in the world.", tag: "one of the …-est" },
    ],
    pitfall: "Don't translate 'more beautiful' word for word (زیاتر جوان is wrong); say جوانتر. And 'than' is لە, not لەگەڵ.",
  },
  {
    id: "g_b1_conditional",
    title: "Conditionals with ئەگەر: real and unreal",
    blurb: "ئەگەر + subjunctive for possible conditions; ئەگەر + -ایە for imaginary ones.",
    body:
      "REAL (possible) condition: ئەگەر + subjunctive in the if-part, present or imperative in the result: ئەگەر باران ببارێت، لە ماڵەوە دەمێنمەوە. UNREAL (imaginary) condition: ئەگەر + a past form with -ایە (هەبوایە 'had', بوایە 'were'), and the result clause uses دە- + past (the imperfect): ئەگەر کاتم هەبوایە، دەهاتم 'if I had time, I would come / if I had had time, I would have come'. The same pattern covers present and past unreal conditions; context decides. Spelling varies: you will see both هەبوایە and هەبووایە, بوایە and بووایە. مەگەر means 'unless / only if'.",
    examples: [
      { nl: "ئەگەر باران ببارێت، لە ماڵەوە دەمێنمەوە.", en: "If it rains, I'll stay at home.", tag: "real: subjunctive" },
      { nl: "ئەگەر پێویستت بە یارمەتی بێت، پێم بڵێ.", en: "If you need help, tell me.", tag: "real + imperative" },
      { nl: "ئەگەر کاتم هەبوایە، دەهاتم.", en: "If I had time, I would come.", tag: "unreal: -ایە + imperfect" },
      { nl: "ئەگەر ئەو لێرە بوایە، خۆشحاڵ دەبووم.", en: "If he were here, I would be happy.", tag: "unreal" },
      { nl: "ئەگەر پارەم هەبوایە، ئۆتۆمبێلێکم دەکڕی.", en: "If I had money, I would buy a car.", tag: "unreal" },
    ],
    pitfall: "After a real ئەگەر don't use the future-style present (دەبارێت). Use the subjunctive ببارێت. And don't mix: unreal ئەگەر pairs with دە-+past in the result clause.",
  },
  {
    id: "g_b1_relative",
    title: "Relative clauses: ئەو … ی کە …",
    blurb: "Noun + ezafe -ی + کە + clause: 'the man who …', 'the book that …'.",
    body:
      "Sorani has no who/which/that words. Instead the noun takes the ezafe -ی and the clause follows, usually introduced by کە (often dropped in speech): ئەو پیاوەی کە لەوێ دانیشتووە 'the man who is sitting there'. The relative clause comes BEFORE the main predicate and the verb of the main clause stays last. If the head noun would be the object of a preposition inside the clause, a pronoun clitic is left behind: ئەو کچەی کە لەگەڵی قسەم کرد 'the girl I talked with' (lit. 'with her'). ئەوەی … means 'what / the one who': ئەوەی دەیڵێیت ڕاستە.",
    examples: [
      { nl: "ئەو پیاوەی کە لەوێ دانیشتووە مامۆستامە.", en: "The man who is sitting there is my teacher.", tag: "subject relative" },
      { nl: "ئەو کتێبەی کە خوێندمەوە زۆر باش بوو.", en: "The book that I read was very good.", tag: "object relative" },
      { nl: "ئەو کچەی کە لەگەڵی قسەم کرد هاوڕێمە.", en: "The girl I talked with is my friend.", tag: "resumptive clitic لەگەڵی" },
      { nl: "ئەوەی دەیڵێیت ڕاستە.", en: "What you say is true.", tag: "ئەوەی = what" },
      { nl: "دەبێت کەسێک بدۆزمەوە کە کوردی بزانێت.", en: "I have to find someone who knows Kurdish.", tag: "indefinite head + subjunctive" },
    ],
    pitfall: "Don't leave out the ezafe -ی after the noun, and don't copy the English 'whom': with a preposition you need the leftover clitic (لەگەڵی, لێی), not a separate word.",
  },
  {
    id: "g_b1_passive",
    title: "The passive: -را and -رێت (also 'it is possible')",
    blurb: "Use the passive when the doer doesn't matter: کرا 'was done', دەکرێت 'is done / can be done'.",
    body:
      "The past passive adds -را to the past stem: کردن → کرا, نووسین → نووسرا, بینین → بینرا, کردنەوە → کرایەوە. The present passive adds -رێت: دەکرێت، دەنووسرێت، دەبینرێت، دەگوترێت. The verb agrees with the thing, not with a doer, and the doer (if named at all) comes with لەلایەن … ەوە. Very common: دەکرێت = 'it is possible / may I?' and دەگوترێت = 'it is said'.",
    examples: [
      { nl: "ئەم کتێبە لە ساڵی ڕابردوو نووسرا.", en: "This book was written last year.", tag: "past passive -را" },
      { nl: "دەرگاکە کرایەوە.", en: "The door was opened.", tag: "کردنەوە → کرایەوە" },
      { nl: "لێرە بە کوردی قسە دەکرێت.", en: "Kurdish is spoken here.", tag: "present passive -رێت" },
      { nl: "ئەمە دەکرێت؟", en: "Is this allowed / possible?", tag: "دەکرێت = possible" },
      { nl: "ڕاپۆرتەکە ئەمڕۆ بڵاو کرایەوە.", en: "The report was published today.", tag: "news style" },
    ],
    pitfall: "Don't put the doer in with بە as in English 'by'. Use لەلایەن: ڕاپۆرتەکە لەلایەن حکومەتەوە بڵاو کرایەوە. And remember passive verbs don't take the doer clitic.",
  },
];
