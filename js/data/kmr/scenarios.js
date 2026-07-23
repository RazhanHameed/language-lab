// Real-life Kurdistan scenarios (Kurmanji / Northern Kurdish, Latin Hawar
// script). Read them aloud, shadow the audio, then try the production versions
// in the study session. (`nl` = target-language slot, here Kurmanji Kurdish.)
window.__DECK.kmr.SCENARIOS = [
  {
    id: "sc_cafe",
    title: "Ordering tea at a çayxane",
    icon: "☕",
    setting:
      "You step into a busy çayxane (tea house) in the old bazaar of Amed. Older men are playing dominoes, the samovar is steaming, and a young waiter (garson) comes over with a tray.",
    dialogue: [
      { speaker: "Waiter", nl: "Bi xêr hatî! Ez çi ji te re bînim?", en: "Welcome! What can I bring you?" },
      { speaker: "You",    nl: "Spas. Çayekê, ji kerema xwe.", en: "Thanks. One tea, please." },
      { speaker: "Waiter", nl: "Çaya te tûj be an sivik?", en: "Do you want your tea strong or light?" },
      { speaker: "You",    nl: "Piçekî tûj be, spas.", en: "A bit strong, thanks." },
      { speaker: "Waiter", nl: "Şekir jî ji te re bînim?", en: "Shall I bring you sugar too?" },
      { speaker: "You",    nl: "Erê, du perçe şekir.", en: "Yes, two sugar cubes." },
      { speaker: "Waiter", nl: "Baş e. Kulîçe jî digel dixwazî?", en: "Alright. Do you want some cookies with it?" },
      { speaker: "You",    nl: "Na spas, tenê çay.", en: "No thanks, just the tea." },
      { speaker: "Waiter", nl: "Fermo, xweş bixwî.", en: "Here you are, enjoy it." },
      { speaker: "You",    nl: "Destê te sax, mandî nebî.", en: "Thank you, may you not be tired." },
    ],
    notes: [
      "'Bi xêr hatî' = 'welcome' — the standard greeting when you enter almost any shop or home.",
      "Tea is served in the little tulip glass (îstîkan). Asking for it 'tûj' (strong) or 'sivik' (light) is completely normal.",
      "'Destê te sax' (lit. 'may your hand be healthy') and 'mandî nebî' (may you not be tired) are the everyday thank-yous to anyone who served or worked for you. Note: in a çayxane the tea is often cheap or someone at the next table may quietly pay for you.",
    ],
  },
  {
    id: "sc_restaurant",
    title: "Reserving a table and ordering",
    icon: "🍽️",
    setting:
      "You want to take relatives out for dinner on Friday. You phone a well-known restaurant in the city that is famous for its dolma and kebab.",
    dialogue: [
      { speaker: "Host", nl: "Xwaringeha Nîştiman, fermo.", en: "Nishtiman Restaurant, hello." },
      { speaker: "You",  nl: "Silav, ez dixwazim ji bo êvara înê masekê veqetînim.", en: "Hello, I'd like to reserve a table for Friday evening." },
      { speaker: "Host", nl: "Li ser çavan. Ji bo çend kesan?", en: "With pleasure. For how many people?" },
      { speaker: "You",  nl: "Ji bo heşt kesan, saet heftan.", en: "For eight people, at seven o'clock." },
      { speaker: "Host", nl: "Kêlîkê... saet heft tije ye, neh dibe.", en: "One moment... seven is full, nine would work." },
      { speaker: "You",  nl: "Baş e, saet neh baş e.", en: "Alright, nine is fine." },
      { speaker: "Host", nl: "Bi kîjan navî tomar bikim?", en: "Under what name shall I register it?" },
      { speaker: "You",  nl: "Bi navê Hemîd.", en: "Under the name Hameed." },
      { speaker: "Host", nl: "Dolme û kebaba me jî heye, taze ye.", en: "We also have dolma and kebab, it's fresh." },
      { speaker: "You",  nl: "Gelek baş e, ez ê înê te bibînim.", en: "Very good, see you Friday." },
    ],
    notes: [
      "'Li ser çavan' (lit. 'on my eyes') = 'gladly / with pleasure' — a warm way to say yes to a request.",
      "Reservations for big family groups are normal; hosting relatives generously is a point of pride, and the host usually insists on paying the whole bill.",
      "Dolma (stuffed vegetables and grape leaves) and kebab are the classic dishes to order for a group. Fridays are the big family meal day.",
    ],
  },
  {
    id: "sc_supermarket",
    title: "Shopping in the bazaar",
    icon: "🛒",
    setting:
      "You're in the covered bazaar (qeyserî) looking for spices and a kilo of tomatoes. The shopkeeper (dikandar) greets you from behind his stall.",
    dialogue: [
      { speaker: "You",        nl: "Silav keko, firangoşê te heye?", en: "Hello sir, do you have tomatoes?" },
      { speaker: "Shopkeeper", nl: "Erê fermo, taze ne. Çend kîlo dixwazî?", en: "Yes, here you are, they're fresh. How many kilos do you want?" },
      { speaker: "You",        nl: "Kîloyekê. Kîlo bi çend e?", en: "One kilo. How much is a kilo?" },
      { speaker: "Shopkeeper", nl: "Hezar û pênc sed dînar.", en: "One thousand five hundred dinars." },
      { speaker: "You",        nl: "Piçekî ne biha ye? Kêm bike.", en: "Isn't that a bit expensive? Come down a little." },
      { speaker: "Shopkeeper", nl: "Ji bo te hezar û du sed, ew bihaya dawî ye.", en: "For you, one thousand two hundred, that's the final price." },
      { speaker: "You",        nl: "Baş e. Baharat jî divên me, li ku ne?", en: "Alright. We also need some spices, where are they?" },
      { speaker: "Shopkeeper", nl: "Li dikana tenişt, li cem birayê min.", en: "At the shop next door, at my brother's." },
      { speaker: "You",        nl: "Gelek spas, mala te ava.", en: "Thank you very much, bless your house." },
      { speaker: "Shopkeeper", nl: "Silamet bî, dîsa were.", en: "Stay well, come again." },
    ],
    notes: [
      "Bargaining ('kêm bike' = come down / lower it) is expected in the bazaar for produce, clothes and carpets — but not in fixed-price supermarkets.",
      "'Keko' (older brother) for a man and 'xanim/xwişkê' for a woman are the polite ways to address a stranger.",
      "'Mala te ava' (lit. 'may your house be prosperous') is a warm thank-you. Shopkeepers often round the price down or slip in something extra as a courtesy.",
    ],
  },
  {
    id: "sc_tram",
    title: "Taking a shared servîs taxi",
    icon: "🚊",
    setting:
      "Morning commute in the city. Shared 'servîs' taxis run fixed routes and leave once full. You lean toward the driver's window before getting in.",
    dialogue: [
      { speaker: "You",       nl: "Sibeha te bi xêr, tu diçî bazara mezin?", en: "Good morning, are you going to the grand bazaar?" },
      { speaker: "Driver",    nl: "Erê, fermo rûne.", en: "Yes, please get in." },
      { speaker: "You",       nl: "Kirê bi çend e?", en: "How much is the fare?" },
      { speaker: "Driver",    nl: "Pênc sed dînar.", en: "Five hundred dinars." },
      { speaker: "You",       nl: "Li Kolana Sî Metreyî min peya bike, ji kerema xwe.", en: "Drop me off at 30-Meter Street, please." },
      { speaker: "Driver",    nl: "Baş e, ez ê li wir bisekinim.", en: "Fine, I'll stop right there." },
      { speaker: "You",       nl: "Li vir baş e, bisekine.", en: "Here is good, stop here." },
      { speaker: "Passenger", nl: "Pere bide ajokar.", en: "Pass the money to the driver." },
    ],
    notes: [
      "'servîs' shared taxis follow set routes; you pay a flat fare and share with strangers. Say your stop and the driver drops you there.",
      "'Bisekine' / 'raweste' (stop / pull over) is how you signal you want to get off.",
      "Passengers in the back often pass their fare forward hand-to-hand to the driver — just hand it to the person in front of you.",
    ],
  },
  {
    id: "sc_standup",
    title: "Morning check-in at work",
    icon: "💻",
    setting:
      "A morning check-in at your office. The team mixes Kurdish, Turkish and English, but you give your update in Kurdish to keep it simple.",
    dialogue: [
      { speaker: "Lead", nl: "Sibeha we bi xêr hemû. Hemîd, tu pêşî?", en: "Good morning everyone. Hameed, you first?" },
      { speaker: "You",  nl: "Silav! Duh min karê nû temam kir.", en: "Hi! Yesterday I finished the new task." },
      { speaker: "You",  nl: "Îro ez li ser testan dixebitim.", en: "Today I'm working on the tests." },
      { speaker: "You",  nl: "Tu pirsgirêkên min tune.", en: "I have no blockers." },
      { speaker: "Lead", nl: "Gelek baş. Alîkarî ji te re divê?", en: "Very good. Do you need help?" },
      { speaker: "You",  nl: "Belkî paşê, ez ê ji te re bêjim.", en: "Maybe later, I'll let you know." },
      { speaker: "Lead", nl: "Baş e, kesê din.", en: "Alright, next person." },
    ],
    notes: [
      "'Pirsgirêk' (pirsgirêk) = 'problem/blocker' — the everyday word for anything holding you up.",
      "'Ez ê ji te re bêjim' = 'I'll tell you / let you know' — handy for deferring a decision politely.",
      "Kurdish offices code-switch constantly between Kurdish, Turkish and English. Giving your update in clear Kurdish is always welcome.",
    ],
  },
  {
    id: "sc_directions",
    title: "Asking for directions",
    icon: "🧭",
    setting:
      "You're trying to find a friend's building near the citadel (Qela) and your phone has died. You stop a passer-by.",
    dialogue: [
      { speaker: "You",       nl: "Bibore, tu dizanî Kolana Gulan li ku ye?", en: "Excuse me, do you know where Gulan Street is?" },
      { speaker: "Passerby",  nl: "Erê, gelek nêzîk e. Rasterast biçe û li ber çirayê zivirî çepê.", en: "Yes, it's very close. Go straight and turn left at the traffic light." },
      { speaker: "You",       nl: "Dûr e?", en: "Is it far?" },
      { speaker: "Passerby",  nl: "Na, pênc deqe bi peyatî.", en: "No, a five-minute walk." },
      { speaker: "You",       nl: "Gelek spas, Xwedê xêra te bike.", en: "Thank you so much, may God bless you." },
      { speaker: "Passerby",  nl: "Tiştek nîne, bi silamet.", en: "It's nothing, go safely." },
    ],
    notes: [
      "'Rasterast biçe' = 'go straight'; 'zivirî çepê / rastê' = 'turn left / right'.",
      "'Gelek nêzîk e' = 'it's very close'. People often walk you part of the way rather than just point.",
      "'Xwedê xêra te bike' (God bless you) and 'bi silamet' (go safely / farewell) are warm, everyday closings.",
    ],
  },
  {
    id: "sc_pharmacy",
    title: "At the pharmacy (dermanxane)",
    icon: "💊",
    setting:
      "You've got a sore throat and need something without a prescription. Pharmacists (dermansaz) in Kurdistan are used to giving quick advice over the counter.",
    dialogue: [
      { speaker: "Pharmacist", nl: "Silav, ez çawa alîkariya te bikim?", en: "Hello, how can I help you?" },
      { speaker: "You",        nl: "Silav, qirika min diêşe. Tu çi pêşniyar dikî?", en: "Hi, my throat hurts. What do you recommend?" },
      { speaker: "Pharmacist", nl: "Ji kengê ve pê ve ye?", en: "Since when have you had it?" },
      { speaker: "You",        nl: "Ji duh ve.", en: "Since yesterday." },
      { speaker: "Pharmacist", nl: "Van bişkojkan bimije û ava germ gelek vexwe.", en: "Suck on these lozenges and drink plenty of warm water." },
      { speaker: "You",        nl: "Tiştek ji bo persîvê heye?", en: "Do you have something for a cold?" },
      { speaker: "Pharmacist", nl: "Erê, ev şerbet û parasîtamol.", en: "Yes, this syrup and paracetamol." },
      { speaker: "You",        nl: "Wê demê ez bişkojkan û parasîtamolê distînim.", en: "Then I'll take the lozenges and paracetamol." },
    ],
    notes: [
      "'Qirika min diêşe' = 'my throat hurts'. To say a body part hurts: [part] + diêşe.",
      "'Tu çi pêşniyar dikî?' (what do you recommend?) works everywhere — pharmacy, restaurant, shop.",
      "Pharmacists often dispense common medicines and give advice without a prescription. A cup of warm water with lemon and honey is the go-to home remedy for a sore throat.",
    ],
  },
  {
    id: "sc_borrel",
    title: "Friday family gathering",
    icon: "🍻",
    setting:
      "Friday afternoon at a relative's house. The extended family has gathered, tea is going round nonstop, and your aunt keeps pressing food on everyone. You arrive and are welcomed in.",
    dialogue: [
      { speaker: "Aunt", nl: "Bi xêr hatî! Were hundur, rûne.", en: "Welcome! Come in, sit down." },
      { speaker: "You",  nl: "Spas metê, tu çawa yî? Mal çawa ye?", en: "Thanks auntie, how are you? How's the family?" },
      { speaker: "Aunt", nl: "Spas ji Xwedê re. Çay ji te re bînim?", en: "Thank God. Shall I bring you tea?" },
      { speaker: "You",  nl: "Erê kêfxweş dibim, destê te sax.", en: "Yes, gladly, thank you." },
      { speaker: "Aunt", nl: "Ji vê dolmeyê jî bixwe, min bi xwe çêkiriye. Fermo.", en: "Eat some of this dolma too, I made it myself. Help yourself." },
      { speaker: "You",  nl: "Gelek bi tam e! Destê te sax, ez têr bûm.", en: "It's delicious! Bless your hands, I'm full." },
      { speaker: "Aunt", nl: "Na, hinekî din bixwe, tu nû hatî.", en: "No, eat a little more, you've only just arrived." },
      { speaker: "You",  nl: "Baş e baş e, lê hindik.", en: "Alright, alright, but just a little." },
      { speaker: "Aunt", nl: "Noşî cana te be. Mal hemû baş in?", en: "May it nourish you. Is everyone at home well?" },
      { speaker: "You",  nl: "Hemû baş in, silavan li te dikin.", en: "Everyone's well, they send you their greetings." },
    ],
    notes: [
      "Hosts insist you eat and drink more, and refusing once is expected — you accept 'just a little' after being pressed. Saying 'ez têr bûm' (I'm full) rarely ends it the first time.",
      "'Fermo' = 'please, help yourself / go ahead' — used constantly when offering food, a seat, or to let someone pass first.",
      "'Noşî cana te be' = 'may it nourish you' — said to someone who is eating or drinking. Asking after the whole family ('Mal çawa ye?') is basic politeness.",
    ],
  },
  {
    id: "sc_bike",
    title: "Fixing a flat tyre",
    icon: "🚲",
    setting:
      "Your car got a flat tyre (pençer) on the way across town. You pull into a small roadside repair shop (workshop / lastîk-fixer).",
    dialogue: [
      { speaker: "Mechanic", nl: "Keko, tu çi dixwazî?", en: "Sir, what do you need?" },
      { speaker: "You",      nl: "Lastîkê min pençer bûye. Yê paş.", en: "My tyre has gone flat. The back one." },
      { speaker: "Mechanic", nl: "Bila ez lê binêrim... erê, mîxek tê de çûye.", en: "Let me look... yes, a nail has gone into it." },
      { speaker: "You",      nl: "Tu dikarî çê bikî an lastîkek nû divê?", en: "Can you fix it, or does it need a new tyre?" },
      { speaker: "Mechanic", nl: "Çêdibe, hewceyî yê nû nake.", en: "It can be repaired, it doesn't need a new one." },
      { speaker: "You",      nl: "Çiqas dikişîne?", en: "How long will it take?" },
      { speaker: "Mechanic", nl: "Nêzîkî çaryek saetê.", en: "About a quarter of an hour." },
      { speaker: "You",      nl: "Kirêya wê bi çend e?", en: "How much is the charge?" },
      { speaker: "Mechanic", nl: "Du hezar dînar.", en: "Two thousand dinars." },
      { speaker: "You",      nl: "Baş e, çê bike.", en: "Alright, do it." },
    ],
    notes: [
      "'Pençer' = flat/puncture — the everyday word, borrowed and used for tyres.",
      "Small roadside repair stalls are everywhere and fix a flat in minutes for a few thousand dinars.",
      "'Çê bike' = 'do it / fix it' — a quick, casual way to agree to the work.",
    ],
  },
  {
    id: "sc_landlord",
    title: "Reporting a problem to your landlord",
    icon: "🔧",
    setting:
      "The water heater made a strange noise overnight and now there's no hot water. You call your landlord (xwedî mal).",
    dialogue: [
      { speaker: "Landlord", nl: "Alo, fermo.", en: "Hello, yes?" },
      { speaker: "You",      nl: "Silav kek Azad, ez Hemîd im. Pirsgirêkeke min bi termosîfonê re heye.", en: "Hello Mr Azad, this is Hameed. I have a problem with the water heater." },
      { speaker: "Landlord", nl: "Çi bûye?", en: "What's happened?" },
      { speaker: "You",      nl: "Ava germ tune, û duh şev dengekî ecêb derdixist.", en: "There's no hot water, and last night it was making a strange noise." },
      { speaker: "Landlord", nl: "Kengê dest pê kir?", en: "When did it start?" },
      { speaker: "You",      nl: "Îro sibê.", en: "This morning." },
      { speaker: "Landlord", nl: "Ez ê meriyekî bişînim ji bo çêkirinê. Îro tu li malê yî?", en: "I'll send a man to fix it. Will you be home today?" },
      { speaker: "You",      nl: "Erê, piştî nîvro ez li malê me.", en: "Yes, I'm home in the afternoon." },
      { speaker: "Landlord", nl: "Di navbera saet du û çaran de yek tê.", en: "Someone will come between two and four." },
      { speaker: "You",      nl: "Gelek spas, Xwedê te kêfxweş bike.", en: "Thank you very much, may God make you happy." },
    ],
    notes: [
      "'Pirsgirêkeke min ... heye' = 'I have a problem with ...' — the frame for reporting any fault.",
      "'Termosîfon' is the wall-mounted water heater; power and water cuts are common, so no hot water is a familiar complaint.",
      "'Xwedê te kêfxweş bike' (God make you happy) is a warm thank-you to someone doing you a favour. Landlord–tenant dealings are usually informal and settled by a phone call.",
    ],
  },
  // === Slot for you to add your own scenarios ===
  // Drop in your real Kurdistan life: your team's specific check-in phrases,
  // your bakery (firne/nanpêj) run, your gym sign-in dialogue, etc. The shape:
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
