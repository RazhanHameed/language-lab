// Bridge course intro: the seven steps, a short history, key facts,
// regional hooks and the full script table (Sorani letters <-> Hawar Latin).
window.__BRIDGE = window.__BRIDGE || {};

window.__BRIDGE.INTRO = {
  // EuroCom's "seven sieves", adapted to Sorani <-> Kurmanji.
  steps: [
    { sieve: 1, id: "shared", title: "You already know about 60%",
      titleKu: { "ckb>kmr": "زۆربەی ئەم زمانە دەزانیت", "kmr>ckb": "Tu jixwe piraniyê dizanî" },
      blurb: {
        "ckb>kmr": {
          en: "You already know most of it. About 6 in 10 everyday words are the same or very close: nan, av, mal, baş, roj. Listen first, because speech hides less than spelling does. Notice what you recognise before you learn anything new.",
          ku: "تۆ پێشتر زۆربەی ئەم زمانە دەزانیت. لە هەر دە وشەی ڕۆژانە، نزیکەی شەشیان وەک یەکن یان زۆر لە یەک دەچن: nan (نان)، av (ئاو)، mal (ماڵ)، baş (باش). سەرەتا گوێ بگرە، چونکە وشە لە قسەدا ئاسانتر دەناسرێتەوە تا لە نووسیندا." },
        "kmr>ckb": {
          en: "You already know most of it. About 6 in 10 everyday words are the same or very close: نان nan, ئاو av, ماڵ mal, باش baş. The letters are new; the words are not. Listen first, then match what you hear to what you know.",
          ku: "Tu jixwe piraniya vî zimanî dizanî. Ji her deh peyvên rojane, nêzîkî şeşan wek hev in an jî gelekî dişibin hev: نان nan, ئاو av, ماڵ mal, باش baş. Tîp nû ne, lê peyv ne nû ne. Pêşî guhdarî bike: di axaftinê de tu wan zûtir nas dikî." } } },

    { sieve: 2, id: "sounds", title: "Sound rules",
      titleKu: { "ckb>kmr": "یاسا دەنگییەکان", "kmr>ckb": "Qaydeyên dengan" },
      blurb: {
        "ckb>kmr": {
          en: "A handful of regular sound shifts turn your words into Kurmanji: w becomes v (aw: av, şew: şev), ł becomes l (mał: mal), d after r drops (kirdin: kirin), o often becomes we (xoş: xweş). Learn one rule and dozens of words open up.",
          ku: "چەند یاسایەکی دەنگیی ڕێکوپێک وشەکانی تۆ دەکەنە کورمانجی: و دەبێتە v (ئاو: av، شەو: şev)، ڵ دەبێتە l (ماڵ: mal)، د لە دوای ر نامێنێ (کردن: kirin)، ۆ زۆر جار دەبێتە we (خۆش: xweş). فێری یاسایەک ببە، دەیان وشەت دەکەوێتە دەست." },
        "kmr>ckb": {
          en: "The same shifts work in reverse: your v is often Sorani و w (av: ئاو aw), your l is sometimes ڵ ł (mal: ماڵ mał), kirin gains a d (کردن kirdin) and xweş becomes خۆش xoş. These rules hold usually, not always, so check each new word.",
          ku: "Heman guherînên dengan berevajî jî dixebitin: v ya te pir caran di soranî de و (w) ye: av, ئاو aw. l carinan dibe ڵ (ł): mal, ماڵ mał. Li kirin d zêde dibe: کردن kirdin. Xweş dibe خۆش xoş. Ev qayde pir caran rast derdikevin, lê ne her tim." } } },

    { sieve: 3, id: "script", title: "Script bridge",
      titleKu: { "ckb>kmr": "پردی ئەلفوبێ", "kmr>ckb": "Pira alfabeyê" },
      blurb: {
        "ckb>kmr": {
          en: "Kurmanji uses Latin letters, one letter per sound, and the short i that Sorani leaves unwritten is always written: ژن is jin, دڵ is dil. Two traps: c is your ج and j is your ژ. Start with words you know; the Sorani hint fades as you improve.",
          ku: "کورمانجی بە پیتی لاتینی دەنووسرێ: بۆ هەر دەنگێک پیتێک. ئەو i کورتەی سۆرانی نایینووسێ، لێرە هەمیشە دەنووسرێ: ژن = jin، دڵ = dil. ئاگاداری دوو پیت بە: c واتە ج، j واتە ژ. بە وشە ناسراوەکان دەست پێ بکە؛ یارمەتیی سۆرانی وردە وردە کاڵ دەبێتەوە." },
        "kmr>ckb": {
          en: "Sorani uses an Arabic-based alphabet, written right to left. Vowels are written as letters (ا ە ۆ ێ ی و), except short i, which is never written: ژن is jin. ڵ is a heavy l and ڕ a rolled r. Start with words you know; the Latin hint fades as you improve.",
          ku: "Soranî bi alfabeyeke li ser bingeha ya erebî tê nivîsîn, ji rastê ber bi çepê. Dengdêr bi tîpan tên nivîsîn (ا ە ۆ ێ ی و), lê i ya kurt qet nayê nivîsîn: ژن = jin. ڵ l-ya qalind e, ڕ jî wek rr e. Bi peyvên nas dest pê bike; alîkariya latînî hêdî hêdî kêm dibe." } } },

    { sieve: 4, id: "skeleton", title: "Same skeleton",
      titleKu: { "ckb>kmr": "هەمان چوارچێوە", "kmr>ckb": "Heman çarçove" },
      blurb: {
        "ckb>kmr": {
          en: "The sentence frame is yours: subject, object, verb last. The prefixes match too: di- is your de-, plus bi-, ne-/na- and me-. Your danepał -î becomes the veqetandek -ê, -a or -ên, in the same place: ماڵی من is mala min.",
          ku: "چوارچێوەی ڕستە وەک هی خۆتە: بکەر، بەرکار، کردار لە کۆتاییدا. پێشگرەکانیش وەک یەکن: di- وەک دە-، bi- وەک بـ-، ne-/na- وەک نە-/نا-، me- وەک مە-. ئامرازی دانەپاڵ لە کورمانجیدا پێی دەڵێن veqetandek و چەند شێوەیەکی هەیە (ê، a، ên)، بەڵام جێگەکەی هەر هەمانە: ماڵی من = mala min." },
        "kmr>ckb": {
          en: "The sentence frame is yours: subject, object, verb last. The prefixes match too: دە- de- is your di-, plus بـ- bi-, نە-/نا- ne-/na- and مە- me-. Your veqetandek becomes the danepał ـی -î, one form for every noun, in the same place: mala min is ماڵی من.",
          ku: "Çarçoveya hevokê ya te ye: kirde, bireser, lêker li dawiyê. Pêşgir jî heman in: دە- (de-) wek di-, بـ- (bi-), نە-/نا- (ne-/na-), مە- (me-). Veqetandeka te di soranî de danepał e: tenê ـی (-î), ji bo her navdêrê, li heman cihî: mala min, ماڵی من." } } },

    { sieve: 5, id: "frames", title: "The real differences, one frame at a time",
      titleKu: { "ckb>kmr": "جیاوازییە ڕاستەقینەکان", "kmr>ckb": "Cudahiyên rastîn" },
      blurb: {
        "ckb>kmr": {
          en: "Now the real differences, one at a time and with words you know: gender and the oblique case (-ê, -î), ez for 'I', but min for 'I' as doer of a past verb with an object, no -eke or -ekan, and no person clitics. Each frame is a short contrast, then practice.",
          ku: "ئێستا جیاوازییە ڕاستەقینەکان، یەک بە یەک و بە وشەی ناسراو: ڕەگەزی نێر و مێ و باری ناڕاستەوخۆ (ê و î)؛ ez بۆ بکەر، بەڵام min بۆ بکەری کاری تێپەڕ لە ڕابردوودا؛ نە ـەکە هەیە نە ـەکان؛ جێناوی لکاویش نییە. هەر بەشێک بەراوردێکی کورتە و دواتر ڕاهێنان." },
        "kmr>ckb": {
          en: "Now the real differences, one at a time and with words you know: Sorani has no gender and no oblique, adds ـەکە -eke for 'the' and ـێک -êk for 'a', and hangs small person endings (ـم ـت ـی) on words to say who did it and whose it is.",
          ku: "Niha cudahiyên rastîn, yek bi yek, bi peyvên nas: di soranî de ne zayend heye, ne jî rewşa çemandî. Ji bo diyar ـەکە (-eke), ji bo nediyar ـێک (-êk) bi kar tîne, û paşgirên kesane yên piçûk (ـم ـت ـی) bi peyvan ve girê dide da ku bêje kê kir û ya kê ye." } } },

    { sieve: 6, id: "traps", title: "Traps",
      titleKu: { "ckb>kmr": "تەڵەکان", "kmr>ckb": "Xefik" },
      blurb: {
        "ckb>kmr": {
          en: "A few words look familiar but mean something else. To you مانگ is 'month', but Kurmanji mang is 'cow'; 'month' is meh. We practise each trap beside its true partner until it stops tripping you up.",
          ku: "هەندێک وشە ناسراو دێنە بەرچاو، بەڵام واتایەکی دیکەیان هەیە. مانگ لای تۆ بەشێکی ساڵە، بەڵام mang لە کورمانجیدا واتە مانگا؛ مانگی ساڵیش بە کورمانجی پێی دەڵێن meh. هەر تەڵەیەک لە تەنیشت جووتە ڕاستەکەی خۆیەوە ڕاهێنانی لەسەر دەکەین، هەتا چیتر نەتخەڵەتێنێت." },
        "kmr>ckb": {
          en: "A few words look familiar but mean something else. To you mang is 'cow', but Sorani مانگ is 'month'; 'cow' is مانگا. We practise each trap beside its true partner until it stops catching you out.",
          ku: "Hin peyv nas xuya dikin lê wateyeke din didin. Ji bo te mang çêlek e, lê di soranî de مانگ (mang) tê wateya 'meh'; çêlek bi soranî مانگا ye. Em her xefikê li kêleka cotê wê yê rast dubare dikin, heta ku êdî te nexapîne." } } },

    { sieve: 7, id: "read", title: "Read and listen",
      titleKu: { "ckb>kmr": "بخوێنەوە و گوێ بگرە", "kmr>ckb": "Bixwîne û guhdarî bike" },
      blurb: {
        "ckb>kmr": {
          en: "Finally, read and listen to short parallel texts. Colours show what is the same, what shifted and what is new. Read the Kurmanji first and guess, then check the Sorani. Understanding comes before speaking.",
          ku: "لە کۆتاییدا دەقی کورتی تەریب دەخوێنیتەوە و گوێیان لێ دەگریت. ڕەنگەکان نیشانی دەدەن چی وەک یەکە، چی گۆڕاوە و چی نوێیە. سەرەتا کورمانجییەکە بخوێنەوە و مەزەندە بکە، پاشان سەیری سۆرانییەکە بکە. تێگەیشتن پێش قسەکردن دێت." },
        "kmr>ckb": {
          en: "Finally, read and listen to short parallel texts. Colours show what is the same, what shifted and what is new. Read the Sorani first and guess, then check the Kurmanji. Understanding comes before speaking.",
          ku: "Di dawiyê de tu nivîsên kurt ên paralel dixwînî û guhdarî dikî. Reng nîşan didin çi wek hev e, çi guheriye û çi nû ye. Pêşî soranî bixwîne û texmîn bike, paşê li kurmancî binêre. Têgihîştin berî axaftinê tê." } } },
  ],

  // Sister branches, never parent and child. 80-120 words each.
  history: {
    en: "Kurmanji and Sorani are sisters, not parent and child. Both grew out of one Kurdish group within the Northwestern Iranian languages and went their own ways over many centuries. Neither is older, purer or more Kurdish than the other. Kurmanji kept masculine and feminine gender and two noun cases; Sorani lost those, kept the small person clitics that move around the sentence, and developed the definite ending -eke. Gorani, once the literary language of the Ardalan court, lent Sorani some words, such as gorani 'song' itself (Kurmanji: stran). The older idea that Sorani is basically Kurdish built on a Gorani base is now largely rejected. Today both are full standard languages with their own literature, media and schools.",
    ckb: "کورمانجی و سۆرانی دوو خوشکن، نەک دایک و کچ. هەردووکیان لە یەک گرووپی کوردیی سەر بە زمانە ئێرانییە باکووری ڕۆژاواییەکان پەیدا بوون و بە درێژایی سەدان ساڵ هەریەکەیان ڕێگای خۆی گرتۆتە بەر. هیچیان لەوی دیکە کۆنتر، ڕەسەنتر یان کوردیتر نییە. کورمانجی ڕەگەزی نێر و مێ و دوو باری ناوی پاراستووە؛ سۆرانی ئەمانەی لە دەست داوە، بەڵام جێناوە لکاوەکانی پاراستووە کە لە ڕستەدا جێگۆڕکێ دەکەن، و پاشگری ناسیاوی ـەکەی پەرە پێداوە. گۆرانی، کە زمانی ئەدەبیی میرنشینی ئەردەڵان بوو، هەندێک وشەی بە سۆرانی بەخشیوە، وەک خودی وشەی «گۆرانی»، کە کورمانجی پێی دەڵێ stran. ئەو بۆچوونە کۆنەی کە سۆرانی لە بنەڕەتدا لە سەر بناغەی گۆرانی دامەزراوە، ئێستا زۆربەی زمانناسان قبووڵی ناکەن. ئەمڕۆ هەردووکیان زمانی ستانداردی تەواون، بە ئەدەب و میدیا و قوتابخانەی خۆیانەوە.",
    kmr: "Kurmancî û soranî du xwişk in, ne dê û keç in. Herdu ji heman koma kurdî ya îranî ya bakur-rojava derketine û bi sedsalan her yek bi riya xwe de çûye. Ne yek ji ya din kevntir e, ne resentir e, ne jî kurdtir e. Kurmanciyê zayenda nêr û mê û du rewşên navdêran parastine; soraniyê ev winda kirine, lê cînavên girêdayî yên ku di hevokê de cih diguherin parastine û paşgira diyar -eke pêş xistiye. Goraniyê, zimanê edebî yê mîrektiya Erdelanê, hin peyv dane soranî, wek گۆرانی (bi kurmancî: stran). Îro piraniya zimanzanan ramana kevn a ku soranî li ser bingeha goranî ava bûye qebûl nakin. Herdu zimanên standard ên temam in, bi edebiyat, medya û dibistanên xwe.",
    src: "Jügel 2014; Haig & Öpengin 2014; Mohammadirad 2024; MacKenzie 1961 (the Gorani-base view, now largely rejected).",
  },

  facts: [
    { en: "About 6 in 10 everyday words already match: 236 of the 388 word pairs we matched across our Sorani and Kurmanji decks (61%) are identical or clear cognates. Counting partial matches, it is about 67%.",
      ckb: "لە هەر دە وشەی ڕۆژانە نزیکەی شەشیان وەک یەکن: لە ٣٨٨ جووتە وشەی ناو هەردوو کۆمەڵە وشەکەماندا، ٢٣٦یان (٦١٪) وەک یەکن یان بە ئاشکرا هاوڕەگن.",
      kmr: "Ji her deh peyvên rojane nêzîkî şeşan li hev tên: ji 388 cotên peyvan ên di herdu komên me yên peyvan de, 236 (ji sedî 61) wek hev in an jî eşkere ji heman rehî ne.",
      src: "Language Lab deck comparison (own count, 2026)" },
    { en: "In a machine-translation study, native judges rated 71% of Kurmanji text translated into Sorani as understandable, and 63% of Sorani text translated into Kurmanji. This measured translated text, not listeners.",
      ckb: "لە توێژینەوەیەکی وەرگێڕانی ئامێریدا، هەڵسەنگێنەرانی خاوەنزمان گوتیان لە ٧١٪ی ئەو دەقە کورمانجییانەی کرابوونە سۆرانی، و لە ٦٣٪ی ئەو دەقە سۆرانییانەی کرابوونە کورمانجی، تێ دەگەن.",
      kmr: "Di lêkolîneke li ser wergera makîneyî de, axêverên zikmakî ji sedî 71ê nivîsên kurmancî yên ku bo soranî hatibûn wergerandin, û ji sedî 63yê nivîsên soranî yên ku bo kurmancî hatibûn wergerandin, wek têgihîştbar nirxandin.",
      src: "Hassani 2017, VarDial workshop" },
    { en: "No listening study has yet measured how well Sorani and Kurmanji speakers understand each other. The closest, on Kurmanji and Zazaki, found understanding was uneven between the two sides and linked to exposure.",
      ckb: "هێشتا هیچ توێژینەوەیەک بە گوێگرتن نەیپێواوە کە قسەکەرانی سۆرانی و کورمانجی چەندە لە قسەی یەکتر تێ دەگەن.",
      kmr: "Hîn tu lêkolînekê bi guhdariyê nepîvaye ka axêverên soranî û kurmancî çiqasî ji axaftina hev fêm dikin.",
      src: "Ozek, Saglam & Gooskens 2023 (Kurmanji–Zazaki)" },
    { en: "For readers the script is often the biggest barrier: the same word looks completely different, as in ماڵ and mal. Sorani is mostly written in Arabic-based script, Kurmanji mostly in Hawar Latin.",
      ckb: "بۆ خوێنەر، ڕێنووس زۆر جار گەورەترین بەربەستە: هەمان وشە بە تەواوی جیاواز دەردەکەوێ، وەک ماڵ و mal.",
      kmr: "Ji bo xwîneran alfabe pir caran astengiya herî mezin e: heman peyv bi tevahî cuda xuya dike, wek ماڵ û mal.",
      src: "Haig & Öpengin 2014" },
    { en: "Standard Central Kurdish is based on Silêmanî speech but matches no single dialect exactly. In one corpus comparison Silêmanî came closest, sharing about 66% of the features measured.",
      ckb: "کوردیی ناوەندیی ستاندارد لە سەر بنەمای قسەی سلێمانییە، بەڵام بە تەواوی لە هیچ شێوەزارێک ناچێت. شێوەزاری سلێمانی لە هەمووان نزیکترە، بە ڕێژەی نزیکەی ٦٦٪.",
      kmr: "Soraniya standard li ser axaftina Silêmaniyê ava bûye, lê bi tevahî naşibe tu devokê. Devoka Silêmaniyê ya herî nêzîk e, bi qasî ji sedî 66.",
      src: "Ahmadi 2024, CORDI corpus and Teşî dialect essay" },
    { en: "Gorani, once a prestige literary language, lent Sorani some everyday words, such as گۆرانی 'song', where Kurmanji says stran.",
      ckb: "گۆرانی، کە ڕۆژگارێک زمانێکی ئەدەبیی خاوەن پێگە بوو، هەندێک وشەی بە سۆرانی بەخشیوە، وەک «گۆرانی» خۆی، کە کورمانجی پێی دەڵێ stran.",
      kmr: "Goraniyê, ku demekê zimanekî edebî yê bi prestîj bû, hin peyv dane soranî, wek گۆرانی, ku bi kurmancî stran e.",
      src: "Haig & Öpengin 2014" },
  ],

  // Regional features (mentioned, never taught as the target) that bridge the two.
  hooks: {
    "ckb>kmr": [
      { where: "Hewlêr, Mukriyan",
        en: "In Hewlêr and Mukriyan speech a name after 'with' can take an ending: لەگەڵ زەینەبێ. That feminine -ê is exactly the Kurmanji oblique: bi Zeynebê re. If you grew up hearing it, Kurmanji case will feel less strange.",
        ku: "لە قسەی هەولێر و موکریاندا ناو لە دوای «لەگەڵ» پاشگرێک وەردەگرێ: لەگەڵ زەینەبێ. ئەو ـێیەی ناوی مێ ڕێک باری ناڕاستەوخۆی کورمانجییە: bi Zeynebê re. ئەگەر ئەمەت بیستبێ، باری ناڕاستەوخۆی کورمانجی بۆت نامۆ نابێ.",
        ex: { ckb: "لەگەڵ زەینەبێ", kmr: "bi Zeynebê re", en: "with Zeynab" } },
      { where: "Hewlêr",
        en: "In Hewlêr 'a flower' is often گوڵەک rather than standard گوڵێک. Kurmanji says gulek, with the same -ek.",
        ku: "لە هەولێر زۆر جار دەڵێن «گوڵەک» نەک «گوڵێک»ی ستاندارد. کورمانجیش دەڵێ gulek، بە هەمان ـەک.",
        ex: { ckb: "گوڵێک", kmr: "gulek", en: "a flower" } },
      { where: "Mukriyan",
        en: "Mukriyan speakers say دەگەڵ for 'with'. Kurmanji has digel too, alongside bi … re.",
        ku: "موکریانییەکان لە جیاتیی «لەگەڵ» دەڵێن «دەگەڵ». لە کورمانجیشدا digel هەیە، لە تەنیشت bi … re.",
        ex: { ckb: "لەگەڵ", kmr: "digel", en: "with" } },
      { where: "Mukriyan towns",
        en: "Some speakers in Mukriyan towns say ڤ where others say و. That v is the sound Kurmanji uses all the time: şev, av, çav.",
        ku: "هەندێک قسەکەر لە شارەکانی موکریان «ڤ» دەڵێن لە جیاتیی «و». ئەو دەنگە لە کورمانجیدا زۆر باوە: şev، av، çav.",
        ex: { ckb: "شەو", kmr: "şev", en: "night" } },
      { where: "Hewlêr, Mukriyan",
        en: "For خوێن 'blood', Hewlêr says خین and Mukriyan says خێن. Kurmanji xwîn has the same long î as Hewlêr.",
        ku: "هەولێرییەکان بۆ «خوێن» دەڵێن «خین» و موکریانییەکان «خێن». xwînی کورمانجیش هەمان î درێژی هەولێری تێدایە.",
        ex: { ckb: "خوێن", kmr: "xwîn", en: "blood" } },
      { where: "Silêmanî, Sine",
        en: "Silêmanî and Sine speech say ئەچم 'I go'; Hewlêr, Mukriyan and written Sorani say دەچم. Kurmanji di- is that same de-: diçim.",
        ku: "لە سلێمانی و سنە دەڵێن «ئەچم»، بەڵام لە هەولێر و موکریان و لە نووسینی ستانداردا «دەچم». di-ی کورمانجی هەمان دە-یە: diçim.",
        ex: { ckb: "دەچم", kmr: "diçim", en: "I go" } },
    ],
    "kmr>ckb": [
      { where: "Silêmanî, Sine",
        en: "In Silêmanî and Sine you will hear ئەچم 'I go'. Books, television, Hewlêr and Mukriyan use دەچم. Both are your di-: diçim.",
        ku: "Li Silêmaniyê û Sineyê tu yê ئەچم (eçim) bibihîzî. Pirtûk, televizyon, Hewlêr û Mukriyan دەچم (deçim) dibêjin. Herdu jî di- ya te ne: diçim.",
        ex: { ckb: "دەچم", kmr: "diçim", en: "I go" } },
      { where: "Hewlêr",
        en: "Hewlêr speech often turns the heavy ڵ into r: مندار for منداڵ 'child', خار for خاڵ 'uncle'. Standard writing keeps ڵ, which matches your l: xal.",
        ku: "Li Hewlêrê ڵ ya qalind pir caran dibe r: مندار li şûna منداڵ (zarok), خار li şûna خاڵ (xal). Nivîsa standard ڵ diparêze, ku bi l ya te re li hev tê: xal.",
        ex: { ckb: "خاڵ", kmr: "xal", en: "maternal uncle" } },
      { where: "Hewlêr, Mukriyan",
        en: "Your oblique endings live on in Hewlêr and Mukriyan speech: لەگەڵ زەینەبێ 'with Zeynab', like bi Zeynebê re. Standard Sorani does not use them, so leave them out when you write.",
        ku: "Paşgirên te yên rewşa çemandî li Hewlêr û Mukriyanê hîn dijîn: لەگەڵ زەینەبێ, wek bi Zeynebê re. Soraniya standard wan bi kar nayîne, loma dema tu dinivîsî wan bi kar neyne.",
        ex: { ckb: "لەگەڵ زەینەبێ", kmr: "bi Zeynebê re", en: "with Zeynab" } },
      { where: "Hewlêr",
        en: "Hewlêr often says گوڵەک 'a flower', just like your gulek. The standard form is گوڵێک, with ـێک -êk.",
        ku: "Li Hewlêrê pir caran گوڵەک (gulek) tê gotin, tam wek ya te. Forma standard گوڵێک (gułêk) e, bi ـێک.",
        ex: { ckb: "گوڵێک", kmr: "gulek", en: "a flower" } },
      { where: "Mukriyan",
        en: "Mukriyan says دەگەڵ for 'with', close to your digel. The standard is لەگەڵ.",
        ku: "Li Mukriyanê ji bo 'bi … re' دەگەڵ (degeł) dibêjin, nêzî digel a te. Forma standard لەگەڵ (legeł) e.",
        ex: { ckb: "لەگەڵ", kmr: "digel", en: "with" } },
    ],
  },

  // Full Sorani letter <-> Hawar Latin table, in Sorani alphabetical order.
  // lat = the app's Sorani Latin guide; kmr = the Hawar letter(s).
  script: [
    { ckb: "ئ", kmr: "", lat: "", ex: { ckb: "ئاو", kmr: "av", en: "water" },
      note: "Silent seat for a vowel at the start of a word; Hawar writes nothing." },
    { ckb: "ا", kmr: "a", lat: "a", ex: { ckb: "باش", kmr: "baş", en: "good" }, note: "Long a." },
    { ckb: "ب", kmr: "b", lat: "b", ex: { ckb: "برا", kmr: "bira", en: "brother" },
      note: "Also the subjunctive prefix bi-: بخۆم = bixwim." },
    { ckb: "پ", kmr: "p", lat: "p", ex: { ckb: "پارە", kmr: "pere", en: "money" }, note: null },
    { ckb: "ت", kmr: "t", lat: "t", ex: { ckb: "تۆ", kmr: "tu", en: "you" }, note: null },
    { ckb: "ج", kmr: "c", lat: "c", ex: { ckb: "جل", kmr: "cil", en: "clothes" },
      note: "Hawar c is the j of 'jam'. Not the same as Hawar j." },
    { ckb: "چ", kmr: "ç", lat: "ç", ex: { ckb: "چاو", kmr: "çav", en: "eye" }, note: null },
    { ckb: "ح", kmr: "h", lat: "ḧ", ex: { ckb: "حەوت", kmr: "heft", en: "seven" },
      note: "Throaty h. Hawar writes plain h." },
    { ckb: "خ", kmr: "x", lat: "x", ex: { ckb: "خەو", kmr: "xew", en: "sleep" }, note: null },
    { ckb: "د", kmr: "d", lat: "d", ex: { ckb: "دەست", kmr: "dest", en: "hand" },
      note: "After r, Kurmanji often drops it: کردن kirdin = kirin." },
    { ckb: "ر", kmr: "r", lat: "r", ex: { ckb: "سەر", kmr: "ser", en: "head" }, note: "Light r." },
    { ckb: "ڕ", kmr: "r", lat: "ř", ex: { ckb: "ڕۆژ", kmr: "roj", en: "day" },
      note: "Rolled r. Hawar usually writes r, sometimes rr in the middle of a word." },
    { ckb: "ز", kmr: "z", lat: "z", ex: { ckb: "زمان", kmr: "ziman", en: "language" }, note: null },
    { ckb: "ژ", kmr: "j", lat: "j", ex: { ckb: "ژن", kmr: "jin", en: "woman" },
      note: "Hawar j is the s of 'measure'. Watch it: Hawar c is ج." },
    { ckb: "س", kmr: "s", lat: "s", ex: { ckb: "سێو", kmr: "sêv", en: "apple" }, note: null },
    { ckb: "ش", kmr: "ş", lat: "ş", ex: { ckb: "شەو", kmr: "şev", en: "night" }, note: null },
    { ckb: "ع", kmr: "", lat: "ʿ", ex: { ckb: "عەرەب", kmr: "Ereb", en: "Arab" },
      note: "Throat sound in Arabic loans. Hawar has no letter; it is dropped." },
    { ckb: "غ", kmr: "x", lat: "ẍ", ex: { ckb: "باغ", kmr: "bax", en: "garden" },
      note: "Hawar writes x (some write ẍ)." },
    { ckb: "ف", kmr: "f", lat: "f", ex: { ckb: "فڕین", kmr: "firîn", en: "to fly" }, note: null },
    { ckb: "ڤ", kmr: "v", lat: "v", ex: { ckb: "ڤیزا", kmr: "vîze", en: "visa" },
      note: "Rare in standard Sorani. Kurmanji v usually matches Sorani و: شەو = şev." },
    { ckb: "ق", kmr: "q", lat: "q", ex: { ckb: "قاوە", kmr: "qehwe", en: "coffee" }, note: null },
    { ckb: "ک", kmr: "k", lat: "k", ex: { ckb: "کلیل", kmr: "kilîl", en: "key" }, note: null },
    { ckb: "گ", kmr: "g", lat: "g", ex: { ckb: "گەرم", kmr: "germ", en: "warm" }, note: null },
    { ckb: "ل", kmr: "l", lat: "l", ex: { ckb: "لێو", kmr: "lêv", en: "lip" }, note: "Light l." },
    { ckb: "ڵ", kmr: "l", lat: "ł", ex: { ckb: "ماڵ", kmr: "mal", en: "house" },
      note: "Heavy l, never at the start of a word. Hawar writes plain l." },
    { ckb: "م", kmr: "m", lat: "m", ex: { ckb: "مامۆستا", kmr: "mamoste", en: "teacher" }, note: null },
    { ckb: "ن", kmr: "n", lat: "n", ex: { ckb: "نان", kmr: "nan", en: "bread" }, note: null },
    { ckb: "ه", kmr: "h", lat: "h", ex: { ckb: "هەموو", kmr: "hemû", en: "all" },
      note: "Consonant h. Do not confuse with the vowel ە." },
    { ckb: "ە", kmr: "e", lat: "e", ex: { ckb: "دەم", kmr: "dem", en: "mouth" },
      note: "Short e. Written as a letter in Sorani." },
    { ckb: "و", kmr: "w", lat: "w", ex: { ckb: "وڵات", kmr: "welat", en: "country" },
      note: "As a consonant: w. After a vowel Kurmanji often has v: ئاو = av." },
    { ckb: "و", kmr: "u", lat: "u", ex: { ckb: "کوڕ", kmr: "kur", en: "son, boy" },
      note: "Between consonants, a single و is short u." },
    { ckb: "وو", kmr: "û", lat: "û", ex: { ckb: "دوور", kmr: "dûr", en: "far" }, note: "Double و is long û." },
    { ckb: "ۆ", kmr: "o", lat: "o", ex: { ckb: "دۆست", kmr: "dost", en: "friend" },
      note: "Often we in Kurmanji: خۆش = xweş." },
    { ckb: "ی", kmr: "y", lat: "y", ex: { ckb: "یەک", kmr: "yek", en: "one" },
      note: "Next to a vowel, ی is the consonant y." },
    { ckb: "ی", kmr: "î", lat: "î", ex: { ckb: "شیر", kmr: "şîr", en: "milk" },
      note: "Between consonants, ی is long î." },
    { ckb: "ێ", kmr: "ê", lat: "ê", ex: { ckb: "پێنج", kmr: "pênc", en: "five" },
      note: "The small v-mark turns ی into ê." },
    { ckb: "", kmr: "i", lat: "i", ex: { ckb: "دڵ", kmr: "dil", en: "heart" },
      note: "Short i is never written in Sorani; Hawar always writes it. ژن = jin, کچ = kiç (Kurmanji keç)." },
  ],
};
