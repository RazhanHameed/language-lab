// Bridge course: core frames (be, there is, have, present, past without object).
// Sorani base: standard Central Kurdish (Silêmanî-based, دە- present prefix).
// Kurmanji base: Hawar Latin. Regional forms appear only as hooks in notes/cards.
window.__BRIDGE = window.__BRIDGE || {};
window.__BRIDGE.FRAMES = window.__BRIDGE.FRAMES || [];

// ---------------------------------------------------------------------------
// 1. Copula "to be"
// ---------------------------------------------------------------------------
window.__BRIDGE.FRAMES.push({
  id: "copula", order: 1, level: "A1", sieve: 5,
  title: "“To be”: am, is, are",
  pattern: { ckb: "(من) [slot]ـم", kmr: "Ez [slot] im", en: "I am a [slot]" },
  card: {
    "ckb>kmr": {
      en: "Same endings, new spacing. Sorani glues the copula on (خوێندکارم); Kurmanji writes it as its own word: Ez xwendekar im. After a vowel Kurmanji adds a sound: mamoste me, mamoste yî, mamoste ye, mamoste ne. The trap: me here means “am” and ne means “are”, not “we” or “not”. And “I” is ez, not min.",
      ku: "پاشگرەکانی «بوون» وەک هی خۆمانن، بەڵام کورمانجی جیایان دەنووسێت: خوێندکارم ← Ez xwendekar im. دوای بزوێن دەنگێک زیاد دەبێت: mamoste me، mamoste ye، mamoste ne. ئاگادار بە: ئەم me واتە «ـم»، نەک «ئێمە»؛ ئەم neش واتە «ـین/ـن»، نەک «نا». «من»یش لێرەدا دەبێتە ez."
    },
    "kmr>ckb": {
      en: "Same endings, joined on. Where you write “xwendekar im”, Sorani writes one word: خوێندکارم. After a vowel: مامۆستام، مامۆستایت، مامۆستایە. The negative is its own word: نیم، نیت، نییە، نین, never ne … im. Watch the plurals: ـین is “we”, ـن is “you all” or “they”. And “ez” is من here.",
      ku: "Dawîbend heman in, lê bi peyvê ve têne nivîsîn: “xwendekar im” dibe خوێندکارم. Piştî dengdêrê: مامۆستام، مامۆستایە. Neyînî peyveke cuda ye: نیم، نییە، نین, ne “ne … im”. Baldar be: ـین “em” e, ـن “hûn” an “ew” e. Li şûna “ez”, Soranî من dibêje: من خوێندکارم."
    }
  },
  items: [
    { id: "cop_01", en: "I am a student.", ckb: "من خوێندکارم.", kmr: "Ez xwendekar im.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar", note: "present subject: ez, not min" },
        { ckb: "خوێندکار", kmr: "xwendekar", k: "cognate" },
        { ckb: "ـم", kmr: "im", k: "grammar", note: "same ending, written apart in Kurmanji" } ] },
    { id: "cop_02", en: "I am Kurdish.", ckb: "من کوردم.", kmr: "Ez Kurd im.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar", note: "present subject: ez, not min" },
        { ckb: "کورد", kmr: "Kurd", k: "same", note: "Kurmanji capitalises Kurd" },
        { ckb: "ـم", kmr: "im", k: "grammar", note: "same ending, written apart" } ] },
    { id: "cop_03", en: "I am well.", ckb: "من باشم.", kmr: "Ez baş im.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "باش", kmr: "baş", k: "same" },
        { ckb: "ـم", kmr: "im", k: "grammar" } ] },
    { id: "cop_04", en: "You are a guest.", ckb: "تۆ میوانیت.", kmr: "Tu mêvan î.",
      align: [
        { ckb: "تۆ", kmr: "Tu", k: "cognate" },
        { ckb: "میوان", kmr: "mêvan", k: "sound", rule: "w-v" },
        { ckb: "ـیت", kmr: "î", k: "grammar", note: "you are: Sorani -ît, Kurmanji î" } ] },
    { id: "cop_05", en: "They are students.", ckb: "ئەوان خوێندکارن.", kmr: "Ew xwendekar in.",
      align: [
        { ckb: "ئەوان", kmr: "Ew", k: "grammar", note: "ew is he, she and they" },
        { ckb: "خوێندکار", kmr: "xwendekar", k: "cognate" },
        { ckb: "ـن", kmr: "in", k: "grammar", note: "the ending shows the plural" } ] },
    { id: "cop_06", en: "We are Kurdish.", ckb: "ئێمە کوردین.", kmr: "Em Kurd in.",
      align: [
        { ckb: "ئێمە", kmr: "Em", k: "cognate" },
        { ckb: "کورد", kmr: "Kurd", k: "same" },
        { ckb: "ـین", kmr: "in", k: "grammar", note: "Kurmanji uses in for every plural" } ] },
    { id: "cop_07", en: "I am a teacher.", ckb: "من مامۆستام.", kmr: "Ez mamoste me.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "مامۆستا", kmr: "mamoste", k: "sound", rule: "a-e" },
        { ckb: "ـم", kmr: "me", k: "grammar", note: "after a vowel: me means “am”, not “we”" } ] },
    { id: "cop_08", en: "You are a teacher.", ckb: "تۆ مامۆستایت.", kmr: "Tu mamoste yî.",
      align: [
        { ckb: "تۆ", kmr: "Tu", k: "cognate" },
        { ckb: "مامۆستا", kmr: "mamoste", k: "sound", rule: "a-e" },
        { ckb: "ـیت", kmr: "yî", k: "grammar", note: "after a vowel: yî" } ] },
    { id: "cop_09", en: "She is a teacher.", ckb: "ئەو مامۆستایە.", kmr: "Ew mamoste ye.",
      align: [
        { ckb: "ئەو", kmr: "Ew", k: "same" },
        { ckb: "مامۆستا", kmr: "mamoste", k: "sound", rule: "a-e" },
        { ckb: "ـیە", kmr: "ye", k: "grammar", note: "after a vowel both add y: ـیە / ye" } ] },
    { id: "cop_10", en: "We are teachers.", ckb: "ئێمە مامۆستاین.", kmr: "Em mamoste ne.",
      align: [
        { ckb: "ئێمە", kmr: "Em", k: "cognate" },
        { ckb: "مامۆستا", kmr: "mamoste", k: "sound", rule: "a-e" },
        { ckb: "ـین", kmr: "ne", k: "grammar", note: "after a vowel: ne means “are”, not “not”" } ] },
    { id: "cop_11", en: "I am not a student.", ckb: "من خوێندکار نیم.", kmr: "Ez ne xwendekar im.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "", kmr: "ne", k: "only", note: "Kurmanji: ne before the word, normal copula after" },
        { ckb: "خوێندکار", kmr: "xwendekar", k: "cognate" },
        { ckb: "نیم", kmr: "im", k: "grammar", note: "Sorani negative copula is one word: نیم" } ] },
    { id: "cop_12", en: "It isn't far.", ckb: "دوور نییە.", kmr: "Ne dûr e.",
      align: [
        { ckb: "", kmr: "Ne", k: "only", note: "ne goes before the adjective" },
        { ckb: "دوور", kmr: "dûr", k: "same" },
        { ckb: "نییە", kmr: "e", k: "grammar", note: "the fused form nîne is also used: Dûr nîne" } ] },
    { id: "cop_13", en: "I was a student.", ckb: "من خوێندکار بووم.", kmr: "Ez xwendekar bûm.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "خوێندکار", kmr: "xwendekar", k: "cognate" },
        { ckb: "بووم", kmr: "bûm", k: "same", note: "past “was” is identical" } ] },
    { id: "cop_14", en: "We were guests.", ckb: "ئێمە میوان بووین.", kmr: "Em mêvan bûn.",
      align: [
        { ckb: "ئێمە", kmr: "Em", k: "cognate" },
        { ckb: "میوان", kmr: "mêvan", k: "sound", rule: "w-v" },
        { ckb: "بووین", kmr: "bûn", k: "grammar", note: "Kurmanji “we were” = bûn, same as “they were”" } ] }
  ],
  pi: [
    { id: "cop_pi1", dir: "ckb>kmr", show: "kmr", text: "Ez mamoste me.",
      options: ["I am a teacher.", "We are teachers."], answer: 0,
      why: { en: "Ez is “I”. After a vowel the “am” ending is me, so me is not “we” here.",
             ku: "Ez واتە «من». دوای بزوێن «ـم» دەبێتە me، کەواتە ئەم me «ئێمە» نییە." } },
    { id: "cop_pi2", dir: "ckb>kmr", show: "kmr", text: "Em mamoste ne.",
      options: ["We are not teachers.", "We are teachers."], answer: 1,
      why: { en: "After a vowel the plural ending is ne. “Not” would come first: Em ne mamoste ne.",
             ku: "دوای بزوێن «ـین» دەبێتە ne. ئەگەر نەرێنی بوایە، ne یەکی تر دەهاتە پێش ناوەکە: Em ne mamoste ne." } },
    { id: "cop_pi3", dir: "ckb>kmr", show: "kmr", text: "Ew mamoste ne.",
      options: ["She is a teacher.", "They are teachers."], answer: 1,
      why: { en: "Ew can be “he”, “she” or “they”. Only the ending decides: ye is singular, ne is plural.",
             ku: "Ew هەم «ئەو»ە هەم «ئەوان». تەنیا کۆتاییەکە دەیڵێت: ye تاکە، ne کۆیە." } },
    { id: "cop_pi4", dir: "ckb>kmr", show: "kmr", text: "Ew baş in.",
      options: ["They are well.", "He is well."], answer: 0,
      why: { en: "in is the plural ending. “He is well” would be Ew baş e.",
             ku: "in کۆتایی کۆیە. «ئەو باشە» دەبێتە Ew baş e." } },
    { id: "cop_pi5", dir: "ckb>kmr", show: "kmr", text: "Ez ne xwendekar im.",
      options: ["I am a student.", "I am not a student."], answer: 1,
      why: { en: "The small ne before the noun is the negative. The copula im stays the same.",
             ku: "ئەو ne یەی پێش ناوەکە نەرێنییە و im وەک خۆی دەمێنێتەوە. واتە «خوێندکار نیم»." } },
    { id: "cop_pi6", dir: "kmr>ckb", show: "ckb", text: "مامۆستاین.",
      options: ["We are teachers.", "I am a teacher."], answer: 0,
      why: { en: "ـین after the noun is “we are”. “I am” would be مامۆستام.",
             ku: "ـین li dawiyê “em … ne” ye: Em mamoste ne. “Ez mamoste me” dibe مامۆستام." } },
    { id: "cop_pi7", dir: "kmr>ckb", show: "ckb", text: "خوێندکارن.",
      options: ["He is a student.", "They are students."], answer: 1,
      why: { en: "ـن is the plural ending. “He is a student” would be خوێندکارە.",
             ku: "ـن dawîbenda pirjimar e. “Ew xwendekar e” dibe خوێندکارە." } },
    { id: "cop_pi8", dir: "kmr>ckb", show: "ckb", text: "خوێندکار نیم.",
      options: ["I am not a student.", "He is not a student."], answer: 0,
      why: { en: "نیم is the negative copula for “I”. “He isn't” would be نییە.",
             ku: "نیم ji bo “ez” ye: Ez ne xwendekar im. Ji bo “ew” نییە tê." } },
    { id: "cop_pi9", dir: "kmr>ckb", show: "ckb", text: "خوێندکار نییە.",
      options: ["I am not a student.", "He is not a student."], answer: 1,
      why: { en: "نییە is “is not” for he, she or it. The ending, not a pronoun, tells you who.",
             ku: "نییە “ne … e” ye, ji bo “ew”. Kes ji dawîbendê tê zanîn." } },
    { id: "cop_pi10", dir: "kmr>ckb", show: "ckb", text: "مامۆستایت.",
      options: ["You are a teacher.", "She is a teacher."], answer: 0,
      why: { en: "ـیت is “you are”. “She is” would be مامۆستایە.",
             ku: "ـیت “tu … yî” ye. “Ew mamoste ye” dibe مامۆستایە." } }
  ]
});

