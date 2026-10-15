// Bridge course: advanced frames (past with an object, want/can/must, nouns,
// prepositions, commands and negation).
// Sorani base: standard Central Kurdish (Silêmanî-based, دە- present prefix).
// Kurmanji base: Hawar Latin. Regional forms appear only as hooks in notes/cards.
// align segments follow Sorani word order.
window.__BRIDGE = window.__BRIDGE || {};
window.__BRIDGE.FRAMES = window.__BRIDGE.FRAMES || [];

// ---------------------------------------------------------------------------
// 6. Past with an object (ergative)
// ---------------------------------------------------------------------------
window.__BRIDGE.FRAMES.push({
  id: "past_tr", order: 6, level: "A2", sieve: 5,
  title: "Past with an object: who did it?",
  pattern: { ckb: "[slot]ـم خوارد", kmr: "Min [slot] xwar", en: "I ate [slot]" },
  card: {
    "ckb>kmr": {
      en: "Same logic as Sorani, different carrier. Sorani hangs the doer on the first word: نانم خوارد. Kurmanji puts it in front as a word you already know: Min nan xwar (min, te, wî/wê, me, we, wan). The trap: the verb ending now follows the object. Min tu dîtî = تۆم بینی; Te ez dîtim = منت بینی.",
      ku: "هەمان یاسای سۆرانییە، بەڵام بە شێوەیەکی تر. ئێمە بکەر وەک ـم دەلکێنین بە یەکەم وشەوە: نانم خوارد. کورمانجی وشەیەکی ناسراو لە پێشەوە دادەنێت: Min nan xwar (min، te، wî/wê، me، we، wan). ئاگادار بە: کۆتایی کردارەکە لەگەڵ بەرکار دەگونجێت. Min tu dîtî = تۆم بینی؛ Te ez dîtim = منت بینی."
    },
    "kmr>ckb": {
      en: "Sorani has your past split too, but the doer is not an oblique word. It is a small clitic on the FIRST word of the verb phrase: the object (نانم خوارد), the negative (نەمخوارد) or the preverb (هەڵم گرت). Free pronouns never change: من, تۆ, ئەو. So منت بینی is ‘you saw me’: ـت is the doer.",
      ku: "Di soranî de jî dema borî wek me dixebite, lê kirde ne peyveke cuda ye. Ew paşgireke biçûk e û bi peyva yekem ve dizeliqe: bi bireser (نانم خوارد = min nan xwar), bi ne- (نەمخوارد) an bi pêşlêkerê (هەڵم گرت). Cînav naguherin: من، تۆ، ئەو. Lewma منت بینی = te ez dîtim."
    }
  },
  items: [
    { id: "pt_01", en: "I ate bread.", ckb: "نانم خوارد.", kmr: "Min nan xwar.",
      align: [
        { ckb: "نان", kmr: "nan", k: "same" },
        { ckb: "ـم", kmr: "Min", k: "grammar", note: "doer: Sorani clitic, Kurmanji oblique pronoun in front" },
        { ckb: "خوارد", kmr: "xwar", k: "sound", rule: "rd-r" } ] },
    { id: "pt_02", en: "You ate bread.", ckb: "نانت خوارد.", kmr: "Te nan xwar.",
      align: [
        { ckb: "نان", kmr: "nan", k: "same" },
        { ckb: "ـت", kmr: "Te", k: "grammar", note: "you as doer: ـت vs te (not tu)" },
        { ckb: "خوارد", kmr: "xwar", k: "sound", rule: "rd-r" } ] },
    { id: "pt_03", en: "He ate an apple.", ckb: "سێوێکی خوارد.", kmr: "Wî sêvek xwar.",
      align: [
        { ckb: "سێو", kmr: "sêv", k: "sound", rule: "w-v" },
        { ckb: "ـێک", kmr: "ek", k: "grammar", note: "‘a’: -êk vs -ek" },
        { ckb: "ـی", kmr: "Wî", k: "grammar", note: "he: wî; she would be wê" },
        { ckb: "خوارد", kmr: "xwar", k: "sound", rule: "rd-r" } ] },
    { id: "pt_04", en: "We drank tea.", ckb: "چامان خواردەوە.", kmr: "Me çay vexwar.",
      align: [
        { ckb: "چا", kmr: "çay", k: "cognate" },
        { ckb: "ـمان", kmr: "Me", k: "grammar", note: "we as doer: ـمان vs me" },
        { ckb: "خوارد", kmr: "xwar", k: "sound", rule: "rd-r" },
        { ckb: "ـەوە", kmr: "ve", k: "sound", rule: "ewe-ve", note: "-ewe at the end = ve- in front" } ] },
    { id: "pt_05", en: "They bought a house.", ckb: "خانوویەکیان کڕی.", kmr: "Wan xaniyek kirî.",
      align: [
        { ckb: "خانوو", kmr: "xani", k: "cognate", note: "xanî; -y- before -ek" },
        { ckb: "یەک", kmr: "yek", k: "grammar", note: "‘a’ after a vowel" },
        { ckb: "ـیان", kmr: "Wan", k: "grammar", note: "they as doer: ـیان vs wan" },
        { ckb: "کڕی", kmr: "kirî", k: "sound", rule: "rr-r" } ] },
    { id: "pt_06", en: "The woman ate bread.", ckb: "ژنەکە نانی خوارد.", kmr: "Jinê nan xwar.",
      align: [
        { ckb: "ژن", kmr: "Jin", k: "same" },
        { ckb: "ـەکە", kmr: "ê", k: "grammar", note: "no ‘the’ in Kurmanji; a female doer takes -ê" },
        { ckb: "نان", kmr: "nan", k: "same" },
        { ckb: "ـی", kmr: "", k: "only", note: "Sorani repeats the doer as a clitic" },
        { ckb: "خوارد", kmr: "xwar", k: "sound", rule: "rd-r" } ] },
    { id: "pt_07", en: "I didn't eat bread.", ckb: "نانم نەخوارد.", kmr: "Min nan nexwar.",
      align: [
        { ckb: "نان", kmr: "nan", k: "same" },
        { ckb: "ـم", kmr: "Min", k: "grammar", note: "the clitic stays on the object" },
        { ckb: "نە", kmr: "ne", k: "same" },
        { ckb: "خوارد", kmr: "xwar", k: "sound", rule: "rd-r" } ] },
    { id: "pt_08", en: "I didn't eat it.", ckb: "نەمخوارد.", kmr: "Min nexwar.",
      align: [
        { ckb: "نە", kmr: "ne", k: "same" },
        { ckb: "ـم", kmr: "Min", k: "grammar", note: "no object: the clitic jumps onto نە-" },
        { ckb: "خوارد", kmr: "xwar", k: "sound", rule: "rd-r" } ] },
    { id: "pt_09", en: "I picked it up.", ckb: "هەڵم گرت.", kmr: "Min hilgirt.",
      align: [
        { ckb: "هەڵ", kmr: "hil", k: "cognate", note: "same preverb" },
        { ckb: "ـم", kmr: "Min", k: "grammar", note: "Sorani: clitic between preverb and verb" },
        { ckb: "گرت", kmr: "girt", k: "same" } ] },
    { id: "pt_10", en: "I saw you.", ckb: "تۆم بینی.", kmr: "Min tu dîtî.",
      align: [
        { ckb: "تۆ", kmr: "tu", k: "cognate", note: "the one seen stays direct: tu" },
        { ckb: "ـم", kmr: "Min", k: "grammar" },
        { ckb: "بینی", kmr: "dît", k: "different", note: "dîtin = بینین; Mukriyan also says دیتن" },
        { ckb: "", kmr: "î", k: "only", note: "ending agrees with the object tu" } ] },
    { id: "pt_11", en: "You saw me.", ckb: "منت بینی.", kmr: "Te ez dîtim.",
      align: [
        { ckb: "من", kmr: "ez", k: "grammar", note: "‘me’ as the one seen: ez" },
        { ckb: "ـت", kmr: "Te", k: "grammar", note: "doer: ـت vs te" },
        { ckb: "بینی", kmr: "dît", k: "different" },
        { ckb: "", kmr: "im", k: "only", note: "ending agrees with the object ez" } ] },
    { id: "pt_12", en: "He saw me.", ckb: "منی بینی.", kmr: "Wî ez dîtim.",
      align: [
        { ckb: "من", kmr: "ez", k: "grammar", note: "‘me’ as the one seen: ez" },
        { ckb: "ـی", kmr: "Wî", k: "grammar", note: "doer: ـی vs wî (she: wê)" },
        { ckb: "بینی", kmr: "dît", k: "different" },
        { ckb: "", kmr: "im", k: "only", note: "ending agrees with ez" } ] },
    { id: "pt_13", en: "I saw them.", ckb: "ئەوانم بینی.", kmr: "Min ew dîtin.",
      align: [
        { ckb: "ئەوان", kmr: "ew", k: "grammar", note: "‘they’ is ew in Kurmanji" },
        { ckb: "ـم", kmr: "Min", k: "grammar" },
        { ckb: "بینی", kmr: "dît", k: "different" },
        { ckb: "", kmr: "in", k: "only", note: "plural object: ending -in" } ] },
    { id: "pt_14", en: "What did you do?", ckb: "چیت کرد؟", kmr: "Te çi kir?",
      align: [
        { ckb: "چی", kmr: "çi", k: "cognate" },
        { ckb: "ـت", kmr: "Te", k: "grammar" },
        { ckb: "کرد", kmr: "kir", k: "sound", rule: "rd-r" } ] }
  ],
  pi: [
    { id: "pt_pi1", dir: "ckb>kmr", show: "kmr", text: "Min tu dîtî.",
      options: ["I saw you.", "You saw me."], answer: 0,
      why: { en: "Min is the doer, tu is the one seen, and -î agrees with tu. = تۆم بینی.",
             ku: "Min بکەرە، tu بەرکارە و ـî لەگەڵ tu دەگونجێت. واتە: تۆم بینی." } },
    { id: "pt_pi2", dir: "ckb>kmr", show: "kmr", text: "Te ez dîtim.",
      options: ["I saw you.", "You saw me."], answer: 1,
      why: { en: "Te is ‘you’ as the doer; ez is ‘me’, the one seen; -im agrees with ez. = منت بینی.",
             ku: "Te بکەرە (تۆ)، ez بەرکارە (من) و ـim لەگەڵ ez دەگونجێت. واتە: منت بینی." } },
    { id: "pt_pi3", dir: "ckb>kmr", show: "kmr", text: "Wî ez dîtim.",
      options: ["He saw me.", "I saw him."], answer: 0,
      why: { en: "Wî is the oblique form, so he is the doer; ez is the direct form, so I was seen. ‘I saw him’ is Min ew dît.",
             ku: "Wî شێوەی ناڕاستەوخۆیە، کەواتە ئەو بکەرە؛ ez ڕاستەوخۆیە، کەواتە من بینراوم. «ئەوم بینی» دەبێتە Min ew dît." } },
    { id: "pt_pi4", dir: "ckb>kmr", show: "kmr", text: "Min ew dîtin.",
      options: ["I saw them.", "I saw him."], answer: 0,
      why: { en: "The ending -in shows a plural object: them. ‘I saw him’ is Min ew dît. = ئەوانم بینی.",
             ku: "کۆتایی ـin بەرکاری کۆ پیشان دەدات. «ئەوم بینی» دەبێتە Min ew dît. واتە: ئەوانم بینی." } },
    { id: "pt_pi5", dir: "ckb>kmr", show: "kmr", text: "Me hûn dîtin.",
      options: ["We saw you (all).", "You (all) saw us."], answer: 0,
      why: { en: "Me is oblique: we are the doers. Hûn is direct: you (all) were seen. ‘You saw us’ would be We em dîtin.",
             ku: "Me ناڕاستەوخۆیە: ئێمە بکەرین. Hûn ڕاستەوخۆیە: ئێوە بینراون. «ئێمەتان بینی» دەبێتە We em dîtin." } },
    { id: "pt_pi6", dir: "ckb>kmr", show: "kmr", text: "Te ez nedîtim.",
      options: ["You didn't see me.", "I didn't see you."], answer: 0,
      why: { en: "Te is the doer (you), ez is the one not seen (me). = منت نەبینی.",
             ku: "Te بکەرە (تۆ)، ez بەرکارە (من). واتە: منت نەبینی." } },
    { id: "pt_pi7", dir: "ckb>kmr", show: "kmr", text: "Jinê ez dîtim.",
      options: ["The woman saw me.", "I saw the woman."], answer: 0,
      why: { en: "Jinê carries the oblique -ê, so the woman is the doer; ez was seen. ‘I saw the woman’ is Min jin dît.",
             ku: "Jinê ـێی ناڕاستەوخۆی پێوەیە، کەواتە ژنەکە بکەرە و من بینراوم. «ژنەکەم بینی» دەبێتە Min jin dît." } },

    { id: "pt_pi8", dir: "kmr>ckb", show: "ckb", text: "تۆم بینی.",
      options: ["I saw you.", "You saw me."], answer: 0,
      why: { en: "The clitic ـم (I) sits on تۆ, the one seen. = Min tu dîtî.",
             ku: "Paşgira ـم (min) li ser تۆ ye: kirde ez im, yê ku hatiye dîtin tu yî. Yanî: Min tu dîtî." } },
    { id: "pt_pi9", dir: "kmr>ckb", show: "ckb", text: "منت بینی.",
      options: ["I saw you.", "You saw me."], answer: 1,
      why: { en: "من is not the doer here, it is the one seen. The doer is the clitic ـت (you). = Te ez dîtim.",
             ku: "Li vir من ne kirde ye, ew yê ku hatiye dîtin e. Kirde paşgira ـت (tu) ye. Yanî: Te ez dîtim." } },
    { id: "pt_pi10", dir: "kmr>ckb", show: "ckb", text: "منی بینی.",
      options: ["He saw me.", "I saw him."], answer: 0,
      why: { en: "Sorani من never changes form, so read the clitic: ـی (he/she) is the doer. = Wî ez dîtim.",
             ku: "Di soranî de من naguhere, ji ber vê li paşgirê binêre: ـی (ew) kirde ye. Yanî: Wî ez dîtim." } },
    { id: "pt_pi11", dir: "kmr>ckb", show: "ckb", text: "ئەوم بینی.",
      options: ["I saw him.", "He saw me."], answer: 0,
      why: { en: "ـم sits on ئەو, so I am the doer and he is the one seen. = Min ew dît.",
             ku: "ـم bi ئەو ve ye, ango kirde ez im û ew hatiye dîtin. Yanî: Min ew dît." } },
    { id: "pt_pi12", dir: "kmr>ckb", show: "ckb", text: "نانمان خوارد.",
      options: ["We ate bread.", "They ate bread."], answer: 0,
      why: { en: "ـمان = we; ـیان would be they. = Me nan xwar.",
             ku: "ـمان = me; ـیان = wan. Yanî: Me nan xwar." } },
    { id: "pt_pi13", dir: "kmr>ckb", show: "ckb", text: "نەیانخوارد.",
      options: ["They didn't eat it.", "We didn't eat it."], answer: 0,
      why: { en: "No object, so the clitic jumps onto نە-: نە + یان + خوارد. = Wan nexwar.",
             ku: "Bireser tune, lewma paşgir bi نە- ve dizeliqe: نە + یان + خوارد. Yanî: Wan nexwar." } },
    { id: "pt_pi14", dir: "kmr>ckb", show: "ckb", text: "هەڵت گرت.",
      options: ["You picked it up.", "I picked it up."], answer: 0,
      why: { en: "The clitic ـت sits between the preverb هەڵ and the verb: you did it. = Te hilgirt.",
             ku: "Paşgira ـت dikeve navbera pêşlêkera هەڵ û lêkerê: kirde tu yî. Yanî: Te hilgirt." } }
  ]
});

