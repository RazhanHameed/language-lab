// High-value Dutch formulaic sequences ("chunks"). These are multi-word
// units that proficient speakers process holistically, not compositionally
// (Hou et al. 2018; Vilkaitė 2016). Drilling them as single units short-
// circuits the build-from-scratch effort and produces fluent-sounding output
// fast.
//
// Curated from the existing scenarios + sentence patterns + everyday
// Amsterdam life. Mix of greetings, social formulas, transactional fillers,
// office tics. The "context" string suggests a typical situation.
window.CHUNKS = [
  // ---- social & conversational fillers ----
  { nl: "doe maar",              en: "sure / I'll have that",            context: "ordering, accepting an offer" },
  { nl: "even kijken",           en: "let me just look",                  context: "buying time when checking something" },
  { nl: "geen probleem hoor",    en: "no problem at all",                 context: "softening a 'no problem' reply" },
  { nl: "graag gedaan",          en: "you're welcome",                    context: "after being thanked" },
  { nl: "alles goed?",           en: "all good?",                         context: "default 'how are you'" },
  { nl: "ja, met jou?",          en: "yes, and with you?",                context: "default reply to 'alles goed'" },
  { nl: "fijne dag verder",      en: "have a nice rest of your day",      context: "parting from any service worker" },
  { nl: "jij ook",               en: "you too",                           context: "universal mirror reply" },
  { nl: "tot straks",            en: "see you soon",                      context: "stepping out briefly" },
  { nl: "tot morgen",            en: "see you tomorrow",                  context: "end-of-day goodbye" },
  { nl: "ga je gang",            en: "go ahead, be my guest",             context: "letting someone past or speak first" },
  { nl: "het geeft niet",        en: "it doesn't matter / no worries",    context: "brushing off a small inconvenience" },

  // ---- transactional ----
  { nl: "mag ik er even langs",  en: "may I get past, briefly",           context: "tram, sidewalk, squeezing through" },
  { nl: "kan ik pinnen?",        en: "can I pay by card?",                context: "any cash register" },
  { nl: "mag ik afrekenen?",     en: "may I settle up?",                  context: "asking for the bill" },
  { nl: "wat raadt u aan?",      en: "what do you recommend?",            context: "restaurant, pharmacy, shop" },
  { nl: "voor hier of mee?",     en: "for here or to take away?",         context: "standard takeaway question" },
  { nl: "op naam van",           en: "under the name of",                 context: "phone reservation, dropoff" },
  { nl: "een momentje",          en: "just a moment",                     context: "buying time at any counter" },

  // ---- work / office ----
  { nl: "kan je me even helpen", en: "can you help me for a sec",         context: "tapping a colleague" },
  { nl: "geen blockers",         en: "no blockers",                       context: "tech standup" },
  { nl: "klinkt goed",           en: "sounds good",                       context: "agreeing with a plan" },
  { nl: "ik laat het je weten",  en: "I'll let you know",                 context: "non-committal but friendly close" },
  { nl: "past dat in je agenda?", en: "does that fit in your calendar?",  context: "scheduling" },
  { nl: "ik ben er bijna mee klaar", en: "I'm almost done with it",       context: "status update" },

  // ---- everyday observations / weather ----
  { nl: "lekker weer hè?",       en: "nice weather, eh?",                 context: "universal Dutch icebreaker" },
  { nl: "wat een drukke week",   en: "what a busy week",                  context: "Friday borrel opener" },
  { nl: "ik heb honger",         en: "I'm hungry (lit. I have hunger)",   context: "Dutch HAS hunger, not IS hungry" },
  { nl: "ik heb het druk",       en: "I'm busy (lit. I have it busy)",    context: "common idiom" },

  // ---- problem-solving ----
  { nl: "wat is er aan de hand?", en: "what's the matter / what's up",    context: "investigating a problem" },
  { nl: "ik weet het niet",      en: "I don't know",                      context: "honest 'no idea' reply" },
  { nl: "geen idee",             en: "no idea",                           context: "shrug-equivalent" },
  { nl: "kan je dat herhalen?",  en: "can you repeat that?",              context: "you missed it" },
  { nl: "sorry, ik versta je niet", en: "sorry, I can't make out what you said", context: "audibly didn't understand" },
];
