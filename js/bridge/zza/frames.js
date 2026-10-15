/* Kurmanji to Zazaki bridge (kmr>zza): frames. Every Zazaki form is cited in P.SOURCES; see docs/bridges/zazaki.md. */
(function () {
  const B = (window.__BRIDGES = window.__BRIDGES || {});
  const P = (B["kmr-zza"] = B["kmr-zza"] || {});
  P.FRAMES = [
 {
  "id": "copula",
  "order": 1,
  "level": "A1",
  "sieve": 5,
  "title": "“To be”: a, î, o, ê",
  "pattern": {
   "kmr": "Ew [slot] e",
   "zza": "O [slot] o",
   "en": "He is [slot]"
  },
  "card": {
   "kmr>zza": {
    "en": "Same place as your im / e / in: a small word after the noun. But Zazaki shows gender: o for a man or masculine noun, a for a woman, feminine noun or ez, ê for plurals, î for 'you' (to a man). After a vowel it takes y: ya, yo, yê.",
    "ku": "Cihê wê wek im / e / in a te ye: peyveke piçûk li pey navdêrê. Lê zazakî zayendê nîşan dide: o ji bo mêr an navdêra nêr, a ji bo jin, navdêra mê û ez, ê ji bo pirhejmarê, î ji bo 'tu' (ji mêr re). Piştî dengdêrê y digire: ya, yo, yê."
   }
  },
  "items": [
   {
    "id": "cop_01",
    "en": "He is Roşan.",
    "kmr": "Ew Roşan e.",
    "zza": "O Roşan o.",
    "align": [
     {
      "kmr": "Ew",
      "zza": "O",
      "k": "different",
      "note": "o = he; a = she"
     },
     {
      "kmr": "Roşan",
      "zza": "Roşan",
      "k": "same"
     },
     {
      "kmr": "e",
      "zza": "o",
      "k": "grammar",
      "note": "copula o: masculine subject"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cop_02",
    "en": "She is Asmîn.",
    "kmr": "Ew Asmîn e.",
    "zza": "A Asmîn a.",
    "align": [
     {
      "kmr": "Ew",
      "zza": "A",
      "k": "different",
      "note": "a = she"
     },
     {
      "kmr": "Asmîn",
      "zza": "Asmîn",
      "k": "same"
     },
     {
      "kmr": "e",
      "zza": "a",
      "k": "grammar",
      "note": "copula a: feminine subject"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cop_03",
    "en": "Who are they? They are teachers.",
    "kmr": "Ew kî ne? Ew mamoste ne.",
    "zza": "Ê kam ê? Ê malim ê.",
    "align": [
     {
      "kmr": "Ew",
      "zza": "Ê",
      "k": "different",
      "note": "ê = they"
     },
     {
      "kmr": "kî",
      "zza": "kam",
      "k": "different"
     },
     {
      "kmr": "ne",
      "zza": "ê",
      "k": "grammar",
      "note": "plural copula ê"
     },
     {
      "kmr": "Ew",
      "zza": "Ê",
      "k": "different"
     },
     {
      "kmr": "mamoste",
      "zza": "malim",
      "k": "different"
     },
     {
      "kmr": "ne",
      "zza": "ê",
      "k": "grammar"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cop_04",
    "en": "How are you, are you well? (to a man)",
    "kmr": "Tu çawa yî, baş î?",
    "zza": "Ti senîn î, baş î?",
    "align": [
     {
      "kmr": "Tu",
      "zza": "Ti",
      "k": "cognate"
     },
     {
      "kmr": "çawa",
      "zza": "senîn",
      "k": "different"
     },
     {
      "kmr": "yî",
      "zza": "î",
      "k": "grammar",
      "note": "î: you, said to a man"
     },
     {
      "kmr": "baş",
      "zza": "baş",
      "k": "same"
     },
     {
      "kmr": "î",
      "zza": "î",
      "k": "same"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cop_05",
    "en": "Our Eyşe is beautiful.",
    "kmr": "Eyşa me xweşik e.",
    "zza": "Eyşa ma weşik a.",
    "align": [
     {
      "kmr": "Eyşa",
      "zza": "Eyşa",
      "k": "same",
      "note": "feminine linking -a"
     },
     {
      "kmr": "me",
      "zza": "ma",
      "k": "cognate"
     },
     {
      "kmr": "xweşik",
      "zza": "weşik",
      "k": "sound",
      "rule": "w-xw"
     },
     {
      "kmr": "e",
      "zza": "a",
      "k": "grammar",
      "note": "copula a: feminine subject"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cop_06",
    "en": "Your pen is sharp.",
    "kmr": "Qelema te tûj e.",
    "zza": "Qelema to tûj a.",
    "align": [
     {
      "kmr": "Qelema",
      "zza": "Qelema",
      "k": "same",
      "note": "qeleme drops its -e before -a"
     },
     {
      "kmr": "te",
      "zza": "to",
      "k": "cognate"
     },
     {
      "kmr": "tûj",
      "zza": "tûj",
      "k": "same"
     },
     {
      "kmr": "e",
      "zza": "a",
      "k": "grammar",
      "note": "copula a: qeleme is feminine"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cop_07",
    "en": "We are from Kurdistan.",
    "kmr": "Em ji Kurdistanê ne.",
    "zza": "Ma Kurdistan ra yê.",
    "align": [
     {
      "kmr": "Em",
      "zza": "Ma",
      "k": "cognate",
      "note": "ma: one form for subject and object"
     },
     {
      "kmr": "ji Kurdistanê",
      "zza": "Kurdistan ra",
      "k": "grammar",
      "note": "ji X becomes X ra"
     },
     {
      "kmr": "ne",
      "zza": "yê",
      "k": "grammar",
      "note": "plural copula ê, with y after a vowel"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cop_08",
    "en": "Why is your classroom narrow?",
    "kmr": "Dersxaneya we çima teng e?",
    "zza": "Dersxaneyê şima çira teng o?",
    "align": [
     {
      "kmr": "Dersxaneya",
      "zza": "Dersxaneyê",
      "k": "grammar",
      "note": "masculine in Zazaki, so -yê"
     },
     {
      "kmr": "we",
      "zza": "şima",
      "k": "different"
     },
     {
      "kmr": "çima",
      "zza": "çira",
      "k": "cognate"
     },
     {
      "kmr": "teng",
      "zza": "teng",
      "k": "same"
     },
     {
      "kmr": "e",
      "zza": "o",
      "k": "grammar",
      "note": "copula o: masculine subject"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cop_09",
    "en": "What is her name?",
    "kmr": "Navê wê çi ye?",
    "zza": "Nameyê aye çi yo?",
    "align": [
     {
      "kmr": "Navê",
      "zza": "Nameyê",
      "k": "sound",
      "rule": "m-v",
      "note": "name is masculine: -yê"
     },
     {
      "kmr": "wê",
      "zza": "aye",
      "k": "different"
     },
     {
      "kmr": "çi",
      "zza": "çi",
      "k": "same"
     },
     {
      "kmr": "ye",
      "zza": "yo",
      "k": "grammar",
      "note": "yo: o after a vowel"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cop_10",
    "en": "Her name is Roşna.",
    "kmr": "Navê wê Roşna ye.",
    "zza": "Nameyê aye Roşna ya.",
    "align": [
     {
      "kmr": "Navê",
      "zza": "Nameyê",
      "k": "sound",
      "rule": "m-v"
     },
     {
      "kmr": "wê",
      "zza": "aye",
      "k": "different"
     },
     {
      "kmr": "Roşna",
      "zza": "Roşna",
      "k": "same"
     },
     {
      "kmr": "ye",
      "zza": "ya",
      "k": "grammar",
      "note": "ya: a after a vowel"
     }
    ],
    "src": "lez"
   }
  ],
  "pi": [
   {
    "id": "cop_pi1",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Ti senîn î?",
    "options": [
     "How are you? (to a man)",
     "How are you? (to a woman)"
    ],
    "answer": 0,
    "why": {
     "en": "The little î after the word is 'you are', said to a man. With a woman Zazaki uses -a instead, as in Ti ameya 'you came'.",
     "ku": "Î-ya piçûk a li pey peyvê 'tu yî' ye, ji mêrekî re. Ji jinekê re zazakî -a bi kar tîne, wek Ti ameya 'tu hatî'."
    },
    "src": "lez"
   },
   {
    "id": "cop_pi2",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Ê malim ê.",
    "options": [
     "They are teachers.",
     "He is a teacher."
    ],
    "answer": 0,
    "why": {
     "en": "Ê at the start and ê at the end both mean plural: 'they are'. A man would be O ... o.",
     "ku": "Ê ya destpêkê û ê ya dawiyê herdu pirhejmar in: 'ew in'. Ji bo yek mêrî O ... o ye."
    },
    "src": "lez"
   },
   {
    "id": "cop_pi3",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "A Asmîn a.",
    "options": [
     "She is Asmîn.",
     "He is Asmîn."
    ],
    "answer": 0,
    "why": {
     "en": "A ... a is feminine: 'she is'. For a man it would be O ... o.",
     "ku": "A ... a mê ye: 'ew (jin) e'. Ji bo mêr dibe O ... o."
    },
    "src": "lez"
   },
   {
    "id": "cop_pi4",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Dersxaneyê şima çira teng o?",
    "options": [
     "Why is your classroom narrow?",
     "Why are your classrooms narrow?"
    ],
    "answer": 0,
    "why": {
     "en": "The copula o means one masculine thing. Plural would end in ê.",
     "ku": "Lêkera nîvco o tenê ji bo tiştekî nêr e. Pirhejmar bi ê diqede."
    },
    "src": "lez"
   },
   {
    "id": "cop_pi5",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Qelema to tûj a.",
    "options": [
     "Your pen is sharp.",
     "Your pens are sharp."
    ],
    "answer": 0,
    "why": {
     "en": "Qelema ... a: one feminine thing. Plural pens would take ê.",
     "ku": "Qelema ... a: yek tiştê mê. Ji bo gelek qeleman ê tê."
    },
    "src": "lez"
   }
  ]
 },
 {
  "id": "gender",
  "order": 2,
  "level": "A1",
  "sieve": 5,
  "title": "Gender you can see: -e and -î",
  "pattern": {
   "kmr": "Ew ne [slot] e",
   "zza": "A [slot]e nîya",
   "en": "It is not a [slot]"
  },
  "card": {
   "kmr>zza": {
    "en": "In Kurmanji you hear gender only in endings like -ê / -a. In Zazaki the bare noun shows it: gule (f) 'rose', roje (f) 'day', kitab (m) 'book'. Plurals end in -î. Before a positive copula -e and -î drop (A gul a); in the negative they stay (A gule nîya). Verbs agree too: Asmîne kewte.",
    "ku": "Di kurmancî de tu zayendê tenê di paşgiran de dibihîzî (-ê / -a). Di zazakî de navdêra tazî bi xwe nîşan dide: gule (mê), roje (mê), kitab (nêr). Pirhejmar bi -î diqede. Berî lêkera nîvco ya erênî -e û -î diçin (A gul a); di neyînî de dimînin (A gule nîya). Lêker jî li gor zayendê ye: Asmîne kewte."
   }
  },
  "items": [
   {
    "id": "gen_01",
    "en": "Is it a rose?",
    "kmr": "Ew gul e?",
    "zza": "A gul a?",
    "align": [
     {
      "kmr": "Ew",
      "zza": "A",
      "k": "different",
      "note": "a: it, for a feminine thing"
     },
     {
      "kmr": "gul",
      "zza": "gul",
      "k": "same",
      "note": "gule drops -e before a positive copula"
     },
     {
      "kmr": "e",
      "zza": "a",
      "k": "grammar",
      "note": "copula a: feminine"
     }
    ],
    "src": "lez"
   },
   {
    "id": "gen_02",
    "en": "It is not a rose.",
    "kmr": "Ew ne gul e.",
    "zza": "A gule nîya.",
    "align": [
     {
      "kmr": "Ew",
      "zza": "A",
      "k": "different"
     },
     {
      "kmr": "ne",
      "zza": "",
      "k": "only"
     },
     {
      "kmr": "gul",
      "zza": "gule",
      "k": "sound",
      "rule": "fem-e",
      "note": "the negative keeps -e"
     },
     {
      "kmr": "e",
      "zza": "nîya",
      "k": "grammar",
      "note": "nîya: is not (feminine)"
     }
    ],
    "src": "lez"
   },
   {
    "id": "gen_03",
    "en": "Are they moustaches?",
    "kmr": "Ew simbêl in?",
    "zza": "Ê zimbêl ê?",
    "align": [
     {
      "kmr": "Ew",
      "zza": "Ê",
      "k": "different"
     },
     {
      "kmr": "simbêl",
      "zza": "zimbêl",
      "k": "cognate",
      "note": "plural -î drops before the copula"
     },
     {
      "kmr": "in",
      "zza": "ê",
      "k": "grammar",
      "note": "plural copula ê"
     }
    ],
    "src": "lez"
   },
   {
    "id": "gen_04",
    "en": "They are not moustaches.",
    "kmr": "Ew ne simbêl in.",
    "zza": "Ê zimbêlî nîyê.",
    "align": [
     {
      "kmr": "Ew",
      "zza": "Ê",
      "k": "different"
     },
     {
      "kmr": "ne",
      "zza": "",
      "k": "only"
     },
     {
      "kmr": "simbêl",
      "zza": "zimbêlî",
      "k": "grammar",
      "note": "plural -î stays in the negative"
     },
     {
      "kmr": "in",
      "zza": "nîyê",
      "k": "grammar",
      "note": "nîyê: are not"
     }
    ],
    "src": "lez"
   },
   {
    "id": "gen_05",
    "en": "She is not Asmîn.",
    "kmr": "Ew ne Asmîn e.",
    "zza": "A Asmîne nîya.",
    "align": [
     {
      "kmr": "Ew",
      "zza": "A",
      "k": "different"
     },
     {
      "kmr": "ne",
      "zza": "",
      "k": "only"
     },
     {
      "kmr": "Asmîn",
      "zza": "Asmîne",
      "k": "grammar",
      "note": "a woman's name takes -e too"
     },
     {
      "kmr": "e",
      "zza": "nîya",
      "k": "grammar",
      "note": "nîya: is not (feminine)"
     }
    ],
    "src": "lez"
   },
   {
    "id": "gen_06",
    "en": "Ehmed fell.",
    "kmr": "Ehmed ket.",
    "zza": "Ehmed kewt.",
    "align": [
     {
      "kmr": "Ehmed",
      "zza": "Ehmed",
      "k": "same"
     },
     {
      "kmr": "ket",
      "zza": "kewt",
      "k": "cognate",
      "note": "no ending: masculine subject"
     }
    ],
    "src": "lez"
   },
   {
    "id": "gen_07",
    "en": "Asmîn fell.",
    "kmr": "Asmîn ket.",
    "zza": "Asmîne kewte.",
    "align": [
     {
      "kmr": "Asmîn",
      "zza": "Asmîne",
      "k": "grammar",
      "note": "feminine -e"
     },
     {
      "kmr": "ket",
      "zza": "kewte",
      "k": "grammar",
      "note": "-e: the verb agrees with a woman"
     }
    ],
    "src": "lez"
   },
   {
    "id": "gen_08",
    "en": "The students fell.",
    "kmr": "Xwendekar ketin.",
    "zza": "Wendekarî kewtî.",
    "align": [
     {
      "kmr": "Xwendekar",
      "zza": "Wendekarî",
      "k": "sound",
      "rule": "w-xw",
      "note": "plural -î on the noun"
     },
     {
      "kmr": "ketin",
      "zza": "kewtî",
      "k": "grammar",
      "note": "plural -î where you say -in"
     }
    ],
    "src": "lez"
   },
   {
    "id": "gen_09",
    "en": "Two metres of snow have fallen.",
    "kmr": "Du metre berf barîye.",
    "zza": "Di metreyî vewre varaya.",
    "align": [
     {
      "kmr": "Du",
      "zza": "Di",
      "k": "cognate"
     },
     {
      "kmr": "metre",
      "zza": "metreyî",
      "k": "grammar",
      "note": "plural -î"
     },
     {
      "kmr": "berf",
      "zza": "vewre",
      "k": "sound",
      "rule": "v-b",
      "note": "vewre is feminine"
     },
     {
      "kmr": "barîye",
      "zza": "varaya",
      "k": "sound",
      "rule": "v-b",
      "note": "-a agrees with feminine vewre"
     }
    ],
    "src": "lez"
   }
  ],
  "pi": [
   {
    "id": "gen_pi1",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "A gule nîya.",
    "options": [
     "It is not a rose.",
     "They are not roses."
    ],
    "answer": 0,
    "why": {
     "en": "Gule keeps its -e and takes nîya: one feminine thing. Plurals take -î and nîyê, as in Ê zimbêlî nîyê.",
     "ku": "Gule -e ya xwe diparêze û nîya digire: yek tiştê mê. Pirhejmar -î û nîyê digire, wek Ê zimbêlî nîyê."
    },
    "src": "lez"
   },
   {
    "id": "gen_pi2",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Ê zimbêlî nîyê.",
    "options": [
     "They are not moustaches.",
     "It is not a moustache."
    ],
    "answer": 0,
    "why": {
     "en": "The -î on zimbêlî and the ê of nîyê both mark the plural.",
     "ku": "-î ya zimbêlî û ê ya nîyê herdu pirhejmarê nîşan didin."
    },
    "src": "lez"
   },
   {
    "id": "gen_pi3",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Asmîne kewte.",
    "options": [
     "Asmîn fell.",
     "Asmîn falls."
    ],
    "answer": 0,
    "why": {
     "en": "Kewt- is the past stem; -e makes it agree with a woman. 'She falls' would be kewena.",
     "ku": "Kewt- koka dema borî ye; -e wê bi jinê re li hev tîne. 'Dikeve' dibe kewena."
    },
    "src": "lez"
   },
   {
    "id": "gen_pi4",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Wendekarî kewtî.",
    "options": [
     "The students fell.",
     "The student fell."
    ],
    "answer": 0,
    "why": {
     "en": "Both words end in -î: plural. One man falling is bare kewt, as in Ehmed kewt.",
     "ku": "Herdu peyv bi -î diqedin: pirhejmar in. Ji bo yek mêrî kewt bê paşgir e, wek Ehmed kewt."
    },
    "src": "lez"
   }
  ]
 },
 {
  "id": "exist",
  "order": 3,
  "level": "A1",
  "sieve": 5,
  "title": "There is, there isn't, to have: esto, çin o",
  "pattern": {
   "kmr": "[slot] heye",
   "zza": "[slot] esto",
   "en": "There is a [slot]"
  },
  "card": {
   "kmr>zza": {
    "en": "Heye is esto, and it agrees with the thing that exists: esto (m), esta (f), estê (plural). Tune is çin o / çin a / çin ê. 'To have' works as in Kurmanji: Hişê mi zî esto = Hişê min jî heye. Yew before a noun is your -ek.",
    "ku": "Heye bi zazakî esto ye, û li gor tiştê ku heye diguhere: esto (nêr), esta (mê), estê (pirhejmar). Tune dibe çin o / çin a / çin ê. 'Hebûn' wek kurmancî ye: Hişê mi zî esto = Hişê min jî heye. Yew ya berî navdêrê -ek a te ye."
   }
  },
  "items": [
   {
    "id": "ex_01",
    "en": "There is a lion.",
    "kmr": "Şêrek heye.",
    "zza": "Yew şêr esto.",
    "align": [
     {
      "kmr": "Şêrek",
      "zza": "Yew şêr",
      "k": "grammar",
      "note": "yew + noun = your -ek"
     },
     {
      "kmr": "heye",
      "zza": "esto",
      "k": "different",
      "note": "esto: a masculine thing exists"
     }
    ],
    "src": "ez"
   },
   {
    "id": "ex_02",
    "en": "There are many pages.",
    "kmr": "Gelek pel hene.",
    "zza": "Zaf pelî estê.",
    "align": [
     {
      "kmr": "Gelek",
      "zza": "Zaf",
      "k": "different"
     },
     {
      "kmr": "pel",
      "zza": "pelî",
      "k": "grammar",
      "note": "plural -î"
     },
     {
      "kmr": "hene",
      "zza": "estê",
      "k": "different",
      "note": "estê: plural"
     }
    ],
    "src": "ez"
   },
   {
    "id": "ex_03",
    "en": "There is one better than her.",
    "kmr": "Ji wê baştir heye.",
    "zza": "Aye ra başêr esta.",
    "align": [
     {
      "kmr": "Ji wê",
      "zza": "Aye ra",
      "k": "grammar",
      "note": "ji X becomes X ra"
     },
     {
      "kmr": "baştir",
      "zza": "başêr",
      "k": "grammar",
      "note": "-êr = your -tir"
     },
     {
      "kmr": "heye",
      "zza": "esta",
      "k": "different",
      "note": "esta: the thing is feminine"
     }
    ],
    "src": "lez"
   },
   {
    "id": "ex_04",
    "en": "I have a mind too!",
    "kmr": "Hişê min jî heye!",
    "zza": "Hişê mi zî esto!",
    "align": [
     {
      "kmr": "Hişê",
      "zza": "Hişê",
      "k": "same",
      "note": "same masculine linking -ê"
     },
     {
      "kmr": "min",
      "zza": "mi",
      "k": "cognate"
     },
     {
      "kmr": "jî",
      "zza": "zî",
      "k": "cognate"
     },
     {
      "kmr": "heye",
      "zza": "esto",
      "k": "different",
      "note": "esto: hiş is masculine"
     }
    ],
    "src": "ez"
   },
   {
    "id": "ex_05",
    "en": "Dog, there's a man in the shop!",
    "kmr": "Kûçik, li dikanê merivek heye!",
    "zza": "Kutik, dikan de yew merdim esto!",
    "align": [
     {
      "kmr": "Kûçik",
      "zza": "Kutik",
      "k": "cognate"
     },
     {
      "kmr": "li dikanê",
      "zza": "dikan de",
      "k": "grammar",
      "note": "li X becomes X de"
     },
     {
      "kmr": "merivek",
      "zza": "yew merdim",
      "k": "grammar",
      "note": "yew + noun; merdim = meriv"
     },
     {
      "kmr": "heye",
      "zza": "esto",
      "k": "different"
     }
    ],
    "src": "ez"
   },
   {
    "id": "ex_06",
    "en": "I have oil with me.",
    "kmr": "Li cem min rûn heye.",
    "zza": "Mi de rûn esto.",
    "align": [
     {
      "kmr": "Li cem min",
      "zza": "Mi de",
      "k": "grammar",
      "note": "X de: with X, on X"
     },
     {
      "kmr": "rûn",
      "zza": "rûn",
      "k": "same"
     },
     {
      "kmr": "heye",
      "zza": "esto",
      "k": "different"
     }
    ],
    "src": "ez"
   },
   {
    "id": "ex_07",
    "en": "There are some people.",
    "kmr": "Hinek meriv hene.",
    "zza": "Tayê merdimî estê.",
    "align": [
     {
      "kmr": "Hinek",
      "zza": "Tayê",
      "k": "different"
     },
     {
      "kmr": "meriv",
      "zza": "merdimî",
      "k": "sound",
      "rule": "m-v",
      "note": "plural -î"
     },
     {
      "kmr": "hene",
      "zza": "estê",
      "k": "different",
      "note": "estê: plural"
     }
    ],
    "src": "lez"
   },
   {
    "id": "ex_08",
    "en": "Is there no Yeti?",
    "kmr": "Yetî tune ye?",
    "zza": "Yetî çin o?",
    "align": [
     {
      "kmr": "Yetî",
      "zza": "Yetî",
      "k": "same"
     },
     {
      "kmr": "tune ye",
      "zza": "çin o",
      "k": "different",
      "note": "çin o: there is no (masculine)"
     }
    ],
    "src": "ez"
   },
   {
    "id": "ex_09",
    "en": "Go on, tell me: what is there and what isn't?",
    "kmr": "De bêje, çi heye çi tune ye?",
    "zza": "De vaje, çi esto çi çin o?",
    "align": [
     {
      "kmr": "De",
      "zza": "De",
      "k": "same"
     },
     {
      "kmr": "bêje",
      "zza": "vaje",
      "k": "different"
     },
     {
      "kmr": "çi",
      "zza": "çi",
      "k": "same"
     },
     {
      "kmr": "heye",
      "zza": "esto",
      "k": "different"
     },
     {
      "kmr": "çi",
      "zza": "çi",
      "k": "same"
     },
     {
      "kmr": "tune ye",
      "zza": "çin o",
      "k": "different"
     }
    ],
    "src": "lez"
   },
   {
    "id": "ex_10",
    "en": "I had a young goat.",
    "kmr": "Gîskekî min hebû.",
    "zza": "Yew kelceyê mi estibi.",
    "align": [
     {
      "kmr": "Gîskekî",
      "zza": "Yew kelceyê",
      "k": "different",
      "note": "yew + noun + linking -ê"
     },
     {
      "kmr": "min",
      "zza": "mi",
      "k": "cognate"
     },
     {
      "kmr": "hebû",
      "zza": "estibi",
      "k": "different",
      "note": "estibi: there was (masculine)"
     }
    ],
    "src": "lez"
   }
  ],
  "pi": [
   {
    "id": "ex_pi1",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Yew şêr esto.",
    "options": [
     "There is a lion.",
     "There are lions."
    ],
    "answer": 0,
    "why": {
     "en": "Esto is for one masculine thing. Many would be estê.",
     "ku": "Esto ji bo yek tiştê nêr e. Ji bo gelekan estê."
    },
    "src": "ez"
   },
   {
    "id": "ex_pi2",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Zaf pelî estê.",
    "options": [
     "There are many pages.",
     "There is a big page."
    ],
    "answer": 0,
    "why": {
     "en": "Pelî ends in plural -î and estê is the plural 'there are'.",
     "ku": "Pelî bi -î ya pirhejmar diqede û estê 'hene' ya pirhejmar e."
    },
    "src": "ez"
   },
   {
    "id": "ex_pi3",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Yetî çin o?",
    "options": [
     "Is there no Yeti?",
     "Is there a Yeti?"
    ],
    "answer": 0,
    "why": {
     "en": "Çin o is 'there is no' (tune ye). 'There is' would be esto.",
     "ku": "Çin o 'tune ye' ye. 'Heye' dibe esto."
    },
    "src": "ez"
   },
   {
    "id": "ex_pi4",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Hişê mi zî esto!",
    "options": [
     "I have a mind too!",
     "I had a mind too!"
    ],
    "answer": 0,
    "why": {
     "en": "Esto is present. The past 'there was' is estibi.",
     "ku": "Esto dema niha ye. 'Hebû' dibe estibi."
    },
    "src": "ez"
   }
  ]
 },
 {
  "id": "present",
  "order": 4,
  "level": "A1",
  "sieve": 5,
  "title": "Present tense: no di-, and the ending shows gender",
  "pattern": {
   "kmr": "Ew [slot] dike",
   "zza": "O [slot] keno",
   "en": "He does [slot]"
  },
  "card": {
   "kmr>zza": {
    "en": "Drop di-: dike is keno, dixwe is weno. The ending tells you who: -a I (and she, and 'you' to a woman), -î you (to a man), -o he, -ê all plurals. Ez always takes the feminine -a, even for a man. Subject and object cases work as in Kurmanji.",
    "ku": "Di- bavêje: dike dibe keno, dixwe dibe weno. Paşgir dibêje kî: -a ez (û ew a mê, û 'tu' ji jinê re), -î tu (ji mêr re), -o ew (nêr), -ê hemû pirhejmar. Ez her tim -a ya mê digire, mêr be jî. Kirde û bireser wek kurmancî ne."
   }
  },
  "items": [
   {
    "id": "pr_01",
    "en": "Ehmed eats bread.",
    "kmr": "Ehmed nan dixwe.",
    "zza": "Ehmed nan weno.",
    "align": [
     {
      "kmr": "Ehmed",
      "zza": "Ehmed",
      "k": "same"
     },
     {
      "kmr": "nan",
      "zza": "nan",
      "k": "same"
     },
     {
      "kmr": "dixwe",
      "zza": "weno",
      "k": "grammar",
      "note": "no di-; -o: he"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pr_02",
    "en": "Zelal eats bread.",
    "kmr": "Zelal nan dixwe.",
    "zza": "Zelale nan wena.",
    "align": [
     {
      "kmr": "Zelal",
      "zza": "Zelale",
      "k": "grammar",
      "note": "feminine -e"
     },
     {
      "kmr": "nan",
      "zza": "nan",
      "k": "same"
     },
     {
      "kmr": "dixwe",
      "zza": "wena",
      "k": "grammar",
      "note": "-a: she"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pr_03",
    "en": "The students eat bread.",
    "kmr": "Xwendekar nan dixwin.",
    "zza": "Wendekarî nan wenê.",
    "align": [
     {
      "kmr": "Xwendekar",
      "zza": "Wendekarî",
      "k": "sound",
      "rule": "w-xw",
      "note": "plural -î"
     },
     {
      "kmr": "nan",
      "zza": "nan",
      "k": "same"
     },
     {
      "kmr": "dixwin",
      "zza": "wenê",
      "k": "grammar",
      "note": "-ê: they"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pr_04",
    "en": "I come from Diyarbakır.",
    "kmr": "Ez ji Diyarbekirê têm.",
    "zza": "Ez Dîyarbekir ra yena.",
    "align": [
     {
      "kmr": "Ez",
      "zza": "Ez",
      "k": "same"
     },
     {
      "kmr": "ji Diyarbekirê",
      "zza": "Dîyarbekir ra",
      "k": "grammar",
      "note": "ji X becomes X ra"
     },
     {
      "kmr": "têm",
      "zza": "yena",
      "k": "different",
      "note": "-a: I (ez counts as feminine)"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pr_05",
    "en": "I'm going now; I'll come tomorrow.",
    "kmr": "Ez niha diçim, sibê têm.",
    "zza": "Ez anika şina, siba yena.",
    "align": [
     {
      "kmr": "Ez",
      "zza": "Ez",
      "k": "same"
     },
     {
      "kmr": "niha",
      "zza": "anika",
      "k": "cognate"
     },
     {
      "kmr": "diçim",
      "zza": "şina",
      "k": "different"
     },
     {
      "kmr": "sibê",
      "zza": "siba",
      "k": "sound",
      "rule": "a-e"
     },
     {
      "kmr": "têm",
      "zza": "yena",
      "k": "different"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pr_06",
    "en": "Ehmed talks a lot.",
    "kmr": "Ehmed pir qise dike.",
    "zza": "Ehmed zaf qisey keno.",
    "align": [
     {
      "kmr": "Ehmed",
      "zza": "Ehmed",
      "k": "same"
     },
     {
      "kmr": "pir",
      "zza": "zaf",
      "k": "different"
     },
     {
      "kmr": "qise",
      "zza": "qisey",
      "k": "cognate"
     },
     {
      "kmr": "dike",
      "zza": "keno",
      "k": "grammar",
      "note": "no di-; -o: he"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pr_07",
    "en": "I write with a pen.",
    "kmr": "Ez bi qelemê dinivîsim.",
    "zza": "Ez bi qeleme nusena.",
    "align": [
     {
      "kmr": "Ez",
      "zza": "Ez",
      "k": "same"
     },
     {
      "kmr": "bi",
      "zza": "bi",
      "k": "same"
     },
     {
      "kmr": "qelemê",
      "zza": "qeleme",
      "k": "grammar",
      "note": "feminine -e, nothing added"
     },
     {
      "kmr": "dinivîsim",
      "zza": "nusena",
      "k": "cognate",
      "note": "-a: I"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pr_08",
    "en": "I see him.",
    "kmr": "Ez wî dibînim.",
    "zza": "Ez ey vînena.",
    "align": [
     {
      "kmr": "Ez",
      "zza": "Ez",
      "k": "same"
     },
     {
      "kmr": "wî",
      "zza": "ey",
      "k": "different",
      "note": "oblique object, as in Kurmanji"
     },
     {
      "kmr": "dibînim",
      "zza": "vînena",
      "k": "cognate"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pr_09",
    "en": "I am looking for you.",
    "kmr": "Ez li te digerim.",
    "zza": "Ez ro to gêrena.",
    "align": [
     {
      "kmr": "Ez",
      "zza": "Ez",
      "k": "same"
     },
     {
      "kmr": "li",
      "zza": "ro",
      "k": "different"
     },
     {
      "kmr": "te",
      "zza": "to",
      "k": "cognate"
     },
     {
      "kmr": "digerim",
      "zza": "gêrena",
      "k": "cognate"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pr_10",
    "en": "She is eating bread right now.",
    "kmr": "Ew niha nan dixwe.",
    "zza": "A ha ya nan wena.",
    "align": [
     {
      "kmr": "Ew",
      "zza": "A",
      "k": "different"
     },
     {
      "kmr": "niha",
      "zza": "ha ya",
      "k": "grammar",
      "note": "ha + copula: right now"
     },
     {
      "kmr": "nan",
      "zza": "nan",
      "k": "same"
     },
     {
      "kmr": "dixwe",
      "zza": "wena",
      "k": "grammar",
      "note": "-a: she"
     }
    ],
    "src": "lez"
   }
  ],
  "pi": [
   {
    "id": "pr_pi1",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "keno",
    "options": [
     "he does",
     "she does"
    ],
    "answer": 0,
    "why": {
     "en": "-o is 'he'. 'She does' is kena.",
     "ku": "-o 'ew (nêr)' e. Ji bo jinê kena ye."
    },
    "src": "lez"
   },
   {
    "id": "pr_pi2",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "kena",
    "options": [
     "she does",
     "they do"
    ],
    "answer": 0,
    "why": {
     "en": "-a is 'she' (and also 'I'). 'They do' is kenê.",
     "ku": "-a 'ew (mê)' ye (û 'ez' jî). 'Dikin' dibe kenê."
    },
    "src": "lez"
   },
   {
    "id": "pr_pi3",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "kenê",
    "options": [
     "they do",
     "he does"
    ],
    "answer": 0,
    "why": {
     "en": "-ê is plural: we, you all, they. 'He does' is keno.",
     "ku": "-ê pirhejmar e: em, hûn, ew. 'Dike (nêr)' keno ye."
    },
    "src": "lez"
   },
   {
    "id": "pr_pi4",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "kenî",
    "options": [
     "you do (to a man)",
     "you do (to a woman)"
    ],
    "answer": 0,
    "why": {
     "en": "-î is 'you' to a man. To a woman: kena.",
     "ku": "-î 'tu' ye ji mêr re. Ji jinê re: kena."
    },
    "src": "lez"
   },
   {
    "id": "pr_pi5",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Wendekarî nan wenê.",
    "options": [
     "The students eat bread.",
     "The student eats bread."
    ],
    "answer": 0,
    "why": {
     "en": "Wendekarî has plural -î and wenê has plural -ê.",
     "ku": "Wendekarî -î ya pirhejmar û wenê -ê ya pirhejmar digire."
    },
    "src": "lez"
   },
   {
    "id": "pr_pi6",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Zelale nan wena.",
    "options": [
     "Zelal eats bread.",
     "Zelal ate bread."
    ],
    "answer": 0,
    "why": {
     "en": "Wena is present (-en- + -a). 'Ate' would be Zelale nan werd.",
     "ku": "Wena dema niha ye (-en- + -a). 'Xwar' dibe Zelale nan werd."
    },
    "src": "lez"
   }
  ]
 },
 {
  "id": "past_intr",
  "order": 5,
  "level": "A2",
  "sieve": 5,
  "title": "Past without an object: ameya, ame, ameye",
  "pattern": {
   "kmr": "Ez [slot]im",
   "zza": "Ez [slot]a",
   "en": "I [slot] (past)"
  },
  "card": {
   "kmr>zza": {
    "en": "Like Kurmanji: subject in the direct case, verb agrees with it. Ez hatim is Ez ameya: -a, because ez is feminine for everyone. A man is ame (no ending), a woman ameye, plurals ameyî. 'You' takes -î for a man and -a for a woman.",
    "ku": "Wek kurmancî: kirde di rewşa xwerû de ye, lêker li gor wê ye. Ez hatim dibe Ez ameya: -a, ji ber ku ez ji bo her kesî mê ye. Ji bo mêr ame (bê paşgir), ji bo jinê ameye, ji bo pirhejmarê ameyî. 'Tu' ji mêr re -î, ji jinê re -a digire."
   }
  },
  "items": [
   {
    "id": "pi_01",
    "en": "I came and went.",
    "kmr": "Ez hatim û çûm.",
    "zza": "Ez ameya û şîya.",
    "align": [
     {
      "kmr": "Ez",
      "zza": "Ez",
      "k": "same"
     },
     {
      "kmr": "hatim",
      "zza": "ameya",
      "k": "cognate",
      "note": "-a: ez is feminine, even for a man"
     },
     {
      "kmr": "û",
      "zza": "û",
      "k": "same"
     },
     {
      "kmr": "çûm",
      "zza": "şîya",
      "k": "different"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pi_02",
    "en": "You came and went. (to a man)",
    "kmr": "Tu hatî û çûyî.",
    "zza": "Ti ameyî û şîyî.",
    "align": [
     {
      "kmr": "Tu",
      "zza": "Ti",
      "k": "cognate"
     },
     {
      "kmr": "hatî",
      "zza": "ameyî",
      "k": "cognate",
      "note": "-î: you, a man"
     },
     {
      "kmr": "û",
      "zza": "û",
      "k": "same"
     },
     {
      "kmr": "çûyî",
      "zza": "şîyî",
      "k": "different"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pi_03",
    "en": "You came and went. (to a woman)",
    "kmr": "Tu hatî û çûyî.",
    "zza": "Ti ameya û şîya.",
    "align": [
     {
      "kmr": "Tu",
      "zza": "Ti",
      "k": "cognate"
     },
     {
      "kmr": "hatî",
      "zza": "ameya",
      "k": "cognate",
      "note": "-a: you, a woman"
     },
     {
      "kmr": "û",
      "zza": "û",
      "k": "same"
     },
     {
      "kmr": "çûyî",
      "zza": "şîya",
      "k": "different"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pi_04",
    "built": true,
    "en": "A tall man came.",
    "kmr": "Mêrekî dirêj hat.",
    "zza": "Camêrdêko derg ame.",
    "align": [
     {
      "kmr": "Mêrekî",
      "zza": "Camêrdêko",
      "k": "grammar",
      "note": "-êko: a, masculine, before an adjective"
     },
     {
      "kmr": "dirêj",
      "zza": "derg",
      "k": "cognate"
     },
     {
      "kmr": "hat",
      "zza": "ame",
      "k": "cognate",
      "note": "no ending: masculine"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pi_05",
    "en": "How many students have come?",
    "kmr": "Çend xwendekar hatine?",
    "zza": "Çend wendekarî ameyê?",
    "align": [
     {
      "kmr": "Çend",
      "zza": "Çend",
      "k": "same"
     },
     {
      "kmr": "xwendekar",
      "zza": "wendekarî",
      "k": "sound",
      "rule": "w-xw",
      "note": "plural -î"
     },
     {
      "kmr": "hatine",
      "zza": "ameyê",
      "k": "grammar",
      "note": "-ê: plural, 'have come'"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pi_06",
    "en": "Ehmed came early; you stayed late.",
    "kmr": "Ehmed zû hat, tu dereng mayî.",
    "zza": "Ehmed rew ame ti erey mendî.",
    "align": [
     {
      "kmr": "Ehmed",
      "zza": "Ehmed",
      "k": "same"
     },
     {
      "kmr": "zû",
      "zza": "rew",
      "k": "different"
     },
     {
      "kmr": "hat",
      "zza": "ame",
      "k": "cognate"
     },
     {
      "kmr": "tu",
      "zza": "ti",
      "k": "cognate"
     },
     {
      "kmr": "dereng",
      "zza": "erey",
      "k": "different"
     },
     {
      "kmr": "mayî",
      "zza": "mendî",
      "k": "cognate",
      "note": "-î: you, a man"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pi_07",
    "en": "We came and we read.",
    "kmr": "Em hatin û me xwend.",
    "zza": "Ma ameyî û ma wend.",
    "align": [
     {
      "kmr": "Em",
      "zza": "Ma",
      "k": "cognate",
      "note": "ma: subject and agent alike"
     },
     {
      "kmr": "hatin",
      "zza": "ameyî",
      "k": "cognate",
      "note": "plural -î"
     },
     {
      "kmr": "û",
      "zza": "û",
      "k": "same"
     },
     {
      "kmr": "me",
      "zza": "ma",
      "k": "cognate"
     },
     {
      "kmr": "xwend",
      "zza": "wend",
      "k": "sound",
      "rule": "w-xw"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pi_08",
    "en": "He came, and he ate.",
    "kmr": "Ew hat, wî xwar.",
    "zza": "O ame, ey werd.",
    "align": [
     {
      "kmr": "Ew",
      "zza": "O",
      "k": "different"
     },
     {
      "kmr": "hat",
      "zza": "ame",
      "k": "cognate",
      "note": "no ending: he"
     },
     {
      "kmr": "wî",
      "zza": "ey",
      "k": "different"
     },
     {
      "kmr": "xwar",
      "zza": "werd",
      "k": "sound",
      "rule": "w-xw"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pi_09",
    "en": "She came, and she ate.",
    "kmr": "Ew hat, wê xwar.",
    "zza": "A ameye, aye werd.",
    "align": [
     {
      "kmr": "Ew",
      "zza": "A",
      "k": "different"
     },
     {
      "kmr": "hat",
      "zza": "ameye",
      "k": "grammar",
      "note": "-e: she"
     },
     {
      "kmr": "wê",
      "zza": "aye",
      "k": "different"
     },
     {
      "kmr": "xwar",
      "zza": "werd",
      "k": "sound",
      "rule": "w-xw"
     }
    ],
    "src": "lez"
   }
  ],
  "pi": [
   {
    "id": "pi_pi1",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Ti ameyî.",
    "options": [
     "You came. (to a man)",
     "You came. (to a woman)"
    ],
    "answer": 0,
    "why": {
     "en": "-î is 'you' to a man. To a woman: Ti ameya.",
     "ku": "-î 'tu' ye ji mêr re. Ji jinê re: Ti ameya."
    },
    "src": "lez"
   },
   {
    "id": "pi_pi2",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Ti ameya û şîya.",
    "options": [
     "You came and went. (to a woman)",
     "You came and went. (to a man)"
    ],
    "answer": 0,
    "why": {
     "en": "-a with ti is a woman. A man is ameyî û şîyî.",
     "ku": "-a bi ti re jin e. Mêr: ameyî û şîyî."
    },
    "src": "lez"
   },
   {
    "id": "pi_pi3",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "A ameye.",
    "options": [
     "She came.",
     "He came."
    ],
    "answer": 0,
    "why": {
     "en": "-e on the past verb is 'she'. 'He came' is O ame.",
     "ku": "-e li ser lêkera borî 'ew (jin)' e. 'Ew (mêr) hat' dibe O ame."
    },
    "src": "lez"
   },
   {
    "id": "pi_pi4",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "O ame.",
    "options": [
     "He came.",
     "She came."
    ],
    "answer": 0,
    "why": {
     "en": "No ending on the past verb: one masculine subject.",
     "ku": "Lêkera borî bê paşgir: kirdeyeke nêr a yekhejmar."
    },
    "src": "lez"
   }
  ]
 },
 {
  "id": "past_tr",
  "order": 6,
  "level": "A2",
  "sieve": 5,
  "title": "Past with an object: ergative, plus gender",
  "pattern": {
   "kmr": "Min [slot] xwar",
   "zza": "Mi [slot] werd",
   "en": "I ate [slot]"
  },
  "card": {
   "kmr>zza": {
    "en": "You know this system already: in the past the doer is oblique (mi, ey, Ehmedî) and the verb agrees with the object. New is gender: a masculine object leaves the verb bare (nan werd), a feminine one adds -e (saye werde), a plural -î (kitabî wendî). A woman doer keeps -e: Zelale.",
    "ku": "Tu vê pergalê jixwe dizanî: di dema borî de kirde tewandî ye (mi, ey, Ehmedî) û lêker li gor bireserê ye. Ya nû zayend e: bireserê nêr lêkerê tazî dihêle (nan werd), yê mê -e lê zêde dike (saye werde), pirhejmar -î (kitabî wendî). Kirdeya jin -e diparêze: Zelale."
   }
  },
  "items": [
   {
    "id": "pt_01",
    "en": "Ehmed ate bread.",
    "kmr": "Ehmed nan xwar.",
    "zza": "Ehmedî nan werd.",
    "align": [
     {
      "kmr": "Ehmed",
      "zza": "Ehmedî",
      "k": "grammar",
      "note": "agent -î; Zazaki always marks it"
     },
     {
      "kmr": "nan",
      "zza": "nan",
      "k": "same"
     },
     {
      "kmr": "xwar",
      "zza": "werd",
      "k": "sound",
      "rule": "w-xw",
      "note": "no ending: nan is masculine"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pt_02",
    "en": "Zelal ate bread.",
    "kmr": "Zelalê nan xwar.",
    "zza": "Zelale nan werd.",
    "align": [
     {
      "kmr": "Zelalê",
      "zza": "Zelale",
      "k": "grammar",
      "note": "a woman agent keeps -e, nothing added"
     },
     {
      "kmr": "nan",
      "zza": "nan",
      "k": "same"
     },
     {
      "kmr": "xwar",
      "zza": "werd",
      "k": "sound",
      "rule": "w-xw"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pt_03",
    "en": "The students ate bread.",
    "kmr": "Xwendekaran nan xwar.",
    "zza": "Wendekaran nan werd.",
    "align": [
     {
      "kmr": "Xwendekaran",
      "zza": "Wendekaran",
      "k": "sound",
      "rule": "w-xw",
      "note": "plural agent -an, as in Kurmanji"
     },
     {
      "kmr": "nan",
      "zza": "nan",
      "k": "same"
     },
     {
      "kmr": "xwar",
      "zza": "werd",
      "k": "sound",
      "rule": "w-xw"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pt_04",
    "en": "He ate the apple.",
    "kmr": "Wî sêv xwar.",
    "zza": "Ey saye werde.",
    "align": [
     {
      "kmr": "Wî",
      "zza": "Ey",
      "k": "different"
     },
     {
      "kmr": "sêv",
      "zza": "saye",
      "k": "sound",
      "rule": "a-e",
      "note": "saye is feminine"
     },
     {
      "kmr": "xwar",
      "zza": "werde",
      "k": "grammar",
      "note": "-e: agrees with the feminine object"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pt_05",
    "en": "I read the books.",
    "kmr": "Min kitêb xwendin.",
    "zza": "Mi kitabî wendî.",
    "align": [
     {
      "kmr": "Min",
      "zza": "Mi",
      "k": "cognate"
     },
     {
      "kmr": "kitêb",
      "zza": "kitabî",
      "k": "sound",
      "rule": "a-e",
      "note": "plural -î"
     },
     {
      "kmr": "xwendin",
      "zza": "wendî",
      "k": "grammar",
      "note": "-î: agrees with the plural object"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pt_06",
    "en": "They drank the water.",
    "kmr": "Wan av vexwar.",
    "zza": "Înan awe şimite.",
    "align": [
     {
      "kmr": "Wan",
      "zza": "Înan",
      "k": "different"
     },
     {
      "kmr": "av",
      "zza": "awe",
      "k": "sound",
      "rule": "fem-e"
     },
     {
      "kmr": "vexwar",
      "zza": "şimite",
      "k": "different",
      "note": "-e: awe is feminine"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pt_07",
    "en": "We ate grapes.",
    "kmr": "Me tirî xwar.",
    "zza": "Ma engure werde.",
    "align": [
     {
      "kmr": "Me",
      "zza": "Ma",
      "k": "cognate",
      "note": "ma never changes"
     },
     {
      "kmr": "tirî",
      "zza": "engure",
      "k": "different",
      "note": "engure is feminine"
     },
     {
      "kmr": "xwar",
      "zza": "werde",
      "k": "grammar",
      "note": "-e: feminine object"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pt_08",
    "en": "I saw her.",
    "kmr": "Min ew dît.",
    "zza": "Mi a dîye.",
    "align": [
     {
      "kmr": "Min",
      "zza": "Mi",
      "k": "cognate"
     },
     {
      "kmr": "ew",
      "zza": "a",
      "k": "different",
      "note": "a: she, the object of a past verb"
     },
     {
      "kmr": "dît",
      "zza": "dîye",
      "k": "grammar",
      "note": "-e: the object is feminine"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pt_09",
    "en": "He knocked me down.",
    "kmr": "Wî ez xistim.",
    "zza": "Ey ez vista.",
    "align": [
     {
      "kmr": "Wî",
      "zza": "Ey",
      "k": "different"
     },
     {
      "kmr": "ez",
      "zza": "ez",
      "k": "same"
     },
     {
      "kmr": "xistim",
      "zza": "vista",
      "k": "different",
      "note": "-a: ez is feminine"
     }
    ],
    "src": "lez"
   },
   {
    "id": "pt_10",
    "en": "I came, but I didn't see.",
    "kmr": "Ez hatim lê min nedît.",
    "zza": "Ez ameya la mi nêdî.",
    "align": [
     {
      "kmr": "Ez",
      "zza": "Ez",
      "k": "same"
     },
     {
      "kmr": "hatim",
      "zza": "ameya",
      "k": "cognate"
     },
     {
      "kmr": "lê",
      "zza": "la",
      "k": "sound",
      "rule": "a-e"
     },
     {
      "kmr": "min",
      "zza": "mi",
      "k": "cognate",
      "note": "agent form, as in Kurmanji"
     },
     {
      "kmr": "nedît",
      "zza": "nêdî",
      "k": "grammar",
      "note": "nê- for ne-"
     }
    ],
    "src": "lez"
   }
  ],
  "pi": [
   {
    "id": "pt_pi1",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Ey saye werde.",
    "options": [
     "He ate the apple.",
     "He ate the apples."
    ],
    "answer": 0,
    "why": {
     "en": "Werde ends in -e: one feminine object. A plural object makes it -î, as in nanî werdî.",
     "ku": "Werde bi -e diqede: yek bireserê mê. Bireserê pirhejmar -î lê dike, wek nanî werdî."
    },
    "src": "lez"
   },
   {
    "id": "pt_pi2",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Mi kitabî wendî.",
    "options": [
     "I read the books.",
     "I read the book."
    ],
    "answer": 0,
    "why": {
     "en": "Wendî ends in -î: the object is plural. With one masculine thing the verb stays bare, as in nan werd.",
     "ku": "Wendî bi -î diqede: bireser pirhejmar e. Bi yek tiştê nêr lêker tazî dimîne, wek nan werd."
    },
    "src": "lez"
   },
   {
    "id": "pt_pi3",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Mi a dîye.",
    "options": [
     "I saw her.",
     "I saw him."
    ],
    "answer": 0,
    "why": {
     "en": "A and -e both point to a feminine object. 'Him' is Mi o dî.",
     "ku": "A û -e herdu bireserê mê nîşan didin. 'Ew (mêr)' dibe Mi o dî."
    },
    "src": "lez"
   },
   {
    "id": "pt_pi4",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Mi o dî.",
    "options": [
     "I saw him.",
     "I saw her."
    ],
    "answer": 0,
    "why": {
     "en": "O and the bare verb dî: a masculine object.",
     "ku": "O û lêkera tazî dî: bireserê nêr."
    },
    "src": "lez"
   },
   {
    "id": "pt_pi5",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Zelale nan werd.",
    "options": [
     "Zelal ate bread.",
     "Zelal eats bread."
    ],
    "answer": 0,
    "why": {
     "en": "Werd is the past stem. 'Eats' would be wena.",
     "ku": "Werd koka dema borî ye. 'Dixwe' dibe wena."
    },
    "src": "lez"
   }
  ]
 },
 {
  "id": "link",
  "order": 7,
  "level": "A2",
  "sieve": 5,
  "title": "The linking particle (veqetandek) agrees",
  "pattern": {
   "kmr": "golikê sor",
   "zza": "goliko sûr",
   "en": "the red calf"
  },
  "card": {
   "kmr>zza": {
    "en": "Your -ê / -a / -ên becomes -o / -a / -ê, and the adjective agrees too: goliko sûr (m), golika sûre (f), golikê sûrî (plural). In the oblique case the masculine is -ê ... -î: Golikê sûrî bibere. Watch keye 'house': it is masculine, so keyeyê ma, not mala me.",
    "ku": "-ê / -a / -ên a te dibe -o / -a / -ê, û rengdêr jî li gor wê diguhere: goliko sûr (nêr), golika sûre (mê), golikê sûrî (pirhejmar). Di rewşa tewandî de nêr dibe -ê ... -î: Golikê sûrî bibere. Hay ji keye hebe: nêr e, lewma keyeyê ma, ne mala me."
   }
  },
  "items": [
   {
    "id": "lk_01",
    "en": "The red calf (male) is coming.",
    "kmr": "Golikê sor tê.",
    "zza": "Goliko sûr yeno.",
    "align": [
     {
      "kmr": "Golikê",
      "zza": "Goliko",
      "k": "grammar",
      "note": "masculine link -o, not -ê"
     },
     {
      "kmr": "sor",
      "zza": "sûr",
      "k": "cognate"
     },
     {
      "kmr": "tê",
      "zza": "yeno",
      "k": "different",
      "note": "-o: he"
     }
    ],
    "src": "lez"
   },
   {
    "id": "lk_02",
    "en": "The red calf (female) is coming.",
    "kmr": "Golika sor tê.",
    "zza": "Golika sûre yena.",
    "align": [
     {
      "kmr": "Golika",
      "zza": "Golika",
      "k": "same",
      "note": "feminine link -a, as in Kurmanji"
     },
     {
      "kmr": "sor",
      "zza": "sûre",
      "k": "grammar",
      "note": "the adjective takes -e too"
     },
     {
      "kmr": "tê",
      "zza": "yena",
      "k": "different",
      "note": "-a: she"
     }
    ],
    "src": "lez"
   },
   {
    "id": "lk_03",
    "en": "The red calves are coming.",
    "kmr": "Golikên sor tên.",
    "zza": "Golikê sûrî yenê.",
    "align": [
     {
      "kmr": "Golikên",
      "zza": "Golikê",
      "k": "grammar",
      "note": "plural link -ê"
     },
     {
      "kmr": "sor",
      "zza": "sûrî",
      "k": "grammar",
      "note": "the adjective takes plural -î"
     },
     {
      "kmr": "tên",
      "zza": "yenê",
      "k": "different",
      "note": "-ê: plural"
     }
    ],
    "src": "lez"
   },
   {
    "id": "lk_04",
    "en": "Take the red calf (male).",
    "kmr": "Golikê sor bibe.",
    "zza": "Golikê sûrî bibere.",
    "align": [
     {
      "kmr": "Golikê",
      "zza": "Golikê",
      "k": "same",
      "note": "oblique masculine: -ê ... -î"
     },
     {
      "kmr": "sor",
      "zza": "sûrî",
      "k": "grammar",
      "note": "-î: oblique masculine"
     },
     {
      "kmr": "bibe",
      "zza": "bibere",
      "k": "cognate",
      "note": "imperative bi-"
     }
    ],
    "src": "lez"
   },
   {
    "id": "lk_05",
    "en": "You took the red calf (female).",
    "kmr": "Te golika sor bir.",
    "zza": "To golika sûre berde.",
    "align": [
     {
      "kmr": "Te",
      "zza": "To",
      "k": "cognate"
     },
     {
      "kmr": "golika",
      "zza": "golika",
      "k": "same"
     },
     {
      "kmr": "sor",
      "zza": "sûre",
      "k": "grammar"
     },
     {
      "kmr": "bir",
      "zza": "berde",
      "k": "cognate",
      "note": "-e: feminine object"
     }
    ],
    "src": "lez"
   },
   {
    "id": "lk_06",
    "en": "Azad's house is near us.",
    "kmr": "Mala Azad nêzîkî me ye.",
    "zza": "Keyeyê Azadî nêzdîyê ma yo.",
    "align": [
     {
      "kmr": "Mala",
      "zza": "Keyeyê",
      "k": "different",
      "note": "keye is masculine, so -yê"
     },
     {
      "kmr": "Azad",
      "zza": "Azadî",
      "k": "grammar",
      "note": "names take -î"
     },
     {
      "kmr": "nêzîkî",
      "zza": "nêzdîyê",
      "k": "cognate"
     },
     {
      "kmr": "me",
      "zza": "ma",
      "k": "cognate"
     },
     {
      "kmr": "ye",
      "zza": "yo",
      "k": "grammar",
      "note": "o: masculine subject"
     }
    ],
    "src": "lez"
   },
   {
    "id": "lk_07",
    "en": "Zelal's house is far from us.",
    "kmr": "Mala Zelalê ji me dûr e.",
    "zza": "Keyeyê Zelale ma ra dûrî yo.",
    "align": [
     {
      "kmr": "Mala",
      "zza": "Keyeyê",
      "k": "different"
     },
     {
      "kmr": "Zelalê",
      "zza": "Zelale",
      "k": "grammar",
      "note": "feminine: -e, nothing added"
     },
     {
      "kmr": "ji me",
      "zza": "ma ra",
      "k": "grammar",
      "note": "ji X becomes X ra"
     },
     {
      "kmr": "dûr",
      "zza": "dûrî",
      "k": "cognate"
     },
     {
      "kmr": "e",
      "zza": "yo",
      "k": "grammar"
     }
    ],
    "src": "lez"
   },
   {
    "id": "lk_08",
    "en": "Our house is in Lice.",
    "kmr": "Mala me li Licê ye.",
    "zza": "Keyeyê ma Licê de yo.",
    "align": [
     {
      "kmr": "Mala",
      "zza": "Keyeyê",
      "k": "different"
     },
     {
      "kmr": "me",
      "zza": "ma",
      "k": "cognate"
     },
     {
      "kmr": "li Licê",
      "zza": "Licê de",
      "k": "grammar",
      "note": "li X becomes X de"
     },
     {
      "kmr": "ye",
      "zza": "yo",
      "k": "grammar"
     }
    ],
    "src": "lez"
   }
  ],
  "pi": [
   {
    "id": "lk_pi1",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Goliko sûr yeno.",
    "options": [
     "The red male calf is coming.",
     "The red female calf is coming."
    ],
    "answer": 0,
    "why": {
     "en": "-o ... with a bare adjective is masculine. Feminine: golika sûre.",
     "ku": "-o ... bi rengdêra tazî nêr e. Mê: golika sûre."
    },
    "src": "lez"
   },
   {
    "id": "lk_pi2",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Golika sûre yena.",
    "options": [
     "The red female calf is coming.",
     "The red calves are coming."
    ],
    "answer": 0,
    "why": {
     "en": "-a ... -e is feminine. Plural would be golikê sûrî.",
     "ku": "-a ... -e mê ye. Pirhejmar dibe golikê sûrî."
    },
    "src": "lez"
   },
   {
    "id": "lk_pi3",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Golikê sûrî yenê.",
    "options": [
     "The red calves are coming.",
     "The red male calf is coming."
    ],
    "answer": 0,
    "why": {
     "en": "-ê ... -î with yenê: plural. One male calf: goliko sûr yeno.",
     "ku": "-ê ... -î bi yenê re: pirhejmar. Yek golikê nêr: goliko sûr yeno."
    },
    "src": "lez"
   },
   {
    "id": "lk_pi4",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "To golika sûre berde.",
    "options": [
     "You took the red female calf.",
     "You took the red male calf."
    ],
    "answer": 0,
    "why": {
     "en": "Golika sûre and berde with -e: a feminine object.",
     "ku": "Golika sûre û berde bi -e: bireserê mê."
    },
    "src": "lez"
   }
  ]
 },
 {
  "id": "case",
  "order": 8,
  "level": "A2",
  "sieve": 5,
  "title": "Oblique case and words after the noun",
  "pattern": {
   "kmr": "ji [slot]",
   "zza": "[slot] ra",
   "en": "from [slot]"
  },
  "card": {
   "kmr>zza": {
    "en": "The oblique endings are close to yours: -î for a masculine noun (Ehmedî), -an for plurals. A feminine noun just keeps its -e (Zelale, not Zelalê). Most little words come after the noun: ji X → X ra, di X de → X de, ji X re → X rê, li ser X → X ser o.",
    "ku": "Paşgirên tewandî nêzîkî yên te ne: -î ji bo navdêra nêr (Ehmedî), -an ji bo pirhejmarê. Navdêra mê tenê -e ya xwe diparêze (Zelale, ne Zelalê). Piraniya daçekan li pey navdêrê tên: ji X → X ra, di X de → X de, ji X re → X rê, li ser X → X ser o."
   }
  },
  "items": [
   {
    "id": "cs_01",
    "en": "Give the pen to Ehmed.",
    "kmr": "Qelemê bide Ehmed.",
    "zza": "Qeleme bide Ehmedî.",
    "align": [
     {
      "kmr": "Qelemê",
      "zza": "Qeleme",
      "k": "grammar",
      "note": "feminine keeps -e, nothing added"
     },
     {
      "kmr": "bide",
      "zza": "bide",
      "k": "same"
     },
     {
      "kmr": "Ehmed",
      "zza": "Ehmedî",
      "k": "grammar",
      "note": "oblique -î on a man's name"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cs_02",
    "en": "Give the book to Zelal.",
    "kmr": "Kitêbê bide Zelalê.",
    "zza": "Kitabî bide Zelale.",
    "align": [
     {
      "kmr": "Kitêbê",
      "zza": "Kitabî",
      "k": "grammar",
      "note": "kitab is masculine: oblique -î"
     },
     {
      "kmr": "bide",
      "zza": "bide",
      "k": "same"
     },
     {
      "kmr": "Zelalê",
      "zza": "Zelale",
      "k": "grammar",
      "note": "feminine oblique: just -e"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cs_03",
    "en": "Ehmed sells meat.",
    "kmr": "Ehmed goşt difiroşe.",
    "zza": "Ehmed goşt roşeno.",
    "align": [
     {
      "kmr": "Ehmed",
      "zza": "Ehmed",
      "k": "same"
     },
     {
      "kmr": "goşt",
      "zza": "goşt",
      "k": "same",
      "note": "indefinite: no ending"
     },
     {
      "kmr": "difiroşe",
      "zza": "roşeno",
      "k": "cognate"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cs_04",
    "en": "Ehmed sells the meat.",
    "kmr": "Ehmed goştî difiroşe.",
    "zza": "Ehmed goştî roşeno.",
    "align": [
     {
      "kmr": "Ehmed",
      "zza": "Ehmed",
      "k": "same"
     },
     {
      "kmr": "goştî",
      "zza": "goştî",
      "k": "same",
      "note": "definite: oblique -î"
     },
     {
      "kmr": "difiroşe",
      "zza": "roşeno",
      "k": "cognate"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cs_05",
    "en": "I love Roşna.",
    "kmr": "Ez ji Roşnayê hez dikim.",
    "zza": "Ez Roşna ra hes kena.",
    "align": [
     {
      "kmr": "Ez",
      "zza": "Ez",
      "k": "same"
     },
     {
      "kmr": "ji Roşnayê",
      "zza": "Roşna ra",
      "k": "grammar",
      "note": "ji X becomes X ra"
     },
     {
      "kmr": "hez",
      "zza": "hes",
      "k": "cognate"
     },
     {
      "kmr": "dikim",
      "zza": "kena",
      "k": "grammar",
      "note": "no di-; -a: I"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cs_06",
    "en": "I'm buying you a book.",
    "kmr": "Ez ji te re kitêbekê dikirim.",
    "zza": "Ez to rê yew kitab herînena.",
    "align": [
     {
      "kmr": "Ez",
      "zza": "Ez",
      "k": "same"
     },
     {
      "kmr": "ji te re",
      "zza": "to rê",
      "k": "grammar",
      "note": "ji X re becomes X rê"
     },
     {
      "kmr": "kitêbekê",
      "zza": "yew kitab",
      "k": "grammar",
      "note": "yew + noun"
     },
     {
      "kmr": "dikirim",
      "zza": "herînena",
      "k": "different"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cs_07",
    "en": "It is written in the book.",
    "kmr": "Di kitêbê de nivîsandî ye.",
    "zza": "Kitab de nuşte yo.",
    "align": [
     {
      "kmr": "Di kitêbê de",
      "zza": "Kitab de",
      "k": "grammar",
      "note": "di X de becomes X de"
     },
     {
      "kmr": "nivîsandî",
      "zza": "nuşte",
      "k": "cognate"
     },
     {
      "kmr": "ye",
      "zza": "yo",
      "k": "grammar",
      "note": "o: masculine"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cs_08",
    "en": "We talked about you.",
    "kmr": "Me li ser te qise kir.",
    "zza": "Ma to ser o qisey kerd.",
    "align": [
     {
      "kmr": "Me",
      "zza": "Ma",
      "k": "cognate"
     },
     {
      "kmr": "li ser te",
      "zza": "to ser o",
      "k": "grammar",
      "note": "li ser X becomes X ser o"
     },
     {
      "kmr": "qise",
      "zza": "qisey",
      "k": "cognate"
     },
     {
      "kmr": "kir",
      "zza": "kerd",
      "k": "cognate"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cs_09",
    "en": "Ehmed is coming toward us.",
    "kmr": "Ehmed ber bi me tê.",
    "zza": "Ehmed ver bi ma yeno.",
    "align": [
     {
      "kmr": "Ehmed",
      "zza": "Ehmed",
      "k": "same"
     },
     {
      "kmr": "ber bi",
      "zza": "ver bi",
      "k": "sound",
      "rule": "v-b"
     },
     {
      "kmr": "me",
      "zza": "ma",
      "k": "cognate"
     },
     {
      "kmr": "tê",
      "zza": "yeno",
      "k": "different"
     }
    ],
    "src": "lez"
   },
   {
    "id": "cs_10",
    "en": "How can I go there without you?",
    "kmr": "Ez bê te çawa biçim wir?",
    "zza": "Ez bê to senî şina uca?",
    "align": [
     {
      "kmr": "Ez",
      "zza": "Ez",
      "k": "same"
     },
     {
      "kmr": "bê",
      "zza": "bê",
      "k": "same"
     },
     {
      "kmr": "te",
      "zza": "to",
      "k": "cognate"
     },
     {
      "kmr": "çawa",
      "zza": "senî",
      "k": "different"
     },
     {
      "kmr": "biçim",
      "zza": "şina",
      "k": "different"
     },
     {
      "kmr": "wir",
      "zza": "uca",
      "k": "different"
     }
    ],
    "src": "lez"
   }
  ],
  "pi": [
   {
    "id": "cs_pi1",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Qeleme bide Ehmedî.",
    "options": [
     "Give the pen to Ehmed.",
     "Ehmed, give the pen."
    ],
    "answer": 0,
    "why": {
     "en": "Ehmedî has the oblique -î: he is the one receiving.",
     "ku": "Ehmedî -î ya tewandî digire: ew wergir e."
    },
    "src": "lez"
   },
   {
    "id": "cs_pi2",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Ehmed goştî roşeno.",
    "options": [
     "Ehmed sells the meat.",
     "Ehmed sells meat."
    ],
    "answer": 0,
    "why": {
     "en": "Goştî with -î is a definite masculine object: the meat.",
     "ku": "Goştî bi -î bireserê nêr ê diyar e: ew goşt."
    },
    "src": "lez"
   },
   {
    "id": "cs_pi3",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Ehmed goşt roşeno.",
    "options": [
     "Ehmed sells meat.",
     "Ehmed sells the meat."
    ],
    "answer": 0,
    "why": {
     "en": "Bare goşt is indefinite: meat in general.",
     "ku": "Goşt bê paşgir nediyar e: bi giştî goşt."
    },
    "src": "lez"
   },
   {
    "id": "cs_pi4",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Ez to ra hes kena.",
    "options": [
     "I love you.",
     "You love me."
    ],
    "answer": 0,
    "why": {
     "en": "To is oblique 'you', after ra; ez is the subject.",
     "ku": "To 'te' ya tewandî ye û berî ra tê; ez kirde ye."
    },
    "src": "lez"
   }
  ]
 },
 {
  "id": "neg",
  "order": 9,
  "level": "A2",
  "sieve": 5,
  "title": "Not, don't, do it: nê-, nîyo, me-, bi-",
  "pattern": {
   "kmr": "Ew [slot] nake",
   "zza": "O [slot] nêkeno",
   "en": "He doesn't do [slot]"
  },
  "card": {
   "kmr>zza": {
    "en": "Your na- and ne- are both nê-: nake → nêkeno, neket → nêkewt. 'Is not' is nîyo / nîya / nîyê after the word. Commands match yours: bi- to do it (biwane = bixwîne), me- not to (meke). Watch the verb stems: bide is the same, bixwe is biwere.",
    "ku": "Na- û ne- ya te herdu dibin nê-: nake → nêkeno, neket → nêkewt. 'Ne ... e' li pey peyvê dibe nîyo / nîya / nîyê. Ferman wek yên te ne: bi- ji bo kirinê (biwane = bixwîne), me- ji bo nekirinê (meke). Hay ji kokan hebe: bide wek xwe ye, bixwe dibe biwere."
   }
  },
  "items": [
   {
    "id": "ng_01",
    "en": "He is not Roşan.",
    "kmr": "Ew ne Roşan e.",
    "zza": "O Roşan nîyo.",
    "align": [
     {
      "kmr": "Ew",
      "zza": "O",
      "k": "different"
     },
     {
      "kmr": "ne",
      "zza": "",
      "k": "only"
     },
     {
      "kmr": "Roşan",
      "zza": "Roşan",
      "k": "same"
     },
     {
      "kmr": "e",
      "zza": "nîyo",
      "k": "grammar",
      "note": "nîyo: is not (masculine)"
     }
    ],
    "src": "lez"
   },
   {
    "id": "ng_02",
    "en": "They are not teachers.",
    "kmr": "Ew ne mamoste ne.",
    "zza": "Ê malim nîyê.",
    "align": [
     {
      "kmr": "Ew",
      "zza": "Ê",
      "k": "different"
     },
     {
      "kmr": "ne",
      "zza": "",
      "k": "only"
     },
     {
      "kmr": "mamoste",
      "zza": "malim",
      "k": "different"
     },
     {
      "kmr": "ne",
      "zza": "nîyê",
      "k": "grammar",
      "note": "nîyê: are not"
     }
    ],
    "src": "lez"
   },
   {
    "id": "ng_03",
    "en": "You came but you didn't read.",
    "kmr": "Tu hatî lê te nexwend.",
    "zza": "Ti ameyî la to nêwend.",
    "align": [
     {
      "kmr": "Tu",
      "zza": "Ti",
      "k": "cognate"
     },
     {
      "kmr": "hatî",
      "zza": "ameyî",
      "k": "cognate"
     },
     {
      "kmr": "lê",
      "zza": "la",
      "k": "sound",
      "rule": "a-e"
     },
     {
      "kmr": "te",
      "zza": "to",
      "k": "cognate"
     },
     {
      "kmr": "nexwend",
      "zza": "nêwend",
      "k": "grammar",
      "note": "nê- for ne-; w for xw"
     }
    ],
    "src": "lez"
   },
   {
    "id": "ng_04",
    "en": "Ehmed doesn't do it.",
    "kmr": "Ehmed nake.",
    "zza": "Ehmed nêkeno.",
    "align": [
     {
      "kmr": "Ehmed",
      "zza": "Ehmed",
      "k": "same"
     },
     {
      "kmr": "nake",
      "zza": "nêkeno",
      "k": "grammar",
      "note": "nê- for na-"
     }
    ],
    "src": "lez"
   },
   {
    "id": "ng_05",
    "en": "Asmîn didn't fall.",
    "kmr": "Asmîn neket.",
    "zza": "Asmîne nêkewte.",
    "align": [
     {
      "kmr": "Asmîn",
      "zza": "Asmîne",
      "k": "grammar",
      "note": "feminine -e"
     },
     {
      "kmr": "neket",
      "zza": "nêkewte",
      "k": "grammar",
      "note": "nê- for ne-; -e: she"
     }
    ],
    "src": "lez"
   },
   {
    "id": "ng_06",
    "en": "He talks nicely, but I don't believe he'll do it.",
    "kmr": "Xweş dibêje, lê ez bawer nakim ku bike.",
    "zza": "Weş vano la ez bawer nîya bikero.",
    "align": [
     {
      "kmr": "Xweş",
      "zza": "Weş",
      "k": "sound",
      "rule": "w-xw"
     },
     {
      "kmr": "dibêje",
      "zza": "vano",
      "k": "different"
     },
     {
      "kmr": "lê",
      "zza": "la",
      "k": "sound",
      "rule": "a-e"
     },
     {
      "kmr": "ez",
      "zza": "ez",
      "k": "same"
     },
     {
      "kmr": "bawer",
      "zza": "bawer",
      "k": "same"
     },
     {
      "kmr": "nakim",
      "zza": "nîya",
      "k": "grammar",
      "note": "'I am not sure': negative copula"
     },
     {
      "kmr": "ku",
      "zza": "",
      "k": "only"
     },
     {
      "kmr": "bike",
      "zza": "bikero",
      "k": "grammar",
      "note": "subjunctive bi- ... -o"
     }
    ],
    "src": "lez"
   },
   {
    "id": "ng_07",
    "en": "Study your lesson.",
    "kmr": "Dersa xwe bixwîne.",
    "zza": "Dersa xo biwane.",
    "align": [
     {
      "kmr": "Dersa",
      "zza": "Dersa",
      "k": "same"
     },
     {
      "kmr": "xwe",
      "zza": "xo",
      "k": "cognate"
     },
     {
      "kmr": "bixwîne",
      "zza": "biwane",
      "k": "sound",
      "rule": "w-xw",
      "note": "imperative bi- ... -e, as in Kurmanji"
     }
    ],
    "src": "lez"
   },
   {
    "id": "ng_08",
    "en": "Don't do bad things!",
    "kmr": "Karê xirab meke!",
    "zza": "Karê xirabî meke!",
    "align": [
     {
      "kmr": "Karê",
      "zza": "Karê",
      "k": "same"
     },
     {
      "kmr": "xirab",
      "zza": "xirabî",
      "k": "grammar",
      "note": "the adjective takes oblique -î"
     },
     {
      "kmr": "meke",
      "zza": "meke",
      "k": "same",
      "note": "me-: the same in Kurmanji"
     }
    ],
    "src": "lez"
   },
   {
    "id": "ng_09",
    "en": "Don't go to their door!",
    "kmr": "Meçe ber deriyê wan!",
    "zza": "Meşo verê berê înan!",
    "align": [
     {
      "kmr": "Meçe",
      "zza": "Meşo",
      "k": "different",
      "note": "me-: don't"
     },
     {
      "kmr": "ber",
      "zza": "verê",
      "k": "sound",
      "rule": "v-b"
     },
     {
      "kmr": "deriyê",
      "zza": "berê",
      "k": "different",
      "note": "ber is 'door'"
     },
     {
      "kmr": "wan",
      "zza": "înan",
      "k": "different"
     }
    ],
    "src": "lez"
   },
   {
    "id": "ng_10",
    "en": "Do your work and eat your bread.",
    "kmr": "Karê xwe bike û nanê xwe bixwe.",
    "zza": "Karê xo bike û nanê xo biwere.",
    "align": [
     {
      "kmr": "Karê",
      "zza": "Karê",
      "k": "same"
     },
     {
      "kmr": "xwe",
      "zza": "xo",
      "k": "cognate"
     },
     {
      "kmr": "bike",
      "zza": "bike",
      "k": "same"
     },
     {
      "kmr": "û",
      "zza": "û",
      "k": "same"
     },
     {
      "kmr": "nanê",
      "zza": "nanê",
      "k": "same"
     },
     {
      "kmr": "xwe",
      "zza": "xo",
      "k": "cognate"
     },
     {
      "kmr": "bixwe",
      "zza": "biwere",
      "k": "sound",
      "rule": "w-xw"
     }
    ],
    "src": "lez"
   }
  ],
  "pi": [
   {
    "id": "ng_pi1",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "O Roşan nîyo.",
    "options": [
     "He is not Roşan.",
     "He is Roşan."
    ],
    "answer": 0,
    "why": {
     "en": "Nîyo is 'is not'. Positive would be O Roşan o.",
     "ku": "Nîyo 'ne ... e' ye. Erênî dibe O Roşan o."
    },
    "src": "lez"
   },
   {
    "id": "ng_pi2",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "nêkeno",
    "options": [
     "he doesn't do",
     "he didn't do"
    ],
    "answer": 0,
    "why": {
     "en": "Nê- + present ke-n-o: present. 'Didn't do' is the past nêkerd.",
     "ku": "Nê- + dema niha ke-n-o: dema niha. 'Nekir' dibe nêkerd."
    },
    "src": "lez"
   },
   {
    "id": "ng_pi3",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "nêkewt",
    "options": [
     "he didn't fall",
     "he doesn't fall"
    ],
    "answer": 0,
    "why": {
     "en": "Kewt- is the past stem. 'Doesn't fall' is nêkeweno.",
     "ku": "Kewt- koka borî ye. 'Nakeve' dibe nêkeweno."
    },
    "src": "lez"
   },
   {
    "id": "ng_pi4",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Karê xirabî meke!",
    "options": [
     "Don't do bad things!",
     "He doesn't do bad things."
    ],
    "answer": 0,
    "why": {
     "en": "Me- is a command not to do something, as in Kurmanji.",
     "ku": "Me- fermana nekirinê ye, wek kurmancî."
    },
    "src": "lez"
   },
   {
    "id": "ng_pi5",
    "dir": "kmr>zza",
    "show": "zza",
    "text": "Ê malim nîyê.",
    "options": [
     "They are not teachers.",
     "They are teachers."
    ],
    "answer": 0,
    "why": {
     "en": "Nîyê is the plural 'are not'. Positive: Ê malim ê.",
     "ku": "Nîyê 'ne ... in' a pirhejmar e. Erênî: Ê malim ê."
    },
    "src": "lez"
   }
  ]
 }
];
})();
