window.__BRIDGE = window.__BRIDGE || {};
// Sorani <-> Kurmanji sound and spelling correspondences.
// Each rule: a short card per direction (en + the learner's own variety),
// 6-12 real, common examples, and 3-5 unseen test words for generalisation.
// Sorani is standard Central Kurdish (Arabic script, de- present);
// Kurmanji is Hawar Latin.

window.__BRIDGE.RULES = [
  {
    id: "w-v", order: 1, title: "Sorani w ↔ Kurmanji v", reliability: "usually",
    card: {
      "ckb>kmr": {
        en: "After a vowel, your و (w) is usually v in Kurmanji: ئاو → av, شەو → şev, چاو → çav. Sometimes Kurmanji keeps a v that Sorani lost: زستان → zivistan, نووسین → nivîsîn. A few words keep w, like xew (sleep).",
        ku: "زۆر جار ئەو «و»ەی دوای بزوێن دێت، لە کورمانجیدا دەبێتە v (وەک ڤ): ئاو ← av، شەو ← şev، چاو ← çav. هەندێک جاریش کورمانجی ڤێکی پاراستووە کە لای ئێمە نەماوە: زستان ← zivistan. چەند وشەیەکیش وەک خۆیان دەمێننەوە، وەک خەو ← xew."
      },
      "kmr>ckb": {
        en: "After a vowel, your v is usually w in Sorani, written و: av → ئاو (aw), şev → شەو (şew), çav → چاو (çaw). Sometimes Sorani drops it: zivistan → زستان (zistan), nivîsîn → نووسین (nûsîn). The letter و is both w and û.",
        ku: "Piraniya caran v-ya piştî dengdêrê di soranî de dibe w û bi و tê nivîsîn: av → ئاو (aw), şev → شەو (şew), çav → چاو (çaw). Carinan soranî wê qet nabêje: zivistan → زستان (zistan). Tîpa و hem w ye hem jî û."
      }
    },
    examples: [
      { ckb: "ئاو", kmr: "av", en: "water" },
      { ckb: "شەو", kmr: "şev", en: "night" },
      { ckb: "چاو", kmr: "çav", en: "eye" },
      { ckb: "ناو", kmr: "nav", en: "name" },
      { ckb: "باوک", kmr: "bav", en: "father" },
      { ckb: "هاوین", kmr: "havîn", en: "summer" },
      { ckb: "سێو", kmr: "sêv", en: "apple" },
      { ckb: "سڵاو", kmr: "silav", en: "hello" },
      { ckb: "زستان", kmr: "zivistan", en: "winter" },
      { ckb: "نووسین", kmr: "nivîsîn", en: "to write" }
    ],
    test: [
      { ckb: "ناوەند", kmr: "navend", en: "centre" },
      { ckb: "ناوچە", kmr: "navçe", en: "region, district" },
      { ckb: "خاو", kmr: "xav", en: "raw, unripe" },
      { ckb: "ڕێوی", kmr: "rovî", en: "fox" }
    ]
  },

  {
    id: "ll-l", order: 2, title: "Sorani ڵ (ł) ↔ Kurmanji l", reliability: "always",
    card: {
      "ckb>kmr": {
        en: "Kurmanji has no heavy ڵ. Every ڵ becomes a light l: ماڵ → mal, ساڵ → sal, دڵ → dil, گوڵ → gul. If you know Hewlêr speech, where ڵ can even turn into r, you already hear it as its own sound. In Kurmanji, just make it light.",
        ku: "کورمانجی «ڵ»ی قورسی نییە؛ هەموو ڵێک دەبێتە l ی سووک: ماڵ ← mal، ساڵ ← sal، دڵ ← dil، گوڵ ← gul. لە قسەی هەولێریدا ڵ هەندێک جار دەبێتە ر، کەواتە دەزانیت دەنگێکی جیاوازە. لە کورمانجیدا تەنها بە سووکی بیڵێ."
      },
      "kmr>ckb": {
        en: "Many of your l's are a heavy, dark ł in Sorani, written ڵ: mal → ماڵ (mał), sal → ساڵ (sał), dil → دڵ (dił), gul → گوڵ (guł). Plain ل also exists, so learn which l is heavy word by word. Hint: ł never starts a word.",
        ku: "Gelek l-yên te di soranî de giran in û bi ڵ tên nivîsîn: mal → ماڵ (mał), sal → ساڵ (sał), dil → دڵ (dił), gul → گوڵ (guł). L-ya sivik (ل) jî heye, loma peyv bi peyv hîn bibe. Nîşanek: ڵ qet di destpêka peyvê de nayê."
      }
    },
    examples: [
      { ckb: "ماڵ", kmr: "mal", en: "house, home" },
      { ckb: "ساڵ", kmr: "sal", en: "year" },
      { ckb: "دڵ", kmr: "dil", en: "heart" },
      { ckb: "گوڵ", kmr: "gul", en: "flower" },
      { ckb: "خاڵ", kmr: "xal", en: "uncle (mother's brother)" },
      { ckb: "وڵات", kmr: "welat", en: "country" },
      { ckb: "ماڵپەڕ", kmr: "malper", en: "website" },
      { ckb: "تاڵ", kmr: "tal", en: "bitter" },
      { ckb: "ساڵنامە", kmr: "salname", en: "calendar" }
    ],
    test: [
      { ckb: "باڵندە", kmr: "balinde", en: "bird" },
      { ckb: "گوڵاو", kmr: "gulav", en: "rose water" },
      { ckb: "بڵاو", kmr: "belav", en: "spread, scattered" },
      { ckb: "شاڵ", kmr: "şal", en: "shawl" }
    ]
  },

  {
    id: "rr-r", order: 3, title: "Sorani ڕ (ř) ↔ Kurmanji r", reliability: "always",
    card: {
      "ckb>kmr": {
        en: "Your rolled ڕ is written with a plain r in Kurmanji: ڕۆژ → roj, ڕاست → rast, کوڕ → kur. Kurmanji speakers roll it at the start of a word too, so keep your sound. Only the spelling is simpler.",
        ku: "«ڕ»ی قورس لە کورمانجیدا هەر بە r دەنووسرێت: ڕۆژ ← roj، ڕاست ← rast، کوڕ ← kur. کورمانجەکانیش لە سەرەتای وشەدا هەر بە قورسی دەیڵێن، کەواتە دەنگەکەت بپارێزە. تەنها نووسینەکەی سادەترە."
      },
      "kmr>ckb": {
        en: "Sorani gives the strong, rolled r its own letter: ڕ. At the start of a word r is always ڕ: roj → ڕۆژ, rast → ڕاست, reng → ڕەنگ. Inside a word, listen: kur → کوڕ (kuř), but bira → برا.",
        ku: "Soranî ji bo r-ya bihêz û lerzok tîpeke taybet bi kar tîne: ڕ. Di destpêka peyvê de r her tim ڕ ye: roj → ڕۆژ, rast → ڕاست, reng → ڕەنگ. Di nava peyvê de baş guhdarî bike: kur → کوڕ (kuř), lê bira → برا."
      }
    },
    examples: [
      { ckb: "ڕۆژ", kmr: "roj", en: "day" },
      { ckb: "ڕاست", kmr: "rast", en: "right; true" },
      { ckb: "کوڕ", kmr: "kur", en: "son, boy" },
      { ckb: "ڕەنگ", kmr: "reng", en: "colour" },
      { ckb: "ڕۆژنامە", kmr: "rojname", en: "newspaper" },
      { ckb: "ڕەش", kmr: "reş", en: "black" },
      { ckb: "بڕیار", kmr: "biryar", en: "decision" },
      { ckb: "شەڕ", kmr: "şer", en: "fight, war" }
    ],
    test: [
      { ckb: "ڕوو", kmr: "rû", en: "face" },
      { ckb: "ڕاستی", kmr: "rastî", en: "truth" },
      { ckb: "ڕاپۆرت", kmr: "raport", en: "report" }
    ]
  },

  {
    id: "hh-h", order: 4, title: "Sorani ح (ḧ) ↔ Kurmanji h", reliability: "always",
    card: {
      "ckb>kmr": {
        en: "Hawar Kurmanji writes your deep ح as a plain h: حەوت → heft, حەز → hez, حکومەت → hikûmet. Many Kurmanji speakers still say these words with the deep sound, so you don't have to change how you speak. Just spell it h.",
        ku: "کورمانجیی هاوار «ح» بە h ی ئاسایی دەنووسێت: حەوت ← heft، حەز ← hez، حکومەت ← hikûmet. زۆر کورمانج هێشتا ئەم وشانە بە دەنگی قووڵ دەڵێن، بۆیە پێویست ناکات دەنگەکەت بگۆڕیت. تەنها بە h بینووسە."
      },
      "kmr>ckb": {
        en: "Some of your h's are a deep h in Sorani, written ح: heft → حەوت (ḧewt), hez → حەز (ḧez), hesab → حیساب (ḧîsab). They are often words where you say a deep h yourself. The ordinary h is ه.",
        ku: "Hin h-yên te di soranî de h-ya kûr in û bi ح tên nivîsîn: heft → حەوت (ḧewt), hez → حەز (ḧez), hesab → حیساب (ḧîsab). Pir caran ew peyv in ku tu jî wan bi dengekî kûr dibêjî. H-ya asayî ه ye."
      }
    },
    examples: [
      { ckb: "حەوت", kmr: "heft", en: "seven" },
      { ckb: "حەز", kmr: "hez", en: "liking (hez kirin: to like)" },
      { ckb: "حەوشە", kmr: "hewş", en: "courtyard" },
      { ckb: "حکومەت", kmr: "hikûmet", en: "government" },
      { ckb: "حیساب", kmr: "hesab", en: "the bill; calculation" },
      { ckb: "حەمام", kmr: "hemam", en: "bathroom" },
      { ckb: "حەیوان", kmr: "heywan", en: "animal (everyday Sorani; standard ئاژەڵ)" }
    ],
    test: [
      { ckb: "حەفتا", kmr: "heftê", en: "seventy" },
      { ckb: "حەکیم", kmr: "hekîm", en: "physician" },
      { ckb: "حاڵ", kmr: "hal", en: "state, condition" }
    ]
  },

  {
    id: "xo-xwe", order: 5, title: "Sorani خۆ (xo) ↔ Kurmanji xwe", reliability: "usually",
    card: {
      "ckb>kmr": {
        en: "Your خۆ becomes xwe in Kurmanji: خۆش → xweş, نەخۆش → nexweş, خۆ → xwe. Say it as one quick syllable. It's the same xw you already have in خواردن and خوێندن.",
        ku: "«خۆ» لە کورمانجیدا دەبێتە xwe: خۆش ← xweş، نەخۆش ← nexweş، خۆ ← xwe. وەک یەک بڕگە بە خێرایی بیڵێ. هەمان «خو»ی ناو خواردن و خوێندنە."
      },
      "kmr>ckb": {
        en: "Your xwe is خۆ (xo) in Sorani: xweş → خۆش (xoş), nexweş → نەخۆش (nexoş), xwe → خۆ (xo). The w melts into a long o. Not every xw does this: xwarin keeps it, خواردن (xwardin).",
        ku: "xwe-ya te di soranî de dibe خۆ (xo): xweş → خۆش (xoş), nexweş → نەخۆش (nexoş), xwe → خۆ. W dihele û dibe o-yeke dirêj. Lê her xw wisa nake: xwarin w-ya xwe diparêze, خواردن (xwardin)."
      }
    },
    examples: [
      { ckb: "خۆش", kmr: "xweş", en: "nice, pleasant" },
      { ckb: "نەخۆش", kmr: "nexweş", en: "sick, ill" },
      { ckb: "خۆ", kmr: "xwe", en: "oneself" },
      { ckb: "نەخۆشی", kmr: "nexweşî", en: "illness" },
      { ckb: "نەخۆشخانە", kmr: "nexweşxane", en: "hospital" },
      { ckb: "دڵخۆش", kmr: "dilxweş", en: "glad, happy" },
      { ckb: "خۆشی", kmr: "xweşî", en: "pleasure, joy" }
    ],
    test: [
      { ckb: "خۆبەخش", kmr: "xwebexş", en: "volunteer" },
      { ckb: "خۆڕاگر", kmr: "xweragir", en: "steadfast, resilient" },
      { ckb: "دەستخۆش", kmr: "destxweş", en: "well done, thank you" }
    ]
  },

  {
    id: "rd-r", order: 6, title: "Sorani -rd ↔ Kurmanji -r", reliability: "usually",
    card: {
      "ckb>kmr": {
        en: "Sorani keeps a d after r that Kurmanji drops: کردن → kirin, خواردن → xwarin, بردن → birin, زەرد → zer, سارد → sar. It shows up most in verbs ending in -rdin. Sometimes the d becomes t instead. Kurd and derd stay as they are.",
        ku: "سۆرانی دوای «ر» «د»ێکی هەیە کە کورمانجی نایڵێت: کردن ← kirin، خواردن ← xwarin، بردن ← birin، زەرد ← zer، سارد ← sar. زیاتر لە چاوگی ‎-ردن دا دەردەکەوێت. هەندێک جار d دەبێتە t. کورد و دەرد وەک خۆیان دەمێننەوە."
      },
      "kmr>ckb": {
        en: "When your verb ends in -rin, Sorani usually adds a d: kirin → کردن (kirdin), xwarin → خواردن (xwardin), birin → بردن (birdin). The same d turns up in zer → زەرد (zerd) and sar → سارد (sard). Kurd stays Kurd.",
        ku: "Gava lêkera te bi -rin diqede, soranî bi gelemperî d-yekê lê zêde dike: kirin → کردن (kirdin), xwarin → خواردن (xwardin), birin → بردن (birdin). Ev d di zer → زەرد (zerd) û sar → سارد (sard) de jî heye. Kurd her Kurd e."
      }
    },
    examples: [
      { ckb: "کردن", kmr: "kirin", en: "to do, to make" },
      { ckb: "خواردن", kmr: "xwarin", en: "to eat" },
      { ckb: "بردن", kmr: "birin", en: "to take (away)" },
      { ckb: "زەرد", kmr: "zer", en: "yellow" },
      { ckb: "سارد", kmr: "sar", en: "cold" },
      { ckb: "مێرد", kmr: "mêr", en: "husband" },
      { ckb: "خواردنەوە", kmr: "vexwarin", en: "to drink" }
    ],
    test: [
      { ckb: "تێکردن", kmr: "têkirin", en: "to put in, to pour in" },
      { ckb: "هەڵبژاردن", kmr: "hilbijartin", en: "to choose; election" },
      { ckb: "ژماردن", kmr: "jimartin", en: "to count" }
    ]
  },

  {
    id: "de-di", order: 7, title: "Sorani de-, be, le ↔ Kurmanji di-, bi, li", reliability: "usually",
    card: {
      "ckb>kmr": {
        en: "Small grammar pieces with e in Sorani often have i in Kurmanji. The present prefix دە- is di- (دەکەم → dikim), بە is bi (بەڕاستی → bi rastî), and لە meaning 'at, in' is li (لەکوێ → li ku). Careful: لە meaning 'from' is ji.",
        ku: "پێشگر و ئامرازە بچووکەکان کە لە سۆرانیدا «ە»یان تێدایە، لە کورمانجیدا زۆر جار i یان هەیە: دە- ← di- (دەکەم ← dikim)، بە ← bi (بەڕاستی ← bi rastî)، لە بە واتای شوێن ← li (لەکوێ ← li ku). ئاگادار بە: «لە» بە واتای «لە...ەوە» دەبێتە ji."
      },
      "kmr>ckb": {
        en: "Your di-, bi and li usually become de-, be and le in Sorani: dikim → دەکەم (dekem), bi rastî → بەڕاستی, li ku → لەکوێ. Sorani le covers both li and ji: ji bajêr → لە شارەوە. In Silêmanî speech you'll hear ئە- for دە-; write دە-.",
        ku: "di-, bi û li-ya te di soranî de bi gelemperî dibin de-, be û le: dikim → دەکەم (dekem), bi rastî → بەڕاستی, li ku → لەکوێ. Le-ya soranî hem li ye hem jî ji: ji bajêr → لە شارەوە. Li Silêmaniyê di axaftinê de ئە- tê gotin, lê دە- tê nivîsîn."
      }
    },
    examples: [
      { ckb: "دەکەم", kmr: "dikim", en: "I do" },
      { ckb: "دەچم", kmr: "diçim", en: "I go" },
      { ckb: "دەزانم", kmr: "dizanim", en: "I know" },
      { ckb: "دەبینم", kmr: "dibînim", en: "I see" },
      { ckb: "بەڕاستی", kmr: "bi rastî", en: "really" },
      { ckb: "بەتام", kmr: "bi tam", en: "tasty" },
      { ckb: "بەتایبەتی", kmr: "bi taybetî", en: "especially" },
      { ckb: "لەکوێ", kmr: "li ku", en: "where" }
    ],
    test: [
      { ckb: "دەنووسم", kmr: "dinivîsim", en: "I write" },
      { ckb: "دەپرسم", kmr: "dipirsim", en: "I ask" },
      { ckb: "بە کوردی", kmr: "bi kurdî", en: "in Kurdish" },
      { ckb: "لەسەر", kmr: "li ser", en: "on" }
    ]
  },

  {
    id: "a-e", order: 8, title: "Sorani a ↔ Kurmanji e", reliability: "often",
    card: {
      "ckb>kmr": {
        en: "A Sorani a, especially at the end of a word, is often e in Kurmanji: پارە → pere, مامۆستا → mamoste, شۆربا → şorbe, تازە → teze. If a word sounds almost familiar, try swapping a for e.",
        ku: "«ا»ی سۆرانی، بەتایبەتی لە کۆتایی وشەدا، زۆر جار لە کورمانجیدا دەبێتە e: پارە ← pere، مامۆستا ← mamoste، شۆربا ← şorbe، تازە ← teze. ئەگەر وشەیەک نیوە ناسراو بوو، a بکە بە e و تاقی بکەرەوە."
      },
      "kmr>ckb": {
        en: "Many of your e's are a in Sorani: pere → پارە (pare), mamoste → مامۆستا (mamosta), şorbe → شۆربا (şorba), teze → تازە (taze). Sorani always writes a with ا, so it is easy to spot.",
        ku: "Gelek e-yên te di soranî de a ne: pere → پارە (pare), mamoste → مامۆستا (mamosta), şorbe → شۆربا (şorba), teze → تازە (taze). Soranî a-yê her tim bi ا dinivîse, loma zû tê dîtin."
      }
    },
    examples: [
      { ckb: "پارە", kmr: "pere", en: "money" },
      { ckb: "مامۆستا", kmr: "mamoste", en: "teacher" },
      { ckb: "شۆربا", kmr: "şorbe", en: "soup" },
      { ckb: "تازە", kmr: "teze", en: "fresh" },
      { ckb: "ڤیزا", kmr: "vîze", en: "visa" },
      { ckb: "جانتا", kmr: "çente", en: "bag, suitcase" },
      { ckb: "قاوە", kmr: "qehwe", en: "coffee" }
    ],
    test: [
      { ckb: "تەماشا", kmr: "temaşe", en: "watching (temaşe kirin: to watch)" },
      { ckb: "قاوەخانە", kmr: "qehwexane", en: "café" },
      { ckb: "سۆبا", kmr: "sobe", en: "stove, heater" }
    ]
  },

  {
    id: "e-i", order: 9, title: "Sorani ê ↔ Kurmanji î (both ways)", reliability: "often",
    card: {
      "ckb>kmr": {
        en: "ê and î often trade places between us, in both directions: خوێن → xwîn, کێ → kî, but میوە → mêwe, میوان → mêvan, نزیک → nêzîk. You can't predict the direction, so use it as a hint: if a word is nearly right, swap ê and î.",
        ku: "«ێ» و «ی» زۆر جار جێگۆڕکێ دەکەن، بە هەردوو لادا: خوێن ← xwîn، کێ ← kî، بەڵام میوە ← mêwe، میوان ← mêvan، نزیک ← nêzîk. ناتوانیت پێشبینیی لاکەی بکەیت؛ ئەگەر وشەیەک نزیک بوو بەڵام تەواو نەبوو، ێ و ی بگۆڕەوە."
      },
      "kmr>ckb": {
        en: "ê and î often trade places, both ways: xwîn → خوێن (xwên), kî → کێ (kê), but mêwe → میوە (mîwe), mêvan → میوان (mîwan). In Sorani script ێ is ê and ی is î. If a word is nearly right, swap them.",
        ku: "ê û î pir caran cihê xwe diguherin, bi her du aliyan: xwîn → خوێن (xwên), kî → کێ (kê), lê mêwe → میوە (mîwe), mêvan → میوان (mîwan). Di nivîsa soranî de ێ ê ye û ی î ye. Heke peyvek nêzîk be lê ne tam, wan biguherîne."
      }
    },
    examples: [
      { ckb: "خوێن", kmr: "xwîn", en: "blood" },
      { ckb: "کێ", kmr: "kî", en: "who" },
      { ckb: "میوە", kmr: "mêwe", en: "fruit" },
      { ckb: "میوان", kmr: "mêvan", en: "guest" },
      { ckb: "بلیت", kmr: "bilêt", en: "ticket" },
      { ckb: "نزیک", kmr: "nêzîk", en: "near" }
    ],
    test: [
      { ckb: "سێبەر", kmr: "sîber", en: "shade" },
      { ckb: "ترێ", kmr: "tirî", en: "grapes" },
      { ckb: "هیوا", kmr: "hêvî", en: "hope" }
    ]
  },

  {
    id: "ewe-ve", order: 10, title: "Sorani -ewe ↔ Kurmanji ve-", reliability: "often",
    card: {
      "ckb>kmr": {
        en: "Sorani hangs -ewe on the end of a verb; Kurmanji puts ve- at the front: خواردنەوە → vexwarin, گەڕانەوە → vegerîn, کردنەوە → vekirin. Same verb, the piece just moves. Not every -ewe verb does this: خوێندنەوە is plain xwendin.",
        ku: "سۆرانی ‎-ەوە دەخاتە کۆتایی کردار، کورمانجی ve- دەخاتە سەرەتای: خواردنەوە ← vexwarin، گەڕانەوە ← vegerîn، کردنەوە ← vekirin. کردارەکە هەمان کردارە، تەنها پارچەکە جێی گۆڕیوە. هەموویان وا نین: خوێندنەوە ← xwendin."
      },
      "kmr>ckb": {
        en: "Your ve- moves to the end of the verb in Sorani as -ewe (ـەوە): vexwarin → خواردنەوە (xwardinewe), vegerîn → گەڕانەوە (geřanewe), vekirin → کردنەوە (kirdinewe). In the present it wraps the verb: vedixwim → دەخۆمەوە (dexomewe).",
        ku: "ve-ya te di soranî de diçe dawiya lêkerê û dibe -ewe (ـەوە): vexwarin → خواردنەوە, vegerîn → گەڕانەوە, vekirin → کردنەوە. Di dema niha de lêkerê dorpêç dike: vedixwim → دەخۆمەوە (dexomewe)."
      }
    },
    examples: [
      { ckb: "خواردنەوە", kmr: "vexwarin", en: "to drink" },
      { ckb: "گەڕانەوە", kmr: "vegerîn", en: "to return, to go back" },
      { ckb: "کردنەوە", kmr: "vekirin", en: "to open" },
      { ckb: "گواستنەوە", kmr: "veguhastin", en: "to transport, to move" },
      { ckb: "شاردنەوە", kmr: "veşartin", en: "to hide" },
      { ckb: "گەڕاندنەوە", kmr: "vegerandin", en: "to give back, to send back" }
    ],
    test: [
      { ckb: "ژیانەوە", kmr: "vejîn", en: "to come back to life" },
      { ckb: "کرانەوە", kmr: "vebûn", en: "to open (by itself)" },
      { ckb: "گوتنەوە", kmr: "vegotin", en: "to retell, to recount" }
    ]
  },

  {
    id: "haw-hev", order: 11, title: "Sorani haw- ↔ Kurmanji hev-", reliability: "usually",
    card: {
      "ckb>kmr": {
        en: "The Sorani prefix هاو- ('fellow, co-') is hev- in Kurmanji: هاوکار → hevkar, هاوسەر → hevser, هاوبەش → hevbeş. On its own, hev means 'each other'. One big exception: هاوڕێ (friend) is heval.",
        ku: "پێشگری «هاو-» لە کورمانجیدا hev- ە: هاوکار ← hevkar، هاوسەر ← hevser، هاوبەش ← hevbeş. hev بە تەنیاش واتای «یەکتر» دەدات. ئاگادار بە: هاوڕێ ← heval."
      },
      "kmr>ckb": {
        en: "Your hev- prefix ('co-, fellow') is هاو- (haw-) in Sorani: hevkar → هاوکار (hawkar), hevser → هاوسەر (hawser), hevbeş → هاوبەش (hawbeş). For hev meaning 'each other', Sorani says یەک or یەکتر.",
        ku: "Pêşgira hev- di soranî de هاو- (haw-) ye: hevkar → هاوکار (hawkar), hevser → هاوسەر (hawser), hevbeş → هاوبەش (hawbeş). Ji bo hev bi wateya «hevdu», soranî یەک an یەکتر (yektir) dibêje."
      }
    },
    examples: [
      { ckb: "هاوکار", kmr: "hevkar", en: "colleague" },
      { ckb: "هاوسەر", kmr: "hevser", en: "spouse" },
      { ckb: "هاوبەش", kmr: "hevbeş", en: "shared, joint" },
      { ckb: "هاوکاری", kmr: "hevkarî", en: "cooperation" },
      { ckb: "هاوتا", kmr: "hevta", en: "equal, counterpart" },
      { ckb: "هاوسەنگ", kmr: "hevseng", en: "balanced" }
    ],
    test: [
      { ckb: "هاووڵاتی", kmr: "hevwelatî", en: "citizen, fellow citizen" },
      { ckb: "هاودەنگ", kmr: "hevdeng", en: "of one voice, unanimous" },
      { ckb: "هاوژین", kmr: "hevjîn", en: "life partner" }
    ]
  },

  {
    id: "teens", order: 12, title: "Numbers: Sorani -de ↔ Kurmanji -deh", reliability: "always",
    card: {
      "ckb>kmr": {
        en: "Kurmanji ten is deh, with an h, and every teen keeps it: دە → deh, یازدە → yanzdeh, دوازدە → diwanzdeh. Some teens also slip in an n: yanzdeh, diwanzdeh, panzdeh. Nine gets the h too: نۆ → neh.",
        ku: "«دە» لە کورمانجیدا deh ە، بە h ێک لە کۆتاییدا، و هەموو ژمارەکانی ١١ تا ١٩ ئەو h ە دەپارێزن: یازدە ← yanzdeh، دوازدە ← diwanzdeh. هەندێکیان n ێکیش وەردەگرن: yanzdeh، panzdeh. نۆش دەبێتە neh."
      },
      "kmr>ckb": {
        en: "Drop the final h (and the n in some teens): deh → دە (de), yanzdeh → یازدە (yazde), diwanzdeh → دوازدە (dwazde), neh → نۆ (no). Seventeen is written with ڤ in Sorani: حەڤدە (ḧevde), one of the few native words with that letter.",
        ku: "h-ya dawiyê (û n-ya hin hejmaran) bavêje: deh → دە (de), yanzdeh → یازدە (yazde), diwanzdeh → دوازدە (dwazde), neh → نۆ (no). Hivdeh di soranî de bi ڤ tê nivîsîn: حەڤدە (ḧevde). Ew yek ji wan çend peyvên kurdî ye ku ڤ tê de heye."
      }
    },
    examples: [
      { ckb: "دە", kmr: "deh", en: "ten" },
      { ckb: "نۆ", kmr: "neh", en: "nine" },
      { ckb: "یازدە", kmr: "yanzdeh", en: "eleven" },
      { ckb: "دوازدە", kmr: "diwanzdeh", en: "twelve" },
      { ckb: "سێزدە", kmr: "sêzdeh", en: "thirteen" },
      { ckb: "چواردە", kmr: "çardeh", en: "fourteen" },
      { ckb: "حەڤدە", kmr: "hivdeh", en: "seventeen" },
      { ckb: "هەژدە", kmr: "hejdeh", en: "eighteen" }
    ],
    test: [
      { ckb: "پازدە", kmr: "panzdeh", en: "fifteen" },
      { ckb: "شازدە", kmr: "şanzdeh", en: "sixteen" },
      { ckb: "نۆزدە", kmr: "nozdeh", en: "nineteen" }
    ]
  },

  {
    id: "h-drop", order: 13, title: "A word-initial h comes and goes", reliability: "often",
    card: {
      "ckb>kmr": {
        en: "An h at the start of a word can come or go. Some Sorani h's vanish in Kurmanji: هەور → ewr, هێنان → anîn, هەینی → Înê. Other times Kurmanji adds one: ئەسپ → hesp, ئاسن → hesin, ئێسک → hestî. Treat it as a hint, not a law.",
        ku: "h لە سەرەتای وشەدا دێت و دەڕوات. هەندێک h ی سۆرانی لە کورمانجیدا نامێنێت: هەور ← ewr، هێنان ← anîn، هەینی ← Înê. هەندێک جاریش کورمانجی h زیاد دەکات: ئەسپ ← hesp، ئاسن ← hesin، ئێسک ← hestî. وەک ئاماژە سەیری بکە، نەک یاسا."
      },
      "kmr>ckb": {
        en: "An h at the start of a word can come or go: ewr → هەور (hewr), anîn → هێنان (hênan), Înê → هەینی (heynî); but hesp → ئەسپ (esp), hesin → ئاسن (asin). A Sorani word that starts with a vowel is written with a silent ئ.",
        ku: "h-ya destpêka peyvê tê û diçe: ewr → هەور (hewr), anîn → هێنان (hênan), Înê → هەینی (heynî); lê hesp → ئەسپ (esp), hesin → ئاسن (asin). Peyva soranî ya ku bi dengdêrê dest pê dike, bi ئ-ya bêdeng tê nivîsîn."
      }
    },
    examples: [
      { ckb: "هەور", kmr: "ewr", en: "cloud" },
      { ckb: "هێنان", kmr: "anîn", en: "to bring" },
      { ckb: "هەینی", kmr: "Înê", en: "Friday" },
      { ckb: "ئەسپ", kmr: "hesp", en: "horse" },
      { ckb: "ئاسن", kmr: "hesin", en: "iron" },
      { ckb: "ئێسک", kmr: "hestî", en: "bone" }
    ],
    test: [
      { ckb: "ئێستر", kmr: "hêstir", en: "mule" },
      { ckb: "ئاسان", kmr: "hêsan", en: "easy" },
      { ckb: "هێرش", kmr: "êriş", en: "attack" }
    ]
  }
];
