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
];