// ---------------------------------------------------------------------------
// 2. Existential "there is / there isn't"
// ---------------------------------------------------------------------------
window.__BRIDGE.FRAMES.push({
  id: "exist", order: 2, level: "A1", sieve: 5,
  title: "There is, there isn't",
  pattern: { ckb: "[slot] هەیە / نییە", kmr: "[slot] heye / tune", en: "There is (no) [slot]" },
  card: {
    "ckb>kmr": {
      en: "Good news: هەیە is heye and هەبوو is hebû. Two changes. Plural things take hene: Du otêl hene. And “there isn't” is tune: Nan tune. Kurmanji keeps “is not” (ne … e) apart from “there isn't” (tune), where Sorani uses نییە for both.",
      ku: "«هەیە» و «هەبوو» وەک خۆیانن: heye، hebû. دوو گۆڕانکاری هەیە: بۆ کۆ دەڵێن hene (Du otêl hene). «نان نییە»ش دەبێتە Nan tune. بەڵام «سارد نییە» دەبێتە Ne sar e. واتە کورمانجی «نییە»ی ئێمە دەکات بە دوو وشە."
    },
    "kmr>ckb": {
      en: "heye and hebû carry over unchanged: ئاو هەیە. Sorani often keeps هەیە with plural things too, though هەن is also fine. The new part is a merge: نییە means both “there isn't” (tune) and “is not” (ne … e). The word before it tells you which.",
      ku: "heye û hebû wek xwe dimînin: ئاو هەیە. Soranî bi pirjimarê re jî pir caran هەیە dibêje (هەن jî rast e). Ya nû ev e: نییە hem “tune” ye hem “ne … e”. نان نییە = Nan tune; ئاوەکە سارد نییە = Av ne sar e. Peyva berî wê nîşan dide kîjan e."
    }
  },
  items: [
    { id: "ex_01", en: "There is water.", ckb: "ئاو هەیە.", kmr: "Av heye.",
      align: [
        { ckb: "ئاو", kmr: "Av", k: "sound", rule: "w-v" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "ex_02", en: "There is bread.", ckb: "نان هەیە.", kmr: "Nan heye.",
      align: [
        { ckb: "نان", kmr: "Nan", k: "same" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "ex_03", en: "There is tea.", ckb: "چا هەیە.", kmr: "Çay heye.",
      align: [
        { ckb: "چا", kmr: "Çay", k: "cognate", note: "Sorani writes چا or چای" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "ex_04", en: "Is there sugar?", ckb: "شەکر هەیە؟", kmr: "Şekir heye?",
      align: [
        { ckb: "شەکر", kmr: "Şekir", k: "same" },
        { ckb: "هەیە", kmr: "heye", k: "same", note: "a question by intonation in both" } ] },
    { id: "ex_05", en: "There is snow.", ckb: "بەفر هەیە.", kmr: "Berf heye.",
      align: [
        { ckb: "بەفر", kmr: "Berf", k: "cognate" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "ex_06", en: "There are two teachers.", ckb: "دوو مامۆستا هەن.", kmr: "Du mamoste hene.",
      align: [
        { ckb: "دوو", kmr: "Du", k: "same" },
        { ckb: "مامۆستا", kmr: "mamoste", k: "sound", rule: "a-e" },
        { ckb: "هەن", kmr: "hene", k: "grammar", note: "plural: Kurmanji always hene" } ] },
    { id: "ex_07", en: "There are two hotels here.", ckb: "لێرە دوو هۆتێل هەن.", kmr: "Li vir du otêl hene.",
      align: [
        { ckb: "لێرە", kmr: "Li vir", k: "cognate", note: "le + here; Kurmanji li + vir" },
        { ckb: "دوو", kmr: "du", k: "same" },
        { ckb: "هۆتێل", kmr: "otêl", k: "cognate", note: "Sorani adds h-; Kurmanji otêl" },
        { ckb: "هەن", kmr: "hene", k: "grammar", note: "plural: hene" } ] },
    { id: "ex_08", en: "There is milk at home.", ckb: "لە ماڵەوە شیر هەیە.", kmr: "Li malê şîr heye.",
      align: [
        { ckb: "لە", kmr: "Li", k: "cognate" },
        { ckb: "ماڵ", kmr: "mal", k: "sound", rule: "ll-l" },
        { ckb: "ـەوە", kmr: "ê", k: "grammar", note: "li + oblique -ê (mal is feminine); cf. Mukrî «زەینەبێ»" },
        { ckb: "شیر", kmr: "şîr", k: "same" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "ex_09", en: "There is no bread.", ckb: "نان نییە.", kmr: "Nan tune.",
      align: [
        { ckb: "نان", kmr: "Nan", k: "same" },
        { ckb: "نییە", kmr: "tune", k: "different", note: "“there isn't” = tune" } ] },
    { id: "ex_10", en: "There is no water.", ckb: "ئاو نییە.", kmr: "Av tune.",
      align: [
        { ckb: "ئاو", kmr: "Av", k: "sound", rule: "w-v" },
        { ckb: "نییە", kmr: "tune", k: "different", note: "“there isn't” = tune" } ] },
    { id: "ex_11", en: "The water isn't cold.", ckb: "ئاوەکە سارد نییە.", kmr: "Av ne sar e.",
      align: [
        { ckb: "ئاو", kmr: "Av", k: "sound", rule: "w-v" },
        { ckb: "ـەکە", kmr: "", k: "only", note: "Kurmanji has no “the”: bare noun" },
        { ckb: "", kmr: "ne", k: "only", note: "“is not” = ne … e, not tune" },
        { ckb: "سارد", kmr: "sar", k: "sound", rule: "rd-r" },
        { ckb: "نییە", kmr: "e", k: "grammar", note: "same نییە, different Kurmanji word" } ] },
    { id: "ex_12", en: "There was bread.", ckb: "نان هەبوو.", kmr: "Nan hebû.",
      align: [
        { ckb: "نان", kmr: "Nan", k: "same" },
        { ckb: "هەبوو", kmr: "hebû", k: "same" } ] },
    { id: "ex_13", en: "There was no water.", ckb: "ئاو نەبوو.", kmr: "Av tunebû.",
      align: [
        { ckb: "ئاو", kmr: "Av", k: "sound", rule: "w-v" },
        { ckb: "نەبوو", kmr: "tunebû", k: "grammar", note: "tune + bû; nebû is also heard" } ] }
  ],
  pi: [
    { id: "ex_pi1", dir: "ckb>kmr", show: "kmr", text: "Av tune.",
      options: ["There is no water.", "The water isn't cold."], answer: 0,
      why: { en: "tune means “there isn't”. “Isn't cold” needs ne … e: Av ne sar e.",
             ku: "tune بۆ «ئاو نییە»یە. «سارد نییە» دەبێتە Av ne sar e." } },
    { id: "ex_pi2", dir: "ckb>kmr", show: "kmr", text: "Mêvan hene.",
      options: ["There is a guest.", "There are guests."], answer: 1,
      why: { en: "hene marks plural things. One guest would be Mêvanek heye.",
             ku: "hene بۆ کۆیە. بۆ یەک میوان دەڵێن Mêvanek heye." } },
    { id: "ex_pi3", dir: "ckb>kmr", show: "kmr", text: "Nan tunebû.",
      options: ["There was no bread.", "There is no bread."], answer: 0,
      why: { en: "-bû at the end puts it in the past, as in هەبوو.",
             ku: "ئەو bûیەی کۆتایی ڕابردووە، وەک «نەبوو»." } },
    { id: "ex_pi4", dir: "ckb>kmr", show: "kmr", text: "Av ne sar e.",
      options: ["There is no cold water.", "The water isn't cold."], answer: 1,
      why: { en: "ne … e describes the water. If the water were missing, it would be Av tune.",
             ku: "ne … e باسی ئاوەکە دەکات. ئەگەر ئاو نەبوایە، دەیانگوت Av tune." } },
    { id: "ex_pi5", dir: "kmr>ckb", show: "ckb", text: "نان نییە.",
      options: ["There is no bread.", "I have no bread."], answer: 0,
      why: { en: "Nothing is attached to نان, so there is no owner. “I have no bread” is نانم نییە.",
             ku: "Tu paşgir bi نان ve nîne, loma xwedî tune: Nan tune. “Min nan tune” dibe نانم نییە." } },
    { id: "ex_pi6", dir: "kmr>ckb", show: "ckb", text: "نانم نییە.",
      options: ["There is no bread.", "I have no bread."], answer: 1,
      why: { en: "The ـم on نان is the owner, “my”. Same نییە, now it means “I don't have”.",
             ku: "ـم li ser نان xwedî ye (min). Heman نییە, lê niha “Min nan tune” ye." } },
    { id: "ex_pi7", dir: "kmr>ckb", show: "ckb", text: "ئاوەکە سارد نییە.",
      options: ["The water isn't cold.", "There is no cold water."], answer: 0,
      why: { en: "An adjective before نییە makes it “is not”: Av ne sar e.",
             ku: "Rengdêr berî نییە ye, loma “ne … e” ye: Av ne sar e." } },
    { id: "ex_pi8", dir: "kmr>ckb", show: "ckb", text: "ئاو نەبوو.",
      options: ["There is no water.", "There was no water."], answer: 1,
      why: { en: "نەبوو is the past of نییە: Av tunebû.",
             ku: "نەبوو dema borî ya نییە ye: Av tunebû." } }
  ]
});

// ---------------------------------------------------------------------------
// 3. "To have" (owner + heye)
// ---------------------------------------------------------------------------
window.__BRIDGE.FRAMES.push({
  id: "have", order: 3, level: "A1", sieve: 5,
  title: "To have",
  pattern: { ckb: "[slot]ێکم هەیە", kmr: "Min [slot]ek heye", en: "I have a [slot]" },
  card: {
    "ckb>kmr": {
      en: "Same verb, the owner moves. Sorani hangs the owner on the thing: ماڵێکم هەیە. Kurmanji says the owner as a word, usually first: Min malek heye. min is your من and wan echoes ئەوان; te is “you”, me “we”, we “you all”. New: wî for him, wê for her. Plural things take hene: Min du bira hene.",
      ku: "هەمان کردارە، تەنیا خاوەنەکە جێی دەگۆڕێت. ئێمە «ـم» دەلکێنین بە شتەکەوە: ماڵێکم هەیە. کورمانجی خاوەن وەک وشەیەک دەخاتە پێشەوە: Min malek heye. min هەمان «من»ە و wan وەک «ئەوان»ە؛ te واتە «تۆ»، me «ئێمە»، we «ئێوە». تازەکە: wî بۆ نێر، wê بۆ مێ. بۆ کۆش hene: Min du bira hene."
    },
    "kmr>ckb": {
      en: "Drop the owner word and hang a short ending on the thing: Min malek heye → ماڵێکم هەیە. ـم min, ـت te, ـی wî or wê, ـمان me, ـتان we, ـیان wan. “a” is ـێک (ـیەک after a vowel). No him/her split. Plural things usually still take هەیە.",
      ku: "Peyva xwedî nayê gotin; paşgirek li tiştê tê zêdekirin: Min malek heye → ماڵێکم هەیە. ـم min, ـت te, ـی wî/wê, ـمان me, ـتان we, ـیان wan. “-ek” dibe ـێک (piştî dengdêrê ـیەک). Cudahiya nêr û mê tune. Bi pirjimarê re jî pir caran هەیە dimîne."
    }
  },
  items: [
    { id: "hv_01", en: "I have a house.", ckb: "ماڵێکم هەیە.", kmr: "Min malek heye.",
      align: [
        { ckb: "", kmr: "Min", k: "only", note: "owner word first; Sorani hangs ـم on the noun" },
        { ckb: "ماڵ", kmr: "mal", k: "sound", rule: "ll-l" },
        { ckb: "ـێک", kmr: "ek", k: "cognate", note: "“a”: Sorani -êk, Kurmanji -ek" },
        { ckb: "ـم", kmr: "", k: "only", note: "owner: clitic in Sorani, word in front in Kurmanji" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "hv_02", en: "I have a brother.", ckb: "برایەکم هەیە.", kmr: "Min birayek heye.",
      align: [
        { ckb: "", kmr: "Min", k: "only", note: "owner word first; Sorani hangs ـم on the noun" },
        { ckb: "برا", kmr: "bira", k: "same" },
        { ckb: "یەک", kmr: "yek", k: "same", note: "after a vowel both add y" },
        { ckb: "ـم", kmr: "", k: "only", note: "owner clitic; Kurmanji says Min first" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "hv_03", en: "You have a sister.", ckb: "خوشکێکت هەیە.", kmr: "Te xwişkek heye.",
      align: [
        { ckb: "", kmr: "Te", k: "only", note: "owner word first; Sorani hangs ـت on the noun" },
        { ckb: "خوشک", kmr: "xwişk", k: "cognate" },
        { ckb: "ـێک", kmr: "ek", k: "cognate" },
        { ckb: "ـت", kmr: "", k: "only", note: "your: ـت = te" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "hv_04", en: "He has a son.", ckb: "کوڕێکی هەیە.", kmr: "Wî kurek heye.",
      align: [
        { ckb: "", kmr: "Wî", k: "only", note: "owner word first; Sorani hangs ـی on the noun" },
        { ckb: "کوڕ", kmr: "kur", k: "sound", rule: "rr-r" },
        { ckb: "ـێک", kmr: "ek", k: "cognate" },
        { ckb: "ـی", kmr: "", k: "only", note: "his: wî (a man)" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "hv_05", en: "She has a daughter.", ckb: "کچێکی هەیە.", kmr: "Wê keçek heye.",
      align: [
        { ckb: "", kmr: "Wê", k: "only", note: "owner word first; Sorani hangs ـی on the noun" },
        { ckb: "کچ", kmr: "keç", k: "cognate" },
        { ckb: "ـێک", kmr: "ek", k: "cognate" },
        { ckb: "ـی", kmr: "", k: "only", note: "her: wê (a woman); Sorani ـی covers both" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "hv_06", en: "We have a garden.", ckb: "باخچەیەکمان هەیە.", kmr: "Me baxçeyek heye.",
      align: [
        { ckb: "", kmr: "Me", k: "only", note: "owner word first; Sorani hangs ـمان on the noun" },
        { ckb: "باخچە", kmr: "baxçe", k: "same" },
        { ckb: "یەک", kmr: "yek", k: "same" },
        { ckb: "ـمان", kmr: "", k: "only", note: "our: ـمان = me" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "hv_07", en: "They have a shop.", ckb: "دووکانێکیان هەیە.", kmr: "Wan dikanek heye.",
      align: [
        { ckb: "", kmr: "Wan", k: "only", note: "owner word first; Sorani hangs ـیان on the noun" },
        { ckb: "دووکان", kmr: "dikan", k: "cognate" },
        { ckb: "ـێک", kmr: "ek", k: "cognate" },
        { ckb: "ـیان", kmr: "", k: "only", note: "their: ـیان = wan" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "hv_08", en: "I have a question.", ckb: "پرسیارێکم هەیە.", kmr: "Min pirsek heye.",
      align: [
        { ckb: "", kmr: "Min", k: "only", note: "owner word first; Sorani hangs ـم on the noun" },
        { ckb: "پرسیار", kmr: "pirs", k: "cognate", note: "same root as pirsîn “ask”" },
        { ckb: "ـێک", kmr: "ek", k: "cognate" },
        { ckb: "ـم", kmr: "", k: "only", note: "owner clitic; Kurmanji says Min first" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "hv_09", en: "Do you have bread?", ckb: "نانت هەیە؟", kmr: "Te nan heye?",
      align: [
        { ckb: "", kmr: "Te", k: "only", note: "owner word first; Sorani hangs ـت on the noun" },
        { ckb: "نان", kmr: "nan", k: "same" },
        { ckb: "ـت", kmr: "", k: "only", note: "owner clitic; Kurmanji says Te first" },
        { ckb: "هەیە", kmr: "heye", k: "same" } ] },
    { id: "hv_10", en: "I have two brothers.", ckb: "دوو برام هەیە.", kmr: "Min du bira hene.",
      align: [
        { ckb: "", kmr: "Min", k: "only", note: "owner word first; Sorani hangs ـم on the noun" },
        { ckb: "دوو", kmr: "du", k: "same" },
        { ckb: "برا", kmr: "bira", k: "same" },
        { ckb: "ـم", kmr: "", k: "only", note: "owner clitic; Kurmanji says Min first" },
        { ckb: "هەیە", kmr: "hene", k: "grammar", note: "two brothers: Kurmanji needs hene" } ] },
    { id: "hv_11", en: "They have guests.", ckb: "میوانیان هەیە.", kmr: "Wan mêvan hene.",
      align: [
        { ckb: "", kmr: "Wan", k: "only", note: "owner word first; Sorani hangs ـیان on the noun" },
        { ckb: "میوان", kmr: "mêvan", k: "sound", rule: "w-v" },
        { ckb: "ـیان", kmr: "", k: "only", note: "owner clitic; Kurmanji says Wan first" },
        { ckb: "هەیە", kmr: "hene", k: "grammar", note: "plural guests: hene" } ] },
    { id: "hv_12", en: "I have no money.", ckb: "پارەم نییە.", kmr: "Min pere tune.",
      align: [
        { ckb: "", kmr: "Min", k: "only", note: "owner word first; Sorani hangs ـم on the noun" },
        { ckb: "پارە", kmr: "pere", k: "sound", rule: "a-e" },
        { ckb: "ـم", kmr: "", k: "only", note: "owner clitic; Kurmanji says Min first" },
        { ckb: "نییە", kmr: "tune", k: "different", note: "“don't have” = tune" } ] },
    { id: "hv_13", en: "We have no water.", ckb: "ئاومان نییە.", kmr: "Me av tune.",
      align: [
        { ckb: "", kmr: "Me", k: "only", note: "owner word first; Sorani hangs ـمان on the noun" },
        { ckb: "ئاو", kmr: "av", k: "sound", rule: "w-v" },
        { ckb: "ـمان", kmr: "", k: "only", note: "owner clitic; Kurmanji says Me first" },
        { ckb: "نییە", kmr: "tune", k: "different" } ] },
    { id: "hv_14", en: "I had a house.", ckb: "ماڵێکم هەبوو.", kmr: "Min malek hebû.",
      align: [
        { ckb: "", kmr: "Min", k: "only", note: "owner word first; Sorani hangs ـم on the noun" },
        { ckb: "ماڵ", kmr: "mal", k: "sound", rule: "ll-l" },
        { ckb: "ـێک", kmr: "ek", k: "cognate" },
        { ckb: "ـم", kmr: "", k: "only", note: "owner clitic; Kurmanji says Min first" },
        { ckb: "هەبوو", kmr: "hebû", k: "same", note: "past: identical" } ] }
  ],
  pi: [
    { id: "hv_pi1", dir: "ckb>kmr", show: "kmr", text: "Wê keçek heye.",
      options: ["He has a daughter.", "She has a daughter."], answer: 1,
      why: { en: "wê is a woman owner, wî a man. Sorani ـی hides this; Kurmanji shows it.",
             ku: "wê بۆ مێیە، wî بۆ نێر. «ـی»ی ئێمە ئەمە ناڵێت، کورمانجی دەیڵێت." } },
    { id: "hv_pi2", dir: "ckb>kmr", show: "kmr", text: "Wî kurek heye.",
      options: ["He has a son.", "She has a son."], answer: 0,
      why: { en: "wî means the owner is a man: کوڕێکی هەیە.",
             ku: "wî واتە خاوەنەکە پیاوە: کوڕێکی هەیە." } },
    { id: "hv_pi3", dir: "ckb>kmr", show: "kmr", text: "Me av tune.",
      options: ["I have no water.", "We have no water."], answer: 1,
      why: { en: "me is the owner “we” (ـمان). “I” would be min.",
             ku: "me لێرە خاوەنە، واتە «ـمان». بۆ «ـم» دەڵێن min." } },
    { id: "hv_pi4", dir: "ckb>kmr", show: "kmr", text: "Te nan heye?",
      options: ["Do you have bread?", "Do they have bread?"], answer: 0,
      why: { en: "te is “you” as owner (ـت). “They” would be wan.",
             ku: "te واتە «ـت»: نانت هەیە؟ بۆ «ـیان» دەڵێن wan." } },
    { id: "hv_pi5", dir: "ckb>kmr", show: "kmr", text: "Min du bira hene.",
      options: ["I have two brothers.", "We have two brothers."], answer: 0,
      why: { en: "min is the owner “I”. hene only shows that the brothers are plural.",
             ku: "min خاوەنە، واتە «ـم». hene تەنیا دەڵێت براکان کۆن." } },
    { id: "hv_pi6", dir: "kmr>ckb", show: "ckb", text: "خوشکێکت هەیە.",
      options: ["I have a sister.", "You have a sister."], answer: 1,
      why: { en: "ـت after ـێک is the owner “you” (te).",
             ku: "ـت piştî ـێک xwedî ye: “te”. Te xwişkek heye." } },
    { id: "hv_pi7", dir: "kmr>ckb", show: "ckb", text: "ئاویان نییە.",
      options: ["They have no water.", "We have no water."], answer: 0,
      why: { en: "ـیان is “they” (wan). “We” would be ئاومان نییە.",
             ku: "ـیان “wan” e: Wan av tune. Ji bo “me” ئاومان نییە tê." } },
    { id: "hv_pi8", dir: "kmr>ckb", show: "ckb", text: "پارەم نییە.",
      options: ["There is no money.", "I have no money."], answer: 1,
      why: { en: "The ـم on پارە is the owner. Without it, پارە نییە is “there is no money”.",
             ku: "ـم li ser پارە xwedî ye: Min pere tune. Bêyî wê, پارە نییە = Pere tune." } },
    { id: "hv_pi9", dir: "kmr>ckb", show: "ckb", text: "کچێکی هەیە.",
      options: ["He or she has a daughter.", "I have a daughter."], answer: 0,
      why: { en: "ـی is the owner “he” or “she”: Sorani doesn't say which.",
             ku: "ـی hem wî ye hem wê: Wî/Wê keçek heye. Soranî cudahiyê nake." } }
  ]
});

// ---------------------------------------------------------------------------
// 4. Present tense
// ---------------------------------------------------------------------------
window.__BRIDGE.FRAMES.push({
  id: "present", order: 4, level: "A1", sieve: 5,
  title: "Present tense",
  pattern: { ckb: "(من) دە[slot]م", kmr: "Ez di[slot]im", en: "I [slot]" },
  card: {
    "ckb>kmr": {
      en: "Same machine: prefix + stem + ending. دە- becomes di-: دەزانم → dizanim. نا- stays na-: naçim. If you say ئەچم at home, the written دەچم is your bridge to diçim. Then come cognate stems (dixwim, dinivîsim, têm) and a few new ones (dibêjim). Traps: “I don't know” is nizanim, and he/she ends in -e.",
      ku: "هەمان ڕێگایە: پێشگر + ڕەگ + کۆتایی. «دە» دەبێتە di: دەزانم ← dizanim. ئەگەر لە قسەدا «ئەچم» دەڵێیت، «دەچم»ی نووسراو نزیکترە لە diçim. «نا»ش وەک خۆیەتی: naçim. دوو تەڵە: «نازانم» دەبێتە nizanim، و کەسی سێیەم بە -e تەواو دەبێت: dizane، vedixwe."
    },
    "kmr>ckb": {
      en: "Same machine: di- becomes دە-, na- stays نا-, and نازانم is regular (your nizanim). Endings shift a little: he/she ends in ـێت or ـات (دەزانێت، دەخوات), “we” is ـین but “they” is ـن. Your ve- in front becomes ـەوە at the end: vedixwim → دەخۆمەوە.",
      ku: "Heman rê ye: di dibe دە، na dimîne نا. نازانم birêkûpêk e (li şûna nizanim). Kesê sêyem bi ـێت an ـات diqede: دەزانێت، دەخوات. “Em” ـین e, “ew” ـن e. Li şûna ve-ya pêşiyê, Soranî ـەوە dide paşiyê: vedixwim → دەخۆمەوە."
    }
  },
  items: [
    { id: "pr_01", en: "I know.", ckb: "من دەزانم.", kmr: "Ez dizanim.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar", note: "present subject: ez" },
        { ckb: "دەزانم", kmr: "dizanim", k: "sound", rule: "de-di", note: "same verb, de- → di-" } ] },
    { id: "pr_02", en: "I'm going.", ckb: "من دەچم.", kmr: "Ez diçim.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "دەچم", kmr: "diçim", k: "sound", rule: "de-di", note: "Silêmanî speech ئەچم; written دەچم is closer" } ] },
    { id: "pr_03", en: "We are going.", ckb: "ئێمە دەچین.", kmr: "Em diçin.",
      align: [
        { ckb: "ئێمە", kmr: "Em", k: "cognate" },
        { ckb: "دەچ", kmr: "diç", k: "sound", rule: "de-di" },
        { ckb: "ـین", kmr: "in", k: "grammar", note: "Kurmanji: one plural ending -in" } ] },
    { id: "pr_04", en: "I see.", ckb: "من دەبینم.", kmr: "Ez dibînim.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "دەبینم", kmr: "dibînim", k: "sound", rule: "de-di", note: "infinitive dîtin, like Mukrî دیتن" } ] },
    { id: "pr_05", en: "I live here.", ckb: "من لێرە دەژیم.", kmr: "Ez li vir dijîm.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "لێرە", kmr: "li vir", k: "cognate" },
        { ckb: "دەژیم", kmr: "dijîm", k: "sound", rule: "de-di" } ] },
    { id: "pr_06", en: "I'm not going.", ckb: "من ناچم.", kmr: "Ez naçim.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "ناچم", kmr: "naçim", k: "same", note: "negative na- is identical" } ] },
    { id: "pr_07", en: "I don't know.", ckb: "من نازانم.", kmr: "Ez nizanim.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "نازانم", kmr: "nizanim", k: "grammar", note: "irregular: ni-, not na- (also nikarim)" } ] },
    { id: "pr_08", en: "I eat bread.", ckb: "من نان دەخۆم.", kmr: "Ez nan dixwim.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "نان", kmr: "nan", k: "same" },
        { ckb: "دەخۆم", kmr: "dixwim", k: "cognate", note: "stem xo- ~ xw-" } ] },
    { id: "pr_09", en: "I buy bread.", ckb: "من نان دەکڕم.", kmr: "Ez nan dikirim.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "نان", kmr: "nan", k: "same" },
        { ckb: "دەکڕم", kmr: "dikirim", k: "sound", rule: "rr-r" } ] },
    { id: "pr_10", en: "I write.", ckb: "من دەنووسم.", kmr: "Ez dinivîsim.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "دەنووسم", kmr: "dinivîsim", k: "cognate", note: "Kurmanji keeps -v-: nivîs-" } ] },
    { id: "pr_11", en: "I drink water.", ckb: "من ئاو دەخۆمەوە.", kmr: "Ez av vedixwim.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "ئاو", kmr: "av", k: "sound", rule: "w-v" },
        { ckb: "دەخۆمەوە", kmr: "vedixwim", k: "sound", rule: "ewe-ve", note: "-ewe at the end = ve- in front" } ] },
    { id: "pr_12", en: "She drinks tea.", ckb: "ئەو چا دەخواتەوە.", kmr: "Ew çay vedixwe.",
      align: [
        { ckb: "ئەو", kmr: "Ew", k: "same" },
        { ckb: "چا", kmr: "çay", k: "cognate" },
        { ckb: "دەخواتەوە", kmr: "vedixwe", k: "grammar", note: "he/she: Sorani -at, Kurmanji -e" } ] },
    { id: "pr_13", en: "I'm coming.", ckb: "من دێم.", kmr: "Ez têm.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "دێم", kmr: "têm", k: "cognate", note: "d- in Sorani, t- in Kurmanji" } ] },
    { id: "pr_14", en: "What are you saying?", ckb: "تۆ چی دەڵێیت؟", kmr: "Tu çi dibêjî?",
      align: [
        { ckb: "تۆ", kmr: "Tu", k: "cognate" },
        { ckb: "چی", kmr: "çi", k: "same" },
        { ckb: "دەڵێیت", kmr: "dibêjî", k: "different", note: "say: Sorani łê-, Kurmanji bêj-" } ] }
  ],
  pi: [
    { id: "pr_pi1", dir: "ckb>kmr", show: "kmr", text: "Ez nizanim.",
      options: ["I know.", "I don't know."], answer: 1,
      why: { en: "ni- is the negative for zanîn (and karîn). It is not di-.",
             ku: "ni- لێرە نەرێنییە، وەک «نا»ی «نازانم». di- نییە." } },
    { id: "pr_pi2", dir: "ckb>kmr", show: "kmr", text: "Çay vedixwe.",
      options: ["He or she drinks tea.", "I drink tea."], answer: 0,
      why: { en: "-e at the end is he/she, like Sorani ـێت/ـات. “I drink” is vedixwim.",
             ku: "ئەو -eیەی کۆتایی کەسی سێیەمە، وەک «ـات»ی ئێمە. «دەخۆمەوە» دەبێتە vedixwim." } },
    { id: "pr_pi3", dir: "ckb>kmr", show: "kmr", text: "Tê.",
      options: ["I'm coming.", "He or she is coming."], answer: 1,
      why: { en: "tê is “he/she comes” (دێت). “I come” is têm.",
             ku: "tê واتە «دێت». «دێم» دەبێتە têm." } },
    { id: "pr_pi4", dir: "ckb>kmr", show: "kmr", text: "Diçin.",
      options: ["We or they are going.", "I'm going."], answer: 0,
      why: { en: "-in is every plural: we, you all and they. Only the pronoun can tell them apart.",
             ku: "-in بۆ هەموو کۆیەکە: ئێمە، ئێوە، ئەوان. تەنیا جێناو جیایان دەکاتەوە." } },
    { id: "pr_pi5", dir: "kmr>ckb", show: "ckb", text: "دەچین.",
      options: ["We are going.", "They are going."], answer: 0,
      why: { en: "ـین is only “we”. “They are going” is دەچن.",
             ku: "ـین tenê “em” e. “Ew diçin” dibe دەچن." } },
    { id: "pr_pi6", dir: "kmr>ckb", show: "ckb", text: "دەچن.",
      options: ["We are going.", "They are going."], answer: 1,
      why: { en: "ـن is “they” (or “you all”). Sorani keeps “we” apart with ـین.",
             ku: "ـن “ew” (an “hûn”) e. Soranî ji bo “em” ـین dibêje." } },
    { id: "pr_pi7", dir: "kmr>ckb", show: "ckb", text: "دێت.",
      options: ["I'm coming.", "He or she is coming."], answer: 1,
      why: { en: "ـت at the end is he/she: tê. “I come” is دێم.",
             ku: "ـت li dawiyê kesê sêyem e: tê. “Têm” dibe دێم." } },
    { id: "pr_pi8", dir: "kmr>ckb", show: "ckb", text: "نازانم.",
      options: ["I don't know.", "He doesn't know."], answer: 0,
      why: { en: "ـم is “I”; نا- is the regular negative: your nizanim. “He doesn't” is نازانێت.",
             ku: "ـم “ez” e, نا jî neyînî ye: nizanim. “Nizane” dibe نازانێت." } }
  ]
});

// ---------------------------------------------------------------------------
// 5. Past tense without an object (intransitive): nearly identical
// ---------------------------------------------------------------------------
window.__BRIDGE.FRAMES.push({
  id: "past_intr", order: 5, level: "A1", sieve: 5,
  title: "Past without an object",
  pattern: { ckb: "(من) [slot]م", kmr: "Ez [slot]m", en: "I [slot] (past)" },
  card: {
    "ckb>kmr": {
      en: "Almost free. چووم = çûm, هاتم = hatim, نەچووم = neçûm. Only small things move: “you went” is çûyî, and “we” and “they” share one ending (em çûn, ew çûn). No بۆ before a place: Duh ez çûm bazarê. ـەوە verbs take ve- or drop it: vegeriyam, mam.",
      ku: "ئەمەیان زۆر ئاسانە: چووم = çûm، هاتم = hatim، نەچووم = neçûm. تەنیا چەند شتی بچووک: «چوویت» دەبێتە çûyî، و «ئێمە» و «ئەوان» یەک کۆتاییان هەیە: em çûn، ew çûn. «بۆ بازاڕ» دەبێتە bazarê. ـەوەش یان دەبێتە ve لە پێشەوە یان نامێنێت: گەڕامەوە ← vegeriyam."
    },
    "kmr>ckb": {
      en: "Almost free: çûm = چووم, hatim = هاتم, neçûm = نەچووم. Sorani splits what Kurmanji merges: هاتین is “we came”, هاتن is “they came”. A place goal takes بۆ or ـە, never -ê: çûm bazarê → چووم بۆ بازاڕ / چوومە بازاڕ. Your ve- verbs end in ـەوە: vegeriyam → گەڕامەوە.",
      ku: "Hema hema heman e: çûm = چووم, hatim = هاتم, neçûm = نەچووم. Soranî tiştê ku Kurmancî dike yek, dike du: هاتین “em hatin” e, هاتن “ew hatin” e. Li şûna “bazarê” dibêje بۆ بازاڕ an چوومە بازاڕ. Lêkerên bi ve- bi ـەوە diqedin: vegeriyam → گەڕامەوە."
    }
  },
  items: [
    { id: "pa_01", en: "I went.", ckb: "من چووم.", kmr: "Ez çûm.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar", note: "no object, so the subject is ez" },
        { ckb: "چووم", kmr: "çûm", k: "same" } ] },
    { id: "pa_02", en: "I came.", ckb: "من هاتم.", kmr: "Ez hatim.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "هاتم", kmr: "hatim", k: "same" } ] },
    { id: "pa_03", en: "You went.", ckb: "تۆ چوویت.", kmr: "Tu çûyî.",
      align: [
        { ckb: "تۆ", kmr: "Tu", k: "cognate" },
        { ckb: "چوو", kmr: "çû", k: "same" },
        { ckb: "ـیت", kmr: "yî", k: "grammar", note: "you: -yt ~ -yî" } ] },
    { id: "pa_04", en: "She came.", ckb: "ئەو هات.", kmr: "Ew hat.",
      align: [
        { ckb: "ئەو", kmr: "Ew", k: "same" },
        { ckb: "هات", kmr: "hat", k: "same", note: "he/she: bare past stem in both" } ] },
    { id: "pa_05", en: "We went.", ckb: "ئێمە چووین.", kmr: "Em çûn.",
      align: [
        { ckb: "ئێمە", kmr: "Em", k: "cognate" },
        { ckb: "چووین", kmr: "çûn", k: "grammar", note: "“we” and “they” share -n in Kurmanji" } ] },
    { id: "pa_06", en: "They came.", ckb: "ئەوان هاتن.", kmr: "Ew hatin.",
      align: [
        { ckb: "ئەوان", kmr: "Ew", k: "grammar", note: "ew is also “they”" },
        { ckb: "هاتن", kmr: "hatin", k: "same" } ] },
    { id: "pa_07", en: "I didn't go.", ckb: "من نەچووم.", kmr: "Ez neçûm.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "نەچووم", kmr: "neçûm", k: "same", note: "past negative ne- in both" } ] },
    { id: "pa_08", en: "Yesterday I went to the market.", ckb: "دوێنێ چووم بۆ بازاڕ.", kmr: "Duh ez çûm bazarê.",
      align: [
        { ckb: "دوێنێ", kmr: "Duh", k: "cognate" },
        { ckb: "", kmr: "ez", k: "only" },
        { ckb: "چووم", kmr: "çûm", k: "same" },
        { ckb: "بۆ", kmr: "", k: "only", note: "Kurmanji marks the goal with -ê, no preposition" },
        { ckb: "بازاڕ", kmr: "bazar", k: "sound", rule: "rr-r" },
        { ckb: "", kmr: "ê", k: "only", note: "goal -ê; northern Sorani has it too: «چوومە کن زەینەبێ»" } ] },
    { id: "pa_09", en: "I arrived.", ckb: "من گەیشتم.", kmr: "Ez gihîştim.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "گەیشتم", kmr: "gihîştim", k: "cognate" } ] },
    { id: "pa_10", en: "I sat down.", ckb: "من دانیشتم.", kmr: "Ez rûniştim.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "دا", kmr: "rû", k: "different", note: "different preverb, same root -niş-" },
        { ckb: "نیشتم", kmr: "niştim", k: "cognate" } ] },
    { id: "pa_11", en: "I got sick.", ckb: "من نەخۆش کەوتم.", kmr: "Ez nexweş ketim.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "نەخۆش", kmr: "nexweş", k: "sound", rule: "xo-xwe" },
        { ckb: "کەوتم", kmr: "ketim", k: "cognate", note: "fell (ill): kewt- ~ ket-" } ] },
    { id: "pa_12", en: "I stayed at home.", ckb: "من لە ماڵەوە مامەوە.", kmr: "Ez li malê mam.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "لە", kmr: "li", k: "cognate" },
        { ckb: "ماڵەوە", kmr: "malê", k: "grammar", note: "at home: Kurmanji li malê" },
        { ckb: "مامەوە", kmr: "mam", k: "grammar", note: "Kurmanji man has no -ewe" } ] },
    { id: "pa_13", en: "I came back.", ckb: "من گەڕامەوە.", kmr: "Ez vegeriyam.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "گەڕامەوە", kmr: "vegeriyam", k: "sound", rule: "ewe-ve", note: "-ewe at the end = ve- in front" } ] },
    { id: "pa_14", en: "I slept.", ckb: "من خەوتم.", kmr: "Ez razam.",
      align: [
        { ckb: "من", kmr: "Ez", k: "grammar" },
        { ckb: "خەوتم", kmr: "razam", k: "different", note: "Sorani also has ڕازان; xew “sleep” is shared" } ] }
  ],
  pi: [
    { id: "pa_pi1", dir: "ckb>kmr", show: "kmr", text: "Neçûm.",
      options: ["I didn't go.", "I'm not going."], answer: 0,
      why: { en: "ne- with the past stem çû- is the past. “I'm not going” is naçim.",
             ku: "ne- لەگەڵ çû- ڕابردووە، وەک «نەچووم». «ناچم» دەبێتە naçim." } },
    { id: "pa_pi2", dir: "ckb>kmr", show: "kmr", text: "Çûn.",
      options: ["He went.", "We or they went."], answer: 1,
      why: { en: "-n is plural: em çûn and ew çûn look the same. “He went” is just çû.",
             ku: "-n کۆیە: em çûn و ew çûn وەک یەکن. «چوو» تەنیا دەبێتە çû." } },
    { id: "pa_pi3", dir: "ckb>kmr", show: "kmr", text: "Çûyî.",
      options: ["You went.", "I went."], answer: 0,
      why: { en: "-yî is “you” (چوویت). “I went” is çûm.",
             ku: "-yî واتە «ـیت»: چوویت. «چووم» دەبێتە çûm." } },
    { id: "pa_pi4", dir: "ckb>kmr", show: "kmr", text: "Vegeriyam.",
      options: ["I came back.", "He came back."], answer: 0,
      why: { en: "-m is “I”, exactly like ـم. ve- in front is your ـەوە.",
             ku: "-m واتە «ـم»، وەک خۆمان. ve لە پێشەوە هەمان «ـەوە»ی ئێمەیە: گەڕامەوە." } },
    { id: "pa_pi5", dir: "kmr>ckb", show: "ckb", text: "هاتین.",
      options: ["We came.", "They came."], answer: 0,
      why: { en: "ـین is only “we”. “They came” is هاتن.",
             ku: "ـین tenê “em” e: Em hatin. “Ew hatin” dibe هاتن." } },
    { id: "pa_pi6", dir: "kmr>ckb", show: "ckb", text: "هاتن.",
      options: ["We came.", "They came."], answer: 1,
      why: { en: "ـن is “they” (or “you all”). Sorani keeps “we” apart.",
             ku: "ـن “ew” e (an “hûn”). Soranî “em” cuda dihêle: هاتین." } },
    { id: "pa_pi7", dir: "kmr>ckb", show: "ckb", text: "چوویت.",
      options: ["You went.", "He went."], answer: 0,
      why: { en: "ـیت is “you”: çûyî. “He went” is just چوو.",
             ku: "ـیت “tu” ye: Tu çûyî. “Ew çû” dibe چوو." } },
    { id: "pa_pi8", dir: "kmr>ckb", show: "ckb", text: "نەچووم.",
      options: ["I'm not going.", "I didn't go."], answer: 1,
      why: { en: "نە- with the past stem is the past negative, as in Kurmanji neçûm.",
             ku: "نە- bi koka borî re neyîniya dema borî ye: neçûm." } }
  ]
});
