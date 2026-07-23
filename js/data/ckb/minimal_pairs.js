// Central Kurdish (Sorani, Arabic script) minimal pairs for ear training. Each
// pair targets a phoneme contrast that English speakers chronically conflate:
// the pharyngeal ح vs plain ه, velar خ vs غ, uvular ق vs velar ک, the strong
// rolled ڕ vs the tapped ر, and long/quality vowel oppositions. Format:
//   { a: { nl, en }, b: { nl, en }, contrast: <descriptive label> }
// During the drill we play one of the two via Voxtral and the user picks which
// they heard. (`nl` = target-language slot, holds Sorani in Arabic script.)
window.__DECK.ckb.MINIMAL_PAIRS = [
  // ---- ه (plain h) vs ح (pharyngeal ḥ) : English has only plain h ----
  { a: { nl: "هەوا", en: "air, weather" }, b: { nl: "حەوا", en: "Eve (name)" },   contrast: "h vs pharyngeal ḥ" },
  { a: { nl: "هەیوان", en: "veranda" },    b: { nl: "حەیوان", en: "animal" },      contrast: "h vs pharyngeal ḥ" },

  // ---- خ (kh) vs غ (voiced gh) : both foreign to English, easily merged ----
  { a: { nl: "داخ", en: "grief, regret" }, b: { nl: "داغ", en: "hot, branded" },   contrast: "x (kh) vs gh" },
  { a: { nl: "خەیر", en: "good, welfare" }, b: { nl: "غەیر", en: "other than" },    contrast: "x (kh) vs gh" },

  // ---- ق (uvular q) vs ک (velar k) : English speakers hear both as k ----
  { a: { nl: "قەڵەم", en: "pen" },   b: { nl: "کەڵەم", en: "cabbage" },  contrast: "q (uvular) vs k" },
  { a: { nl: "قوڵ", en: "deep" },    b: { nl: "کوڵ", en: "boiling" },    contrast: "q (uvular) vs k" },
  { a: { nl: "قاڵ", en: "quarrel" }, b: { nl: "کاڵ", en: "unripe" },     contrast: "q (uvular) vs k" },

  // ---- ر (tapped r) vs ڕ (strong rolled ř) : a true Sorani phoneme split ----
  { a: { nl: "کەر", en: "donkey" },   b: { nl: "کەڕ", en: "deaf" },      contrast: "tap r vs rolled ř" },
  { a: { nl: "سوور", en: "red" },     b: { nl: "سووڕ", en: "a turn, spin" }, contrast: "tap r vs rolled ř" },
  { a: { nl: "برین", en: "wound" },   b: { nl: "بڕین", en: "to cut" },   contrast: "tap r vs rolled ř" },

  // ---- ی [î] vs ێ [ê] : the close vs mid-front long vowel ----
  { a: { nl: "شیر", en: "milk" },    b: { nl: "شێر", en: "lion" },       contrast: "î vs ê" },
  { a: { nl: "ژیر", en: "clever" },  b: { nl: "ژێر", en: "under, below" }, contrast: "î vs ê" },

  // ---- ۆ [o] vs وو [û] : the mid vs close back rounded vowel ----
  { a: { nl: "بۆن", en: "smell, scent" }, b: { nl: "بوون", en: "to be, existence" }, contrast: "o vs û" },
  { a: { nl: "خۆ", en: "self" },          b: { nl: "خوو", en: "habit, nature" },      contrast: "o vs û" },

  // ---- ا [a] vs ە [e] : the open vs mid short vowel ----
  { a: { nl: "ماست", en: "yogurt" }, b: { nl: "مەست", en: "drunk" },     contrast: "a vs e" },
  { a: { nl: "بار", en: "load, burden" }, b: { nl: "بەر", en: "front, fruit" }, contrast: "a vs e" },
];
