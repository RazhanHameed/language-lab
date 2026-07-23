// Real-life Kurdistan scenarios (Central Kurdish / Sorani, Arabic script, RTL).
// Read them aloud, shadow the audio, then try the production versions in the
// study session. (`nl` = target-language slot, here Sorani Kurdish.)
window.__DECK.ckb.SCENARIOS = [
  {
    id: "sc_cafe",
    title: "Ordering tea at a çayxane",
    icon: "☕",
    setting:
      "You step into a busy çayxane (tea house) in the old bazaar of Hewlêr. Older men are playing dominoes, the samovar is steaming, and a young waiter (mêrgarson) comes over with a tray.",
    dialogue: [
      { speaker: "Waiter", nl: "بەخێربێیت! چیت بۆ بێنم؟", en: "Welcome! What can I bring you?" },
      { speaker: "You",    nl: "سوپاس. یەک چای، تکایە.", en: "Thanks. One tea, please." },
      { speaker: "Waiter", nl: "چایەکەت پڕ بێت یان کەم؟", en: "Do you want your tea strong or light?" },
      { speaker: "You",    nl: "کەمێک پڕ بێت، سوپاس.", en: "A bit strong, thanks." },
      { speaker: "Waiter", nl: "شەکریشت بۆ بێنم؟", en: "Shall I bring you sugar too?" },
      { speaker: "You",    nl: "بەڵێ، دوو پارچە شەکر.", en: "Yes, two sugar cubes." },
      { speaker: "Waiter", nl: "چاکە. کلێنجەشت لەگەڵ دەوێت؟", en: "Alright. Do you want some cookies with it?" },
      { speaker: "You",    nl: "نەخێر سوپاس، تەنها چای.", en: "No thanks, just the tea." },
      { speaker: "Waiter", nl: "فەرموو، خۆشی لێ ببینیت.", en: "Here you are, enjoy it." },
      { speaker: "You",    nl: "دەستت خۆش، ماندوو نەبیت.", en: "Thank you, may you not be tired." },
    ],
    notes: [
      "'بەخێربێیت' (bexêrbêyt) = 'welcome' — the standard greeting when you enter almost any shop or home.",
      "Tea is served in the little tulip glass (istikan). Asking for it 'پڕ' (strong) or 'کەم' (light) is completely normal.",
      "'دەستت خۆش' (destit xoş, lit. 'may your hand be sweet') and 'ماندوو نەبیت' (may you not be tired) are the everyday thank-yous to anyone who served or worked for you. Note: in a çayxane the tea is often cheap or someone at the next table may quietly pay for you.",
    ],
  },
  {
    id: "sc_restaurant",
    title: "Reserving a table and ordering",
    icon: "🍽️",
    setting:
      "You want to take relatives out for dinner on Friday. You phone a well-known restaurant in the city that is famous for its dolma and kebab.",
    dialogue: [
      { speaker: "Host", nl: "چێشتخانەی نیشتمان، فەرموو.", en: "Nishtiman Restaurant, hello." },
      { speaker: "You",  nl: "سڵاو، دەمەوێت مێزێک بۆ ئێوارەی هەینی حیجز بکەم.", en: "Hello, I'd like to reserve a table for Friday evening." },
      { speaker: "Host", nl: "بەسەرچاو. بۆ چەند کەس؟", en: "With pleasure. For how many people?" },
      { speaker: "You",  nl: "بۆ هەشت کەس، کاتژمێر حەوت.", en: "For eight people, at seven o'clock." },
      { speaker: "Host", nl: "چرکەیەک... حەوت پڕە، نۆ دەکرێت.", en: "One moment... seven is full, nine would work." },
      { speaker: "You",  nl: "باشە، کاتژمێر نۆ باشە.", en: "Alright, nine is fine." },
      { speaker: "Host", nl: "بە چ ناوێک تۆمار بکەم؟", en: "Under what name shall I register it?" },
      { speaker: "You",  nl: "بە ناوی حەمید.", en: "Under the name Hameed." },
      { speaker: "Host", nl: "دۆڵمە و کەبابیشمان هەیە، تازەیە.", en: "We also have dolma and kebab, it's fresh." },
      { speaker: "You",  nl: "زۆر باشە، هەینی دەبینمەوە.", en: "Very good, see you Friday." },
    ],
    notes: [
      "'بەسەرچاو' (besercaw, lit. 'on my eye') = 'gladly / with pleasure' — a warm way to say yes to a request.",
      "Reservations for big family groups are normal; hosting relatives generously is a point of pride, and the host usually insists on paying the whole bill.",
      "Dolma (stuffed vegetables and grape leaves) and kebab are the classic dishes to order for a group. Fridays are the big family meal day.",
    ],
  },
  {
    id: "sc_supermarket",
    title: "Shopping in the bazaar",
    icon: "🛒",
    setting:
      "You're in the covered bazaar (qeyseri) looking for spices and a kilo of tomatoes. The shopkeeper (dukandar) greets you from behind his stall.",
    dialogue: [
      { speaker: "You",        nl: "سڵاو کاکە، تەماتەت هەیە؟", en: "Hello sir, do you have tomatoes?" },
      { speaker: "Shopkeeper", nl: "بەڵێ فەرموو، تازەن. چەند کیلۆت دەوێت؟", en: "Yes, here you are, they're fresh. How many kilos do you want?" },
      { speaker: "You",        nl: "کیلۆیەک. کیلۆکە بەندە؟", en: "One kilo. How much is a kilo?" },
      { speaker: "Shopkeeper", nl: "هەزار و پێنج سەد دینار.", en: "One thousand five hundred dinars." },
      { speaker: "You",        nl: "کەمێک گران نییە؟ کەمی بکە.", en: "Isn't that a bit expensive? Come down a little." },
      { speaker: "Shopkeeper", nl: "بۆ تۆ هەزار و دووسەد، ئەوە کۆتاییە.", en: "For you, one thousand two hundred, that's the final price." },
      { speaker: "You",        nl: "باشە. دووکەڵەشمان دەوێت، لەکوێیە؟", en: "Alright. We also need some spices, where are they?" },
      { speaker: "Shopkeeper", nl: "لای دووکانەکەی تەنیشت، لای برام.", en: "At the shop next door, at my brother's." },
      { speaker: "You",        nl: "زۆر سوپاس، ماڵت ئاوا.", en: "Thank you very much, bless your house." },
      { speaker: "Shopkeeper", nl: "سەلامەت بیت، دیسان بێیتەوە.", en: "Stay well, come again." },
    ],
    notes: [
      "Bargaining ('kem bike' = come down / lower it) is expected in the bazaar for produce, clothes and carpets — but not in fixed-price supermarkets.",
      "'کاکە' (kake, older brother) for a man and 'خانم/خوشکە' for a woman are the polite ways to address a stranger.",
      "'ماڵت ئاوا' (maḷit awa, lit. 'may your house be prosperous') is a warm thank-you. Shopkeepers often round the price down or slip in something extra as a courtesy.",
    ],
  },
  {
    id: "sc_tram",
    title: "Taking a shared servîs taxi",
    icon: "🚊",
    setting:
      "Morning commute in the city. Shared 'servîs' taxis run fixed routes and leave once full. You lean toward the driver's window before getting in.",
    dialogue: [
      { speaker: "You",       nl: "بەیانیت باش، دەچیتە بازاڕی گەورە؟", en: "Good morning, are you going to the grand bazaar?" },
      { speaker: "Driver",    nl: "بەڵێ، فەرموو دابنیشە.", en: "Yes, please get in." },
      { speaker: "You",       nl: "کرێکە بەندە؟", en: "How much is the fare?" },
      { speaker: "Driver",    nl: "پێنج سەد دینار.", en: "Five hundred dinars." },
      { speaker: "You",       nl: "لای شەقامی سی مەترم دابەزێنە، تکایە.", en: "Drop me off at 30-Meter Street, please." },
      { speaker: "Driver",    nl: "چاکە، هەر لەوێ دەوەستم.", en: "Fine, I'll stop right there." },
      { speaker: "You",       nl: "لێرە باشە، هەڵگرە خۆت.", en: "Here is good, stop here." },
      { speaker: "Passenger", nl: "پارەکە بدە بە شۆفێرەکە.", en: "Pass the money to the driver." },
    ],
    notes: [
      "'servîs' shared taxis follow set routes; you pay a flat fare and share with strangers. Say your stop and the driver drops you there.",
      "'هەڵگرە' / 'وەستە' (stop / pull over) is how you signal you want to get off.",
      "Passengers in the back often pass their fare forward hand-to-hand to the driver — just hand it to the person in front of you.",
    ],
  },
  {
    id: "sc_standup",
    title: "Morning check-in at work",
    icon: "💻",
    setting:
      "A morning check-in at your office. The team mixes Kurdish, Arabic and English, but you give your update in Kurdish to keep it simple.",
    dialogue: [
      { speaker: "Lead", nl: "بەیانیتان باش هەموان. حەمید، تۆ سەرەتا؟", en: "Good morning everyone. Hameed, you first?" },
      { speaker: "You",  nl: "سڵاو! دوێنێ کارەکەی نوێم تەواو کرد.", en: "Hi! Yesterday I finished the new task." },
      { speaker: "You",  nl: "ئەمڕۆ لەسەر تاقیکردنەوەکان کار دەکەم.", en: "Today I'm working on the tests." },
      { speaker: "You",  nl: "هیچ کێشەیەکم نییە.", en: "I have no blockers." },
      { speaker: "Lead", nl: "زۆر باشە. یارمەتیت دەوێت؟", en: "Very good. Do you need help?" },
      { speaker: "You",  nl: "لەوانەیە دواتر، پێت دەڵێم.", en: "Maybe later, I'll let you know." },
      { speaker: "Lead", nl: "باشە، کەسی داهاتوو.", en: "Alright, next person." },
    ],
    notes: [
      "'کێشە' (kêşe) = 'problem/blocker' — the everyday word for anything holding you up.",
      "'پێت دەڵێم' (pêt deḷêm) = 'I'll tell you / let you know' — handy for deferring a decision politely.",
      "Kurdish offices code-switch constantly between Kurdish, Arabic and English. Giving your update in clear Kurdish is always welcome.",
    ],
  },
  {
    id: "sc_directions",
    title: "Asking for directions",
    icon: "🧭",
    setting:
      "You're trying to find a friend's building near the citadel (Qelat) and your phone has died. You stop a passer-by.",
    dialogue: [
      { speaker: "You",       nl: "ببورە، دەزانیت شەقامی گوڵان لەکوێیە؟", en: "Excuse me, do you know where Gulan Street is?" },
      { speaker: "Passerby",  nl: "بەڵێ، زۆر نزیکە. ڕاست بڕۆ و لای چراکە بپێچەرەوە بۆ چەپ.", en: "Yes, it's very close. Go straight and turn left at the traffic light." },
      { speaker: "You",       nl: "دوورە؟", en: "Is it far?" },
      { speaker: "Passerby",  nl: "نەخێر، پێنج خولەک بە پێ.", en: "No, a five-minute walk." },
      { speaker: "You",       nl: "زۆر سوپاس، خودا خێرت بکات.", en: "Thank you so much, may God bless you." },
      { speaker: "Passerby",  nl: "شت نییە، بە سەلامەت.", en: "It's nothing, go safely." },
    ],
    notes: [
      "'ڕاست بڕۆ' (rast biro) = 'go straight'; 'بپێچەرەوە بۆ چەپ / ڕاست' = 'turn left / right'.",
      "'زۆر نزیکە' (zor nizîke) = 'it's very close'. People often walk you part of the way rather than just point.",
      "'خودا خێرت بکات' (God bless you) and 'بە سەلامەت' (go safely / farewell) are warm, everyday closings.",
    ],
  },
  {
    id: "sc_pharmacy",
    title: "At the pharmacy (dermanxane)",
    icon: "💊",
    setting:
      "You've got a sore throat and need something without a prescription. Pharmacists (dermansaz) in Kurdistan are used to giving quick advice over the counter.",
    dialogue: [
      { speaker: "Pharmacist", nl: "سڵاو، چۆن یارمەتیت بدەم؟", en: "Hello, how can I help you?" },
      { speaker: "You",        nl: "سڵاو، گەرووم دەئێشێت. چی پێشنیار دەکەیت؟", en: "Hi, my throat hurts. What do you recommend?" },
      { speaker: "Pharmacist", nl: "لە کەیەوە پێتە؟", en: "Since when have you had it?" },
      { speaker: "You",        nl: "لە دوێنێوە.", en: "Since yesterday." },
      { speaker: "Pharmacist", nl: "ئەم مژینەوانە بمژە و ئاوی گەرم زۆر بخۆوە.", en: "Suck on these lozenges and drink plenty of warm water." },
      { speaker: "You",        nl: "شتێکت هەیە بۆ هەڵامەت؟", en: "Do you have something for a cold?" },
      { speaker: "Pharmacist", nl: "بەڵێ، ئەم شەربەتە و پاراسیتامۆل.", en: "Yes, this syrup and paracetamol." },
      { speaker: "You",        nl: "ئەوا مژینەوەکان و پاراسیتامۆل دەبەم.", en: "Then I'll take the lozenges and paracetamol." },
    ],
    notes: [
      "'گەرووم دەئێشێت' (geroom deêşêt) = 'my throat hurts'. To say a body part hurts: [part] + دەئێشێت.",
      "'چی پێشنیار دەکەیت؟' (what do you recommend?) works everywhere — pharmacy, restaurant, shop.",
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
      { speaker: "Aunt", nl: "بەخێربێیت! وەرە ژوورەوە، دابنیشە.", en: "Welcome! Come in, sit down." },
      { speaker: "You",  nl: "سوپاس پوورە، چۆنیت؟ ماڵ چۆنە؟", en: "Thanks auntie, how are you? How's the family?" },
      { speaker: "Aunt", nl: "سوپاس بۆ خودا. چای بۆ بێنم؟", en: "Thank God. Shall I bring you tea?" },
      { speaker: "You",  nl: "بەڵێ خۆشحاڵ دەبم، دەستت خۆش.", en: "Yes, gladly, thank you." },
      { speaker: "Aunt", nl: "لەم دۆڵمەیەش بخۆ، خۆم دروستم کردووە. کەرەم بکە.", en: "Eat some of this dolma too, I made it myself. Help yourself." },
      { speaker: "You",  nl: "زۆر بەتامە! دەستت خۆش، تێر بووم.", en: "It's delicious! Bless your hands, I'm full." },
      { speaker: "Aunt", nl: "نەخێر، کەمێکی تر بخۆ، تازە هاتوویت.", en: "No, eat a little more, you've only just arrived." },
      { speaker: "You",  nl: "باشە باشە، بەڵام کەمێک.", en: "Alright, alright, but just a little." },
      { speaker: "Aunt", nl: "نۆشی گیانت بێت. ماڵەوە هەموو باشن؟", en: "May it nourish you. Is everyone at home well?" },
      { speaker: "You",  nl: "هەموو باشن، سڵاوت پێ دەگەیەنن.", en: "Everyone's well, they send you their greetings." },
    ],
    notes: [
      "Hosts insist you eat and drink more, and refusing once is expected — you accept 'just a little' after being pressed. Saying 'تێر بووم' (I'm full) rarely ends it the first time.",
      "'کەرەم بکە / فەرموو' (kerem bike / fermû) = 'please, help yourself / go ahead' — used constantly when offering food, a seat, or to let someone pass first.",
      "'نۆشی گیانت بێت' (noşî gyanit bêt) = 'may it nourish you' — said to someone who is eating or drinking. Asking after the whole family ('ماڵ چۆنە؟') is basic politeness.",
    ],
  },
  {
    id: "sc_bike",
    title: "Fixing a flat tyre",
    icon: "🚲",
    setting:
      "Your car got a flat tyre (pençer) on the way across town. You pull into a small roadside repair shop (workshop / tayer-changer).",
    dialogue: [
      { speaker: "Mechanic", nl: "کاکە، چیت دەوێت؟", en: "Sir, what do you need?" },
      { speaker: "You",      nl: "تایەرەکەم پەنچەرە بووە. ئەوەی دواوە.", en: "My tyre has gone flat. The back one." },
      { speaker: "Mechanic", nl: "با سەیری بکەم... بەڵێ، بزمارێکی تێچووە.", en: "Let me look... yes, a nail has gone into it." },
      { speaker: "You",      nl: "دەکرێت چاکی بکەیت یان تایەری نوێ دەوێت؟", en: "Can you fix it, or does it need a new tyre?" },
      { speaker: "Mechanic", nl: "چاکدەبێتەوە، پێویستی بە نوێ نییە.", en: "It can be repaired, it doesn't need a new one." },
      { speaker: "You",      nl: "چەند دەخایەنێت؟", en: "How long will it take?" },
      { speaker: "Mechanic", nl: "نزیکەی ربع سەعات.", en: "About a quarter of an hour." },
      { speaker: "You",      nl: "بەندە کرێکەی؟", en: "How much is the charge?" },
      { speaker: "Mechanic", nl: "دوو هەزار دینار.", en: "Two thousand dinars." },
      { speaker: "You",      nl: "باشە، بیکە.", en: "Alright, do it." },
    ],
    notes: [
      "'پەنچەر' (pençer) = flat/puncture — the everyday word, borrowed and used for tyres.",
      "Small roadside repair stalls are everywhere and fix a flat in minutes for a few thousand dinars.",
      "'بیکە' (bike) = 'do it' — a quick, casual way to agree to the work.",
    ],
  },
  {
    id: "sc_landlord",
    title: "Reporting a problem to your landlord",
    icon: "🔧",
    setting:
      "The water heater made a strange noise overnight and now there's no hot water. You call your landlord (xaw-nyar / xudan mal).",
    dialogue: [
      { speaker: "Landlord", nl: "ئەڵۆ، فەرموو.", en: "Hello, yes?" },
      { speaker: "You",      nl: "سڵاو کاک ئازاد، حەمیدم. کێشەیەکم لەگەڵ سەخانەکە هەیە.", en: "Hello Mr Azad, this is Hameed. I have a problem with the water heater." },
      { speaker: "Landlord", nl: "چی بووە؟", en: "What's happened?" },
      { speaker: "You",      nl: "ئاوی گەرم نییە، و دوێنێ شەو دەنگێکی نامۆی دەردەهێنا.", en: "There's no hot water, and last night it was making a strange noise." },
      { speaker: "Landlord", nl: "کەی دەستی پێکرد؟", en: "When did it start?" },
      { speaker: "You",      nl: "ئەمڕۆ بەیانی.", en: "This morning." },
      { speaker: "Landlord", nl: "پیاوێک دەنێرم بۆ چاککردنی. ئەمڕۆ لە ماڵ دەبیت؟", en: "I'll send a man to fix it. Will you be home today?" },
      { speaker: "You",      nl: "بەڵێ، دوای نیوەڕۆ لە ماڵم.", en: "Yes, I'm home in the afternoon." },
      { speaker: "Landlord", nl: "نێوان کاتژمێر دوو و چوار کەسێک دێت.", en: "Someone will come between two and four." },
      { speaker: "You",      nl: "زۆر سوپاس، خودا خۆشحاڵت بکات.", en: "Thank you very much, may God make you happy." },
    ],
    notes: [
      "'کێشەیەکم ... هەیە' (kêşeyekim ... heye) = 'I have a problem with ...' — the frame for reporting any fault.",
      "'سەخانە' (sexane) is the wall-mounted water heater; power and water cuts are common, so no hot water is a familiar complaint.",
      "'خودا خۆشحاڵت بکات' (God make you happy) is a warm thank-you to someone doing you a favour. Landlord–tenant dealings are usually informal and settled by a phone call.",
    ],
  },
  // === Slot for you to add your own scenarios ===
  // Drop in your real Kurdistan life: your team's specific check-in phrases,
  // your bakery (nanwaxane) run, your gym sign-in dialogue, etc. The shape:
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
