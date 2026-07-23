// German minimal pairs for ear training. Each pair targets a specific phoneme
// contrast that English speakers chronically conflate. The format is:
//   { a: { nl, en }, b: { nl, en }, contrast: <descriptive label> }
// During the drill we play one of the two via Voxtral and the user picks
// which they heard. (`nl` = target-language slot, holds German.)
window.__DECK.de.MINIMAL_PAIRS = [
  // ---- short vs long vowels (German's biggest single trap) ----
  { a: { nl: "Stadt", en: "city" },   b: { nl: "Staat", en: "state" },    contrast: "short a vs long aa" },
  { a: { nl: "Bett", en: "bed" },     b: { nl: "Beet", en: "flower bed" }, contrast: "short e vs long ee" },
  { a: { nl: "offen", en: "open" },   b: { nl: "Ofen", en: "oven" },      contrast: "short o vs long o" },
  { a: { nl: "Kamm", en: "comb" },    b: { nl: "kam", en: "came" },       contrast: "short a vs long a" },
  { a: { nl: "Mitte", en: "middle" }, b: { nl: "Miete", en: "rent" },     contrast: "short i vs long ie" },

  // ---- umlauts (the classic hurdle for English speakers) ----
  { a: { nl: "schon", en: "already" }, b: { nl: "schön", en: "beautiful" }, contrast: "o vs ö" },
  { a: { nl: "Mutter", en: "mother" }, b: { nl: "Mütter", en: "mothers" }, contrast: "u vs ü" },
  { a: { nl: "lesen", en: "to read" }, b: { nl: "lösen", en: "to solve" }, contrast: "e vs ö" },
  { a: { nl: "Kiste", en: "box" },    b: { nl: "Küste", en: "coast" },    contrast: "i vs ü" },
  { a: { nl: "vielen", en: "many" },  b: { nl: "fühlen", en: "to feel" }, contrast: "ie vs ü" },

  // ---- ch: the ich-laut, the ach-laut, and near neighbours ----
  { a: { nl: "Kirche", en: "church" }, b: { nl: "Kirsche", en: "cherry" }, contrast: "ch (soft) vs sch" },
  { a: { nl: "Nacht", en: "night" },  b: { nl: "nackt", en: "naked" },    contrast: "ch (throaty) vs ck" },

  // ---- consonants English speakers swap ----
  { a: { nl: "wir", en: "we" },       b: { nl: "vier", en: "four" },      contrast: "w (v-sound) vs v (f-sound)" },
  { a: { nl: "Zeit", en: "time" },    b: { nl: "seit", en: "since" },     contrast: "z (ts) vs s" },

  // ---- the ei / ie spelling trap and the eu diphthong ----
  { a: { nl: "Wein", en: "wine" },    b: { nl: "Wien", en: "Vienna" },    contrast: "ei (eye) vs ie (ee)" },
  { a: { nl: "Leute", en: "people" }, b: { nl: "Laute", en: "sounds" },   contrast: "eu (oy) vs au (ow)" },
];