// ---------------------------------------------------------------------------
// 7. Want, can, must
// ---------------------------------------------------------------------------
window.__BRIDGE.FRAMES.push({
  id: "modal", order: 7, level: "A2", sieve: 5,
  title: "Want, can, must",
  pattern: { ckb: "دەمەوێت ب[slot]م", kmr: "Ez dixwazim bi[slot]im", en: "I want to [slot]" },
  card: {
    "ckb>kmr": {
      en: "Kurmanji ‘want’ is an ordinary verb with its own ending: Ez dixwazim biçim. There is no clitic inside it as in دەمەوێت. ‘Can’ works the same way (dikarim), but its negative is nikarim. ‘Must’ is divê and never changes: Divê ez biçim. The trap: dibe sounds like your دەبێت, yet Dibe ku means ‘maybe’.",
      ku: "لە کورمانجیدا «ویستن» کردارێکی ئاساییە و کۆتایی خۆی هەیە: Ez dixwazim biçim. ئەو ـمەی ناو دەمەوێت لێرە نییە. «توانین»یش وایە (dikarim)، بەڵام نەرێنییەکەی دەبێتە nikarim. «دەبێت» دەبێتە divê و هەرگیز ناگۆڕێت: Divê ez biçim. ئاگادار بە: dibe لە «دەبێت» دەچێت، بەڵام Dibe ku واتە «ڕەنگە»."
    },
    "kmr>ckb": {
      en: "The second verb works as in Kurmanji: bi- plus an ending (بچم = biçim). The new part is ‘want’: دەمەوێت hides the wanter inside as a clitic (de-m-ewêt = I want). Swap it: دەتەوێت, دەیەوێت, دەمانەوێت. ‘Can’ is regular: دەتوانم, ناتوانم. Careful: دەبێت means ‘must’ (divê), not ‘maybe’; maybe is ڕەنگە.",
      ku: "Lêkera duyem wek kurmancî ye: bi- û paşgir (بچم = biçim). Ya nû «xwestin» e: di دەمەوێت de yê ku dixwaze di nav lêkerê de ye (de-m-ewêt = ez dixwazim). Wisa jî: دەتەوێت = tu dixwazî, دەیەوێت = ew dixwaze. «Karîn» rêkûpêk e: دەتوانم، ناتوانم. Hişyar be: دەبێت yanî «divê», ne «dibe ku»; «belkî» bi soranî ڕەنگە ye."
    }
  },
  items: [
    { id: "md_01", en: "I want to go.", ckb: "دەمەوێت بچم.", kmr: "Ez dixwazim biçim.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "دەمەوێت", kmr: "dixwazim", k: "different", note: "Sorani: the ـم inside is the wanter" },
        { ckb: "بچم", kmr: "biçim", k: "same" } ] },
    { id: "md_02", en: "Do you want to eat?", ckb: "دەتەوێت بخۆیت؟", kmr: "Tu dixwazî bixwî?",
      align: [
        { ckb: "", kmr: "Tu", k: "only" },
        { ckb: "دەتەوێت", kmr: "dixwazî", k: "different", note: "ـت inside = you want" },
        { ckb: "بخۆیت", kmr: "bixwî", k: "sound", rule: "xo-xwe" } ] },
    { id: "md_03", en: "He wants to study.", ckb: "دەیەوێت بخوێنێت.", kmr: "Ew dixwaze bixwîne.",
      align: [
        { ckb: "", kmr: "Ew", k: "only" },
        { ckb: "دەیەوێت", kmr: "dixwaze", k: "different", note: "ـی inside = he/she wants" },
        { ckb: "بخوێنێت", kmr: "bixwîne", k: "cognate" } ] },
    { id: "md_04", en: "We want tea.", ckb: "چامان دەوێت.", kmr: "Em çay dixwazin.",
      align: [
        { ckb: "چا", kmr: "çay", k: "cognate" },
        { ckb: "ـمان", kmr: "Em", k: "grammar", note: "Sorani: the wanter clitic sits on the thing wanted" },
        { ckb: "دەوێت", kmr: "dixwazin", k: "different", note: "Kurmanji: ending -in shows ‘we’" } ] },
    { id: "md_05", en: "I don't want to go.", ckb: "نامەوێت بچم.", kmr: "Ez naxwazim biçim.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "نامەوێت", kmr: "naxwazim", k: "different", note: "na- in both" },
        { ckb: "بچم", kmr: "biçim", k: "same" } ] },
    { id: "md_06", en: "I can come.", ckb: "دەتوانم بێم.", kmr: "Ez dikarim bêm.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "دەتوانم", kmr: "dikarim", k: "different" },
        { ckb: "بێم", kmr: "bêm", k: "same", note: "Badini says werim" } ] },
    { id: "md_07", en: "I can't come today.", ckb: "ئەمڕۆ ناتوانم بێم.", kmr: "Ez îro nikarim bêm.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "ئەمڕۆ", kmr: "îro", k: "cognate" },
        { ckb: "ناتوانم", kmr: "nikarim", k: "different", note: "Kurmanji negative is ni-, not na-" },
        { ckb: "بێم", kmr: "bêm", k: "same" } ] },
    { id: "md_08", en: "Can you help me?", ckb: "دەتوانیت یارمەتیم بدەیت؟", kmr: "Tu dikarî alîkariya min bikî?",
      align: [
        { ckb: "", kmr: "Tu", k: "only" },
        { ckb: "دەتوانیت", kmr: "dikarî", k: "different" },
        { ckb: "یارمەتی", kmr: "alîkariya", k: "different" },
        { ckb: "ـم", kmr: "min", k: "grammar", note: "‘my’: clitic vs veqetandek + min" },
        { ckb: "بدەیت", kmr: "bikî", k: "different", note: "Sorani ‘give help’, Kurmanji ‘do help’" } ] },
    { id: "md_09", en: "I must go.", ckb: "دەبێت بچم.", kmr: "Divê ez biçim.",
      align: [
        { ckb: "دەبێت", kmr: "Divê", k: "different", note: "never dibe here: dibe ku means ‘maybe’" },
        { ckb: "", kmr: "ez", k: "only" },
        { ckb: "بچم", kmr: "biçim", k: "same" } ] },
    { id: "md_10", en: "You must eat.", ckb: "دەبێت بخۆیت.", kmr: "Divê tu bixwî.",
      align: [
        { ckb: "دەبێت", kmr: "Divê", k: "different", note: "divê never changes for person" },
        { ckb: "", kmr: "tu", k: "only" },
        { ckb: "بخۆیت", kmr: "bixwî", k: "sound", rule: "xo-xwe" } ] },
    { id: "md_11", en: "You must not go.", ckb: "نابێت بچیت.", kmr: "Nabe tu biçî.",
      align: [
        { ckb: "نابێت", kmr: "Nabe", k: "cognate", note: "nabe = not allowed; also Divê tu neçî" },
        { ckb: "", kmr: "tu", k: "only" },
        { ckb: "بچیت", kmr: "biçî", k: "same" } ] },
    { id: "md_12", en: "Maybe he'll come.", ckb: "ڕەنگە بێت.", kmr: "Dibe ku ew bê.",
      align: [
        { ckb: "ڕەنگە", kmr: "Dibe ku", k: "different", note: "dibe ku = maybe, not ‘must’" },
        { ckb: "", kmr: "ew", k: "only" },
        { ckb: "بێت", kmr: "bê", k: "cognate" } ] },
    { id: "md_13", en: "I need to learn Kurdish.", ckb: "پێویستە کوردی فێر ببم.", kmr: "Pêwîst e ez kurdî fêr bibim.",
      align: [
        { ckb: "پێویست", kmr: "Pêwîst", k: "same" },
        { ckb: "ـە", kmr: "e", k: "grammar", note: "copula written apart in Kurmanji" },
        { ckb: "", kmr: "ez", k: "only" },
        { ckb: "کوردی", kmr: "kurdî", k: "same" },
        { ckb: "فێر", kmr: "fêr", k: "same" },
        { ckb: "ببم", kmr: "bibim", k: "same" } ] }
  ],
  pi: [
    { id: "md_pi1", dir: "ckb>kmr", show: "kmr", text: "Divê tu biçî.",
      options: ["You must go.", "I must go."], answer: 0,
      why: { en: "Divê never changes; the person sits in the second verb: tu biçî. = دەبێت بچیت.",
             ku: "Divê ناگۆڕێت؛ کەسەکە لە کرداری دووەمدایە: tu biçî. واتە: دەبێت بچیت." } },
    { id: "md_pi2", dir: "ckb>kmr", show: "kmr", text: "Dibe ku ew bê.",
      options: ["Maybe he will come.", "He must come."], answer: 0,
      why: { en: "Dibe ku means ‘maybe’ (ڕەنگە), even though dibe sounds like your دەبێت. ‘Must’ is divê.",
             ku: "Dibe ku واتە «ڕەنگە»، هەرچەندە dibe لە «دەبێت»ی ئێمە دەچێت. «دەبێت» بە کورمانجی divê یە." } },
    { id: "md_pi3", dir: "ckb>kmr", show: "kmr", text: "Divê ew bê.",
      options: ["He must come.", "Maybe he will come."], answer: 0,
      why: { en: "Divê = must (دەبێت). ‘Maybe he’ll come’ would be Dibe ku ew bê.",
             ku: "Divê = دەبێت. «ڕەنگە بێت» دەبێتە Dibe ku ew bê." } },
    { id: "md_pi4", dir: "ckb>kmr", show: "kmr", text: "Ez dixwazim tu bêyî.",
      options: ["I want you to come.", "I want to come."], answer: 0,
      why: { en: "The second verb ends in -yî, so ‘you’ come. ‘I want to come’ is Ez dixwazim bêm. = دەمەوێت بێیت.",
             ku: "کرداری دووەم بە ـyî کۆتایی دێت، کەواتە «تۆ» دێیت. «دەمەوێت بێم» دەبێتە Ez dixwazim bêm. واتە: دەمەوێت بێیت." } },
    { id: "md_pi5", dir: "ckb>kmr", show: "kmr", text: "Ez nikarim bêm.",
      options: ["I can't come.", "I can come."], answer: 0,
      why: { en: "Ni- is the negative of dikarim: nikarim = ناتوانم. Not na-!",
             ku: "ni- نەرێنیی dikarim ە: nikarim = ناتوانم. نەک na-!" } },
    { id: "md_pi6", dir: "ckb>kmr", show: "kmr", text: "Tu dikarî bixwînî.",
      options: ["You can read.", "I can read."], answer: 0,
      why: { en: "Both verbs end in -î: tu. = دەتوانیت بخوێنیتەوە.",
             ku: "هەردوو کردار بە ـî کۆتایی دێن: tu. واتە: دەتوانیت بخوێنیتەوە." } },

    { id: "md_pi7", dir: "kmr>ckb", show: "ckb", text: "دەمەوێت بچم.",
      options: ["I want to go.", "You want to go."], answer: 0,
      why: { en: "The ـم inside دەمەوێت is the wanter: I. = Ez dixwazim biçim.",
             ku: "ـم di nav دەمەوێت de yê ku dixwaze ye: ez. Yanî: Ez dixwazim biçim." } },
    { id: "md_pi8", dir: "kmr>ckb", show: "ckb", text: "دەتەوێت بچیت؟",
      options: ["Do you want to go?", "Do I want to go?"], answer: 0,
      why: { en: "ـت inside دەتەوێت = you want; بچیت = you go. = Tu dixwazî biçî?",
             ku: "ـت di nav دەتەوێت de = tu dixwazî; بچیت = biçî. Yanî: Tu dixwazî biçî?" } },
    { id: "md_pi9", dir: "kmr>ckb", show: "ckb", text: "دەمەوێت بێیت.",
      options: ["I want you to come.", "You want me to come."], answer: 0,
      why: { en: "Wanter = ـم (I); comer = ـیت (you). = Ez dixwazim tu bêyî.",
             ku: "Yê ku dixwaze ـم e (ez); yê ku tê ـیت e (tu). Yanî: Ez dixwazim tu bêyî." } },
    { id: "md_pi10", dir: "kmr>ckb", show: "ckb", text: "دەتەوێت بێم.",
      options: ["You want me to come.", "I want you to come."], answer: 0,
      why: { en: "Wanter = ـت (you); comer = ـم (I). = Tu dixwazî ez bêm.",
             ku: "Yê ku dixwaze ـت e (tu); yê ku tê ـم e (ez). Yanî: Tu dixwazî ez bêm." } },
    { id: "md_pi11", dir: "kmr>ckb", show: "ckb", text: "دەبێت بچیت.",
      options: ["You must go.", "Maybe you'll go."], answer: 0,
      why: { en: "دەبێت = must (divê), not dibe ku. ‘Maybe’ in Sorani is ڕەنگە.",
             ku: "دەبێت = divê, ne «dibe ku». «Belkî» bi soranî ڕەنگە ye." } },
    { id: "md_pi12", dir: "kmr>ckb", show: "ckb", text: "پارەمان دەوێت.",
      options: ["We want money.", "They want money."], answer: 0,
      why: { en: "With a noun, the wanter clitic sits on the thing: پارە + مان = we. = Em pere dixwazin.",
             ku: "Bi navdêrekê re paşgir bi tiştê tê xwestin ve ye: پارە + مان = em. Yanî: Em pere dixwazin." } },
    { id: "md_pi13", dir: "kmr>ckb", show: "ckb", text: "نایەوێت بێت.",
      options: ["He doesn't want to come.", "I don't want to come."], answer: 0,
      why: { en: "نا + ی + ەوێت: ـی is he/she. = Ew naxwaze bê.",
             ku: "نا + ی + ەوێت: ـی = ew. Yanî: Ew naxwaze bê." } }
  ]
});

