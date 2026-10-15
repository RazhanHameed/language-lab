// Kalhori (Southern Kurdish) bridge for Sorani speakers: grammar frames.
// Pair ckb-sdh, direction ckb>sdh. Every Kalhori form is attested in the sources listed in sources.js
// or built from attested pieces (built: true). Nothing here has been checked by a native speaker.
(function () {
  const B = (window.__BRIDGES = window.__BRIDGES || {});
  const P = (B["ckb-sdh"] = B["ckb-sdh"] || {});
  P.FRAMES = [
 {
  "id": "copula",
  "order": 1,
  "level": "A1",
  "sieve": 5,
  "title": "“To be”: am, is, are",
  "pattern": {
   "ckb": "(من) [slot]ـم",
   "sdh": "(مە) [slot]ـم",
   "en": "I am [slot]"
  },
  "card": {
   "ckb>sdh": {
    "en": "The copula endings are almost Sorani: -م, -ە, -ن are identical. Three changes: 'you are' is plain -ی (no ت), 'we are' is -یم (not -ین), and after a vowel 'is' is -سە: ئەوە داراسە. 'I' is مە or من, 'you' is تە.",
    "ku": "کۆتاییەکانی «بوون» نزیکەی وەک سۆرانین: ـم، ـە، ـن وەک خۆیانن. سێ جیاوازی هەیە: «تۆ» تەنها ـی (بێ ت)، «ئێمە» ـیم (نەک ـین)، و لە دوای پیتی بزوێن «ـە» دەبێتە «ـسە»: ئەوە داراسە. «من» دەبێتە مە یان من، «تۆ» دەبێتە تە."
   }
  },
  "items": [
   {
    "id": "cop_01",
    "en": "I am taller than Jamal.",
    "ckb": "من لە جەمال درێژترم.",
    "sdh": "مە لە جەمال درێژترم.",
    "align": [
     {
      "ckb": "من",
      "sdh": "مە",
      "k": "cognate",
      "note": "I: مە (also من)"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "جەمال",
      "sdh": "جەمال",
      "k": "same"
     },
     {
      "ckb": "درێژتر",
      "sdh": "درێژتر",
      "k": "same"
     },
     {
      "ckb": "ـم",
      "sdh": "ـم",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "cop_02",
    "en": "You are older than Shamar.",
    "ckb": "تۆ لە شامار پیرتریت.",
    "sdh": "تە لە شامار پیرتری.",
    "align": [
     {
      "ckb": "تۆ",
      "sdh": "تە",
      "k": "cognate",
      "note": "you: تە"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "شامار",
      "sdh": "شامار",
      "k": "same"
     },
     {
      "ckb": "پیرتر",
      "sdh": "پیرتر",
      "k": "same"
     },
     {
      "ckb": "ـیت",
      "sdh": "ـی",
      "k": "grammar",
      "note": "you are: -ی, no ت"
     }
    ],
    "src": "saye"
   },
   {
    "id": "cop_03",
    "en": "Halabja is a city.",
    "ckb": "هەڵەبجە شارە.",
    "sdh": "هەڵەبجە شارە.",
    "align": [
     {
      "ckb": "هەڵەبجە",
      "sdh": "هەڵەبجە",
      "k": "same"
     },
     {
      "ckb": "شار",
      "sdh": "شار",
      "k": "same"
     },
     {
      "ckb": "ـە",
      "sdh": "ـە",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "cop_04",
    "en": "Manizha is my sister.",
    "ckb": "مەنیژە خوشکمە.",
    "sdh": "مەنیژە خوەیشگمە.",
    "align": [
     {
      "ckb": "مەنیژە",
      "sdh": "مەنیژە",
      "k": "same"
     },
     {
      "ckb": "خوشک",
      "sdh": "خوەیشگ",
      "k": "cognate",
      "note": "sister: خوەیشک, written -گ before endings"
     },
     {
      "ckb": "ـم",
      "sdh": "ـم",
      "k": "same"
     },
     {
      "ckb": "ـە",
      "sdh": "ـە",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "cop_05",
    "en": "This is my brother.",
    "ckb": "ئەمە برامە.",
    "sdh": "ئەیە برامە.",
    "align": [
     {
      "ckb": "ئەمە",
      "sdh": "ئەیە",
      "k": "cognate",
      "note": "this one: ئەیە"
     },
     {
      "ckb": "برا",
      "sdh": "برا",
      "k": "same"
     },
     {
      "ckb": "ـم",
      "sdh": "ـم",
      "k": "same"
     },
     {
      "ckb": "ـە",
      "sdh": "ـە",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "cop_06",
    "en": "Kamal and I are neighbours.",
    "ckb": "من و کەمال دراوسێین.",
    "sdh": "من و کەمال هاوسایم.",
    "align": [
     {
      "ckb": "من",
      "sdh": "من",
      "k": "same"
     },
     {
      "ckb": "و",
      "sdh": "و",
      "k": "same"
     },
     {
      "ckb": "کەمال",
      "sdh": "کەمال",
      "k": "same"
     },
     {
      "ckb": "دراوسێ",
      "sdh": "هاوسا",
      "k": "cognate",
      "note": "neighbour: هاوسا"
     },
     {
      "ckb": "ـین",
      "sdh": "ـیم",
      "k": "grammar",
      "note": "we are: -یم"
     }
    ],
    "src": "saye"
   },
   {
    "id": "cop_07",
    "en": "Those are our friends.",
    "ckb": "ئەوانە هاوڕێمانن.",
    "sdh": "ئەوانە هاوڕێمانن.",
    "align": [
     {
      "ckb": "ئەوانە",
      "sdh": "ئەوانە",
      "k": "same"
     },
     {
      "ckb": "هاوڕێ",
      "sdh": "هاوڕێ",
      "k": "same"
     },
     {
      "ckb": "ـمان",
      "sdh": "ـمان",
      "k": "same"
     },
     {
      "ckb": "ـن",
      "sdh": "ـن",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "cop_08",
    "en": "That is Dara.",
    "ckb": "ئەوە دارایە.",
    "sdh": "ئەوە داراسە.",
    "align": [
     {
      "ckb": "ئەوە",
      "sdh": "ئەوە",
      "k": "same"
     },
     {
      "ckb": "دارا",
      "sdh": "دارا",
      "k": "same"
     },
     {
      "ckb": "ـیە",
      "sdh": "ـسە",
      "k": "grammar",
      "note": "after a vowel, 'is' = -سە"
     }
    ],
    "src": "saye"
   },
   {
    "id": "cop_09",
    "en": "That one is fat.",
    "ckb": "ئەوە قەڵەوە.",
    "sdh": "ئەوە چاخە.",
    "align": [
     {
      "ckb": "ئەوە",
      "sdh": "ئەوە",
      "k": "same"
     },
     {
      "ckb": "قەڵەو",
      "sdh": "چاخ",
      "k": "different",
      "note": "fat: چاخ"
     },
     {
      "ckb": "ـە",
      "sdh": "ـە",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "cop_10",
    "en": "Which one is bigger, Alwand or Sirwan?",
    "ckb": "کامیان گەورەیە، ئەلوەند یان سیروان؟",
    "sdh": "کامیان گەوراسە، ئەلوەن تا سیروان؟",
    "align": [
     {
      "ckb": "کامیان",
      "sdh": "کامیان",
      "k": "same"
     },
     {
      "ckb": "گەورە",
      "sdh": "گەورا",
      "k": "cognate"
     },
     {
      "ckb": "ـیە",
      "sdh": "ـسە",
      "k": "grammar",
      "note": "after a vowel, 'is' = -سە"
     },
     {
      "ckb": "ئەلوەند",
      "sdh": "ئەلوەن",
      "k": "sound",
      "rule": "cluster"
     },
     {
      "ckb": "یان",
      "sdh": "تا",
      "k": "different",
      "note": "'or' here is تا"
     },
     {
      "ckb": "سیروان",
      "sdh": "سیروان",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "cop_11",
    "en": "Nobody is like you.",
    "ckb": "کەس وەک ئێوە نییە.",
    "sdh": "کەس جوور ئیوە نییە.",
    "align": [
     {
      "ckb": "کەس",
      "sdh": "کەس",
      "k": "same"
     },
     {
      "ckb": "وەک",
      "sdh": "جوور",
      "k": "different",
      "note": "like: جوور"
     },
     {
      "ckb": "ئێوە",
      "sdh": "ئیوە",
      "k": "cognate"
     },
     {
      "ckb": "نییە",
      "sdh": "نییە",
      "k": "same",
      "note": "'is not' = نییە, as in Sorani"
     }
    ],
    "src": "saye"
   }
  ],
  "pi": [
   {
    "id": "cop_pi1",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "من و کەمال هاوسایم.",
    "options": [
     "Kamal and I are neighbours.",
     "Kamal is my neighbour."
    ],
    "answer": 0,
    "why": {
     "en": "-یم at the end means 'we are'. Sorani says -ین; Kalhori says -یم.",
     "ku": "ـیم لە کۆتاییدا واتە «ئێمە ...ین». سۆرانی دەڵێ دراوسێین، کەڵهوڕی دەڵێ هاوسایم."
    },
    "src": "saye"
   },
   {
    "id": "cop_pi2",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "تە لە شامار پیرتری.",
    "options": [
     "You are older than Shamar.",
     "He is older than Shamar."
    ],
    "answer": 0,
    "why": {
     "en": "A bare -ی is 'you are'. Kalhori drops the ت of Sorani -یت.",
     "ku": "ـی بەتەنیا واتە «تۆ ...یت». کەڵهوڕی «ت»ی ـیتی سۆرانی ناڵێت: پیرتری = پیرتریت."
    },
    "src": "saye"
   },
   {
    "id": "cop_pi3",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "ئەوانە هاوڕێمانن.",
    "options": [
     "Those are our friends.",
     "That is our friend."
    ],
    "answer": 0,
    "why": {
     "en": "-ن at the end means 'they are', exactly as in Sorani.",
     "ku": "ـن لە کۆتاییدا واتە «ئەوان ...ن»، ڕێک وەک سۆرانی."
    },
    "src": "saye"
   },
   {
    "id": "cop_pi4",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "ئەوە داراسە.",
    "options": [
     "That is Dara.",
     "That is not Dara."
    ],
    "answer": 0,
    "why": {
     "en": "-سە is just 'is' after a vowel, where Sorani says -یە.",
     "ku": "ـسە هەمان ـیەی سۆرانییە لە دوای بزوێن: داراسە = دارایە."
    },
    "src": "saye"
   },
   {
    "id": "cop_pi5",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "مە لە جەمال درێژترم.",
    "options": [
     "I am taller than Jamal.",
     "Jamal is taller than me."
    ],
    "answer": 0,
    "why": {
     "en": "مە is 'I', and -م on the adjective repeats it: 'I am'.",
     "ku": "مە واتە «من»، و ـمی سەر ئاوەڵناوەکە دەڵێت «من ...م»."
    },
    "src": "saye"
   }
  ]
 },
 {
  "id": "exist",
  "order": 2,
  "level": "A1",
  "sieve": 5,
  "title": "“Is there / is at”: ها",
  "pattern": {
   "ckb": "[slot] لە ماڵە",
   "sdh": "[slot] ها لە ماڵ",
   "en": "[slot] is at home"
  },
  "card": {
   "ckb>sdh": {
    "en": "To say where someone or something is, Kalhori puts the word ها before the place: کێ ها لە ماڵ؟ = کێ لە ماڵە؟. It takes endings: هام 'I am (there)', هاین 'you (pl.) are'. The negative is نییە, as in Sorani. The sources attest only هام, ها and هاین.",
    "ku": "بۆ گوتنی «لە کوێیە»، کەڵهوڕی وشەی «ها» دەخاتە پێش شوێنەکە: کێ ها لە ماڵ؟ = کێ لە ماڵە؟. کۆتایی وەردەگرێت: هام = «من لێرەم»، هاین = «ئێوە ...ن». نەرێکەی وەک سۆرانی «نییە»یە. لە سەرچاوەکاندا تەنها هام، ها و هاین هاتوون."
   }
  },
  "items": [
   {
    "id": "ex_01",
    "en": "Who is at home?",
    "ckb": "کێ لە ماڵە؟",
    "sdh": "کێ ها لە ماڵ؟",
    "align": [
     {
      "ckb": "کێ",
      "sdh": "کێ",
      "k": "same"
     },
     {
      "ckb": "ـە",
      "sdh": "ها",
      "k": "grammar",
      "note": "'is (at)' = ها, before the place"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "ماڵ",
      "sdh": "ماڵ",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ex_02",
    "en": "Who is at home? — Nobody is at home.",
    "ckb": "کێ لە ماڵە؟ — کەس لە ماڵ نییە.",
    "sdh": "کێ ها لە ماڵ؟ — کەس لە ماڵ نییە.",
    "align": [
     {
      "ckb": "کێ",
      "sdh": "کێ",
      "k": "same"
     },
     {
      "ckb": "ـە",
      "sdh": "ها",
      "k": "grammar"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "ماڵ",
      "sdh": "ماڵ",
      "k": "same"
     },
     {
      "ckb": "کەس",
      "sdh": "کەس",
      "k": "same"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "ماڵ",
      "sdh": "ماڵ",
      "k": "same"
     },
     {
      "ckb": "نییە",
      "sdh": "نییە",
      "k": "same",
      "note": "negative of ها: نییە"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ex_03",
    "en": "What's in your pocket? — A handkerchief.",
    "ckb": "چی لە گیرفانتدایە؟ — دەسماڵێک.",
    "sdh": "چە ها لە گیرفانت؟ — دەسماڵێ.",
    "align": [
     {
      "ckb": "چی",
      "sdh": "چە",
      "k": "cognate"
     },
     {
      "ckb": "ـدایە",
      "sdh": "ها",
      "k": "grammar",
      "note": "ها replaces Sorani -دا … -یە"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "گیرفان",
      "sdh": "گیرفان",
      "k": "same"
     },
     {
      "ckb": "ـت",
      "sdh": "ـت",
      "k": "same"
     },
     {
      "ckb": "دەسماڵ",
      "sdh": "دەسماڵ",
      "k": "same"
     },
     {
      "ckb": "ـێک",
      "sdh": "ـێ",
      "k": "grammar",
      "note": "'a': -ێ (also -ێگ)"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ex_04",
    "en": "Mela Gharib is here.",
    "ckb": "مەلا غەریب لێرەیە.",
    "sdh": "مەلا غەریب ها لێرە.",
    "align": [
     {
      "ckb": "مەلا",
      "sdh": "مەلا",
      "k": "same"
     },
     {
      "ckb": "غەریب",
      "sdh": "غەریب",
      "k": "same"
     },
     {
      "ckb": "ـیە",
      "sdh": "ها",
      "k": "grammar",
      "note": "ها comes before لێرە"
     },
     {
      "ckb": "لێرە",
      "sdh": "لێرە",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ex_05",
    "en": "I've been here since the evening.",
    "ckb": "لە ئێوارەوە لێرەم.",
    "sdh": "لە ئێوارەوە هام لێرە.",
    "align": [
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "ئێوارە",
      "sdh": "ئێوارە",
      "k": "same"
     },
     {
      "ckb": "ـوە",
      "sdh": "ـوە",
      "k": "same"
     },
     {
      "ckb": "ـم",
      "sdh": "هام",
      "k": "grammar",
      "note": "I am (here): هام"
     },
     {
      "ckb": "لێرە",
      "sdh": "لێرە",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ex_06",
    "en": "My cousin is at our house.",
    "ckb": "کوڕی خاڵم لە ماڵمانە.",
    "sdh": "کوڕەی خاڵووم ها لە ماڵمان.",
    "align": [
     {
      "ckb": "کوڕی",
      "sdh": "کوڕەی",
      "k": "grammar",
      "note": "Saye files this -ی under 'his': lit. 'his son, my uncle'"
     },
     {
      "ckb": "خاڵ",
      "sdh": "خاڵوو",
      "k": "cognate",
      "note": "uncle: خاڵوو"
     },
     {
      "ckb": "ـم",
      "sdh": "ـم",
      "k": "same"
     },
     {
      "ckb": "ـە",
      "sdh": "ها",
      "k": "grammar"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "ماڵ",
      "sdh": "ماڵ",
      "k": "same"
     },
     {
      "ckb": "ـمان",
      "sdh": "ـمان",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ex_07",
    "en": "I'm with them too.",
    "ckb": "منیش لەگەڵیانم.",
    "sdh": "منیش هام ئەوڵیانا.",
    "align": [
     {
      "ckb": "منیش",
      "sdh": "منیش",
      "k": "same"
     },
     {
      "ckb": "ـم",
      "sdh": "هام",
      "k": "grammar",
      "note": "I am: هام"
     },
     {
      "ckb": "لەگەڵ",
      "sdh": "ئەوڵ",
      "k": "different",
      "note": "with: ئەوڵ … (د)ا"
     },
     {
      "ckb": "ـیان",
      "sdh": "ـیان",
      "k": "same"
     },
     {
      "ckb": "",
      "sdh": "ـا",
      "k": "only",
      "note": "end of ئەوڵ … (د)ا"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ex_08",
    "en": "How many trees are in this orchard? — Seven.",
    "ckb": "چەند دار لەم باخەدایە؟ — حەوت دار.",
    "sdh": "چەن دار ها لە ی باخە؟ — هەفت دار.",
    "align": [
     {
      "ckb": "چەند",
      "sdh": "چەن",
      "k": "sound",
      "rule": "cluster"
     },
     {
      "ckb": "دار",
      "sdh": "دار",
      "k": "same"
     },
     {
      "ckb": "ـدایە",
      "sdh": "ها",
      "k": "grammar"
     },
     {
      "ckb": "لەم",
      "sdh": "لە ی",
      "k": "grammar",
      "note": "this … : ی … ـە"
     },
     {
      "ckb": "باخە",
      "sdh": "باخە",
      "k": "same"
     },
     {
      "ckb": "حەوت",
      "sdh": "هەفت",
      "k": "cognate"
     },
     {
      "ckb": "دار",
      "sdh": "دار",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ex_09",
    "en": "Shamma has grown old, and his hope is in his sons.",
    "ckb": "شەممە پیر بووە و هیوای بە کوڕەکانییەتی.",
    "sdh": "شەممە پیر بووە و ئومێدی ها وە کوڕەیلەگەی.",
    "align": [
     {
      "ckb": "شەممە",
      "sdh": "شەممە",
      "k": "same"
     },
     {
      "ckb": "پیر",
      "sdh": "پیر",
      "k": "same"
     },
     {
      "ckb": "بووە",
      "sdh": "بووە",
      "k": "same"
     },
     {
      "ckb": "و",
      "sdh": "و",
      "k": "same"
     },
     {
      "ckb": "هیوا",
      "sdh": "ئومێد",
      "k": "different",
      "note": "hope: ئومێد"
     },
     {
      "ckb": "ـی",
      "sdh": "ـی",
      "k": "same"
     },
     {
      "ckb": "ـیەتی",
      "sdh": "ها",
      "k": "grammar"
     },
     {
      "ckb": "بە",
      "sdh": "وە",
      "k": "sound",
      "rule": "b-w"
     },
     {
      "ckb": "کوڕەکان",
      "sdh": "کوڕەیلەگە",
      "k": "grammar",
      "note": "the …s: -ەیلەگە"
     },
     {
      "ckb": "ـی",
      "sdh": "ـی",
      "k": "same"
     }
    ],
    "src": "saye"
   }
  ],
  "pi": [
   {
    "id": "ex_pi1",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "لە ئێوارەوە هام لێرە.",
    "options": [
     "I've been here since the evening.",
     "He has been here since the evening."
    ],
    "answer": 0,
    "why": {
     "en": "هام = 'I am (there)'. The -م on ها is the only clue to the person.",
     "ku": "هام واتە «من لێرەم». تەنها ـمی سەر «ها» دەڵێت کێیە."
    },
    "src": "saye"
   },
   {
    "id": "ex_pi2",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "مەلا غەریب ها لێرە.",
    "options": [
     "Mela Gharib is here.",
     "Mela Gharib came here."
    ],
    "answer": 0,
    "why": {
     "en": "ها is 'is (located)', not a verb of motion.",
     "ku": "«ها» واتە «لێرەیە/لەوێیە»، کاری هاتن نییە."
    },
    "src": "saye"
   },
   {
    "id": "ex_pi3",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "منیش هام ئەوڵیانا.",
    "options": [
     "I'm with them too.",
     "They are with me too."
    ],
    "answer": 0,
    "why": {
     "en": "هام = 'I am'; -یان on ئەوڵ = 'them'.",
     "ku": "هام واتە «منم»؛ ـیانی سەر ئەوڵ واتە «ئەوان»."
    },
    "src": "saye"
   },
   {
    "id": "ex_pi4",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "کێ ها لە ماڵ؟",
    "options": [
     "Who is at home?",
     "Who has a house?"
    ],
    "answer": 0,
    "why": {
     "en": "ها + place = 'is at'. 'To have' is a different verb, دێر-.",
     "ku": "«ها» + شوێن واتە «لە ... ە». بۆ «هەمە» کارێکی تر هەیە: دێرم."
    },
    "src": "saye"
   }
  ]
 },
 {
  "id": "have",
  "order": 3,
  "level": "A1",
  "sieve": 5,
  "title": "“To have”: دێرم",
  "pattern": {
   "ckb": "[slot]م هەیە",
   "sdh": "[slot] دێرم",
   "en": "I have [slot]"
  },
  "card": {
   "ckb>sdh": {
    "en": "Sorani hangs 'have' on a clitic: کوڕم هەیە. Kalhori uses a real verb with normal endings: کوڕ دێرم 'I have a son', دێری 'you have', دێرێ 'he has'. The past stem is دایشت-: دایشتن 'they had'. It is not دانیشتن 'to sit'.",
    "ku": "سۆرانی «هەبوون» بە ڕاناوی لکاو دەڵێت: کوڕم هەیە. کەڵهوڕی کارێکی ڕاستەقینەی هەیە بە کۆتایی ئاسایی: کوڕ دێرم، دێری (هەتە)، دێرێ (هەیەتی). ڕابردووەکەی «دایشت-»ە: دایشتن واتە «هەیانبوو»، نەک «دانیشتن»."
   }
  },
  "items": [
   {
    "id": "hv_01",
    "en": "How many sons do you have?",
    "ckb": "تۆ چەند کوڕت هەیە؟",
    "sdh": "تە چەن کوڕ دێری؟",
    "align": [
     {
      "ckb": "تۆ",
      "sdh": "تە",
      "k": "cognate"
     },
     {
      "ckb": "چەند",
      "sdh": "چەن",
      "k": "sound",
      "rule": "cluster"
     },
     {
      "ckb": "کوڕ",
      "sdh": "کوڕ",
      "k": "same"
     },
     {
      "ckb": "ـت هەیە",
      "sdh": "دێری",
      "k": "grammar",
      "note": "have = دێر- + ending; -ی = you"
     }
    ],
    "src": "saye"
   },
   {
    "id": "hv_02",
    "en": "I have three sons.",
    "ckb": "من سێ کوڕم هەیە.",
    "sdh": "من سێ کوڕ دێرم.",
    "align": [
     {
      "ckb": "من",
      "sdh": "من",
      "k": "same"
     },
     {
      "ckb": "سێ",
      "sdh": "سێ",
      "k": "same"
     },
     {
      "ckb": "کوڕ",
      "sdh": "کوڕ",
      "k": "same"
     },
     {
      "ckb": "ـم هەیە",
      "sdh": "دێرم",
      "k": "grammar",
      "note": "I have: دێرم"
     }
    ],
    "src": "saye"
   },
   {
    "id": "hv_03",
    "en": "How much wheat does he have? — He has some.",
    "ckb": "چەند گەنمی هەیە؟ — هەندێکی هەیە.",
    "sdh": "چەنێ گەنم دێرێ؟ — قەیری دێرێ.",
    "align": [
     {
      "ckb": "چەند",
      "sdh": "چەنێ",
      "k": "cognate",
      "note": "how much: چەنێ"
     },
     {
      "ckb": "گەنم",
      "sdh": "گەنم",
      "k": "same"
     },
     {
      "ckb": "ـی هەیە",
      "sdh": "دێرێ",
      "k": "grammar",
      "note": "he has: دێرێ"
     },
     {
      "ckb": "هەندێک",
      "sdh": "قەیری",
      "k": "different",
      "note": "some: قەیری"
     },
     {
      "ckb": "ـی هەیە",
      "sdh": "دێرێ",
      "k": "grammar"
     }
    ],
    "src": "saye"
   },
   {
    "id": "hv_04",
    "en": "How many cows do you have?",
    "ckb": "چەند مانگات هەیە؟",
    "sdh": "چەن مانگا دێری؟",
    "align": [
     {
      "ckb": "چەند",
      "sdh": "چەن",
      "k": "sound",
      "rule": "cluster"
     },
     {
      "ckb": "مانگا",
      "sdh": "مانگا",
      "k": "same"
     },
     {
      "ckb": "ـت هەیە",
      "sdh": "دێری",
      "k": "grammar"
     }
    ],
    "src": "saye"
   },
   {
    "id": "hv_05",
    "en": "How many orchards did they have last year?",
    "ckb": "پار چەند باخیان هەبوو؟",
    "sdh": "پارەکە چەن باخ دایشتن؟",
    "align": [
     {
      "ckb": "پار",
      "sdh": "پارەکە",
      "k": "cognate",
      "note": "last year: پار or پارەکە"
     },
     {
      "ckb": "چەند",
      "sdh": "چەن",
      "k": "sound",
      "rule": "cluster"
     },
     {
      "ckb": "باخ",
      "sdh": "باخ",
      "k": "same"
     },
     {
      "ckb": "ـیان هەبوو",
      "sdh": "دایشتن",
      "k": "grammar",
      "note": "they had: دایشتن"
     }
    ],
    "src": "saye"
   },
   {
    "id": "hv_06",
    "en": "They had three or four orchards.",
    "ckb": "سێ چوار باخیان هەبوو.",
    "sdh": "سێ چوار باخ دایشتن.",
    "align": [
     {
      "ckb": "سێ",
      "sdh": "سێ",
      "k": "same"
     },
     {
      "ckb": "چوار",
      "sdh": "چوار",
      "k": "same"
     },
     {
      "ckb": "باخ",
      "sdh": "باخ",
      "k": "same"
     },
     {
      "ckb": "ـیان هەبوو",
      "sdh": "دایشتن",
      "k": "grammar",
      "note": "not 'to sit'"
     }
    ],
    "src": "saye"
   },
   {
    "id": "hv_07",
    "en": "Why did they come late? — They had work.",
    "ckb": "بۆچی درەنگ هاتن؟ — کاریان هەبوو.",
    "sdh": "ئەڕا دێر هاتن؟ — کار دایشتن.",
    "align": [
     {
      "ckb": "بۆچی",
      "sdh": "ئەڕا",
      "k": "different",
      "note": "why: ئەڕا (also 'for')"
     },
     {
      "ckb": "درەنگ",
      "sdh": "دێر",
      "k": "different",
      "note": "late: دێر"
     },
     {
      "ckb": "هاتن",
      "sdh": "هاتن",
      "k": "same"
     },
     {
      "ckb": "کار",
      "sdh": "کار",
      "k": "same"
     },
     {
      "ckb": "ـیان هەبوو",
      "sdh": "دایشتن",
      "k": "grammar"
     }
    ],
    "src": "saye"
   },
   {
    "id": "hv_08",
    "en": "You had a child.",
    "ckb": "منداڵێکت هەبوو.",
    "sdh": "مناڵی دایشتی.",
    "align": [
     {
      "ckb": "منداڵ",
      "sdh": "مناڵ",
      "k": "sound",
      "rule": "cluster"
     },
     {
      "ckb": "ـێک",
      "sdh": "ـی",
      "k": "grammar",
      "note": "'a': -ی"
     },
     {
      "ckb": "ـت هەبوو",
      "sdh": "دایشتی",
      "k": "grammar",
      "note": "you had: دایشتی"
     }
    ],
    "src": "saye"
   }
  ],
  "pi": [
   {
    "id": "hv_pi1",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "تە چەن کوڕ دێری؟",
    "options": [
     "How many sons do you have?",
     "How many sons does he have?"
    ],
    "answer": 0,
    "why": {
     "en": "-ی on دێر- is 'you'. 'He has' is دێرێ.",
     "ku": "ـی لەسەر دێر- واتە «تۆ». بۆ «ئەو» دەڵێن دێرێ."
    },
    "src": "saye"
   },
   {
    "id": "hv_pi2",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "سێ چوار باخ دایشتن.",
    "options": [
     "They had three or four orchards.",
     "They sat in three or four orchards."
    ],
    "answer": 0,
    "why": {
     "en": "دایشتن is the past of 'have': 'they had'. 'To sit' is نیشتن.",
     "ku": "دایشتن ڕابردووی «دێرم»ە: «هەیانبوو». دانیشتن لە کەڵهوڕیدا «نیشتن»ە."
    },
    "src": "saye"
   },
   {
    "id": "hv_pi3",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "من سێ کوڕ دێرم.",
    "options": [
     "I have three sons.",
     "I had three sons."
    ],
    "answer": 0,
    "why": {
     "en": "دێر- is the present stem. The past stem is دایشت-.",
     "ku": "دێر- قەدی ئێستایە. قەدی ڕابردوو «دایشت-»ە."
    },
    "src": "saye"
   },
   {
    "id": "hv_pi4",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "قەیری دێرێ.",
    "options": [
     "He has some.",
     "I have some."
    ],
    "answer": 0,
    "why": {
     "en": "-ێ is 'he/she'. 'I have' would be دێرم.",
     "ku": "ـێ واتە «ئەو». بۆ «من» دەڵێن دێرم."
    },
    "src": "saye"
   }
  ]
 },
 {
  "id": "present",
  "order": 4,
  "level": "A1",
  "sieve": 5,
  "title": "Present tense: no دە-",
  "pattern": {
   "ckb": "دە[slot]م",
   "sdh": "[slot]م",
   "en": "I [slot]"
  },
  "card": {
   "ckb>sdh": {
    "en": "The biggest everyday difference: the present has no دە-. Take the Sorani form, drop دە-, and you have Kalhori: کەم = دەکەم, ناسن = دەناسن. The negative is نیە-, not نا-: نیەوێرم = ناوێرم. Careful: چوو and بوو are present here, 'goes' and 'becomes'.",
    "ku": "گەورەترین جیاوازیی ڕۆژانە: کاری ئێستا «دە»ی نییە. «دە» لە شێوە سۆرانییەکە لابە، کەڵهوڕییەکەت دەست دەکەوێت: کەم = دەکەم، ناسن = دەناسن. نەرێکەی «نیە-»یە نەک «نا-»: نیەوێرم = ناوێرم. ئاگاداربە: «چوو» و «بوو» لێرەدا ئێستان: «دەچێت» و «دەبێت»."
   }
  },
  "items": [
   {
    "id": "pr_01",
    "en": "What does your father do at home?",
    "ckb": "باوکت لە ماڵ چی دەکات؟",
    "sdh": "باوگت لە ماڵ چە کەی؟",
    "align": [
     {
      "ckb": "باوک",
      "sdh": "باوگ",
      "k": "cognate",
      "note": "father: باوگ"
     },
     {
      "ckb": "ـت",
      "sdh": "ـت",
      "k": "same"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "ماڵ",
      "sdh": "ماڵ",
      "k": "same"
     },
     {
      "ckb": "چی",
      "sdh": "چە",
      "k": "cognate"
     },
     {
      "ckb": "دەکات",
      "sdh": "کەی",
      "k": "grammar",
      "rule": "de-zero",
      "note": "no دە-; stem کە- + -ی"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pr_02",
    "en": "What are they doing?",
    "ckb": "ئەوانە چی دەکەن؟",
    "sdh": "ئەوە چە کەنن؟",
    "align": [
     {
      "ckb": "ئەوانە",
      "sdh": "ئەوە",
      "k": "cognate",
      "note": "Saye uses ئەوە here for a group"
     },
     {
      "ckb": "چی",
      "sdh": "چە",
      "k": "cognate"
     },
     {
      "ckb": "دەکەن",
      "sdh": "کەنن",
      "k": "grammar",
      "rule": "de-zero",
      "note": "no دە-"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pr_03",
    "en": "In the mornings I get up early.",
    "ckb": "بەیانیان زوو لە خەو هەڵدەستم.",
    "sdh": "شەوەکیان زوو لە خەو ئەڵم.",
    "align": [
     {
      "ckb": "بەیانیان",
      "sdh": "شەوەکیان",
      "k": "different",
      "note": "morning: شەوەکی"
     },
     {
      "ckb": "زوو",
      "sdh": "زوو",
      "k": "same"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "خەو",
      "sdh": "خەو",
      "k": "same"
     },
     {
      "ckb": "هەڵدەستم",
      "sdh": "ئەڵم",
      "k": "grammar",
      "rule": "de-zero",
      "note": "no دە-; هەڵ- → ئەڵ-"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pr_04",
    "en": "Sirwan washes his hair every day.",
    "ckb": "سیروان هەموو ڕۆژێ سەری دەشوات.",
    "sdh": "سیروان گیشت ڕووژی سەر شووری.",
    "align": [
     {
      "ckb": "سیروان",
      "sdh": "سیروان",
      "k": "same"
     },
     {
      "ckb": "هەموو",
      "sdh": "گیشت",
      "k": "different",
      "note": "all, every: گیشت"
     },
     {
      "ckb": "ڕۆژ",
      "sdh": "ڕووژ",
      "k": "sound",
      "rule": "o-uu"
     },
     {
      "ckb": "ـێ",
      "sdh": "ـی",
      "k": "grammar"
     },
     {
      "ckb": "سەری",
      "sdh": "سەر",
      "k": "grammar",
      "note": "no possessive -ی here"
     },
     {
      "ckb": "دەشوات",
      "sdh": "شووری",
      "k": "grammar",
      "rule": "de-zero",
      "note": "no دە-"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pr_05",
    "en": "They know each other.",
    "ckb": "ئەوان یەکتر دەناسن.",
    "sdh": "ئەوان یەکتری ناسن.",
    "align": [
     {
      "ckb": "ئەوان",
      "sdh": "ئەوان",
      "k": "same"
     },
     {
      "ckb": "یەکتر",
      "sdh": "یەکتری",
      "k": "cognate"
     },
     {
      "ckb": "دەناسن",
      "sdh": "ناسن",
      "k": "grammar",
      "rule": "de-zero",
      "note": "no دە-"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pr_06",
    "en": "They themselves know it well.",
    "ckb": "ئەوان خۆیان باش لێی دەزانن.",
    "sdh": "ئەوان خویان خاس لێ زانن.",
    "align": [
     {
      "ckb": "ئەوان",
      "sdh": "ئەوان",
      "k": "same"
     },
     {
      "ckb": "خۆیان",
      "sdh": "خویان",
      "k": "cognate"
     },
     {
      "ckb": "باش",
      "sdh": "خاس",
      "k": "different",
      "note": "good, well: خاس"
     },
     {
      "ckb": "لێی",
      "sdh": "لێ",
      "k": "cognate"
     },
     {
      "ckb": "دەزانن",
      "sdh": "زانن",
      "k": "grammar",
      "rule": "de-zero",
      "note": "no دە-"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pr_07",
    "en": "I'd like to visit them, but there's no time.",
    "ckb": "حەز دەکەم سەریان لێ بدەم، بەڵام کات نییە.",
    "sdh": "حەزکەم سەر لێیان بدەم، وەلی وەخت نییە.",
    "align": [
     {
      "ckb": "حەز دەکەم",
      "sdh": "حەزکەم",
      "k": "grammar",
      "rule": "de-zero",
      "note": "no دە-"
     },
     {
      "ckb": "سەریان لێ",
      "sdh": "سەر لێیان",
      "k": "grammar",
      "note": "-یان sits on لێ"
     },
     {
      "ckb": "بدەم",
      "sdh": "بدەم",
      "k": "same"
     },
     {
      "ckb": "بەڵام",
      "sdh": "وەلی",
      "k": "different",
      "note": "but: وەلی"
     },
     {
      "ckb": "کات",
      "sdh": "وەخت",
      "k": "different",
      "note": "time: وەخت"
     },
     {
      "ckb": "نییە",
      "sdh": "نییە",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pr_08",
    "en": "I'm very tired, but I don't dare sit down.",
    "ckb": "زۆر ماندووم، بەڵام ناوێرم دانیشم.",
    "sdh": "فرە شەکەتم، وەلی نیەوێرم بنیشم.",
    "align": [
     {
      "ckb": "زۆر",
      "sdh": "فرە",
      "k": "different",
      "note": "very: فرە"
     },
     {
      "ckb": "ماندوو",
      "sdh": "شەکەت",
      "k": "different",
      "note": "tired: شەکەت"
     },
     {
      "ckb": "ـم",
      "sdh": "ـم",
      "k": "same"
     },
     {
      "ckb": "بەڵام",
      "sdh": "وەلی",
      "k": "different"
     },
     {
      "ckb": "ناوێرم",
      "sdh": "نیەوێرم",
      "k": "grammar",
      "rule": "na-nie",
      "note": "negative present: نیە-"
     },
     {
      "ckb": "دانیشم",
      "sdh": "بنیشم",
      "k": "cognate",
      "note": "sit: نیشتن, subjunctive بنیش-"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pr_09",
    "en": "If you don't work, you won't live.",
    "ckb": "ئەگەر کار نەکەیت، ناژیت.",
    "sdh": "ئەگەر کار نەکەی، نیەژێی.",
    "align": [
     {
      "ckb": "ئەگەر",
      "sdh": "ئەگەر",
      "k": "same"
     },
     {
      "ckb": "کار",
      "sdh": "کار",
      "k": "same"
     },
     {
      "ckb": "نەکەیت",
      "sdh": "نەکەی",
      "k": "grammar",
      "note": "you: -ی"
     },
     {
      "ckb": "ناژیت",
      "sdh": "نیەژێی",
      "k": "grammar",
      "rule": "na-nie",
      "note": "negative present: نیە-"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pr_10",
    "en": "How are you, are you well? I kiss your hand.",
    "ckb": "چۆنی، باشی؟ دەستت ماچ دەکەم.",
    "sdh": "چۊنی، خاسی؟ دەسد ماچ کەم.",
    "align": [
     {
      "ckb": "چۆن",
      "sdh": "چۊن",
      "k": "sound",
      "rule": "o-ue"
     },
     {
      "ckb": "ـی",
      "sdh": "ـی",
      "k": "same"
     },
     {
      "ckb": "باش",
      "sdh": "خاس",
      "k": "different",
      "note": "good: خاس"
     },
     {
      "ckb": "ـی",
      "sdh": "ـی",
      "k": "same"
     },
     {
      "ckb": "دەست",
      "sdh": "دەس",
      "k": "sound",
      "rule": "cluster"
     },
     {
      "ckb": "ـت",
      "sdh": "ـد",
      "k": "sound",
      "rule": "t-d"
     },
     {
      "ckb": "ماچ",
      "sdh": "ماچ",
      "k": "same"
     },
     {
      "ckb": "دەکەم",
      "sdh": "کەم",
      "k": "grammar",
      "rule": "de-zero",
      "note": "کەم = I do, not 'few'"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pr_11",
    "en": "Shamma goes hunting tomorrow.",
    "ckb": "شەممە سبەی دەچێت بۆ ڕاو.",
    "sdh": "شەممە سوو چوو ئەڕا ڕاو.",
    "align": [
     {
      "ckb": "شەممە",
      "sdh": "شەممە",
      "k": "same"
     },
     {
      "ckb": "سبەی",
      "sdh": "سوو",
      "k": "different",
      "note": "tomorrow: سوو"
     },
     {
      "ckb": "دەچێت",
      "sdh": "چوو",
      "k": "grammar",
      "note": "چوو = goes (present), not 'went'"
     },
     {
      "ckb": "بۆ",
      "sdh": "ئەڕا",
      "k": "different",
      "note": "to, for: ئەڕا"
     },
     {
      "ckb": "ڕاو",
      "sdh": "ڕاو",
      "k": "same"
     }
    ],
    "src": "saye"
   }
  ],
  "pi": [
   {
    "id": "pr_pi1",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "شەممە سوو چوو ئەڕا ڕاو.",
    "options": [
     "Shamma goes hunting tomorrow.",
     "Shamma went hunting."
    ],
    "answer": 0,
    "why": {
     "en": "In Kalhori چوو is present, 'goes'. 'Went' is چۊ. سوو 'tomorrow' confirms it.",
     "ku": "لە کەڵهوڕیدا «چوو» ئێستایە: «دەچێت». «چوو»ی سۆرانی لێرە «چۊ»یە. «سوو» (سبەی)ش هەر ئەوە پشتڕاست دەکاتەوە."
    },
    "src": "saye"
   },
   {
    "id": "pr_pi2",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "شەوەکیان زوو لە خەو ئەڵم.",
    "options": [
     "In the mornings I get up early.",
     "This morning he got up early."
    ],
    "answer": 0,
    "why": {
     "en": "A bare stem plus -م is the present 'I …'. There is no دە- to look for.",
     "ku": "قەدی کار + ـم = ئێستا، «من». لێرە «دە» نییە تا بیگەڕێیت."
    },
    "src": "saye"
   },
   {
    "id": "pr_pi3",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "باوگت لە ماڵ چە کەی؟",
    "options": [
     "What does your father do at home?",
     "When is your father at home?"
    ],
    "answer": 0,
    "why": {
     "en": "Here کەی is 'he does' (stem کە- + -ی), not 'when'.",
     "ku": "لێرە «کەی» واتە «دەکات» (کە- + ـی)، نەک «کەی»ی پرسیار."
    },
    "src": "saye"
   },
   {
    "id": "pr_pi4",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "فرە شەکەتم، وەلی نیەوێرم بنیشم.",
    "options": [
     "I'm very tired, but I don't dare sit down.",
     "I'm very tired, but I dared to sit down."
    ],
    "answer": 0,
    "why": {
     "en": "نیە- negates the present, like Sorani نا-.",
     "ku": "«نیە-» نەرێی کاری ئێستایە، وەک «نا-»ی سۆرانی."
    },
    "src": "saye"
   },
   {
    "id": "pr_pi5",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "نیەزانم",
    "options": [
     "I don't know.",
     "I didn't know."
    ],
    "answer": 0,
    "why": {
     "en": "نیە- belongs to the present only. A past negative would use نە-.",
     "ku": "«نیە-» تەنها بۆ ئێستایە. نەرێی ڕابردوو بە «نە-»یە."
    },
    "src": "zk"
   }
  ]
 },
 {
  "id": "past_intr",
  "order": 5,
  "level": "A1",
  "sieve": 5,
  "title": "Past without an object",
  "pattern": {
   "ckb": "[slot]م",
   "sdh": "[slot]م",
   "en": "I [slot] (past)"
  },
  "card": {
   "ckb>sdh": {
    "en": "Past verbs without an object work as in Sorani: past stem + ending, هاتم, کەفت. Two endings differ: 'we' is -یم (هاتیم) and 'you' is plain -ی. 'Went' and 'was' are چۊ and بۊ with the vowel ۊ; چوو and بوو are present. The perfect ends in -گە: خەفتگە = خەوتووە.",
    "ku": "ڕابردووی کاری تێنەپەڕ وەک سۆرانییە: قەدی ڕابردوو + کۆتایی، هاتم، کەفت. دوو کۆتایی جیاوازن: «ئێمە» ـیم (هاتیم) و «تۆ» تەنها ـی. «چوو» و «بوو»ی ڕابردوو لێرە «چۊ» و «بۊ»ن؛ چوو و بوو ئێستان. ڕابردووی تەواو بە «ـگە»یە: خەفتگە = خەوتووە."
   }
  },
  "items": [
   {
    "id": "pin_01",
    "en": "Farhad went to the bazaar.",
    "ckb": "فەرهاد چوو بۆ بازاڕ.",
    "sdh": "فەرهاد چۊ ئەڕا بازاڕ.",
    "align": [
     {
      "ckb": "فەرهاد",
      "sdh": "فەرهاد",
      "k": "same"
     },
     {
      "ckb": "چوو",
      "sdh": "چۊ",
      "k": "sound",
      "rule": "o-ue",
      "note": "went: چۊ (چوو = goes)"
     },
     {
      "ckb": "بۆ",
      "sdh": "ئەڕا",
      "k": "different"
     },
     {
      "ckb": "بازاڕ",
      "sdh": "بازاڕ",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pin_02",
    "en": "Ziwa fell ill.",
    "ckb": "زێوا نەخۆش کەوت.",
    "sdh": "زێوا نەخوەش کەفت.",
    "align": [
     {
      "ckb": "زێوا",
      "sdh": "زێوا",
      "k": "same"
     },
     {
      "ckb": "نەخۆش",
      "sdh": "نەخوەش",
      "k": "sound",
      "rule": "xo-xwe"
     },
     {
      "ckb": "کەوت",
      "sdh": "کەفت",
      "k": "cognate",
      "note": "و → ف in this verb"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pin_03",
    "en": "Yesterday I was at home.",
    "ckb": "دوێنێ لە ماڵ بووم.",
    "sdh": "دۊەکە لە ماڵ بۊم.",
    "align": [
     {
      "ckb": "دوێنێ",
      "sdh": "دۊەکە",
      "k": "different",
      "note": "yesterday: دۊەکە"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "ماڵ",
      "sdh": "ماڵ",
      "k": "same"
     },
     {
      "ckb": "بووم",
      "sdh": "بۊم",
      "k": "sound",
      "rule": "o-ue"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pin_04",
    "en": "I was at home until sunset.",
    "ckb": "تا خۆرئاوا لە ماڵ بووم.",
    "sdh": "تا خوەراوا لە ماڵ بۊم.",
    "align": [
     {
      "ckb": "تا",
      "sdh": "تا",
      "k": "same"
     },
     {
      "ckb": "خۆرئاوا",
      "sdh": "خوەراوا",
      "k": "sound",
      "rule": "xo-xwe"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "ماڵ",
      "sdh": "ماڵ",
      "k": "same"
     },
     {
      "ckb": "بووم",
      "sdh": "بۊم",
      "k": "sound",
      "rule": "o-ue"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pin_05",
    "en": "They got up and we sat down.",
    "ckb": "ئەوان هەڵسان و ئێمە دانیشتین.",
    "sdh": "ئەوان ئەڵسیان و ئیمە نیشتیم.",
    "align": [
     {
      "ckb": "ئەوان",
      "sdh": "ئەوان",
      "k": "same"
     },
     {
      "ckb": "هەڵسان",
      "sdh": "ئەڵسیان",
      "k": "cognate",
      "note": "هەڵ- → ئەڵ-; got up: ئەڵسیا-"
     },
     {
      "ckb": "و",
      "sdh": "و",
      "k": "same"
     },
     {
      "ckb": "ئێمە",
      "sdh": "ئیمە",
      "k": "cognate"
     },
     {
      "ckb": "دانیشت",
      "sdh": "نیشت",
      "k": "cognate",
      "note": "sit: نیشتن, no دا-"
     },
     {
      "ckb": "ـین",
      "sdh": "ـیم",
      "k": "grammar",
      "note": "we: -یم"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pin_06",
    "en": "We got up, then they sat down.",
    "ckb": "ئێمە هەڵساین، ئینجا ئەوان دانیشتن.",
    "sdh": "ئیمە ئەڵسیایم، ئمجا ئەوان نیشتن.",
    "align": [
     {
      "ckb": "ئێمە",
      "sdh": "ئیمە",
      "k": "cognate"
     },
     {
      "ckb": "هەڵسا",
      "sdh": "ئەڵسیا",
      "k": "cognate",
      "note": "هەڵ- → ئەڵ-"
     },
     {
      "ckb": "ـین",
      "sdh": "ـیم",
      "k": "grammar",
      "note": "we: -یم"
     },
     {
      "ckb": "ئینجا",
      "sdh": "ئمجا",
      "k": "cognate"
     },
     {
      "ckb": "ئەوان",
      "sdh": "ئەوان",
      "k": "same"
     },
     {
      "ckb": "دانیشتن",
      "sdh": "نیشتن",
      "k": "cognate"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pin_07",
    "en": "When did you come?",
    "ckb": "کەی هاتیت؟",
    "sdh": "کەی هاتی؟",
    "align": [
     {
      "ckb": "کەی",
      "sdh": "کەی",
      "k": "same"
     },
     {
      "ckb": "هات",
      "sdh": "هات",
      "k": "same"
     },
     {
      "ckb": "ـیت",
      "sdh": "ـی",
      "k": "grammar",
      "note": "you: -ی (Saye also -ید, -یت)"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pin_08",
    "en": "When I came, the sun was in the middle of the sky.",
    "ckb": "کاتێ هاتم، خۆر لە ناوەڕاستی ئاسمان بوو.",
    "sdh": "وەختی هاتم، خوەر لە ناوڕاسی ئاسمان بوو.",
    "align": [
     {
      "ckb": "کاتێ",
      "sdh": "وەختی",
      "k": "different",
      "note": "when: وەختی"
     },
     {
      "ckb": "هاتم",
      "sdh": "هاتم",
      "k": "same"
     },
     {
      "ckb": "خۆر",
      "sdh": "خوەر",
      "k": "sound",
      "rule": "xo-xwe"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "ناوەڕاستی",
      "sdh": "ناوڕاسی",
      "k": "sound",
      "rule": "cluster"
     },
     {
      "ckb": "ئاسمان",
      "sdh": "ئاسمان",
      "k": "same"
     },
     {
      "ckb": "بوو",
      "sdh": "بوو",
      "k": "same",
      "note": "Saye prints past 'was' بوو here"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pin_09",
    "en": "My father has fallen asleep.",
    "ckb": "باوکم خەوتووە.",
    "sdh": "باوگم خەفتگە.",
    "align": [
     {
      "ckb": "باوک",
      "sdh": "باوگ",
      "k": "cognate"
     },
     {
      "ckb": "ـم",
      "sdh": "ـم",
      "k": "same"
     },
     {
      "ckb": "خەوتووە",
      "sdh": "خەفتگە",
      "k": "sound",
      "rule": "part-g"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pin_10",
    "en": "The sun has risen.",
    "ckb": "خۆر هەڵهاتووە.",
    "sdh": "خوەر ئەڵاتگە.",
    "align": [
     {
      "ckb": "خۆر",
      "sdh": "خوەر",
      "k": "sound",
      "rule": "xo-xwe"
     },
     {
      "ckb": "هەڵهاتووە",
      "sdh": "ئەڵاتگە",
      "k": "sound",
      "rule": "part-g",
      "note": "also هەڵ- → ئەڵ-"
     }
    ],
    "src": "saye"
   }
  ],
  "pi": [
   {
    "id": "pin_pi1",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "ئەوان ئەڵسیان و ئیمە نیشتیم.",
    "options": [
     "They got up and we sat down.",
     "We got up and they sat down."
    ],
    "answer": 0,
    "why": {
     "en": "-یم on نیشت- is 'we'; -ن on ئەڵسیا- is 'they'.",
     "ku": "ـیم لەسەر نیشت- واتە «ئێمە»؛ ـن لەسەر ئەڵسیا- واتە «ئەوان»."
    },
    "src": "saye"
   },
   {
    "id": "pin_pi2",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "ئیمە ئەڵسیایم، ئمجا ئەوان نیشتن.",
    "options": [
     "We got up, then they sat down.",
     "They got up, then we sat down."
    ],
    "answer": 0,
    "why": {
     "en": "ئەڵسیایم ends in -یم: 'we'. نیشتن ends in -ن: 'they'.",
     "ku": "ئەڵسیایم بە ـیم تەواو دەبێت: «ئێمە». نیشتن بە ـن: «ئەوان»."
    },
    "src": "saye"
   },
   {
    "id": "pin_pi3",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "کەی هاتی؟",
    "options": [
     "When did you come?",
     "When did he come?"
    ],
    "answer": 0,
    "why": {
     "en": "-ی is 'you'. 'He came' is plain هات.",
     "ku": "ـی واتە «تۆ». «ئەو» تەنها «هات»ە."
    },
    "src": "saye"
   },
   {
    "id": "pin_pi4",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "فەرهاد چۊ ئەڕا بازاڕ.",
    "options": [
     "Farhad went to the bazaar.",
     "Farhad goes to the bazaar."
    ],
    "answer": 0,
    "why": {
     "en": "چۊ, with ۊ, is the past 'went'. چوو would be 'goes'.",
     "ku": "«چۊ» بە ۊ ڕابردووە: «چوو». «چوو»ی کەڵهوڕی واتە «دەچێت»."
    },
    "src": "saye"
   }
  ]
 },
 {
  "id": "past_tr",
  "order": 6,
  "level": "A2",
  "sieve": 5,
  "title": "Past with an object: no ergative",
  "pattern": {
   "ckb": "[slot]م خوارد",
   "sdh": "[slot] خواردم",
   "en": "I ate [slot]"
  },
  "card": {
   "ckb>sdh": {
    "en": "In Sorani the doer of a past transitive verb is a clitic on an earlier word: نانم خوارد. Kalhori puts the doer at the end of the verb, like an intransitive verb: نان خواردم. A plural doer is -ن: کردن 'they did'. A clitic before the verb is the object: تێریان کردم = 'I fed them'.",
    "ku": "لە سۆرانیدا بکەری ڕابردووی تێپەڕ لەسەر وشەیەکی پێشترە: نانم خوارد. کەڵهوڕی بکەر دەخاتە کۆتایی کارەکە، وەک کاری تێنەپەڕ: نان خواردم. بکەری کۆ ـنە: کردن = کردیان. ڕاناوێکی لکاو لە پێش کار بەرکارە: تێریان کردم = «تێرم کردن»."
   }
  },
  "items": [
   {
    "id": "ptr_01",
    "en": "I ate bread with Mahmud.",
    "ckb": "لەگەڵ مەحموود نانم خوارد.",
    "sdh": "نان ئەوڵی مەحمووددا خواردم.",
    "align": [
     {
      "ckb": "نان",
      "sdh": "نان",
      "k": "same"
     },
     {
      "ckb": "لەگەڵ",
      "sdh": "ئەوڵی",
      "k": "different",
      "note": "with: ئەوڵی … (د)ا"
     },
     {
      "ckb": "مەحموود",
      "sdh": "مەحموود",
      "k": "same"
     },
     {
      "ckb": "",
      "sdh": "ـدا",
      "k": "only",
      "note": "the د often drops in speech"
     },
     {
      "ckb": "ـم خوارد",
      "sdh": "خواردم",
      "k": "grammar",
      "note": "doer 'I' = -م on the verb"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ptr_02",
    "en": "What did you eat this morning? — Bread and butter.",
    "ckb": "بەیانی چیت خوارد؟ — نان و کەرە.",
    "sdh": "شەوەکی چە خواردی؟ — نان و کەرە.",
    "align": [
     {
      "ckb": "بەیانی",
      "sdh": "شەوەکی",
      "k": "different",
      "note": "morning: شەوەکی"
     },
     {
      "ckb": "چی",
      "sdh": "چە",
      "k": "cognate"
     },
     {
      "ckb": "ـت خوارد",
      "sdh": "خواردی",
      "k": "grammar",
      "note": "doer 'you' = -ی on the verb"
     },
     {
      "ckb": "نان",
      "sdh": "نان",
      "k": "same"
     },
     {
      "ckb": "و",
      "sdh": "و",
      "k": "same"
     },
     {
      "ckb": "کەرە",
      "sdh": "کەرە",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ptr_03",
    "en": "How much did he take? — Four sacks.",
    "ckb": "چەندی برد؟ — چوار کیسەی برد.",
    "sdh": "چەنێ برد؟ — چوار کیسە برد.",
    "align": [
     {
      "ckb": "چەندی",
      "sdh": "چەنێ",
      "k": "grammar",
      "note": "no doer clitic: 'he' is zero"
     },
     {
      "ckb": "برد",
      "sdh": "برد",
      "k": "same"
     },
     {
      "ckb": "چوار",
      "sdh": "چوار",
      "k": "same"
     },
     {
      "ckb": "کیسەی",
      "sdh": "کیسە",
      "k": "grammar",
      "note": "no -ی doer on the object"
     },
     {
      "ckb": "برد",
      "sdh": "برد",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ptr_04",
    "en": "The guests had dinner.",
    "ckb": "میوانەکان شێویان خوارد.",
    "sdh": "میوانەیلەگە شام کردن.",
    "align": [
     {
      "ckb": "میوانەکان",
      "sdh": "میوانەیلەگە",
      "k": "grammar",
      "note": "the …s: -ەیلەگە"
     },
     {
      "ckb": "شێو",
      "sdh": "شام",
      "k": "different",
      "note": "dinner: شام"
     },
     {
      "ckb": "ـیان خوارد",
      "sdh": "کردن",
      "k": "grammar",
      "note": "'they' = -ن on the verb"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ptr_05",
    "en": "Dilber fooled the children.",
    "ckb": "دڵبەر منداڵەکانی خەڵەتاند.",
    "sdh": "دڵبەر مناڵەیلەگە خەڵەتان.",
    "align": [
     {
      "ckb": "دڵبەر",
      "sdh": "دڵبەر",
      "k": "same"
     },
     {
      "ckb": "منداڵەکانی",
      "sdh": "مناڵەیلەگە",
      "k": "grammar",
      "note": "no doer -ی; plural 'the': -ەیلەگە"
     },
     {
      "ckb": "خەڵەتاند",
      "sdh": "خەڵەتان",
      "k": "cognate",
      "note": "causative past ends in -ان"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ptr_06",
    "en": "I fed them.",
    "ckb": "تێرم کردن.",
    "sdh": "تێریان کردم.",
    "align": [
     {
      "ckb": "تێر",
      "sdh": "تێر",
      "k": "same"
     },
     {
      "ckb": "ـم",
      "sdh": "ـیان",
      "k": "grammar",
      "note": "-یان here is the object 'them'"
     },
     {
      "ckb": "کردن",
      "sdh": "کردم",
      "k": "grammar",
      "note": "-م on the verb is the doer 'I'"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ptr_07",
    "en": "Katan made tea for the people.",
    "ckb": "کەتان چای بۆ خەڵکەکە دروست کرد.",
    "sdh": "کەتان چای ئەڕا مەردمەکە کرد.",
    "align": [
     {
      "ckb": "کەتان",
      "sdh": "کەتان",
      "k": "same"
     },
     {
      "ckb": "چای",
      "sdh": "چای",
      "k": "same"
     },
     {
      "ckb": "بۆ",
      "sdh": "ئەڕا",
      "k": "different"
     },
     {
      "ckb": "خەڵک",
      "sdh": "مەردم",
      "k": "different",
      "note": "people: مەردم"
     },
     {
      "ckb": "ـەکە",
      "sdh": "ـەکە",
      "k": "same",
      "note": "Saye prints -ەکە here"
     },
     {
      "ckb": "دروست کرد",
      "sdh": "کرد",
      "k": "cognate"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ptr_08",
    "en": "The child cut his own hand.",
    "ckb": "منداڵەکە دەستی خۆی بڕی.",
    "sdh": "مناڵەگە دەسی خوەی بڕی.",
    "align": [
     {
      "ckb": "منداڵ",
      "sdh": "مناڵ",
      "k": "sound",
      "rule": "cluster"
     },
     {
      "ckb": "ـەکە",
      "sdh": "ـەگە",
      "k": "grammar",
      "note": "'the': -ەگە"
     },
     {
      "ckb": "دەست",
      "sdh": "دەس",
      "k": "sound",
      "rule": "cluster"
     },
     {
      "ckb": "ـی",
      "sdh": "ـی",
      "k": "same"
     },
     {
      "ckb": "خۆی",
      "sdh": "خوەی",
      "k": "sound",
      "rule": "xo-xwe"
     },
     {
      "ckb": "بڕی",
      "sdh": "بڕی",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ptr_09",
    "en": "This thief stole our horse.",
    "ckb": "ئەم دزە ئەسپەکەمانی دزی.",
    "sdh": "ئەی دزە ئەسپەگەمان دزی.",
    "align": [
     {
      "ckb": "ئەم",
      "sdh": "ئەی",
      "k": "cognate",
      "note": "this (before a noun): ئەی"
     },
     {
      "ckb": "دزە",
      "sdh": "دزە",
      "k": "same"
     },
     {
      "ckb": "ئەسپ",
      "sdh": "ئەسپ",
      "k": "same"
     },
     {
      "ckb": "ـەکە",
      "sdh": "ـەگە",
      "k": "grammar"
     },
     {
      "ckb": "ـمانی",
      "sdh": "ـمان",
      "k": "grammar",
      "note": "no doer -ی before the verb"
     },
     {
      "ckb": "دزی",
      "sdh": "دزی",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "ptr_10",
    "en": "Yesterday I saw you in the bazaar.",
    "ckb": "دوێنێ لە بازاڕ بینیمیت.",
    "sdh": "دۊەکە دیمەد لە بازاڕ.",
    "align": [
     {
      "ckb": "دوێنێ",
      "sdh": "دۊەکە",
      "k": "different",
      "note": "yesterday: دۊەکە"
     },
     {
      "ckb": "بینیم",
      "sdh": "دیم",
      "k": "cognate",
      "note": "I saw: دیم"
     },
     {
      "ckb": "ـیت",
      "sdh": "ـەد",
      "k": "grammar",
      "rule": "t-d",
      "note": "object 'you' = -ەد after the verb"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "بازاڕ",
      "sdh": "بازاڕ",
      "k": "same"
     }
    ],
    "src": "saye"
   }
  ],
  "pi": [
   {
    "id": "ptr_pi1",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "تێریان کردم.",
    "options": [
     "I fed them.",
     "They fed me."
    ],
    "answer": 0,
    "why": {
     "en": "In Kalhori -م on the verb is the doer; -یان on تێر is the object. Sorani reads it the other way round.",
     "ku": "لە کەڵهوڕیدا ـمی سەر کار بکەرە و ـیانی سەر «تێر» بەرکارە. سۆرانی بە پێچەوانەوە دەیخوێنێتەوە."
    },
    "src": "saye"
   },
   {
    "id": "ptr_pi2",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "میوانەیلەگە شام کردن.",
    "options": [
     "The guests had dinner.",
     "The guest had dinner."
    ],
    "answer": 0,
    "why": {
     "en": "-یل is the plural, and -ن on the verb is 'they'.",
     "ku": "ـیل نیشانەی کۆیە و ـنی سەر کار واتە «ئەوان»."
    },
    "src": "saye"
   },
   {
    "id": "ptr_pi3",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "شەوەکی چە خواردی؟",
    "options": [
     "What did you eat this morning?",
     "What did he eat this morning?"
    ],
    "answer": 0,
    "why": {
     "en": "-ی on the verb is 'you'. 'He ate' is plain خوارد.",
     "ku": "ـی لەسەر کار واتە «تۆ». «ئەو» تەنها «خوارد»ە."
    },
    "src": "saye"
   },
   {
    "id": "ptr_pi4",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "دۊەکە دیمەد لە بازاڕ.",
    "options": [
     "Yesterday I saw you in the bazaar.",
     "Yesterday you saw me in the bazaar."
    ],
    "answer": 0,
    "why": {
     "en": "دیم = 'I saw'; -ەد after it = 'you'. 'You saw me' is دیدەم.",
     "ku": "دیم واتە «بینیم»؛ ـەد لە دوایدا واتە «تۆ». «تۆ منت بینی» دەبێتە دیدەم."
    },
    "src": "saye"
   },
   {
    "id": "ptr_pi5",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "چەنێ برد؟ چوار کیسە برد.",
    "options": [
     "How much did he take? Four sacks.",
     "How much did you take? Four sacks."
    ],
    "answer": 0,
    "why": {
     "en": "Bare برد = 'he took'. 'You took' would have -ی on the verb.",
     "ku": "«برد» بەتەنیا واتە «ئەو بردی». بۆ «تۆ» ـی دێتە سەر کار."
    },
    "src": "saye"
   }
  ]
 },
 {
  "id": "nouns",
  "order": 7,
  "level": "A2",
  "sieve": 5,
  "title": "Nouns: the, a, plural, and the linking particle",
  "pattern": {
   "ckb": "[slot]ەکە",
   "sdh": "[slot]ەگە",
   "en": "the [slot]"
  },
  "card": {
   "ckb>sdh": {
    "en": "'The' is -ەگە (Sorani -ەکە), and the plural is -(ە)یل, which Saye calls the spoken form: ژنەیل 'women', -ەیلەگە 'the …s'. -گەل exists but is very rare in speech. 'A' is -ی or -ێگ. The linking particle -ی works as in Sorani: پیاگی کەڵگەت.",
    "ku": "ناسراو بە «ـەگە»یە (سۆرانی ـەکە)، و کۆ بە «ـ(ە)یل»ە کە سایە دەڵێت شێوەی قسەکردنە: ژنەیل (ژنان)، ـەیلەگە (ـەکان). «ـگەل»یش هەیە بەڵام لە قسەدا زۆر کەمە. نەناسراو ـی یان ـێگە. ئامرازی دانەپاڵ ـی وەک سۆرانی کار دەکات: پیاگی کەڵگەت."
   }
  },
  "items": [
   {
    "id": "nn_01",
    "en": "The tall tree is a tamarisk.",
    "ckb": "دارە بەرزەکە گەزە.",
    "sdh": "دارە بەرزەگە گەزە.",
    "align": [
     {
      "ckb": "دارە",
      "sdh": "دارە",
      "k": "same",
      "note": "linking -ە, as in Sorani"
     },
     {
      "ckb": "بەرز",
      "sdh": "بەرز",
      "k": "same"
     },
     {
      "ckb": "ـەکە",
      "sdh": "ـەگە",
      "k": "grammar",
      "note": "'the': -ەگە"
     },
     {
      "ckb": "گەز",
      "sdh": "گەز",
      "k": "same"
     },
     {
      "ckb": "ـە",
      "sdh": "ـە",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "nn_02",
    "en": "The tall trees are tamarisks.",
    "ckb": "دارە بەرزەکان گەزن.",
    "sdh": "دارە بەرزەیلەگە گەزن.",
    "align": [
     {
      "ckb": "دارە",
      "sdh": "دارە",
      "k": "same"
     },
     {
      "ckb": "بەرز",
      "sdh": "بەرز",
      "k": "same"
     },
     {
      "ckb": "ـەکان",
      "sdh": "ـەیلەگە",
      "k": "grammar",
      "note": "'the …s': -ەیلەگە"
     },
     {
      "ckb": "گەز",
      "sdh": "گەز",
      "k": "same"
     },
     {
      "ckb": "ـن",
      "sdh": "ـن",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "nn_03",
    "en": "The iron forks are heavy.",
    "ckb": "شەنە ئاسنینەکان گرانن.",
    "sdh": "شەنە ئاسنینەیلە گرانن.",
    "align": [
     {
      "ckb": "شەنە",
      "sdh": "شەنە",
      "k": "same"
     },
     {
      "ckb": "ئاسنین",
      "sdh": "ئاسنین",
      "k": "same"
     },
     {
      "ckb": "ـەکان",
      "sdh": "ـەیلە",
      "k": "grammar",
      "note": "short 'the …s': -ەیلە"
     },
     {
      "ckb": "گران",
      "sdh": "گران",
      "k": "same"
     },
     {
      "ckb": "ـن",
      "sdh": "ـن",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "nn_04",
    "en": "He has married a beautiful woman.",
    "ckb": "ژنێکی جوانی خواستووە.",
    "sdh": "ژنی جوانی خوازییە.",
    "align": [
     {
      "ckb": "ژن",
      "sdh": "ژن",
      "k": "same"
     },
     {
      "ckb": "ـێکی",
      "sdh": "ـی",
      "k": "grammar",
      "note": "'a' + link: -ی"
     },
     {
      "ckb": "جوان",
      "sdh": "جوان",
      "k": "same"
     },
     {
      "ckb": "ـی",
      "sdh": "ـی",
      "k": "grammar",
      "note": "'a' can sit on the adjective (also -یگ)"
     },
     {
      "ckb": "خواستووە",
      "sdh": "خوازییە",
      "k": "cognate"
     }
    ],
    "src": "saye"
   },
   {
    "id": "nn_05",
    "en": "Bayram is a good boy.",
    "ckb": "بەیرام کوڕێکی باشە.",
    "sdh": "بیرام کوڕی خاسیگە.",
    "align": [
     {
      "ckb": "بەیرام",
      "sdh": "بیرام",
      "k": "cognate"
     },
     {
      "ckb": "کوڕ",
      "sdh": "کوڕ",
      "k": "same"
     },
     {
      "ckb": "ـێکی",
      "sdh": "ـی",
      "k": "grammar",
      "note": "linking -ی"
     },
     {
      "ckb": "باش",
      "sdh": "خاس",
      "k": "different",
      "note": "good: خاس"
     },
     {
      "ckb": "ـە",
      "sdh": "ـیگە",
      "k": "grammar",
      "note": "'a' (-یگ) on the adjective, then 'is'"
     }
    ],
    "src": "saye"
   },
   {
    "id": "nn_06",
    "en": "Dara has married three wives.",
    "ckb": "دارا سێ ژنی خواستووە.",
    "sdh": "دارا سێ ژن خوازییە.",
    "align": [
     {
      "ckb": "دارا",
      "sdh": "دارا",
      "k": "same"
     },
     {
      "ckb": "سێ",
      "sdh": "سێ",
      "k": "same"
     },
     {
      "ckb": "ژن",
      "sdh": "ژن",
      "k": "same",
      "note": "after a number the noun stays singular"
     },
     {
      "ckb": "ـی خواستووە",
      "sdh": "خوازییە",
      "k": "grammar",
      "note": "no doer clitic"
     }
    ],
    "src": "saye"
   },
   {
    "id": "nn_07",
    "en": "My walking stick broke.",
    "ckb": "گۆچانەکەم شکا.",
    "sdh": "گووچانەگەم شکیا.",
    "align": [
     {
      "ckb": "گۆچان",
      "sdh": "گووچان",
      "k": "sound",
      "rule": "o-uu"
     },
     {
      "ckb": "ـەکە",
      "sdh": "ـەگە",
      "k": "grammar"
     },
     {
      "ckb": "ـم",
      "sdh": "ـم",
      "k": "same"
     },
     {
      "ckb": "شکا",
      "sdh": "شکیا",
      "k": "cognate"
     }
    ],
    "src": "saye"
   },
   {
    "id": "nn_08",
    "en": "Who opened the door?",
    "ckb": "کێ دەرگاکەی کردەوە؟",
    "sdh": "کێ قاپیەگە کردەوە؟",
    "align": [
     {
      "ckb": "کێ",
      "sdh": "کێ",
      "k": "same"
     },
     {
      "ckb": "دەرگا",
      "sdh": "قاپی",
      "k": "different",
      "note": "door: قاپی"
     },
     {
      "ckb": "ـکەی",
      "sdh": "ـەگە",
      "k": "grammar",
      "note": "'the': -ەگە; no doer -ی"
     },
     {
      "ckb": "کردەوە",
      "sdh": "کردەوە",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "nn_09",
    "en": "a big man",
    "ckb": "پیاوی گەورە",
    "sdh": "پیاگی کەڵگەت",
    "align": [
     {
      "ckb": "پیاو",
      "sdh": "پیاگ",
      "k": "cognate",
      "note": "man: پیاگ"
     },
     {
      "ckb": "ـی",
      "sdh": "ـی",
      "k": "same",
      "note": "linking particle, as in Sorani"
     },
     {
      "ckb": "گەورە",
      "sdh": "کەڵگەت",
      "k": "different",
      "note": "big: کەڵگەت"
     }
    ],
    "src": "saye"
   },
   {
    "id": "nn_10",
    "en": "a straight road",
    "ckb": "ڕێی ڕاست",
    "sdh": "ڕێی ڕاس",
    "align": [
     {
      "ckb": "ڕێ",
      "sdh": "ڕێ",
      "k": "same"
     },
     {
      "ckb": "ـی",
      "sdh": "ـی",
      "k": "same",
      "note": "linking particle"
     },
     {
      "ckb": "ڕاست",
      "sdh": "ڕاس",
      "k": "sound",
      "rule": "cluster"
     }
    ],
    "src": "saye"
   }
  ],
  "pi": [
   {
    "id": "nn_pi1",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "دارە بەرزەیلەگە گەزن.",
    "options": [
     "The tall trees are tamarisks.",
     "The tall tree is a tamarisk."
    ],
    "answer": 0,
    "why": {
     "en": "-یل(ەگە) marks the plural, where Sorani has -ەکان.",
     "ku": "ـیل(ەگە) نیشانەی کۆیە، لە جیاتی ـەکانی سۆرانی."
    },
    "src": "saye"
   },
   {
    "id": "nn_pi2",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "ژنی جوانی خوازییە.",
    "options": [
     "He has married a beautiful woman.",
     "He has married the beautiful woman."
    ],
    "answer": 0,
    "why": {
     "en": "-ی on the adjective here means 'a'. 'The' would be -ەگە.",
     "ku": "ـی لەسەر ئاوەڵناوەکە لێرە واتە «ـێک». ناسراو دەبووە ـەگە."
    },
    "src": "saye"
   },
   {
    "id": "nn_pi3",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "گووچانەگەم شکیا.",
    "options": [
     "My walking stick broke.",
     "My walking sticks broke."
    ],
    "answer": 0,
    "why": {
     "en": "-ەگە is singular 'the'. The plural would be -ەیلەگە.",
     "ku": "ـەگە تاکی ناسراوە. کۆکەی دەبووە ـەیلەگە."
    },
    "src": "saye"
   },
   {
    "id": "nn_pi4",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "شەنە ئاسنینەیلە گرانن.",
    "options": [
     "The iron forks are heavy.",
     "The iron fork is heavy."
    ],
    "answer": 0,
    "why": {
     "en": "-ەیلە is 'the …s', and -ن on گران agrees with it.",
     "ku": "ـەیلە واتە «ـەکان» و ـنی سەر «گران» لەگەڵیدا دەگونجێت."
    },
    "src": "saye"
   }
  ]
 },
 {
  "id": "prep",
  "order": 8,
  "level": "A2",
  "sieve": 5,
  "title": "Prepositions: ئەڕا, وە, ئەوڵی … دا",
  "pattern": {
   "ckb": "بۆ [slot]",
   "sdh": "ئەڕا [slot]",
   "en": "to / for [slot]"
  },
  "card": {
   "ckb>sdh": {
    "en": "Three words do most of the work: ئەڕا = بۆ (also 'why?'), وە = بە, and ئەوڵی … (د)ا = لەگەڵ … دا. لە is the same as in Sorani. جوور is 'like' and بێجگە is 'except'. 'To me' can come after the verb: بدە پێم.",
    "ku": "سێ وشە زۆربەی کارەکە دەکەن: ئەڕا = بۆ (هەروەها «بۆچی؟»)، وە = بە، و ئەوڵی … (د)ا = لەگەڵ … دا. «لە» هەر وەک سۆرانییە. «جوور» واتە وەک و «بێجگە» واتە جگە لە. «پێم» دەکرێت بکەوێتە دوای کار: بدە پێم."
   }
  },
  "items": [
   {
    "id": "pp_01",
    "en": "Go to that hill.",
    "ckb": "بڕۆ بۆ ئەو گردە.",
    "sdh": "بچوو ئەڕا ئەو گردە.",
    "align": [
     {
      "ckb": "بڕۆ",
      "sdh": "بچوو",
      "k": "different",
      "note": "go!: بچوو"
     },
     {
      "ckb": "بۆ",
      "sdh": "ئەڕا",
      "k": "different",
      "note": "to, for: ئەڕا"
     },
     {
      "ckb": "ئەو",
      "sdh": "ئەو",
      "k": "same"
     },
     {
      "ckb": "گردە",
      "sdh": "گردە",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pp_02",
    "en": "I came with my father.",
    "ckb": "لەگەڵ باوکمدا هاتم.",
    "sdh": "ئەوڵی باوگمدا هاتم.",
    "align": [
     {
      "ckb": "لەگەڵ",
      "sdh": "ئەوڵی",
      "k": "different",
      "note": "with: ئەوڵی … دا"
     },
     {
      "ckb": "باوک",
      "sdh": "باوگ",
      "k": "cognate"
     },
     {
      "ckb": "ـم",
      "sdh": "ـم",
      "k": "same"
     },
     {
      "ckb": "ـدا",
      "sdh": "ـدا",
      "k": "same",
      "note": "in speech the د often drops"
     },
     {
      "ckb": "هاتم",
      "sdh": "هاتم",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pp_03",
    "en": "How did Murad come? — On foot.",
    "ckb": "مراد بە چی هات؟ — بە پێ هات.",
    "sdh": "مەراد وە چە هات؟ — وە پا هات.",
    "align": [
     {
      "ckb": "مراد",
      "sdh": "مەراد",
      "k": "cognate"
     },
     {
      "ckb": "بە",
      "sdh": "وە",
      "k": "sound",
      "rule": "b-w"
     },
     {
      "ckb": "چی",
      "sdh": "چە",
      "k": "cognate"
     },
     {
      "ckb": "هات",
      "sdh": "هات",
      "k": "same"
     },
     {
      "ckb": "بە",
      "sdh": "وە",
      "k": "sound",
      "rule": "b-w"
     },
     {
      "ckb": "پێ",
      "sdh": "پا",
      "k": "cognate",
      "note": "foot: پا"
     },
     {
      "ckb": "هات",
      "sdh": "هات",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pp_04",
    "en": "Nobody is here except Sardar.",
    "ckb": "جگە لە سەردار کەس لێرە نییە.",
    "sdh": "بێجگە لە سەردار کەس لێرە نییە.",
    "align": [
     {
      "ckb": "جگە",
      "sdh": "بێجگە",
      "k": "cognate",
      "note": "except: بێجگە (also بێجلە)"
     },
     {
      "ckb": "لە",
      "sdh": "لە",
      "k": "same"
     },
     {
      "ckb": "سەردار",
      "sdh": "سەردار",
      "k": "same"
     },
     {
      "ckb": "کەس",
      "sdh": "کەس",
      "k": "same"
     },
     {
      "ckb": "لێرە",
      "sdh": "لێرە",
      "k": "same"
     },
     {
      "ckb": "نییە",
      "sdh": "نییە",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pp_05",
    "en": "I wanted to go to their house.",
    "ckb": "ویستم بچم بۆ ماڵیان.",
    "sdh": "تواسم بچم ئەڕا ماڵیان.",
    "align": [
     {
      "ckb": "ویستم",
      "sdh": "تواسم",
      "k": "different",
      "note": "wanted: تواس-"
     },
     {
      "ckb": "بچم",
      "sdh": "بچم",
      "k": "same"
     },
     {
      "ckb": "بۆ",
      "sdh": "ئەڕا",
      "k": "different"
     },
     {
      "ckb": "ماڵ",
      "sdh": "ماڵ",
      "k": "same"
     },
     {
      "ckb": "ـیان",
      "sdh": "ـیان",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pp_06",
    "en": "He has gone to the bazaar to buy flour.",
    "ckb": "چووە بۆ بازاڕ ئارد بکڕێت.",
    "sdh": "چگ ئەڕا بازاڕ ئارد بسێنێ.",
    "align": [
     {
      "ckb": "چووە",
      "sdh": "چگ",
      "k": "different",
      "note": "has gone: چگ"
     },
     {
      "ckb": "بۆ",
      "sdh": "ئەڕا",
      "k": "different"
     },
     {
      "ckb": "بازاڕ",
      "sdh": "بازاڕ",
      "k": "same"
     },
     {
      "ckb": "ئارد",
      "sdh": "ئارد",
      "k": "same"
     },
     {
      "ckb": "بکڕێت",
      "sdh": "بسێنێ",
      "k": "different",
      "note": "buy: سێن-"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pp_07",
    "en": "Please give me that glass!",
    "ckb": "بێ زەحمەت، ئەو پەرداخەم پێ بدە!",
    "sdh": "بێ زەحمەت، ئەو جامە بدە پێم!",
    "align": [
     {
      "ckb": "بێ زەحمەت",
      "sdh": "بێ زەحمەت",
      "k": "same"
     },
     {
      "ckb": "ئەو",
      "sdh": "ئەو",
      "k": "same"
     },
     {
      "ckb": "پەرداخە",
      "sdh": "جامە",
      "k": "different",
      "note": "glass: جام"
     },
     {
      "ckb": "ـم پێ بدە",
      "sdh": "بدە پێم",
      "k": "grammar",
      "note": "'to me' can follow the verb: پێم"
     }
    ],
    "src": "saye"
   },
   {
    "id": "pp_08",
    "en": "He put it up on the roof.",
    "ckb": "خستیە سەر بانی ماڵ.",
    "sdh": "کردەو بانی ماڵ.",
    "align": [
     {
      "ckb": "خستی",
      "sdh": "کرد",
      "k": "different",
      "note": "put: کرد (here)"
     },
     {
      "ckb": "ـە سەر",
      "sdh": "ـەو",
      "k": "grammar",
      "note": "ئەو 'onto' is joined to the verb"
     },
     {
      "ckb": "بانی",
      "sdh": "بانی",
      "k": "same"
     },
     {
      "ckb": "ماڵ",
      "sdh": "ماڵ",
      "k": "same"
     }
    ],
    "src": "saye"
   }
  ],
  "pi": [
   {
    "id": "pp_pi1",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "ئەوڵی باوگمدا هاتم.",
    "options": [
     "I came with my father.",
     "I came to my father."
    ],
    "answer": 0,
    "why": {
     "en": "ئەوڵی … دا is 'with', Sorani لەگەڵ … دا. 'To' would be ئەڕا.",
     "ku": "ئەوڵی … دا واتە لەگەڵ … دا. «بۆ» دەبووە ئەڕا."
    },
    "src": "saye"
   },
   {
    "id": "pp_pi2",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "بچوو ئەڕا ئەو گردە.",
    "options": [
     "Go to that hill.",
     "He goes to that hill."
    ],
    "answer": 0,
    "why": {
     "en": "بچوو is the command 'go!' (Sorani بڕۆ). 'He goes' is plain چوو.",
     "ku": "بچوو فەرمانە: «بڕۆ». «دەچێت» تەنها «چوو»ە."
    },
    "src": "saye"
   },
   {
    "id": "pp_pi3",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "مەراد وە چە هات؟ وە پا هات.",
    "options": [
     "How did Murad come? On foot.",
     "Why did Murad come? For his foot."
    ],
    "answer": 0,
    "why": {
     "en": "وە = بە: 'by, with'. 'Why' would be ئەڕا.",
     "ku": "وە = بە. بۆ «بۆچی» دەڵێن ئەڕا."
    },
    "src": "saye"
   },
   {
    "id": "pp_pi4",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "تواسم بچم ئەڕا ماڵیان.",
    "options": [
     "I wanted to go to their house.",
     "I want to go to their house."
    ],
    "answer": 0,
    "why": {
     "en": "تواس- is the past stem of 'want'. 'I want' is توام.",
     "ku": "تواس- قەدی ڕابردووی «ویستن»ە. «دەمەوێ» دەبێتە توام."
    },
    "src": "saye"
   }
  ]
 },
 {
  "id": "imper",
  "order": 9,
  "level": "A2",
  "sieve": 5,
  "title": "Commands, “let”, “must”, “may”",
  "pattern": {
   "ckb": "با [slot]",
   "sdh": "بیلا [slot]",
   "en": "let … [slot]"
  },
  "card": {
   "ckb>sdh": {
    "en": "Commands and the subjunctive use ب-, and 'don't' is مە-, just as in Sorani: بنیش, مەکە. 'Go!' is بچوو. 'Let' is بیلا, 'must' is بایەد and 'may' is هاتی; each is followed by a subjunctive and never changes.",
    "ku": "فەرمان و داخوازی بە «ب-»ن و نەهی بە «مە-»، ڕێک وەک سۆرانی: بنیش (دانیشە)، مەکە. «بڕۆ» دەبێتە بچوو. «با» دەبێتە بیلا، «دەبێ» دەبێتە بایەد و «لەوانەیە» دەبێتە هاتی؛ هەموویان داخوازییان لە دوا دێت و ناگۆڕێن."
   }
  },
  "items": [
   {
    "id": "im_01",
    "en": "Please sit down. Eat.",
    "ckb": "فەرموو دانیشە. نان بخۆن.",
    "sdh": "فەرموو بنیش. نان بخوەن.",
    "align": [
     {
      "ckb": "فەرموو",
      "sdh": "فەرموو",
      "k": "same"
     },
     {
      "ckb": "دانیشە",
      "sdh": "بنیش",
      "k": "cognate",
      "note": "sit!: بنیش"
     },
     {
      "ckb": "نان",
      "sdh": "نان",
      "k": "same"
     },
     {
      "ckb": "بخۆن",
      "sdh": "بخوەن",
      "k": "sound",
      "rule": "xo-xwe"
     }
    ],
    "src": "saye"
   },
   {
    "id": "im_02",
    "en": "Shall I go to the cinema? — Go.",
    "ckb": "بچم بۆ سینەما؟ — بڕۆ.",
    "sdh": "بچم ئەڕا سینەما؟ — بچوو.",
    "align": [
     {
      "ckb": "بچم",
      "sdh": "بچم",
      "k": "same"
     },
     {
      "ckb": "بۆ",
      "sdh": "ئەڕا",
      "k": "different"
     },
     {
      "ckb": "سینەما",
      "sdh": "سینەما",
      "k": "same"
     },
     {
      "ckb": "بڕۆ",
      "sdh": "بچوو",
      "k": "different",
      "note": "go! (to one person): بچوو"
     }
    ],
    "src": "saye"
   },
   {
    "id": "im_03",
    "en": "Be quiet, or I'll throw you out.",
    "ckb": "دەنگ مەکە، دەنا دەرت دەکەم.",
    "sdh": "دەنگ مەکە، ونە دەرت کەم.",
    "align": [
     {
      "ckb": "دەنگ",
      "sdh": "دەنگ",
      "k": "same"
     },
     {
      "ckb": "مەکە",
      "sdh": "مەکە",
      "k": "same",
      "note": "don't: مە-, as in Sorani"
     },
     {
      "ckb": "دەنا",
      "sdh": "ونە",
      "k": "different",
      "note": "or else: ونە"
     },
     {
      "ckb": "دەر",
      "sdh": "دەر",
      "k": "same"
     },
     {
      "ckb": "ـت",
      "sdh": "ـت",
      "k": "same"
     },
     {
      "ckb": "دەکەم",
      "sdh": "کەم",
      "k": "grammar",
      "rule": "de-zero"
     }
    ],
    "src": "saye"
   },
   {
    "id": "im_04",
    "en": "It's still early. Go a bit later.",
    "ckb": "هێشتا زووە. کەمێکی تر بڕۆن.",
    "sdh": "هێمانی زۊیە. کەمێ تر بچن.",
    "align": [
     {
      "ckb": "هێشتا",
      "sdh": "هێمانی",
      "k": "different",
      "note": "still: هێمان"
     },
     {
      "ckb": "زوو",
      "sdh": "زۊ",
      "k": "sound",
      "rule": "o-ue"
     },
     {
      "ckb": "ـە",
      "sdh": "ـیە",
      "k": "grammar"
     },
     {
      "ckb": "کەمێکی",
      "sdh": "کەمێ",
      "k": "cognate"
     },
     {
      "ckb": "تر",
      "sdh": "تر",
      "k": "same"
     },
     {
      "ckb": "بڕۆن",
      "sdh": "بچن",
      "k": "different",
      "note": "go (pl.): بچن"
     }
    ],
    "src": "saye"
   },
   {
    "id": "im_05",
    "en": "Let me go.",
    "ckb": "با بچم.",
    "sdh": "بیلا بچم.",
    "align": [
     {
      "ckb": "با",
      "sdh": "بیلا",
      "k": "cognate",
      "note": "let: بیلا"
     },
     {
      "ckb": "بچم",
      "sdh": "بچم",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "im_06",
    "en": "Let's talk.",
    "ckb": "با قسە بکەین.",
    "sdh": "بیلا قسە بکەیم.",
    "align": [
     {
      "ckb": "با",
      "sdh": "بیلا",
      "k": "cognate"
     },
     {
      "ckb": "قسە",
      "sdh": "قسە",
      "k": "same"
     },
     {
      "ckb": "بکەین",
      "sdh": "بکەیم",
      "k": "grammar",
      "note": "we: -یم"
     }
    ],
    "src": "saye"
   },
   {
    "id": "im_07",
    "en": "I must go.",
    "ckb": "دەبێ بچم.",
    "sdh": "بایەد بچم.",
    "align": [
     {
      "ckb": "دەبێ",
      "sdh": "بایەد",
      "k": "different",
      "note": "must: بایەد, the same for every person"
     },
     {
      "ckb": "بچم",
      "sdh": "بچم",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "im_08",
    "en": "I might go.",
    "ckb": "لەوانەیە بچم.",
    "sdh": "هاتی بچم.",
    "align": [
     {
      "ckb": "لەوانەیە",
      "sdh": "هاتی",
      "k": "different",
      "note": "may: هاتی (looks like 'you came')"
     },
     {
      "ckb": "بچم",
      "sdh": "بچم",
      "k": "same"
     }
    ],
    "src": "saye"
   },
   {
    "id": "im_09",
    "en": "Whoever doesn't accept it, let him not do it!",
    "ckb": "هەرکەس قبووڵی ناکات، با نەیکات!",
    "sdh": "هەرکەس قەبووڵ نیەکەی، بیلا نەکەی!",
    "align": [
     {
      "ckb": "هەرکەس",
      "sdh": "هەرکەس",
      "k": "same"
     },
     {
      "ckb": "قبووڵی",
      "sdh": "قەبووڵ",
      "k": "cognate"
     },
     {
      "ckb": "ناکات",
      "sdh": "نیەکەی",
      "k": "grammar",
      "rule": "na-nie",
      "note": "negative present: نیە-"
     },
     {
      "ckb": "با",
      "sdh": "بیلا",
      "k": "cognate"
     },
     {
      "ckb": "نەیکات",
      "sdh": "نەکەی",
      "k": "grammar",
      "note": "negative subjunctive: نە-"
     }
    ],
    "src": "saye"
   },
   {
    "id": "im_10",
    "en": "Let people laugh at them.",
    "ckb": "با خەڵک پێیان پێبکەنن.",
    "sdh": "بیلا مەردم پێیان بخەنی.",
    "align": [
     {
      "ckb": "با",
      "sdh": "بیلا",
      "k": "cognate"
     },
     {
      "ckb": "خەڵک",
      "sdh": "مەردم",
      "k": "different",
      "note": "people: مەردم"
     },
     {
      "ckb": "پێیان",
      "sdh": "پێیان",
      "k": "same"
     },
     {
      "ckb": "پێبکەنن",
      "sdh": "بخەنی",
      "k": "cognate",
      "note": "laugh: خەنین"
     }
    ],
    "src": "saye"
   }
  ],
  "pi": [
   {
    "id": "im_pi1",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "بیلا قسە بکەیم.",
    "options": [
     "Let's talk.",
     "Let them talk."
    ],
    "answer": 0,
    "why": {
     "en": "-یم is 'we'. 'Let them talk' would end in -ن.",
     "ku": "ـیم واتە «ئێمە». بۆ «ئەوان» بە ـن تەواو دەبوو."
    },
    "src": "saye"
   },
   {
    "id": "im_pi2",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "هاتی بچم.",
    "options": [
     "I might go.",
     "You came, so I'll go."
    ],
    "answer": 0,
    "why": {
     "en": "هاتی + subjunctive means 'may, might'. It is not 'you came' here.",
     "ku": "هاتی + داخوازی واتە «لەوانەیە». لێرە واتای «هاتیت» نییە."
    },
    "src": "saye"
   },
   {
    "id": "im_pi3",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "بایەد بچم.",
    "options": [
     "I must go.",
     "I wanted to go."
    ],
    "answer": 0,
    "why": {
     "en": "بایەد is 'must' and stays the same for every person.",
     "ku": "بایەد واتە «دەبێ» و بۆ هەموو کەسەکان وەک خۆی دەمێنێتەوە."
    },
    "src": "saye"
   },
   {
    "id": "im_pi4",
    "dir": "ckb>sdh",
    "show": "sdh",
    "text": "بچم ئەڕا سینەما؟ بچوو.",
    "options": [
     "Shall I go to the cinema? Go.",
     "Did I go to the cinema? He went."
    ],
    "answer": 0,
    "why": {
     "en": "ب- marks the subjunctive and the command; بچوو is 'go!'.",
     "ku": "«ب-» نیشانەی داخوازی و فەرمانە؛ بچوو واتە «بڕۆ»."
    },
    "src": "saye"
   }
  ]
 }
];
})();
