// High-value Kurmanji Kurdish (Latin Hawar script) formulaic sequences
// ("chunks"). These are multi-word units that proficient speakers process
// holistically, not compositionally (Hou et al. 2018; Vilkaitė 2016).
// Drilling them as single blocks short-circuits the build-from-scratch
// effort and produces fluent-sounding, socially warm output fast.
// (`nl` = target-language slot, holds Kurmanji Kurdish.)
//
// Curated for everyday Kurdish life: greetings, thanks + hospitality
// (fermo / kerem bike / ser çav), bazaar transactions, a little office
// talk, small talk, and repair fillers. The "context" note suggests a
// typical situation. Parallel one-for-one with the Sorani deck.
window.__DECK.kmr.CHUNKS = [
  // ---- social & conversational fillers ----
  { nl: "silav",                     en: "hello / hi",                          context: "universal greeting, any time of day" },
  { nl: "çawa yî?",                  en: "how are you?",                        context: "informal 'how are you'" },
  { nl: "ez baş im, spas",           en: "I'm fine, thanks",                    context: "standard reply to 'how are you'" },
  { nl: "spas",                      en: "thanks",                              context: "everyday thank you" },
  { nl: "gelek spas",                en: "thank you very much",                 context: "emphatic thanks" },
  { nl: "ne tiştek e",               en: "you're welcome (it's nothing)",       context: "warm reply after being thanked" },
  { nl: "çi xeber?",                 en: "what's up? / any news?",              context: "casual opener with friends" },
  { nl: "ser çav",                   en: "gladly / with pleasure",              context: "warm 'sure, of course' (lit. 'on my eye')" },
  { nl: "mandî nebî",                en: "may you not tire",                    context: "blessing to someone working or busy" },
  { nl: "tu jî",                     en: "you too / same to you",               context: "mirror reply to a good wish" },
  { nl: "Xwedê hafiz",               en: "goodbye",                             context: "parting (lit. 'God protect you')" },
  { nl: "bi xatirê te",              en: "bye, take care",                      context: "informal parting" },

  // ---- transactional & hospitality ----
  { nl: "fermo",                     en: "here you go / please",                context: "offering something, or 'come in, go ahead'" },
  { nl: "kerem bike",                en: "please, help yourself",               context: "inviting someone to eat or proceed" },
  { nl: "bi xêr hatî",               en: "welcome",                             context: "greeting a guest who has arrived" },
  { nl: "çiqas e?",                  en: "how much is it?",                     context: "asking a price at the bazaar/shop" },
  { nl: "hesab, ji kerema xwe",      en: "the bill, please",                    context: "asking for the check" },
  { nl: "ez dikarim bi kartê bidim?", en: "can I pay by card?",                 context: "at the register — expect cash-only sometimes" },
  { nl: "kêliyek, ji kerema xwe",    en: "one moment, please",                  context: "buying time at any counter" },

  // ---- work / office ----
  { nl: "tu dikarî alîkariya min bikî?", en: "can you help me for a sec?",      context: "asking a colleague" },
  { nl: "baş e",                     en: "okay / sounds good",                  context: "agreeing to a plan" },
  { nl: "ez ê te agahdar bikim",     en: "I'll let you know",                   context: "friendly non-committal close" },
  { nl: "destê te xweş",             en: "well done / nice work",               context: "thanking someone for their effort" },
  { nl: "hema bêje qediya",          en: "it's almost done",                    context: "status update" },
  { nl: "tu pirsgirêk tune",         en: "no problem / all clear",              context: "reassuring, 'no blockers'" },

  // ---- everyday observations / weather ----
  { nl: "hewa xweş e, ne wusa?",     en: "nice weather, isn't it?",             context: "small-talk opener" },
  { nl: "ez birçî me",               en: "I'm hungry",                          context: "everyday need" },
  { nl: "ez tî me",                  en: "I'm thirsty",                         context: "everyday need" },
  { nl: "ez pir mijûl im",           en: "I'm very busy",                       context: "common 'I've got a lot on'" },

  // ---- problem-solving ----
  { nl: "çi bû?",                    en: "what's the matter? / what happened?", context: "investigating a problem" },
  { nl: "nizanim",                   en: "I don't know",                        context: "honest 'no idea' reply" },
  { nl: "min fêm nekir",             en: "I didn't understand",                 context: "you missed the meaning" },
  { nl: "tu dikarî dubare bikî?",    en: "can you repeat that?",                context: "ask for a repeat" },
  { nl: "bibore, hêdîtir bipeyive",  en: "sorry, speak a bit slower",           context: "ask them to slow down" },
];
