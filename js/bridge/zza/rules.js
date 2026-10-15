/* Kurmanji to Zazaki bridge (kmr>zza): rules. Every Zazaki form is cited in P.SOURCES; see docs/bridges/zazaki.md. */
(function () {
  const B = (window.__BRIDGES = window.__BRIDGES || {});
  const P = (B["kmr-zza"] = B["kmr-zza"] || {});
  P.RULES = [
 {
  "id": "w-xw",
  "order": 1,
  "title": "Kurmanji xw- ↔ Zazaki w-",
  "reliability": "usually",
  "card": {
   "kmr>zza": {
    "en": "Drop the x: where Kurmanji has xw-, Zazaki usually has plain w-. Xweş is weş, xwendin is wendene. In our word list 14 of 16 Kurmanji xw- words follow this. The big exception is xwe 'self', which is xo.",
    "ku": "X-yê bavêje: li cihê ku kurmancî xw- dibêje, zazakî bi piranî tenê w- dibêje. Xweş dibe weş, xwendin dibe wendene. Di lîsteya me de 14 ji 16 peyvên bi xw- wisa ne. Îstîsnaya mezin xwe ye: bi zazakî xo ye."
   }
  },
  "examples": [
   {
    "kmr": "xweş",
    "zza": "weş",
    "en": "pleasant, well",
    "src": "lez"
   },
   {
    "kmr": "xweşik",
    "zza": "weşik",
    "en": "beautiful",
    "src": "lez"
   },
   {
    "kmr": "nexweş",
    "zza": "nêweş",
    "en": "ill",
    "src": "lez"
   },
   {
    "kmr": "xwendekar",
    "zza": "wendekar",
    "en": "student",
    "src": "lez"
   },
   {
    "kmr": "xwendin",
    "zza": "wendene",
    "en": "to read",
    "src": "lez"
   },
   {
    "kmr": "xwarin",
    "zza": "werdene",
    "en": "to eat",
    "src": "lez"
   },
   {
    "kmr": "xwestin",
    "zza": "waştene",
    "en": "to want",
    "src": "lez"
   }
  ],
  "test": [
   {
    "kmr": "xweşî",
    "zza": "weşiye",
    "en": "pleasure, joy",
    "src": "wf"
   },
   {
    "kmr": "xwar",
    "zza": "war",
    "en": "down",
    "src": "wf"
   },
   {
    "kmr": "xwestek",
    "zza": "waştiş",
    "en": "wish, request",
    "src": "wf"
   }
  ]
 },
 {
  "id": "w-v",
  "order": 2,
  "title": "Kurmanji v (f) ↔ Zazaki w",
  "reliability": "often",
  "card": {
   "kmr>zza": {
    "en": "Your v (and the f of heft) is often w in Zazaki: av is awe, şev is şewe, heft is hewt. We counted 13 such pairs. Read w as a soft v and the word usually appears.",
    "ku": "V-ya te (û f-ya heft) bi zazakî pir caran w ye: av dibe awe, şev dibe şewe, heft dibe hewt. Me 13 cotên wisa dîtin. W-yê wek v-yeke nerm bixwîne, peyv bi piranî xuya dibe."
   }
  },
  "examples": [
   {
    "kmr": "av",
    "zza": "awe",
    "en": "water",
    "src": "lez"
   },
   {
    "kmr": "şev",
    "zza": "şewe",
    "en": "night",
    "src": "lez"
   },
   {
    "kmr": "lêv",
    "zza": "lew",
    "en": "lip",
    "src": "lez"
   },
   {
    "kmr": "heft",
    "zza": "hewt",
    "en": "seven",
    "src": "lez"
   },
   {
    "kmr": "hefte",
    "zza": "hewte",
    "en": "week",
    "src": "lez"
   },
   {
    "kmr": "şevbaş",
    "zza": "şewbaş",
    "en": "good night",
    "src": "wf"
   }
  ],
  "test": [
   {
    "kmr": "avdest",
    "zza": "awdest",
    "en": "ablution water",
    "src": "wf"
   },
   {
    "kmr": "bav",
    "zza": "baw",
    "en": "father",
    "src": "wf"
   },
   {
    "kmr": "avdar",
    "zza": "awdar",
    "en": "one who waters",
    "src": "wf"
   }
  ]
 },
 {
  "id": "m-v",
  "order": 3,
  "title": "Kurmanji v ↔ Zazaki m",
  "reliability": "often",
  "card": {
   "kmr>zza": {
    "en": "Some Kurmanji v's are m in Zazaki: nav is name, çav is çim, meriv is merdim, mêvan is mêman. We found 15 such pairs. The opposite also happens once: ziman is ziwan.",
    "ku": "Hin v-yên kurmancî bi zazakî m ne: nav dibe name, çav dibe çim, meriv dibe merdim, mêvan dibe mêman. Me 15 cot dîtin. Carekê berevajî jî heye: ziman dibe ziwan."
   }
  },
  "examples": [
   {
    "kmr": "nav",
    "zza": "name",
    "en": "name",
    "src": "lez"
   },
   {
    "kmr": "çav",
    "zza": "çim",
    "en": "eye",
    "src": "lez"
   },
   {
    "kmr": "meriv",
    "zza": "merdim",
    "en": "person",
    "src": "lez"
   },
   {
    "kmr": "mêvan",
    "zza": "mêman",
    "en": "guest",
    "src": "lez"
   },
   {
    "kmr": "zava",
    "zza": "zama",
    "en": "bridegroom",
    "src": "lez"
   },
   {
    "kmr": "kevir",
    "zza": "kemere",
    "en": "stone",
    "src": "lez"
   },
   {
    "kmr": "revîn",
    "zza": "remayene",
    "en": "to run away",
    "src": "lez"
   }
  ],
  "test": [
   {
    "kmr": "zivistan",
    "zza": "zimistan",
    "en": "winter",
    "src": "wf"
   },
   {
    "kmr": "gav",
    "zza": "game",
    "en": "step",
    "src": "wf"
   },
   {
    "kmr": "nîv",
    "zza": "nîme",
    "en": "half",
    "src": "wf"
   }
  ]
 },
 {
  "id": "v-b",
  "order": 4,
  "title": "Kurmanji b- ↔ Zazaki v-",
  "reliability": "often",
  "card": {
   "kmr>zza": {
    "en": "Read this one from Zazaki to Kurmanji: a Zazaki v- is often your b-. Varan is baran, va is ba, vîst is bîst, ver is ber. We found 11 pairs. Do not turn every b into v: most b- words, like bira and baş, stay the same.",
    "ku": "Vê qaydeyê ji zazakî ber bi kurmancî bixwîne: v-ya serê peyva zazakî pir caran b-ya te ye. Varan baran e, va ba ye, vîst bîst e, ver ber e. Me 11 cot dîtin. Her b-yê neke v: piraniya peyvên bi b-, wek bira û baş, wek xwe dimînin."
   }
  },
  "examples": [
   {
    "kmr": "baran",
    "zza": "varan",
    "en": "rain",
    "src": "wf"
   },
   {
    "kmr": "ba",
    "zza": "va",
    "en": "wind",
    "src": "lez"
   },
   {
    "kmr": "bîst",
    "zza": "vîst",
    "en": "twenty",
    "src": "lez"
   },
   {
    "kmr": "ber bi",
    "zza": "ver bi",
    "en": "toward",
    "src": "lez"
   },
   {
    "kmr": "befr",
    "zza": "vewre",
    "en": "snow",
    "src": "lez"
   },
   {
    "kmr": "barîn",
    "zza": "varayene",
    "en": "to rain, to snow",
    "src": "lez"
   }
  ],
  "test": [
   {
    "kmr": "bakur",
    "zza": "vakur",
    "en": "north",
    "src": "wf"
   },
   {
    "kmr": "belg",
    "zza": "velg",
    "en": "leaf",
    "src": "wf"
   },
   {
    "kmr": "belav",
    "zza": "vela",
    "en": "scattered",
    "src": "wf"
   }
  ]
 },
 {
  "id": "a-e",
  "order": 5,
  "title": "Kurmanji ê ↔ Zazaki a",
  "reliability": "often",
  "card": {
   "kmr>zza": {
    "en": "Where you say ê, Zazaki often says a: pênc is panc, kitêb is kitab, lê is la, sêv is saye. We found 15 pairs. Many words keep a on both sides (nan, dar), so use this mainly to recognise words.",
    "ku": "Li cihê ku tu ê dibêjî, zazakî pir caran a dibêje: pênc dibe panc, kitêb dibe kitab, lê dibe la, sêv dibe saye. Me 15 cot dîtin. Gelek peyv li herdu aliyan a ne (nan, dar), lewma vê bi taybetî ji bo naskirina peyvan bi kar bîne."
   }
  },
  "examples": [
   {
    "kmr": "pênc",
    "zza": "panc",
    "en": "five",
    "src": "lez"
   },
   {
    "kmr": "kitêb",
    "zza": "kitab",
    "en": "book",
    "src": "lez"
   },
   {
    "kmr": "lê",
    "zza": "la",
    "en": "but",
    "src": "lez"
   },
   {
    "kmr": "sêv",
    "zza": "saye",
    "en": "apple",
    "src": "lez"
   },
   {
    "kmr": "hêk",
    "zza": "hak",
    "en": "egg",
    "src": "lez"
   },
   {
    "kmr": "tenê",
    "zza": "tena",
    "en": "only, alone",
    "src": "lez"
   },
   {
    "kmr": "sibê",
    "zza": "siba",
    "en": "tomorrow",
    "src": "lez"
   }
  ],
  "test": [
   {
    "kmr": "pêncî",
    "zza": "pancas",
    "en": "fifty",
    "src": "lez"
   },
   {
    "kmr": "lêbelê",
    "zza": "labelê",
    "en": "however",
    "src": "lez"
   },
   {
    "kmr": "hêlîn",
    "zza": "halîn",
    "en": "nest",
    "src": "lez"
   },
   {
    "kmr": "kêlek",
    "zza": "kaleke",
    "en": "side",
    "src": "wf"
   }
  ]
 },
 {
  "id": "fem-e",
  "order": 6,
  "title": "Feminine nouns end in -e",
  "reliability": "usually",
  "card": {
   "kmr>zza": {
    "en": "This is grammar, not sound. A feminine noun carries -e on the bare word: av is awe, roj is roje, qelem is qeleme. Lezgîn lists dozens; we checked over 45. A few masculine nouns also end in -e (estare 'star', hewte 'week').",
    "ku": "Ev rêziman e, ne deng. Navdêra mê -e li ser peyva tazî digire: av dibe awe, roj dibe roje, qelem dibe qeleme. Lezgîn bi dehan dide; me ji 45-an zêdetir kontrol kirin. Çend navdêrên nêr jî bi -e diqedin (estare 'stêr', hewte 'hefte')."
   }
  },
  "examples": [
   {
    "kmr": "av",
    "zza": "awe",
    "en": "water",
    "src": "lez"
   },
   {
    "kmr": "roj",
    "zza": "roje",
    "en": "day",
    "src": "lez"
   },
   {
    "kmr": "gul",
    "zza": "gule",
    "en": "rose",
    "src": "lez"
   },
   {
    "kmr": "dar",
    "zza": "dare",
    "en": "tree (living)",
    "src": "lez"
   },
   {
    "kmr": "qelem",
    "zza": "qeleme",
    "en": "pen",
    "src": "lez"
   },
   {
    "kmr": "gol",
    "zza": "gole",
    "en": "lake",
    "src": "lez"
   },
   {
    "kmr": "kevok",
    "zza": "kevoke",
    "en": "dove",
    "src": "lez"
   },
   {
    "kmr": "fincan",
    "zza": "fincane",
    "en": "cup",
    "src": "lez"
   }
  ],
  "test": [
   {
    "kmr": "pel",
    "zza": "pele",
    "en": "leaf, page",
    "src": "wf"
   },
   {
    "kmr": "deşt",
    "zza": "deşte",
    "en": "plain",
    "src": "wf"
   },
   {
    "kmr": "gulan",
    "zza": "gulane",
    "en": "May",
    "src": "wf"
   },
   {
    "kmr": "sibat",
    "zza": "sibate",
    "en": "February",
    "src": "wf"
   }
  ]
 },
 {
  "id": "inf",
  "order": 7,
  "title": "Kurmanji -in ↔ Zazaki -ene",
  "reliability": "always",
  "card": {
   "kmr>zza": {
    "en": "Every Zazaki infinitive ends in -ene where yours ends in -in or -în. Take off -ene and you have the past stem, just as you take -in off kirin: kerdene → kerd- (kir-). In Lezgîn's verb glossary all of about 900 verbs end this way.",
    "ku": "Her rader bi zazakî bi -ene diqede, li cihê ku ya te bi -in an -în diqede. -ene jê bike, koka dema borî dimîne, çawa ku tu -in ji kirin jê dikî: kerdene → kerd- (kir-). Di ferhengoka lêkeran a Lezgîn de nêzîkî 900 lêker hene, hemû jî wisa diqedin."
   }
  },
  "examples": [
   {
    "kmr": "kirin",
    "zza": "kerdene",
    "en": "to do",
    "src": "lez"
   },
   {
    "kmr": "birin",
    "zza": "berdene",
    "en": "to carry away",
    "src": "lez"
   },
   {
    "kmr": "ketin",
    "zza": "kewtene",
    "en": "to fall",
    "src": "lez"
   },
   {
    "kmr": "mirin",
    "zza": "merdene",
    "en": "to die",
    "src": "lez"
   },
   {
    "kmr": "kuştin",
    "zza": "kiştene",
    "en": "to kill",
    "src": "lez"
   },
   {
    "kmr": "girtin",
    "zza": "girewtene",
    "en": "to take",
    "src": "lez"
   },
   {
    "kmr": "man",
    "zza": "mendene",
    "en": "to stay",
    "src": "lez"
   }
  ],
  "test": [
   {
    "kmr": "firotin",
    "zza": "rotene",
    "en": "to sell",
    "src": "lez"
   },
   {
    "kmr": "şûştin",
    "zza": "şutene",
    "en": "to wash",
    "src": "lez"
   },
   {
    "kmr": "şikandin",
    "zza": "şikitene",
    "en": "to break",
    "src": "lez"
   },
   {
    "kmr": "pehtin",
    "zza": "pewtene",
    "en": "to cook",
    "src": "lez"
   }
  ]
 }
];
})();
