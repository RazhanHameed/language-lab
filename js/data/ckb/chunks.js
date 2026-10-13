// High-value Central Kurdish (Sorani, Arabic script) formulaic sequences
// ("chunks"). These are multi-word units that proficient speakers process
// holistically, not compositionally (Hou et al. 2018; Vilkaitė 2016).
// Drilling them as single blocks short-circuits the build-from-scratch
// effort and produces fluent-sounding, socially warm output fast.
// (`nl` = target-language slot, holds Sorani Kurdish.)
//
// Curated for everyday Kurdish life: greetings, thanks + hospitality
// (fermû / kerem bike / ser çaw), bazaar transactions, a little office
// talk, small talk, and repair fillers. The "context" note suggests a
// typical situation. Parallel one-for-one with the Kurmanji deck.
window.__DECK.ckb.CHUNKS = [
  // ---- social & conversational fillers ----
  { nl: "سڵاو",              en: "hello / hi",                       context: "universal greeting, any time of day" },
  { nl: "چۆنی؟",             en: "how are you?",                     context: "informal 'how are you'" },
  { nl: "باشم، سوپاس",       en: "I'm fine, thanks",                 context: "standard reply to 'how are you'" },
  { nl: "سوپاس",             en: "thanks",                           context: "everyday thank you" },
  { nl: "زۆر سوپاس",         en: "thank you very much",              context: "emphatic thanks" },
  { nl: "شتی نیە",           en: "you're welcome (it's nothing)",    context: "warm reply after being thanked" },
  { nl: "چی خەبەر؟",         en: "what's up? / any news?",           context: "casual opener with friends" },
  { nl: "سەرچاو",            en: "gladly / with pleasure",           context: "warm 'sure, of course' (lit. 'on my eye')" },
  { nl: "ماندوو نەبی",       en: "may you not tire",                 context: "blessing to someone working or busy" },
  { nl: "هەروەها تۆش",       en: "you too / same to you",            context: "mirror reply to a good wish" },
  { nl: "خوا حافیز",         en: "goodbye",                          context: "parting (lit. 'God protect you')" },
  { nl: "خاترت",             en: "bye, take care",                   context: "informal parting" },

  // ---- transactional & hospitality ----
  { nl: "فەرموو",            en: "here you go / please",             context: "offering something, or 'come in, go ahead'" },
  { nl: "کەرەم بکە",         en: "please, help yourself",            context: "inviting someone to eat or proceed" },
  { nl: "بەخێربێی",          en: "welcome",                          context: "greeting a guest who has arrived" },
  { nl: "چەندە؟",            en: "how much is it?",                  context: "asking a price at the bazaar/shop" },
  { nl: "حساب، تکایە",       en: "the bill, please",                 context: "asking for the check" },
  { nl: "بە کارت دەدرێت؟",   en: "can I pay by card?",               context: "at the register — expect cash-only sometimes" },
  { nl: "چرکەیەک، تکایە",    en: "one moment, please",               context: "buying time at any counter" },

  // ---- work / office ----
  { nl: "دەتوانی هاوکاریم بکەی؟", en: "can you help me for a sec?",   context: "asking a colleague" },
  { nl: "باشە",              en: "okay / sounds good",               context: "agreeing to a plan" },
  { nl: "ئاگادارت دەکەمەوە",  en: "I'll let you know",                context: "friendly non-committal close" },
  { nl: "دەستخۆش",           en: "well done / nice work",            context: "thanking someone for their effort" },
  { nl: "خەریکە تەواو دەبێت", en: "it's almost done",                 context: "status update" },
  { nl: "هیچ کێشەیەک نیە",    en: "no problem / all clear",           context: "reassuring, 'no blockers'" },

  // ---- everyday observations / weather ----
  { nl: "هەوا خۆشە، وا نیە؟",  en: "nice weather, isn't it?",          context: "small-talk opener" },
  { nl: "برسیمە",            en: "I'm hungry",                       context: "everyday need" },
  { nl: "تینوومە",           en: "I'm thirsty",                      context: "everyday need" },
  { nl: "زۆر سەرقاڵم",       en: "I'm very busy",                    context: "common 'I've got a lot on'" },

  // ---- problem-solving ----
  { nl: "چی بووە؟",          en: "what's the matter? / what happened?", context: "investigating a problem" },
  { nl: "نازانم",            en: "I don't know",                     context: "honest 'no idea' reply" },
  { nl: "تێنەگەیشتم",        en: "I didn't understand",              context: "you missed the meaning" },
  { nl: "دەتوانی دووبارەی بکەیتەوە؟", en: "can you repeat that?",     context: "ask for a repeat" },
  { nl: "ببورە، هێواشتر قسە بکە", en: "sorry, speak a bit slower",    context: "ask them to slow down" },
  // ---- B1 chunks ----

  // ---- opinions & discussion ----
  { nl: "پێموایە", en: "I think ...", context: "opening an opinion" },
  { nl: "بە بڕوای من", en: "in my opinion", context: "formal-ish opinion frame" },
  { nl: "بەڕای من", en: "in my view", context: "opinion frame in discussion" },
  { nl: "لای من", en: "as far as I'm concerned / to me", context: "personal stance" },
  { nl: "لەگەڵ تۆ هاوڕام", en: "I agree with you", context: "agreeing" },
  { nl: "لەگەڵ ئەوە نیم", en: "I don't agree with that", context: "polite disagreement" },
  { nl: "ڕاست دەکەیت", en: "you're right", context: "conceding a point" },
  { nl: "تا ڕادەیەک", en: "to some extent", context: "softening a claim" },
  { nl: "ڕاستییەکەی", en: "actually / the truth is ...", context: "admitting something frankly" },
  { nl: "دڵنیا نیم", en: "I'm not sure", context: "hedging" },
  { nl: "لەوانەیە", en: "perhaps / it may be", context: "hedging a guess" },
  { nl: "ئەوە دەگەڕێتەوە بۆ", en: "it depends on ...", context: "answering 'it depends'" },
  { nl: "لەلایەکەوە، لەلایەکی ترەوە", en: "on the one hand ... on the other hand ...", context: "weighing two sides" },
  { nl: "بۆ ئەوەی ڕاستی بڵێم", en: "to tell the truth", context: "frank admission" },

  // ---- linking & structuring ----
  { nl: "بۆ نموونە", en: "for example", context: "giving an example" },
  { nl: "بە کورتی", en: "in short", context: "summing up" },
  { nl: "بەگشتی", en: "in general", context: "broad statement" },
  { nl: "لە ڕاستیدا", en: "in fact", context: "correcting or adding emphasis" },
  { nl: "هەروەها", en: "also / likewise", context: "adding a point" },
  { nl: "لەگەڵ ئەوەشدا", en: "even so / however", context: "contrast" },
  { nl: "هەرچۆنێک بێت", en: "in any case", context: "closing a topic" },
  { nl: "وا دیارە", en: "it seems that", context: "inference" },

  // ---- storytelling ----
  { nl: "جارێکیان", en: "once ...", context: "opening a past anecdote" },
  { nl: "لە سەرەتادا", en: "at first", context: "story start" },
  { nl: "دەرکەوت کە", en: "it turned out that ...", context: "surprising result" },
  { nl: "لەناکاو", en: "suddenly", context: "story turning point" },
  { nl: "لە کۆتاییدا", en: "in the end", context: "story ending" },
  { nl: "لەو کاتەوە", en: "ever since then", context: "time marker" },

  // ---- complaints & services ----
  { nl: "ببورە، کێشەیەکم هەیە", en: "excuse me, I have a problem", context: "opening a complaint" },
  { nl: "ئەمە ئەوەی داوام کردبوو نییە", en: "this isn't what I ordered", context: "restaurant or shop" },
  { nl: "ئەمە کار ناکات", en: "this doesn't work", context: "reporting a fault" },
  { nl: "دەتوانیت چارەسەری بکەیت؟", en: "can you sort this out?", context: "asking for a fix" },
  { nl: "دەمەوێت سکاڵا بکەم", en: "I'd like to make a complaint", context: "formal complaint" },
  { nl: "ئومێد دەکەم چارەسەر بکرێت", en: "I hope it can be fixed", context: "polite closing of a complaint" },

  // ---- phone & appointments ----
  { nl: "ئەلۆ، کێیە؟", en: "hello, who's this?", context: "answering an unknown number" },
  { nl: "دەتوانم لەگەڵ ئارام قسە بکەم؟", en: "may I speak to Aram?", context: "asking for someone on the phone" },
  { nl: "هێڵەکە باش نییە", en: "the line is bad", context: "bad reception" },
  { nl: "دووبارە پەیوەندیت پێوە دەکەم", en: "I'll call you back", context: "ending a call" },
  { nl: "دەتوانم پەیامێک بەجێبهێڵم؟", en: "can I leave a message?", context: "nobody is free" },
  { nl: "کەی کاتت هەیە؟", en: "when do you have time?", context: "making an appointment" },
  { nl: "دەتوانین ڕۆژێکی تر دیاری بکەین؟", en: "can we fix another day?", context: "rescheduling" },
  { nl: "با قسەکەم تەواو بکەم", en: "let me finish", context: "politely holding the floor" },
  { nl: "چۆن بڵێم؟", en: "how shall I put it?", context: "filler while thinking" },
];
