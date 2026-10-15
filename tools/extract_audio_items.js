#!/usr/bin/env node
/* Enumerate every target-language text the app can speak, per language, with the
 * voice the app would use. Emits {items: [{voice, lang, engine, text}], voices}
 * to stdout for the audio pre-generation build. `engine` is the pack's
 * `ttsEngine` ("supertonic" by default, "omnivoice" for Kurdish). Languages
 * with hasSpeech === false are skipped. */
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
global.window = {};
global.location = { search: "" };

function load(rel) { require(path.join(ROOT, rel)); }

const LANGS = fs.readdirSync(path.join(ROOT, "js/data"), { withFileTypes: true })
  .filter((d) => d.isDirectory()).map((d) => d.name);   // js/bridge is NOT under js/data, so it is never scanned as a language

load("js/data/_boot.js");
for (const l of LANGS) {
  for (const f of ["vocab", "sentences", "scenarios", "grammar", "conjugations", "minimal_pairs", "chunks", "passages", "pronunciation"]) {
    if (f === "pronunciation" && !fs.existsSync(path.join(ROOT, `js/data/${l}/${f}.js`))) continue;   // optional per language
    load(`js/data/${l}/${f}.js`);
  }
}
load("js/lang.js");
global.Lang = global.window.Lang;
for (const l of LANGS) load(`js/lang/${l}.js`);

const Lang = global.window.Lang;
const DECK = global.window.__DECK;
const items = [];
const seen = new Set();
let engine = "supertonic";   // set per language in the loop below
function add(voice, lang, text) {
  if (!text) return;
  const t = String(text).trim();
  if (!t) return;
  const k = `${voice}|${lang}|${t}`;
  if (seen.has(k)) return;
  seen.add(k);
  items.push({ voice, lang, engine, text: t });
}

// Reader tokenisation — mirrors renderPassage() in app.js.
function readerTokens(para) {
  return para.split(/(\s+|[.,!?;:"'()«»،؟؛—])/).filter(
    (tok) => tok && !/^\s+$/.test(tok) && !/^[.,!?;:"'()«»،؟؛—]$/.test(tok)
  );
}

for (const cfg of Lang.list()) {
  if (cfg.hasSpeech === false) continue;      // no TTS for this language
  const lang = cfg.id;
  engine = cfg.ttsEngine || "supertonic";
  const V = cfg.defaultVoice;
  const narrow = Array.from(new Set([...(cfg.narrowVoices || []), V]));
  const d = DECK[lang];

  (d.VOCAB || []).forEach((v) => {
    add(V, lang, v.nl);
    if (v.example && v.example.nl) add(V, lang, v.example.nl);
  });
  (d.SENTENCES || []).forEach((s) => add(V, lang, s.nl));
  (d.CHUNKS || []).forEach((c) => add(V, lang, c.nl));
  (d.GRAMMAR || []).forEach((g) => (g.examples || []).forEach((ex) => add(V, lang, ex.nl)));
  (d.MINIMAL_PAIRS || []).forEach((p) => { add(V, lang, p.a.nl); add(V, lang, p.b.nl); });
  const pronKeys = (cfg.conjugationPronouns || []).map((p) => p.key);
  (d.CONJUGATIONS || []).forEach((verb) => pronKeys.forEach((k) => add(V, lang, verb[k])));
  // Scenario lines: default voice + narrow-listen alternate voices.
  (d.SCENARIOS || []).forEach((s) => (s.dialogue || []).forEach((line) => {
    narrow.forEach((voice) => add(voice, lang, line.nl));
  }));
  (d.PASSAGES || []).forEach((p) => {
    (p.paragraphs || []).forEach((para) => {
      add(V, lang, para);
      // Skip punctuation-only tokens (e.g. Sorani «» or —) — nothing to say.
      readerTokens(para).filter((tok) => /\p{L}/u.test(tok)).forEach((tok) => add(V, lang, tok));
    });
  });
  // Pronunciation guide: every example and practice sentence.
  const P = d.PRONUNCIATION;
  if (P) {
    (P.sections || []).forEach((s) => (s.rules || []).forEach((r) => (r.examples || []).forEach((ex) => add(V, lang, ex.nl))));
    (P.practice || []).forEach((ex) => add(V, lang, ex.nl));
  }
  // Drill answers that are generated (numbers 0-100, times on 5-min marks).
  for (let n = 0; n <= 100; n++) add(V, lang, cfg.numberToWord(n));
  for (let h = 1; h <= 12; h++) for (let m = 0; m < 60; m += 5) add(V, lang, cfg.timeToWord(h, m));
}

// Bridge course (Sorani <-> Kurmanji): every Kurdish text a bridge "hear it" button can speak,
// in the voice/engine of the language that text belongs to.
(function addBridge() {
  const bdir = path.join(ROOT, "js/bridge");
  if (!fs.existsSync(bdir)) return;
  global.window.__BRIDGE = {};
  for (const f of fs.readdirSync(bdir).filter((x) => x.endsWith(".js")).sort()) load(`js/bridge/${f}`);
  const B = global.window.__BRIDGE;
  const side = {};
  for (const l of ["ckb", "kmr"]) {
    const cfg = Lang.list().find((c) => c.id === l);
    if (cfg && cfg.hasSpeech !== false) side[l] = { cfg, voice: cfg.defaultVoice };
  }
  const say = (l, text) => { if (!side[l] || !text) return; engine = side[l].cfg.ttsEngine || "supertonic"; add(side[l].voice, l, text); };
  const both = (o) => { if (o) { say("ckb", o.ckb); say("kmr", o.kmr); } };
  (B.LEXICON || []).forEach(both);
  (B.RULES || []).forEach((r) => { (r.examples || []).forEach(both); (r.test || []).forEach(both); });
  (B.FRAMES || []).forEach((f) => {
    (f.items || []).forEach(both);
    (f.pi || []).forEach((q) => say(q.show, q.text));
  });
  (B.TRAPS || []).forEach((t) => {
    say("ckb", t.ckb && t.ckb.w); say("kmr", t.kmr && t.kmr.w);
    Object.entries(t.fix || {}).forEach(([dir, fx]) => say(dir.split(">")[1], fx && fx.w));
  });
  ((B.INTRO && B.INTRO.script) || []).forEach((r) => both(r.ex));
  (B.FERRISS || []).forEach(both);
  (B.READING || []).forEach((r) => (r.sents || []).forEach(both));
})();

// Per-language "primary" pre-render voice (the pack default) — lets the runtime
// fall back to a pre-rendered clip even if the user picked a different voice.
const voices = {};
for (const cfg of Lang.list()) {
  if (cfg.hasSpeech !== false) voices[cfg.id] = cfg.defaultVoice;
}
for (const it of items) {   // the runtime keys clips by the langCode's primary subtag
  const code = Lang.list().find((c) => c.id === it.lang).langCode.toLowerCase().split("-")[0];
  if (code !== it.lang) throw new Error(`lang id ${it.lang} != langCode subtag ${code}`);
}

process.stdout.write(JSON.stringify({ items, voices }));
process.stderr.write(`extracted ${items.length} unique items across ${Object.keys(voices).length} spoken languages\n`);