// ---------------------------------------------------------------------------
// 8. Nouns: gender, case, the/a, linkers
// ---------------------------------------------------------------------------
window.__BRIDGE.FRAMES.push({
  id: "nouns", order: 8, level: "A2", sieve: 5,
  title: "Nouns: the, a, and ‘of’",
  pattern: { ckb: "[slot]ی من", kmr: "[slot]a / [slot]ê min", en: "my [slot]" },
  card: {
    "ckb>kmr": {
      en: "Kurmanji has no -eke or -ekan: a bare noun already means ‘the’ (Pirtûk nû ye). New for you: every noun is masculine or feminine, and the veqetandek shows it: mala min (f), birayê min (m), hevalên min (pl). Nouns also take -ê or -î after prepositions and vê/vî: li malê, vî zilamî. Hewlêr and Mukriyan speech has it too: زەینەبێ.",
      ku: "لە کورمانجیدا ـەکە و ـەکان نییە: ناوی ڕووت خۆی ناسراوە (Pirtûk nû ye = کتێبەکە نوێیە). شتی نوێ ڕەگەزە: هەموو ناوێک نێر یان مێیە و veqetandek (دانەپاڵی کورمانجی) پیشانی دەدات: mala min (مێ)، birayê min (نێر)، hevalên min (کۆ). دوای ئامراز و vê/vî ناو ـێ یان ـی وەردەگرێت. لە قسەی هەولێر و موکریانیشدا هەیە: «زەینەبێ، فەرهادی»."
    },
    "kmr>ckb": {
      en: "Sorani has no gender or case: one danepał -î for everything (ماڵی من, برای من). Instead it marks ‘the’ and ‘a’ on the noun: -eke (the), -ekan (the, plural), -êk (a). ‘A good man’ is nearly your shape: پیاوێکی باش = zilamekî baş. With ‘the’, the adjective moves inside: کوڕە باشەکە.",
      ku: "Soranî zayend û tewang nas nake: ji bo hemûyan tenê danepał -î heye (ماڵی من = mala min, برای من = birayê min). Li şûna wê, diyar û nediyar li ser navdêrê ne: -eke (diyar), -ekan (diyar, pirjimar), -êk (nediyar). پیاوێکی باش hema wek zilamekî baş e. Bi -eke re rengdêr dikeve navberê: کوڕە باشەکە = kurê baş."
    }
  },
  items: [
    { id: "nn_01", en: "This is my house.", ckb: "ئەمە ماڵی منە.", kmr: "Ev mala min e.",
      align: [
        { ckb: "ئەمە", kmr: "Ev", k: "cognate" },
        { ckb: "ماڵ", kmr: "mal", k: "sound", rule: "ll-l" },
        { ckb: "ی", kmr: "a", k: "grammar", note: "danepał -î vs veqetandek -a: mal is feminine" },
        { ckb: "من", kmr: "min", k: "same" },
        { ckb: "ـە", kmr: "e", k: "grammar", note: "copula written apart" } ] },
    { id: "nn_02", en: "This is my brother.", ckb: "ئەمە برای منە.", kmr: "Ev birayê min e.",
      align: [
        { ckb: "ئەمە", kmr: "Ev", k: "cognate" },
        { ckb: "برا", kmr: "bira", k: "same" },
        { ckb: "ی", kmr: "yê", k: "grammar", note: "masculine: -ê (-yê after a vowel)" },
        { ckb: "من", kmr: "min", k: "same" },
        { ckb: "ـە", kmr: "e", k: "grammar" } ] },
    { id: "nn_03", en: "These are my friends.", ckb: "ئەمانە هاوڕێکانمن.", kmr: "Ev hevalên min in.",
      align: [
        { ckb: "ئەمانە", kmr: "Ev", k: "grammar", note: "ev is ‘this’ and ‘these’" },
        { ckb: "هاوڕێ", kmr: "heval", k: "different" },
        { ckb: "کان", kmr: "ên", k: "grammar", note: "plural: -ekan vs veqetandek -ên" },
        { ckb: "م", kmr: "min", k: "grammar", note: "‘my’: clitic vs min" },
        { ckb: "ن", kmr: "in", k: "grammar" } ] },
    { id: "nn_04", en: "This is my father's house.", ckb: "ئەمە ماڵی باوکمە.", kmr: "Ev mala bavê min e.",
      align: [
        { ckb: "ئەمە", kmr: "Ev", k: "cognate" },
        { ckb: "ماڵ", kmr: "mal", k: "sound", rule: "ll-l" },
        { ckb: "ی", kmr: "a", k: "grammar", note: "feminine -a" },
        { ckb: "باوک", kmr: "bav", k: "sound", rule: "w-v" },
        { ckb: "م", kmr: "ê min", k: "grammar", note: "masculine -ê, then min" },
        { ckb: "ـە", kmr: "e", k: "grammar" } ] },
    { id: "nn_05", en: "a tall man", ckb: "پیاوێکی درێژ", kmr: "zilamekî dirêj",
      align: [
        { ckb: "پیاو", kmr: "zilam", k: "different" },
        { ckb: "ێکی", kmr: "ekî", k: "cognate", note: "almost the same: -êkî / -ekî" },
        { ckb: "درێژ", kmr: "dirêj", k: "same" } ] },
    { id: "nn_06", en: "a good book", ckb: "کتێبێکی باش", kmr: "pirtûkeke baş",
      align: [
        { ckb: "کتێب", kmr: "pirtûk", k: "different", note: "kitêb is also used in Kurmanji" },
        { ckb: "ێکی", kmr: "eke", k: "grammar", note: "feminine -eke; masculine would be -ekî" },
        { ckb: "باش", kmr: "baş", k: "same" } ] },
    { id: "nn_07", en: "The book is new.", ckb: "کتێبەکە نوێیە.", kmr: "Pirtûk nû ye.",
      align: [
        { ckb: "کتێب", kmr: "Pirtûk", k: "different" },
        { ckb: "ەکە", kmr: "", k: "only", note: "no ‘the’ in Kurmanji" },
        { ckb: "نوێ", kmr: "nû", k: "cognate" },
        { ckb: "یە", kmr: "ye", k: "grammar" } ] },
    { id: "nn_08", en: "The apples are red.", ckb: "سێوەکان سوورن.", kmr: "Sêv sor in.",
      align: [
        { ckb: "سێو", kmr: "Sêv", k: "sound", rule: "w-v" },
        { ckb: "ەکان", kmr: "", k: "only", note: "plural shows only in the copula" },
        { ckb: "سوور", kmr: "sor", k: "cognate" },
        { ckb: "ن", kmr: "in", k: "grammar" } ] },
    { id: "nn_09", en: "I know this woman.", ckb: "ئەم ژنە دەناسم.", kmr: "Ez vê jinê dinasim.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "ئەم", kmr: "vê", k: "grammar", note: "‘this’ + feminine object: vê" },
        { ckb: "ژن", kmr: "jin", k: "same" },
        { ckb: "ـە", kmr: "ê", k: "grammar", note: "feminine oblique -ê" },
        { ckb: "دەناسم", kmr: "dinasim", k: "sound", rule: "de-di" } ] },
    { id: "nn_10", en: "I know this man.", ckb: "ئەم پیاوە دەناسم.", kmr: "Ez vî zilamî dinasim.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "ئەم", kmr: "vî", k: "grammar", note: "‘this’ + masculine object: vî" },
        { ckb: "پیاو", kmr: "zilam", k: "different" },
        { ckb: "ـە", kmr: "î", k: "grammar", note: "masculine oblique -î" },
        { ckb: "دەناسم", kmr: "dinasim", k: "sound", rule: "de-di" } ] },
    { id: "nn_11", en: "I went with Zeyneb.", ckb: "لەگەڵ زەینەب چووم.", kmr: "Ez bi Zeynebê re çûm.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "لەگەڵ", kmr: "bi … re", k: "different" },
        { ckb: "زەینەب", kmr: "Zeyneb", k: "same" },
        { ckb: "", kmr: "ê", k: "only", note: "Hewlêr and Mukriyan say زەینەبێ too" },
        { ckb: "چووم", kmr: "çûm", k: "same" } ] },
    { id: "nn_12", en: "the children's school", ckb: "قوتابخانەی منداڵەکان", kmr: "dibistana zarokan",
      align: [
        { ckb: "قوتابخانە", kmr: "dibistan", k: "different" },
        { ckb: "ی", kmr: "a", k: "grammar", note: "dibistan is feminine: -a" },
        { ckb: "منداڵ", kmr: "zarok", k: "different" },
        { ckb: "ەکان", kmr: "an", k: "grammar", note: "Kurmanji oblique plural -an, like your plural -an" } ] },
    { id: "nn_13", en: "the new books", ckb: "کتێبە نوێیەکان", kmr: "pirtûkên nû",
      align: [
        { ckb: "کتێب", kmr: "pirtûk", k: "different" },
        { ckb: "ە", kmr: "ên", k: "grammar", note: "plural linker: -e … -ekan vs -ên" },
        { ckb: "نوێ", kmr: "nû", k: "cognate" },
        { ckb: "یەکان", kmr: "", k: "only" } ] }
  ],
  pi: [
    { id: "nn_pi1", dir: "ckb>kmr", show: "kmr", text: "malên min",
      options: ["my houses", "my house"], answer: 0,
      why: { en: "-ên is the plural veqetandek. One house is mala min. = ماڵەکانم.",
             ku: "ـên veqetandekی کۆیە. یەک ماڵ دەبێتە mala min. واتە: ماڵەکانم." } },
    { id: "nn_pi2", dir: "ckb>kmr", show: "kmr", text: "birayê min",
      options: ["my brother", "my brothers"], answer: 0,
      why: { en: "-ê is the masculine singular linker; plural would be birayên min. = برای من.",
             ku: "ـê veqetandekی نێرینەی تاکە؛ کۆکەی birayên min ە. واتە: برای من." } },
    { id: "nn_pi3", dir: "ckb>kmr", show: "kmr", text: "Pirtûk nû ne.",
      options: ["The books are new.", "The book is new."], answer: 0,
      why: { en: "No -ekan in Kurmanji: the plural shows only in the copula. ne = they are, ye = it is.",
             ku: "کورمانجی ـەکانی نییە: کۆ تەنها لە کرداری «بوون»دا دیارە. ne = ـن، ye = ـە." } },
    { id: "nn_pi4", dir: "ckb>kmr", show: "kmr", text: "Pirtûk nû ye.",
      options: ["The book is new.", "The books are new."], answer: 0,
      why: { en: "ye = ‘is’, so one book. Nothing is added for ‘the’.",
             ku: "ye = «ـە»، کەواتە یەک کتێبە. بۆ «ـەکە» هیچ زیاد ناکرێت." } },
    { id: "nn_pi5", dir: "ckb>kmr", show: "kmr", text: "Ez vê jinê dinasim.",
      options: ["I know this woman.", "This woman knows me."], answer: 0,
      why: { en: "Ez is direct: the subject. Vê jinê is oblique: the one known. ‘She knows me’ is Ev jin min dinase.",
             ku: "Ez ڕاستەوخۆیە و بکەرە. vê jinê ناڕاستەوخۆیە: ئەوەی دەناسرێت. «ئەم ژنە من دەناسێت» دەبێتە Ev jin min dinase." } },
    { id: "nn_pi6", dir: "ckb>kmr", show: "kmr", text: "kurê baş",
      options: ["the good boy", "a good boy"], answer: 0,
      why: { en: "-ê alone = ‘the good boy’. ‘A good boy’ adds -ek: kurekî baş.",
             ku: "ـê بە تەنها = کوڕە باشەکە. «کوڕێکی باش» دەبێتە kurekî baş." } },

    { id: "nn_pi7", dir: "kmr>ckb", show: "ckb", text: "کتێبەکە",
      options: ["the book", "a book"], answer: 0,
      why: { en: "-eke = ‘the’. ‘A book’ is کتێبێک.",
             ku: "-eke yanî «diyar». «Pirtûkek» bi soranî کتێبێک e." } },
    { id: "nn_pi8", dir: "kmr>ckb", show: "ckb", text: "کتێبێک",
      options: ["a book", "the book"], answer: 0,
      why: { en: "-êk = ‘a’, like your -ek: pirtûkek.",
             ku: "-êk wek -ek a kurmancî ye: pirtûkek." } },
    { id: "nn_pi9", dir: "kmr>ckb", show: "ckb", text: "کتێبەکان",
      options: ["the books", "the book"], answer: 0,
      why: { en: "-ekan = ‘the’ + plural. Kurmanji shows this only on the verb or with -ên.",
             ku: "-ekan = diyar û pirjimar. Kurmancî vê tenê li ser lêkerê an bi -ên nîşan dide." } },
    { id: "nn_pi10", dir: "kmr>ckb", show: "ckb", text: "ماڵەکانم",
      options: ["my houses", "my house"], answer: 0,
      why: { en: "-ekan (plural) + ـم (my) = malên min. One house: ماڵەکەم.",
             ku: "-ekan (pirjimar) + ـم (min) = malên min. Yek mal: ماڵەکەم." } },
    { id: "nn_pi11", dir: "kmr>ckb", show: "ckb", text: "کوڕێکی باش",
      options: ["a good boy", "the good boy"], answer: 0,
      why: { en: "-êkî = your -ekî: kurekî baş. ‘The good boy’ is کوڕە باشەکە.",
             ku: "-êkî heman -ekî ya te ye: kurekî baş. «Kurê baş» bi soranî کوڕە باشەکە ye." } },
    { id: "nn_pi12", dir: "kmr>ckb", show: "ckb", text: "کوڕە باشەکە",
      options: ["the good boy", "a good boy"], answer: 0,
      why: { en: "With ‘the’, Sorani puts -e on the noun and -eke after the adjective. = kurê baş.",
             ku: "Ji bo «diyar», soranî -e dide navdêrê û -eke dide piştî rengdêrê. Yanî: kurê baş." } },
    { id: "nn_pi13", dir: "kmr>ckb", show: "ckb", text: "سێوەکان سوورن.",
      options: ["The apples are red.", "The apple is red."], answer: 0,
      why: { en: "-ekan and the -n of سوورن both say plural. = Sêv sor in.",
             ku: "-ekan û -n a سوورن herdu jî pirjimariyê nîşan didin. Yanî: Sêv sor in." } }
  ]
});

