// Real-life Amsterdam scenarios. Read them aloud, shadow the audio, then try
// the production versions in the study session.
window.__DECK.nl.SCENARIOS = [
  {
    id: "sc_cafe",
    title: "Ordering at a café",
    icon: "☕",
    setting:
      "You walk into a small café in De Pijp. It's Tuesday morning, the place is half-full, and the barista looks up as you approach the counter.",
    dialogue: [
      { speaker: "Barista", nl: "Goedemorgen! Wat wordt het?", en: "Good morning! What'll it be?" },
      { speaker: "You",     nl: "Goedemorgen. Een koffie verkeerd, alsjeblieft.", en: "Good morning. A latte, please." },
      { speaker: "Barista", nl: "Voor hier of mee?", en: "For here or to take away?" },
      { speaker: "You",     nl: "Voor hier, graag.", en: "For here, please." },
      { speaker: "Barista", nl: "Wil je er iets bij? We hebben verse appeltaart.", en: "Want anything with it? We have fresh apple pie." },
      { speaker: "You",     nl: "Doe maar een stukje appeltaart.", en: "Sure, a slice of apple pie." },
      { speaker: "Barista", nl: "Komt eraan. Dat is zes vijftig.", en: "Coming right up. That's six fifty." },
      { speaker: "You",     nl: "Mag ik pinnen?", en: "May I pay by card?" },
      { speaker: "Barista", nl: "Natuurlijk. Hier is de pinautomaat.", en: "Of course. Here's the card reader." },
      { speaker: "You",     nl: "Bedankt, fijne dag!", en: "Thanks, have a nice day!" },
    ],
    notes: [
      "'Doe maar' literally = 'do/make just' but functions as a casual 'sure, give me'. Very Dutch.",
      "'Voor hier of mee?' is the standard takeaway question. 'Mee' = 'with you / to take along'.",
      "'Komt eraan' = 'it's coming' — what staff say to acknowledge an order.",
    ],
  },
  {
    id: "sc_restaurant",
    title: "Restaurant reservation by phone",
    icon: "🍽️",
    setting:
      "You want to take colleagues out Friday night for borrel + dinner. You phone a small restaurant in the Jordaan.",
    dialogue: [
      { speaker: "Host",    nl: "Restaurant De Reiger, met Sanne.", en: "Restaurant De Reiger, this is Sanne." },
      { speaker: "You",     nl: "Hoi, ik wil graag reserveren voor vrijdagavond.", en: "Hi, I'd like to make a reservation for Friday evening." },
      { speaker: "Host",    nl: "Natuurlijk. Voor hoeveel personen?", en: "Of course. For how many people?" },
      { speaker: "You",     nl: "Voor zes personen, om half acht.", en: "For six people, at half past seven." },
      { speaker: "Host",    nl: "Even kijken... half acht is volgeboekt. Acht uur lukt wel.", en: "Let me check... seven thirty is fully booked. Eight works." },
      { speaker: "You",     nl: "Acht uur is prima.", en: "Eight is fine." },
      { speaker: "Host",    nl: "Op welke naam?", en: "Under what name?" },
      { speaker: "You",     nl: "Op naam van Hameed.", en: "Under the name Hameed." },
      { speaker: "Host",    nl: "Genoteerd. Tot vrijdag!", en: "Got it. See you Friday!" },
    ],
    notes: [
      "Dutch tells time relative to the half hour: 'half acht' = 7:30 (literally half-on-the-way-to-eight). Trips up everyone the first month.",
      "'Even kijken' = 'let me just look'. Listen for that 'even' — softens almost any verb.",
      "When asked your name, repeat 'Op naam van [X]' — 'under the name of [X]'.",
    ],
  },
  {
    id: "sc_supermarket",
    title: "At Albert Heijn",
    icon: "🛒",
    setting:
      "You're at the AH around the corner. You can't find olive oil and the self-checkout flagged your bag.",
    dialogue: [
      { speaker: "You",       nl: "Pardon, waar staat de olijfolie?", en: "Excuse me, where's the olive oil?" },
      { speaker: "Employee",  nl: "Schap zeven, naast de azijn.", en: "Aisle seven, next to the vinegar." },
      { speaker: "You",       nl: "Bedankt!", en: "Thanks!" },
      { speaker: "Self-checkout", nl: "Onverwacht artikel in tas. Vraag medewerker.", en: "Unexpected item in bag. Call an attendant." },
      { speaker: "You",       nl: "Sorry, mijn kassa heeft een melding.", en: "Sorry, my checkout has a notification." },
      { speaker: "Employee",  nl: "Geen probleem, ik kom even helpen.", en: "No problem, I'll come help." },
      { speaker: "Employee",  nl: "Het is opgelost. Fijne dag verder!", en: "It's sorted. Have a nice rest of your day!" },
      { speaker: "You",       nl: "Jij ook, dank je wel!", en: "You too, thanks!" },
    ],
    notes: [
      "'Schap' = aisle/shelf section. AH staff respond with the schap number.",
      "'Fijne dag verder' = 'have a nice rest of your day' — the standard parting from any Dutch service worker. Memorise as a unit.",
      "'Jij ook' = 'you too' — the universal mirror response.",
    ],
  },
  {
    id: "sc_tram",
    title: "Catching the tram to work",
    icon: "🚊",
    setting:
      "Morning commute. You're not sure if this tram goes to your stop, so you ask the driver before boarding.",
    dialogue: [
      { speaker: "You",     nl: "Goedemorgen, gaat deze tram naar Rembrandtplein?", en: "Good morning, does this tram go to Rembrandtplein?" },
      { speaker: "Driver",  nl: "Ja, de halte hierna.", en: "Yes, the stop after this one." },
      { speaker: "You",     nl: "Top, dank u.", en: "Great, thanks." },
      { speaker: "Announcement", nl: "Volgende halte: Rembrandtplein.", en: "Next stop: Rembrandtplein." },
      { speaker: "You",     nl: "Pardon, mag ik er even langs?", en: "Excuse me, may I get past?" },
      { speaker: "Passenger", nl: "Natuurlijk, ga je gang.", en: "Of course, go ahead." },
    ],
    notes: [
      "'Mag ik er even langs?' is THE phrase for getting past someone — bus, tram, sidewalk. Memorise verbatim.",
      "'Ga je gang' = 'go ahead / be my guest'. Gracious acknowledgment.",
      "Don't forget to tap out — 'uitchecken' — when you exit, or you'll be charged the maximum fare.",
    ],
  },
  {
    id: "sc_standup",
    title: "Tech standup at the office",
    icon: "💻",
    setting:
      "9:30 standup at your startup. Your team mostly speaks English but two engineers prefer Dutch. You try a Dutch update.",
    dialogue: [
      { speaker: "Lead",    nl: "Goedemorgen iedereen. Hameed, jij eerst?", en: "Morning everyone. Hameed, you first?" },
      { speaker: "You",     nl: "Hoi! Gisteren heb ik de nieuwe API afgerond.", en: "Hi! Yesterday I finished the new API." },
      { speaker: "You",     nl: "Vandaag werk ik aan de tests.", en: "Today I'm working on the tests." },
      { speaker: "You",     nl: "Geen blockers.", en: "No blockers." },
      { speaker: "Lead",    nl: "Top. Heb je hulp nodig met de tests?", en: "Great. Do you need help with the tests?" },
      { speaker: "You",     nl: "Misschien later, ik laat het weten.", en: "Maybe later, I'll let you know." },
      { speaker: "Lead",    nl: "Prima, volgende.", en: "Sounds good, next." },
    ],
    notes: [
      "Note the V2 rule in action: 'Gisteren heb ik...' (Yesterday HAVE I...). When you front time, the verb sticks to position 2.",
      "'Top' is heavily used in Dutch offices — 'great / awesome / cool'. Short, friendly, ubiquitous.",
      "Most Amsterdam tech offices code-switch fluidly. Dropping in Dutch sentences signals effort and is appreciated.",
    ],
  },
  {
    id: "sc_directions",
    title: "Asking for directions",
    icon: "🧭",
    setting:
      "You're trying to find a friend's place near Westerpark. Your phone died.",
    dialogue: [
      { speaker: "You",       nl: "Pardon, weet u waar de Hugo de Grootkade is?", en: "Excuse me, do you know where Hugo de Grootkade is?" },
      { speaker: "Passerby",  nl: "Ja, dat is hier vlakbij. Loop rechtdoor en sla bij de tramhalte links af.", en: "Yes, that's just nearby. Walk straight ahead and turn left at the tram stop." },
      { speaker: "You",       nl: "Is het ver?", en: "Is it far?" },
      { speaker: "Passerby",  nl: "Nee, vijf minuten lopen.", en: "No, a five-minute walk." },
      { speaker: "You",       nl: "Heel fijn, hartelijk dank!", en: "Wonderful, thank you very much!" },
      { speaker: "Passerby",  nl: "Geen dank, succes!", en: "Don't mention it, good luck!" },
    ],
    notes: [
      "'Vlakbij' is the slightly more colloquial sibling of 'dichtbij' — both mean 'nearby'.",
      "'Sla [direction] af' = 'turn [direction]'. Note the separable verb 'afslaan' splits.",
      "'Geen dank' = literally 'no thanks (needed)'. Soft, warm reply when someone thanks you.",
    ],
  },
  {
    id: "sc_pharmacy",
    title: "At the pharmacy (apotheek)",
    icon: "💊",
    setting:
      "You've got a sore throat and need something OTC. The Dutch pharmacy system can feel rule-bound but the staff are helpful.",
    dialogue: [
      { speaker: "Pharmacist", nl: "Goedemiddag, kan ik u helpen?", en: "Good afternoon, may I help you?" },
      { speaker: "You",        nl: "Hoi, ik heb keelpijn. Wat raadt u aan?", en: "Hi, I have a sore throat. What do you recommend?" },
      { speaker: "Pharmacist", nl: "Sinds wanneer heeft u klachten?", en: "Since when have you had symptoms?" },
      { speaker: "You",        nl: "Sinds gisteren.", en: "Since yesterday." },
      { speaker: "Pharmacist", nl: "Ik zou deze zuigtabletten proberen, en veel water drinken.", en: "I'd try these lozenges and drink a lot of water." },
      { speaker: "You",        nl: "Heeft u ook iets voor verkoudheid?", en: "Do you also have something for a cold?" },
      { speaker: "Pharmacist", nl: "Ja, neusspray of paracetamol.", en: "Yes, nasal spray or paracetamol." },
      { speaker: "You",        nl: "Doe maar de zuigtabletten en paracetamol.", en: "I'll take the lozenges and paracetamol." },
    ],
    notes: [
      "Dutch healthcare uses 'klachten' (complaints/symptoms) as the catch-all for what you're feeling.",
      "'Wat raadt u aan?' = 'What do you recommend?' Use it everywhere — pharmacy, restaurants, shops.",
      "'Doe maar X' is your friendly shorthand for 'I'll take X' when ordering anything.",
    ],
  },
  {
    id: "sc_borrel",
    title: "Friday borrel with colleagues",
    icon: "🍻",
    setting:
      "Friday 5pm. Your team gathers in the kitchen for borrel. You walk in.",
    dialogue: [
      { speaker: "Colleague", nl: "Hé, daar ben je! Een biertje?", en: "Hey, there you are! A beer?" },
      { speaker: "You",       nl: "Ja, lekker! Wat een drukke week.", en: "Yes, lovely! What a busy week." },
      { speaker: "Colleague", nl: "Heb jij plannen voor het weekend?", en: "Got plans for the weekend?" },
      { speaker: "You",       nl: "Niet veel. Misschien fietsen langs de Amstel als het mooi weer is.", en: "Not much. Maybe cycling along the Amstel if the weather's nice." },
      { speaker: "Colleague", nl: "Klinkt goed. Wij gaan zaterdag naar de markt.", en: "Sounds good. We're going to the market Saturday." },
      { speaker: "You",       nl: "Welke markt?", en: "Which market?" },
      { speaker: "Colleague", nl: "Albert Cuyp. Ga je mee?", en: "Albert Cuyp. Coming with?" },
      { speaker: "You",       nl: "Misschien wel, ik laat het je weten!", en: "Maybe so, I'll let you know!" },
      { speaker: "Colleague", nl: "Top! Proost.", en: "Awesome! Cheers." },
    ],
    notes: [
      "'Wat een drukke week' = 'What a busy week' — the universal Friday-borrel opener. Reusable.",
      "'Ga je mee?' = 'Coming with?' — separable verb 'meegaan' splits.",
      "'Proost' (cheers) — make eye contact when you clink. The Dutch take this seriously.",
    ],
  },
  {
    id: "sc_bike",
    title: "Bike shop — flat tyre",
    icon: "🚲",
    setting:
      "Your back tyre went flat on the way to work. You wheel the bike to a fietsenmaker.",
    dialogue: [
      { speaker: "Mechanic", nl: "Wat is er aan de hand?", en: "What's the matter?" },
      { speaker: "You",      nl: "Ik heb een lekke band. De achterband.", en: "I have a flat tyre. The back tyre." },
      { speaker: "Mechanic", nl: "Even kijken... ja, een gat. Wil je hem geplakt of een nieuwe band?", en: "Let me look... yes, a hole. Do you want it patched or a new tyre?" },
      { speaker: "You",      nl: "Geplakt is prima. Hoe lang duurt het?", en: "Patched is fine. How long does it take?" },
      { speaker: "Mechanic", nl: "Ongeveer een halfuurtje.", en: "About half an hour." },
      { speaker: "You",      nl: "En wat kost dat?", en: "And what does that cost?" },
      { speaker: "Mechanic", nl: "Vijftien euro.", en: "Fifteen euros." },
      { speaker: "You",      nl: "Doen.", en: "Do it." },
    ],
    notes: [
      "'Wat is er aan de hand?' = 'What's the matter / what's going on?' — universal opener.",
      "'Lekke band' = flat tyre. 'Lek' literally = 'leaky'. You will use this phrase.",
      "'Doen.' on its own = 'Do it / go for it' — confident, casual yes.",
    ],
  },
  {
    id: "sc_landlord",
    title: "Reporting an issue to your landlord",
    icon: "🔧",
    setting:
      "The boiler made a strange noise overnight and now there's no hot water. You call.",
    dialogue: [
      { speaker: "Landlord", nl: "Hallo, met Pieter.", en: "Hello, this is Pieter." },
      { speaker: "You",      nl: "Hoi Pieter, met Hameed. Ik heb een probleem met de boiler.", en: "Hi Pieter, this is Hameed. I have a problem with the boiler." },
      { speaker: "Landlord", nl: "Wat is er aan de hand?", en: "What's the matter?" },
      { speaker: "You",      nl: "Er is geen warm water. En vannacht maakte hij een raar geluid.", en: "There's no hot water. And it made a strange noise last night." },
      { speaker: "Landlord", nl: "Wanneer is het begonnen?", en: "When did it start?" },
      { speaker: "You",      nl: "Vanochtend.", en: "This morning." },
      { speaker: "Landlord", nl: "Ik stuur een monteur. Ben je vandaag thuis?", en: "I'll send a technician. Are you home today?" },
      { speaker: "You",      nl: "Vanmiddag wel.", en: "This afternoon, yes." },
      { speaker: "Landlord", nl: "Tussen twee en vier komt iemand.", en: "Someone will come between two and four." },
      { speaker: "You",      nl: "Top, dank je wel!", en: "Great, thanks!" },
    ],
    notes: [
      "Phone openers are formulaic: 'met [name]' = 'this is [name] speaking'. Both sides say it.",
      "'Vanochtend / vanmiddag / vanavond' = this morning / this afternoon / this evening. Time-of-day prefixes you'll use daily.",
    ],
  },
  // === Slot for you to add your own scenarios ===
  // Drop in your real Amsterdam life: your team's specific standup phrases,
  // your barista's actual menu, your gym sign-in dialogue, etc. The shape:
  // {
  //   id: "sc_yours",
  //   title: "...",
  //   icon: "🎯",
  //   setting: "Context paragraph.",
  //   dialogue: [
  //     { speaker: "...", nl: "...", en: "..." },
  //   ],
  //   notes: ["..."],
  // },
];
