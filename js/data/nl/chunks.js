// High-value Dutch formulaic sequences ("chunks"). These are multi-word
// units that proficient speakers process holistically, not compositionally
// (Hou et al. 2018; Vilkaitė 2016). Drilling them as single units short-
// circuits the build-from-scratch effort and produces fluent-sounding output
// fast.
//
// Curated from the existing scenarios + sentence patterns + everyday
// Amsterdam life. Mix of greetings, social formulas, transactional fillers,
// office tics. The "context" string suggests a typical situation.
window.__DECK.nl.CHUNKS = [
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

  // ---- B1: opinions, connectors, storytelling, phone & complaints ----
  // opinion frames
  { nl: "naar mijn mening", en: "in my opinion", context: "opening a considered opinion" },
  { nl: "volgens mij", en: "I think / if you ask me", context: "everyday, softer opinion" },
  { nl: "als je het mij vraagt", en: "if you ask me", context: "giving an opinion unprompted" },
  { nl: "wat mij betreft", en: "as far as I'm concerned", context: "giving permission or a view" },
  { nl: "eerlijk gezegd", en: "honestly / to be honest", context: "before an honest remark" },
  { nl: "ik heb het gevoel dat", en: "I have the feeling that", context: "tentative impression" },
  { nl: "ik zou zeggen", en: "I'd say", context: "softening a claim" },
  { nl: "hoe denk jij erover?", en: "what do you think about it?", context: "inviting someone's view" },
  // agreeing & disagreeing
  { nl: "daar ben ik het mee eens", en: "I agree with that", context: "clear agreement" },
  { nl: "daar ben ik het niet mee eens", en: "I don't agree with that", context: "polite disagreement" },
  { nl: "dat klopt", en: "that's right", context: "confirming a fact" },
  { nl: "je hebt gelijk", en: "you're right", context: "conceding a point" },
  { nl: "ja, maar", en: "yes, but", context: "polite counterpoint" },
  { nl: "ik snap wat je bedoelt", en: "I get what you mean", context: "showing understanding before objecting" },
  { nl: "dat hangt ervan af", en: "that depends", context: "avoiding a flat yes or no" },
  // structuring what you say
  { nl: "om te beginnen", en: "to begin with", context: "starting a list of points" },
  { nl: "aan de ene kant, aan de andere kant", en: "on the one hand, on the other hand", context: "weighing two sides" },
  { nl: "bovendien", en: "what's more / moreover", context: "adding an argument" },
  { nl: "kortom", en: "in short", context: "summing up" },
  { nl: "ten slotte", en: "finally", context: "closing a list or a story" },
  { nl: "bijvoorbeeld", en: "for example", context: "giving an example" },
  { nl: "hoe dan ook", en: "anyway / in any case", context: "getting back on track" },
  // storytelling glue
  { nl: "op een dag", en: "one day", context: "starting a story" },
  { nl: "toen gebeurde er iets geks", en: "then something odd happened", context: "building suspense" },
  { nl: "het bleek dat", en: "it turned out that", context: "revealing a twist" },
  { nl: "uiteindelijk", en: "in the end / eventually", context: "wrapping up a story" },
  { nl: "tot mijn verbazing", en: "to my surprise", context: "reacting in a story" },
  { nl: "toevallig", en: "by chance", context: "coincidence in a story" },
  { nl: "het was een tijd geleden", en: "it had been a while", context: "reuniting with someone" },
  // hedging & politeness
  { nl: "zou je zo vriendelijk willen zijn om", en: "would you be so kind as to", context: "very polite request" },
  { nl: "het spijt me dat", en: "I'm sorry that", context: "apologising properly" },
  { nl: "ik ben bang dat", en: "I'm afraid that", context: "delivering bad news" },
  { nl: "laat maar zitten", en: "never mind / forget it", context: "dropping a topic" },
  { nl: "hoe bedoel je?", en: "what do you mean?", context: "asking for clarification" },
  // complaining & phone calls
  { nl: "ik wil graag een klacht indienen", en: "I'd like to file a complaint", context: "starting a formal complaint" },
  { nl: "dat is niet wat ik verwacht had", en: "that's not what I expected", context: "product or service missed expectations" },
  { nl: "kunt u dit oplossen?", en: "can you fix this?", context: "asking for action" },
  { nl: "met wie spreek ik?", en: "who am I speaking with?", context: "phone call with a stranger" },
  { nl: "ik bel u terug", en: "I'll call you back", context: "ending a call politely" },
  { nl: "ik bel over", en: "I'm calling about", context: "stating your reason on the phone" },
  { nl: "kan ik een bericht achterlaten?", en: "can I leave a message?", context: "nobody picks up" },
  { nl: "ik verbind u door", en: "I'll put you through", context: "switchboard / reception" },
];