// ---------------------------------------------------------------------------
// 9. Prepositions: one لە, three Kurmanji words
// ---------------------------------------------------------------------------
window.__BRIDGE.FRAMES.push({
  id: "prep", order: 9, level: "A2", sieve: 5,
  title: "Prepositions: at, in, from, with",
  pattern: { ckb: "لە [slot]دا", kmr: "di [slot] de", en: "in the [slot]" },
  card: {
    "ckb>kmr": {
      en: "Your لە does three jobs; Kurmanji splits them. At a place: li (li malê). Inside: di … de, like لە … دا. From and than: ji (ji Duhokê, ji min mezintir). Also: لەگەڵ = bi … re, بۆ = ji bo, بە = bi, لەسەر = li ser. The noun after them takes the oblique: malê, Duhokê.",
      ku: "«لە»ی ئێمە سێ کار دەکات و کورمانجی بە سێ وشە دەیڵێت. لە شوێنێک: li (li malê). لە ناو: di … de، وەک «لە … دا». «لە … ەوە» و بەراورد: ji (ji Duhokê، ji min mezintir). هەروەها: لەگەڵ = bi … re، بۆ = ji bo، لەسەر = li ser. ناوی دوایان ـێ وەردەگرێت: malê."
    },
    "kmr>ckb": {
      en: "Where you choose li, di … de or ji, Sorani uses one word: لە. The ending tells them apart: لە … دا = di … de, لە … ەوە = ji. Also: لەگەڵ = bi … re, بۆ = ji bo, لەسەر = li ser. Nouns never take -ê after them. ‘To’ a place: دەچمە بازاڕ.",
      ku: "Li cihê li, di … de û ji, soranî tenê لە bi kar tîne. Dawî cudahiyê nîşan dide: لە … دا = di … de, لە … ەوە = ji. Herwiha: لەگەڵ = bi … re, بۆ = ji bo, لەسەر = li ser. Nav piştî wan -ê nastîne. «Diçim bazarê»: -e bi lêkerê ve ye: دەچمە بازاڕ."
    }
  },
  items: [
    { id: "pp_01", en: "I am at home.", ckb: "لە ماڵەوەم.", kmr: "Ez li malê me.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "لە", kmr: "li", k: "grammar", note: "at a place: li" },
        { ckb: "ماڵ", kmr: "mal", k: "sound", rule: "ll-l" },
        { ckb: "ەوە", kmr: "ê", k: "grammar", note: "Kurmanji: oblique -ê after li" },
        { ckb: "م", kmr: "me", k: "grammar", note: "‘am’ after a vowel: me" } ] },
    { id: "pp_02", en: "He is in Hewlêr.", ckb: "لە هەولێرە.", kmr: "Ew li Hewlêrê ye.",
      align: [
        { ckb: "", kmr: "Ew", k: "only" },
        { ckb: "لە", kmr: "li", k: "grammar" },
        { ckb: "هەولێر", kmr: "Hewlêr", k: "same" },
        { ckb: "", kmr: "ê", k: "only", note: "place names take -ê after li" },
        { ckb: "ـە", kmr: "ye", k: "grammar" } ] },
    { id: "pp_03", en: "The children are in the house.", ckb: "منداڵەکان لە ماڵەکەدان.", kmr: "Zarok di malê de ne.",
      align: [
        { ckb: "منداڵ", kmr: "Zarok", k: "different" },
        { ckb: "ەکان", kmr: "", k: "only" },
        { ckb: "لە", kmr: "di", k: "grammar", note: "inside: di … de = لە … دا" },
        { ckb: "ماڵ", kmr: "mal", k: "sound", rule: "ll-l" },
        { ckb: "ەکە", kmr: "ê", k: "grammar" },
        { ckb: "دا", kmr: "de", k: "cognate" },
        { ckb: "ن", kmr: "ne", k: "grammar" } ] },
    { id: "pp_04", en: "I came from Duhok.", ckb: "لە دهۆکەوە هاتم.", kmr: "Ez ji Duhokê hatim.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "لە", kmr: "ji", k: "grammar", note: "from: ji = لە … ەوە" },
        { ckb: "دهۆک", kmr: "Duhok", k: "same" },
        { ckb: "ەوە", kmr: "ê", k: "grammar" },
        { ckb: "هاتم", kmr: "hatim", k: "same" } ] },
    { id: "pp_05", en: "He is taller than me.", ckb: "لە من درێژترە.", kmr: "Ew ji min dirêjtir e.",
      align: [
        { ckb: "", kmr: "Ew", k: "only" },
        { ckb: "لە", kmr: "ji", k: "grammar", note: "than: ji" },
        { ckb: "من", kmr: "min", k: "same" },
        { ckb: "درێژتر", kmr: "dirêjtir", k: "same" },
        { ckb: "ـە", kmr: "e", k: "grammar" } ] },
    { id: "pp_06", en: "I went with my friend.", ckb: "لەگەڵ هاوڕێکەم چووم.", kmr: "Ez bi hevalê xwe re çûm.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "لەگەڵ", kmr: "bi … re", k: "different" },
        { ckb: "هاوڕێ", kmr: "heval", k: "different" },
        { ckb: "کەم", kmr: "ê xwe", k: "grammar", note: "own: xwe for every person" },
        { ckb: "چووم", kmr: "çûm", k: "same" } ] },
    { id: "pp_07", en: "This is for you.", ckb: "ئەمە بۆ تۆیە.", kmr: "Ev ji bo te ye.",
      align: [
        { ckb: "ئەمە", kmr: "Ev", k: "cognate" },
        { ckb: "بۆ", kmr: "ji bo", k: "cognate" },
        { ckb: "تۆ", kmr: "te", k: "grammar", note: "after a preposition: te, not tu" },
        { ckb: "یە", kmr: "ye", k: "grammar" } ] },
    { id: "pp_08", en: "Tell me.", ckb: "پێم بڵێ.", kmr: "Ji min re bêje.",
      align: [
        { ckb: "پێ", kmr: "Ji … re", k: "different" },
        { ckb: "م", kmr: "min", k: "grammar", note: "clitic vs oblique min" },
        { ckb: "بڵێ", kmr: "bêje", k: "different", note: "say: present stem łê- vs bêj-" } ] },
    { id: "pp_09", en: "I write with a pen.", ckb: "بە قەڵەم دەنووسم.", kmr: "Ez bi pênûsê dinivîsim.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "بە", kmr: "bi", k: "cognate" },
        { ckb: "قەڵەم", kmr: "pênûs", k: "different" },
        { ckb: "", kmr: "ê", k: "only" },
        { ckb: "دەنووسم", kmr: "dinivîsim", k: "cognate" } ] },
    { id: "pp_10", en: "The book is on the table.", ckb: "کتێبەکە لەسەر مێزەکەیە.", kmr: "Pirtûk li ser maseyê ye.",
      align: [
        { ckb: "کتێبەکە", kmr: "Pirtûk", k: "different" },
        { ckb: "لەسەر", kmr: "li ser", k: "cognate" },
        { ckb: "مێز", kmr: "mase", k: "different" },
        { ckb: "ەکە", kmr: "yê", k: "grammar" },
        { ckb: "یە", kmr: "ye", k: "grammar" } ] },
    { id: "pp_11", en: "The cat is under the table.", ckb: "پشیلەکە لەژێر مێزەکەیە.", kmr: "Pisîk li bin maseyê ye.",
      align: [
        { ckb: "پشیلەکە", kmr: "Pisîk", k: "cognate" },
        { ckb: "لەژێر", kmr: "li bin", k: "different" },
        { ckb: "مێز", kmr: "mase", k: "different" },
        { ckb: "ەکە", kmr: "yê", k: "grammar" },
        { ckb: "یە", kmr: "ye", k: "grammar" } ] },
    { id: "pp_12", en: "I'm going to the market.", ckb: "دەچمە بازاڕ.", kmr: "Ez diçim bazarê.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "دەچم", kmr: "diçim", k: "sound", rule: "de-di" },
        { ckb: "ە", kmr: "ê", k: "grammar", note: "goal: -e on the verb vs -ê on the place" },
        { ckb: "بازاڕ", kmr: "bazar", k: "sound", rule: "rr-r" } ] }
  ],
  pi: [
    { id: "pp_pi1", dir: "ckb>kmr", show: "kmr", text: "Ez ji Duhokê me.",
      options: ["I am from Duhok.", "I am in Duhok."], answer: 0,
      why: { en: "Ji = from. ‘In Duhok’ would be li Duhokê.",
             ku: "ji = «لە … ەوە». «لە دهۆکم» دەبێتە li Duhokê." } },
    { id: "pp_pi2", dir: "ckb>kmr", show: "kmr", text: "Ez li Duhokê me.",
      options: ["I am in Duhok.", "I am from Duhok."], answer: 0,
      why: { en: "Li = at/in a place. ‘From’ would be ji.",
             ku: "li = «لە»ی شوێن. «لە … ەوە» دەبێتە ji." } },
    { id: "pp_pi3", dir: "ckb>kmr", show: "kmr", text: "Ew ji min mezintir e.",
      options: ["He is older than me.", "I am older than him."], answer: 0,
      why: { en: "Ji also means ‘than’, like your لە: لە من گەورەترە.",
             ku: "ji واتای «لە»ی بەراوردیش دەدات: لە من گەورەترە." } },
    { id: "pp_pi4", dir: "ckb>kmr", show: "kmr", text: "Ez bi wî re diçim.",
      options: ["I'm going with him.", "I'm going for him."], answer: 0,
      why: { en: "Bi … re = with (لەگەڵ). ‘For him’ is ji bo wî.",
             ku: "bi … re = لەگەڵ. «بۆ ئەو» دەبێتە ji bo wî." } },
    { id: "pp_pi5", dir: "ckb>kmr", show: "kmr", text: "Pisîk li bin maseyê ye.",
      options: ["The cat is under the table.", "The cat is on the table."], answer: 0,
      why: { en: "Li bin = under (لەژێر). ‘On’ is li ser.",
             ku: "li bin = لەژێر؛ «لەسەر» دەبێتە li ser." } },

    { id: "pp_pi6", dir: "kmr>ckb", show: "ckb", text: "لە هەولێرەوە هاتم.",
      options: ["I came from Hewlêr.", "I came to Hewlêr."], answer: 0,
      why: { en: "لە … ەوە = ji: from Hewlêr. = Ez ji Hewlêrê hatim.",
             ku: "لە … ەوە = ji. Yanî: Ez ji Hewlêrê hatim." } },
    { id: "pp_pi7", dir: "kmr>ckb", show: "ckb", text: "هاتمە هەولێر.",
      options: ["I came to Hewlêr.", "I came from Hewlêr."], answer: 0,
      why: { en: "The -e on the verb (هاتمە) marks where you went. = Ez hatim Hewlêrê.",
             ku: "-e ya li ser lêkerê (هاتمە) cihê ku tu lê çûyî nîşan dide. Yanî: Ez hatim Hewlêrê." } },
    { id: "pp_pi8", dir: "kmr>ckb", show: "ckb", text: "کتێبەکە لەسەر مێزەکەیە.",
      options: ["The book is on the table.", "The book is under the table."], answer: 0,
      why: { en: "لەسەر = li ser (on). ‘Under’ is لەژێر.",
             ku: "لەسەر = li ser. «Li bin» bi soranî لەژێر e." } },
    { id: "pp_pi9", dir: "kmr>ckb", show: "ckb", text: "پشیلەکە لەژێر مێزەکەیە.",
      options: ["The cat is under the table.", "The cat is on the table."], answer: 0,
      why: { en: "لەژێر = li bin (under).",
             ku: "لەژێر = li bin." } },
    { id: "pp_pi10", dir: "kmr>ckb", show: "ckb", text: "لەگەڵ هاوڕێکەم چووم.",
      options: ["I went with my friend.", "I went for my friend."], answer: 0,
      why: { en: "لەگەڵ = bi … re. ‘For’ is بۆ.",
             ku: "لەگەڵ = bi … re. «Ji bo» bi soranî بۆ ye." } }
  ]
});

