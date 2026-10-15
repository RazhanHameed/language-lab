// Kalhori (Southern Kurdish) bridge for Sorani speakers: sound and form correspondences.
// Pair ckb-sdh, direction ckb>sdh. Every Kalhori form is attested in the sources listed in sources.js
// or built from attested pieces (built: true). Nothing here has been checked by a native speaker.
(function () {
  const B = (window.__BRIDGES = window.__BRIDGES || {});
  const P = (B["ckb-sdh"] = B["ckb-sdh"] || {});
  P.RULES = [
 {
  "id": "de-zero",
  "order": 1,
  "title": "Sorani دە- → Kalhori nothing (present)",
  "reliability": "always",
  "card": {
   "ckb>sdh": {
    "en": "Kalhori has no present prefix: drop دە- and keep the stem and ending. کەم = دەکەم, زانن = دەزانن. This holds for every present-tense verb in Saye's grammar and for all 11 present forms of 'to see' in the Zmanî Kurdî list. Neighbours differ: Feyli adds ئە-, Garrusi adds د-.",
    "ku": "لە کەڵهوڕیدا کاری ئێستا پێشگری نییە: «دە»کە لابە و قەدی کار و کۆتاییەکە بهێڵەوە. کەم یانی دەکەم، زانن یانی دەزانن. لە هەموو کارە ئێستاییەکانی ڕێزمانەکەی سایە و لە هەر ١١ شێوەی «دۊنم»ی لیستی «زمانی کوردی»دا هەر وایە. فەیلی «ئە-» و گەڕووسی «د-» دەخەنە پێش کار."
   }
  },
  "examples": [
   {
    "ckb": "دەکەم",
    "sdh": "کەم",
    "en": "I do",
    "src": "saye"
   },
   {
    "ckb": "دەکات",
    "sdh": "کەی",
    "en": "he/she does",
    "src": "saye"
   },
   {
    "ckb": "دەزانن",
    "sdh": "زانن",
    "en": "they know",
    "src": "saye"
   },
   {
    "ckb": "دەناسن",
    "sdh": "ناسن",
    "en": "they know (someone)",
    "src": "saye"
   },
   {
    "ckb": "دەگرم",
    "sdh": "گرم",
    "en": "I take, I hold",
    "src": "saye"
   },
   {
    "ckb": "دەپرسم",
    "sdh": "پرسم",
    "en": "I ask",
    "src": "saye"
   },
   {
    "ckb": "دەمرێ",
    "sdh": "مری",
    "en": "he/she dies",
    "src": "saye"
   },
   {
    "ckb": "دەکەوم",
    "sdh": "کەفم",
    "en": "I fall",
    "src": "saye"
   }
  ],
  "test": [
   {
    "ckb": "دەکەن",
    "sdh": "کەنن",
    "en": "they do",
    "src": "saye"
   },
   {
    "ckb": "هەڵدەستم",
    "sdh": "ئەڵم",
    "en": "I get up",
    "src": "saye"
   }
  ]
 },
 {
  "id": "na-nie",
  "order": 2,
  "title": "Sorani نا- → Kalhori نیە- (negative present)",
  "reliability": "always",
  "card": {
   "ckb>sdh": {
    "en": "The negative of the present is نیە- where Sorani has نا-: نیەزانم = نازانم. All 14 verbs with a negative present in the Zmanî Kurdî Kalhori list and every negative present in Saye use نیە-. In the past and the subjunctive the negative is نە-, as in Sorani.",
    "ku": "نەرێی کاری ئێستا بە «نیە-»یە، لە جیاتی «نا-»ی سۆرانی: نیەزانم = نازانم. هەر ١٤ کارە نەرێیەکەی لیستی کەڵهوڕیی «زمانی کوردی» و هەموو نموونەکانی سایە وان. بەڵام لە ڕابردوو و داخوازیدا هەر «نە-»یە، وەک سۆرانی."
   }
  },
  "examples": [
   {
    "ckb": "نازانم",
    "sdh": "نیەزانم",
    "en": "I don't know",
    "src": "zk"
   },
   {
    "ckb": "ناتوانم",
    "sdh": "نیەتۊەنم",
    "en": "I can't",
    "src": "zk"
   },
   {
    "ckb": "ناچم",
    "sdh": "نیەچم",
    "en": "I don't go",
    "src": "zk"
   },
   {
    "ckb": "ناخەوم",
    "sdh": "نیەخەفم",
    "en": "I don't sleep",
    "src": "zk"
   },
   {
    "ckb": "ناکەوم",
    "sdh": "نیەکەفم",
    "en": "I don't fall",
    "src": "saye"
   },
   {
    "ckb": "ناگرم",
    "sdh": "نیەگرم",
    "en": "I don't take",
    "src": "saye"
   },
   {
    "ckb": "ناوێرم",
    "sdh": "نیەوێرم",
    "en": "I don't dare",
    "src": "saye"
   }
  ],
  "test": [
   {
    "ckb": "ناژیت",
    "sdh": "نیەژێی",
    "en": "you won't live",
    "src": "saye"
   },
   {
    "ckb": "ناکات",
    "sdh": "نیەکەی",
    "en": "he/she doesn't do",
    "src": "saye"
   }
  ]
 },
 {
  "id": "hel-el",
  "order": 3,
  "title": "Sorani هەڵ- → Kalhori ئەڵ-",
  "reliability": "always",
  "card": {
   "ckb>sdh": {
    "en": "The preverb هەڵ- is ئەڵ- in Kalhori: ئەڵگرت = هەڵگرت. Saye's grammar has about 25 such forms, all written ئەڵ-. The Garrusi dictionary agrees in 71 of 102 pairs. Just hear the missing ه.",
    "ku": "پێشگری «هەڵ-» لە کەڵهوڕیدا «ئەڵ-»ە: ئەڵگرت = هەڵگرت. لە ڕێزمانەکەی سایەدا نزیکەی ٢٥ شێوەی وا هەیە و هەموویان بە «ئەڵ-» نووسراون. فەرهەنگی گەڕووسیش لە ٧١ جووت لە ١٠٢ دا وایە. تەنها «ه»کە لابە."
   }
  },
  "examples": [
   {
    "ckb": "هەڵگرت",
    "sdh": "ئەڵگرت",
    "en": "picked up",
    "src": "saye"
   },
   {
    "ckb": "هەڵکەند",
    "sdh": "ئەڵکەنی",
    "en": "dug up",
    "src": "saye"
   },
   {
    "ckb": "هەڵچنی",
    "sdh": "ئەڵچنی",
    "en": "piled up",
    "src": "saye"
   },
   {
    "ckb": "هەڵیکرد",
    "sdh": "ئەڵکرد",
    "en": "(the wind) rose",
    "src": "saye"
   },
   {
    "ckb": "هەڵبەت",
    "sdh": "ئەڵبەت",
    "en": "of course",
    "src": "saye"
   },
   {
    "ckb": "هەڵکەوتوو",
    "sdh": "ئەڵکەفتگ",
    "en": "outstanding",
    "src": "saye"
   },
   {
    "ckb": "هەڵهاتووە",
    "sdh": "ئەڵاتگە",
    "en": "has risen",
    "src": "saye"
   }
  ],
  "test": [
   {
    "ckb": "هەڵسان",
    "sdh": "ئەڵسیان",
    "en": "they got up",
    "src": "saye"
   },
   {
    "ckb": "هەڵدەستم",
    "sdh": "ئەڵم",
    "en": "I get up",
    "src": "saye"
   }
  ]
 },
 {
  "id": "o-uu",
  "order": 4,
  "title": "Sorani ۆ → Kalhori وو",
  "reliability": "usually",
  "card": {
   "ckb>sdh": {
    "en": "Saye's vowel list has no Sorani ۆ. Very often it is long وو: ڕووژ = ڕۆژ, دووس = دۆست. 9 of our Kalhori pairs show it, and the Garrusi dictionary has 173 such pairs. The other outcome is ۊ (next rule), so treat this as a reading key.",
    "ku": "لە لیستی بزوێنەکانی سایەدا «ۆ»ی سۆرانی نییە. زۆر جار دەبێتە «وو»: ڕووژ = ڕۆژ، دووس = دۆست. ٩ جووتی کەڵهوڕیی ئێمە وان و فەرهەنگی گەڕووسی ١٧٣ جووتی وای تێدایە. جاری واش هەیە دەبێتە «ۊ» (یاسای دواتر)، بۆیە بۆ ناسینەوە بەکاری بێنە."
   }
  },
  "examples": [
   {
    "ckb": "ڕۆژ",
    "sdh": "ڕووژ",
    "en": "day",
    "src": "saye"
   },
   {
    "ckb": "دۆست",
    "sdh": "دووس",
    "en": "friend",
    "src": "saye"
   },
   {
    "ckb": "ئەمڕۆ",
    "sdh": "ئەمڕوو",
    "en": "today",
    "src": "saye"
   },
   {
    "ckb": "گۆچان",
    "sdh": "گووچان",
    "en": "walking stick",
    "src": "saye"
   },
   {
    "ckb": "خاڵۆ",
    "sdh": "خاڵوو",
    "en": "maternal uncle",
    "src": "saye"
   },
   {
    "ckb": "دەفرۆشن",
    "sdh": "فرووشن",
    "en": "they sell",
    "src": "saye"
   },
   {
    "ckb": "نیوەڕۆ",
    "sdh": "نیمەڕوو",
    "en": "noon",
    "src": "zk"
   }
  ],
  "test": [
   {
    "ckb": "ئامۆزا",
    "sdh": "ئامووزا",
    "en": "cousin",
    "src": "zk"
   },
   {
    "ckb": "شۆردن",
    "sdh": "شووردن",
    "en": "to wash",
    "src": "saye"
   }
  ]
 },
 {
  "id": "o-ue",
  "order": 5,
  "title": "Sorani وو → Kalhori ۊ",
  "reliability": "often",
  "card": {
   "ckb>sdh": {
    "en": "The letter ۊ is a rounded vowel between و and ی (like German ü). Saye prints it ۆ; the Zmanî Kurdî lists write ۊ. Where Sorani has وو or ۆ, Kalhori often has ۊ: دۊر = دوور, چۊن = چۆن. 8 pairs in our sources.",
    "ku": "«ۊ» دەنگێکی نێوان «و» و «ی»یە. سایە بە «ۆ» دەینووسێت و لیستەکانی «زمانی کوردی» بە «ۊ». لە شوێنی «وو» یان «ۆ»ی سۆرانی زۆر جار «ۊ» دێت: دۊر = دوور، چۊن = چۆن. لە سەرچاوەکانماندا ٨ جووت هەن. وەک «زوی»ی گەرمیانە."
   }
  },
  "examples": [
   {
    "ckb": "دوور",
    "sdh": "دۊر",
    "en": "far",
    "src": "saye"
   },
   {
    "ckb": "زوو",
    "sdh": "زۊ",
    "en": "early",
    "src": "saye"
   },
   {
    "ckb": "چوو",
    "sdh": "چۊ",
    "en": "went",
    "src": "saye"
   },
   {
    "ckb": "بووم",
    "sdh": "بۊم",
    "en": "I was",
    "src": "saye"
   },
   {
    "ckb": "چۆن",
    "sdh": "چۊن",
    "en": "how",
    "src": "saye"
   },
   {
    "ckb": "لووت",
    "sdh": "لۊت",
    "en": "nose",
    "src": "zk"
   },
   {
    "ckb": "سوور",
    "sdh": "سۊەر",
    "en": "red",
    "src": "zk"
   }
  ],
  "test": [
   {
    "ckb": "جۆ",
    "sdh": "جۊ",
    "en": "barley",
    "src": "zk"
   }
  ]
 },
 {
  "id": "xo-xwe",
  "order": 6,
  "title": "Sorani خۆ → Kalhori خوە",
  "reliability": "usually",
  "card": {
   "ckb>sdh": {
    "en": "Sorani خۆ- is خوە- in Kalhori: خوەر = خۆر, خوەش = خۆش, خوەم = خۆم. All 8 such forms in Saye's examples do it; the Garrusi dictionary does it in 16 of 65 pairs.",
    "ku": "«خۆ»ی سۆرانی لە کەڵهوڕیدا «خوە»یە: خوەر = خۆر، خوەش = خۆش، خوەم = خۆم. هەر ٨ شێوەکەی ناو نموونەکانی سایە وان؛ فەرهەنگی گەڕووسی لە ١٦ جووت لە ٦٥ دا."
   }
  },
  "examples": [
   {
    "ckb": "خۆم",
    "sdh": "خوەم",
    "en": "myself",
    "src": "saye"
   },
   {
    "ckb": "خۆر",
    "sdh": "خوەر",
    "en": "sun",
    "src": "saye"
   },
   {
    "ckb": "خۆش",
    "sdh": "خوەش",
    "en": "pleasant",
    "src": "saye"
   },
   {
    "ckb": "نەخۆش",
    "sdh": "نەخوەش",
    "en": "ill",
    "src": "saye"
   },
   {
    "ckb": "خۆرئاوا",
    "sdh": "خوەراوا",
    "en": "sunset",
    "src": "saye"
   },
   {
    "ckb": "خۆی",
    "sdh": "خوەی",
    "en": "himself",
    "src": "saye"
   }
  ],
  "test": [
   {
    "ckb": "خۆت",
    "sdh": "خوەد",
    "en": "yourself",
    "src": "saye"
   },
   {
    "ckb": "بخۆن",
    "sdh": "بخوەن",
    "en": "eat! (plural)",
    "src": "saye"
   }
  ]
 },
 {
  "id": "cluster",
  "order": 7,
  "title": "Sorani -ست → Kalhori -س (also -ند → -ن)",
  "reliability": "usually",
  "card": {
   "ckb>sdh": {
    "en": "After س the final ت drops, and after ن the د drops: دەس = دەست, چەن = چەند. Saye states the rule (p. 91), and 10 words in his examples follow it. It applies inside words too: ناوڕاسی = ناوەڕاستی. Spoken Sorani often does the same.",
    "ku": "«ت» لە دوای «س» و «د» لە دوای «ن» دەکەوێت: دەس = دەست، چەن = چەند. سایە خۆی ئەم یاسایە باس دەکات (ل. ٩١) و ١٠ وشە لە نموونەکانیدا وان. لە ناوەڕاستی وشەشدا: ناوڕاسی = ناوەڕاستی. لە قسەی ڕۆژانەی سۆرانیشدا زۆر جار هەر وا دەڵێین."
   }
  },
  "examples": [
   {
    "ckb": "دەست",
    "sdh": "دەس",
    "en": "hand",
    "src": "saye"
   },
   {
    "ckb": "ڕاست",
    "sdh": "ڕاس",
    "en": "straight, right",
    "src": "saye"
   },
   {
    "ckb": "دۆست",
    "sdh": "دووس",
    "en": "friend",
    "src": "saye"
   },
   {
    "ckb": "بیست",
    "sdh": "بیس",
    "en": "twenty",
    "src": "saye"
   },
   {
    "ckb": "دەستشۆر",
    "sdh": "دەسشوور",
    "en": "hand-washing basin",
    "src": "saye"
   },
   {
    "ckb": "چەند",
    "sdh": "چەن",
    "en": "how many",
    "src": "saye"
   },
   {
    "ckb": "دەوڵەمەند",
    "sdh": "دەوڵەمەن",
    "en": "rich",
    "src": "saye"
   },
   {
    "ckb": "بڵند",
    "sdh": "بڵن",
    "en": "high, loud",
    "src": "saye"
   }
  ],
  "test": [
   {
    "ckb": "ناوەڕاستی",
    "sdh": "ناوڕاسی",
    "en": "the middle of",
    "src": "saye"
   },
   {
    "ckb": "منداڵ",
    "sdh": "مناڵ",
    "en": "child",
    "src": "saye"
   }
  ]
 },
 {
  "id": "t-d",
  "order": 8,
  "title": "Sorani -ت (you) → Kalhori -د",
  "reliability": "usually",
  "card": {
   "ckb>sdh": {
    "en": "The 'you, your' clitic is usually -د: دەسد = دەستت, براد = برات, ماڵدان = ماڵتان. Saye names this change (p. 92) and gives -د first in his tables, though he also prints -ت. Expect both.",
    "ku": "ڕاناوی لکاوی «تۆ/ئێوە» زۆرتر «-د»ە: دەسد = دەستت، براد = برات، ماڵدان = ماڵتان. سایە ئەم گۆڕانە باس دەکات (ل. ٩٢) و لە خشتەکانیدا «-د» یەکەم دادەنێت، بەڵام «-ت»یش دەنووسێت. چاوەڕێی هەردووکیان بە."
   }
  },
  "examples": [
   {
    "ckb": "دەستت",
    "sdh": "دەسد",
    "en": "your hand",
    "src": "saye"
   },
   {
    "ckb": "برات",
    "sdh": "براد",
    "en": "your brother",
    "src": "saye"
   },
   {
    "ckb": "ماڵتان",
    "sdh": "ماڵدان",
    "en": "your (pl.) house",
    "src": "saye"
   },
   {
    "ckb": "خۆت",
    "sdh": "خوەد",
    "en": "yourself",
    "src": "saye"
   },
   {
    "ckb": "خۆتان",
    "sdh": "خودان",
    "en": "yourselves",
    "src": "saye"
   },
   {
    "ckb": "بینیمیت",
    "sdh": "دیمەد",
    "en": "I saw you",
    "src": "zk"
   }
  ],
  "test": [
   {
    "ckb": "بینیمن",
    "sdh": "دیمەدان",
    "en": "I saw you (pl.)",
    "src": "zk"
   }
  ]
 },
 {
  "id": "b-w",
  "order": 9,
  "title": "Sorani ب → Kalhori و (some words)",
  "reliability": "often",
  "card": {
   "ckb>sdh": {
    "en": "An old b became w in many words: واران = باران, وا = با, وە = بە. Saye names the change (p. 92) and 8 of our Kalhori pairs show it, but the Garrusi dictionary keeps ب in 136 pairs against 59 with و. Use it to guess, not to build words.",
    "ku": "«ب»ی کۆن لە زۆر وشەدا بووە بە «و»: واران = باران، وا = با، وە = بە. سایە ئەم گۆڕانە باس دەکات (ل. ٩٢) و ٨ جووتی کەڵهوڕیی ئێمە وان، بەڵام لە فەرهەنگی گەڕووسیدا ١٣٦ جووت «ب»یان ماوە و تەنها ٥٩ بوونەتە «و». بۆ تێگەیشتن باشە، نەک بۆ دروستکردنی وشە."
   }
  },
  "examples": [
   {
    "ckb": "باران",
    "sdh": "واران",
    "en": "rain",
    "src": "saye"
   },
   {
    "ckb": "با",
    "sdh": "وا",
    "en": "wind",
    "src": "saye"
   },
   {
    "ckb": "بەهار",
    "sdh": "وەهار",
    "en": "spring",
    "src": "saye"
   },
   {
    "ckb": "بەرخ",
    "sdh": "وەرک",
    "en": "lamb",
    "src": "saye"
   },
   {
    "ckb": "بەراز",
    "sdh": "وەراز",
    "en": "wild boar",
    "src": "saye"
   },
   {
    "ckb": "بە",
    "sdh": "وە",
    "en": "with, by",
    "src": "saye"
   }
  ],
  "test": [
   {
    "ckb": "بووک",
    "sdh": "وەۊ",
    "en": "bride",
    "src": "zk"
   },
   {
    "ckb": "برسی",
    "sdh": "ورسگ",
    "en": "hungry",
    "src": "zk"
   }
  ]
 },
 {
  "id": "part-g",
  "order": 10,
  "title": "Sorani -وو (participle) → Kalhori -گ",
  "reliability": "always",
  "card": {
   "ckb>sdh": {
    "en": "The past participle ends in -گ where Sorani has -وو, and in -یاگ where Sorani has -او: مردگ = مردوو, شکیاگ = شکاو. With 'is' it gives the perfect: خەفتگە = خەوتووە. Every participle in Saye's examples (8 forms) has the -گ.",
    "ku": "ناوی بەرکار و کارا بە «-گ» تەواو دەبێت لە جیاتی «-وو»، و بە «-یاگ» لە جیاتی «-او»: مردگ = مردوو، شکیاگ = شکاو. لەگەڵ «-ە» دەبێتە ڕابردووی تەواو: خەفتگە = خەوتووە. هەموو ئەو ٨ نموونەیەی سایە وان."
   }
  },
  "examples": [
   {
    "ckb": "مردوو",
    "sdh": "مردگ",
    "en": "dead",
    "src": "saye"
   },
   {
    "ckb": "کەوتوو",
    "sdh": "کەفتگ",
    "en": "fallen",
    "src": "saye"
   },
   {
    "ckb": "خەوتوو",
    "sdh": "خەفتگ",
    "en": "asleep",
    "src": "saye"
   },
   {
    "ckb": "شکاو",
    "sdh": "شکیاگ",
    "en": "broken",
    "src": "saye"
   },
   {
    "ckb": "بڕاو",
    "sdh": "بڕیاگ",
    "en": "cut",
    "src": "saye"
   },
   {
    "ckb": "دڕاو",
    "sdh": "دڕیاگ",
    "en": "torn",
    "src": "saye"
   }
  ],
  "test": [
   {
    "ckb": "خەوتووە",
    "sdh": "خەفتگە",
    "en": "has fallen asleep",
    "src": "saye"
   },
   {
    "ckb": "هەڵهاتووە",
    "sdh": "ئەڵاتگە",
    "en": "has risen",
    "src": "saye"
   }
  ]
 }
];
})();
