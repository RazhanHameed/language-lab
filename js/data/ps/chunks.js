// High-value Pashto (standard Afghan written Pashto, Arabic script) formulaic
// sequences ("chunks"). These are multi-word units that proficient speakers
// process holistically, not compositionally (Hou et al. 2018; Vilkaitė 2016).
// Drilling them as single blocks short-circuits the build-from-scratch
// effort and produces fluent-sounding, socially warm output fast.
// (`nl` = target-language slot, holds Pashto.)
//
// Curated for everyday life in Kabul, Kandahar and Peshawar: greetings and
// blessings (ستړی مه شې / خوار مه شې, په مخه دې ښه), hospitality
// (ښه راغلاست, تشریف راوړئ), bazaar transactions, a little office talk,
// small talk, and repair fillers. The "context" note suggests a typical
// situation. Parallel one-for-one with the Sorani deck.
window.__DECK.ps.CHUNKS = [
  // ---- social & conversational fillers ----
  { nl: "سلام",              en: "hello / hi",                       context: "universal greeting, any time of day" },
  { nl: "څنګه یې؟",          en: "how are you?",                     context: "informal 'how are you' (polite: څنګه یاست؟)" },
  { nl: "ښه یم، مننه",       en: "I'm fine, thanks",                 context: "standard reply to 'how are you'" },
  { nl: "مننه",              en: "thanks",                           context: "everyday thank you" },
  { nl: "ډېره مننه",         en: "thank you very much",              context: "emphatic thanks" },
  { nl: "هېڅ خبره نه ده",     en: "you're welcome (it's nothing)",    context: "warm reply after being thanked or apologised to" },
  { nl: "څه حال دی؟",        en: "what's up? / how's things?",       context: "casual opener with friends" },
  { nl: "په سترګو",          en: "gladly / with pleasure",           context: "warm 'sure, of course' (lit. 'on my eyes')" },
  { nl: "ستړی مه شې",        en: "may you not be tired",             context: "the classic Pashto greeting, to someone arriving or working (to a woman: ستړې مه شې)" },
  { nl: "خوار مه شې",        en: "may you not be poor (reply)",      context: "the standard reply to ستړی مه شې" },
  { nl: "خدای پامان",        en: "goodbye",                          context: "parting (lit. 'in God's protection')" },
  { nl: "په مخه دې ښه",      en: "bye, safe journey",                context: "said to the person who is leaving (lit. 'good be ahead of you')" },

  // ---- transactional & hospitality ----
  { nl: "مهرباني وکړئ",      en: "please / please go ahead",         context: "offering something, or inviting someone to take, sit or eat" },
  { nl: "تشریف راوړئ",       en: "please come in",                   context: "welcoming a guest into the house or office" },
  { nl: "ښه راغلاست",        en: "welcome",                          context: "greeting a guest who has arrived" },
  { nl: "دا په څو دی؟",       en: "how much is it?",                  context: "asking a price at the bazaar or shop" },
  { nl: "مهرباني وکړئ، حساب راوړئ", en: "the bill, please",           context: "asking for the check" },
  { nl: "په کارت پیسې ورکولای شم؟", en: "can I pay by card?",          context: "at the register; expect cash-only often" },
  { nl: "یوه شېبه صبر وکړئ",  en: "one moment, please",               context: "buying time at any counter" },

  // ---- work / office ----
  { nl: "لږ مرسته راسره کولای شې؟", en: "can you help me for a sec?", context: "asking a colleague" },
  { nl: "سمه ده",            en: "okay / sounds good",               context: "agreeing to a plan" },
  { nl: "خبر به دې کړم",      en: "I'll let you know",                context: "friendly non-committal close" },
  { nl: "شاباس",             en: "well done / nice work",            context: "praising someone's effort" },
  { nl: "نږدې خلاص دی",       en: "it's almost done",                 context: "status update" },
  { nl: "هېڅ ستونزه نشته",    en: "no problem / all clear",           context: "reassuring, 'no blockers'" },

  // ---- everyday observations / weather ----
  { nl: "هوا ښه ده، نه؟",     en: "nice weather, isn't it?",          context: "small-talk opener" },
  { nl: "وږی یم",            en: "I'm hungry",                       context: "everyday need (a woman says: وږې یم)" },
  { nl: "تږی یم",            en: "I'm thirsty",                      context: "everyday need (a woman says: تږې یم)" },
  { nl: "ډېر بوخت یم",        en: "I'm very busy",                    context: "common 'I've got a lot on'" },

  // ---- problem-solving ----
  { nl: "څه شوي دي؟",        en: "what's the matter? / what happened?", context: "investigating a problem" },
  { nl: "نه پوهېږم",          en: "I don't know",                     context: "honest 'no idea' reply" },
  { nl: "پوه نه شوم",         en: "I didn't understand",              context: "you missed the meaning" },
  { nl: "یو ځل بیا یې ووایه",  en: "can you say that again?",          context: "ask for a repeat" },
  { nl: "بښنه غواړم، لږ ورو خبرې وکړه", en: "sorry, speak a bit slower", context: "ask them to slow down" },
  // ---- B1 chunks ----

  // ---- opinions & discussion ----
  { nl: "زه فکر کوم چې", en: "I think ...", context: "opening an opinion" },
  { nl: "زما په نظر", en: "in my opinion", context: "formal-ish opinion frame" },
  { nl: "زما په اند", en: "in my view", context: "opinion frame in discussion (اند is a native Pashto word)" },
  { nl: "زما لپاره", en: "as far as I'm concerned / to me", context: "personal stance" },
  { nl: "له تا سره موافق یم", en: "I agree with you", context: "agreeing" },
  { nl: "له دې سره موافق نه یم", en: "I don't agree with that", context: "polite disagreement" },
  { nl: "ته سم وایې", en: "you're right", context: "conceding a point" },
  { nl: "تر یوه حده", en: "to some extent", context: "softening a claim" },
  { nl: "رښتیا خبره دا ده چې", en: "actually / the truth is ...", context: "admitting something frankly" },
  { nl: "ډاډه نه یم", en: "I'm not sure", context: "hedging" },
  { nl: "کېدای شي", en: "perhaps / it may be", context: "hedging a guess" },
  { nl: "دا په دې پورې اړه لري چې", en: "it depends on ...", context: "answering 'it depends' (lit. 'it is connected to ...')" },
  { nl: "له یوې خوا، له بلې خوا", en: "on the one hand ... on the other hand ...", context: "weighing two sides" },
  { nl: "که رښتیا ووایم", en: "to tell the truth", context: "frank admission" },

  // ---- linking & structuring ----
  { nl: "د بېلګې په توګه", en: "for example", context: "giving an example" },
  { nl: "په لنډه توګه", en: "in short", context: "summing up" },
  { nl: "په عمومي توګه", en: "in general", context: "broad statement" },
  { nl: "په حقیقت کې", en: "in fact", context: "correcting or adding emphasis" },
  { nl: "همدارنګه", en: "also / likewise", context: "adding a point" },
  { nl: "بیا هم", en: "even so / still", context: "contrast" },
  { nl: "هر څنګه چې وي", en: "in any case", context: "closing a topic" },
  { nl: "داسې ښکاري چې", en: "it seems that", context: "inference" },

  // ---- storytelling ----
  { nl: "یو ځل", en: "once ...", context: "opening a past anecdote" },
  { nl: "په پیل کې", en: "at first", context: "story start" },
  { nl: "معلومه شوه چې", en: "it turned out that ...", context: "surprising result" },
  { nl: "ناڅاپه", en: "suddenly", context: "story turning point" },
  { nl: "په پای کې", en: "in the end", context: "story ending" },
  { nl: "له هغه وخته راهیسې", en: "ever since then", context: "time marker" },

  // ---- complaints & services ----
  { nl: "بښنه غواړم، یوه ستونزه لرم", en: "excuse me, I have a problem", context: "opening a complaint" },
  { nl: "ما دا نه و غوښتی", en: "this isn't what I ordered", context: "restaurant or shop (lit. 'I hadn't asked for this')" },
  { nl: "دا کار نه کوي", en: "this doesn't work", context: "reporting a fault" },
  { nl: "کولای شئ دا سم کړئ؟", en: "can you sort this out?", context: "asking for a fix" },
  { nl: "غواړم شکایت وکړم", en: "I'd like to make a complaint", context: "formal complaint" },
  { nl: "هیله ده چې حل شي", en: "I hope it can be fixed", context: "polite closing of a complaint" },

  // ---- phone & appointments ----
  { nl: "هلو، څوک یاست؟", en: "hello, who's this?", context: "answering an unknown number" },
  { nl: "له احمد سره خبرې کولای شم؟", en: "may I speak to Ahmad?", context: "asking for someone on the phone" },
  { nl: "غږ ښه نه راځي", en: "the line is bad", context: "bad reception (lit. 'the voice isn't coming well')" },
  { nl: "وروسته به درته زنګ ووهم", en: "I'll call you back", context: "ending a call" },
  { nl: "پیغام پرېښودلای شم؟", en: "can I leave a message?", context: "nobody is free" },
  { nl: "کله وخت لرې؟", en: "when do you have time?", context: "making an appointment" },
  { nl: "کولای شو بله ورځ وټاکو؟", en: "can we fix another day?", context: "rescheduling" },
  { nl: "اجازه راکړه خبره مې خلاصه کړم", en: "let me finish", context: "politely holding the floor" },
  { nl: "څنګه ووایم؟", en: "how shall I put it?", context: "filler while thinking" },
];
