/* Kurmanji to Zazaki bridge (kmr>zza): reading. Every Zazaki form is cited in P.SOURCES; see docs/bridges/zazaki.md. */
(function () {
  const B = (window.__BRIDGES = window.__BRIDGES || {});
  const P = (B["kmr-zza"] = B["kmr-zza"] || {});
  P.READING = [
 {
  "id": "zr_greet",
  "title": "Perskerdiş: asking after each other",
  "level": "A1",
  "src": "lez",
  "sents": [
   {
    "id": "zr1_1",
    "en": "Hello (peace be upon you).",
    "kmr": "Selamuneleykum.",
    "zza": "Selamuneleykum.",
    "align": [
     {
      "kmr": "Selamuneleykum",
      "zza": "Selamuneleykum",
      "k": "same"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr1_2",
    "en": "Hello (and upon you peace).",
    "kmr": "Eleykumselam.",
    "zza": "Eleykumselam.",
    "align": [
     {
      "kmr": "Eleykumselam",
      "zza": "Eleykumselam",
      "k": "same"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr1_3",
    "en": "How are you, are you well?",
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
    "id": "zr1_4",
    "en": "I'm fine; how are you?",
    "kmr": "Ez baş im, tu çawa yî?",
    "zza": "Ez baş a, ti senîn î?",
    "align": [
     {
      "kmr": "Ez",
      "zza": "Ez",
      "k": "same"
     },
     {
      "kmr": "baş",
      "zza": "baş",
      "k": "same"
     },
     {
      "kmr": "im",
      "zza": "a",
      "k": "grammar",
      "note": "a: I am; ez is feminine"
     },
     {
      "kmr": "tu",
      "zza": "ti",
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
      "k": "grammar"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr1_5",
    "en": "I'm fine too. How are father and mother, and the little ones?",
    "kmr": "Ez jî baş im. Bav û dê, piçûk-miçûk çawa ne?",
    "zza": "Ez zî baş a. Babî û dadî, qic-micî senîn ê?",
    "align": [
     {
      "kmr": "Ez",
      "zza": "Ez",
      "k": "same"
     },
     {
      "kmr": "jî",
      "zza": "zî",
      "k": "cognate"
     },
     {
      "kmr": "baş",
      "zza": "baş",
      "k": "same"
     },
     {
      "kmr": "im",
      "zza": "a",
      "k": "grammar"
     },
     {
      "kmr": "Bav",
      "zza": "Babî",
      "k": "cognate"
     },
     {
      "kmr": "û",
      "zza": "û",
      "k": "same"
     },
     {
      "kmr": "dê",
      "zza": "dadî",
      "k": "different"
     },
     {
      "kmr": "piçûk-miçûk",
      "zza": "qic-micî",
      "k": "different",
      "note": "plural -î"
     },
     {
      "kmr": "çawa",
      "zza": "senîn",
      "k": "different"
     },
     {
      "kmr": "ne",
      "zza": "ê",
      "k": "grammar",
      "note": "plural copula ê"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr1_6",
    "en": "Bless you; they're well (better than death).",
    "kmr": "Tu xweş bî, ji mirinê baş in.",
    "zza": "Ti weş bî, merg ra baş ê.",
    "align": [
     {
      "kmr": "Tu",
      "zza": "Ti",
      "k": "cognate"
     },
     {
      "kmr": "xweş",
      "zza": "weş",
      "k": "sound",
      "rule": "w-xw"
     },
     {
      "kmr": "bî",
      "zza": "bî",
      "k": "same"
     },
     {
      "kmr": "ji mirinê",
      "zza": "merg ra",
      "k": "grammar",
      "note": "ji X becomes X ra"
     },
     {
      "kmr": "baş",
      "zza": "baş",
      "k": "same"
     },
     {
      "kmr": "in",
      "zza": "ê",
      "k": "grammar"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr1_7",
    "en": "How are they keeping, are they all healthy?",
    "kmr": "Keyfa wan çawa ye, hemû gewz in?",
    "zza": "Keyfê înan senîn o, heme gewz ê?",
    "align": [
     {
      "kmr": "Keyfa",
      "zza": "Keyfê",
      "k": "grammar",
      "note": "keyf is masculine in Zazaki"
     },
     {
      "kmr": "wan",
      "zza": "înan",
      "k": "different"
     },
     {
      "kmr": "çawa",
      "zza": "senîn",
      "k": "different"
     },
     {
      "kmr": "ye",
      "zza": "o",
      "k": "grammar",
      "note": "o: masculine"
     },
     {
      "kmr": "hemû",
      "zza": "heme",
      "k": "cognate"
     },
     {
      "kmr": "gewz",
      "zza": "gewz",
      "k": "same"
     },
     {
      "kmr": "in",
      "zza": "ê",
      "k": "grammar"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr1_8",
    "en": "Thanks to you; bless you.",
    "kmr": "Xweşiya te, tu xweş bî.",
    "zza": "Weşîya to, ti weş bî.",
    "align": [
     {
      "kmr": "Xweşiya",
      "zza": "Weşîya",
      "k": "sound",
      "rule": "w-xw"
     },
     {
      "kmr": "te",
      "zza": "to",
      "k": "cognate"
     },
     {
      "kmr": "tu",
      "zza": "ti",
      "k": "cognate"
     },
     {
      "kmr": "xweş",
      "zza": "weş",
      "k": "sound",
      "rule": "w-xw"
     },
     {
      "kmr": "bî",
      "zza": "bî",
      "k": "same"
     }
    ],
    "src": "lez"
   }
  ]
 },
 {
  "id": "zr_water",
  "title": "Îkramkerdişê Awe: offering water",
  "level": "B1",
  "src": "lez",
  "sents": [
   {
    "id": "zr2_1",
    "en": "One day some guests had come to the house of Uncle Hus of the Hesan family.",
    "kmr": "Rojekê çend mêvan hatibûn mala Ap Husê Keyê Hesan.",
    "zza": "Rojêk çend mêmanî ameybî keyeyê Ap Husê Keyê Hesan.",
    "align": [
     {
      "kmr": "Rojekê",
      "zza": "Rojêk",
      "k": "cognate",
      "note": "-êk = your -ek"
     },
     {
      "kmr": "çend",
      "zza": "çend",
      "k": "same"
     },
     {
      "kmr": "mêvan",
      "zza": "mêmanî",
      "k": "sound",
      "rule": "m-v",
      "note": "plural -î"
     },
     {
      "kmr": "hatibûn",
      "zza": "ameybî",
      "k": "grammar",
      "note": "had come"
     },
     {
      "kmr": "mala",
      "zza": "keyeyê",
      "k": "different",
      "note": "keye is masculine"
     },
     {
      "kmr": "Ap Husê Keyê Hesan",
      "zza": "Ap Husê Keyê Hesan",
      "k": "same"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr2_2",
    "en": "Uncle Hus called his little son and said:",
    "kmr": "Ap Husî gazî lawê xwe yê piçûk kir, got:",
    "zza": "Ap Husî venga lajê xo yê qijî da, va:",
    "align": [
     {
      "kmr": "Ap Husî",
      "zza": "Ap Husî",
      "k": "same"
     },
     {
      "kmr": "gazî",
      "zza": "venga",
      "k": "different"
     },
     {
      "kmr": "lawê",
      "zza": "lajê",
      "k": "cognate"
     },
     {
      "kmr": "xwe",
      "zza": "xo",
      "k": "cognate"
     },
     {
      "kmr": "yê",
      "zza": "yê",
      "k": "same"
     },
     {
      "kmr": "piçûk",
      "zza": "qijî",
      "k": "different",
      "note": "oblique -î on the adjective"
     },
     {
      "kmr": "kir",
      "zza": "da",
      "k": "different",
      "note": "venga dayene: to call"
     },
     {
      "kmr": "got",
      "zza": "va",
      "k": "different"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr2_3",
    "en": "Get up and give the guests water.",
    "kmr": "Rabe avê bide mêvanan.",
    "zza": "Werze awe bide mêmanan.",
    "align": [
     {
      "kmr": "Rabe",
      "zza": "Werze",
      "k": "different",
      "note": "command of weriştene"
     },
     {
      "kmr": "avê",
      "zza": "awe",
      "k": "sound",
      "rule": "fem-e"
     },
     {
      "kmr": "bide",
      "zza": "bide",
      "k": "same"
     },
     {
      "kmr": "mêvanan",
      "zza": "mêmanan",
      "k": "sound",
      "rule": "m-v"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr2_4",
    "en": "The boy got up, took the jug and filled a glass.",
    "kmr": "Lawik rabû, surahî girt, qedeh dagirt.",
    "zza": "Lajek werişt, surahî girewte, qedeh dekerd.",
    "align": [
     {
      "kmr": "Lawik",
      "zza": "Lajek",
      "k": "cognate"
     },
     {
      "kmr": "rabû",
      "zza": "werişt",
      "k": "different"
     },
     {
      "kmr": "surahî",
      "zza": "surahî",
      "k": "same"
     },
     {
      "kmr": "girt",
      "zza": "girewte",
      "k": "cognate",
      "note": "-e: surahî is feminine"
     },
     {
      "kmr": "qedeh",
      "zza": "qedeh",
      "k": "same"
     },
     {
      "kmr": "dagirt",
      "zza": "dekerd",
      "k": "different"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr2_5",
    "en": "The boy went to the next guest and held out the glass, but this guest too pointed to the guest beside him and said: give it to him.",
    "kmr": "Lawik çû ber mêvanê din, qedeh dirêj kir lê vî mêvanî jî mêvanê aliyê din nîşan da, got bide wî.",
    "zza": "Lajek şi verê mêmanê bînî, qedeh derg kerd la nê mêmanî zî mêmanê hetê bînî nîşan da, va bide ey.",
    "align": [
     {
      "kmr": "Lawik",
      "zza": "Lajek",
      "k": "cognate"
     },
     {
      "kmr": "çû",
      "zza": "şi",
      "k": "different"
     },
     {
      "kmr": "ber",
      "zza": "verê",
      "k": "sound",
      "rule": "v-b"
     },
     {
      "kmr": "mêvanê",
      "zza": "mêmanê",
      "k": "sound",
      "rule": "m-v"
     },
     {
      "kmr": "din",
      "zza": "bînî",
      "k": "different"
     },
     {
      "kmr": "qedeh",
      "zza": "qedeh",
      "k": "same"
     },
     {
      "kmr": "dirêj",
      "zza": "derg",
      "k": "cognate"
     },
     {
      "kmr": "kir",
      "zza": "kerd",
      "k": "cognate"
     },
     {
      "kmr": "lê",
      "zza": "la",
      "k": "sound",
      "rule": "a-e"
     },
     {
      "kmr": "vî",
      "zza": "nê",
      "k": "different"
     },
     {
      "kmr": "mêvanî",
      "zza": "mêmanî",
      "k": "sound",
      "rule": "m-v",
      "note": "agent: oblique -î"
     },
     {
      "kmr": "jî",
      "zza": "zî",
      "k": "cognate"
     },
     {
      "kmr": "mêvanê",
      "zza": "mêmanê",
      "k": "sound",
      "rule": "m-v"
     },
     {
      "kmr": "aliyê",
      "zza": "hetê",
      "k": "different"
     },
     {
      "kmr": "din",
      "zza": "bînî",
      "k": "different"
     },
     {
      "kmr": "nîşan",
      "zza": "nîşan",
      "k": "same"
     },
     {
      "kmr": "da",
      "zza": "da",
      "k": "same"
     },
     {
      "kmr": "got",
      "zza": "va",
      "k": "different"
     },
     {
      "kmr": "bide",
      "zza": "bide",
      "k": "same"
     },
     {
      "kmr": "wî",
      "zza": "ey",
      "k": "different"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr2_6",
    "en": "So in the end each one wanted it offered to the other.",
    "kmr": "Axir bi vî awayî her kesî xwest ji yê din re îkram bike.",
    "zza": "Axir bi nê hawayî her kesî waşt ê bînî rê îkram bikero.",
    "align": [
     {
      "kmr": "Axir",
      "zza": "Axir",
      "k": "same"
     },
     {
      "kmr": "bi",
      "zza": "bi",
      "k": "same"
     },
     {
      "kmr": "vî",
      "zza": "nê",
      "k": "different"
     },
     {
      "kmr": "awayî",
      "zza": "hawayî",
      "k": "cognate"
     },
     {
      "kmr": "her",
      "zza": "her",
      "k": "same"
     },
     {
      "kmr": "kesî",
      "zza": "kesî",
      "k": "same"
     },
     {
      "kmr": "xwest",
      "zza": "waşt",
      "k": "sound",
      "rule": "w-xw"
     },
     {
      "kmr": "ji yê din re",
      "zza": "ê bînî rê",
      "k": "grammar",
      "note": "ji X re becomes X rê"
     },
     {
      "kmr": "îkram",
      "zza": "îkram",
      "k": "same"
     },
     {
      "kmr": "bike",
      "zza": "bikero",
      "k": "grammar",
      "note": "subjunctive -o"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr2_7",
    "en": "Uncle Hus said angrily:",
    "kmr": "Ap Husî bi hêrs got:",
    "zza": "Ap Husî hêrsî reyra va:",
    "align": [
     {
      "kmr": "Ap Husî",
      "zza": "Ap Husî",
      "k": "same"
     },
     {
      "kmr": "bi hêrs",
      "zza": "hêrsî reyra",
      "k": "grammar",
      "note": "X reyra: with X"
     },
     {
      "kmr": "got",
      "zza": "va",
      "k": "different"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr2_8",
    "en": "Son, why didn't you give the guests water?",
    "kmr": "Lawo, te çima av neda mêvanan?",
    "zza": "Lalawo to çira awe nêda mêmanan?",
    "align": [
     {
      "kmr": "Lawo",
      "zza": "Lalawo",
      "k": "cognate"
     },
     {
      "kmr": "te",
      "zza": "to",
      "k": "cognate"
     },
     {
      "kmr": "çima",
      "zza": "çira",
      "k": "cognate"
     },
     {
      "kmr": "av",
      "zza": "awe",
      "k": "sound",
      "rule": "fem-e"
     },
     {
      "kmr": "neda",
      "zza": "nêda",
      "k": "grammar",
      "note": "nê- for ne-"
     },
     {
      "kmr": "mêvanan",
      "zza": "mêmanan",
      "k": "sound",
      "rule": "m-v"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr2_9",
    "en": "Uncle Hus's son said, calm and gentle:",
    "kmr": "Lawê Ap Husî wisa sakîn û nerm got:",
    "zza": "Lajê Ap Husî wina sakîn û nermek va:",
    "align": [
     {
      "kmr": "Lawê",
      "zza": "Lajê",
      "k": "cognate"
     },
     {
      "kmr": "Ap Husî",
      "zza": "Ap Husî",
      "k": "same"
     },
     {
      "kmr": "wisa",
      "zza": "wina",
      "k": "cognate"
     },
     {
      "kmr": "sakîn",
      "zza": "sakîn",
      "k": "same"
     },
     {
      "kmr": "û",
      "zza": "û",
      "k": "same"
     },
     {
      "kmr": "nerm",
      "zza": "nermek",
      "k": "cognate"
     },
     {
      "kmr": "got",
      "zza": "va",
      "k": "different"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr2_10",
    "en": "Let them first agree among themselves who drinks first; then I'll serve it, father.",
    "kmr": "Hela bila di nav xwe de qerar bidin, pêşî kî vedixwe, ez didim, bavo.",
    "zza": "Hela wa xo mîyan de qerar bidî, verî kam şimeno, ez dana bawo.",
    "align": [
     {
      "kmr": "Hela",
      "zza": "Hela",
      "k": "same"
     },
     {
      "kmr": "bila",
      "zza": "wa",
      "k": "different"
     },
     {
      "kmr": "di nav xwe de",
      "zza": "xo mîyan de",
      "k": "grammar",
      "note": "di nav X de becomes X mîyan de"
     },
     {
      "kmr": "qerar",
      "zza": "qerar",
      "k": "same"
     },
     {
      "kmr": "bidin",
      "zza": "bidî",
      "k": "grammar"
     },
     {
      "kmr": "pêşî",
      "zza": "verî",
      "k": "different"
     },
     {
      "kmr": "kî",
      "zza": "kam",
      "k": "different"
     },
     {
      "kmr": "vedixwe",
      "zza": "şimeno",
      "k": "different"
     },
     {
      "kmr": "ez",
      "zza": "ez",
      "k": "same"
     },
     {
      "kmr": "didim",
      "zza": "dana",
      "k": "grammar",
      "note": "no di-; -a: I"
     },
     {
      "kmr": "bavo",
      "zza": "bawo",
      "k": "sound",
      "rule": "w-v"
     }
    ],
    "src": "lez"
   }
  ]
 },
 {
  "id": "zr_snow",
  "title": "A snowy Sunday",
  "level": "A2",
  "src": "lez",
  "sents": [
   {
    "id": "zr3_1",
    "en": "A few days ago, early in the morning, she came to my house.",
    "kmr": "Çend roj berê, serê sibê hat mala min.",
    "zza": "Çend rojî verê cû, serê sibayî ameye keyeyê mi.",
    "align": [
     {
      "kmr": "Çend",
      "zza": "Çend",
      "k": "same"
     },
     {
      "kmr": "roj",
      "zza": "rojî",
      "k": "grammar",
      "note": "plural -î"
     },
     {
      "kmr": "berê",
      "zza": "verê cû",
      "k": "cognate",
      "note": "ver is your ber"
     },
     {
      "kmr": "serê sibê",
      "zza": "serê sibayî",
      "k": "cognate"
     },
     {
      "kmr": "hat",
      "zza": "ameye",
      "k": "grammar",
      "note": "-e: she came"
     },
     {
      "kmr": "mala",
      "zza": "keyeyê",
      "k": "different"
     },
     {
      "kmr": "min",
      "zza": "mi",
      "k": "cognate"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr3_2",
    "en": "Her visit was like a surprise for me.",
    "kmr": "Ev hatina wê ji min re wek surprîzekê bû.",
    "zza": "No ameyîşê aye mi rê sey yew surprîzî bi.",
    "align": [
     {
      "kmr": "Ev",
      "zza": "No",
      "k": "different",
      "note": "no: this, masculine"
     },
     {
      "kmr": "hatina",
      "zza": "ameyîşê",
      "k": "grammar",
      "note": "verbal nouns in -iş are masculine"
     },
     {
      "kmr": "wê",
      "zza": "aye",
      "k": "different"
     },
     {
      "kmr": "ji min re",
      "zza": "mi rê",
      "k": "grammar",
      "note": "ji X re becomes X rê"
     },
     {
      "kmr": "wek",
      "zza": "sey",
      "k": "different"
     },
     {
      "kmr": "surprîzekê",
      "zza": "yew surprîzî",
      "k": "grammar",
      "note": "yew + noun"
     },
     {
      "kmr": "bû",
      "zza": "bi",
      "k": "cognate",
      "note": "bi: was (masculine)"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr3_3",
    "en": "I was alone at home.",
    "kmr": "Ez bi tenê li mal bûm.",
    "zza": "Ez tena keye de bîya.",
    "align": [
     {
      "kmr": "Ez",
      "zza": "Ez",
      "k": "same"
     },
     {
      "kmr": "bi tenê",
      "zza": "tena",
      "k": "cognate"
     },
     {
      "kmr": "li mal",
      "zza": "keye de",
      "k": "grammar",
      "note": "li X becomes X de"
     },
     {
      "kmr": "bûm",
      "zza": "bîya",
      "k": "grammar",
      "note": "-a: ez is feminine"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr3_4",
    "en": "It was Sunday.",
    "kmr": "Roja yekşemê bû.",
    "zza": "Roja yewşeme bî.",
    "align": [
     {
      "kmr": "Roja",
      "zza": "Roja",
      "k": "same"
     },
     {
      "kmr": "yekşemê",
      "zza": "yewşeme",
      "k": "cognate"
     },
     {
      "kmr": "bû",
      "zza": "bî",
      "k": "grammar",
      "note": "bî: was (feminine roje)"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr3_5",
    "en": "That day snow had started at dawn, and it was coming down like chaff.",
    "kmr": "Wê rojê jî ji şefeqê ve berf dest pê kiribû, wek kayê dihat xwarê.",
    "zza": "A roje zî şefeqêk ra vewre dest pêkerdibi, sey simerî ameyne war.",
    "align": [
     {
      "kmr": "Wê rojê",
      "zza": "A roje",
      "k": "grammar",
      "note": "a: that, feminine"
     },
     {
      "kmr": "jî",
      "zza": "zî",
      "k": "cognate"
     },
     {
      "kmr": "ji şefeqê ve",
      "zza": "şefeqêk ra",
      "k": "grammar",
      "note": "ji X ve becomes X ra"
     },
     {
      "kmr": "berf",
      "zza": "vewre",
      "k": "sound",
      "rule": "v-b"
     },
     {
      "kmr": "dest",
      "zza": "dest",
      "k": "same"
     },
     {
      "kmr": "pê kiribû",
      "zza": "pêkerdibi",
      "k": "cognate",
      "note": "had started"
     },
     {
      "kmr": "wek",
      "zza": "sey",
      "k": "different"
     },
     {
      "kmr": "kayê",
      "zza": "simerî",
      "k": "different"
     },
     {
      "kmr": "dihat",
      "zza": "ameyne",
      "k": "grammar",
      "note": "habitual past: the same for everyone"
     },
     {
      "kmr": "xwarê",
      "zza": "war",
      "k": "sound",
      "rule": "w-xw"
     }
    ],
    "src": "lez"
   },
   {
    "id": "zr3_6",
    "en": "The electricity had been cut.",
    "kmr": "Elektrîk hatibû birîn.",
    "zza": "Elektrîk birîyabi.",
    "align": [
     {
      "kmr": "Elektrîk",
      "zza": "Elektrîk",
      "k": "same"
     },
     {
      "kmr": "hatibû birîn",
      "zza": "birîyabi",
      "k": "grammar",
      "note": "passive -îya-: had been cut"
     }
    ],
    "src": "lez"
   }
  ]
 }
];
  P.PARADIGMS = [
 {
  "id": "pron",
  "title": {
   "en": "Personal pronouns",
   "ku": "Cînavên kesane"
  },
  "verb": {
   "tgt": "ez, ti, o ...",
   "src": "ez, tu, ew ...",
   "en": "I, you, he ..."
  },
  "cols": [
   "1sg",
   "2sg",
   "3sg.m",
   "3sg.f",
   "1pl",
   "2pl",
   "3pl"
  ],
  "rows": [
   {
    "label": {
     "en": "Direct (subject)",
     "ku": "Rewşa xwerû (kirde)"
    },
    "tgt": [
     "ez",
     "ti",
     "o",
     "a",
     "ma",
     "şima",
     "ê"
    ],
    "src": [
     "ez",
     "tu",
     "ew",
     "ew",
     "em",
     "hûn",
     "ew"
    ]
   },
   {
    "label": {
     "en": "Oblique (object, past agent)",
     "ku": "Rewşa tewandî"
    },
    "tgt": [
     "mi",
     "to",
     "ey",
     "aye",
     "ma",
     "şima",
     "înan"
    ],
    "src": [
     "min",
     "te",
     "wî",
     "wê",
     "me",
     "we",
     "wan"
    ]
   }
  ],
  "src": "lez",
  "note": {
   "en": "Ma and şima never change. The third person shows gender in both cases: o / a, ey / aye. Ez counts as feminine for every speaker.",
   "ku": "Ma û şima qet naguherin. Kesê sêyem di herdu rewşan de zayendê nîşan dide: o / a, ey / aye. Ez ji bo her axêverî mê tê hesibandin."
  }
 },
 {
  "id": "cop",
  "title": {
   "en": "To be: present and past",
   "ku": "Lêkera nîvco: niha û borî"
  },
  "verb": {
   "tgt": "-a / -o / -ê; bîyene",
   "src": "-im / -e / -in; bûn",
   "en": "to be"
  },
  "cols": [
   "1sg",
   "2sg",
   "3sg.m",
   "3sg.f",
   "1pl",
   "2pl",
   "3pl"
  ],
  "rows": [
   {
    "label": {
     "en": "Present",
     "ku": "Dema niha"
    },
    "tgt": [
     {
      "w": "a"
     },
     {
      "w": "î"
     },
     {
      "w": "o"
     },
     {
      "w": "a"
     },
     {
      "w": "ê"
     },
     {
      "w": "ê",
      "src": "ez"
     },
     {
      "w": "ê"
     }
    ],
    "src": [
     "im",
     "î",
     "e",
     "e",
     "in",
     "in",
     "in"
    ]
   },
   {
    "label": {
     "en": "Negative",
     "ku": "Neyînî"
    },
    "tgt": [
     {
      "w": "nîya"
     },
     {
      "w": "nîyî",
      "src": "ez"
     },
     {
      "w": "nîyo"
     },
     {
      "w": "nîya"
     },
     {
      "w": "nîyê",
      "src": "ez"
     },
     {
      "w": "nîyê",
      "src": "ez"
     },
     {
      "w": "nîyê"
     }
    ],
    "src": [
     "ne ... im",
     "ne ... î",
     "ne ... e",
     "ne ... e",
     "ne ... in",
     "ne ... in",
     "ne ... in"
    ]
   },
   {
    "label": {
     "en": "Past",
     "ku": "Dema borî"
    },
    "tgt": [
     {
      "w": "bîya"
     },
     "",
     {
      "w": "bi"
     },
     {
      "w": "bî"
     },
     {
      "w": "bî"
     },
     "",
     {
      "w": "bî"
     }
    ],
    "src": [
     "bûm",
     "bûyî",
     "bû",
     "bû",
     "bûn",
     "bûn",
     "bûn"
    ]
   }
  ],
  "src": "lez",
  "note": {
   "en": "2sg î is for a man; Lezgîn gives no feminine 'you are'. Grey cells are not in our sources. Some negative cells come from the English–Zazaki sentences. After a vowel the copula takes y: ya, yo, yê.",
   "ku": "Î ya kesê duyem ji bo mêr e; Lezgîn ji bo jinê form nade. Xaneyên vala di çavkaniyên me de tune ne. Hin xaneyên neyînî ji hevokên îngilîzî–zazakî ne. Piştî dengdêrê y tê: ya, yo, yê."
  }
 },
 {
  "id": "kerdene",
  "title": {
   "en": "Present tense: kerdene 'to do'",
   "ku": "Dema niha: kerdene (kirin)"
  },
  "verb": {
   "tgt": "kerdene",
   "src": "kirin",
   "en": "to do"
  },
  "cols": [
   "1sg",
   "2sg",
   "3sg.m",
   "3sg.f",
   "1pl",
   "2pl",
   "3pl"
  ],
  "rows": [
   {
    "label": {
     "en": "Present",
     "ku": "Dema niha"
    },
    "tgt": [
     {
      "w": "kena"
     },
     {
      "w": "kenî / kena"
     },
     {
      "w": "keno"
     },
     {
      "w": "kena"
     },
     {
      "w": "kenê"
     },
     {
      "w": "kenê"
     },
     {
      "w": "kenê"
     }
    ],
    "src": [
     "dikim",
     "dikî",
     "dike",
     "dike",
     "dikin",
     "dikin",
     "dikin"
    ]
   },
   {
    "label": {
     "en": "Negative",
     "ku": "Neyînî"
    },
    "tgt": [
     {
      "w": "nêkena"
     },
     {
      "w": "nêkenî / nêkena"
     },
     {
      "w": "nêkeno"
     },
     {
      "w": "nêkena"
     },
     {
      "w": "nêkenê"
     },
     {
      "w": "nêkenê"
     },
     {
      "w": "nêkenê"
     }
    ],
    "src": [
     "nakim",
     "nakî",
     "nake",
     "nake",
     "nakin",
     "nakin",
     "nakin"
    ]
   }
  ],
  "src": "lez",
  "note": {
   "en": "No di-. The ending carries person and gender: -a (I, she, you to a woman), -î (you to a man), -o (he), -ê (all plurals). The 2sg cell shows the form to a man / to a woman.",
   "ku": "Di- tune. Paşgir kes û zayendê nîşan dide: -a (ez, ew a mê, tu ji jinê re), -î (tu ji mêr re), -o (ew ê nêr), -ê (hemû pirhejmar). Di xaneya kesê duyem de: ji mêr re / ji jinê re."
  }
 },
 {
  "id": "siyene",
  "title": {
   "en": "To go: present and future",
   "ku": "Şîyene (çûn): niha û bê"
  },
  "verb": {
   "tgt": "şîyene",
   "src": "çûn",
   "en": "to go"
  },
  "cols": [
   "1sg",
   "2sg",
   "3sg.m",
   "3sg.f",
   "1pl",
   "2pl",
   "3pl"
  ],
  "rows": [
   {
    "label": {
     "en": "Present",
     "ku": "Dema niha"
    },
    "tgt": [
     {
      "w": "şina"
     },
     {
      "w": "şinî / şina"
     },
     {
      "w": "şino"
     },
     {
      "w": "şina"
     },
     {
      "w": "şinê"
     },
     {
      "w": "şinê"
     },
     {
      "w": "şinê"
     }
    ],
    "src": [
     "diçim",
     "diçî",
     "diçe",
     "diçe",
     "diçin",
     "diçin",
     "diçin"
    ]
   },
   {
    "label": {
     "en": "Future",
     "ku": "Dema bê"
    },
    "tgt": [
     {
      "w": "do şirî"
     },
     {
      "w": "do şirî"
     },
     {
      "w": "do şiro"
     },
     {
      "w": "do şiro / do şira"
     },
     {
      "w": "do şirê / do şirin"
     },
     {
      "w": "do şirê"
     },
     {
      "w": "do şirê"
     }
    ],
    "src": [
     "ê biçim",
     "yê biçî",
     "ê biçe",
     "ê biçe",
     "ê biçin",
     "ê biçin",
     "ê biçin"
    ]
   }
  ],
  "src": "lez",
  "note": {
   "en": "The future is do + subjunctive, like your ê / dê + bi-. Lezgîn's tables give 1sg -î (do şirî); his own texts and our other sentences also use -a (ez ... bikera). A speaker should confirm.",
   "ku": "Dema bê do + raweya daxwazî ye, wek ê / dê + bi- ya te. Tabloyên Lezgîn ji bo ez -î didin (do şirî); nivîsên wî û hevokên me yên din -a jî bi kar tînin (ez ... bikera). Divê axêverek piştrast bike."
  }
 },
 {
  "id": "kewtene",
  "title": {
   "en": "Past without an object: kewtene 'to fall'",
   "ku": "Dema borî ya negerguhêz: kewtene (ketin)"
  },
  "verb": {
   "tgt": "kewtene",
   "src": "ketin",
   "en": "to fall"
  },
  "cols": [
   "1sg",
   "2sg",
   "3sg.m",
   "3sg.f",
   "1pl",
   "2pl",
   "3pl"
  ],
  "rows": [
   {
    "label": {
     "en": "Simple past",
     "ku": "Borî ya diyar"
    },
    "tgt": [
     {
      "w": "kewta"
     },
     {
      "w": "kewtî / kewta"
     },
     {
      "w": "kewt"
     },
     {
      "w": "kewte"
     },
     {
      "w": "kewtî"
     },
     {
      "w": "kewtî"
     },
     {
      "w": "kewtî"
     }
    ],
    "src": [
     "ketim",
     "ketî",
     "ket",
     "ket",
     "ketin",
     "ketin",
     "ketin"
    ]
   },
   {
    "label": {
     "en": "Negative",
     "ku": "Neyînî"
    },
    "tgt": [
     {
      "w": "nêkewta",
      "built": true
     },
     {
      "w": "nêkewtî / nêkewta",
      "built": true
     },
     {
      "w": "nêkewt"
     },
     {
      "w": "nêkewte"
     },
     {
      "w": "nêkewtî",
      "built": true
     },
     {
      "w": "nêkewtî",
      "built": true
     },
     {
      "w": "nêkewtî"
     }
    ],
    "src": [
     "neketim",
     "neketî",
     "neket",
     "neket",
     "neketin",
     "neketin",
     "neketin"
    ]
   },
   {
    "label": {
     "en": "Perfect ('has fallen')",
     "ku": "Borî ya nediyar"
    },
    "tgt": [
     {
      "w": "kewta"
     },
     {
      "w": "kewtê / kewta"
     },
     {
      "w": "kewto"
     },
     {
      "w": "kewta"
     },
     {
      "w": "kewtê"
     },
     {
      "w": "kewtê"
     },
     {
      "w": "kewtê"
     }
    ],
    "src": [
     "ketime",
     "ketiyî",
     "ketiye",
     "ketiye",
     "ketine",
     "ketine",
     "ketine"
    ]
   },
   {
    "label": {
     "en": "Pluperfect ('had fallen')",
     "ku": "Çîrokiya borî"
    },
    "tgt": [
     {
      "w": "kewtibîya"
     },
     {
      "w": "kewtibî / kewtibîya"
     },
     {
      "w": "kewtibi"
     },
     {
      "w": "kewtibî"
     },
     {
      "w": "kewtibî"
     },
     {
      "w": "kewtibî"
     },
     {
      "w": "kewtibî"
     }
    ],
    "src": [
     "ketibûm",
     "ketibûyî",
     "ketibû",
     "ketibû",
     "ketibûn",
     "ketibûn",
     "ketibûn"
    ]
   },
   {
    "label": {
     "en": "Past progressive ('was falling')",
     "ku": "Çîrokiya dema niha"
    },
    "tgt": [
     {
      "w": "kewtêne"
     },
     {
      "w": "kewtêne"
     },
     {
      "w": "kewtêne"
     },
     {
      "w": "kewtêne"
     },
     {
      "w": "kewtêne"
     },
     {
      "w": "kewtêne"
     },
     {
      "w": "kewtêne"
     }
    ],
    "src": [
     "diketim",
     "diketî",
     "diket",
     "diket",
     "diketin",
     "diketin",
     "diketin"
    ]
   }
  ],
  "src": "lez",
  "note": {
   "en": "The verb agrees with the subject, as in Kurmanji, but also in gender. The progressive -êne never changes: the easiest tense in Zazaki. 2sg cells: to a man / to a woman. Lezgîn gives the simple-past negative only for nouns, so the marked pronoun cells add nê- to the attested form.",
   "ku": "Lêker li gor kirdeyê ye, wek kurmancî, lê li gor zayendê jî. Çîrokiya bi -êne qet naguhere: dema herî hêsan a zazakî ye. Kesê duyem: ji mêr re / ji jinê re. Lezgîn neyîniya borî ya diyar tenê bi navdêran dide; xaneyên nîşankirî nê- li forma belgekirî zêde dikin."
  }
 },
 {
  "id": "vistene",
  "title": {
   "en": "Past with an object: vistene 'to knock down' (columns: who did it)",
   "ku": "Dema borî ya gerguhêz: vistene (xistin), stûn: kirde"
  },
  "verb": {
   "tgt": "vistene",
   "src": "xistin",
   "en": "to knock down, hit"
  },
  "cols": [
   "1sg",
   "2sg",
   "3sg.m",
   "3sg.f",
   "1pl",
   "2pl",
   "3pl"
  ],
  "rows": [
   {
    "label": {
     "en": "object o (him)",
     "ku": "bireser o (ew, nêr)"
    },
    "tgt": [
     {
      "w": "Mi o vist"
     },
     "",
     {
      "w": "Ey o vist"
     },
     {
      "w": "Aye o vist"
     },
     {
      "w": "Ma o vist"
     },
     {
      "w": "Şima o vist"
     },
     {
      "w": "Înan o vist"
     }
    ],
    "src": [
     "Min ew xist",
     "Te ew xist",
     "Wî ew xist",
     "Wê ew xist",
     "Me ew xist",
     "We ew xist",
     "Wan ew xist"
    ]
   },
   {
    "label": {
     "en": "object a (her)",
     "ku": "bireser a (ew, mê)"
    },
    "tgt": [
     {
      "w": "Mi a viste"
     },
     "",
     {
      "w": "Ey a viste"
     },
     {
      "w": "Aye a viste"
     },
     {
      "w": "Ma a viste"
     },
     {
      "w": "Şima a viste"
     },
     {
      "w": "Înan a viste"
     }
    ],
    "src": [
     "Min ew xist",
     "Te ew xist",
     "Wî ew xist",
     "Wê ew xist",
     "Me ew xist",
     "We ew xist",
     "Wan ew xist"
    ]
   },
   {
    "label": {
     "en": "object ê (them)",
     "ku": "bireser ê (ew, pirhejmar)"
    },
    "tgt": [
     {
      "w": "Mi ê vistî"
     },
     "",
     {
      "w": "Ey ê vistî"
     },
     {
      "w": "Aye ê vistî"
     },
     {
      "w": "Ma ê vistî"
     },
     {
      "w": "Şima ê vistî",
      "built": true
     },
     {
      "w": "Înan ê vistî"
     }
    ],
    "src": [
     "Min ew xistin",
     "Te ew xistin",
     "Wî ew xistin",
     "Wê ew xistin",
     "Me ew xistin",
     "We ew xistin",
     "Wan ew xistin"
    ]
   },
   {
    "label": {
     "en": "object ez (me)",
     "ku": "bireser ez"
    },
    "tgt": [
     "",
     "",
     {
      "w": "Ey ez vista"
     },
     {
      "w": "Aye ez vista"
     },
     {
      "w": "Ma ez vista"
     },
     {
      "w": "Şima ez vista"
     },
     {
      "w": "Înan ez vista"
     }
    ],
    "src": [
     "",
     "Te ez xistim",
     "Wî ez xistim",
     "Wê ez xistim",
     "Me ez xistim",
     "We ez xistim",
     "Wan ez xistim"
    ]
   }
  ],
  "src": "lez",
  "note": {
   "en": "The doer is oblique (mi, ey, aye, ma, şima, înan) and the verb follows the object: bare for him, -e for her, -î for them, -a for ez. Lezgîn gives no grid for 'you' as the doer. One cell (Şima ê vistî) is read from his 'Şima ma/ê vistî'.",
   "ku": "Kirde tewandî ye (mi, ey, aye, ma, şima, înan) û lêker li gor bireserê ye: ji bo wî tazî, ji bo wê -e, ji bo wan -î, ji bo ez -a. Lezgîn ji bo 'te' wek kirde tablo nade. Xaneyek (Şima ê vistî) ji 'Şima ma/ê vistî' ya wî hatiye xwendin."
  }
 }
];
})();
