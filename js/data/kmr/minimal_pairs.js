// Northern Kurdish (Kurmanji, Latin Hawar script) minimal pairs for ear
// training. Each pair targets a phoneme contrast that English speakers
// chronically conflate: velar x vs plain h, the affricate ç vs c, ş vs s,
// uvular q vs velar k, and the long/short/quality vowel oppositions
// ê/î/i, û/u, a/e. Format:
//   { a: { nl, en }, b: { nl, en }, contrast: <descriptive label> }
// During the drill we play one of the two via Voxtral and the user picks which
// they heard. (`nl` = target-language slot, holds Kurmanji in Latin script.)
window.__DECK.kmr.MINIMAL_PAIRS = [
  // ---- x (kh) vs h (plain h) : English has only plain h ----
  { a: { nl: "xişt", en: "brick" },        b: { nl: "hişt", en: "he/she left" },  contrast: "x (kh) vs h" },
  { a: { nl: "xelat", en: "gift, prize" }, b: { nl: "helat", en: "sunrise" },     contrast: "x (kh) vs h" },

  // ---- ç (aspirated ch) vs c (voiced j) : English merges the voicing ----
  { a: { nl: "çar", en: "four" },  b: { nl: "car", en: "time, occasion" }, contrast: "ç (ch) vs c (j)" },
  { a: { nl: "çil", en: "forty" }, b: { nl: "cil", en: "clothes" },        contrast: "ç (ch) vs c (j)" },

  // ---- ş (sh) vs s : the sibilant place-of-articulation split ----
  { a: { nl: "şal", en: "trousers" }, b: { nl: "sal", en: "year" }, contrast: "ş (sh) vs s" },
  { a: { nl: "şûr", en: "sword" },    b: { nl: "sûr", en: "red" },  contrast: "ş (sh) vs s" },

  // ---- q (uvular q) vs k (velar k) : English speakers hear both as k ----
  { a: { nl: "qam", en: "stature, build" }, b: { nl: "kam", en: "which" },        contrast: "q (uvular) vs k" },
  { a: { nl: "qanûn", en: "law" },          b: { nl: "kanûn", en: "hearth, winter month" }, contrast: "q (uvular) vs k" },

  // ---- ê vs î : the mid-front vs close-front long vowel ----
  { a: { nl: "şêr", en: "lion" },        b: { nl: "şîr", en: "milk" },   contrast: "ê vs î" },
  { a: { nl: "jêr", en: "below, under" }, b: { nl: "jîr", en: "clever" }, contrast: "ê vs î" },

  // ---- î (long) vs i (short) : the length contrast English keeps dropping ----
  { a: { nl: "dîn", en: "mad, crazy" }, b: { nl: "din", en: "other" },       contrast: "î (long) vs i (short)" },
  { a: { nl: "pîr", en: "old" },        b: { nl: "pir", en: "bridge; very" }, contrast: "î (long) vs i (short)" },

  // ---- û (long) vs u (short) : the back-vowel length contrast ----
  { a: { nl: "kûr", en: "deep" },      b: { nl: "kur", en: "son, boy" }, contrast: "û (long) vs u (short)" },
  { a: { nl: "tû", en: "mulberry" },   b: { nl: "tu", en: "you; any" },  contrast: "û (long) vs u (short)" },

  // ---- a vs e : the open vs mid short vowel ----
  { a: { nl: "sar", en: "cold" },        b: { nl: "ser", en: "head, top" },   contrast: "a vs e" },
  { a: { nl: "bar", en: "load, burden" }, b: { nl: "ber", en: "front, stone" }, contrast: "a vs e" },
];