// ---------------------------------------------------------------------------
// 10. Commands, ‘let’s’, subjunctive and negation (shared bi- / me- / na- / ne-)
// ---------------------------------------------------------------------------
window.__BRIDGE.FRAMES.push({
  id: "imper", order: 10, level: "A1", sieve: 5,
  title: "Commands, ‘let’s’ and ‘not’",
  pattern: { ckb: "ب[slot]ە!", kmr: "Bi[slot]e!", en: "[slot]!" },
  card: {
    "ckb>kmr": {
      en: "Good news: this machinery is shared. bi- for commands and ‘that I…’ forms (Biçe! Ez dixwazim biçim), me- for ‘don’t’ (Meçe!), na- for present negatives, ne- for past ones. Were! is the same word, and your با is bila. The one trap: a few verbs take ni-: nizanim (I don’t know), nikarim (I can’t).",
      ku: "هەواڵی خۆش: ئەم بەشە هاوبەشە. ب- بۆ فەرمان و داخوازی (Biçe!، Ez dixwazim biçim)، مە- بۆ «مەکە» (Meçe!)، نا- بۆ نەرێنیی ئێستا و نە- بۆ ڕابردوو. «وەرە» هەمان Were یە و «با»ی ئێمە bila یە. تاکە ئاگاداری: چەند کردارێک ni- وەردەگرن: nizanim (نازانم)، nikarim (ناتوانم)."
    },
    "kmr>ckb": {
      en: "You already know this: Sorani uses the same bi- (بچۆ, بخۆ), me- (مەڕۆ), na- (ناچم) and ne- (نەچووم). Were! is وەرە and bila is با. Two small differences: Sorani has no ni- exceptions (نازانم, ناتوانم), and the -ewe ending stays at the end where you put ve- in front: بخۆرەوە = Vexwe!",
      ku: "Tu vê yekê jixwe dizanî: soranî jî bi- (بچۆ، بخۆ), me- (مەڕۆ), na- (ناچم) û ne- (نەچووم) bi kar tîne. Were! = وەرە, bila = با. Du cudahiyên biçûk: soranî ni- nas nake (نازانم = nizanim, ناتوانم = nikarim), û -ewe li dawiyê dimîne li cihê ve- ya pêşiyê: بخۆرەوە = Vexwe!"
    }
  },
  items: [
    { id: "im_01", en: "Eat!", ckb: "بخۆ!", kmr: "Bixwe!",
      align: [
        { ckb: "ب", kmr: "Bi", k: "same" },
        { ckb: "خۆ", kmr: "xwe", k: "sound", rule: "xo-xwe" } ] },
    { id: "im_02", en: "Come!", ckb: "وەرە!", kmr: "Were!",
      align: [ { ckb: "وەرە", kmr: "Were", k: "same" } ] },
    { id: "im_03", en: "Come, all of you!", ckb: "وەرن!", kmr: "Werin!",
      align: [
        { ckb: "وەر", kmr: "Wer", k: "same" },
        { ckb: "ن", kmr: "in", k: "grammar", note: "plural command: -n / -in" } ] },
    { id: "im_04", en: "Sit down!", ckb: "دانیشە!", kmr: "Rûne!",
      align: [
        { ckb: "دا", kmr: "Rû", k: "different", note: "different preverb, same root -niş- / -n-" },
        { ckb: "نیشە", kmr: "ne", k: "cognate" } ] },
    { id: "im_05", en: "Write!", ckb: "بنووسە!", kmr: "Binivîse!",
      align: [
        { ckb: "ب", kmr: "Bi", k: "same" },
        { ckb: "نووسە", kmr: "nivîse", k: "cognate", note: "Kurmanji keeps the -v-" } ] },
    { id: "im_06", en: "Drink!", ckb: "بخۆرەوە!", kmr: "Vexwe!",
      align: [
        { ckb: "ب", kmr: "", k: "only", note: "Kurmanji drops bi- after a preverb" },
        { ckb: "خۆر", kmr: "xwe", k: "sound", rule: "xo-xwe" },
        { ckb: "ەوە", kmr: "Ve", k: "sound", rule: "ewe-ve" } ] },
    { id: "im_07", en: "Don't go!", ckb: "مەڕۆ!", kmr: "Meçe!",
      align: [
        { ckb: "مە", kmr: "Me", k: "same", note: "don’t: me- in both" },
        { ckb: "ڕۆ", kmr: "çe", k: "different", note: "Sorani also says مەچۆ" } ] },
    { id: "im_08", en: "Don't eat!", ckb: "مەخۆ!", kmr: "Mexwe!",
      align: [
        { ckb: "مە", kmr: "Me", k: "same" },
        { ckb: "خۆ", kmr: "xwe", k: "sound", rule: "xo-xwe" } ] },
    { id: "im_09", en: "Let's go!", ckb: "با بڕۆین!", kmr: "Bila em biçin!",
      align: [
        { ckb: "با", kmr: "Bila", k: "cognate" },
        { ckb: "", kmr: "em", k: "only" },
        { ckb: "بڕۆین", kmr: "biçin", k: "different", note: "bi- + ending in both" } ] },
    { id: "im_10", en: "If it rains, I won't go.", ckb: "ئەگەر باران ببارێت، ناچم.", kmr: "Eger baran bibare, ez naçim.",
      align: [
        { ckb: "ئەگەر", kmr: "Eger", k: "same" },
        { ckb: "باران", kmr: "baran", k: "same" },
        { ckb: "ببارێت", kmr: "bibare", k: "cognate", note: "subjunctive bi- after ‘if’" },
        { ckb: "", kmr: "ez", k: "only" },
        { ckb: "ناچم", kmr: "naçim", k: "same" } ] },
    { id: "im_11", en: "I'm not going.", ckb: "ناچم.", kmr: "Ez naçim.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "ناچم", kmr: "naçim", k: "same", note: "identical" } ] },
    { id: "im_12", en: "I didn't go.", ckb: "نەچووم.", kmr: "Ez neçûm.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "نەچووم", kmr: "neçûm", k: "same", note: "identical" } ] },
    { id: "im_13", en: "I don't know.", ckb: "نازانم.", kmr: "Ez nizanim.",
      align: [
        { ckb: "", kmr: "Ez", k: "only" },
        { ckb: "نا", kmr: "ni", k: "grammar", note: "Kurmanji exception: ni-" },
        { ckb: "زانم", kmr: "zanim", k: "same" } ] }
  ],
  pi: [
    { id: "im_pi1", dir: "ckb>kmr", show: "kmr", text: "Meçe!",
      options: ["Don't go!", "Go!"], answer: 0,
      why: { en: "me- = don't, exactly like your مە-.",
             ku: "me- = «مە-»، وەک خۆمان." } },
    { id: "im_pi2", dir: "ckb>kmr", show: "kmr", text: "Biçin!",
      options: ["Go! (all of you)", "Go! (one person)"], answer: 0,
      why: { en: "-in = several people, like your بڕۆن.",
             ku: "ـin بۆ چەند کەسێکە، وەک «بڕۆن»." } },
    { id: "im_pi3", dir: "ckb>kmr", show: "kmr", text: "Ez naçim.",
      options: ["I'm not going.", "I didn't go."], answer: 0,
      why: { en: "na- + present = not going: ناچم.",
             ku: "na- بۆ ئێستایە: ناچم." } },
    { id: "im_pi4", dir: "ckb>kmr", show: "kmr", text: "Ez neçûm.",
      options: ["I didn't go.", "I'm not going."], answer: 0,
      why: { en: "ne- + past = didn't: نەچووم.",
             ku: "ne- بۆ ڕابردووە: نەچووم." } },
    { id: "im_pi5", dir: "ckb>kmr", show: "kmr", text: "Ez nizanim.",
      options: ["I don't know.", "I know."], answer: 0,
      why: { en: "ni- is a negative too: nizanim = نازانم.",
             ku: "ni- یش نەرێنییە: nizanim = نازانم." } },
    { id: "im_pi6", dir: "ckb>kmr", show: "kmr", text: "Bila ew bê.",
      options: ["Let him come.", "Let me come."], answer: 0,
      why: { en: "Bila = با; ew bê = he comes. ‘Let me come’ is Bila ez bêm.",
             ku: "bila = با؛ ew bê = ئەو بێت. «با بێم» دەبێتە Bila ez bêm." } },

    { id: "im_pi7", dir: "kmr>ckb", show: "ckb", text: "مەڕۆ!",
      options: ["Don't go!", "Go!"], answer: 0,
      why: { en: "مە- = me-: Meçe!",
             ku: "مە- = me-. Yanî: Meçe!" } },
    { id: "im_pi8", dir: "kmr>ckb", show: "ckb", text: "بڕۆن!",
      options: ["Go! (all of you)", "Go! (one person)"], answer: 0,
      why: { en: "-n = plural, like your -in: Biçin!",
             ku: "-n = pirjimar, wek -in: Biçin!" } },
    { id: "im_pi9", dir: "kmr>ckb", show: "ckb", text: "ناچم.",
      options: ["I'm not going.", "I didn't go."], answer: 0,
      why: { en: "نا- + present = Ez naçim.",
             ku: "نا- û dema niha = Ez naçim." } },
    { id: "im_pi10", dir: "kmr>ckb", show: "ckb", text: "نەچووم.",
      options: ["I didn't go.", "I'm not going."], answer: 0,
      why: { en: "نە- + past = Ez neçûm.",
             ku: "نە- û dema borî = Ez neçûm." } },
    { id: "im_pi11", dir: "kmr>ckb", show: "ckb", text: "نازانم.",
      options: ["I don't know.", "I know."], answer: 0,
      why: { en: "Sorani is regular even here: نا-. = Ez nizanim.",
             ku: "Soranî li vir jî rêkûpêk e: نا-. Yanî: Ez nizanim." } },
    { id: "im_pi12", dir: "kmr>ckb", show: "ckb", text: "با بڕۆین!",
      options: ["Let's go!", "Let them go!"], answer: 0,
      why: { en: "-în = we. ‘Let them go’ is با بڕۆن.",
             ku: "-în = em. «Bila ew biçin» bi soranî با بڕۆن e." } }
  ]
});
