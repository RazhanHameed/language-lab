// High-value German formulaic sequences ("chunks"). These are multi-word
// units that proficient speakers process holistically, not compositionally
// (Hou et al. 2018; Vilkaitė 2016). Drilling them as single units short-
// circuits the build-from-scratch effort and produces fluent-sounding output
// fast. (`nl` = target-language slot, holds German.)
//
// Curated from the scenarios + sentence patterns + everyday Berlin life. Mix
// of greetings, social formulas, transactional fillers, office tics. The
// "context" string suggests a typical situation.
window.__DECK.de.CHUNKS = [
  // ---- social & conversational fillers ----
  { nl: "das nehme ich",         en: "I'll take that / sure",             context: "ordering, accepting an offer" },
  { nl: "mal schauen",           en: "let me just look",                  context: "buying time when checking something" },
  { nl: "gar kein Problem",      en: "no problem at all",                 context: "softening a 'no problem' reply" },
  { nl: "gern geschehen",        en: "you're welcome",                    context: "after being thanked" },
  { nl: "alles gut?",            en: "all good?",                         context: "default 'how are you'" },
  { nl: "ja, und selbst?",       en: "yes, and you?",                     context: "default reply to 'alles gut'" },
  { nl: "schönen Tag noch",      en: "have a nice rest of your day",      context: "parting from any service worker" },
  { nl: "dir auch",              en: "you too",                           context: "universal mirror reply (informal)" },
  { nl: "bis gleich",            en: "see you soon",                      context: "stepping out briefly" },
  { nl: "bis morgen",            en: "see you tomorrow",                  context: "end-of-day goodbye" },
  { nl: "nur zu",                en: "go ahead, be my guest",             context: "letting someone past or speak first" },
  { nl: "macht nichts",          en: "it doesn't matter / no worries",    context: "brushing off a small inconvenience" },

  // ---- transactional ----
  { nl: "darf ich mal durch?",   en: "may I get past?",                   context: "U-Bahn, sidewalk, squeezing through" },
  { nl: "kann ich mit Karte zahlen?", en: "can I pay by card?",           context: "any register — expect 'nur Bargeld' sometimes" },
  { nl: "zahlen, bitte",         en: "the check, please",                 context: "asking for the bill at the table" },
  { nl: "was können Sie empfehlen?", en: "what do you recommend?",        context: "restaurant, pharmacy, shop" },
  { nl: "zum Mitnehmen oder hier?", en: "to take away or for here?",      context: "standard takeaway question" },
  { nl: "auf den Namen",         en: "under the name of",                 context: "phone reservation, pickup" },
  { nl: "einen Moment, bitte",   en: "just a moment",                     context: "buying time at any counter" },

  // ---- work / office ----
  { nl: "kannst du mir kurz helfen", en: "can you help me for a sec",     context: "tapping a colleague" },
  { nl: "keine Blocker",         en: "no blockers",                       context: "tech standup" },
  { nl: "klingt gut",            en: "sounds good",                       context: "agreeing with a plan" },
  { nl: "ich sag dir Bescheid",  en: "I'll let you know",                 context: "non-committal but friendly close" },
  { nl: "passt das in deinen Kalender?", en: "does that fit in your calendar?", context: "scheduling" },
  { nl: "ich bin fast fertig damit", en: "I'm almost done with it",       context: "status update" },

  // ---- everyday observations / weather ----
  { nl: "schönes Wetter, oder?", en: "nice weather, eh?",                 context: "small-talk opener" },
  { nl: "was für eine stressige Woche", en: "what a stressful week",      context: "Friday Feierabend opener" },
  { nl: "ich habe Hunger",       en: "I'm hungry (lit. I have hunger)",   context: "German HAS hunger, not IS hungry" },
  { nl: "ich habe viel zu tun",  en: "I've got a lot on",                 context: "common 'I'm busy' idiom" },

  // ---- problem-solving ----
  { nl: "was ist los?",          en: "what's the matter / what's up",     context: "investigating a problem" },
  { nl: "ich weiß es nicht",     en: "I don't know",                      context: "honest 'no idea' reply" },
  { nl: "keine Ahnung",          en: "no idea",                           context: "shrug-equivalent" },
  { nl: "kannst du das wiederholen?", en: "can you repeat that?",         context: "you missed it" },
  { nl: "Entschuldigung, ich verstehe dich nicht", en: "sorry, I don't understand you", context: "didn't catch it" },
];
