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

  // ---- B1: opinions & discussion ----
  { nl: "meiner Meinung nach",   en: "in my opinion",                     context: "opening a point in a discussion" },
  { nl: "ehrlich gesagt",        en: "to be honest",                      context: "before an honest opinion" },
  { nl: "das kommt darauf an",   en: "it depends",                        context: "when there's no simple answer" },
  { nl: "einerseits … andererseits", en: "on the one hand … on the other", context: "weighing two sides" },
  { nl: "ich würde sagen",       en: "I would say",                       context: "softening an opinion" },
  { nl: "ich bin mir nicht sicher", en: "I'm not sure",                   context: "hedging" },
  { nl: "das sehe ich genauso",  en: "I see it the same way",             context: "agreeing" },
  { nl: "da stimme ich dir zu",  en: "I agree with you there",            context: "agreeing" },
  { nl: "da bin ich anderer Meinung", en: "I disagree there",             context: "polite disagreement" },
  { nl: "was meinst du dazu?",   en: "what do you think about it?",       context: "asking for an opinion" },
  { nl: "das ist mir egal",      en: "I don't mind / I don't care",       context: "no preference; can sound blunt" },
  { nl: "im Grunde genommen",    en: "basically",                         context: "summing up" },
  { nl: "auf jeden Fall",        en: "definitely / in any case",          context: "strong agreement or certainty" },
  { nl: "auf keinen Fall",       en: "no way / under no circumstances",   context: "firm refusal" },
  { nl: "wie gesagt",            en: "as I said",                         context: "repeating a point" },
  { nl: "das heißt",             en: "that means / in other words",       context: "clarifying (abbr. d. h.)" },
  { nl: "es geht um …",          en: "it's about …",                      context: "stating the topic" },
  { nl: "ich habe den Eindruck, dass …", en: "I have the impression that …", context: "careful judgement" },

  // ---- B1: storytelling glue ----
  { nl: "es stellte sich heraus, dass …", en: "it turned out that …",     context: "telling a story, news" },
  { nl: "auf einmal",            en: "suddenly",                          context: "a surprise in a story" },
  { nl: "zum Glück",             en: "luckily",                           context: "good luck in a story" },
  { nl: "nach und nach",         en: "little by little",                  context: "gradual change" },
  { nl: "vor kurzem",            en: "recently",                          context: "recent past" },
  { nl: "am Anfang … am Ende",   en: "at first … in the end",             context: "structuring a story" },
  { nl: "das lohnt sich",        en: "it's worth it",                     context: "recommending something" },

  // ---- B1: phone & appointments ----
  { nl: "ich rufe wegen … an",   en: "I'm calling about …",               context: "opening a phone call" },
  { nl: "könnten Sie mich bitte zurückrufen?", en: "could you call me back, please?", context: "leaving a message" },
  { nl: "kann ich eine Nachricht hinterlassen?", en: "can I leave a message?", context: "person not available" },
  { nl: "entschuldigen Sie die Störung", en: "sorry to disturb you",      context: "calling or interrupting" },
  { nl: "ich hätte gern einen Termin", en: "I'd like an appointment",     context: "booking at the doctor, authority" },
  { nl: "geht es auch später?",  en: "would later work too?",             context: "negotiating a time" },

  // ---- B1: polite complaints & apologies ----
  { nl: "ich möchte mich beschweren", en: "I'd like to make a complaint", context: "formal complaint" },
  { nl: "das geht so nicht",     en: "that won't do",                     context: "firm but polite complaint" },
  { nl: "ich bin damit nicht zufrieden", en: "I'm not satisfied with it", context: "complaint to a shop or landlord" },
  { nl: "könnten Sie das bitte prüfen?", en: "could you check that, please?", context: "polite request to fix something" },
  { nl: "tut mir leid, dass ich zu spät bin", en: "sorry I'm late",        context: "arriving late" },
  { nl: "ich kümmere mich darum", en: "I'll take care of it",             context: "taking responsibility" },

  // ---- B1: suggestions ----
  { nl: "wie wäre es mit …?",    en: "how about …?",                      context: "making a suggestion" },
  { nl: "hast du Lust, … zu …?", en: "do you fancy …ing?",                context: "inviting someone" },
  { nl: "keine Sorge",           en: "don't worry",                       context: "reassuring someone" },
];
