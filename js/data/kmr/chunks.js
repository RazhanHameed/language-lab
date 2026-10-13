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

  // ---- B1 expansion ----
  // ---- giving opinions & hedging ----
  { nl: "bi dîtina min", en: "in my opinion", context: "opens a view; usually followed by a comma" },
  { nl: "bi baweriya min", en: "I believe / in my view", context: "a slightly more formal opinion frame" },
  { nl: "li gorî min", en: "according to me", context: "gentle opinion, good in discussion" },
  { nl: "ez difikirim ku", en: "I think that...", context: "introduces your view; 'ku' is never dropped" },
  { nl: "ez bi te re razî me", en: "I agree with you", context: "agreeing in a conversation" },
  { nl: "ez bi te re razî nînim", en: "I don't agree with you", context: "polite disagreement" },
  { nl: "rast dibêjî, lê...", en: "you're right, but...", context: "concede first, then object" },
  { nl: "belkî", en: "maybe", context: "hedging a claim or a plan" },
  { nl: "dibe ku", en: "it may be that / perhaps", context: "softening a statement" },
  { nl: "rast bêjim", en: "to tell the truth", context: "introducing a frank remark" },
  { nl: "bi rastî", en: "honestly / really", context: "adds sincerity" },
  { nl: "ew girêdayî ye", en: "it depends", context: "non-committal answer to a big question" },
  { nl: "bi qasî ku ez dizanim", en: "as far as I know", context: "hedging a factual claim" },
  // ---- organising an argument ----
  { nl: "ji aliyekî ve... ji aliyê din ve...", en: "on the one hand... on the other hand...", context: "weighing two sides" },
  { nl: "wek mînak", en: "for example", context: "before an illustration" },
  { nl: "her wiha", en: "likewise / also", context: "adding a point" },
  { nl: "ji ber vê yekê", en: "for this reason / therefore", context: "stating a consequence" },
  { nl: "lê belê", en: "however", context: "stronger than a plain 'lê'" },
  { nl: "digel ku", en: "even though", context: "concession clause opener" },
  { nl: "bi kurtî", en: "in short", context: "summing up" },
  // ---- storytelling glue ----
  { nl: "rojekê", en: "one day", context: "opening a story" },
  { nl: "pêşî... paşê...", en: "first... then...", context: "ordering events" },
  { nl: "piştî wê", en: "after that", context: "moving the story on" },
  { nl: "di vê demê de", en: "meanwhile / at this time", context: "linking two events" },
  { nl: "ji nişkê ve", en: "suddenly", context: "a surprise in the story" },
  { nl: "derket holê ku", en: "it turned out that...", context: "a twist or discovery" },
  { nl: "ya baş ew e ku", en: "the good thing is that...", context: "pointing to a bright side" },
  { nl: "di dawiyê de", en: "in the end / finally", context: "closing a story" },
  // ---- clarifying & repair ----
  { nl: "mebesta te çi ye?", en: "what do you mean?", context: "asking for clarification" },
  { nl: "tu dikarî careke din bibêjî?", en: "can you say that once more?", context: "asking to repeat" },
  { nl: "min baş fêm nekir", en: "I didn't understand well", context: "politely signalling a gap" },
  { nl: "ez wê yekê fêm dikim", en: "I understand that", context: "empathy, before a 'but'" },
  { nl: "ez ê li ser vê bifikirim", en: "I'll think about it", context: "buying time" },
  // ---- polite complaints & requests ----
  { nl: "bibore, pirsgirêkek heye", en: "excuse me, there's a problem", context: "opening a complaint" },
  { nl: "min ev nexwest", en: "I didn't ask for this", context: "wrong order or item" },
  { nl: "ez dixwazim bi berpirs re biaxivim", en: "I'd like to speak to the manager", context: "escalating politely" },
  { nl: "gelek bibore, lê...", en: "I'm very sorry, but...", context: "softener before a complaint" },
  { nl: "tu dikarî vî tiştî biguherînî?", en: "could you change this?", context: "asking for a swap" },
  // ---- on the phone ----
  { nl: "ez dixwazim randevûyekê bigirim", en: "I'd like to make an appointment", context: "calling a clinic or office" },
  { nl: "ez dikarim bi ... re biaxivim?", en: "may I speak to ...?", context: "asking for a person" },
  { nl: "ji kerema xwe, li ser xetê bimînin", en: "please hold the line", context: "receptionist phrase" },
  { nl: "ez te baş nabihîzim", en: "I can't hear you well", context: "bad connection" },
  { nl: "ez ê dîsa telefon bikim", en: "I'll call again", context: "ending a call" },
];
