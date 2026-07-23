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
];
