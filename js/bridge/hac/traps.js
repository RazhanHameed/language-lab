// Bridge course Sorani -> Hawrami (ckb>hac). Generated from the sources listed in sources.js.
(function () {
  const B = (window.__BRIDGES = window.__BRIDGES || {});
  const P = (B["ckb-hac"] = B["ckb-hac"] || {});
  P.TRAPS = [
 {
  "id": "vetey",
  "kind": "false-friend",
  "ckb": {
   "w": "وتن",
   "en": "to say"
  },
  "hac": {
   "w": "وتەی",
   "en": "to sleep",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "واتەی",
    "en": "to say",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "Hawrami وتەی is “to sleep”: وت “he slept”, وتە “she slept”. “To say” is واتەی: وات “he said”.",
    "ku": "وتەی لە هەورامیدا واتە «خەوتن»: وت (خەوت). بۆ «وتن» دەڵێن واتەی: وات (وتی)."
   }
  },
  "src": "C"
 },
 {
  "id": "chi",
  "kind": "false-friend",
  "ckb": {
   "w": "چی",
   "en": "what"
  },
  "hac": {
   "w": "چی",
   "en": "why",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "چێش",
    "en": "what",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "Hawrami چی is “why” (Sorani بۆ). “What” is چێش: چێش مەکەری؟ “what are you doing?”",
    "ku": "چی لە هەورامیدا واتە «بۆ؟». «چی»ی سۆرانی دەبێتە چێش: چێش مەکەری؟ (چی دەکەیت؟)"
   }
  },
  "src": "C"
 },
 {
  "id": "cheni",
  "kind": "false-friend",
  "ckb": {
   "w": "چەند",
   "en": "how much, how many"
  },
  "hac": {
   "w": "چەنی",
   "en": "how; with",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "چننە",
    "en": "how much, how many",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "چەنی looks like Sorani چەند, but it means “how” or “with”: چەنی بزانمێ؟ “how should we know?” “How many” is چننە.",
    "ku": "چەنی لە «چەند» دەچێت، بەڵام واتەکەی «چۆن» یان «لەگەڵ»ە: چەنی بزانمێ؟ (چۆن بزانین؟). «چەند» دەبێتە چننە."
   }
  },
  "src": "C"
 },
 {
  "id": "hen",
  "kind": "false-friend",
  "ckb": {
   "w": "هەن",
   "en": "there are, they are"
  },
  "hac": {
   "w": "هەن",
   "en": "there is, he is (masculine)",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "هەنێ",
    "en": "there are, they are",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "Hawrami هەن is singular: “there is” or “he is (there)”. The plural is هەنێ: کناچەکا هەنێ ڕاوە “the girls are on their way”.",
    "ku": "«هەن»ی هەورامی تاکە: «هەیە» یان «ها». کۆکەی هەنێیە: کناچەکا هەنێ ڕاوە (کچەکان هان بەڕێوە)."
   }
  },
  "src": "C"
 },
 {
  "id": "niyen",
  "kind": "near-miss",
  "ckb": {
   "w": "نین",
   "en": "we are not, they are not"
  },
  "hac": {
   "w": "نیەن",
   "en": "he is not, there is not (masculine)",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "نیەنێ",
    "en": "they are not, there are not",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "نیەن is “is not” for a masculine noun, not Sorani نین. The plural is نیەنێ: ژەن و شوو نیەنێ “they are not husband and wife”.",
    "ku": "نیەن واتە «نییە» بۆ نێر، نەک «نین». کۆکەی نیەنێیە: ژەن و شوو نیەنێ (ژن و مێرد نین)."
   }
  },
  "src": "C"
 },
 {
  "id": "me_prefix",
  "kind": "near-miss",
  "ckb": {
   "w": "مەڕۆ",
   "en": "don't go"
  },
  "hac": {
   "w": "مەلوو",
   "en": "I am going",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "مەلە",
    "en": "don't go!",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "In Hawrami مە- marks the present, like Sorani دە-: مەلوو “I am going”. “Don't go” is (ن)مەلە, with ـە at the end.",
    "ku": "مە- لە هەورامیدا نیشانەی ڕانەبردووە، وەک دە-: مەلوو (دەڕۆم). «مەڕۆ» دەبێتە (ن)مەلە، بە ـەی کۆتایی."
   }
  },
  "src": "C"
 },
 {
  "id": "baba",
  "kind": "false-friend",
  "ckb": {
   "w": "بابا",
   "en": "dad"
  },
  "hac": {
   "w": "بابا",
   "en": "grandfather",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "تاتە",
    "en": "father",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "بابا is “grandfather” (Sorani باپیر). “Father” is تاتە.",
    "ku": "بابا لە هەورامیدا واتە «باپیر». «باوک» دەبێتە تاتە."
   }
  },
  "src": "C"
 },
 {
  "id": "mama",
  "kind": "different",
  "ckb": {
   "w": "داپیر",
   "en": "grandmother"
  },
  "hac": {
   "w": "ماما",
   "en": "grandmother",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "ماما",
    "en": "grandmother",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "ماما is “grandmother”: مامام “my grandmother”. Don't read it as Sorani ماما “midwife”.",
    "ku": "ماما لە هەورامیدا واتە «داپیر»: مامام (داپیرم). مەیخوێنەرەوە بە مامای سۆرانی."
   }
  },
  "src": "C"
 },
 {
  "id": "hezi",
  "kind": "different",
  "ckb": {
   "w": "دوێنێ",
   "en": "yesterday"
  },
  "hac": {
   "w": "هێزی",
   "en": "yesterday",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "هێزی",
    "en": "yesterday",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "هێزی is “yesterday”; it has nothing to do with Sorani هێز “strength”. “Today” is ئارۆ, “tomorrow” سەبا.",
    "ku": "هێزی واتە «دوێنێ»؛ پەیوەندیی بە «هێز»ەوە نییە. «ئەمڕۆ» ئارۆیە و «سبەی» سەبا."
   }
  },
  "src": "C"
 },
 {
  "id": "yane",
  "kind": "different",
  "ckb": {
   "w": "ماڵ",
   "en": "house, home"
  },
  "hac": {
   "w": "یانە",
   "en": "house, home",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "یانە",
    "en": "house, home",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "یانە is the everyday word for “house, home”, not “club”. “To our house” is پەی یانەو وێما.",
    "ku": "یانە لە هەورامیدا واتە «ماڵ»، نەک «یانەی وەرزشی». «بۆ ماڵی خۆمان» دەبێتە پەی یانەو وێما."
   }
  },
  "src": "C"
 },
 {
  "id": "dega",
  "kind": "different",
  "ckb": {
   "w": "گوند",
   "en": "village"
  },
  "hac": {
   "w": "دەگا",
   "en": "village",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "دەگا",
    "en": "village",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "دەگا is “village” (a feminine noun), not Sorani دەگا “reaches”.",
    "ku": "دەگا لە هەورامیدا واتە «گوند» و ناوێکی مێیە، نەک «دەگا»ی کاری گەیشتن."
   }
  },
  "src": "C"
 },
 {
  "id": "ko",
  "kind": "different",
  "ckb": {
   "w": "کێو",
   "en": "mountain"
  },
  "hac": {
   "w": "کۆ",
   "en": "mountain",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "کۆ",
    "en": "mountain",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "کۆ is “mountain”, not Sorani کۆ “gathered, plural”. Its plural is کوێ. “Where” is کۆگە or چکۆ.",
    "ku": "کۆ لە هەورامیدا واتە «کێو»، نەک «کۆ»ی سۆرانی. کۆکەی کوێیە. «کوێ»ش دەبێتە کۆگە یان چکۆ."
   }
  },
  "src": "C"
 },
 {
  "id": "dile",
  "kind": "different",
  "ckb": {
   "w": "ناو",
   "en": "inside"
  },
  "hac": {
   "w": "دلێ",
   "en": "inside",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "دلێ",
    "en": "inside",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "دلێ is “inside”, not دڵ “heart”: دلێ چاڵێوە “into a pit”. The heart is دڵ, as in Sorani.",
    "ku": "دلێ واتە «ناو»، نەک «دڵ»: دلێ چاڵێوە (ناو چاڵێک). «دڵ» هەر دڵە."
   }
  },
  "src": "C"
 },
 {
  "id": "cherme",
  "kind": "different",
  "ckb": {
   "w": "سپی",
   "en": "white"
  },
  "hac": {
   "w": "چەرمە",
   "en": "white",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "چەرمە",
    "en": "white",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "چەرمە is “white” (feminine چەرمێ), not “leather”: ماس چەرمەن “yoghurt is white”.",
    "ku": "چەرمە واتە «سپی» (مێکەی چەرمێ)، نەک «چەرم»: ماس چەرمەن (ماست سپییە)."
   }
  },
  "src": "C"
 },
 {
  "id": "mas",
  "kind": "false-friend",
  "ckb": {
   "w": "ماسی",
   "en": "fish"
  },
  "hac": {
   "w": "ماس",
   "en": "yoghurt",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "ماساوی",
    "en": "fish",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "ماس is “yoghurt” (Sorani ماست). A fish is ماساوی.",
    "ku": "ماس واتە «ماست». «ماسی» دەبێتە ماساوی."
   }
  },
  "src": "C"
 },
 {
  "id": "chem",
  "kind": "false-friend",
  "ckb": {
   "w": "چەم",
   "en": "river"
  },
  "hac": {
   "w": "چەم",
   "en": "eye",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "ڕۆخانە",
    "en": "river",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "چەم is “eye”, usually in the plural چەمێ. A river is ڕۆخانە.",
    "ku": "چەم واتە «چاو»، زۆر جار بە کۆ: چەمێ. «چەم، چۆم» دەبێتە ڕۆخانە."
   }
  },
  "src": "C"
 },
 {
  "id": "leme",
  "kind": "different",
  "ckb": {
   "w": "سک",
   "en": "belly"
  },
  "hac": {
   "w": "لەمە",
   "en": "belly",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "لەمە",
    "en": "belly",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "لەمە is “belly”, not “from this”.",
    "ku": "لەمە واتە «سک»، نەک «لەمە»ی سۆرانی."
   }
  },
  "src": "C"
 },
 {
  "id": "her",
  "kind": "near-miss",
  "ckb": {
   "w": "کەر",
   "en": "donkey"
  },
  "hac": {
   "w": "هەر",
   "en": "donkey; also “every, only”",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "هەر",
    "en": "donkey",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "هەر is “donkey” as well as “every, only”. The context decides: هەرێوەش بێ “he had a donkey”.",
    "ku": "هەر هەم واتە «کەر»ە و هەم «هەر»ی سۆرانی. ڕستەکە یەکلایی دەکاتەوە: هەرێوەش بێ (کەرێکی هەبوو)."
   }
  },
  "src": "C"
 },
 {
  "id": "gird",
  "kind": "different",
  "ckb": {
   "w": "هەموو",
   "en": "all"
  },
  "hac": {
   "w": "گرد",
   "en": "all",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "گرد",
    "en": "all",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "گرد is “all”, not “hill” or “round”: گرد وتێنێ “everyone has fallen asleep”.",
    "ku": "گرد واتە «هەموو»، نەک «گرد»ی سۆرانی: گرد وتێنێ (هەموو خەوتوون)."
   }
  },
  "src": "C"
 },
 {
  "id": "aza",
  "kind": "near-miss",
  "ckb": {
   "w": "خێرا",
   "en": "quick, quickly"
  },
  "hac": {
   "w": "ئازا",
   "en": "quick, quickly; brave",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "ئازا",
    "en": "quick, quickly",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "ئازا also means “quick, quickly”: ئازا پەی کۆگەی بەرشیەی؟ “where are you rushing off to?”",
    "ku": "ئازا لە هەورامیدا واتای «خێرا»شی هەیە: ئازا پەی کۆگەی بەرشیەی؟ (بە پەلە بۆ کوێ دەرچوویت؟)"
   }
  },
  "src": "C"
 },
 {
  "id": "lwa",
  "kind": "different",
  "ckb": {
   "w": "ڕۆیشت",
   "en": "he went"
  },
  "hac": {
   "w": "لوا",
   "en": "he went, she went",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "لوا",
    "en": "he went, she went",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "لوا is the past of “go”: لوا پەی سەروو هانەی “she went to the spring”. Don't read it as Sorani لوا “it worked out”.",
    "ku": "لوا ڕابردووی «ڕۆیشتن»ە: لوا پەی سەروو هانەی (چوو بۆ سەر کانی). مەیخوێنەرەوە بە «لوا»ی سۆرانی."
   }
  },
  "src": "C"
 },
 {
  "id": "werm",
  "kind": "different",
  "ckb": {
   "w": "خەو",
   "en": "sleep"
  },
  "hac": {
   "w": "وەرم",
   "en": "sleep",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "وەرم",
    "en": "sleep",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "وەرم is “sleep”, not “swelling”: وەرمم پۆرە نەکەوت “I couldn't fall asleep”.",
    "ku": "وەرم واتە «خەو»، نەک «ئاوسان»: وەرمم پۆرە نەکەوت (خەوم لێ نەکەوت)."
   }
  },
  "src": "C"
 },
 {
  "id": "kere",
  "kind": "false-friend",
  "ckb": {
   "w": "کەرە",
   "en": "butter"
  },
  "hac": {
   "w": "کەرە",
   "en": "do it! (command)",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "کەرێ",
    "en": "butter",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "کەرە is the command “do!” (from کەردەی). Butter is کەرێ.",
    "ku": "کەرە فەرمانی «بکە»یە (لە کەردەی). «کەرە»ی خواردن دەبێتە کەرێ."
   }
  },
  "src": "C"
 },
 {
  "id": "bere",
  "kind": "near-miss",
  "ckb": {
   "w": "دەرگا",
   "en": "door"
  },
  "hac": {
   "w": "بەرە",
   "en": "door; also “take it!”",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "بەرە",
    "en": "door",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "بەرە is “door” (the دەر- → بەر- rule). It is also the command “take!”: ئوو کەرگا بەرە “take those hens”.",
    "ku": "بەرە واتە «دەرگا» (یاسای دەر- ← بەر-). فەرمانی «ببە»ش هەر بەرەیە: ئوو کەرگا بەرە (ئەو مریشکانە ببە)."
   }
  },
  "src": "C"
 },
 {
  "id": "ter",
  "kind": "near-miss",
  "ckb": {
   "w": "تر",
   "en": "other"
  },
  "hac": {
   "w": "تەر",
   "en": "other",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "تەر",
    "en": "other",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "تەر with plain ر is “other”: سەعاتێوەی تەر “another hour”. With ڕ, تەڕ is “wet”, as in Sorani.",
    "ku": "تەر بە ر واتە «تر»: سەعاتێوەی تەر (سەعاتێکی تر). بە ڕ، تەڕ واتە «تەڕ» وەک سۆرانی."
   }
  },
  "src": "C"
 },
 {
  "id": "adhe",
  "kind": "near-miss",
  "ckb": {
   "w": "ئەوان",
   "en": "they"
  },
  "hac": {
   "w": "ئاڎێ",
   "en": "they; also “her” after a particle",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "ئاڎێ",
    "en": "they",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "ئاڎێ is “they”, but after a preposition or the linking particle it is “her”: کتێبوو ئاڎێ “her book”.",
    "ku": "ئاڎێ واتە «ئەوان»، بەڵام دوای ئامرازێک یان ئامرازی دانەپاڵ دەبێتە «ئەو»ی مێ: کتێبوو ئاڎێ (کتێبی ئەو)."
   }
  },
  "src": "C"
 },
 {
  "id": "dede",
  "kind": "near-miss",
  "ckb": {
   "w": "دادە",
   "en": "elder sister"
  },
  "hac": {
   "w": "دێدێ",
   "en": "elder sister",
   "src": "C"
  },
  "fix": {
   "ckb>hac": {
    "w": "دێدێ",
    "en": "elder sister",
    "src": "C"
   }
  },
  "warn": {
   "ckb>hac": {
    "en": "دێدێ with د is “elder sister”. With ڎ, دێڎێ means “stepmother”, so the letter matters.",
    "ku": "دێدێ بە د واتە «دادە». بە ڎ، دێڎێ واتە «باوەژن»؛ بۆیە پیتەکە گرنگە."
   }
  },
  "src": "C"
 }
];
})();
