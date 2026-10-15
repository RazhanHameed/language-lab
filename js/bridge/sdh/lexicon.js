// Kalhori (Southern Kurdish) bridge for Sorani speakers: lexicon and placement probe.
// Pair ckb-sdh, direction ckb>sdh. Every Kalhori form is attested in the sources listed in sources.js
// or built from attested pieces (built: true). Nothing here has been checked by a native speaker.
(function () {
  const B = (window.__BRIDGES = window.__BRIDGES || {});
  const P = (B["ckb-sdh"] = B["ckb-sdh"] || {});
  P.LEXICON = [
 {
  "id": "father",
  "en": "father",
  "pos": "noun",
  "ckb": "باوک",
  "sdh": "باوگ",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "mother",
  "en": "mother",
  "pos": "noun",
  "ckb": "دایک",
  "sdh": "داڵگ",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "brother",
  "en": "brother",
  "pos": "noun",
  "ckb": "برا",
  "sdh": "برا",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "sister",
  "en": "sister",
  "pos": "noun",
  "ckb": "خوشک",
  "sdh": "خوەیشک",
  "gender": null,
  "rel": "cognate",
  "src": "zk"
 },
 {
  "id": "son",
  "en": "boy, son",
  "pos": "noun",
  "ckb": "کوڕ",
  "sdh": "کوڕ",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "girl",
  "en": "girl, daughter",
  "pos": "noun",
  "ckb": "کچ",
  "sdh": "دۊەت",
  "gender": null,
  "rel": "different",
  "src": "zk"
 },
 {
  "id": "man",
  "en": "man",
  "pos": "noun",
  "ckb": "پیاو",
  "sdh": "پیاگ",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "woman",
  "en": "woman, wife",
  "pos": "noun",
  "ckb": "ژن",
  "sdh": "ژن",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "child",
  "en": "child",
  "pos": "noun",
  "ckb": "منداڵ",
  "sdh": "مناڵ",
  "gender": null,
  "rel": "sound",
  "rules": [
   "cluster"
  ],
  "src": "saye"
 },
 {
  "id": "grandfather",
  "en": "grandfather",
  "pos": "noun",
  "ckb": "باپیر",
  "sdh": "باپیر",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "uncle_m",
  "en": "maternal uncle",
  "pos": "noun",
  "ckb": "خاڵۆ",
  "sdh": "خاڵوو",
  "gender": null,
  "rel": "sound",
  "rules": [
   "o-uu"
  ],
  "src": "saye"
 },
 {
  "id": "aunt",
  "en": "aunt (father's or mother's sister)",
  "pos": "noun",
  "ckb": "پوور",
  "sdh": "میمگ",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "bride",
  "en": "bride, daughter-in-law",
  "pos": "noun",
  "ckb": "بووک",
  "sdh": "وەۊ",
  "gender": null,
  "rel": "sound",
  "rules": [
   "b-w"
  ],
  "src": "zk"
 },
 {
  "id": "cousin",
  "en": "cousin (father's brother's child)",
  "pos": "noun",
  "ckb": "ئامۆزا",
  "sdh": "ئامووزا",
  "gender": null,
  "rel": "sound",
  "rules": [
   "o-uu"
  ],
  "src": "zk"
 },
 {
  "id": "friend",
  "en": "friend",
  "pos": "noun",
  "ckb": "دۆست",
  "sdh": "دووس",
  "gender": null,
  "rel": "sound",
  "rules": [
   "o-uu",
   "cluster"
  ],
  "src": "saye"
 },
 {
  "id": "people",
  "en": "people",
  "pos": "noun",
  "ckb": "خەڵک",
  "sdh": "مەردم",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "neighbour",
  "en": "neighbour",
  "pos": "noun",
  "ckb": "دراوسێ",
  "sdh": "هاوسا",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "head",
  "en": "head",
  "pos": "noun",
  "ckb": "سەر",
  "sdh": "سەر",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "hand",
  "en": "hand",
  "pos": "noun",
  "ckb": "دەست",
  "sdh": "دەس",
  "gender": null,
  "rel": "sound",
  "rules": [
   "cluster"
  ],
  "src": "saye"
 },
 {
  "id": "foot",
  "en": "foot, leg",
  "pos": "noun",
  "ckb": "پێ",
  "sdh": "پا",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "eye",
  "en": "eye",
  "pos": "noun",
  "ckb": "چاو",
  "sdh": "چەو",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "ear",
  "en": "ear",
  "pos": "noun",
  "ckb": "گوێ",
  "sdh": "گووش",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "nose",
  "en": "nose",
  "pos": "noun",
  "ckb": "لووت",
  "sdh": "لۊت",
  "gender": null,
  "rel": "sound",
  "rules": [
   "o-ue"
  ],
  "src": "zk"
 },
 {
  "id": "mouth",
  "en": "mouth",
  "pos": "noun",
  "ckb": "دەم",
  "sdh": "دەم",
  "gender": null,
  "rel": "same",
  "src": "zk"
 },
 {
  "id": "heart",
  "en": "heart",
  "pos": "noun",
  "ckb": "دڵ",
  "sdh": "دڵ",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "finger",
  "en": "finger",
  "pos": "noun",
  "ckb": "پەنجە",
  "sdh": "کلگ",
  "gender": null,
  "rel": "different",
  "src": "zk"
 },
 {
  "id": "water",
  "en": "water",
  "pos": "noun",
  "ckb": "ئاو",
  "sdh": "ئاو",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "fire",
  "en": "fire",
  "pos": "noun",
  "ckb": "ئاگر",
  "sdh": "ئاگر",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "wind",
  "en": "wind",
  "pos": "noun",
  "ckb": "با",
  "sdh": "وا",
  "gender": null,
  "rel": "sound",
  "rules": [
   "b-w"
  ],
  "src": "saye"
 },
 {
  "id": "rain",
  "en": "rain",
  "pos": "noun",
  "ckb": "باران",
  "sdh": "واران",
  "gender": null,
  "rel": "sound",
  "rules": [
   "b-w"
  ],
  "src": "saye"
 },
 {
  "id": "sun",
  "en": "sun",
  "pos": "noun",
  "ckb": "خۆر",
  "sdh": "خوەر",
  "gender": null,
  "rel": "sound",
  "rules": [
   "xo-xwe"
  ],
  "src": "saye"
 },
 {
  "id": "moon",
  "en": "moon, month",
  "pos": "noun",
  "ckb": "مانگ",
  "sdh": "مانگ",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "tree",
  "en": "tree, wood",
  "pos": "noun",
  "ckb": "دار",
  "sdh": "دار",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "winter",
  "en": "winter",
  "pos": "noun",
  "ckb": "زستان",
  "sdh": "زمسان",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "spring",
  "en": "spring (season)",
  "pos": "noun",
  "ckb": "بەهار",
  "sdh": "وەهار",
  "gender": null,
  "rel": "sound",
  "rules": [
   "b-w"
  ],
  "src": "saye"
 },
 {
  "id": "summer",
  "en": "summer",
  "pos": "noun",
  "ckb": "هاوین",
  "sdh": "تاوسان",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "night",
  "en": "night",
  "pos": "noun",
  "ckb": "شەو",
  "sdh": "شەو",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "day",
  "en": "day",
  "pos": "noun",
  "ckb": "ڕۆژ",
  "sdh": "ڕووژ",
  "gender": null,
  "rel": "sound",
  "rules": [
   "o-uu"
  ],
  "src": "saye"
 },
 {
  "id": "morning",
  "en": "morning",
  "pos": "noun",
  "ckb": "بەیانی",
  "sdh": "شەوەکی",
  "gender": null,
  "rel": "trap",
  "src": "saye"
 },
 {
  "id": "evening",
  "en": "evening",
  "pos": "noun",
  "ckb": "ئێوارە",
  "sdh": "ئێوارە",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "today",
  "en": "today",
  "pos": "adv",
  "ckb": "ئەمڕۆ",
  "sdh": "ئەمڕوو",
  "gender": null,
  "rel": "sound",
  "rules": [
   "o-uu"
  ],
  "src": "saye"
 },
 {
  "id": "tomorrow",
  "en": "tomorrow",
  "pos": "adv",
  "ckb": "سبەی",
  "sdh": "سوو",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "yesterday",
  "en": "yesterday",
  "pos": "adv",
  "ckb": "دوێنێ",
  "sdh": "دۊەکە",
  "gender": null,
  "rel": "different",
  "src": "zk"
 },
 {
  "id": "year",
  "en": "year",
  "pos": "noun",
  "ckb": "ساڵ",
  "sdh": "ساڵ",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "now",
  "en": "now",
  "pos": "adv",
  "ckb": "ئێستا",
  "sdh": "ئێرنگە",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "cow",
  "en": "cow",
  "pos": "noun",
  "ckb": "مانگا",
  "sdh": "مانگا",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "dog",
  "en": "dog",
  "pos": "noun",
  "ckb": "سەگ",
  "sdh": "سەگ",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "donkey",
  "en": "donkey",
  "pos": "noun",
  "ckb": "کەر",
  "sdh": "خەر",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "horse",
  "en": "horse",
  "pos": "noun",
  "ckb": "ئەسپ",
  "sdh": "ئەسپ",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "lamb",
  "en": "lamb",
  "pos": "noun",
  "ckb": "بەرخ",
  "sdh": "وەرک",
  "gender": null,
  "rel": "sound",
  "rules": [
   "b-w"
  ],
  "src": "saye"
 },
 {
  "id": "bird",
  "en": "bird",
  "pos": "noun",
  "ckb": "باڵندە",
  "sdh": "مەل",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "partridge",
  "en": "partridge; also \"blue\"",
  "pos": "noun",
  "ckb": "کەو",
  "sdh": "کەو",
  "gender": null,
  "rel": "trap",
  "src": "zk"
 },
 {
  "id": "home",
  "en": "home, house",
  "pos": "noun",
  "ckb": "ماڵ",
  "sdh": "ماڵ",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "house",
  "en": "house (the building)",
  "pos": "noun",
  "ckb": "خانوو",
  "sdh": "خانگ",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "door",
  "en": "door",
  "pos": "noun",
  "ckb": "دەرگا",
  "sdh": "قاپی",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "bread",
  "en": "bread",
  "pos": "noun",
  "ckb": "نان",
  "sdh": "نان",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "meat",
  "en": "meat",
  "pos": "noun",
  "ckb": "گۆشت",
  "sdh": "گوشت",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "tea",
  "en": "tea",
  "pos": "noun",
  "ckb": "چا",
  "sdh": "چای",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "wheat",
  "en": "wheat",
  "pos": "noun",
  "ckb": "گەنم",
  "sdh": "گەنم",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "barley",
  "en": "barley",
  "pos": "noun",
  "ckb": "جۆ",
  "sdh": "جۊ",
  "gender": null,
  "rel": "sound",
  "rules": [
   "o-ue"
  ],
  "src": "zk"
 },
 {
  "id": "flour",
  "en": "flour",
  "pos": "noun",
  "ckb": "ئارد",
  "sdh": "ئارد",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "glass",
  "en": "glass, cup",
  "pos": "noun",
  "ckb": "پەرداخ",
  "sdh": "جام",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "stick",
  "en": "walking stick",
  "pos": "noun",
  "ckb": "گۆچان",
  "sdh": "گووچان",
  "gender": null,
  "rel": "sound",
  "rules": [
   "o-uu"
  ],
  "src": "saye"
 },
 {
  "id": "pocket",
  "en": "pocket",
  "pos": "noun",
  "ckb": "گیرفان",
  "sdh": "گیرفان",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "school",
  "en": "school",
  "pos": "noun",
  "ckb": "قوتابخانە",
  "sdh": "مەکتەو",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "market",
  "en": "market, bazaar",
  "pos": "noun",
  "ckb": "بازاڕ",
  "sdh": "بازاڕ",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "road",
  "en": "road, way",
  "pos": "noun",
  "ckb": "ڕێ",
  "sdh": "ڕێ",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "orchard",
  "en": "garden, orchard",
  "pos": "noun",
  "ckb": "باخ",
  "sdh": "باخ",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "work",
  "en": "work",
  "pos": "noun",
  "ckb": "کار",
  "sdh": "کار",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "city",
  "en": "city",
  "pos": "noun",
  "ckb": "شار",
  "sdh": "شار",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "dinner",
  "en": "dinner",
  "pos": "noun",
  "ckb": "شێو",
  "sdh": "شام",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "guest",
  "en": "guest",
  "pos": "noun",
  "ckb": "میوان",
  "sdh": "میوان",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "good",
  "en": "good",
  "pos": "adj",
  "ckb": "باش",
  "sdh": "خاس",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "big",
  "en": "big",
  "pos": "adj",
  "ckb": "گەورە",
  "sdh": "گەورا",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "large",
  "en": "big, large",
  "pos": "adj",
  "ckb": "گەورە",
  "sdh": "کەڵگەت",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "very",
  "en": "very; much, many",
  "pos": "adv",
  "ckb": "زۆر",
  "sdh": "فرە",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "little",
  "en": "few, little",
  "pos": "adj",
  "ckb": "کەم",
  "sdh": "کەم",
  "gender": null,
  "rel": "trap",
  "src": "saye"
 },
 {
  "id": "hot",
  "en": "warm, hot",
  "pos": "adj",
  "ckb": "گەرم",
  "sdh": "گەرم",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "cold",
  "en": "cold",
  "pos": "adj",
  "ckb": "سارد",
  "sdh": "سەرد",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "red",
  "en": "red",
  "pos": "adj",
  "ckb": "سوور",
  "sdh": "سۊەر",
  "gender": null,
  "rel": "sound",
  "rules": [
   "o-ue"
  ],
  "src": "zk"
 },
 {
  "id": "black",
  "en": "black",
  "pos": "adj",
  "ckb": "ڕەش",
  "sdh": "سیە",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "white",
  "en": "white",
  "pos": "adj",
  "ckb": "سپی",
  "sdh": "چەرمگ",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "high",
  "en": "high, tall",
  "pos": "adj",
  "ckb": "بەرز",
  "sdh": "بەرز",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "far",
  "en": "far",
  "pos": "adj",
  "ckb": "دوور",
  "sdh": "دۊر",
  "gender": null,
  "rel": "sound",
  "rules": [
   "o-ue"
  ],
  "src": "saye"
 },
 {
  "id": "near",
  "en": "near",
  "pos": "adj",
  "ckb": "نزیک",
  "sdh": "نزیک",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "long",
  "en": "long; tall",
  "pos": "adj",
  "ckb": "درێژ",
  "sdh": "درێژ",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "old_person",
  "en": "old (of people)",
  "pos": "adj",
  "ckb": "پیر",
  "sdh": "پیر",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "beautiful",
  "en": "beautiful; young",
  "pos": "adj",
  "ckb": "جوان",
  "sdh": "جوان",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "heavy",
  "en": "heavy",
  "pos": "adj",
  "ckb": "قورس",
  "sdh": "سەننگ",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "ill",
  "en": "ill",
  "pos": "adj",
  "ckb": "نەخۆش",
  "sdh": "نەخوەش",
  "gender": null,
  "rel": "sound",
  "rules": [
   "xo-xwe"
  ],
  "src": "saye"
 },
 {
  "id": "tired",
  "en": "tired",
  "pos": "adj",
  "ckb": "ماندوو",
  "sdh": "شەکەت",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "hungry",
  "en": "hungry",
  "pos": "adj",
  "ckb": "برسی",
  "sdh": "ورسگ",
  "gender": null,
  "rel": "sound",
  "rules": [
   "b-w"
  ],
  "src": "zk"
 },
 {
  "id": "pleasant",
  "en": "pleasant, nice",
  "pos": "adj",
  "ckb": "خۆش",
  "sdh": "خوەش",
  "gender": null,
  "rel": "sound",
  "rules": [
   "xo-xwe"
  ],
  "src": "saye"
 },
 {
  "id": "fat",
  "en": "fat",
  "pos": "adj",
  "ckb": "قەڵەو",
  "sdh": "چاخ",
  "gender": null,
  "rel": "trap",
  "src": "saye"
 },
 {
  "id": "straight",
  "en": "straight; true, right",
  "pos": "adj",
  "ckb": "ڕاست",
  "sdh": "ڕاس",
  "gender": null,
  "rel": "sound",
  "rules": [
   "cluster"
  ],
  "src": "saye"
 },
 {
  "id": "rich",
  "en": "rich",
  "pos": "adj",
  "ckb": "دەوڵەمەند",
  "sdh": "دەوڵەمەن",
  "gender": null,
  "rel": "sound",
  "rules": [
   "cluster"
  ],
  "src": "saye"
 },
 {
  "id": "early",
  "en": "early, soon",
  "pos": "adv",
  "ckb": "زوو",
  "sdh": "زۊ",
  "gender": null,
  "rel": "sound",
  "rules": [
   "o-ue"
  ],
  "src": "saye"
 },
 {
  "id": "come",
  "en": "to come; they came",
  "pos": "verb",
  "ckb": "هاتن",
  "sdh": "هاتن",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "went",
  "en": "went",
  "pos": "verb",
  "ckb": "چوو",
  "sdh": "چۊ",
  "gender": null,
  "rel": "trap",
  "rules": [
   "o-ue"
  ],
  "src": "saye"
 },
 {
  "id": "has_gone",
  "en": "has gone",
  "pos": "verb",
  "ckb": "چووە",
  "sdh": "چگ",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "go_imp",
  "en": "go! (to one person)",
  "pos": "verb",
  "ckb": "بڕۆ",
  "sdh": "بچوو",
  "gender": null,
  "rel": "trap",
  "src": "saye"
 },
 {
  "id": "do",
  "en": "to do, to make",
  "pos": "verb",
  "ckb": "کردن",
  "sdh": "کردن",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "i_do",
  "en": "I do",
  "pos": "verb",
  "ckb": "دەکەم",
  "sdh": "کەم",
  "gender": null,
  "rel": "trap",
  "rules": [
   "de-zero"
  ],
  "src": "saye"
 },
 {
  "id": "he_does",
  "en": "he/she does",
  "pos": "verb",
  "ckb": "دەکات",
  "sdh": "کەی",
  "gender": null,
  "rel": "trap",
  "rules": [
   "de-zero"
  ],
  "src": "saye"
 },
 {
  "id": "gave",
  "en": "gave",
  "pos": "verb",
  "ckb": "دا",
  "sdh": "دا",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "i_give",
  "en": "I give",
  "pos": "verb",
  "ckb": "دەدەم",
  "sdh": "دەم",
  "gender": null,
  "rel": "trap",
  "rules": [
   "de-zero"
  ],
  "src": "saye"
 },
 {
  "id": "said",
  "en": "said (he/she)",
  "pos": "verb",
  "ckb": "وتی",
  "sdh": "وەت",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "see",
  "en": "to see",
  "pos": "verb",
  "ckb": "بینین",
  "sdh": "دیین",
  "gender": null,
  "rel": "cognate",
  "src": "zk"
 },
 {
  "id": "i_saw",
  "en": "I saw",
  "pos": "verb",
  "ckb": "بینیم",
  "sdh": "دیم",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "i_see",
  "en": "I see",
  "pos": "verb",
  "ckb": "دەبینم",
  "sdh": "دۊنم",
  "gender": null,
  "rel": "different",
  "src": "zk"
 },
 {
  "id": "i_dont_know",
  "en": "I don't know",
  "pos": "verb",
  "ckb": "نازانم",
  "sdh": "نیەزانم",
  "gender": null,
  "rel": "sound",
  "rules": [
   "na-nie"
  ],
  "src": "zk"
 },
 {
  "id": "they_know",
  "en": "they know",
  "pos": "verb",
  "ckb": "دەزانن",
  "sdh": "زانن",
  "gender": null,
  "rel": "sound",
  "rules": [
   "de-zero"
  ],
  "src": "saye"
 },
 {
  "id": "eat",
  "en": "to eat",
  "pos": "verb",
  "ckb": "خواردن",
  "sdh": "خواردن",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "sleep",
  "en": "to sleep",
  "pos": "verb",
  "ckb": "خەوتن",
  "sdh": "خەفتن",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "fall",
  "en": "fell",
  "pos": "verb",
  "ckb": "کەوت",
  "sdh": "کەفت",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "sit",
  "en": "to sit; they sat",
  "pos": "verb",
  "ckb": "دانیشتن",
  "sdh": "نیشتن",
  "gender": null,
  "rel": "trap",
  "src": "saye"
 },
 {
  "id": "sit_imp",
  "en": "sit! (to one person)",
  "pos": "verb",
  "ckb": "دانیشە",
  "sdh": "بنیش",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "got_up",
  "en": "they got up",
  "pos": "verb",
  "ckb": "هەڵسان",
  "sdh": "ئەڵسیان",
  "gender": null,
  "rel": "sound",
  "rules": [
   "hel-el"
  ],
  "src": "saye"
 },
 {
  "id": "i_get_up",
  "en": "I get up",
  "pos": "verb",
  "ckb": "هەڵدەستم",
  "sdh": "ئەڵم",
  "gender": null,
  "rel": "sound",
  "rules": [
   "hel-el",
   "de-zero"
  ],
  "src": "saye"
 },
 {
  "id": "picked_up",
  "en": "picked up",
  "pos": "verb",
  "ckb": "هەڵگرت",
  "sdh": "ئەڵگرت",
  "gender": null,
  "rel": "sound",
  "rules": [
   "hel-el"
  ],
  "src": "saye"
 },
 {
  "id": "i_take",
  "en": "I take, I hold",
  "pos": "verb",
  "ckb": "دەگرم",
  "sdh": "گرم",
  "gender": null,
  "rel": "sound",
  "rules": [
   "de-zero"
  ],
  "src": "saye"
 },
 {
  "id": "i_buy",
  "en": "I buy; I take",
  "pos": "verb",
  "ckb": "دەکڕم",
  "sdh": "سێنم",
  "gender": null,
  "rel": "trap",
  "src": "saye"
 },
 {
  "id": "i_want",
  "en": "I want",
  "pos": "verb",
  "ckb": "دەمەوێ",
  "sdh": "توام",
  "gender": null,
  "rel": "different",
  "src": "zk"
 },
 {
  "id": "i_wanted",
  "en": "I wanted",
  "pos": "verb",
  "ckb": "ویستم",
  "sdh": "تواسم",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "i_cant",
  "en": "I can't",
  "pos": "verb",
  "ckb": "ناتوانم",
  "sdh": "نیەتۊەنم",
  "gender": null,
  "rel": "cognate",
  "rules": [
   "na-nie"
  ],
  "src": "zk"
 },
 {
  "id": "know_person",
  "en": "they know (someone)",
  "pos": "verb",
  "ckb": "دەناسن",
  "sdh": "ناسن",
  "gender": null,
  "rel": "sound",
  "rules": [
   "de-zero"
  ],
  "src": "saye"
 },
 {
  "id": "took",
  "en": "took (away)",
  "pos": "verb",
  "ckb": "برد",
  "sdh": "برد",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "brought",
  "en": "brought",
  "pos": "verb",
  "ckb": "هێنا",
  "sdh": "هاورد",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "dies",
  "en": "dies",
  "pos": "verb",
  "ckb": "دەمرێ",
  "sdh": "مری",
  "gender": null,
  "rel": "sound",
  "rules": [
   "de-zero"
  ],
  "src": "saye"
 },
 {
  "id": "i_ask",
  "en": "I ask",
  "pos": "verb",
  "ckb": "دەپرسم",
  "sdh": "پرسم",
  "gender": null,
  "rel": "sound",
  "rules": [
   "de-zero"
  ],
  "src": "saye"
 },
 {
  "id": "i_have",
  "en": "I have",
  "pos": "verb",
  "ckb": "هەمە",
  "sdh": "دێرم",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "you_have",
  "en": "you have",
  "pos": "verb",
  "ckb": "هەتە",
  "sdh": "دێری",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "they_had",
  "en": "they had",
  "pos": "verb",
  "ckb": "هەیانبوو",
  "sdh": "دایشتن",
  "gender": null,
  "rel": "trap",
  "src": "saye"
 },
 {
  "id": "i_dont_have",
  "en": "I don't have",
  "pos": "verb",
  "ckb": "نیمە",
  "sdh": "نێرم",
  "gender": null,
  "rel": "different",
  "src": "parallel"
 },
 {
  "id": "pulled",
  "en": "I pulled",
  "pos": "verb",
  "ckb": "کێشام",
  "sdh": "کیشام",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "is_at",
  "en": "is (there), is located",
  "pos": "verb",
  "ckb": "هەیە؛ ـە",
  "sdh": "ها",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "i_am_at",
  "en": "I am (somewhere)",
  "pos": "verb",
  "ckb": "ـم (لێرەم)",
  "sdh": "هام",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "is_not",
  "en": "is not; there isn't",
  "pos": "verb",
  "ckb": "نییە",
  "sdh": "نییە",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "i_was",
  "en": "I was",
  "pos": "verb",
  "ckb": "بووم",
  "sdh": "بۊم",
  "gender": null,
  "rel": "sound",
  "rules": [
   "o-ue"
  ],
  "src": "saye"
 },
 {
  "id": "fell_asleep",
  "en": "has fallen asleep",
  "pos": "verb",
  "ckb": "خەوتووە",
  "sdh": "خەفتگە",
  "gender": null,
  "rel": "sound",
  "rules": [
   "part-g"
  ],
  "src": "saye"
 },
 {
  "id": "has_risen",
  "en": "has risen",
  "pos": "verb",
  "ckb": "هەڵهاتووە",
  "sdh": "ئەڵاتگە",
  "gender": null,
  "rel": "sound",
  "rules": [
   "hel-el",
   "part-g"
  ],
  "src": "saye"
 },
 {
  "id": "must",
  "en": "must",
  "pos": "other",
  "ckb": "دەبێ",
  "sdh": "بایەد",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "let",
  "en": "let (+ verb)",
  "pos": "other",
  "ckb": "با",
  "sdh": "بیلا",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "may",
  "en": "may, might",
  "pos": "other",
  "ckb": "لەوانەیە",
  "sdh": "هاتی",
  "gender": null,
  "rel": "trap",
  "src": "saye"
 },
 {
  "id": "for",
  "en": "for, to; why",
  "pos": "other",
  "ckb": "بۆ",
  "sdh": "ئەڕا",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "by",
  "en": "with, by, at",
  "pos": "other",
  "ckb": "بە",
  "sdh": "وە",
  "gender": null,
  "rel": "sound",
  "rules": [
   "b-w"
  ],
  "src": "saye"
 },
 {
  "id": "in",
  "en": "in, from, at",
  "pos": "other",
  "ckb": "لە",
  "sdh": "لە",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "with",
  "en": "with (ئەوڵی … دا)",
  "pos": "other",
  "ckb": "لەگەڵ",
  "sdh": "ئەوڵ",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "like",
  "en": "like",
  "pos": "other",
  "ckb": "وەک",
  "sdh": "جوور",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "except",
  "en": "except",
  "pos": "other",
  "ckb": "جگە لە",
  "sdh": "بێجگە",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "belong",
  "en": "belonging to (hers, mine)",
  "pos": "pron",
  "ckb": "هی",
  "sdh": "هن",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "i",
  "en": "I, me",
  "pos": "pron",
  "ckb": "من",
  "sdh": "مە",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "you",
  "en": "you (one person)",
  "pos": "pron",
  "ckb": "تۆ",
  "sdh": "تە",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "we",
  "en": "we",
  "pos": "pron",
  "ckb": "ئێمە",
  "sdh": "ئیمە",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "you_pl",
  "en": "you (plural)",
  "pos": "pron",
  "ckb": "ئێوە",
  "sdh": "ئیوە",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "they",
  "en": "they",
  "pos": "pron",
  "ckb": "ئەوان",
  "sdh": "ئەوان",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "what",
  "en": "what",
  "pos": "pron",
  "ckb": "چی",
  "sdh": "چە",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "who",
  "en": "who",
  "pos": "pron",
  "ckb": "کێ",
  "sdh": "کێ",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "where",
  "en": "where",
  "pos": "adv",
  "ckb": "کوێ",
  "sdh": "کوو",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "when",
  "en": "when",
  "pos": "adv",
  "ckb": "کەی",
  "sdh": "کەی",
  "gender": null,
  "rel": "trap",
  "src": "saye"
 },
 {
  "id": "how_many",
  "en": "how many",
  "pos": "adv",
  "ckb": "چەند",
  "sdh": "چەن",
  "gender": null,
  "rel": "sound",
  "rules": [
   "cluster"
  ],
  "src": "saye"
 },
 {
  "id": "how_much",
  "en": "how much",
  "pos": "adv",
  "ckb": "چەندێک",
  "sdh": "چەنێ",
  "gender": null,
  "rel": "sound",
  "rules": [
   "cluster"
  ],
  "src": "saye"
 },
 {
  "id": "how",
  "en": "how",
  "pos": "adv",
  "ckb": "چۆن",
  "sdh": "چۊن",
  "gender": null,
  "rel": "sound",
  "rules": [
   "o-ue"
  ],
  "src": "saye"
 },
 {
  "id": "which",
  "en": "which",
  "pos": "pron",
  "ckb": "کام",
  "sdh": "کام",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "this",
  "en": "this (one)",
  "pos": "pron",
  "ckb": "ئەمە",
  "sdh": "ئەیە",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "that",
  "en": "that (one)",
  "pos": "pron",
  "ckb": "ئەوە",
  "sdh": "ئەوە",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "these",
  "en": "these",
  "pos": "pron",
  "ckb": "ئەمانە",
  "sdh": "ئەیانە",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "here",
  "en": "(in) here",
  "pos": "adv",
  "ckb": "لێرە",
  "sdh": "لێرە",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "there",
  "en": "(in) there",
  "pos": "adv",
  "ckb": "لەوێ",
  "sdh": "لەورە",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "still",
  "en": "still, yet",
  "pos": "adv",
  "ckb": "هێشتا",
  "sdh": "هێمان",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "all",
  "en": "all, every",
  "pos": "pron",
  "ckb": "هەموو",
  "sdh": "گیشت",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "every",
  "en": "every",
  "pos": "adj",
  "ckb": "هەر",
  "sdh": "هەر",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "when_conj",
  "en": "when (as a link word)",
  "pos": "other",
  "ckb": "کاتێ",
  "sdh": "وەختی",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "if",
  "en": "if",
  "pos": "other",
  "ckb": "ئەگەر",
  "sdh": "ئەگەر",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "but",
  "en": "but",
  "pos": "other",
  "ckb": "بەڵام",
  "sdh": "وەلی",
  "gender": null,
  "rel": "trap",
  "src": "saye"
 },
 {
  "id": "then_after",
  "en": "then, after that",
  "pos": "other",
  "ckb": "ئینجا",
  "sdh": "ئمجا",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "yes",
  "en": "yes",
  "pos": "other",
  "ckb": "ئا، بەڵێ",
  "sdh": "ئا",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "no",
  "en": "no",
  "pos": "other",
  "ckb": "نا، نەخێر",
  "sdh": "نە",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "ongoing",
  "en": "(busy) doing, -ing",
  "pos": "adv",
  "ckb": "خەریک",
  "sdh": "پەسا",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "myself",
  "en": "myself",
  "pos": "pron",
  "ckb": "خۆم",
  "sdh": "خوەم",
  "gender": null,
  "rel": "sound",
  "rules": [
   "xo-xwe"
  ],
  "src": "saye"
 },
 {
  "id": "himself",
  "en": "himself, herself",
  "pos": "pron",
  "ckb": "خۆی",
  "sdh": "خوەی",
  "gender": null,
  "rel": "sound",
  "rules": [
   "xo-xwe"
  ],
  "src": "saye"
 },
 {
  "id": "some",
  "en": "some",
  "pos": "pron",
  "ckb": "هەندێک",
  "sdh": "قەیری",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "nobody",
  "en": "nobody (with a negative)",
  "pos": "pron",
  "ckb": "کەس",
  "sdh": "کەس",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "of_course",
  "en": "of course",
  "pos": "adv",
  "ckb": "هەڵبەت",
  "sdh": "ئەڵبەت",
  "gender": null,
  "rel": "sound",
  "rules": [
   "hel-el"
  ],
  "src": "saye"
 },
 {
  "id": "late",
  "en": "late",
  "pos": "adv",
  "ckb": "درەنگ",
  "sdh": "دێر",
  "gender": null,
  "rel": "different",
  "src": "saye"
 },
 {
  "id": "one",
  "en": "one",
  "pos": "num",
  "ckb": "یەک",
  "sdh": "یەک",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "two",
  "en": "two",
  "pos": "num",
  "ckb": "دوو",
  "sdh": "دوو",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "three",
  "en": "three",
  "pos": "num",
  "ckb": "سێ",
  "sdh": "سێ",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "four",
  "en": "four",
  "pos": "num",
  "ckb": "چوار",
  "sdh": "چوار",
  "gender": null,
  "rel": "same",
  "src": "saye"
 },
 {
  "id": "seven",
  "en": "seven",
  "pos": "num",
  "ckb": "حەوت",
  "sdh": "هەفت",
  "gender": null,
  "rel": "cognate",
  "src": "saye"
 },
 {
  "id": "twenty",
  "en": "twenty",
  "pos": "num",
  "ckb": "بیست",
  "sdh": "بیس",
  "gender": null,
  "rel": "sound",
  "rules": [
   "cluster"
  ],
  "src": "saye"
 },
 {
  "id": "forty",
  "en": "forty",
  "pos": "num",
  "ckb": "چل",
  "sdh": "چل",
  "gender": null,
  "rel": "same",
  "src": "saye"
 }
];
  P.PROBE = {
 "ckb>sdh": [
  "brother",
  "home",
  "water",
  "bread",
  "night",
  "father",
  "man",
  "day",
  "sun",
  "hand",
  "rain",
  "today",
  "girl",
  "good",
  "very",
  "now",
  "all",
  "for",
  "morning",
  "tomorrow",
  "went",
  "i_do",
  "i_have",
  "is_at",
  "sit",
  "this",
  "early",
  "ill",
  "rich",
  "of_course"
 ]
};
})();
