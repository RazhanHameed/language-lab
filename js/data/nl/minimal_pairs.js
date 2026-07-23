// Dutch minimal pairs for ear training. Each pair targets a specific phoneme
// contrast that English speakers chronically conflate. The format is:
//   { a: { nl, en }, b: { nl, en }, contrast: <descriptive label> }
// During the drill we play one of the two via Voxtral and the user picks
// which they heard.
window.__DECK.nl.MINIMAL_PAIRS = [
  // ---- short vs long vowels (Dutch's biggest single trap) ----
  { a: { nl: "man", en: "man" },     b: { nl: "maan", en: "moon" },     contrast: "short a vs long aa" },
  { a: { nl: "bos", en: "forest" },  b: { nl: "boos", en: "angry" },    contrast: "short o vs long oo" },
  { a: { nl: "pen", en: "pen" },     b: { nl: "peen", en: "carrot" },   contrast: "short e vs long ee" },
  { a: { nl: "vis", en: "fish" },    b: { nl: "vies", en: "dirty" },    contrast: "short i vs ie (long ee-sound)" },
  { a: { nl: "kop", en: "head/cup" }, b: { nl: "koop", en: "buy" },     contrast: "short o vs long oo" },
  { a: { nl: "rat", en: "rat" },     b: { nl: "raad", en: "advice" },   contrast: "short a vs long aa" },
  { a: { nl: "lek", en: "leak" },    b: { nl: "leek", en: "layperson" }, contrast: "short e vs long ee" },

  // ---- the famous Dutch ui ----
  { a: { nl: "huis", en: "house" },  b: { nl: "hoes", en: "cover" },    contrast: "ui (rounded) vs oe (oo)" },
  { a: { nl: "huis", en: "house" },  b: { nl: "heus", en: "really" },   contrast: "ui vs eu" },
  { a: { nl: "buis", en: "tube" },   b: { nl: "bus", en: "bus" },       contrast: "ui vs short u" },

  // ---- diphthong territory (ij vs ei vs ee) ----
  { a: { nl: "wijn", en: "wine" },   b: { nl: "ween", en: "(I) cry" },  contrast: "ij vs ee" },
  { a: { nl: "rijden", en: "to ride" }, b: { nl: "raden", en: "to guess" }, contrast: "ij vs aa" },

  // ---- the throaty G ----
  { a: { nl: "goed", en: "good" },   b: { nl: "koud", en: "cold" },     contrast: "g (throat) vs k (stop)" },
  { a: { nl: "graag", en: "gladly" }, b: { nl: "kraak", en: "crack" },  contrast: "g vs k word-initial" },

  // ---- eu (rounded) vs other vowels ----
  { a: { nl: "neus", en: "nose" },   b: { nl: "nies", en: "(I) sneeze" }, contrast: "eu vs ie" },
  { a: { nl: "leuk", en: "fun" },    b: { nl: "luik", en: "hatch" },    contrast: "eu vs ui" },
];
