// Real-life Berlin scenarios. Read them aloud, shadow the audio, then try
// the production versions in the study session. (`nl` = target-language slot.)
window.__DECK.de.SCENARIOS = [
  {
    id: "sc_cafe",
    title: "Ordering at a café",
    icon: "☕",
    setting:
      "You walk into a small café in Kreuzberg. It's Tuesday morning, the place is half-full, and the barista looks up as you approach the counter.",
    dialogue: [
      { speaker: "Barista", nl: "Guten Morgen! Was darf's sein?", en: "Good morning! What'll it be?" },
      { speaker: "You",     nl: "Guten Morgen. Einen Milchkaffee, bitte.", en: "Good morning. A latte, please." },
      { speaker: "Barista", nl: "Für hier oder zum Mitnehmen?", en: "For here or to take away?" },
      { speaker: "You",     nl: "Für hier, bitte.", en: "For here, please." },
      { speaker: "Barista", nl: "Möchten Sie etwas dazu? Wir haben frischen Apfelkuchen.", en: "Want anything with it? We have fresh apple pie." },
      { speaker: "You",     nl: "Ein Stück Apfelkuchen, gerne.", en: "A slice of apple pie, sure." },
      { speaker: "Barista", nl: "Kommt sofort. Das macht sechs Euro fünfzig.", en: "Coming right up. That's six fifty." },
      { speaker: "You",     nl: "Kann ich mit Karte zahlen?", en: "May I pay by card?" },
      { speaker: "Barista", nl: "Klar. Das Kartengerät ist hier.", en: "Sure. The card reader is here." },
      { speaker: "You",     nl: "Danke, schönen Tag noch!", en: "Thanks, have a nice day!" },
    ],
    notes: [
      "'Was darf's sein?' = 'what'll it be?' — the standard friendly counter opener.",
      "'Für hier oder zum Mitnehmen?' is the standard for-here-or-takeaway question.",
      "'Kommt sofort' = 'coming right up' — what staff say to acknowledge an order. Heads up: plenty of Berlin cafés are 'nur Bargeld' (cash only), so ask before you order.",
    ],
  },
  {
    id: "sc_restaurant",
    title: "Restaurant reservation by phone",
    icon: "🍽️",
    setting:
      "You want to take colleagues out Friday night for a Feierabend beer + dinner. You phone a small restaurant in Prenzlauer Berg.",
    dialogue: [
      { speaker: "Host",    nl: "Restaurant Zur Linde, guten Tag.", en: "Restaurant Zur Linde, hello." },
      { speaker: "You",     nl: "Guten Tag, ich möchte gern für Freitagabend reservieren.", en: "Hello, I'd like to make a reservation for Friday evening." },
      { speaker: "Host",    nl: "Gern. Für wie viele Personen?", en: "Of course. For how many people?" },
      { speaker: "You",     nl: "Für sechs Personen, um halb acht.", en: "For six people, at half past seven." },
      { speaker: "Host",    nl: "Einen Moment... halb acht ist ausgebucht. Acht Uhr würde gehen.", en: "One moment... seven thirty is fully booked. Eight would work." },
      { speaker: "You",     nl: "Acht Uhr ist prima.", en: "Eight is fine." },
      { speaker: "Host",    nl: "Auf welchen Namen?", en: "Under what name?" },
      { speaker: "You",     nl: "Auf den Namen Hameed.", en: "Under the name Hameed." },
      { speaker: "Host",    nl: "Notiert. Bis Freitag!", en: "Got it. See you Friday!" },
    ],
    notes: [
      "German tells time relative to the half hour: 'halb acht' = 7:30 (literally half-on-the-way-to-eight). Same logic as Dutch, and it trips up everyone the first month.",
      "'Einen Moment' / 'Moment mal' = 'just a sec'. The particle 'mal' softens almost any request.",
      "When asked your name, answer 'Auf den Namen [X]'.",
    ],
  },
  {
    id: "sc_supermarket",
    title: "At the REWE",
    icon: "🛒",
    setting:
      "You're at the REWE around the corner. You can't find the olive oil and the self-checkout flagged your bag.",
    dialogue: [
      { speaker: "You",       nl: "Entschuldigung, wo steht das Olivenöl?", en: "Excuse me, where's the olive oil?" },
      { speaker: "Employee",  nl: "Gang sieben, neben dem Essig.", en: "Aisle seven, next to the vinegar." },
      { speaker: "You",       nl: "Danke!", en: "Thanks!" },
      { speaker: "Self-checkout", nl: "Unerwarteter Artikel im Einpackbereich. Bitte Personal rufen.", en: "Unexpected item in bagging area. Please call staff." },
      { speaker: "You",       nl: "Entschuldigung, meine Kasse zeigt eine Meldung.", en: "Sorry, my checkout has a notification." },
      { speaker: "Employee",  nl: "Kein Problem, ich komme kurz.", en: "No problem, I'll come over." },
      { speaker: "Employee",  nl: "Erledigt. Schönen Tag noch!", en: "Done. Have a nice rest of your day!" },
      { speaker: "You",       nl: "Danke, gleichfalls!", en: "Thanks, likewise!" },
    ],
    notes: [
      "'Gang' = aisle. Staff answer with the 'Gang' number.",
      "'Schönen Tag noch' = 'have a nice rest of your day' — the standard parting from any German service worker. Memorise as a unit.",
      "'Gleichfalls' = 'likewise' — the tidy mirror reply. And bag your own groceries fast: German cashiers scan at speed.",
    ],
  },
  {
    id: "sc_tram",
    title: "Catching the tram to work",
    icon: "🚊",
    setting:
      "Morning commute. You're not sure if this tram goes to your stop, so you ask the driver before boarding.",
    dialogue: [
      { speaker: "You",     nl: "Guten Morgen, fährt diese Tram zum Alexanderplatz?", en: "Good morning, does this tram go to Alexanderplatz?" },
      { speaker: "Driver",  nl: "Ja, die nächste Haltestelle.", en: "Yes, the next stop." },
      { speaker: "You",     nl: "Super, danke.", en: "Great, thanks." },
      { speaker: "Announcement", nl: "Nächster Halt: Alexanderplatz.", en: "Next stop: Alexanderplatz." },
      { speaker: "You",     nl: "Entschuldigung, darf ich mal durch?", en: "Excuse me, may I get past?" },
      { speaker: "Passenger", nl: "Klar, nur zu.", en: "Of course, go ahead." },
    ],
    notes: [
      "'Darf ich mal durch?' is THE phrase for getting past someone — U-Bahn, tram, sidewalk. Memorise verbatim.",
      "'Nur zu' = 'go ahead / be my guest'. Gracious acknowledgment.",
      "Keep your ticket handy: inspectors ('Kontrolleure') board in plain clothes, and the fine for 'Schwarzfahren' (riding without a valid ticket) is steep.",
    ],
  },
  {
    id: "sc_standup",
    title: "Tech standup at the office",
    icon: "💻",
    setting:
      "9:30 standup at your startup. Your team mostly speaks English but two engineers prefer German. You try a German update.",
    dialogue: [
      { speaker: "Lead",    nl: "Guten Morgen zusammen. Hameed, du zuerst?", en: "Morning everyone. Hameed, you first?" },
      { speaker: "You",     nl: "Hi! Gestern habe ich die neue API fertiggemacht.", en: "Hi! Yesterday I finished the new API." },
      { speaker: "You",     nl: "Heute arbeite ich an den Tests.", en: "Today I'm working on the tests." },
      { speaker: "You",     nl: "Keine Blocker.", en: "No blockers." },
      { speaker: "Lead",    nl: "Super. Brauchst du Hilfe bei den Tests?", en: "Great. Do you need help with the tests?" },
      { speaker: "You",     nl: "Vielleicht später, ich sag Bescheid.", en: "Maybe later, I'll let you know." },
      { speaker: "Lead",    nl: "Klingt gut, weiter.", en: "Sounds good, next." },
    ],
    notes: [
      "Note the V2 rule in action: 'Gestern habe ich...' (Yesterday HAVE I...). When you front time, the verb sticks to position 2 — exactly like Dutch.",
      "'Super' and 'klingt gut' are the workhorses of a German office — friendly, quick, everywhere.",
      "Most Berlin tech teams code-switch fluidly. Dropping in German sentences signals effort and is appreciated.",
    ],
  },
  {
    id: "sc_directions",
    title: "Asking for directions",
    icon: "🧭",
    setting:
      "You're trying to find a friend's place near Volkspark Friedrichshain. Your phone died.",
    dialogue: [
      { speaker: "You",       nl: "Entschuldigung, wissen Sie, wo die Bötzowstraße ist?", en: "Excuse me, do you know where Bötzowstraße is?" },
      { speaker: "Passerby",  nl: "Ja, das ist ganz in der Nähe. Gehen Sie geradeaus und biegen Sie an der Ampel links ab.", en: "Yes, that's very close. Go straight ahead and turn left at the traffic light." },
      { speaker: "You",       nl: "Ist es weit?", en: "Is it far?" },
      { speaker: "Passerby",  nl: "Nein, fünf Minuten zu Fuß.", en: "No, a five-minute walk." },
      { speaker: "You",       nl: "Sehr schön, vielen Dank!", en: "Wonderful, thank you very much!" },
      { speaker: "Passerby",  nl: "Gern geschehen, viel Erfolg!", en: "You're welcome, good luck!" },
    ],
    notes: [
      "'Ganz in der Nähe' = 'very nearby'. 'in der Nähe' is your everyday 'close by'.",
      "'Biegen Sie links ab' = 'turn left'. Note the separable verb 'abbiegen' splits.",
      "'Gern geschehen' = 'you're welcome' — the warm, standard reply when someone thanks you.",
    ],
  },
  {
    id: "sc_pharmacy",
    title: "At the pharmacy (Apotheke)",
    icon: "💊",
    setting:
      "You've got a sore throat and need something OTC. The German pharmacy system can feel rule-bound but the staff are helpful.",
    dialogue: [
      { speaker: "Pharmacist", nl: "Guten Tag, kann ich Ihnen helfen?", en: "Good afternoon, may I help you?" },
      { speaker: "You",        nl: "Hallo, ich habe Halsschmerzen. Was können Sie empfehlen?", en: "Hi, I have a sore throat. What do you recommend?" },
      { speaker: "Pharmacist", nl: "Seit wann haben Sie Beschwerden?", en: "Since when have you had symptoms?" },
      { speaker: "You",        nl: "Seit gestern.", en: "Since yesterday." },
      { speaker: "Pharmacist", nl: "Ich würde diese Lutschtabletten nehmen und viel Wasser trinken.", en: "I'd take these lozenges and drink a lot of water." },
      { speaker: "You",        nl: "Haben Sie auch etwas gegen Erkältung?", en: "Do you also have something for a cold?" },
      { speaker: "Pharmacist", nl: "Ja, Nasenspray oder Paracetamol.", en: "Yes, nasal spray or paracetamol." },
      { speaker: "You",        nl: "Dann nehme ich die Lutschtabletten und Paracetamol.", en: "Then I'll take the lozenges and paracetamol." },
    ],
    notes: [
      "German healthcare uses 'Beschwerden' (complaints/symptoms) as the catch-all for what you're feeling.",
      "'Was können Sie empfehlen?' = 'What do you recommend?' Use it everywhere — pharmacy, restaurants, shops.",
      "Note: even paracetamol comes only from the 'Apotheke', not the supermarket. They close Sundays — look for the 'Notdienst' (emergency rota) sign.",
    ],
  },
  {
    id: "sc_borrel",
    title: "Friday Feierabend beer with colleagues",
    icon: "🍻",
    setting:
      "Friday 5pm. Your team gathers in the kitchen for a Feierabend beer. You walk in.",
    dialogue: [
      { speaker: "Colleague", nl: "Hey, da bist du ja! Ein Bier?", en: "Hey, there you are! A beer?" },
      { speaker: "You",       nl: "Ja, gerne! Was für eine stressige Woche.", en: "Yes, lovely! What a stressful week." },
      { speaker: "Colleague", nl: "Hast du Pläne fürs Wochenende?", en: "Got plans for the weekend?" },
      { speaker: "You",       nl: "Nicht viel. Vielleicht am Kanal entlang radeln, wenn das Wetter schön ist.", en: "Not much. Maybe cycling along the canal if the weather's nice." },
      { speaker: "Colleague", nl: "Klingt gut. Wir gehen am Samstag auf den Markt.", en: "Sounds good. We're going to the market on Saturday." },
      { speaker: "You",       nl: "Welchen Markt?", en: "Which market?" },
      { speaker: "Colleague", nl: "Am Maybachufer, den Türkenmarkt. Kommst du mit?", en: "At Maybachufer, the Turkish market. Coming along?" },
      { speaker: "You",       nl: "Vielleicht, ich sag dir Bescheid!", en: "Maybe, I'll let you know!" },
      { speaker: "Colleague", nl: "Super! Prost.", en: "Awesome! Cheers." },
    ],
    notes: [
      "'Was für eine stressige Woche' = 'What a stressful week' — the universal Friday-Feierabend opener. Reusable.",
      "'Kommst du mit?' = 'Coming along?' — separable verb 'mitkommen' splits.",
      "'Prost' (cheers) — make eye contact when you clink. Germans take this seriously; skipping the eye contact is jokingly said to bring seven years of bad luck.",
    ],
  },
  {
    id: "sc_bike",
    title: "Bike shop — flat tyre",
    icon: "🚲",
    setting:
      "Your back tyre went flat on the way to work. You wheel the bike to a Fahrradladen.",
    dialogue: [
      { speaker: "Mechanic", nl: "Was ist los?", en: "What's up?" },
      { speaker: "You",      nl: "Ich habe einen Platten. Das Hinterrad.", en: "I have a flat. The back tyre." },
      { speaker: "Mechanic", nl: "Mal schauen... ja, ein Loch. Willst du ihn geflickt oder einen neuen Reifen?", en: "Let me look... yes, a hole. Do you want it patched or a new tyre?" },
      { speaker: "You",      nl: "Geflickt ist okay. Wie lange dauert das?", en: "Patched is fine. How long does it take?" },
      { speaker: "Mechanic", nl: "Ungefähr eine halbe Stunde.", en: "About half an hour." },
      { speaker: "You",      nl: "Und was kostet das?", en: "And what does that cost?" },
      { speaker: "Mechanic", nl: "Fünfzehn Euro.", en: "Fifteen euros." },
      { speaker: "You",      nl: "Machen wir.", en: "Let's do it." },
    ],
    notes: [
      "'Was ist los?' = 'what's up / what's the matter?' — universal opener.",
      "'einen Platten haben' = to have a flat tyre. 'der Platten' is the everyday word — you will use it.",
      "'Machen wir' = 'let's do it' — a confident, casual yes.",
    ],
  },
  {
    id: "sc_landlord",
    title: "Reporting an issue to your landlord",
    icon: "🔧",
    setting:
      "The heating made a strange noise overnight and now there's no hot water. You call.",
    dialogue: [
      { speaker: "Landlord", nl: "Hallo, Schulz.", en: "Hello, Schulz speaking." },
      { speaker: "You",      nl: "Hallo Herr Schulz, hier ist Hameed. Ich habe ein Problem mit der Heizung.", en: "Hello Mr Schulz, this is Hameed. I have a problem with the heating." },
      { speaker: "Landlord", nl: "Was ist denn los?", en: "What's the matter, then?" },
      { speaker: "You",      nl: "Es gibt kein warmes Wasser. Und heute Nacht hat sie ein komisches Geräusch gemacht.", en: "There's no hot water. And last night it made a strange noise." },
      { speaker: "Landlord", nl: "Wann hat es angefangen?", en: "When did it start?" },
      { speaker: "You",      nl: "Heute Morgen.", en: "This morning." },
      { speaker: "Landlord", nl: "Ich schicke einen Techniker. Sind Sie heute zu Hause?", en: "I'll send a technician. Are you home today?" },
      { speaker: "You",      nl: "Heute Nachmittag schon.", en: "This afternoon, yes." },
      { speaker: "Landlord", nl: "Zwischen zwei und vier kommt jemand.", en: "Someone will come between two and four." },
      { speaker: "You",      nl: "Super, danke schön!", en: "Great, thanks!" },
    ],
    notes: [
      "Germans answer the phone with their surname: 'Hallo, Schulz.' You lead with 'hier ist [name]'.",
      "'heute Morgen / heute Nachmittag / heute Abend' = this morning / afternoon / evening. Time-of-day phrases you'll use daily.",
      "Landlord and tenant usually stay on formal 'Sie'. By law, landlords must fix heating faults promptly — a persistent outage can justify a rent reduction ('Mietminderung').",
    ],
  },
  // === Slot for you to add your own scenarios ===
  // Drop in your real Berlin life: your team's specific standup phrases,
  // your Späti run, your gym sign-in dialogue, etc. The shape:
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
