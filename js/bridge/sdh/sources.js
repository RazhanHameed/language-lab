// Kalhori (Southern Kurdish) bridge for Sorani speakers: meta and sources.
// Pair ckb-sdh, direction ckb>sdh. Every Kalhori form is attested in the sources listed in sources.js
// or built from attested pieces (built: true). Nothing here has been checked by a native speaker.
(function () {
  const B = (window.__BRIDGES = window.__BRIDGES || {});
  const P = (B["ckb-sdh"] = B["ckb-sdh"] || {});
  P.META = {
 "id": "ckb-sdh",
 "src": "ckb",
 "tgt": "sdh",
 "dirs": [
  "ckb>sdh"
 ],
 "name": {
  "en": "Kalhori for Sorani speakers",
  "ku": "کەڵهوڕی بۆ قسەکەرانی سۆرانی"
 },
 "variety": {
  "en": "Kalhori (Southern Kurdish) of the Kermanshah–Khanaqin area, as described in Ni'met Elî Saye's grammar, written in Sorani-style Arabic script plus the letter ۊ.",
  "ku": "کەڵهوڕی (کوردیی باشووری)ی ناوچەی کرماشان تا خانەقین، بەو شێوەیەی نیعمەت عەلی سایە لە ڕێزمانەکەیدا باسی کردووە، بە ڕێنووسی سۆرانی و پیتی «ۊ»."
 },
 "grounding": {
  "en": "Every Kalhori form comes from Saye's Kalhori grammar (2004) or the Kalhori-tagged lists of the Zmanî Kurdî channel, with a few words from a Southern Kurdish dictionary, Southern prose and a parallel sentence set; the Sorani lines are our translations. Nothing here has been checked by a native speaker of Kalhori.",
  "ku": "هەموو شێوە کەڵهوڕییەکان لە ڕێزمانی کەڵهوڕیی سایە (٢٠٠٤) یان لە لیستە کەڵهوڕییەکانی کەناڵی «زمانی کوردی»یەوە وەرگیراون، چەند وشەیەکیش لە فەرهەنگێکی کوردیی باشووری و پەخشانی باشووری و کۆمەڵە ڕستەیەکی هاوتەریب؛ ڕستە سۆرانییەکان وەرگێڕانی خۆمانن. هیچ شتێک لێرەدا هێشتا لەلایەن قسەکەرێکی زگماکیی کەڵهوڕییەوە پشکنین نەکراوە."
 }
};
  P.SOURCES = [
 {
  "id": "saye",
  "kind": "grammar",
  "name": "Rêzmanî Kurdî: Zarî Kełhurî / ڕێزمانی کوردی – زاری کەڵهوڕی (Ni'met Elî Saye, Ministry of Culture, Silêmanî 2004)",
  "what": "A Kalhori grammar written in Sorani by a native speaker, with hundreds of example sentences. The base source: every table and most sentences come from it."
 },
 {
  "id": "zk",
  "kind": "wordlist",
  "name": "Zmanî Kurdî Telegram channel (t.me/ZMANIKURDI4), posts tagged Kalhori",
  "what": "Persian–Kalhori word lists and verb tables. Used for body parts, colours, time words and the full tables of 'to see' and the negative present."
 },
 {
  "id": "jalilian",
  "kind": "dictionary",
  "name": "Ferhengî Başûr / فەرهەنگی باشوور (Ebbas Celîliyan 'Ako', Kurdish Heritage Institute)",
  "what": "Southern Kurdish–Kurdish–Persian dictionary (Kermanshah, Ilam, Lorestan). Used for the Latin reading of the vowel ۊ."
 },
 {
  "id": "gerus",
  "kind": "dictionary",
  "name": "Ferhengî Gerûs (Reza Sohrabi & Ca'fer Sirişabadî, University of Kurdistan, Sanandaj 2011)",
  "what": "Garrusi–Sorani–Persian dictionary. Garrusi is a neighbouring Southern variety, not Kalhori: used only for counts behind the sound rules and to show variants."
 },
 {
  "id": "zendi",
  "kind": "grammar",
  "name": "Muqtereh lil-kitabe bil-lehce el-Feyliye (Hîwa Zendî, Aras, Erbil 2007)",
  "what": "A proposal for writing Feyli Kurdish, with Feyli verb tables. Used only to compare Feyli forms."
 },
 {
  "id": "feyli2001",
  "kind": "book",
  "name": "Şi'rî Kurdî Başûr / شعر کوردی باشوور (Elî Hisên Feylî, tr. into Southern Kurdish by Şorş Şawaz, Kurd Feyli Shafaq, 2001)",
  "what": "Southern Kurdish prose and verse in the Kermanshahi register. Used for one short reading."
 },
 {
  "id": "parallel",
  "kind": "corpus",
  "name": "English–Southern Kurdish parallel sentence set (compiler not recorded)",
  "what": "Literary translations into Southern Kurdish; many rows are Sorani, so only one clearly Southern form is used."
 }
];
})();
