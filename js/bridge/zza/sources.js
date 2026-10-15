/* Kurmanji to Zazaki bridge (kmr>zza): sources. Every Zazaki form is cited in P.SOURCES; see docs/bridges/zazaki.md. */
(function () {
  const B = (window.__BRIDGES = window.__BRIDGES || {});
  const P = (B["kmr-zza"] = B["kmr-zza"] || {});
  P.META = {
 "id": "kmr-zza",
 "src": "kmr",
 "tgt": "zza",
 "dirs": [
  "kmr>zza"
 ],
 "name": {
  "en": "Kurmanji to Zazaki",
  "ku": "Ji kurmancî ber bi zazakî"
 },
 "variety": {
  "en": "Standard written Zazaki (Kirmanckî / Kirdkî) of the regions outside Dêrsim, as Roşan Lezgîn writes it, following the Vate group's spelling.",
  "ku": "Zazakiya nivîskî ya standard (kirmanckî / kirdkî) ya herêmên derveyî Dêrsimê, wek ku Roşan Lezgîn dinivîse, li gor rastnivîsa Koma Vateyê."
 },
 "grounding": {
  "en": "Every Zazaki word and sentence comes from Roşan Lezgîn's comparative grammar (2013), the Zazaki entries of Wîkîferheng, or a small set of English–Zazaki children's-book sentences; the few table cells we combined from attested pieces are marked. No native speaker has checked this course yet.",
  "ku": "Her peyv û hevokeke zazakî ji rêzimana berawirdî ya Roşan Lezgîn (2013), ji navnîşanên zazakî yên Wîkîferhengê, an ji çend hevokên pirtûkên zarokan ên îngilîzî–zazakî ne; ew çend xaneyên tabloyan ên ku me ji perçeyên belgekirî li hev anîne nîşankirî ne. Hîn tu axêverekî zazakî ev kurs kontrol nekiriye."
 }
};
  P.SOURCES = [
 {
  "id": "lez",
  "name": "Ji bo Kurmancan bi Awayê Muqayeseyî Gramera Kirdkî (Zazakî) (Roşan Lezgîn, Weşanxaneya Roşna, Diyarbekir 2013)",
  "what": "A comparative Zazaki grammar written in Kurmanji for Kurmanji speakers: paradigms, example sentences with Kurmanji versions, reading texts and a verb glossary. The base source for this course.",
  "kind": "grammar"
 },
 {
  "id": "wf",
  "name": "Wîkîferheng, the Kurdish Wiktionary: Zazakî entries (ku.wiktionary.org, CC BY-SA)",
  "what": "Zazaki headwords glossed in Kurmanji. Used for some extra words and for counting sound correspondences.",
  "kind": "dictionary"
 },
 {
  "id": "ez",
  "name": "English–Zazaki parallel sentences from translated children's picture books (publisher not recorded)",
  "what": "Used for a few 'there is' and copula sentences that Lezgîn does not give.",
  "kind": "corpus"
 }
];
})();
