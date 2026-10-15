/* Kurmanji to Zazaki bridge (kmr>zza): traps. Every Zazaki form is cited in P.SOURCES; see docs/bridges/zazaki.md. */
(function () {
  const B = (window.__BRIDGES = window.__BRIDGES || {});
  const P = (B["kmr-zza"] = B["kmr-zza"] || {});
  P.TRAPS = [
 {
  "id": "ber",
  "kind": "false-friend",
  "kmr": {
   "w": "ber",
   "en": "front"
  },
  "zza": {
   "w": "ber",
   "en": "door"
  },
  "fix": {
   "kmr>zza": {
    "w": "ver",
    "en": "front"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Zazaki ber is a door (your derî). 'In front of' uses ver: ver bi = ber bi.",
    "ku": "Ber bi zazakî derî ye. Ji bo 'ber' ver tê bikaranîn: ver bi = ber bi."
   }
  },
  "src": "lez"
 },
 {
  "id": "ri",
  "kind": "false-friend",
  "kmr": {
   "w": "rih",
   "en": "beard"
  },
  "zza": {
   "w": "rî",
   "en": "face"
  },
  "fix": {
   "kmr>zza": {
    "w": "erdîşe",
    "en": "beard"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Rî means 'face' (your rû). A beard is erdîşe.",
    "ku": "Rî bi zazakî rû ye. Rih erdîşe ye."
   }
  },
  "src": "lez"
 },
 {
  "id": "siya",
  "kind": "different",
  "kmr": {
   "w": "reş",
   "en": "black"
  },
  "zza": {
   "w": "sîya",
   "en": "black"
  },
  "fix": {
   "kmr>zza": {
    "w": "sîya",
    "en": "black"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Black is sîya. It looks like your sî / sîya 'shade', but means the colour.",
    "ku": "Reş bi zazakî sîya ye. Dişibe sî / sîya ya te, lê reng e."
   }
  },
  "src": "lez"
 },
 {
  "id": "na",
  "kind": "false-friend",
  "kmr": {
   "w": "na",
   "en": "no"
  },
  "zza": {
   "w": "na",
   "en": "this (feminine)"
  },
  "fix": {
   "kmr>zza": {
    "w": "ney",
    "en": "no"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Na is 'this' for a feminine noun (na roje). 'No' is ney.",
    "ku": "Na 'ev' e ji bo navdêra mê. 'Na' ya te bi zazakî ney e."
   }
  },
  "src": "lez"
 },
 {
  "id": "ma",
  "kind": "different",
  "kmr": {
   "w": "em",
   "en": "we"
  },
  "zza": {
   "w": "ma",
   "en": "we, us"
  },
  "fix": {
   "kmr>zza": {
    "w": "ma",
    "en": "we, us"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Ma is 'we' and 'us', one form for both. It is not your question word ma.",
    "ku": "Ma 'em' û 'me' ye, yek form ji bo herduyan. Ne ma ya pirsê ya te ye."
   }
  },
  "src": "lez"
 },
 {
  "id": "e_they",
  "kind": "false-friend",
  "kmr": {
   "w": "ê",
   "en": "will (ez ê ...)"
  },
  "zza": {
   "w": "ê",
   "en": "they"
  },
  "fix": {
   "kmr>zza": {
    "w": "do",
    "en": "will (future)"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Ê is 'they'. The future word is do: Ez do şirî = Ez ê biçim.",
    "ku": "Ê 'ew (pirhejmar)' e. Ji bo dema bê do tê: Ez do şirî = Ez ê biçim."
   }
  },
  "src": "lez"
 },
 {
  "id": "va",
  "kind": "false-friend",
  "kmr": {
   "w": "va",
   "en": "here, look (va ye)"
  },
  "zza": {
   "w": "va",
   "en": "wind"
  },
  "fix": {
   "kmr>zza": {
    "w": "ha",
    "en": "here, right now (ha ya, ha yo)"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Va is the wind (your ba). Your va ye is ha: A ha ya nan wena.",
    "ku": "Va bi zazakî ba ye. Va ye ya te ha ye: A ha ya nan wena."
   }
  },
  "src": "lez"
 },
 {
  "id": "dew",
  "kind": "false-friend",
  "kmr": {
   "w": "dew",
   "en": "ayran"
  },
  "zza": {
   "w": "dew",
   "en": "village (also dewe)"
  },
  "fix": {
   "kmr>zza": {
    "w": "do",
    "en": "ayran"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Dew means village. Your dew (ayran) is do.",
    "ku": "Dew bi zazakî gund e. Dewê te bi zazakî do ye."
   }
  },
  "src": "wf"
 },
 {
  "id": "mase",
  "kind": "false-friend",
  "kmr": {
   "w": "mase",
   "en": "table"
  },
  "zza": {
   "w": "mase",
   "en": "fish"
  },
  "fix": {
   "kmr>zza": {
    "w": "masa",
    "en": "table"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Mase is a fish (your masî). A table is masa.",
    "ku": "Mase bi zazakî masî ye. Mase ya te masa ye."
   }
  },
  "src": "lez"
 },
 {
  "id": "sole",
  "kind": "false-friend",
  "kmr": {
   "w": "sol",
   "en": "shoe"
  },
  "zza": {
   "w": "sole",
   "en": "salt"
  },
  "fix": {
   "kmr>zza": {
    "w": "sewle",
    "en": "shoe"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "In Lezgîn's texts sole is salt (your xwê). A shoe is sewle, though some villages say sole for it too.",
    "ku": "Di nivîsên Lezgîn de sole xwê ye. Sol bi zazakî sewle ye, lê hin gund jê re jî sole dibêjin."
   }
  },
  "src": "lez"
 },
 {
  "id": "kerra",
  "kind": "near-miss",
  "kmr": {
   "w": "kevir",
   "en": "stone"
  },
  "zza": {
   "w": "kerra",
   "en": "stone, rock"
  },
  "fix": {
   "kmr>zza": {
    "w": "kerra",
    "en": "stone"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "A stone is kerra, with a heavy rr. Kerr with no vowel is 'deaf', as for you.",
    "ku": "Kevir bi zazakî kerra ye, bi rr-ya qalind. Kerr bê dengdêr 'kerr' e, wek ya te."
   }
  },
  "src": "lez"
 },
 {
  "id": "zere",
  "kind": "near-miss",
  "kmr": {
   "w": "zer",
   "en": "yellow"
  },
  "zza": {
   "w": "zere",
   "en": "inside"
  },
  "fix": {
   "kmr>zza": {
    "w": "zerd",
    "en": "yellow"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Zere is 'inside' (Ez zere de şuxulîyena). Yellow is zerd.",
    "ku": "Zere 'hundir' e. Zer bi zazakî zerd e."
   }
  },
  "src": "lez"
 },
 {
  "id": "gos",
  "kind": "near-miss",
  "kmr": {
   "w": "goşt",
   "en": "meat"
  },
  "zza": {
   "w": "goş",
   "en": "ear"
  },
  "fix": {
   "kmr>zza": {
    "w": "goşt",
    "en": "meat"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Goş without t is an ear (your guh). Meat is goşt, as for you.",
    "ku": "Goş bê t guh e. Goşt wek ya te goşt e."
   }
  },
  "src": "lez"
 },
 {
  "id": "kewe",
  "kind": "different",
  "kmr": {
   "w": "kesk",
   "en": "green"
  },
  "zza": {
   "w": "kewe",
   "en": "green, blue"
  },
  "fix": {
   "kmr>zza": {
    "w": "kewe",
    "en": "green, blue"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Kewe covers green and blue. It has nothing to do with your kew 'partridge'.",
    "ku": "Kewe hem kesk hem şîn e. Têkiliya wê bi kewa te re tune."
   }
  },
  "src": "lez"
 },
 {
  "id": "derg",
  "kind": "near-miss",
  "kmr": {
   "w": "dereng",
   "en": "late"
  },
  "zza": {
   "w": "derg",
   "en": "long, tall"
  },
  "fix": {
   "kmr>zza": {
    "w": "erey",
    "en": "late"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Derg is long or tall (your dirêj). 'Late' is erey: ti erey mendî.",
    "ku": "Derg dirêj e. Dereng bi zazakî erey e: ti erey mendî."
   }
  },
  "src": "lez"
 },
 {
  "id": "veyve",
  "kind": "near-miss",
  "kmr": {
   "w": "bûk",
   "en": "bride"
  },
  "zza": {
   "w": "veyve",
   "en": "bride (f); wedding (m)"
  },
  "fix": {
   "kmr>zza": {
    "w": "veyve",
    "en": "bride (feminine)"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Veyve as a feminine noun is the bride; as a masculine noun it is the wedding.",
    "ku": "Veyve wek navdêra mê bûk e; wek navdêra nêr dawet e."
   }
  },
  "src": "lez"
 },
 {
  "id": "vile",
  "kind": "near-miss",
  "kmr": {
   "w": "stû",
   "en": "neck"
  },
  "zza": {
   "w": "vile",
   "en": "flower (f); neck (m)"
  },
  "fix": {
   "kmr>zza": {
    "w": "vile",
    "en": "neck (masculine)"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Vile as a masculine noun is the neck; as a feminine noun it is a flower.",
    "ku": "Vile wek navdêra nêr stû ye; wek navdêra mê kulîlk e."
   }
  },
  "src": "lez"
 },
 {
  "id": "roje",
  "kind": "near-miss",
  "kmr": {
   "w": "rojî",
   "en": "fast (in Ramadan)"
  },
  "zza": {
   "w": "roje",
   "en": "day (f); fast (m)"
  },
  "fix": {
   "kmr>zza": {
    "w": "roje",
    "en": "fast (masculine)"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Roje as a feminine noun is a day; as a masculine noun it is a fast. Speakers hear the stress.",
    "ku": "Roje wek navdêra mê roj e; wek navdêra nêr rojî ye. Axêver bi giraniyê ferq dikin."
   }
  },
  "src": "lez"
 },
 {
  "id": "gule",
  "kind": "near-miss",
  "kmr": {
   "w": "gule",
   "en": "bullet"
  },
  "zza": {
   "w": "gule",
   "en": "rose (f); bullet (m)"
  },
  "fix": {
   "kmr>zza": {
    "w": "gule",
    "en": "bullet (masculine)"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Gule is a rose when feminine, a bullet when masculine. Only stress tells them apart: feminine on the first syllable.",
    "ku": "Gule mê be gul e, nêr be gule ye. Tenê giranî ferq dike: ya mê li ser kîteya pêşîn e."
   }
  },
  "src": "lez"
 },
 {
  "id": "xale",
  "kind": "near-miss",
  "kmr": {
   "w": "xaltî",
   "en": "mother's sister"
  },
  "zza": {
   "w": "xale",
   "en": "mother's sister"
  },
  "fix": {
   "kmr>zza": {
    "w": "xale",
    "en": "mother's sister"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Add -e to xal and you get the aunt: xal (m) uncle, xale (f) aunt.",
    "ku": "-e li xal zêde bike, dibe xaltî: xal (nêr) xal e, xale (mê) xaltî ye."
   }
  },
  "src": "lez"
 },
 {
  "id": "dar",
  "kind": "false-friend",
  "kmr": {
   "w": "dar",
   "en": "tree"
  },
  "zza": {
   "w": "dar",
   "en": "dry wood"
  },
  "fix": {
   "kmr>zza": {
    "w": "dare",
    "en": "tree (living)"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Masculine dar is dead, dry wood. A living tree is feminine dare.",
    "ku": "Dar a nêr darê hişk e. Dara şîn dare ye, mê."
   }
  },
  "src": "lez"
 },
 {
  "id": "ez_fem",
  "kind": "near-miss",
  "kmr": {
   "w": "Ez hatim",
   "en": "I came"
  },
  "zza": {
   "w": "Ez ameya",
   "en": "I came (a man says it too)"
  },
  "fix": {
   "kmr>zza": {
    "w": "Ez ameya",
    "en": "I came"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Ez always takes feminine endings, whoever speaks: a man also says Ez ameya, never *Ez ame.",
    "ku": "Ez her tim paşgirên mê digire, kî dibêje bila bibêje: mêr jî dibêje Ez ameya."
   }
  },
  "src": "lez"
 },
 {
  "id": "kitab",
  "kind": "near-miss",
  "kmr": {
   "w": "kitêb",
   "en": "book (feminine)"
  },
  "zza": {
   "w": "kitab",
   "en": "book (masculine)"
  },
  "fix": {
   "kmr>zza": {
    "w": "kitab",
    "en": "book"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Your kitêb is feminine; Zazaki kitab is masculine. So the definite oblique takes -î: Kitabî bide Zelale.",
    "ku": "Kitêba te mê ye; kitab bi zazakî nêr e. Lewma di rewşa tewandî de -î digire: Kitabî bide Zelale."
   }
  },
  "src": "lez"
 },
 {
  "id": "keye",
  "kind": "different",
  "kmr": {
   "w": "mal",
   "en": "house"
  },
  "zza": {
   "w": "keye",
   "en": "house (masculine)"
  },
  "fix": {
   "kmr>zza": {
    "w": "keye",
    "en": "house"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "House is keye, and it is masculine: keyeyê ma (our house), not with -a.",
    "ku": "Mal bi zazakî keye ye û nêr e: keyeyê ma, ne bi -a."
   }
  },
  "src": "lez"
 },
 {
  "id": "sere",
  "kind": "near-miss",
  "kmr": {
   "w": "ser",
   "en": "head"
  },
  "zza": {
   "w": "sere",
   "en": "head (masculine)"
  },
  "fix": {
   "kmr>zza": {
    "w": "sere",
    "en": "head"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Sere ends in -e but is masculine: sereyê ey (his head). Not every -e is feminine.",
    "ku": "Sere bi -e diqede lê nêr e: sereyê ey. Ne her -e mê ye."
   }
  },
  "src": "wf"
 },
 {
  "id": "her",
  "kind": "near-miss",
  "kmr": {
   "w": "ker",
   "en": "donkey"
  },
  "zza": {
   "w": "her",
   "en": "donkey; also 'every'"
  },
  "fix": {
   "kmr>zza": {
    "w": "her",
    "en": "donkey"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Her is a donkey (your ker), and also 'every', as for you. Context decides.",
    "ku": "Her bi zazakî ker e, û wek ya te 'her' jî ye. Hevok diyar dike."
   }
  },
  "src": "wf"
 },
 {
  "id": "kardi",
  "kind": "different",
  "kmr": {
   "w": "kêr",
   "en": "knife"
  },
  "zza": {
   "w": "kardî",
   "en": "knife (feminine)"
  },
  "fix": {
   "kmr>zza": {
    "w": "kardî",
    "en": "knife"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Kardî ends in -î but is one feminine knife, not a plural.",
    "ku": "Kardî bi -î diqede lê kêreke mê ye, ne pirhejmar e."
   }
  },
  "src": "lez"
 },
 {
  "id": "kena",
  "kind": "different",
  "kmr": {
   "w": "keç",
   "en": "girl"
  },
  "zza": {
   "w": "kêna",
   "en": "girl, daughter (feminine)"
  },
  "fix": {
   "kmr>zza": {
    "w": "kêna",
    "en": "girl"
   }
  },
  "warn": {
   "kmr>zza": {
    "en": "Kêna ends in -a but is a feminine noun; some villages say çêna.",
    "ku": "Kêna bi -a diqede û navdêreke mê ye; hin gund çêna dibêjin."
   }
  },
  "src": "lez"
 }
];
})();
