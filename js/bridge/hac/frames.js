// Bridge course Sorani -> Hawrami (ckb>hac). Generated from the sources listed in sources.js.
(function () {
  const B = (window.__BRIDGES = window.__BRIDGES || {});
  const P = (B["ckb-hac"] = B["ckb-hac"] || {});
  P.FRAMES = [
 {
  "id": "copula",
  "order": 1,
  "level": "A1",
  "sieve": 5,
  "title": "“To be”: am, is, are",
  "pattern": {
   "ckb": "[slot]ـم / [slot]ـە",
   "hac": "[slot]ـنا / [slot]ـەن، ـەنە",
   "en": "I am [slot] / it is [slot]"
  },
  "card": {
   "ckb>hac": {
    "en": "Hawrami also glues “is” onto the word, but its ending has an n and shows gender: کوڕەن “he is a boy”, کناچێنە “she is a girl”. Plural is ـێنێ, “I am” ـنا, “you are” ـنی. “Not” is its own word: نیەن (masculine), نیەنە (feminine), نیەنێ (plural).",
    "ku": "لە هەورامیشدا «بوون» بە وشەکەوە دەلکێت، بەڵام پاشگرەکەی «ن»ی تێدایە و نێر و مێ لێک جیا دەکاتەوە: کوڕەن (کوڕە)، کناچێنە (کچە). بۆ کۆ ـێنێ، بۆ «ـم» ـنا، بۆ «ـیت» ـنی. نەرێکەی وشەیەکی جیایە: نیەن بۆ نێر، نیەنە بۆ مێ، نیەنێ بۆ کۆ."
   }
  },
  "items": [
   {
    "id": "cop_01",
    "en": "This is a boy.",
    "ckb": "ئەمە کوڕە.",
    "hac": "ئینە کوڕەن.",
    "align": [
     {
      "ckb": "ئەمە",
      "hac": "ئینە",
      "k": "different",
      "note": "masculine “this”"
     },
     {
      "ckb": "کوڕ",
      "hac": "کوڕ",
      "k": "same"
     },
     {
      "ckb": "ـە",
      "hac": "ـەن",
      "k": "grammar",
      "note": "masculine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "cop_02",
    "en": "This is a girl.",
    "ckb": "ئەمە کچە.",
    "hac": "ئینێ کناچێنە.",
    "align": [
     {
      "ckb": "ئەمە",
      "hac": "ئینێ",
      "k": "different",
      "note": "feminine “this”"
     },
     {
      "ckb": "کچ",
      "hac": "کناچێ",
      "k": "different"
     },
     {
      "ckb": "ـە",
      "hac": "ـنە",
      "k": "grammar",
      "note": "feminine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "cop_03",
    "en": "The moon is beautiful.",
    "ckb": "مانگ جوانە.",
    "hac": "مانگە زەریفەنە.",
    "align": [
     {
      "ckb": "مانگ",
      "hac": "مانگە",
      "k": "cognate",
      "note": "feminine noun"
     },
     {
      "ckb": "جوان",
      "hac": "زەریف",
      "k": "different"
     },
     {
      "ckb": "ـە",
      "hac": "ـەنە",
      "k": "grammar",
      "note": "feminine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "cop_04",
    "en": "Yoghurt is white.",
    "ckb": "ماست سپییە.",
    "hac": "ماس چەرمەن.",
    "align": [
     {
      "ckb": "ماست",
      "hac": "ماس",
      "k": "sound",
      "rule": "st-s"
     },
     {
      "ckb": "سپی",
      "hac": "چەرمە",
      "k": "different",
      "note": "not “leather”: white"
     },
     {
      "ckb": "ـیە",
      "hac": "ـن",
      "k": "grammar",
      "note": "masculine “is” after a vowel"
     }
    ],
    "src": "C"
   },
   {
    "id": "cop_05",
    "en": "Snow is white.",
    "ckb": "بەفر سپییە.",
    "hac": "وەروە چەرمێنە.",
    "align": [
     {
      "ckb": "بەفر",
      "hac": "وەروە",
      "k": "sound",
      "rule": "b-w"
     },
     {
      "ckb": "سپی",
      "hac": "چەرمێ",
      "k": "different",
      "note": "feminine form of the adjective"
     },
     {
      "ckb": "ـیە",
      "hac": "ـنە",
      "k": "grammar",
      "note": "feminine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "cop_06",
    "en": "I am well. Are you well?",
    "ckb": "من باشم، تۆ باشی؟",
    "hac": "من خاسەنا، تۆ خاسنی؟",
    "align": [
     {
      "ckb": "من",
      "hac": "من",
      "k": "same"
     },
     {
      "ckb": "باش",
      "hac": "خاسە",
      "k": "different",
      "note": "feminine form: a woman is speaking"
     },
     {
      "ckb": "ـم",
      "hac": "ـنا",
      "k": "grammar",
      "note": "“I am”"
     },
     {
      "ckb": "تۆ",
      "hac": "تۆ",
      "k": "same"
     },
     {
      "ckb": "باش",
      "hac": "خاس",
      "k": "different"
     },
     {
      "ckb": "ـی",
      "hac": "ـنی",
      "k": "grammar",
      "note": "“you are”"
     }
    ],
    "src": "C"
   },
   {
    "id": "cop_07",
    "en": "I am well too, thanks.",
    "ckb": "منیش باشم، سپاس.",
    "hac": "منیچ خاسنا، سپاس.",
    "align": [
     {
      "ckb": "من",
      "hac": "من",
      "k": "same"
     },
     {
      "ckb": "ـیش",
      "hac": "ـیچ",
      "k": "cognate",
      "note": "“too”"
     },
     {
      "ckb": "باش",
      "hac": "خاس",
      "k": "different"
     },
     {
      "ckb": "ـم",
      "hac": "ـنا",
      "k": "grammar",
      "note": "“I am”"
     },
     {
      "ckb": "سپاس",
      "hac": "سپاس",
      "k": "same"
     }
    ],
    "src": "C"
   },
   {
    "id": "cop_08",
    "en": "Your hair is beautiful.",
    "ckb": "قژت جوانە.",
    "hac": "قژێت زەریفێنێ.",
    "align": [
     {
      "ckb": "قژ",
      "hac": "قژێ",
      "k": "grammar",
      "note": "hair is plural in Hawrami"
     },
     {
      "ckb": "ـت",
      "hac": "ـت",
      "k": "same"
     },
     {
      "ckb": "جوان",
      "hac": "زەریفێ",
      "k": "different",
      "note": "plural adjective"
     },
     {
      "ckb": "ـە",
      "hac": "ـنێ",
      "k": "grammar",
      "note": "plural “are”"
     }
    ],
    "src": "C"
   },
   {
    "id": "cop_09",
    "en": "My father is not angry.",
    "ckb": "باوکم تووڕە نییە.",
    "hac": "تاتەم تووڕە نیەن.",
    "align": [
     {
      "ckb": "باوک",
      "hac": "تاتە",
      "k": "different"
     },
     {
      "ckb": "ـم",
      "hac": "ـم",
      "k": "same"
     },
     {
      "ckb": "تووڕە",
      "hac": "تووڕە",
      "k": "same"
     },
     {
      "ckb": "نییە",
      "hac": "نیەن",
      "k": "cognate",
      "note": "masculine “is not”"
     }
    ],
    "src": "C"
   },
   {
    "id": "cop_10",
    "en": "My mother is not angry either.",
    "ckb": "دایکیشم تووڕە نییە.",
    "hac": "ئەڎایچم تووڕێ نیەنە.",
    "align": [
     {
      "ckb": "دایک",
      "hac": "ئەڎا",
      "k": "different"
     },
     {
      "ckb": "ـیش",
      "hac": "ـیچ",
      "k": "cognate",
      "note": "“too, either”"
     },
     {
      "ckb": "ـم",
      "hac": "ـم",
      "k": "same"
     },
     {
      "ckb": "تووڕە",
      "hac": "تووڕێ",
      "k": "grammar",
      "note": "feminine form of the adjective"
     },
     {
      "ckb": "نییە",
      "hac": "نیەنە",
      "k": "cognate",
      "note": "feminine “is not”"
     }
    ],
    "src": "C"
   },
   {
    "id": "cop_11",
    "en": "We are guests, charge us less.",
    "ckb": "میوانین، کەمتر بمانبە.",
    "hac": "مێمانێنمێ، کەمتەر بەرەما.",
    "align": [
     {
      "ckb": "میوان",
      "hac": "مێمان",
      "k": "cognate"
     },
     {
      "ckb": "ـین",
      "hac": "ـێنمێ",
      "k": "grammar",
      "note": "“we are”"
     },
     {
      "ckb": "کەمتر",
      "hac": "کەمتەر",
      "k": "cognate"
     },
     {
      "ckb": "بمانبە",
      "hac": "بەرەما",
      "k": "grammar",
      "note": "“take us”: clitic at the end"
     }
    ],
    "src": "C"
   }
  ],
  "pi": [
   {
    "id": "cop_pi1",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "خاسەنا",
    "options": [
     "I am well.",
     "You are well."
    ],
    "answer": 0,
    "why": {
     "en": "ـنا is “I am”, like Sorani ـم; ـنی is “you are”.",
     "ku": "ـنا وەک ـمی سۆرانییە (باشم)؛ ـنی وەک ـی (باشی)."
    },
    "src": "C"
   },
   {
    "id": "cop_pi2",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "خاسنی",
    "options": [
     "I am well.",
     "You are well."
    ],
    "answer": 1,
    "why": {
     "en": "ـنی is “you are”.",
     "ku": "ـنی واتە «ـیت»: باشی."
    },
    "src": "C"
   },
   {
    "id": "cop_pi3",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "ژیرەن",
    "options": [
     "He is clever.",
     "She is clever."
    ],
    "answer": 0,
    "why": {
     "en": "ـەن with no final ە is masculine.",
     "ku": "ـەن بێ ەی کۆتایی بۆ نێرە."
    },
    "src": "C"
   },
   {
    "id": "cop_pi4",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "ژیرەنە",
    "options": [
     "He is clever.",
     "She is clever."
    ],
    "answer": 1,
    "why": {
     "en": "ـەنە ends in ە: feminine.",
     "ku": "ـەنە بە ە کۆتایی دێت: بۆ مێیە."
    },
    "src": "C"
   },
   {
    "id": "cop_pi5",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "ژیرێنێ",
    "options": [
     "They are clever.",
     "He is clever."
    ],
    "answer": 0,
    "why": {
     "en": "ـێنێ is the plural “are”.",
     "ku": "ـێنێ بۆ کۆیە: ژیرن."
    },
    "src": "C"
   },
   {
    "id": "cop_pi6",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "تووڕێ نیەنە",
    "options": [
     "She is not angry.",
     "He is not angry."
    ],
    "answer": 0,
    "why": {
     "en": "نیەنە is feminine, and so is تووڕێ.",
     "ku": "نیەنە بۆ مێیە، تووڕێش هەروەها."
    },
    "src": "C"
   },
   {
    "id": "cop_pi7",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "تووڕە نیەن",
    "options": [
     "She is not angry.",
     "He is not angry."
    ],
    "answer": 1,
    "why": {
     "en": "نیەن is masculine “is not”.",
     "ku": "نیەن بۆ نێرە: تووڕە نییە."
    },
    "src": "C"
   }
  ],
  "src": "C"
 },
 {
  "id": "exist",
  "order": 2,
  "level": "A1",
  "sieve": 5,
  "title": "“There is”, “to be somewhere” and “to have”",
  "pattern": {
   "ckb": "[slot] هەیە",
   "hac": "[slot] هەن / هەنە",
   "en": "there is a [slot]"
  },
  "card": {
   "ckb>hac": {
    "en": "Sorani هەیە / ها is هەن, and it agrees with the noun: هەن (masculine), هەنە (feminine), هەنێ (plural). “Have” works as in Sorani, with a clitic for the owner, but the verb follows the gender of what is owned. “Not” is نیەن / نیەنە / نیەنێ. Careful: هەن alone means “there is”, not Sorani “they are”.",
    "ku": "«هەیە» و «ها» لە هەورامیدا دەبنە هەن، و لەگەڵ ناوەکەدا دەگونجێن: هەن بۆ نێر، هەنە بۆ مێ، هەنێ بۆ کۆ. «هەمە، هەیانە» وەک سۆرانی بە جێناوی لکاو دروست دەبن، بەڵام کارەکە ڕەگەزی ئەو شتە وەردەگرێت کە هەیە. نەرێکەی: نیەن، نیەنە، نیەنێ. ئاگادار بە: هەن بە تەنیا واتە «هەیە»، نەک «هەن»ی سۆرانی."
   }
  },
  "items": [
   {
    "id": "ex_01",
    "en": "There is a spring in our garden.",
    "ckb": "کانییەک لە باخەکەماندا هەیە.",
    "hac": "هانێو هەن باخەکەمانە.",
    "align": [
     {
      "ckb": "کانی",
      "hac": "هان",
      "k": "cognate"
     },
     {
      "ckb": "یەک",
      "hac": "ێو",
      "k": "grammar",
      "note": "“a” for a masculine noun"
     },
     {
      "ckb": "هەیە",
      "hac": "هەن",
      "k": "cognate",
      "note": "masculine “there is”"
     },
     {
      "ckb": "لە",
      "hac": "",
      "k": "only"
     },
     {
      "ckb": "باخ",
      "hac": "باخ",
      "k": "same"
     },
     {
      "ckb": "ـەکە",
      "hac": "ـەکە",
      "k": "same"
     },
     {
      "ckb": "ـمان",
      "hac": "ـما",
      "k": "cognate"
     },
     {
      "ckb": "ـدا",
      "hac": "ـنە",
      "k": "grammar",
      "note": "“in”, after the noun"
     }
    ],
    "src": "C"
   },
   {
    "id": "ex_02",
    "en": "There is a village, very far away.",
    "ckb": "گوندێک هەیە، زۆر دوورە.",
    "hac": "دەگایێوە هەنە، فرە دوورەنە.",
    "align": [
     {
      "ckb": "گوند",
      "hac": "دەگا",
      "k": "different",
      "note": "village"
     },
     {
      "ckb": "ێک",
      "hac": "یێوە",
      "k": "grammar",
      "note": "“a” for a feminine noun"
     },
     {
      "ckb": "هەیە",
      "hac": "هەنە",
      "k": "cognate",
      "note": "feminine “there is”"
     },
     {
      "ckb": "زۆر",
      "hac": "فرە",
      "k": "different"
     },
     {
      "ckb": "دوور",
      "hac": "دوور",
      "k": "same"
     },
     {
      "ckb": "ـە",
      "hac": "ـەنە",
      "k": "grammar",
      "note": "feminine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "ex_03",
    "en": "The girls are on their way.",
    "ckb": "کچەکان هان بەڕێوە.",
    "hac": "کناچەکا هەنێ ڕاوە.",
    "align": [
     {
      "ckb": "کچ",
      "hac": "کناچ",
      "k": "different"
     },
     {
      "ckb": "ەکان",
      "hac": "ەکا",
      "k": "cognate",
      "note": "plural “the”"
     },
     {
      "ckb": "هان",
      "hac": "هەنێ",
      "k": "cognate",
      "note": "plural “are (there)”"
     },
     {
      "ckb": "بەڕێوە",
      "hac": "ڕاوە",
      "k": "cognate",
      "note": "ڕا is “road”"
     }
    ],
    "src": "C"
   },
   {
    "id": "ex_04",
    "en": "We have a relative there; go to him.",
    "ckb": "خزمێکمان هەیە، بڕۆ بۆ لای.",
    "hac": "قەومێوەما هەن، لوە پەی لایش.",
    "align": [
     {
      "ckb": "خزم",
      "hac": "قەوم",
      "k": "different"
     },
     {
      "ckb": "ێک",
      "hac": "ێوە",
      "k": "grammar",
      "note": "“a”"
     },
     {
      "ckb": "مان",
      "hac": "ما",
      "k": "cognate",
      "note": "“our”: the owner"
     },
     {
      "ckb": "هەیە",
      "hac": "هەن",
      "k": "cognate",
      "note": "masculine: agrees with “relative”"
     },
     {
      "ckb": "بڕۆ",
      "hac": "لوە",
      "k": "different",
      "note": "“go!”"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "لا",
      "hac": "لا",
      "k": "same"
     },
     {
      "ckb": "ی",
      "hac": "یش",
      "k": "grammar",
      "note": "“his”"
     }
    ],
    "src": "C"
   },
   {
    "id": "ex_05",
    "en": "I have a lot of shirts.",
    "ckb": "کراسی زۆرم هەیە.",
    "hac": "گجیێ فرێم هەنێ.",
    "align": [
     {
      "ckb": "کراس",
      "hac": "گجیێ",
      "k": "different",
      "note": "plural “shirts”"
     },
     {
      "ckb": "ی",
      "hac": "",
      "k": "only"
     },
     {
      "ckb": "زۆر",
      "hac": "فرێ",
      "k": "different",
      "note": "plural adjective"
     },
     {
      "ckb": "ـم",
      "hac": "ـم",
      "k": "same",
      "note": "“my”: the owner"
     },
     {
      "ckb": "هەیە",
      "hac": "هەنێ",
      "k": "cognate",
      "note": "plural: agrees with “shirts”"
     }
    ],
    "src": "C"
   },
   {
    "id": "ex_06",
    "en": "We have no hens. Do you have any?",
    "ckb": "مریشکمان نییە، ئێوە هەتانە؟",
    "hac": "کەرگیما نیەنە، شمە هەنەتا؟",
    "align": [
     {
      "ckb": "مریشک",
      "hac": "کەرگی",
      "k": "different",
      "note": "plural by default"
     },
     {
      "ckb": "مان",
      "hac": "ما",
      "k": "cognate"
     },
     {
      "ckb": "نییە",
      "hac": "نیەنە",
      "k": "cognate",
      "note": "feminine “there is not”"
     },
     {
      "ckb": "ئێوە",
      "hac": "شمە",
      "k": "different"
     },
     {
      "ckb": "هەتانە",
      "hac": "هەنەتا",
      "k": "grammar",
      "note": "the clitic comes after the verb"
     }
    ],
    "src": "C"
   },
   {
    "id": "ex_07",
    "en": "Please, go ahead; I am at your service.",
    "ckb": "فەرموو، هام لە خزمەتتدا.",
    "hac": "فەرماوە، هەنا خزمەتتنە.",
    "align": [
     {
      "ckb": "فەرموو",
      "hac": "فەرماوە",
      "k": "cognate"
     },
     {
      "ckb": "هام",
      "hac": "هەنا",
      "k": "cognate",
      "note": "“I am (here)”"
     },
     {
      "ckb": "لە",
      "hac": "",
      "k": "only"
     },
     {
      "ckb": "خزمەت",
      "hac": "خزمەت",
      "k": "same"
     },
     {
      "ckb": "ـت",
      "hac": "ـت",
      "k": "same"
     },
     {
      "ckb": "ـدا",
      "hac": "ـنە",
      "k": "grammar",
      "note": "“in, at”, after the noun"
     }
    ],
    "src": "C"
   },
   {
    "id": "ex_08",
    "en": "The pupil is at school.",
    "ckb": "قوتابییەکە لە قوتابخانەیە.",
    "hac": "مسیارەکە هەن وانگانە.",
    "align": [
     {
      "ckb": "قوتابی",
      "hac": "مسیار",
      "k": "different"
     },
     {
      "ckb": "یەکە",
      "hac": "ەکە",
      "k": "same",
      "note": "masculine “the”"
     },
     {
      "ckb": "یە",
      "hac": "هەن",
      "k": "cognate",
      "note": "“is (there)”"
     },
     {
      "ckb": "لە",
      "hac": "",
      "k": "only",
      "note": "Hawrami puts “at” after the noun"
     },
     {
      "ckb": "قوتابخانە",
      "hac": "وانگا",
      "k": "different"
     },
     {
      "ckb": "",
      "hac": "ـنە",
      "k": "only",
      "note": "“at, in”"
     }
    ],
    "src": "C"
   },
   {
    "id": "ex_09",
    "en": "Is there nobody there?",
    "ckb": "کەسێک لەوێ نییە؟",
    "hac": "کەسێو نیەن چاگەنە؟",
    "align": [
     {
      "ckb": "کەس",
      "hac": "کەس",
      "k": "same"
     },
     {
      "ckb": "ێک",
      "hac": "ێو",
      "k": "grammar",
      "note": "“a” (masculine)"
     },
     {
      "ckb": "نییە",
      "hac": "نیەن",
      "k": "cognate",
      "note": "masculine “there is not”"
     },
     {
      "ckb": "لەوێ",
      "hac": "چاگەنە",
      "k": "different",
      "note": "جە + ئاگە + ـنە “there”"
     }
    ],
    "src": "C"
   }
  ],
  "pi": [
   {
    "id": "ex_pi1",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "هەنا چیگە",
    "options": [
     "I am here.",
     "You are here."
    ],
    "answer": 0,
    "why": {
     "en": "هەنا is “I am (here)”, with the same ـنا as خاسنا.",
     "ku": "هەنا واتە «هام، لێرەم»؛ هەمان ـنای «خاسنا»یە."
    },
    "src": "C"
   },
   {
    "id": "ex_pi2",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "هەنی چکۆ",
    "options": [
     "Where am I?",
     "Where are you?"
    ],
    "answer": 1,
    "why": {
     "en": "هەنی is “you are (somewhere)”.",
     "ku": "هەنی واتە «های، لە کوێی»."
    },
    "src": "C"
   },
   {
    "id": "ex_pi3",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "کناچەکا هەنێ ڕاوە",
    "options": [
     "The girls are on their way.",
     "The girl is on her way."
    ],
    "answer": 0,
    "why": {
     "en": "ـەکا and هەنێ are both plural.",
     "ku": "ـەکا و هەنێ هەردووکیان کۆن."
    },
    "src": "C"
   },
   {
    "id": "ex_pi4",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "دەگایێوە هەنە",
    "options": [
     "There is a village.",
     "There are villages."
    ],
    "answer": 0,
    "why": {
     "en": "هەنە is feminine singular; the plural would be هەنێ.",
     "ku": "هەنە بۆ تاکی مێیە؛ کۆکەی هەنێیە."
    },
    "src": "C"
   },
   {
    "id": "ex_pi5",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "کەرگیما نیەنە",
    "options": [
     "We have no hens.",
     "We have hens."
    ],
    "answer": 0,
    "why": {
     "en": "نیەنە is “there is not”, feminine.",
     "ku": "نیەنە واتە «نییە» بۆ مێ."
    },
    "src": "C"
   }
  ],
  "src": "C"
 },
 {
  "id": "pron",
  "order": 3,
  "level": "A1",
  "sieve": 5,
  "title": "He, she, this, that",
  "pattern": {
   "ckb": "ئەو / ئەمە",
   "hac": "ئاڎ / ئاڎە، ئینە / ئینێ",
   "en": "he / she, this"
  },
  "card": {
   "ckb>hac": {
    "en": "Sorani ئەو covers he and she; Hawrami splits it: ئاڎ (he), ئاڎە (she), ئاڎێ (they). “This” has gender too: ئینە for a masculine thing, ئینێ for a feminine one, ئێڎ / ئێڎە for people. Before a noun: ئی…ە (masculine), ئی…ێ (feminine), and a plural noun takes ـا: ئا یانا “those houses”. ئێوە is شمە.",
    "ku": "«ئەو»ی سۆرانی لە هەورامیدا دەبێتە دوو: ئاڎ بۆ نێر، ئاڎە بۆ مێ؛ کۆکەی ئاڎێیە. «ئەمە»ش ڕەگەزی هەیە: ئینە بۆ شتی نێر، ئینێ بۆ شتی مێ، ئێڎ و ئێڎە بۆ مرۆڤ. لە پێش ناودا: ئی…ە بۆ نێر، ئی…ێ بۆ مێ، و ناوی کۆ ـا وەردەگرێت: ئا یانا (ئەو ماڵانە). «ئێوە»ش دەبێتە شمە."
   }
  },
  "items": [
   {
    "id": "pr_01",
    "en": "They are going, so we are going too.",
    "ckb": "ئەوان دەڕۆن، جا ئێمەش دەڕۆین.",
    "hac": "ئاڎێ مەلا، جا ئێمەیچ مەلمێ.",
    "align": [
     {
      "ckb": "ئەوان",
      "hac": "ئاڎێ",
      "k": "cognate",
      "note": "“they”"
     },
     {
      "ckb": "دەڕۆن",
      "hac": "مەلا",
      "k": "different",
      "note": "present of لوای “go”: they"
     },
     {
      "ckb": "جا",
      "hac": "جا",
      "k": "same"
     },
     {
      "ckb": "ئێمە",
      "hac": "ئێمە",
      "k": "same"
     },
     {
      "ckb": "ش",
      "hac": "یچ",
      "k": "cognate",
      "note": "“too”"
     },
     {
      "ckb": "دەڕۆین",
      "hac": "مەلمێ",
      "k": "different",
      "note": "present of لوای: we"
     }
    ],
    "src": "C"
   },
   {
    "id": "pr_02",
    "en": "This is a woman.",
    "ckb": "ئەمە ژنە.",
    "hac": "ئێڎە ژەنینە.",
    "align": [
     {
      "ckb": "ئەمە",
      "hac": "ئێڎە",
      "k": "different",
      "note": "“this” for a woman"
     },
     {
      "ckb": "ژن",
      "hac": "ژەنی",
      "k": "cognate"
     },
     {
      "ckb": "ـە",
      "hac": "ـنە",
      "k": "grammar",
      "note": "feminine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "pr_03",
    "en": "This village is very far.",
    "ckb": "ئەم گوندە زۆر دوورە.",
    "hac": "ئی دەگایێ فرە دوورەنە.",
    "align": [
     {
      "ckb": "ئەم",
      "hac": "ئی",
      "k": "cognate"
     },
     {
      "ckb": "گوند",
      "hac": "دەگا",
      "k": "different"
     },
     {
      "ckb": "ـە",
      "hac": "ـیێ",
      "k": "grammar",
      "note": "feminine: ئی … ـێ"
     },
     {
      "ckb": "زۆر",
      "hac": "فرە",
      "k": "different"
     },
     {
      "ckb": "دوور",
      "hac": "دوور",
      "k": "same"
     },
     {
      "ckb": "ـە",
      "hac": "ـەنە",
      "k": "grammar",
      "note": "feminine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "pr_04",
    "en": "Those houses have fallen down.",
    "ckb": "ئەو ماڵانە ڕووخاون.",
    "hac": "ئا یانا وڕێنێ.",
    "align": [
     {
      "ckb": "ئەو",
      "hac": "ئا",
      "k": "cognate",
      "note": "“that, those”"
     },
     {
      "ckb": "ماڵ",
      "hac": "یان",
      "k": "different"
     },
     {
      "ckb": "ـانە",
      "hac": "ـا",
      "k": "grammar",
      "note": "plural noun after ئا"
     },
     {
      "ckb": "ڕووخاون",
      "hac": "وڕێنێ",
      "k": "different",
      "note": "perfect, plural"
     }
    ],
    "src": "C"
   },
   {
    "id": "pr_05",
    "en": "Take those hens for yourself.",
    "ckb": "ئەو مریشکانە ببە بۆ خۆت.",
    "hac": "ئوو کەرگا بەرە پەی وێت.",
    "align": [
     {
      "ckb": "ئەو",
      "hac": "ئوو",
      "k": "cognate",
      "note": "“that” (far away)"
     },
     {
      "ckb": "مریشک",
      "hac": "کەرگ",
      "k": "different"
     },
     {
      "ckb": "ـانە",
      "hac": "ـا",
      "k": "grammar",
      "note": "plural noun after ئوو"
     },
     {
      "ckb": "ببە",
      "hac": "بەرە",
      "k": "cognate",
      "note": "“take!”"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "خۆت",
      "hac": "وێت",
      "k": "sound",
      "rule": "xw-w"
     }
    ],
    "src": "C"
   },
   {
    "id": "pr_06",
    "en": "This one of them is cleverer.",
    "ckb": "ئەمەیان ژیرترە.",
    "hac": "ئێڎەشا ژیرتەرەنە.",
    "align": [
     {
      "ckb": "ئەمە",
      "hac": "ئێڎە",
      "k": "different",
      "note": "feminine “this”"
     },
     {
      "ckb": "یان",
      "hac": "شا",
      "k": "grammar",
      "note": "“of them”"
     },
     {
      "ckb": "ژیرتر",
      "hac": "ژیرتەر",
      "k": "cognate"
     },
     {
      "ckb": "ـە",
      "hac": "ـەنە",
      "k": "grammar",
      "note": "feminine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "pr_07",
    "en": "That one of them is whiter.",
    "ckb": "ئەوەیان سپیترە.",
    "hac": "ئانەشا چەرمەتەرەن.",
    "align": [
     {
      "ckb": "ئەوە",
      "hac": "ئانە",
      "k": "different",
      "note": "masculine “that”"
     },
     {
      "ckb": "یان",
      "hac": "شا",
      "k": "grammar",
      "note": "“of them”"
     },
     {
      "ckb": "سپیتر",
      "hac": "چەرمەتەر",
      "k": "different"
     },
     {
      "ckb": "ـە",
      "hac": "ـەن",
      "k": "grammar",
      "note": "masculine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "pr_08",
    "en": "Do they do it like that or not?",
    "ckb": "ئەوان وا دەکەن یان نا؟",
    "hac": "ئاڎیشا پاسە مەکەرا یام نا؟",
    "align": [
     {
      "ckb": "ئەوان",
      "hac": "ئاڎیشا",
      "k": "cognate",
      "note": "another form of “they”"
     },
     {
      "ckb": "وا",
      "hac": "پاسە",
      "k": "different"
     },
     {
      "ckb": "دەکەن",
      "hac": "مەکەرا",
      "k": "cognate",
      "note": "مە- + کەر + ـا"
     },
     {
      "ckb": "یان",
      "hac": "یام",
      "k": "cognate"
     },
     {
      "ckb": "نا",
      "hac": "نا",
      "k": "same"
     }
    ],
    "src": "C"
   }
  ],
  "pi": [
   {
    "id": "pr_pi1",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "ئاڎ",
    "options": [
     "he",
     "she"
    ],
    "answer": 0,
    "why": {
     "en": "ئاڎ is “he”; “she” adds ـە: ئاڎە.",
     "ku": "ئاڎ بۆ نێرە؛ مێکەی ـەی دەچێتە سەر: ئاڎە."
    },
    "src": "C"
   },
   {
    "id": "pr_pi2",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "ئاڎە",
    "options": [
     "he",
     "she"
    ],
    "answer": 1,
    "why": {
     "en": "The final ـە makes it feminine.",
     "ku": "ـەی کۆتایی مێی دەکات."
    },
    "src": "C"
   },
   {
    "id": "pr_pi3",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "ئاڎێ مەلا",
    "options": [
     "They are going.",
     "She is going."
    ],
    "answer": 0,
    "why": {
     "en": "ئاڎێ is “they”, and ـا is the “they” ending.",
     "ku": "ئاڎێ واتە «ئەوان»، ـاش کۆتایی «ئەوان»ە."
    },
    "src": "C"
   },
   {
    "id": "pr_pi4",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "ئینە",
    "options": [
     "this (a masculine thing)",
     "this (a feminine thing)"
    ],
    "answer": 0,
    "why": {
     "en": "ئینە ends in ـە: masculine. The feminine is ئینێ.",
     "ku": "ئینە بۆ شتی نێرە، ئینێ بۆ شتی مێ."
    },
    "src": "C"
   },
   {
    "id": "pr_pi5",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "ئینێ",
    "options": [
     "this (a masculine thing)",
     "this (a feminine thing)"
    ],
    "answer": 1,
    "why": {
     "en": "ئینێ ends in ـێ: feminine.",
     "ku": "ئینێ بۆ شتی مێیە."
    },
    "src": "C"
   }
  ],
  "src": "C"
 },
 {
  "id": "nouns",
  "order": 4,
  "level": "A2",
  "sieve": 5,
  "title": "Nouns: gender, “the”, “a” and the linking particle",
  "pattern": {
   "ckb": "[slot]ی ئێمە",
   "hac": "[slot]و ئێمە",
   "en": "our [slot]"
  },
  "card": {
   "ckb>hac": {
    "en": "Every Hawrami noun is masculine or feminine, so “the” and “a” have two shapes: ـەکە / ـەکێ and ـێو / ـێوە; plural “the” is ـەکا. The linking particle (Sorani ی) is وو after a consonant and و after a vowel, and the second word takes ی (masculine) or ێ (feminine): کتێبوو ئاڎێ “her book”.",
    "ku": "هەموو ناوێکی هەورامی یان نێرە یان مێ، بۆیە ناسراو و نەناسراو دوو شێوەیان هەیە: ـەکە بۆ نێر و ـەکێ بۆ مێ؛ ـێو بۆ نێر و ـێوە بۆ مێ؛ کۆی ناسراو ـەکایە. ئامرازی دانەپاڵ (ی) لە هەورامیدا دوای نەبزوێن وو و دوای بزوێن و دەبێت، وشەی دووەمیش ی (نێر) یان ێ (مێ) وەردەگرێت: کتێبوو ئاڎێ (کتێبی ئەو، مێ)."
   }
  },
  "items": [
   {
    "id": "nn_01",
    "en": "The mountain is very high.",
    "ckb": "کێوەکە زۆر بەرزە.",
    "hac": "کوەکە فرە بەرزەن.",
    "align": [
     {
      "ckb": "کێو",
      "hac": "کو",
      "k": "cognate",
      "note": "کۆ “mountain”, masculine"
     },
     {
      "ckb": "ەکە",
      "hac": "ەکە",
      "k": "same",
      "note": "masculine “the”"
     },
     {
      "ckb": "زۆر",
      "hac": "فرە",
      "k": "different"
     },
     {
      "ckb": "بەرز",
      "hac": "بەرز",
      "k": "same"
     },
     {
      "ckb": "ـە",
      "hac": "ـەن",
      "k": "grammar",
      "note": "masculine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "nn_02",
    "en": "The woman went back early.",
    "ckb": "ژنەکە زوو ڕۆیشتەوە.",
    "hac": "ژەنەکێ زوو لواوە.",
    "align": [
     {
      "ckb": "ژن",
      "hac": "ژەن",
      "k": "cognate"
     },
     {
      "ckb": "ەکە",
      "hac": "ەکێ",
      "k": "grammar",
      "note": "feminine “the”"
     },
     {
      "ckb": "زوو",
      "hac": "زوو",
      "k": "same"
     },
     {
      "ckb": "ڕۆیشتەوە",
      "hac": "لواوە",
      "k": "different",
      "note": "past of لوای + ـوە “back”"
     }
    ],
    "src": "C"
   },
   {
    "id": "nn_03",
    "en": "The boys have not come.",
    "ckb": "کوڕەکان نەهاتوون.",
    "hac": "کوڕەکا نامێنێ.",
    "align": [
     {
      "ckb": "کوڕ",
      "hac": "کوڕ",
      "k": "same"
     },
     {
      "ckb": "ەکان",
      "hac": "ەکا",
      "k": "cognate",
      "note": "plural “the”"
     },
     {
      "ckb": "نەهاتوون",
      "hac": "نامێنێ",
      "k": "cognate",
      "note": "نە + ئامێنێ “have come”"
     }
    ],
    "src": "C"
   },
   {
    "id": "nn_04",
    "en": "I saw a woman.",
    "ckb": "ژنێکم بینی.",
    "hac": "ژەنێوەم دیە.",
    "align": [
     {
      "ckb": "ژن",
      "hac": "ژەن",
      "k": "cognate"
     },
     {
      "ckb": "ێک",
      "hac": "ێوە",
      "k": "grammar",
      "note": "feminine “a”"
     },
     {
      "ckb": "ـم",
      "hac": "ـم",
      "k": "same",
      "note": "“I” as the doer"
     },
     {
      "ckb": "بینی",
      "hac": "دیە",
      "k": "grammar",
      "note": "“saw”: feminine, agrees with the woman"
     }
    ],
    "src": "C"
   },
   {
    "id": "nn_05",
    "en": "Our house is big.",
    "ckb": "ماڵی ئێمە گەورەیە.",
    "hac": "یانەو ئێمەی گەورەن.",
    "align": [
     {
      "ckb": "ماڵ",
      "hac": "یانە",
      "k": "different",
      "note": "house (not “club”)"
     },
     {
      "ckb": "ی",
      "hac": "و",
      "k": "grammar",
      "note": "linking particle after a vowel"
     },
     {
      "ckb": "ئێمە",
      "hac": "ئێمە",
      "k": "same"
     },
     {
      "ckb": "",
      "hac": "ی",
      "k": "only",
      "note": "ending on the second word; the grammar lesson omits it"
     },
     {
      "ckb": "گەورە",
      "hac": "گەورە",
      "k": "same"
     },
     {
      "ckb": "یە",
      "hac": "ن",
      "k": "grammar",
      "note": "masculine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "nn_06",
    "en": "Her book is with me.",
    "ckb": "کتێبی ئەو ها لای منەوە.",
    "hac": "کتێبوو ئاڎێ هەن لاو منوە.",
    "align": [
     {
      "ckb": "کتێب",
      "hac": "کتێب",
      "k": "same"
     },
     {
      "ckb": "ی",
      "hac": "وو",
      "k": "grammar",
      "note": "linking particle after a consonant"
     },
     {
      "ckb": "ئەو",
      "hac": "ئاڎێ",
      "k": "grammar",
      "note": "“her”: feminine form after the particle"
     },
     {
      "ckb": "ها",
      "hac": "هەن",
      "k": "cognate"
     },
     {
      "ckb": "لا",
      "hac": "لا",
      "k": "same"
     },
     {
      "ckb": "ی",
      "hac": "و",
      "k": "grammar",
      "note": "linking particle after a vowel"
     },
     {
      "ckb": "من",
      "hac": "من",
      "k": "same"
     },
     {
      "ckb": "ەوە",
      "hac": "وە",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "nn_07",
    "en": "The door of the houses is open.",
    "ckb": "دەرگای ماڵەکان کراوەیە.",
    "hac": "بەرەو یانەکا وازەن.",
    "align": [
     {
      "ckb": "دەرگا",
      "hac": "بەرە",
      "k": "sound",
      "rule": "der-ber"
     },
     {
      "ckb": "ی",
      "hac": "و",
      "k": "grammar",
      "note": "linking particle"
     },
     {
      "ckb": "ماڵ",
      "hac": "یان",
      "k": "different"
     },
     {
      "ckb": "ەکان",
      "hac": "ەکا",
      "k": "cognate",
      "note": "plural “the”: no ی after it"
     },
     {
      "ckb": "کراوە",
      "hac": "واز",
      "k": "different"
     },
     {
      "ckb": "یە",
      "hac": "ەن",
      "k": "grammar",
      "note": "masculine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "nn_08",
    "en": "Black eyes are beautiful.",
    "ckb": "چاوی ڕەش جوانن.",
    "hac": "چەمێ سیاوێ، زەریفێنێ.",
    "align": [
     {
      "ckb": "چاو",
      "hac": "چەمێ",
      "k": "grammar",
      "note": "plural noun"
     },
     {
      "ckb": "ی",
      "hac": "",
      "k": "only"
     },
     {
      "ckb": "ڕەش",
      "hac": "سیاوێ",
      "k": "different",
      "note": "plural adjective"
     },
     {
      "ckb": "جوان",
      "hac": "زەریفێ",
      "k": "different",
      "note": "plural adjective"
     },
     {
      "ckb": "ـن",
      "hac": "ـنێ",
      "k": "grammar",
      "note": "plural “are”"
     }
    ],
    "src": "C"
   },
   {
    "id": "nn_09",
    "en": "A new jug has sweet water. (proverb)",
    "ckb": "گۆزەی تازە ئاوی خۆشە.",
    "hac": "گۆزێ تازێ ئاویش وەشەنە.",
    "align": [
     {
      "ckb": "گۆزە",
      "hac": "گۆزێ",
      "k": "cognate",
      "note": "feminine noun"
     },
     {
      "ckb": "ی",
      "hac": "",
      "k": "only",
      "note": "no particle before the adjective here"
     },
     {
      "ckb": "تازە",
      "hac": "تازێ",
      "k": "grammar",
      "note": "feminine adjective"
     },
     {
      "ckb": "ئاو",
      "hac": "ئاوی",
      "k": "cognate",
      "note": "feminine noun"
     },
     {
      "ckb": "ی",
      "hac": "ش",
      "k": "grammar",
      "note": "“its”: clitic ـش"
     },
     {
      "ckb": "خۆش",
      "hac": "وەش",
      "k": "sound",
      "rule": "xw-w"
     },
     {
      "ckb": "ـە",
      "hac": "ـەنە",
      "k": "grammar",
      "note": "feminine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "nn_10",
    "en": "A ripe plum is sweet.",
    "ckb": "هەڵووژەی پێگەیشتوو شیرینە.",
    "hac": "هەڵووچەی یاوا شیرینەن.",
    "align": [
     {
      "ckb": "هەڵووژە",
      "hac": "هەڵووچە",
      "k": "cognate"
     },
     {
      "ckb": "ی",
      "hac": "ی",
      "k": "same",
      "note": "before an adjective: ی, as in Sorani"
     },
     {
      "ckb": "پێگەیشتوو",
      "hac": "یاوا",
      "k": "different",
      "note": "“ripe”, from یاوای “arrive”"
     },
     {
      "ckb": "شیرین",
      "hac": "شیرین",
      "k": "same"
     },
     {
      "ckb": "ـە",
      "hac": "ـەن",
      "k": "grammar",
      "note": "masculine “is”"
     }
    ],
    "src": "C"
   }
  ],
  "pi": [
   {
    "id": "nn_pi1",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "ژەنەکێ",
    "options": [
     "the woman",
     "the women"
    ],
    "answer": 0,
    "why": {
     "en": "ـەکێ is feminine singular “the”; the plural is ـەکا.",
     "ku": "ـەکێ بۆ تاکی مێیە؛ کۆکەی ـەکایە."
    },
    "src": "C"
   },
   {
    "id": "nn_pi2",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "کوڕەکا",
    "options": [
     "the boys",
     "the boy"
    ],
    "answer": 0,
    "why": {
     "en": "ـەکا is plural “the”.",
     "ku": "ـەکا وەک ـەکانی سۆرانییە."
    },
    "src": "C"
   },
   {
    "id": "nn_pi3",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "کوەکە",
    "options": [
     "the mountain",
     "a mountain"
    ],
    "answer": 0,
    "why": {
     "en": "ـەکە is masculine “the”; “a” would be ـێو.",
     "ku": "ـەکە ناسراوی نێرە؛ نەناسراو ـێو دەبێت."
    },
    "src": "C"
   },
   {
    "id": "nn_pi4",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "ژەنێوەم دیە",
    "options": [
     "I saw a woman.",
     "I saw the woman."
    ],
    "answer": 0,
    "why": {
     "en": "ـێوە is feminine “a”; “the woman” would be ژەنەکێ.",
     "ku": "ـێوە نەناسراوی مێیە؛ «ژنەکە» دەبێتە ژەنەکێ."
    },
    "src": "C"
   },
   {
    "id": "nn_pi5",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "کتێبوو ئاڎێ",
    "options": [
     "her book",
     "his book"
    ],
    "answer": 0,
    "why": {
     "en": "After the linking particle, ئاڎێ is “her”; “his” is ئاڎی.",
     "ku": "دوای ئامرازی دانەپاڵ، ئاڎێ واتە «ئەو»ی مێ؛ بۆ نێر ئاڎی دەڵێن."
    },
    "src": "C"
   },
   {
    "id": "nn_pi6",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "سەرەو ئاڎی",
    "options": [
     "his head",
     "her head"
    ],
    "answer": 0,
    "why": {
     "en": "ئاڎی with ی is the masculine form after the particle.",
     "ku": "ئاڎی بە ی بۆ نێرە."
    },
    "src": "C"
   }
  ],
  "src": "C"
 },
 {
  "id": "present",
  "order": 5,
  "level": "A1",
  "sieve": 4,
  "title": "The present: مە- instead of دە-",
  "pattern": {
   "ckb": "دە[slot]م",
   "hac": "مە[slot]وو",
   "en": "I [slot]"
  },
  "card": {
   "ckb>hac": {
    "en": "The present has a prefix, as in Sorani, but it is مە- instead of دە-: مەلوو “I go”, مەزانی “you know”. The endings are ـوو، ـی، ـۆ، ـمێ، ـدێ، ـا. The negative is نمە-: نمەو “I'm not coming”. Watch out: this مە- is not your “don't”.",
    "ku": "ڕانەبردوو وەک سۆرانی پێشگری هەیە، بەڵام لە جیاتی دە-، مە-یە: مەلوو (دەڕۆم)، مەزانی (دەزانیت). کۆتاییەکان: ـوو، ـی، ـۆ، ـمێ، ـدێ، ـا. نەرێکەی بە نمە- دروست دەبێت: نمەو (نایەم). ئاگادار بە: ئەم مە-یە «مەکە»ی سۆرانی نییە."
   }
  },
  "items": [
   {
    "id": "ps_01",
    "en": "I am going to our house.",
    "ckb": "دەڕۆم بۆ ماڵی خۆمان.",
    "hac": "مەلوو پەی یانەو وێما.",
    "align": [
     {
      "ckb": "دەڕۆم",
      "hac": "مەلوو",
      "k": "different",
      "note": "مە- + ل + ـوو “I”"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "ماڵ",
      "hac": "یانە",
      "k": "different"
     },
     {
      "ckb": "ی",
      "hac": "و",
      "k": "grammar",
      "note": "linking particle"
     },
     {
      "ckb": "خۆمان",
      "hac": "وێما",
      "k": "sound",
      "rule": "xw-w"
     }
    ],
    "src": "C"
   },
   {
    "id": "ps_02",
    "en": "I am not coming. Are you coming?",
    "ckb": "من نایەم، تۆ دێیت؟",
    "hac": "من نمەو، تۆ مەی؟",
    "align": [
     {
      "ckb": "من",
      "hac": "من",
      "k": "same"
     },
     {
      "ckb": "نایەم",
      "hac": "نمەو",
      "k": "grammar",
      "note": "negative نمە-"
     },
     {
      "ckb": "تۆ",
      "hac": "تۆ",
      "k": "same"
     },
     {
      "ckb": "دێیت",
      "hac": "مەی",
      "k": "grammar",
      "note": "“you come”"
     }
    ],
    "src": "C"
   },
   {
    "id": "ps_03",
    "en": "Are you coming to class tomorrow?",
    "ckb": "سبەی دێیت بۆ کلاس؟",
    "hac": "سەبا مەی پەی کەلاسی؟",
    "align": [
     {
      "ckb": "سبەی",
      "hac": "سەبا",
      "k": "cognate"
     },
     {
      "ckb": "دێیت",
      "hac": "مەی",
      "k": "grammar",
      "note": "“you come”"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "کلاس",
      "hac": "کەلاس",
      "k": "cognate"
     },
     {
      "ckb": "",
      "hac": "ی",
      "k": "only",
      "note": "ending after پەی"
     }
    ],
    "src": "C"
   },
   {
    "id": "ps_04",
    "en": "When are you going?",
    "ckb": "کەی دەڕۆیت؟",
    "hac": "کەی مەلی؟",
    "align": [
     {
      "ckb": "کەی",
      "hac": "کەی",
      "k": "same"
     },
     {
      "ckb": "دەڕۆیت",
      "hac": "مەلی",
      "k": "different",
      "note": "present of لوای: you"
     }
    ],
    "src": "C"
   },
   {
    "id": "ps_05",
    "en": "You know better.",
    "ckb": "تۆ باشتر دەزانیت.",
    "hac": "تۆ خاستەر مەزانی.",
    "align": [
     {
      "ckb": "تۆ",
      "hac": "تۆ",
      "k": "same"
     },
     {
      "ckb": "باشتر",
      "hac": "خاستەر",
      "k": "different"
     },
     {
      "ckb": "دە",
      "hac": "مە",
      "k": "grammar",
      "note": "present prefix"
     },
     {
      "ckb": "زانیت",
      "hac": "زانی",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "ps_06",
    "en": "What are you doing here?",
    "ckb": "لێرە چی دەکەیت؟",
    "hac": "چیگەنە چێش مەکەری؟",
    "align": [
     {
      "ckb": "لێرە",
      "hac": "چیگەنە",
      "k": "different",
      "note": "“here”: جە + ئیگە + ـنە"
     },
     {
      "ckb": "چی",
      "hac": "چێش",
      "k": "cognate",
      "note": "“what” (چی is “why”)"
     },
     {
      "ckb": "دە",
      "hac": "مە",
      "k": "grammar",
      "note": "present prefix"
     },
     {
      "ckb": "کەیت",
      "hac": "کەری",
      "k": "cognate",
      "note": "stem کەر-"
     }
    ],
    "src": "C"
   },
   {
    "id": "ps_07",
    "en": "You say nothing. How are we supposed to know?",
    "ckb": "ئێوە هیچ ناڵێن، ئێمە چۆن بزانین؟",
    "hac": "شمە هیچ نمەواچدێ، ئێمە چەنی بزانمێ؟",
    "align": [
     {
      "ckb": "ئێوە",
      "hac": "شمە",
      "k": "different"
     },
     {
      "ckb": "هیچ",
      "hac": "هیچ",
      "k": "same"
     },
     {
      "ckb": "ناڵێن",
      "hac": "نمەواچدێ",
      "k": "grammar",
      "note": "نمە- + واچ “say” + ـدێ “you all”"
     },
     {
      "ckb": "ئێمە",
      "hac": "ئێمە",
      "k": "same"
     },
     {
      "ckb": "چۆن",
      "hac": "چەنی",
      "k": "cognate"
     },
     {
      "ckb": "بزانین",
      "hac": "بزانمێ",
      "k": "grammar",
      "note": "ب- as in Sorani; ـمێ “we”"
     }
    ],
    "src": "C"
   },
   {
    "id": "ps_08",
    "en": "I write the lessons myself.",
    "ckb": "خۆم وانەکان دەنووسم.",
    "hac": "وێم وانەکای مەنویسوو.",
    "align": [
     {
      "ckb": "خۆم",
      "hac": "وێم",
      "k": "sound",
      "rule": "xw-w"
     },
     {
      "ckb": "وانە",
      "hac": "وانە",
      "k": "same"
     },
     {
      "ckb": "کان",
      "hac": "کای",
      "k": "cognate",
      "note": "plural “the”"
     },
     {
      "ckb": "دەنووسم",
      "hac": "مەنویسوو",
      "k": "grammar",
      "note": "مە- + نویس + ـوو"
     }
    ],
    "src": "C"
   },
   {
    "id": "ps_09",
    "en": "They are coming here.",
    "ckb": "دێن بۆ ئێرە.",
    "hac": "مەیا پەی ئیگەی.",
    "align": [
     {
      "ckb": "دێن",
      "hac": "مەیا",
      "k": "grammar",
      "note": "“they come”"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "ئێرە",
      "hac": "ئیگەی",
      "k": "cognate",
      "note": "“here” + ی after پەی"
     }
    ],
    "src": "C"
   },
   {
    "id": "ps_10",
    "en": "Yes, I know. Why?",
    "ckb": "ئا، دەزانم. بۆ چی؟",
    "hac": "ئا، مەزانوو. پەی چێشی؟",
    "align": [
     {
      "ckb": "ئا",
      "hac": "ئا",
      "k": "same"
     },
     {
      "ckb": "دە",
      "hac": "مە",
      "k": "grammar",
      "note": "present prefix"
     },
     {
      "ckb": "زانم",
      "hac": "زانوو",
      "k": "cognate",
      "note": "“I”: ـوو"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "چی",
      "hac": "چێشی",
      "k": "cognate",
      "note": "چێش “what” + ی after پەی"
     }
    ],
    "src": "C"
   }
  ],
  "pi": [
   {
    "id": "ps_pi1",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "مەلوو",
    "options": [
     "I am going.",
     "Don't go!"
    ],
    "answer": 0,
    "why": {
     "en": "مە- here is the present, like دە-. “Don't go” is مەلە.",
     "ku": "مە- لێرە وەک دە-ی سۆرانییە. «مەڕۆ» دەبێتە مەلە."
    },
    "src": "C"
   },
   {
    "id": "ps_pi2",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "مەلی",
    "options": [
     "You are going.",
     "We are going."
    ],
    "answer": 0,
    "why": {
     "en": "ـی is “you”; “we” is ـمێ.",
     "ku": "ـی بۆ «تۆ»یە؛ «ئێمە» ـمێیە."
    },
    "src": "C"
   },
   {
    "id": "ps_pi3",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "مەلمێ",
    "options": [
     "We are going.",
     "They are going."
    ],
    "answer": 0,
    "why": {
     "en": "ـمێ is “we”.",
     "ku": "ـمێ واتە «ـین»ی سۆرانی."
    },
    "src": "C"
   },
   {
    "id": "ps_pi4",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "مەلا",
    "options": [
     "They are going.",
     "I am going."
    ],
    "answer": 0,
    "why": {
     "en": "ـا is “they”; “I” is ـوو.",
     "ku": "ـا بۆ «ئەوان»ە؛ «من» ـوو."
    },
    "src": "C"
   },
   {
    "id": "ps_pi5",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "نمەو",
    "options": [
     "I am not coming.",
     "I am coming."
    ],
    "answer": 0,
    "why": {
     "en": "نمە- is the negative of the present.",
     "ku": "نمە- نەرێی ڕانەبردووە."
    },
    "src": "C"
   },
   {
    "id": "ps_pi6",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "مەزانوو",
    "options": [
     "I know.",
     "You know."
    ],
    "answer": 0,
    "why": {
     "en": "ـوو is “I”, like Sorani ـم.",
     "ku": "ـوو وەک ـمی سۆرانییە: دەزانم."
    },
    "src": "C"
   }
  ],
  "src": "C"
 },
 {
  "id": "past_intr",
  "order": 6,
  "level": "A2",
  "sieve": 5,
  "title": "The past without an object: he went, she went",
  "pattern": {
   "ckb": "[slot] هات",
   "hac": "[slot] ئاما",
   "en": "[slot] came"
  },
  "card": {
   "ckb>hac": {
    "en": "Without an object the past is close to Sorani: past stem plus person ending, and نە- for “not”. The new part is gender in the third person: وت “he slept”, وتە “she slept”. An adjective with بی “became” agrees too: تووڕێ بیەی “you (a woman) got angry”. The plural takes ـێ: ئامێ “they came”.",
    "ku": "ڕابردووی بێ بەرکار لە سۆرانییەوە نزیکە: ڕەگی ڕابردوو و کۆتایی کەس، و نە- بۆ نەرێ. تازەکە ئەوەیە کە کەسی سێیەم نێر و مێ جیا دەکاتەوە: وت (ئەو خەوت، نێر)، وتە (ئەو خەوت، مێ). ئاوەڵناویش دەگونجێت: تووڕێ بیەی (تووڕە بوویت، بۆ ئافرەت). کۆ ـێ وەردەگرێت: ئامێ (هاتن)."
   }
  },
  "items": [
   {
    "id": "pin_01",
    "en": "She fell asleep, but I could not sleep.",
    "ckb": "ئەو خەوت، بەڵام من خەوم لێ نەکەوت.",
    "hac": "ئاڎە وتە، وەلێم من وەرمم پۆرە نەکەوت.",
    "align": [
     {
      "ckb": "ئەو",
      "hac": "ئاڎە",
      "k": "cognate",
      "note": "“she”"
     },
     {
      "ckb": "خەوت",
      "hac": "وت",
      "k": "sound",
      "rule": "xw-w"
     },
     {
      "ckb": "",
      "hac": "ـە",
      "k": "only",
      "note": "feminine: she slept"
     },
     {
      "ckb": "بەڵام",
      "hac": "وەلێم",
      "k": "different"
     },
     {
      "ckb": "من",
      "hac": "من",
      "k": "same"
     },
     {
      "ckb": "خەو",
      "hac": "وەرم",
      "k": "different",
      "note": "“sleep” (not “swelling”)"
     },
     {
      "ckb": "ـم",
      "hac": "ـم",
      "k": "same"
     },
     {
      "ckb": "لێ",
      "hac": "پۆرە",
      "k": "different",
      "note": "preverb “on, onto”"
     },
     {
      "ckb": "نەکەوت",
      "hac": "نەکەوت",
      "k": "same"
     }
    ],
    "src": "C"
   },
   {
    "id": "pin_02",
    "en": "Who came to your house?",
    "ckb": "کێ هات بۆ ماڵتان؟",
    "hac": "کێ ئاما پەی یانەیتا؟",
    "align": [
     {
      "ckb": "کێ",
      "hac": "کێ",
      "k": "same"
     },
     {
      "ckb": "هات",
      "hac": "ئاما",
      "k": "cognate"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "ماڵ",
      "hac": "یانە",
      "k": "different"
     },
     {
      "ckb": "",
      "hac": "ی",
      "k": "only",
      "note": "ending after پەی"
     },
     {
      "ckb": "تان",
      "hac": "تا",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "pin_03",
    "en": "The women came.",
    "ckb": "ژنەکان هاتن.",
    "hac": "ژەنی ئامێ.",
    "align": [
     {
      "ckb": "ژنەکان",
      "hac": "ژەنی",
      "k": "cognate",
      "note": "ژەنی: woman or women"
     },
     {
      "ckb": "هاتن",
      "hac": "ئامێ",
      "k": "cognate",
      "note": "plural: ـێ"
     }
    ],
    "src": "C"
   },
   {
    "id": "pin_04",
    "en": "Serberz came here.",
    "ckb": "سەربەرز هات بۆ ئێرە.",
    "hac": "سەربەرز ئاما پەی ئیگەی.",
    "align": [
     {
      "ckb": "سەربەرز",
      "hac": "سەربەرز",
      "k": "same",
      "note": "a man's name"
     },
     {
      "ckb": "هات",
      "hac": "ئاما",
      "k": "cognate"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "ئێرە",
      "hac": "ئیگەی",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "pin_05",
    "en": "Sirwe went to the spring.",
    "ckb": "سروە چوو بۆ سەر کانی.",
    "hac": "سروە لوا پەی سەروو هانەی.",
    "align": [
     {
      "ckb": "سروە",
      "hac": "سروە",
      "k": "same",
      "note": "a woman's name"
     },
     {
      "ckb": "چوو",
      "hac": "لوا",
      "k": "different",
      "note": "لوا: the same for he and she"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "سەر",
      "hac": "سەروو",
      "k": "cognate"
     },
     {
      "ckb": "کانی",
      "hac": "هانەی",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "pin_06",
    "en": "Why did you get angry?",
    "ckb": "بۆ تووڕە بوویت؟",
    "hac": "چی تووڕێ بیەی؟",
    "align": [
     {
      "ckb": "بۆ",
      "hac": "چی",
      "k": "different",
      "note": "“why”, not “what”"
     },
     {
      "ckb": "تووڕە",
      "hac": "تووڕێ",
      "k": "grammar",
      "note": "feminine adjective: said to a woman"
     },
     {
      "ckb": "بوویت",
      "hac": "بیەی",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "pin_07",
    "en": "Last year at this time we got wet in the rain.",
    "ckb": "پار لەم کاتەدا لەژێر باراندا تەڕ بووین.",
    "hac": "پار ئی وەختە چێروو وارانینە تەڕێ بیەیمێ.",
    "align": [
     {
      "ckb": "پار",
      "hac": "پار",
      "k": "same"
     },
     {
      "ckb": "لەم",
      "hac": "ئی",
      "k": "grammar"
     },
     {
      "ckb": "کات",
      "hac": "وەخت",
      "k": "different"
     },
     {
      "ckb": "ەدا",
      "hac": "ە",
      "k": "grammar",
      "note": "ئی … ـە: “this”"
     },
     {
      "ckb": "لەژێر",
      "hac": "چێروو",
      "k": "cognate"
     },
     {
      "ckb": "باران",
      "hac": "واران",
      "k": "sound",
      "rule": "b-w"
     },
     {
      "ckb": "دا",
      "hac": "ینە",
      "k": "grammar",
      "note": "“in”, after the noun"
     },
     {
      "ckb": "تەڕ",
      "hac": "تەڕێ",
      "k": "grammar",
      "note": "plural adjective"
     },
     {
      "ckb": "بووین",
      "hac": "بیەیمێ",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "pin_08",
    "en": "It did not snow this year.",
    "ckb": "ئەمساڵ بەفر نەباری.",
    "hac": "ئێساڵ وەروە نەوارا.",
    "align": [
     {
      "ckb": "ئەمساڵ",
      "hac": "ئێساڵ",
      "k": "cognate"
     },
     {
      "ckb": "بەفر",
      "hac": "وەروە",
      "k": "sound",
      "rule": "b-w"
     },
     {
      "ckb": "نەباری",
      "hac": "نەوارا",
      "k": "sound",
      "rule": "b-w"
     }
    ],
    "src": "C"
   },
   {
    "id": "pin_09",
    "en": "Where did you rush off to?",
    "ckb": "بە پەلە بۆ کوێ دەرچوویت؟",
    "hac": "ئازا پەی کۆگەی بەرشیەی؟",
    "align": [
     {
      "ckb": "بە پەلە",
      "hac": "ئازا",
      "k": "different",
      "note": "“quickly”"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "کوێ",
      "hac": "کۆگەی",
      "k": "cognate"
     },
     {
      "ckb": "دەرچوویت",
      "hac": "بەرشیەی",
      "k": "sound",
      "rule": "der-ber"
     }
    ],
    "src": "C"
   },
   {
    "id": "pin_10",
    "en": "Everyone has fallen asleep.",
    "ckb": "هەموو خەوتوون.",
    "hac": "گرد وتێنێ.",
    "align": [
     {
      "ckb": "هەموو",
      "hac": "گرد",
      "k": "different",
      "note": "“all”, not “hill”"
     },
     {
      "ckb": "خەوتوون",
      "hac": "وتێنێ",
      "k": "sound",
      "rule": "xw-w"
     }
    ],
    "src": "C"
   }
  ],
  "pi": [
   {
    "id": "pin_pi1",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "ئاڎە وتە",
    "options": [
     "She fell asleep.",
     "He fell asleep."
    ],
    "answer": 0,
    "why": {
     "en": "وتە ends in ـە: a woman slept.",
     "ku": "وتە بە ـە کۆتایی دێت: ئافرەتێک خەوت."
    },
    "src": "C"
   },
   {
    "id": "pin_pi2",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "وت",
    "options": [
     "He fell asleep.",
     "She fell asleep."
    ],
    "answer": 0,
    "why": {
     "en": "Bare وت is masculine. And it means “slept”, not “said”.",
     "ku": "«وت» بێ پاشگر بۆ نێرە. واتاکەشی «خەوت»ە، نەک «وتی»."
    },
    "src": "C"
   },
   {
    "id": "pin_pi3",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "ئامێ",
    "options": [
     "They came.",
     "He came."
    ],
    "answer": 0,
    "why": {
     "en": "ـێ marks the plural.",
     "ku": "ـێ نیشانەی کۆیە."
    },
    "src": "C"
   },
   {
    "id": "pin_pi4",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "ئاما",
    "options": [
     "He came.",
     "They came."
    ],
    "answer": 0,
    "why": {
     "en": "ئاما with no ending is “he came” (or “she came”).",
     "ku": "ئاما بێ پاشگر واتە «هات»."
    },
    "src": "C"
   },
   {
    "id": "pin_pi5",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "بیەیمێ",
    "options": [
     "We became.",
     "You became."
    ],
    "answer": 0,
    "why": {
     "en": "ـیمێ is “we”.",
     "ku": "ـیمێ واتە «ـین»."
    },
    "src": "C"
   },
   {
    "id": "pin_pi6",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "تووڕێ بیەی",
    "options": [
     "You (a woman) got angry.",
     "You (a man) got angry."
    ],
    "answer": 0,
    "why": {
     "en": "تووڕێ is the feminine form of the adjective.",
     "ku": "تووڕێ شێوەی مێی ئاوەڵناوەکەیە."
    },
    "src": "C"
   }
  ],
  "src": "C"
 },
 {
  "id": "past_tr",
  "order": 7,
  "level": "A2",
  "sieve": 5,
  "title": "The past with an object: the verb follows the object",
  "pattern": {
   "ckb": "[slot]م برد",
   "hac": "[slot]م بەرد / بەردە",
   "en": "I took [slot]"
  },
  "card": {
   "ckb>hac": {
    "en": "As in Sorani, the doer of a past verb with an object is a clitic: ـم، ـت، ـش، ـما، ـتا، ـشا. The new part: the verb agrees with the object. بەردم “I took him”, بەردەم “I took her”, بەردێم “I took them”. A named doer with no clitic takes ـی (masculine) or ـێ (feminine): لوقمانی وات “Luqman said”.",
    "ku": "وەک سۆرانی، بکەری ڕابردووی تێپەڕ جێناوێکی لکاوە: ـم، ـت، ـش، ـما، ـتا، ـشا. تازەکە ئەوەیە کە کارەکە لەگەڵ بەرکاردا دەگونجێت: بەردم (ئەوم برد، نێر)، بەردەم (مێ)، بەردێم (کۆ). ئەگەر بکەر ناو بێت و جێناوی لکاوی لەگەڵ نەبێت، ـی (نێر) یان ـێ (مێ) وەردەگرێت: لوقمانی وات (لوقمان وتی)."
   }
  },
  "items": [
   {
    "id": "pt_01",
    "en": "I took Rojîn.",
    "ckb": "ڕۆژینم برد.",
    "hac": "ڕۆژینەم بەردە.",
    "align": [
     {
      "ckb": "ڕۆژین",
      "hac": "ڕۆژینە",
      "k": "grammar",
      "note": "a woman's name, with feminine ـە"
     },
     {
      "ckb": "ـم",
      "hac": "ـم",
      "k": "same",
      "note": "“I” as the doer"
     },
     {
      "ckb": "برد",
      "hac": "بەرد",
      "k": "cognate"
     },
     {
      "ckb": "",
      "hac": "ـە",
      "k": "only",
      "note": "agrees with a feminine object"
     }
    ],
    "src": "C"
   },
   {
    "id": "pt_02",
    "en": "We ate our food and set off.",
    "ckb": "چێشتمان خوارد و کەوتینە ڕێ.",
    "hac": "چاشتیما واردە و کەوتیمێ ڕا.",
    "align": [
     {
      "ckb": "چێشت",
      "hac": "چاشتی",
      "k": "cognate"
     },
     {
      "ckb": "مان",
      "hac": "ما",
      "k": "cognate",
      "note": "“we” as the doer"
     },
     {
      "ckb": "خوارد",
      "hac": "وارد",
      "k": "sound",
      "rule": "xw-w"
     },
     {
      "ckb": "",
      "hac": "ـە",
      "k": "only",
      "note": "agrees with the food (feminine)"
     },
     {
      "ckb": "و",
      "hac": "و",
      "k": "same"
     },
     {
      "ckb": "کەوتین",
      "hac": "کەوتیمێ",
      "k": "cognate",
      "note": "no object: normal ending"
     },
     {
      "ckb": "ە",
      "hac": "",
      "k": "only"
     },
     {
      "ckb": "ڕێ",
      "hac": "ڕا",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "pt_03",
    "en": "I took two saplings to them.",
    "ckb": "دوو نەمامم برد بۆیان.",
    "hac": "دوێ نەمامێم بەردێ پەیشا.",
    "align": [
     {
      "ckb": "دوو",
      "hac": "دوێ",
      "k": "cognate"
     },
     {
      "ckb": "نەمام",
      "hac": "نەمامێ",
      "k": "grammar",
      "note": "plural after a number"
     },
     {
      "ckb": "ـم",
      "hac": "ـم",
      "k": "same"
     },
     {
      "ckb": "برد",
      "hac": "بەرد",
      "k": "cognate"
     },
     {
      "ckb": "",
      "hac": "ـێ",
      "k": "only",
      "note": "agrees with a plural object"
     },
     {
      "ckb": "بۆیان",
      "hac": "پەیشا",
      "k": "grammar",
      "note": "پەی + ـشا “for them”"
     }
    ],
    "src": "C"
   },
   {
    "id": "pt_04",
    "en": "I threw a stone to him.",
    "ckb": "بەردێکم خست بۆی.",
    "hac": "تەونێوەم وستە پەیش.",
    "align": [
     {
      "ckb": "بەرد",
      "hac": "تەون",
      "k": "different",
      "note": "تەوەنە “stone”, feminine"
     },
     {
      "ckb": "ێک",
      "hac": "ێوە",
      "k": "grammar",
      "note": "feminine “a”"
     },
     {
      "ckb": "ـم",
      "hac": "ـم",
      "k": "same"
     },
     {
      "ckb": "خست",
      "hac": "وست",
      "k": "sound",
      "rule": "xw-w"
     },
     {
      "ckb": "",
      "hac": "ـە",
      "k": "only",
      "note": "agrees with a feminine object"
     },
     {
      "ckb": "بۆی",
      "hac": "پەیش",
      "k": "grammar"
     }
    ],
    "src": "C"
   },
   {
    "id": "pt_05",
    "en": "He took his own share.",
    "ckb": "بەشی خۆی بردی.",
    "hac": "بەشوو وێش بەردش.",
    "align": [
     {
      "ckb": "بەش",
      "hac": "بەش",
      "k": "same"
     },
     {
      "ckb": "ی",
      "hac": "وو",
      "k": "grammar",
      "note": "linking particle"
     },
     {
      "ckb": "خۆی",
      "hac": "وێش",
      "k": "sound",
      "rule": "xw-w"
     },
     {
      "ckb": "برد",
      "hac": "بەرد",
      "k": "cognate",
      "note": "masculine object: no ending"
     },
     {
      "ckb": "ی",
      "hac": "ش",
      "k": "grammar",
      "note": "“he” as the doer"
     }
    ],
    "src": "C"
   },
   {
    "id": "pt_06",
    "en": "Luqman said: Get going.",
    "ckb": "لوقمان وتی: بکەوە ڕێ.",
    "hac": "لوقمانی وات: گنە ڕا.",
    "align": [
     {
      "ckb": "لوقمان",
      "hac": "لوقمان",
      "k": "same"
     },
     {
      "ckb": "",
      "hac": "ی",
      "k": "only",
      "note": "doer marker on a masculine name"
     },
     {
      "ckb": "وت",
      "hac": "وات",
      "k": "cognate"
     },
     {
      "ckb": "ی",
      "hac": "",
      "k": "only"
     },
     {
      "ckb": "بکەوە",
      "hac": "گنە",
      "k": "different",
      "note": "“fall!”, from گنای"
     },
     {
      "ckb": "ڕێ",
      "hac": "ڕا",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "pt_07",
    "en": "I have put my book there.",
    "ckb": "کتێبەکەم لەوێ داناوە.",
    "hac": "کتێبەکەم چاگە نیانرە.",
    "align": [
     {
      "ckb": "کتێب",
      "hac": "کتێب",
      "k": "same"
     },
     {
      "ckb": "ەکە",
      "hac": "ەکە",
      "k": "same",
      "note": "masculine “the”"
     },
     {
      "ckb": "ـم",
      "hac": "ـم",
      "k": "same"
     },
     {
      "ckb": "لەوێ",
      "hac": "چاگە",
      "k": "different"
     },
     {
      "ckb": "دا",
      "hac": "",
      "k": "only"
     },
     {
      "ckb": "ناوە",
      "hac": "نیان",
      "k": "cognate",
      "note": "perfect of نیای “put”"
     },
     {
      "ckb": "",
      "hac": "ـرە",
      "k": "only",
      "note": "“down”: Sorani دا- comes after the verb"
     }
    ],
    "src": "C"
   },
   {
    "id": "pt_08",
    "en": "Nebez washed his hands and feet.",
    "ckb": "نەبەز دەستوپلی شت.",
    "hac": "نەبەز دەسوپلش شۆرت.",
    "align": [
     {
      "ckb": "نەبەز",
      "hac": "نەبەز",
      "k": "same",
      "note": "a man's name"
     },
     {
      "ckb": "دەست",
      "hac": "دەس",
      "k": "sound",
      "rule": "st-s"
     },
     {
      "ckb": "وپل",
      "hac": "وپل",
      "k": "same"
     },
     {
      "ckb": "ی",
      "hac": "ش",
      "k": "grammar",
      "note": "“he” as the doer"
     },
     {
      "ckb": "شت",
      "hac": "شۆرت",
      "k": "cognate"
     }
    ],
    "src": "C"
   }
  ],
  "pi": [
   {
    "id": "pt_pi1",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "بەردم",
    "options": [
     "I took him.",
     "I took her."
    ],
    "answer": 0,
    "why": {
     "en": "No ending on بەرد: the object is masculine.",
     "ku": "بەرد بێ پاشگر: بەرکارەکە نێرە."
    },
    "src": "C"
   },
   {
    "id": "pt_pi2",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "بەردەم",
    "options": [
     "I took her.",
     "I took him."
    ],
    "answer": 0,
    "why": {
     "en": "بەردە ends in ـە: the object is feminine.",
     "ku": "بەردە بە ـە کۆتایی دێت: بەرکارەکە مێیە."
    },
    "src": "C"
   },
   {
    "id": "pt_pi3",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "بەردێم",
    "options": [
     "I took them.",
     "I took her."
    ],
    "answer": 0,
    "why": {
     "en": "بەردێ ends in ـێ: the object is plural.",
     "ku": "بەردێ بە ـێ کۆتایی دێت: بەرکارەکە کۆیە."
    },
    "src": "C"
   },
   {
    "id": "pt_pi4",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "بەردش",
    "options": [
     "He took him.",
     "I took him."
    ],
    "answer": 0,
    "why": {
     "en": "ـش is the doer “he” or “she”, as in Sorani ـی.",
     "ku": "ـش بکەری کەسی سێیەمە، وەک ـی لە «بردی»."
    },
    "src": "C"
   },
   {
    "id": "pt_pi5",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "بەردما",
    "options": [
     "We took him.",
     "They took him."
    ],
    "answer": 0,
    "why": {
     "en": "ـما is “we”; “they” is ـشا.",
     "ku": "ـما واتە «ـمان»؛ «ـیان» دەبێتە ـشا."
    },
    "src": "C"
   },
   {
    "id": "pt_pi6",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "لوقمانی وات",
    "options": [
     "Luqman said.",
     "They said to Luqman."
    ],
    "answer": 0,
    "why": {
     "en": "ـی on the name marks the doer of a past verb.",
     "ku": "ـی لەسەر ناوەکە نیشانەی بکەرە لە ڕابردوودا."
    },
    "src": "C"
   }
  ],
  "src": "C"
 },
 {
  "id": "prep",
  "order": 8,
  "level": "A2",
  "sieve": 5,
  "title": "Prepositions: جە، پەی، بە and the endings ـنە، ـرە",
  "pattern": {
   "ckb": "لە [slot]دا",
   "hac": "[slot]نە",
   "en": "in the [slot]"
  },
  "card": {
   "ckb>hac": {
    "en": "لە is جە, بۆ is پەی, and بە stays بە. The word after them takes ی (masculine) or ێ (feminine): پەی تارانی “to Tehran”. Sorani لە…دا is often just a suffix ـنە: یانەنە “at home”, وەهارنە “in spring”. بە…دا with a direction is ـرە: پەولارە “that way”.",
    "ku": "«لە» دەبێتە جە، «بۆ» دەبێتە پەی، «بە»ش وەک خۆی دەمێنێتەوە. وشەی دوای ئەم ئامرازانە ی (نێر) یان ێ (مێ) وەردەگرێت: پەی تارانی (بۆ تاران). «لە…دا» زۆر جار تەنیا پاشگری ـنەیە: یانەنە (لە ماڵ)، وەهارنە (لە بەهاردا). «بە…دا»ی ئاراستەش دەبێتە ـرە: پەولارە (بەو لادا)."
   }
  },
  "items": [
   {
    "id": "pp_01",
    "en": "What are you afraid of?",
    "ckb": "لە چی ترساویت؟",
    "hac": "جە چێشی تەرسانی؟",
    "align": [
     {
      "ckb": "لە",
      "hac": "جە",
      "k": "different"
     },
     {
      "ckb": "چی",
      "hac": "چێش",
      "k": "cognate"
     },
     {
      "ckb": "",
      "hac": "ی",
      "k": "only",
      "note": "ending after a preposition"
     },
     {
      "ckb": "ترساویت",
      "hac": "تەرسانی",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "pp_02",
    "en": "He has gone to Tehran.",
    "ckb": "ڕۆیشتووە بۆ تاران.",
    "hac": "لوان پەی تارانی.",
    "align": [
     {
      "ckb": "ڕۆیشتووە",
      "hac": "لوان",
      "k": "different",
      "note": "perfect of لوای “go”"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "تاران",
      "hac": "تاران",
      "k": "same"
     },
     {
      "ckb": "",
      "hac": "ی",
      "k": "only",
      "note": "masculine ending after پەی"
     }
    ],
    "src": "C"
   },
   {
    "id": "pp_03",
    "en": "Sirwe is taller than Kani.",
    "ckb": "سروە لە کانی باڵای بەرزترە.",
    "hac": "سروە جە کانیێ باڵاش بەرزتەرەن.",
    "align": [
     {
      "ckb": "سروە",
      "hac": "سروە",
      "k": "same"
     },
     {
      "ckb": "لە",
      "hac": "جە",
      "k": "different"
     },
     {
      "ckb": "کانی",
      "hac": "کانی",
      "k": "same",
      "note": "a woman's name"
     },
     {
      "ckb": "",
      "hac": "ێ",
      "k": "only",
      "note": "feminine ending after جە"
     },
     {
      "ckb": "باڵا",
      "hac": "باڵا",
      "k": "same"
     },
     {
      "ckb": "ی",
      "hac": "ش",
      "k": "grammar",
      "note": "“her”: clitic ـش"
     },
     {
      "ckb": "بەرزتر",
      "hac": "بەرزتەر",
      "k": "cognate"
     },
     {
      "ckb": "ە",
      "hac": "ەن",
      "k": "grammar",
      "note": "masculine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "pp_04",
    "en": "What are you laughing at?",
    "ckb": "بە چی پێدەکەنیت؟",
    "hac": "بە چێشی مەخوی؟",
    "align": [
     {
      "ckb": "بە",
      "hac": "بە",
      "k": "same"
     },
     {
      "ckb": "چی",
      "hac": "چێش",
      "k": "cognate"
     },
     {
      "ckb": "",
      "hac": "ی",
      "k": "only",
      "note": "ending after a preposition"
     },
     {
      "ckb": "پێدەکەنیت",
      "hac": "مەخوی",
      "k": "different",
      "note": "present of خوای “laugh”"
     }
    ],
    "src": "C"
   },
   {
    "id": "pp_05",
    "en": "You should not be afraid of hard work.",
    "ckb": "لە کاری سەخت نەترسیت.",
    "hac": "جە کاری سەختی نەتەرسی.",
    "align": [
     {
      "ckb": "لە",
      "hac": "جە",
      "k": "different"
     },
     {
      "ckb": "کار",
      "hac": "کار",
      "k": "same"
     },
     {
      "ckb": "ی",
      "hac": "ی",
      "k": "same",
      "note": "before an adjective, as in Sorani"
     },
     {
      "ckb": "سەخت",
      "hac": "سەخت",
      "k": "same"
     },
     {
      "ckb": "",
      "hac": "ی",
      "k": "only",
      "note": "the adjective takes ی after جە"
     },
     {
      "ckb": "نەترسیت",
      "hac": "نەتەرسی",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "pp_06",
    "en": "We have heard the hills are lovely in spring.",
    "ckb": "بیستوومانە لە بەهاردا کەژ و کێو خۆشە.",
    "hac": "ژنیەنما وەهارنە کەش و کۆش وەشەن.",
    "align": [
     {
      "ckb": "بیستوومانە",
      "hac": "ژنیەنما",
      "k": "different",
      "note": "perfect of ژنەوای “hear”"
     },
     {
      "ckb": "لە",
      "hac": "",
      "k": "only"
     },
     {
      "ckb": "بەهار",
      "hac": "وەهار",
      "k": "sound",
      "rule": "b-w"
     },
     {
      "ckb": "دا",
      "hac": "نە",
      "k": "grammar",
      "note": "“in”, after the noun"
     },
     {
      "ckb": "کەژ",
      "hac": "کەش",
      "k": "cognate"
     },
     {
      "ckb": "و",
      "hac": "و",
      "k": "same"
     },
     {
      "ckb": "کێو",
      "hac": "کۆ",
      "k": "cognate",
      "note": "“mountain”"
     },
     {
      "ckb": "",
      "hac": "ش",
      "k": "only",
      "note": "“its”: of that place"
     },
     {
      "ckb": "خۆش",
      "hac": "وەش",
      "k": "sound",
      "rule": "xw-w"
     },
     {
      "ckb": "ە",
      "hac": "ەن",
      "k": "grammar",
      "note": "masculine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "pp_07",
    "en": "I showed it to Rêzan.",
    "ckb": "من بە ڕێزانم نیشان دا.",
    "hac": "من بە ڕێزانێم نیشانە دا.",
    "align": [
     {
      "ckb": "من",
      "hac": "من",
      "k": "same"
     },
     {
      "ckb": "بە",
      "hac": "بە",
      "k": "same"
     },
     {
      "ckb": "ڕێزان",
      "hac": "ڕێزان",
      "k": "same",
      "note": "a woman's name"
     },
     {
      "ckb": "",
      "hac": "ێ",
      "k": "only",
      "note": "feminine ending after بە"
     },
     {
      "ckb": "ـم",
      "hac": "ـم",
      "k": "same"
     },
     {
      "ckb": "نیشان",
      "hac": "نیشانە",
      "k": "cognate"
     },
     {
      "ckb": "دا",
      "hac": "دا",
      "k": "same"
     }
    ],
    "src": "C"
   },
   {
    "id": "pp_08",
    "en": "Come to our house at night.",
    "ckb": "شەو وەرن بۆ ماڵمان.",
    "hac": "شەوێ بەیدێ پەی یانەیما.",
    "align": [
     {
      "ckb": "شەو",
      "hac": "شەوێ",
      "k": "grammar",
      "note": "“at night”"
     },
     {
      "ckb": "وەرن",
      "hac": "بەیدێ",
      "k": "different",
      "note": "“come!” to several people"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "ماڵ",
      "hac": "یانە",
      "k": "different"
     },
     {
      "ckb": "",
      "hac": "ی",
      "k": "only"
     },
     {
      "ckb": "مان",
      "hac": "ما",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "pp_09",
    "en": "Go that way.",
    "ckb": "بەو لادا بڕۆ.",
    "hac": "پەولارە لوە.",
    "align": [
     {
      "ckb": "بەو لادا",
      "hac": "پەولارە",
      "k": "grammar",
      "note": "بە + ئەو + لا + ـرە"
     },
     {
      "ckb": "بڕۆ",
      "hac": "لوە",
      "k": "different"
     }
    ],
    "src": "C"
   }
  ],
  "pi": [
   {
    "id": "pp_pi1",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "پەی تارانی",
    "options": [
     "to Tehran",
     "from Tehran"
    ],
    "answer": 0,
    "why": {
     "en": "پەی is Sorani بۆ; “from” would be جە.",
     "ku": "پەی وەک «بۆ»یە؛ «لە» دەبێتە جە."
    },
    "src": "C"
   },
   {
    "id": "pp_pi2",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "جە چێشی تەرسانی",
    "options": [
     "What are you afraid of?",
     "Why are you afraid?"
    ],
    "answer": 0,
    "why": {
     "en": "جە is Sorani لە, and چێش is “what”.",
     "ku": "جە واتە «لە»، چێش واتە «چی»."
    },
    "src": "C"
   },
   {
    "id": "pp_pi3",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "وەهارنە",
    "options": [
     "in spring",
     "for spring"
    ],
    "answer": 0,
    "why": {
     "en": "ـنە after a noun is “in”.",
     "ku": "ـنە لە دوای ناو واتە «لە…دا»."
    },
    "src": "C"
   },
   {
    "id": "pp_pi4",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "پەولارە",
    "options": [
     "that way",
     "from that side"
    ],
    "answer": 0,
    "why": {
     "en": "ـرە is “along, through”, like بە…دا.",
     "ku": "ـرە وەک «بە…دا»یە."
    },
    "src": "C"
   }
  ],
  "src": "C"
 },
 {
  "id": "imper",
  "order": 9,
  "level": "A2",
  "sieve": 4,
  "title": "Commands and “don't”",
  "pattern": {
   "ckb": "ب[slot]ە / مە[slot]ە",
   "hac": "ب[slot]ە / نمە[slot]ە",
   "en": "[slot]! / don't [slot]!"
  },
  "card": {
   "ckb>hac": {
    "en": "Commands are close: ب- + stem + ـە for one person, ـدێ for several: بنویسە “write!”. The trap is “don't”: Hawrami says نمە-, and for one person the ن can drop, so مەلە is “don't go” but مەلوو is “I go”. In the past and the subjunctive “not” is نە-, as in Sorani.",
    "ku": "فەرمان نزیکە: ب- + ڕەگ + ـە بۆ یەک کەس، ـدێ بۆ چەند کەس: بنویسە. تەڵەکە لە «مە-»دایە: هەورامی بۆ نەهی نمە- دەڵێت و بۆ یەک کەس دەکرێت ن-ەکەی بکەوێت؛ بۆیە مەلە واتە «مەڕۆ»، بەڵام مەلوو واتە «دەڕۆم». لە ڕابردوو و داخوازیدا نە- وەک سۆرانییە."
   }
  },
  "items": [
   {
    "id": "im_01",
    "en": "Don't go, I am coming too.",
    "ckb": "مەڕۆ، منیش دێم.",
    "hac": "مەلە، منیچ مەو.",
    "align": [
     {
      "ckb": "مەڕۆ",
      "hac": "مەلە",
      "k": "grammar",
      "note": "short for نمەلە “don't go”"
     },
     {
      "ckb": "من",
      "hac": "من",
      "k": "same"
     },
     {
      "ckb": "یش",
      "hac": "یچ",
      "k": "cognate",
      "note": "“too”"
     },
     {
      "ckb": "دێم",
      "hac": "مەو",
      "k": "grammar",
      "note": "present “I come”"
     }
    ],
    "src": "C"
   },
   {
    "id": "im_02",
    "en": "Don't come here. (to several people)",
    "ckb": "مەیەن بۆ ئێرە.",
    "hac": "نمەیدێ پەی ئیگەی.",
    "align": [
     {
      "ckb": "مەیەن",
      "hac": "نمەیدێ",
      "k": "grammar",
      "note": "نمە- + ـیدێ “you all”"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "ئێرە",
      "hac": "ئیگەی",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "im_03",
    "en": "Come, let us sit together.",
    "ckb": "وەرە با پێکەوە دابنیشین.",
    "hac": "بوە با یۆوە نیشمێرە.",
    "align": [
     {
      "ckb": "وەرە",
      "hac": "بوە",
      "k": "different",
      "note": "“come!”"
     },
     {
      "ckb": "با",
      "hac": "با",
      "k": "same"
     },
     {
      "ckb": "پێکەوە",
      "hac": "یۆوە",
      "k": "different"
     },
     {
      "ckb": "دابنیشین",
      "hac": "نیشمێرە",
      "k": "sound",
      "rule": "da-ere"
     }
    ],
    "src": "C"
   },
   {
    "id": "im_04",
    "en": "Write the lessons so you learn well.",
    "ckb": "وانەکان بنووسە تا باش فێر بیت.",
    "hac": "وانەکا بنویسە تا خاس فێر بی.",
    "align": [
     {
      "ckb": "وانە",
      "hac": "وانە",
      "k": "same"
     },
     {
      "ckb": "کان",
      "hac": "کا",
      "k": "cognate"
     },
     {
      "ckb": "بنووسە",
      "hac": "بنویسە",
      "k": "cognate",
      "note": "ب- + stem + ـە, as in Sorani"
     },
     {
      "ckb": "تا",
      "hac": "تا",
      "k": "same"
     },
     {
      "ckb": "باش",
      "hac": "خاس",
      "k": "different"
     },
     {
      "ckb": "فێر",
      "hac": "فێر",
      "k": "same"
     },
     {
      "ckb": "بیت",
      "hac": "بی",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "im_05",
    "en": "Get up and go to him.",
    "ckb": "هەڵسە، بڕۆ بۆ لای.",
    "hac": "هۆربێزە، لوە پەی لایش.",
    "align": [
     {
      "ckb": "هەڵسە",
      "hac": "هۆربێزە",
      "k": "sound",
      "rule": "hel-hor"
     },
     {
      "ckb": "بڕۆ",
      "hac": "لوە",
      "k": "different"
     },
     {
      "ckb": "بۆ",
      "hac": "پەی",
      "k": "different"
     },
     {
      "ckb": "لا",
      "hac": "لا",
      "k": "same"
     },
     {
      "ckb": "ی",
      "hac": "یش",
      "k": "grammar",
      "note": "“his”"
     }
    ],
    "src": "C"
   },
   {
    "id": "im_06",
    "en": "Bring that jug and wash your hands.",
    "ckb": "ئەو گۆزەیە بهێنە و دەستەکانت بشۆ.",
    "hac": "ئا گۆزێ بارە و دەسێ شۆرە.",
    "align": [
     {
      "ckb": "ئەو",
      "hac": "ئا",
      "k": "cognate"
     },
     {
      "ckb": "گۆزە",
      "hac": "گۆزێ",
      "k": "cognate",
      "note": "feminine noun"
     },
     {
      "ckb": "یە",
      "hac": "",
      "k": "only"
     },
     {
      "ckb": "بهێنە",
      "hac": "بارە",
      "k": "different",
      "note": "“bring!”, from ئاردەی"
     },
     {
      "ckb": "و",
      "hac": "و",
      "k": "same"
     },
     {
      "ckb": "دەست",
      "hac": "دەس",
      "k": "sound",
      "rule": "st-s"
     },
     {
      "ckb": "ەکانت",
      "hac": "ێ",
      "k": "grammar",
      "note": "plural: “hands”"
     },
     {
      "ckb": "بشۆ",
      "hac": "شۆرە",
      "k": "cognate"
     }
    ],
    "src": "C"
   },
   {
    "id": "im_07",
    "en": "Don't sit down, it is wet there.",
    "ckb": "دامەنیشە، ئەوێ تەڕە.",
    "hac": "نمەنیشەرە، ئاگە تەڕەن.",
    "align": [
     {
      "ckb": "دامەنیشە",
      "hac": "نمەنیشەرە",
      "k": "grammar",
      "note": "نمە- … ـرە “don't sit down”"
     },
     {
      "ckb": "ئەوێ",
      "hac": "ئاگە",
      "k": "different"
     },
     {
      "ckb": "تەڕ",
      "hac": "تەڕ",
      "k": "same"
     },
     {
      "ckb": "ـە",
      "hac": "ـەن",
      "k": "grammar",
      "note": "masculine “is”"
     }
    ],
    "src": "C"
   },
   {
    "id": "im_08",
    "en": "Don't look that way.",
    "ckb": "مەڕوانە بەو لادا.",
    "hac": "مەدیە پەو لارە.",
    "align": [
     {
      "ckb": "مەڕوانە",
      "hac": "مەدیە",
      "k": "grammar",
      "note": "“don't look”: نمە- with the ن dropped, as in مەلە"
     },
     {
      "ckb": "بەو",
      "hac": "پەو",
      "k": "cognate"
     },
     {
      "ckb": "لا",
      "hac": "لا",
      "k": "same"
     },
     {
      "ckb": "دا",
      "hac": "رە",
      "k": "grammar",
      "note": "“that way”: ـرە"
     }
    ],
    "src": "C"
   },
   {
    "id": "im_09",
    "en": "Come back in two days.",
    "ckb": "دوو ڕۆژی تر وەرەوە.",
    "hac": "دوێ ڕوێ تەر بۆوە.",
    "align": [
     {
      "ckb": "دوو",
      "hac": "دوێ",
      "k": "cognate"
     },
     {
      "ckb": "ڕۆژ",
      "hac": "ڕوێ",
      "k": "cognate",
      "note": "plural of ڕۆ “day”"
     },
     {
      "ckb": "ی",
      "hac": "",
      "k": "only"
     },
     {
      "ckb": "تر",
      "hac": "تەر",
      "k": "cognate"
     },
     {
      "ckb": "وەرەوە",
      "hac": "بۆوە",
      "k": "different",
      "note": "“come back!”"
     }
    ],
    "src": "C"
   },
   {
    "id": "im_10",
    "en": "Don't follow us.",
    "ckb": "مەکەوە شوێنمان.",
    "hac": "مەگنە شۆنیما.",
    "align": [
     {
      "ckb": "مەکەوە",
      "hac": "مەگنە",
      "k": "grammar",
      "note": "short for نمەگنە “don't fall”"
     },
     {
      "ckb": "شوێن",
      "hac": "شۆنی",
      "k": "cognate"
     },
     {
      "ckb": "مان",
      "hac": "ما",
      "k": "cognate"
     }
    ],
    "src": "C"
   }
  ],
  "pi": [
   {
    "id": "im_pi1",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "مەلە",
    "options": [
     "Don't go!",
     "I go."
    ],
    "answer": 0,
    "why": {
     "en": "مە- + stem + ـە is “don't”. “I go” is مەلوو.",
     "ku": "مە- + ڕەگ + ـە فەرمانی نەرێیە، وەک «مەڕۆ». «دەڕۆم» دەبێتە مەلوو."
    },
    "src": "C"
   },
   {
    "id": "im_pi2",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "لوە",
    "options": [
     "Go!",
     "He went."
    ],
    "answer": 0,
    "why": {
     "en": "ـە at the end makes a command; “he went” is لوا.",
     "ku": "ـەی کۆتایی فەرمانە؛ «ڕۆیشت» دەبێتە لوا."
    },
    "src": "C"
   },
   {
    "id": "im_pi3",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "نمەیدێ",
    "options": [
     "Don't come! (to several people)",
     "Don't come! (to one person)"
    ],
    "answer": 0,
    "why": {
     "en": "ـدێ is the plural “you”.",
     "ku": "ـدێ بۆ «ئێوە»یە."
    },
    "src": "C"
   },
   {
    "id": "im_pi4",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "بنویسە",
    "options": [
     "Write!",
     "I write."
    ],
    "answer": 0,
    "why": {
     "en": "ب- + stem + ـە, just like بنووسە.",
     "ku": "ب- + ڕەگ + ـە، وەک «بنووسە»."
    },
    "src": "C"
   },
   {
    "id": "im_pi5",
    "dir": "ckb>hac",
    "show": "hac",
    "text": "نمەنیشەرە",
    "options": [
     "Don't sit down!",
     "He doesn't sit down."
    ],
    "answer": 0,
    "why": {
     "en": "نمە- at the start and ـە at the end: a negative command.",
     "ku": "نمە- لە سەرەتا و ـە لە کۆتایی: فەرمانی نەرێ."
    },
    "src": "C"
   }
  ],
  "src": "C"
 }
];
})();
