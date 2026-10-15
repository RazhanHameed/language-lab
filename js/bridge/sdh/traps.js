// Kalhori (Southern Kurdish) bridge for Sorani speakers: false friends and different words.
// Pair ckb-sdh, direction ckb>sdh. Every Kalhori form is attested in the sources listed in sources.js
// or built from attested pieces (built: true). Nothing here has been checked by a native speaker.
(function () {
  const B = (window.__BRIDGES = window.__BRIDGES || {});
  const P = (B["ckb-sdh"] = B["ckb-sdh"] || {});
  P.TRAPS = [
 {
  "id": "chuu",
  "kind": "false-friend",
  "ckb": {
   "w": "چوو",
   "en": "went"
  },
  "sdh": {
   "w": "چوو",
   "en": "goes, will go"
  },
  "fix": {
   "ckb>sdh": {
    "w": "چۊ",
    "en": "went"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "Saye says چوو is the present in Kalhori: 'goes, will go'. 'Went' is چۊ, with ۊ. His printing is not always consistent, so let a time word decide.",
    "ku": "سایە دەڵێت «چوو» لە کەڵهوڕیدا ئێستایە: «دەچێت». «چوو»ی سۆرانی دەبێتە «چۊ». چاپەکەی هەمیشە یەکدەست نییە، بۆیە با وشەی کات بڕیار بدات."
   }
  },
  "src": "saye"
 },
 {
  "id": "buu",
  "kind": "false-friend",
  "ckb": {
   "w": "بوو",
   "en": "was"
  },
  "sdh": {
   "w": "بوو",
   "en": "becomes, will be"
  },
  "fix": {
   "ckb>sdh": {
    "w": "بۊم",
    "en": "I was"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "بوو is present in Kalhori: مانگی تر عومرم بوو وە چل ساڵ 'next month I'll turn forty'. 'I was' is بۊم. Saye also prints بوو for 'was' in a few sentences.",
    "ku": "«بوو» لە کەڵهوڕیدا ئێستایە: «مانگی تر عومرم بوو وە چل ساڵ» = تەمەنم دەبێتە چل. «بووم» دەبێتە «بۊم». سایە لە چەند ڕستەیەکدا «بوو»یشی بۆ ڕابردوو نووسیوە."
   }
  },
  "src": "saye"
 },
 {
  "id": "kem",
  "kind": "false-friend",
  "ckb": {
   "w": "کەم",
   "en": "few, little"
  },
  "sdh": {
   "w": "کەم",
   "en": "I do (also: few)"
  },
  "fix": {
   "ckb>sdh": {
    "w": "کەم",
    "en": "few: also کەم"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "Without دە-, 'I do' is کەم: دەسد ماچ کەم 'I kiss your hand'. کەم 'few' exists too, so look for an object in front of it.",
    "ku": "بێ «دە»، «دەکەم» دەبێتە «کەم»: دەسد ماچ کەم. «کەم» بە واتای «کەم»یش هەیە، بۆیە سەیری پێشەوەی بکە."
   }
  },
  "src": "saye"
 },
 {
  "id": "key",
  "kind": "false-friend",
  "ckb": {
   "w": "کەی",
   "en": "when?"
  },
  "sdh": {
   "w": "کەی",
   "en": "he/she does (also: when?)"
  },
  "fix": {
   "ckb>sdh": {
    "w": "کەی",
    "en": "when?: also کەی"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "کەی is also 'he/she does': باوگت لە ماڵ چە کەی؟ 'What does your father do at home?' At the end of a clause it is usually the verb.",
    "ku": "«کەی» واتای «دەکات»یشە: باوگت لە ماڵ چە کەی؟ = باوکت لە ماڵ چی دەکات؟ لە کۆتایی ڕستەدا زۆرتر کارە."
   }
  },
  "src": "saye"
 },
 {
  "id": "dem",
  "kind": "false-friend",
  "ckb": {
   "w": "دەم",
   "en": "mouth"
  },
  "sdh": {
   "w": "دەم",
   "en": "I give (also: mouth)"
  },
  "fix": {
   "ckb>sdh": {
    "w": "دەم",
    "en": "mouth: also دەم"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "دەم is also 'I give': خوەم ماڵیان نیشانت دەم 'I'll show you their house myself'.",
    "ku": "«دەم» واتای «دەدەم»یشە: خوەم ماڵیان نیشانت دەم = خۆم ماڵیانت نیشان دەدەم."
   }
  },
  "src": "saye"
 },
 {
  "id": "dayisht",
  "kind": "near-miss",
  "ckb": {
   "w": "دانیشتن",
   "en": "to sit"
  },
  "sdh": {
   "w": "دایشتن",
   "en": "they had"
  },
  "fix": {
   "ckb>sdh": {
    "w": "نیشتن",
    "en": "to sit; they sat"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "دایشتن is the past of 'have': سێ چوار باخ دایشتن 'they had three or four orchards'. 'To sit' is نیشتن.",
    "ku": "«دایشتن» ڕابردووی «دێرم»ە: سێ چوار باخ دایشتن = سێ چوار باخیان هەبوو. «دانیشتن» دەبێتە «نیشتن»."
   }
  },
  "src": "saye"
 },
 {
  "id": "nishtin",
  "kind": "false-friend",
  "ckb": {
   "w": "نیشتن",
   "en": "to land, to settle"
  },
  "sdh": {
   "w": "نیشتن",
   "en": "to sit; they sat"
  },
  "fix": {
   "ckb>sdh": {
    "w": "نیشتن",
    "en": "to sit"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "Kalhori نیشتن is plain 'to sit' (Sorani دانیشتن): ئەوان ئەڵسیان و ئیمە نیشتیم 'they got up and we sat down'.",
    "ku": "«نیشتن»ی کەڵهوڕی هەمان «دانیشتن»ی سۆرانییە: ئەوان ئەڵسیان و ئیمە نیشتیم = ئەوان هەستان و ئێمە دانیشتین."
   }
  },
  "src": "saye"
 },
 {
  "id": "teryan",
  "kind": "false-friend",
  "ckb": {
   "w": "تێریان کردم",
   "en": "they fed me"
  },
  "sdh": {
   "w": "تێریان کردم",
   "en": "I fed them"
  },
  "fix": {
   "ckb>sdh": {
    "w": "تێریان کردم",
    "en": "I fed them (Sorani تێرم کردن)"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "Same three words, opposite meaning. In Kalhori the doer is the ending on the verb (-م = I), and -یان is the object.",
    "ku": "هەمان سێ وشە، واتای پێچەوانە. لە کەڵهوڕیدا بکەر کۆتاییی کارەکەیە (ـم = من) و «ـیان» بەرکارە."
   }
  },
  "src": "saye"
 },
 {
  "id": "hati",
  "kind": "false-friend",
  "ckb": {
   "w": "هاتی",
   "en": "you came"
  },
  "sdh": {
   "w": "هاتی",
   "en": "may, might (+ verb)"
  },
  "fix": {
   "ckb>sdh": {
    "w": "هاتی بچم",
    "en": "I might go"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "Before a subjunctive, هاتی means 'may, might' for every person: هاتی بچم 'I might go'. Alone it can still be 'you came'.",
    "ku": "لە پێش کاری داخوازی، «هاتی» واتە «لەوانەیە» بۆ هەموو کەسێک: هاتی بچم = لەوانەیە بچم. بەتەنیا هێشتا دەکرێت «هاتیت» بێت."
   }
  },
  "src": "saye"
 },
 {
  "id": "weli",
  "kind": "false-friend",
  "ckb": {
   "w": "وەلی",
   "en": "guardian, saint"
  },
  "sdh": {
   "w": "وەلی",
   "en": "but"
  },
  "fix": {
   "ckb>sdh": {
    "w": "وەلی",
    "en": "but"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "وەلی is the everyday 'but': فرە شەکەتم، وەلی نیەوێرم بنیشم 'I'm very tired, but I don't dare sit down'.",
    "ku": "«وەلی» واتە «بەڵام»: فرە شەکەتم، وەلی نیەوێرم بنیشم."
   }
  },
  "src": "saye"
 },
 {
  "id": "sen",
  "kind": "near-miss",
  "ckb": {
   "w": "سەندن",
   "en": "to take"
  },
  "sdh": {
   "w": "سێنم",
   "en": "I buy; I take"
  },
  "fix": {
   "ckb>sdh": {
    "w": "بسێنم",
    "en": "(that) I buy"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "سێن- is the everyday 'buy' as well as 'take': لە کوو داسێک بسێنم؟ 'Where can I buy a sickle?'",
    "ku": "«سێن-» هەم «کڕین»ە هەم «سەندن»: لە کوو داسێک بسێنم؟ = لە کوێ داسێک بکڕم؟"
   }
  },
  "src": "saye"
 },
 {
  "id": "kew",
  "kind": "false-friend",
  "ckb": {
   "w": "کەو",
   "en": "partridge"
  },
  "sdh": {
   "w": "کەو",
   "en": "partridge; also blue"
  },
  "fix": {
   "ckb>sdh": {
    "w": "کەو",
    "en": "blue"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "In the Kalhori colour list کەو is 'blue'. Sorani uses شین.",
    "ku": "لە لیستی ڕەنگە کەڵهوڕییەکاندا «کەو» واتە «شین»."
   }
  },
  "src": "zk"
 },
 {
  "id": "shewaki",
  "kind": "near-miss",
  "ckb": {
   "w": "شەو",
   "en": "night"
  },
  "sdh": {
   "w": "شەوەکی",
   "en": "morning"
  },
  "fix": {
   "ckb>sdh": {
    "w": "شەوەکی",
    "en": "morning"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "شەوەکی looks like 'night' but means 'morning' (Sorani بەیانی): شەوەکی چە خواردی؟ 'What did you eat this morning?'",
    "ku": "«شەوەکی» لە «شەو» دەچێت، بەڵام واتە «بەیانی»: شەوەکی چە خواردی؟ = بەیانی چیت خوارد؟"
   }
  },
  "src": "saye"
 },
 {
  "id": "ha",
  "kind": "false-friend",
  "ckb": {
   "w": "ها",
   "en": "here, take it!"
  },
  "sdh": {
   "w": "ها",
   "en": "is (there), is located"
  },
  "fix": {
   "ckb>sdh": {
    "w": "ها",
    "en": "is (located)"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "ها is a verb word here: کێ ها لە ماڵ؟ 'Who is at home?' It comes before the place.",
    "ku": "«ها» لێرە وشەی «بوون»ە: کێ ها لە ماڵ؟ = کێ لە ماڵە؟ و دەکەوێتە پێش شوێنەکە."
   }
  },
  "src": "saye"
 },
 {
  "id": "chax",
  "kind": "near-miss",
  "ckb": {
   "w": "چاک",
   "en": "good"
  },
  "sdh": {
   "w": "چاخ",
   "en": "fat"
  },
  "fix": {
   "ckb>sdh": {
    "w": "خاس",
    "en": "good"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "چاخ with خ is 'fat': ئەوە چاخە 'that one is fat'. 'Good' is خاس.",
    "ku": "«چاخ» بە «خ» واتە «قەڵەو»: ئەوە چاخە. «باش» دەبێتە «خاس»."
   }
  },
  "src": "saye"
 },
 {
  "id": "sengin",
  "kind": "near-miss",
  "ckb": {
   "w": "سەنگ",
   "en": "weight"
  },
  "sdh": {
   "w": "سەننگ",
   "en": "heavy"
  },
  "fix": {
   "ckb>sdh": {
    "w": "سەننگ",
    "en": "heavy"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "سەننگ is the adjective 'heavy': چە سەننگە؟ 'What is heavy?'",
    "ku": "«سەننگ» ئاوەڵناوە: «قورس». چە سەننگە؟ = چی قورسە؟"
   }
  },
  "src": "saye"
 },
 {
  "id": "bichuu",
  "kind": "different",
  "ckb": {
   "w": "بڕۆ",
   "en": "go!"
  },
  "sdh": {
   "w": "بچوو",
   "en": "go!"
  },
  "fix": {
   "ckb>sdh": {
    "w": "بچوو",
    "en": "go!"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'Go!' to one person is بچوو. It is a command, not a past tense.",
    "ku": "«بڕۆ» دەبێتە «بچوو». فەرمانە، نەک ڕابردوو."
   }
  },
  "src": "saye"
 },
 {
  "id": "chig",
  "kind": "different",
  "ckb": {
   "w": "چووە",
   "en": "has gone"
  },
  "sdh": {
   "w": "چگ",
   "en": "has gone"
  },
  "fix": {
   "ckb>sdh": {
    "w": "چگ",
    "en": "has gone"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'Has gone' is the short چگ: چگ ئەڕا بازاڕ 'he has gone to the bazaar'.",
    "ku": "«چووە» دەبێتە «چگ»: چگ ئەڕا بازاڕ = چووە بۆ بازاڕ."
   }
  },
  "src": "saye"
 },
 {
  "id": "xas",
  "kind": "different",
  "ckb": {
   "w": "باش",
   "en": "good"
  },
  "sdh": {
   "w": "خاس",
   "en": "good"
  },
  "fix": {
   "ckb>sdh": {
    "w": "خاس",
    "en": "good"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'Good, well' is خاس: باوگت چۊنە؟ خاسە.",
    "ku": "«باش» دەبێتە «خاس»: باوگت چۊنە؟ خاسە."
   }
  },
  "src": "saye"
 },
 {
  "id": "fre",
  "kind": "different",
  "ckb": {
   "w": "زۆر",
   "en": "very, much"
  },
  "sdh": {
   "w": "فرە",
   "en": "very, much"
  },
  "fix": {
   "ckb>sdh": {
    "w": "فرە",
    "en": "very, much"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'Very, a lot' is فرە: ئەمڕوو فرە گەرمە 'today is very hot'.",
    "ku": "«زۆر» دەبێتە «فرە»: ئەمڕوو فرە گەرمە."
   }
  },
  "src": "saye"
 },
 {
  "id": "irnge",
  "kind": "different",
  "ckb": {
   "w": "ئێستا",
   "en": "now"
  },
  "sdh": {
   "w": "ئێرنگە",
   "en": "now"
  },
  "fix": {
   "ckb>sdh": {
    "w": "ئێرنگە",
    "en": "now"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'Now' is ئێرنگە.",
    "ku": "«ئێستا» دەبێتە «ئێرنگە»."
   }
  },
  "src": "saye"
 },
 {
  "id": "heman",
  "kind": "different",
  "ckb": {
   "w": "هێشتا",
   "en": "still"
  },
  "sdh": {
   "w": "هێمان",
   "en": "still"
  },
  "fix": {
   "ckb>sdh": {
    "w": "هێمان",
    "en": "still"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'Still' is هێمان: هێمانی زۊیە 'it's still early'.",
    "ku": "«هێشتا» دەبێتە «هێمان»: هێمانی زۊیە = هێشتا زووە."
   }
  },
  "src": "saye"
 },
 {
  "id": "gisht",
  "kind": "different",
  "ckb": {
   "w": "هەموو",
   "en": "all, every"
  },
  "sdh": {
   "w": "گیشت",
   "en": "all, every"
  },
  "fix": {
   "ckb>sdh": {
    "w": "گیشت",
    "en": "all, every"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'All, every' is گیشت: گیشت ڕووژی 'every day'.",
    "ku": "«هەموو» دەبێتە «گیشت»: گیشت ڕووژی = هەموو ڕۆژێ."
   }
  },
  "src": "saye"
 },
 {
  "id": "duet",
  "kind": "different",
  "ckb": {
   "w": "کچ",
   "en": "girl, daughter"
  },
  "sdh": {
   "w": "دۊەت",
   "en": "girl, daughter"
  },
  "fix": {
   "ckb>sdh": {
    "w": "دۊەت",
    "en": "girl, daughter"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'Girl, daughter' is دۊەت. Saye prints it دۆیەت.",
    "ku": "«کچ» دەبێتە «دۊەت». سایە بە «دۆیەت» دەینووسێت."
   }
  },
  "src": "zk"
 },
 {
  "id": "dalg",
  "kind": "different",
  "ckb": {
   "w": "دایک",
   "en": "mother"
  },
  "sdh": {
   "w": "داڵگ",
   "en": "mother"
  },
  "fix": {
   "ckb>sdh": {
    "w": "داڵگ",
    "en": "mother"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'Mother' is داڵگ, beside باوگ 'father'.",
    "ku": "«دایک» دەبێتە «داڵگ»، لە تەنیشت «باوگ»."
   }
  },
  "src": "saye"
 },
 {
  "id": "era",
  "kind": "different",
  "ckb": {
   "w": "بۆ",
   "en": "for, to"
  },
  "sdh": {
   "w": "ئەڕا",
   "en": "for, to; why?"
  },
  "fix": {
   "ckb>sdh": {
    "w": "ئەڕا",
    "en": "for, to; why?"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "ئەڕا covers both بۆ and بۆچی: ئەڕا دێر هاتن؟ 'Why did they come late?'",
    "ku": "«ئەڕا» هەم «بۆ»یە هەم «بۆچی»: ئەڕا دێر هاتن؟ = بۆچی درەنگ هاتن؟"
   }
  },
  "src": "saye"
 },
 {
  "id": "bayed",
  "kind": "different",
  "ckb": {
   "w": "دەبێ",
   "en": "must"
  },
  "sdh": {
   "w": "بایەد",
   "en": "must"
  },
  "fix": {
   "ckb>sdh": {
    "w": "بایەد",
    "en": "must"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'Must' is بایەد, the same for every person: بایەد بچم.",
    "ku": "«دەبێ» دەبێتە «بایەد» و بۆ هەموو کەسێک وەک خۆیەتی: بایەد بچم."
   }
  },
  "src": "saye"
 },
 {
  "id": "dir",
  "kind": "different",
  "ckb": {
   "w": "درەنگ",
   "en": "late"
  },
  "sdh": {
   "w": "دێر",
   "en": "late"
  },
  "fix": {
   "ckb>sdh": {
    "w": "دێر",
    "en": "late"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'Late' is دێر: ئەڕا دێر هاتن؟",
    "ku": "«درەنگ» دەبێتە «دێر»: ئەڕا دێر هاتن؟"
   }
  },
  "src": "saye"
 },
 {
  "id": "qapi",
  "kind": "different",
  "ckb": {
   "w": "دەرگا",
   "en": "door"
  },
  "sdh": {
   "w": "قاپی",
   "en": "door"
  },
  "fix": {
   "ckb>sdh": {
    "w": "قاپی",
    "en": "door"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'Door' is قاپی: کێ قاپیەگە کردەوە؟ 'Who opened the door?'",
    "ku": "«دەرگا» دەبێتە «قاپی»: کێ قاپیەگە کردەوە؟"
   }
  },
  "src": "saye"
 },
 {
  "id": "wext",
  "kind": "different",
  "ckb": {
   "w": "کات",
   "en": "time"
  },
  "sdh": {
   "w": "وەخت",
   "en": "time; when"
  },
  "fix": {
   "ckb>sdh": {
    "w": "وەختی",
    "en": "when (link word)"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'Time' is وەخت, and 'when …' is وەختی: وەختی هاتم 'when I came'.",
    "ku": "«کات» دەبێتە «وەخت»، و «کاتێ» دەبێتە «وەختی»: وەختی هاتم = کاتێ هاتم."
   }
  },
  "src": "saye"
 },
 {
  "id": "tawasim",
  "kind": "different",
  "ckb": {
   "w": "ویستم",
   "en": "I wanted"
  },
  "sdh": {
   "w": "تواسم",
   "en": "I wanted"
  },
  "fix": {
   "ckb>sdh": {
    "w": "توام",
    "en": "I want"
   }
  },
  "warn": {
   "ckb>sdh": {
    "en": "'Want' is تواستن: تواسم 'I wanted', توام 'I want'.",
    "ku": "«ویستن» دەبێتە «تواستن»: تواسم = ویستم، توام = دەمەوێ."
   }
  },
  "src": "saye"
 }
];
})();
