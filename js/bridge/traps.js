// Bridge course: traps — false friends, near-misses and high-frequency
// different words between Sorani (standard Central Kurdish) and Kurmanji (Hawar).
// fix["ckb>kmr"] = what a Sorani speaker should say in Kurmanji;
// fix["kmr>ckb"] = what a Kurmanji speaker should say in Sorani.
window.__BRIDGE = window.__BRIDGE || {};

window.__BRIDGE.TRAPS = [
  // ------------------------------------------------------------------ false friends
  { id: "mang", kind: "false-friend",
    ckb: { w: "مانگ", en: "month; moon" }, kmr: { w: "mang", en: "cow" },
    fix: { "ckb>kmr": { w: "meh / heyv", en: "month / moon" },
           "kmr>ckb": { w: "مانگا", en: "cow" } },
    warn: {
      "ckb>kmr": { en: "In Kurmanji, mang is a cow. Say meh for a month and heyv for the moon.",
                   ku: "لە کورمانجیدا mang واتە مانگا. بۆ مانگی ساڵ بڵێ meh و بۆ مانگی ئاسمان heyv." },
      "kmr>ckb": { en: "Sorani مانگ is a month or the moon. Your cow is مانگا, with -a.",
                   ku: "Bi soranî مانگ meh an heyv e. Mang bi soranî مانگا ye." } } },

  { id: "shax", kind: "false-friend",
    ckb: { w: "شاخ", en: "mountain; also horn" }, kmr: { w: "şax", en: "branch; horn" },
    fix: { "ckb>kmr": { w: "çiya", en: "mountain" },
           "kmr>ckb": { w: "لق", en: "branch" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji şax is a branch (or a horn), never a mountain. A mountain is çiya, which you know as چیا.",
                   ku: "şax لە کورمانجیدا لقی دار یان شاخی ئاژەڵە، هەرگیز کێو نییە. کێو دەبێتە çiya، وەک «چیا»ی خۆمان." },
      "kmr>ckb": { en: "In Sorani, شاخ usually means mountain. A tree branch is لق.",
                   ku: "Bi soranî شاخ bi piranî çiya ye. Şaxa darê bi soranî لق e." } } },

  { id: "mil", kind: "false-friend",
    ckb: { w: "مل", en: "neck" }, kmr: { w: "mil", en: "shoulder" },
    fix: { "ckb>kmr": { w: "stû", en: "neck" },
           "kmr>ckb": { w: "شان", en: "shoulder" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji mil is the shoulder. The neck is stû.",
                   ku: "mil لە کورمانجیدا شانە. مل دەبێتە stû." },
      "kmr>ckb": { en: "Sorani مل is the neck. Your mil (shoulder) is شان.",
                   ku: "Bi soranî مل stû ye. Mil bi soranî شان e." } } },

  { id: "bal", kind: "false-friend",
    ckb: { w: "باڵ", en: "wing; arm" }, kmr: { w: "bal", en: "attention; side (li bal = beside)" },
    fix: { "ckb>kmr": { w: "bask / per", en: "wing" },
           "kmr>ckb": { w: "سەرنج", en: "attention" } },
    warn: {
      "ckb>kmr": { en: "Bala xwe bide! means ‘Pay attention!’; it has nothing to do with wings. A wing is bask or per.",
                   ku: "Bala xwe bide! واتە «سەرنج بدە!» و پەیوەندیی بە باڵەوە نییە. باڵی باڵندە دەبێتە bask یان per." },
      "kmr>ckb": { en: "Sorani باڵ is a wing or an arm. ‘Pay attention!’ is سەرنج بدە!",
                   ku: "Bi soranî باڵ bask e (an jî milê mirov). «Bala xwe bide!» bi soranî سەرنج بدە! ye." } } },

  { id: "dem", kind: "near-miss",
    ckb: { w: "دەم", en: "mouth; ‘time’ only in phrases like ئەو دەمە" }, kmr: { w: "dem", en: "time" },
    fix: { "ckb>kmr": { w: "dev", en: "mouth" },
           "kmr>ckb": { w: "کات", en: "time" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji dem is everyday ‘time’ (dema ku = when), the sense of your ئەو دەمە. The mouth is dev.",
                   ku: "dem لە کورمانجیدا «کات»ی ڕۆژانەیە (dema ku = کاتێک)، وەک «ئەو دەمە»ی خۆمان. دەم (دەمی مرۆڤ) دەبێتە dev." },
      "kmr>ckb": { en: "Sorani دەم is usually the mouth; it means ‘time’ only in set phrases like ئەو دەمە. Everyday time is کات.",
                   ku: "Bi soranî دەم bi piranî dev e; wateya «dem» tenê di hin gotinan de heye, wek ئەو دەمە. Dema rojane bi soranî کات e." } } },

  { id: "pir", kind: "false-friend",
    ckb: { w: "پڕ", en: "full" }, kmr: { w: "pir", en: "very, many" },
    fix: { "ckb>kmr": { w: "tijî", en: "full" },
           "kmr>ckb": { w: "زۆر", en: "very, many" } },
    warn: {
      "ckb>kmr": { en: "Pir xweş means ‘very nice’, not ‘full’. Full is tijî.",
                   ku: "pir xweş واتە «زۆر خۆش»، نەک پڕ. پڕ دەبێتە tijî." },
      "kmr>ckb": { en: "Sorani پڕ (with the strong ڕ) means full. ‘Very’ is زۆر.",
                   ku: "Bi soranî پڕ (bi ڕ ya xurt) tijî ye. Pir bi soranî زۆر e." } } },

  { id: "de", kind: "false-friend",
    ckb: { w: "دێ", en: "village" }, kmr: { w: "dê", en: "mother; also marks the future" },
    fix: { "ckb>kmr": { w: "gund", en: "village" },
           "kmr>ckb": { w: "دایک", en: "mother" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji dê is ‘mother’ (dêya min), and dê also marks the future: Ew dê bê = he will come. A village is gund, your گوند.",
                   ku: "dê لە کورمانجیدا دایکە (dêya min = دایکم)، هەروەها نیشانەی داهاتووە: Ew dê bê = ئەو دێت. دێ دەبێتە gund، وەک «گوند»." },
      "kmr>ckb": { en: "Sorani دێ is a village (and also ‘comes’: دێت). Mother is دایک.",
                   ku: "Bi soranî دێ gund e (û «tê» jî: دێت). Dê bi soranî دایک e." } } },

  { id: "xebat", kind: "false-friend",
    ckb: { w: "خەبات", en: "struggle (often political)" }, kmr: { w: "xebat", en: "work" },
    fix: { "ckb>kmr": { w: "têkoşîn", en: "struggle" },
           "kmr>ckb": { w: "کار", en: "work" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji xebat is plain everyday work; xebitîn = to work. For a political struggle say têkoşîn.",
                   ku: "xebat لە کورمانجیدا کاری ڕۆژانەیە؛ xebitîn = کار کردن. بۆ خەباتی سیاسی بڵێ têkoşîn." },
      "kmr>ckb": { en: "Sorani خەبات is struggle, usually political. Your xebat (work) is کار.",
                   ku: "Bi soranî خەبات têkoşîn e, bi piranî siyasî. Xebat bi soranî کار e." } } },

  { id: "heval", kind: "false-friend",
    ckb: { w: "هەواڵ", en: "news" }, kmr: { w: "heval", en: "friend" },
    fix: { "ckb>kmr": { w: "nûçe", en: "news" },
           "kmr>ckb": { w: "هاوڕێ", en: "friend" } },
    warn: {
      "ckb>kmr": { en: "Heval is a friend (hevalê min = my friend). News is nûçe.",
                   ku: "heval واتە هاوڕێ (hevalê min = هاوڕێکەم). هەواڵ دەبێتە nûçe." },
      "kmr>ckb": { en: "Sorani هەواڵ (hewał) means news, not friend. A friend is هاوڕێ.",
                   ku: "Bi soranî هەواڵ nûçe ye, ne heval. Heval bi soranî هاوڕێ ye." } } },

  { id: "zevi", kind: "false-friend",
    ckb: { w: "زەوی", en: "earth, ground, land" }, kmr: { w: "zevî", en: "(farm) field" },
    fix: { "ckb>kmr": { w: "erd", en: "earth, ground" },
           "kmr>ckb": { w: "کێڵگە", en: "field" } },
    warn: {
      "ckb>kmr": { en: "Zevî in Kurmanji is a farmer's field. The ground, or the Earth, is erd.",
                   ku: "zevî لە کورمانجیدا کێڵگەیە. زەوی دەبێتە erd." },
      "kmr>ckb": { en: "Sorani زەوی is the ground or the Earth. A farm field is کێڵگە.",
                   ku: "Bi soranî زەوی erd e (û gerstêrka Erdê jî). Zevî bi soranî کێڵگە ye." } } },

  { id: "kon", kind: "false-friend",
    ckb: { w: "کۆن", en: "old (of things)" }, kmr: { w: "kon", en: "tent" },
    fix: { "ckb>kmr": { w: "kevn", en: "old" },
           "kmr>ckb": { w: "چادر / ڕەشماڵ", en: "tent / black nomad tent" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji kon is a tent. Old (for things) is kevn: maleke kevn = an old house.",
                   ku: "kon لە کورمانجیدا چادرە. کۆن دەبێتە kevn: maleke kevn = ماڵێکی کۆن." },
      "kmr>ckb": { en: "Sorani کۆن means old: ماڵێکی کۆن = maleke kevn. A tent is چادر; the black nomad tent is ڕەشماڵ.",
                   ku: "Bi soranî کۆن kevn e: ماڵێکی کۆن = maleke kevn. Kon bi soranî چادر e; kona reş ڕەشماڵ e." } } },

  { id: "shil", kind: "false-friend",
    ckb: { w: "شل", en: "loose, slack" }, kmr: { w: "şil", en: "wet" },
    fix: { "ckb>kmr": { w: "sist", en: "loose, slack" },
           "kmr>ckb": { w: "تەڕ", en: "wet" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji şil means wet (cilên şil = wet clothes). Loose is sist.",
                   ku: "şil لە کورمانجیدا تەڕە (cilên şil = جلی تەڕ). شل دەبێتە sist." },
      "kmr>ckb": { en: "Sorani شل means loose or slack. Wet is تەڕ.",
                   ku: "Bi soranî شل sist e. Şil bi soranî تەڕ e." } } },

  // ------------------------------------------------------------------ near-misses
  { id: "zor", kind: "near-miss",
    ckb: { w: "زۆر", en: "very, a lot" }, kmr: { w: "zor", en: "hard, difficult; force" },
    fix: { "ckb>kmr": { w: "pir / gelek", en: "very / a lot" },
           "kmr>ckb": { w: "سەخت", en: "hard, difficult" } },
    warn: {
      "ckb>kmr": { en: "Zor e in Kurmanji usually means ‘it's hard’. For ‘very’ say pir or gelek. (In Badini you will also hear zor for ‘very’.)",
                   ku: "Zor e لە کورمانجیدا زۆر جار واتە «سەختە». بۆ «زۆر» بڵێ pir یان gelek. (لە بادینان zor بە واتای «زۆر»یش دەبیسیت.)" },
      "kmr>ckb": { en: "Sorani زۆر is everyday ‘very, a lot’: زۆر باشە = pir baş e. ‘Hard’ is سەخت.",
                   ku: "Bi soranî زۆر «pir, gelek» e: زۆر باشە = pir baş e. «Zor» (dijwar) bi soranî سەخت e." } } },

  { id: "kal", kind: "near-miss",
    ckb: { w: "کاڵ", en: "pale, light (colour); unripe" }, kmr: { w: "kal", en: "old man, grandfather; also unripe" },
    fix: { "ckb>kmr": { w: "vekirî", en: "light (of a colour)" },
           "kmr>ckb": { w: "پیرەمێرد / باپیر", en: "old man / grandfather" } },
    warn: {
      "ckb>kmr": { en: "Kal in Kurmanji is an old man or grandad (kalê min). For a light colour say vekirî: rengekî vekirî = a light colour.",
                   ku: "kal لە کورمانجیدا پیرەمێرد یان باپیرە (kalê min). بۆ ڕەنگی کاڵ بڵێ vekirî: rengekî vekirî = ڕەنگێکی کاڵ." },
      "kmr>ckb": { en: "Sorani کاڵ means pale or light: ڕەنگێکی کاڵ = a light colour. An old man is پیرەمێرد; grandad is باپیر.",
                   ku: "Ji bo rengan, کاڵ bi soranî «vekirî» ye: ڕەنگێکی کاڵ = rengekî vekirî. Kal bi soranî پیرەمێرد e; kalê min = باپیرم." } } },

  { id: "law", kind: "near-miss",
    ckb: { w: "لاو", en: "young man, youth" }, kmr: { w: "law", en: "son, boy" },
    fix: { "ckb>kmr": { w: "xort", en: "young man" },
           "kmr>ckb": { w: "کوڕ", en: "son, boy" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji law usually means son or boy (lawê min = my son). A young man is xort.",
                   ku: "law لە کورمانجیدا زۆرتر کوڕە (lawê min = کوڕەکەم). لاو دەبێتە xort." },
      "kmr>ckb": { en: "Sorani لاو is a young man in general, not ‘son’. My son = کوڕەکەم.",
                   ku: "Bi soranî لاو xort e, ne «law». Lawê min bi soranî کوڕەکەم e." } } },

  { id: "bajar", kind: "near-miss",
    ckb: { w: "بازاڕ", en: "market" }, kmr: { w: "bajar", en: "city, town" },
    fix: { "ckb>kmr": { w: "bazar / sûk", en: "market" },
           "kmr>ckb": { w: "شار", en: "city, town" } },
    warn: {
      "ckb>kmr": { en: "Bajar sounds like بازاڕ, but it means city. The market is bazar or sûk.",
                   ku: "bajar لە «بازاڕ» دەچێت، بەڵام واتە شار. بازاڕ دەبێتە bazar یان sûk." },
      "kmr>ckb": { en: "Sorani بازاڕ (bazař) is the market. Your bajar (city) is شار.",
                   ku: "Bi soranî بازاڕ bazar e. Bajar bi soranî شار e." } } },

  { id: "girtin", kind: "near-miss",
    ckb: { w: "گرتن", en: "to hold, catch, take" }, kmr: { w: "girtin", en: "to hold, catch; also to close" },
    fix: { "ckb>kmr": { w: "Derî bigire!", en: "Close the door!" },
           "kmr>ckb": { w: "دەرگاکە دابخە!", en: "Close the door!" } },
    warn: {
      "ckb>kmr": { en: "Derî bigire! means ‘Close the door!’, not ‘catch the door’. Kurmanji girtin also covers closing.",
                   ku: "Derî bigire! واتە «دەرگاکە دابخە!». لە کورمانجیدا girtin بۆ داخستنیش بەکار دێت." },
      "kmr>ckb": { en: "Sorani گرتن is hold, catch or take, never ‘close’. To close is داخستن: دەرگاکە دابخە!",
                   ku: "Bi soranî گرتن girtin e (bi dest, girtina kesekî), lê tu carî «girtina derî» nîne. Ji bo derî داخستن tê gotin: دەرگاکە دابخە!" } } },

  { id: "em", kind: "near-miss",
    ckb: { w: "ئەم", en: "this" }, kmr: { w: "em", en: "we" },
    fix: { "ckb>kmr": { w: "ev", en: "this" },
           "kmr>ckb": { w: "ئێمە", en: "we" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji em means ‘we’ (Em diçin = we're going). ‘This’ is ev: ev pirtûk.",
                   ku: "em لە کورمانجیدا «ئێمە»یە (Em diçin = دەچین). «ئەم» دەبێتە ev: ev pirtûk." },
      "kmr>ckb": { en: "Sorani ئەم means ‘this’ (ئەم کتێبە = ev pirtûk). ‘We’ is ئێمە.",
                   ku: "Bi soranî ئەم «ev» e (ئەم کتێبە = ev pirtûk). Em bi soranî ئێمە ye." } } },

  { id: "min", kind: "near-miss",
    ckb: { w: "من", en: "I, me (every use)" }, kmr: { w: "min", en: "me, my; ‘I’ only as a past doer" },
    fix: { "ckb>kmr": { w: "ez", en: "I (present, and past without an object)" },
           "kmr>ckb": { w: "من", en: "I, me" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji min is never the present subject: Ez diçim, not Min diçim. Use min for ‘me/my’ and for ‘I’ in the past with an object: Min nan xwar.",
                   ku: "min لە کورمانجیدا هەرگیز بکەری ئێستا نییە: Ez diçim، نەک Min diçim. min بۆ بەرکار و خاوەنداری و بکەری ڕابردووی کرداری تێپەڕە: Min nan xwar." },
      "kmr>ckb": { en: "Sorani من is ‘I’ and ‘me’ everywhere: من دەچم = ez diçim. Sorani has no ez.",
                   ku: "Bi soranî من hem «ez» e hem «min»: من دەچم = ez diçim. Di soranî de «ez» tune." } } },

  { id: "dibe", kind: "near-miss",
    ckb: { w: "دەبێت", en: "must" }, kmr: { w: "dibe", en: "becomes; dibe ku = maybe" },
    fix: { "ckb>kmr": { w: "divê", en: "must" },
           "kmr>ckb": { w: "ڕەنگە", en: "maybe" } },
    warn: {
      "ckb>kmr": { en: "Dibe ku ew bê = maybe he'll come. ‘Must’ is divê: Divê ew bê.",
                   ku: "Dibe ku ew bê = ڕەنگە بێت. «دەبێت» دەبێتە divê: Divê ew bê." },
      "kmr>ckb": { en: "Sorani دەبێت means ‘must’ (divê). ‘Maybe’ is ڕەنگە.",
                   ku: "Bi soranî دەبێت «divê» ye. «Dibe ku» bi soranî ڕەنگە ye." } } },

  { id: "le", kind: "near-miss",
    ckb: { w: "لێ", en: "from it, at it (لێی، لێم)" }, kmr: { w: "lê", en: "but; also ‘at/onto it’" },
    fix: { "ckb>kmr": { w: "jê", en: "from it, from him" },
           "kmr>ckb": { w: "بەڵام", en: "but" } },
    warn: {
      "ckb>kmr": { en: "At the start of a clause, Kurmanji lê means ‘but’: Ez hatim, lê ew ne li malê bû. ‘From him’ is jê: jê pirsî = لێی پرسی.",
                   ku: "lê لە سەرەتای ڕستەدا واتە «بەڵام»: Ez hatim, lê ew ne li malê bû. «لێی» دەبێتە jê: jê pirsî = لێی پرسی." },
      "kmr>ckb": { en: "Sorani لێ never means ‘but’; it is your jê: لێی پرسی = jê pirsî. ‘But’ is بەڵام.",
                   ku: "Bi soranî لێ tu carî wateya «lê» (but) nade; ew «jê» ye: لێی پرسی = jê pirsî. «Lê» bi soranî بەڵام e." } } },

  { id: "jor", kind: "near-miss",
    ckb: { w: "ژوور", en: "room; inside" }, kmr: { w: "jor", en: "up, above" },
    fix: { "ckb>kmr": { w: "ode / hundir", en: "room / inside" },
           "kmr>ckb": { w: "سەرەوە", en: "up, upstairs" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji jor means up (li jor = upstairs). A room is ode; inside is hundir.",
                   ku: "jor لە کورمانجیدا «سەرەوە»یە (li jor). ژوور دەبێتە ode؛ «ژوورەوە» دەبێتە hundir." },
      "kmr>ckb": { en: "Sorani ژوور (jûr) is a room, and ژوورەوە is inside. Up is سەرەوە.",
                   ku: "Bi soranî ژوور ode ye, ژوورەوە jî «hundir» e. Jor bi soranî سەرەوە ye." } } },

  { id: "ciwan", kind: "near-miss",
    ckb: { w: "جوان", en: "beautiful" }, kmr: { w: "ciwan", en: "beautiful; also young" },
    fix: { "ckb>kmr": { w: "bedew / spehî", en: "beautiful" },
           "kmr>ckb": { w: "گەنج", en: "young" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji ciwan is beautiful, but also young: ciwan = young people when used as a noun (ciwanên me). For a clear ‘beautiful’, bedew or spehî also work.",
                   ku: "ciwan لە کورمانجیدا «جوان»ە، بەڵام واتای «گەنج»یشی هەیە (ciwanên me = گەنجەکانمان). بۆ «جوان»ی ڕوون bedew و spehî ش هەن." },
      "kmr>ckb": { en: "Sorani جوان means beautiful, not young. Young is گەنج: گەنجێکی جوان = a handsome young man.",
                   ku: "Bi soranî جوان «bedew» e, ne «xort». «Ciwan» (young) bi soranî گەنج e: گەنجێکی جوان = xortekî bedew." } } },

  { id: "sefer", kind: "near-miss",
    ckb: { w: "سەفەر", en: "trip, journey" }, kmr: { w: "sefer", en: "trip; also ‘time, occasion’" },
    fix: { "ckb>kmr": { w: "rêwîtî / sefer", en: "trip" },
           "kmr>ckb": { w: "جار", en: "time, occasion" } },
    warn: {
      "ckb>kmr": { en: "Vê seferê means ‘this time’, not ‘this trip’. For a trip, sefer or rêwîtî both work.",
                   ku: "vê seferê واتە «ئەم جارە»، نەک «ئەم سەفەرە». بۆ گەشتیش sefer و rêwîtî دەگوترێن." },
      "kmr>ckb": { en: "Sorani سەفەر is only a trip. ‘This time’ is ئەم جارە.",
                   ku: "Bi soranî سەفەر tenê rêwîtî ye. «Vê seferê» bi soranî ئەم جارە ye." } } },

  { id: "tu", kind: "near-miss",
    ckb: { w: "هیچ", en: "no, not any" }, kmr: { w: "tu", en: "you; before a noun: no, any (tu kes = nobody)" },
    fix: { "ckb>kmr": { w: "tu kes / tu tişt", en: "nobody / nothing" },
           "kmr>ckb": { w: "هیچ کەس / هیچ شتێک", en: "nobody / nothing" } },
    warn: {
      "ckb>kmr": { en: "Tu kes nehat = nobody came. Before a noun, tu is not ‘you’ but ‘no, any’.",
                   ku: "Tu kes nehat = هیچ کەس نەهات. tu لە پێش ناودا «تۆ» نییە، «هیچ»ە." },
      "kmr>ckb": { en: "Sorani تۆ is only ‘you’. ‘No, any’ is هیچ: هیچ کەس نەهات = tu kes nehat.",
                   ku: "Bi soranî تۆ tenê «tu» (you) ye. «Tu kes» bi soranî هیچ کەس e: هیچ کەس نەهات." } } },

  { id: "mer", kind: "near-miss",
    ckb: { w: "مێرد", en: "husband" }, kmr: { w: "mêr", en: "man; husband" },
    fix: { "ckb>kmr": { w: "mêr / zilam", en: "husband; man" },
           "kmr>ckb": { w: "پیاو", en: "man" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji mêr is a husband but also any man (mêrekî baş = a good man). No -d: mêr, not mêrd.",
                   ku: "mêr لە کورمانجیدا مێردە، بەڵام هەر پیاوێکیشە (mêrekî baş = پیاوێکی باش). ـد نییە: mêr." },
      "kmr>ckb": { en: "Sorani مێرد is only ‘husband’. A man in general is پیاو.",
                   ku: "Bi soranî مێرد tenê «mêrê jinê» ye. Mêr (zilam) bi soranî پیاو e." } } },

  { id: "xwestin", kind: "near-miss",
    ckb: { w: "خواستن", en: "to ask for, request" }, kmr: { w: "xwestin", en: "to want; also to ask for" },
    fix: { "ckb>kmr": { w: "xwestin (dixwazim)", en: "to want" },
           "kmr>ckb": { w: "ویستن (دەمەوێت)", en: "to want" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji xwestin is the everyday ‘want’: Ez çay dixwazim = چام دەوێت. It can also mean ‘ask for’, like your خواستن.",
                   ku: "xwestin لە کورمانجیدا «ویستن»ی ڕۆژانەیە: Ez çay dixwazim = چام دەوێت. واتای «خواستن»یشی هەیە." },
      "kmr>ckb": { en: "Sorani خواستن means to ask for or request, not plain ‘want’. For want, use دەمەوێت.",
                   ku: "Bi soranî خواستن «daxwaz kirin» e, ne «xwestin» a rojane. Ji bo «dixwazim» bêje دەمەوێت." } } },

  // ------------------------------------------------------------------ different words (high frequency)
  { id: "ker", kind: "different",
    ckb: { w: "چەقۆ", en: "knife" }, kmr: { w: "kêr", en: "knife" },
    fix: { "ckb>kmr": { w: "kêr", en: "knife" },
           "kmr>ckb": { w: "چەقۆ", en: "knife" } },
    warn: {
      "ckb>kmr": { en: "A knife in Kurmanji is kêr: kêr û çetel = knife and fork.",
                   ku: "چەقۆ بە کورمانجی kêr ە: kêr û çetel = چەقۆ و چەتاڵ." },
      "kmr>ckb": { en: "A knife in Sorani is چەقۆ: چەقۆ و چەتاڵ = kêr û çetel.",
                   ku: "Bi soranî ji kêrê re چەقۆ tê gotin: چەقۆ و چەتاڵ = kêr û çetel." } } },

  { id: "niha", kind: "different",
    ckb: { w: "ئێستا", en: "now" }, kmr: { w: "niha", en: "now" },
    fix: { "ckb>kmr": { w: "niha", en: "now" },
           "kmr>ckb": { w: "ئێستا", en: "now" } },
    warn: {
      "ckb>kmr": { en: "‘Now’ is niha: Ez niha têm = ئێستا دێم.",
                   ku: "«ئێستا» دەبێتە niha: Ez niha têm = ئێستا دێم." },
      "kmr>ckb": { en: "‘Now’ is ئێستا: ئێستا دێم = Ez niha têm.",
                   ku: "«Niha» bi soranî ئێستا ye: ئێستا دێم = Ez niha têm." } } },

  { id: "cawa", kind: "different",
    ckb: { w: "چۆن", en: "how" }, kmr: { w: "çawa", en: "how" },
    fix: { "ckb>kmr": { w: "çawa", en: "how" },
           "kmr>ckb": { w: "چۆن", en: "how" } },
    warn: {
      "ckb>kmr": { en: "‘How’ is çawa: Tu çawa yî? = چۆنی؟",
                   ku: "«چۆن» دەبێتە çawa: Tu çawa yî? = چۆنی؟" },
      "kmr>ckb": { en: "‘How’ is چۆن: چۆنی؟ = Tu çawa yî?",
                   ku: "«Çawa» bi soranî چۆن e: چۆنی؟ = Tu çawa yî?" } } },

  { id: "cima", kind: "different",
    ckb: { w: "بۆچی", en: "why" }, kmr: { w: "çima", en: "why" },
    fix: { "ckb>kmr": { w: "çima", en: "why" },
           "kmr>ckb": { w: "بۆچی", en: "why" } },
    warn: {
      "ckb>kmr": { en: "‘Why’ is çima. The longer ji bo çi has the same shape as your بۆچی.",
                   ku: "«بۆچی» دەبێتە çima. ji bo çi هەمان پێکهاتەی «بۆچی»ی هەیە." },
      "kmr>ckb": { en: "‘Why’ is بۆچی, built like your ji bo çi: بۆ + چی.",
                   ku: "«Çima» bi soranî بۆچی ye, wek «ji bo çi»: بۆ + چی." } } },

  { id: "kengi", kind: "different",
    ckb: { w: "کەی", en: "when? (question)" }, kmr: { w: "kengî", en: "when? (question)" },
    fix: { "ckb>kmr": { w: "kengî", en: "when?" },
           "kmr>ckb": { w: "کەی", en: "when?" } },
    warn: {
      "ckb>kmr": { en: "‘When?’ is kengî: Tu kengî têyî? = کەی دێیت؟",
                   ku: "«کەی» دەبێتە kengî: Tu kengî têyî? = کەی دێیت؟" },
      "kmr>ckb": { en: "‘When?’ is کەی: کەی دێیت؟ = Tu kengî têyî?",
                   ku: "«Kengî» bi soranî کەی ye: کەی دێیت؟ = Tu kengî têyî?" } } },

  { id: "ji", kind: "different",
    ckb: { w: "ـیش", en: "also, too" }, kmr: { w: "jî", en: "also, too" },
    fix: { "ckb>kmr": { w: "jî", en: "also" },
           "kmr>ckb": { w: "ـیش", en: "also" } },
    warn: {
      "ckb>kmr": { en: "‘Too’ is a separate word after the noun: ez jî = منیش.",
                   ku: "لە کورمانجیدا jî وشەیەکی جیایە و دوای ناو دێت: ez jî = منیش." },
      "kmr>ckb": { en: "‘Too’ is a suffix stuck to the word: منیش = ez jî.",
                   ku: "«Jî» bi soranî paşgireke ku bi peyvê ve ye: منیش = ez jî." } } },

  { id: "zarok", kind: "different",
    ckb: { w: "منداڵ", en: "child" }, kmr: { w: "zarok", en: "child" },
    fix: { "ckb>kmr": { w: "zarok", en: "child" },
           "kmr>ckb": { w: "منداڵ", en: "child" } },
    warn: {
      "ckb>kmr": { en: "A child is zarok; children (oblique) zarokan.",
                   ku: "منداڵ دەبێتە zarok؛ «منداڵەکان» دوای ئامراز zarokan." },
      "kmr>ckb": { en: "A child is منداڵ; the children = منداڵەکان.",
                   ku: "Zarok bi soranî منداڵ e; zarok (pirjimar) = منداڵەکان." } } },

  { id: "zilam", kind: "different",
    ckb: { w: "پیاو", en: "man" }, kmr: { w: "zilam", en: "man" },
    fix: { "ckb>kmr": { w: "zilam / mêr", en: "man" },
           "kmr>ckb": { w: "پیاو", en: "man" } },
    warn: {
      "ckb>kmr": { en: "A man is zilam or mêr: zilamekî baş = پیاوێکی باش.",
                   ku: "پیاو دەبێتە zilam یان mêr: zilamekî baş = پیاوێکی باش." },
      "kmr>ckb": { en: "A man is پیاو: پیاوێکی باش = zilamekî baş.",
                   ku: "Zilam bi soranî پیاو e: پیاوێکی باش = zilamekî baş." } } },

  { id: "mase", kind: "different",
    ckb: { w: "مێز", en: "table" }, kmr: { w: "mase", en: "table" },
    fix: { "ckb>kmr": { w: "mase", en: "table" },
           "kmr>ckb": { w: "مێز", en: "table" } },
    warn: {
      "ckb>kmr": { en: "A table is mase (feminine): li ser maseyê = on the table.",
                   ku: "مێز دەبێتە mase (مێیە): li ser maseyê = لەسەر مێزەکە." },
      "kmr>ckb": { en: "A table is مێز: لەسەر مێزەکە = li ser maseyê.",
                   ku: "Mase bi soranî مێز e: لەسەر مێزەکە = li ser maseyê." } } },

  { id: "dibistan", kind: "different",
    ckb: { w: "قوتابخانە", en: "school" }, kmr: { w: "dibistan", en: "school" },
    fix: { "ckb>kmr": { w: "dibistan", en: "school" },
           "kmr>ckb": { w: "قوتابخانە", en: "school" } },
    warn: {
      "ckb>kmr": { en: "A school is dibistan; a pupil is xwendekar (your قوتابی).",
                   ku: "قوتابخانە دەبێتە dibistan؛ قوتابی دەبێتە xwendekar." },
      "kmr>ckb": { en: "A school is قوتابخانە; a pupil is قوتابی.",
                   ku: "Dibistan bi soranî قوتابخانە ye; xwendekarê dibistanê قوتابی ye." } } },

  { id: "malbat", kind: "different",
    ckb: { w: "خێزان", en: "family" }, kmr: { w: "malbat", en: "family" },
    fix: { "ckb>kmr": { w: "malbat", en: "family" },
           "kmr>ckb": { w: "خێزان", en: "family" } },
    warn: {
      "ckb>kmr": { en: "Family is malbat, built on mal (home): malbata min = my family.",
                   ku: "خێزان دەبێتە malbat، کە لە mal (ماڵ) دروست بووە: malbata min = خێزانەکەم." },
      "kmr>ckb": { en: "Family is خێزان. In everyday speech خێزانەکەم can also mean ‘my wife’.",
                   ku: "Malbat bi soranî خێزان e. Di axaftina rojane de خێزانەکەم dikare «jina min» jî be." } } },

  { id: "belki", kind: "different",
    ckb: { w: "ڕەنگە", en: "maybe" }, kmr: { w: "belkî", en: "maybe" },
    fix: { "ckb>kmr": { w: "belkî / dibe ku", en: "maybe" },
           "kmr>ckb": { w: "ڕەنگە", en: "maybe" } },
    warn: {
      "ckb>kmr": { en: "‘Maybe’ is belkî or dibe ku. Don't use reng for it: in Kurmanji that is only ‘colour’.",
                   ku: "«ڕەنگە» دەبێتە belkî یان dibe ku. reng لە کورمانجیدا تەنها «ڕەنگ»ی شتە." },
      "kmr>ckb": { en: "‘Maybe’ is ڕەنگە. Not دەبێت, which means ‘must’.",
                   ku: "«Belkî» bi soranî ڕەنگە ye. Ne دەبێت, ku wateya wê «divê» ye." } } },

  { id: "stran", kind: "different",
    ckb: { w: "گۆرانی", en: "song" }, kmr: { w: "stran", en: "song" },
    fix: { "ckb>kmr": { w: "stran", en: "song" },
           "kmr>ckb": { w: "گۆرانی", en: "song" } },
    warn: {
      "ckb>kmr": { en: "A song is stran; to sing is stran gotin. Your گۆرانی is one of the words Sorani took from Gorani when Gorani was the prestige language of poetry.",
                   ku: "گۆرانی دەبێتە stran؛ گۆرانی گوتن = stran gotin. «گۆرانی» یەکێکە لەو وشانەی سۆرانی لە زمانی گۆرانییەوە وەریگرتووە، لەو سەردەمەی گۆرانی زمانی شیعری ناودار بوو." },
      "kmr>ckb": { en: "A song is گۆرانی; to sing is گۆرانی گوتن. The word came into Sorani from Gorani when Gorani was the prestige language of poetry.",
                   ku: "Stran bi soranî گۆرانی ye; stran gotin = گۆرانی گوتن. Ev peyv ji zimanê goranî ketiye soranî, dema ku goranî zimanê helbesta bi rûmet bû." } } },

  { id: "gotin", kind: "different",
    ckb: { w: "دەڵێم", en: "I say" }, kmr: { w: "dibêjim", en: "I say" },
    fix: { "ckb>kmr": { w: "dibêjim", en: "I say" },
           "kmr>ckb": { w: "دەڵێم", en: "I say" } },
    warn: {
      "ckb>kmr": { en: "The past is the same (min got = گوتم), but the present stem differs: dibêjim, bêje!",
                   ku: "ڕابردووی وەک یەکە (min got = گوتم)، بەڵام ڕەگی ئێستا جیاوازە: dibêjim، bêje!" },
      "kmr>ckb": { en: "The past is the same (گوتم = min got), but the present stem is ڵێ: دەڵێم, بڵێ!",
                   ku: "Dema borî wek hev e (گوتم = min got), lê rehê dema niha ڵێ ye: دەڵێم، بڵێ!" } } },

  { id: "vir", kind: "different",
    ckb: { w: "ئێرە / ئەوێ", en: "here / there" }, kmr: { w: "vir / wir", en: "here / there" },
    fix: { "ckb>kmr": { w: "li vir / li wir", en: "here / there" },
           "kmr>ckb": { w: "ئێرە / ئەوێ", en: "here / there" } },
    warn: {
      "ckb>kmr": { en: "Here is li vir, there is li wir: Ez li vir im = من لێرەم.",
                   ku: "«لێرە» دەبێتە li vir و «لەوێ» دەبێتە li wir: Ez li vir im = من لێرەم." },
      "kmr>ckb": { en: "Here is ئێرە (لێرە = li vir), there is ئەوێ (لەوێ = li wir).",
                   ku: "Vir bi soranî ئێرە ye (لێرە = li vir), wir ئەوێ ye (لەوێ = li wir)." } } },

  { id: "shandin", kind: "different",
    ckb: { w: "ناردن", en: "to send" }, kmr: { w: "şandin", en: "to send" },
    fix: { "ckb>kmr": { w: "şandin (dişînim)", en: "to send" },
           "kmr>ckb": { w: "ناردن (دەنێرم)", en: "to send" } },
    warn: {
      "ckb>kmr": { en: "To send is şandin; present dişînim: Ez name dişînim = نامە دەنێرم.",
                   ku: "ناردن دەبێتە şandin؛ ئێستاکەی dişînim: Ez name dişînim = نامە دەنێرم." },
      "kmr>ckb": { en: "To send is ناردن; present دەنێرم: نامە دەنێرم = ez name dişînim.",
                   ku: "Şandin bi soranî ناردن e; dema niha دەنێرم: نامە دەنێرم = ez name dişînim." } } },

  { id: "por", kind: "different",
    ckb: { w: "قژ", en: "hair (of the head)" }, kmr: { w: "por", en: "hair (of the head)" },
    fix: { "ckb>kmr": { w: "por", en: "hair" },
           "kmr>ckb": { w: "قژ", en: "hair" } },
    warn: {
      "ckb>kmr": { en: "Head hair is por: porê reş = black hair.",
                   ku: "قژ دەبێتە por: porê reş = قژی ڕەش." },
      "kmr>ckb": { en: "Head hair is قژ: قژی ڕەش = porê reş.",
                   ku: "Por bi soranî قژ e: قژی ڕەش = porê reş." } } },

  { id: "pismam", kind: "different",
    ckb: { w: "ئامۆزا", en: "cousin (father's brother's child)" }, kmr: { w: "pismam", en: "cousin (father's brother's son)" },
    fix: { "ckb>kmr": { w: "pismam / dotmam", en: "male / female paternal cousin" },
           "kmr>ckb": { w: "ئامۆزا", en: "paternal cousin" } },
    warn: {
      "ckb>kmr": { en: "Kurmanji splits by sex: pismam (son of your father's brother), dotmam (daughter).",
                   ku: "کورمانجی بە ڕەگەز جیایان دەکاتەوە: pismam (کوڕی مام)، dotmam (کچی مام)." },
      "kmr>ckb": { en: "Sorani ئامۆزا covers both pismam and dotmam.",
                   ku: "Soranî ji bo pismam û dotmam herduyan ئامۆزا dibêje." } } },

  { id: "westiyayi", kind: "different",
    ckb: { w: "ماندوو", en: "tired" }, kmr: { w: "westiyayî", en: "tired" },
    fix: { "ckb>kmr": { w: "westiyayî", en: "tired" },
           "kmr>ckb": { w: "ماندوو", en: "tired" } },
    warn: {
      "ckb>kmr": { en: "Tired is westiyayî: Ez westiyayî me = ماندووم. (Some areas also say mandî.)",
                   ku: "ماندوو دەبێتە westiyayî: Ez westiyayî me = ماندووم. (لە هەندێ ناوچە mandî یش دەڵێن.)" },
      "kmr>ckb": { en: "Tired is ماندوو: ماندووم = ez westiyayî me. ‘Thanks for your effort’ is ماندوو نەبیت.",
                   ku: "Westiyayî bi soranî ماندوو ye: ماندووم = ez westiyayî me. ماندوو نەبیت = «destê te sax be»." } } },

  { id: "hertim", kind: "different",
    ckb: { w: "هەمیشە", en: "always" }, kmr: { w: "her tim", en: "always" },
    fix: { "ckb>kmr": { w: "her tim / her dem", en: "always" },
           "kmr>ckb": { w: "هەمیشە", en: "always" } },
    warn: {
      "ckb>kmr": { en: "Always is her tim or her dem (‘every time’). Never is qet.",
                   ku: "«هەمیشە» دەبێتە her tim یان her dem. «هەرگیز» دەبێتە qet." },
      "kmr>ckb": { en: "Always is هەمیشە. Never is هەرگیز.",
                   ku: "Her tim bi soranî هەمیشە ye. Qet bi soranî هەرگیز e." } } }
];
