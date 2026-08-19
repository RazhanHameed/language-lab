#!/usr/bin/env node
/* Enumerate every target-language text the app can speak, per language, with the
 * voice the app would use. Emits a JSON array of {voice, lang, text} to stdout
 * for the audio pre-generation build. Only languages with speech (hasSpeech !==
 * false) are included — Kurdish is skipped. */
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
global.window = {};
global.location = { search: "" };

function load(rel) { require(path.join(ROOT, rel)); }

load("js/data/_boot.js");
for (const l of ["nl", "de"]) {
  for (const f of ["vocab", "sentences", "scenarios", "grammar", "conjugations", "minimal_pairs", "chunks", "passages"]) {
    load(`js/data/${l}/${f}.js`);
  }
}
load("js/lang.js");
global.Lang = global.window.Lang;
load("js/lang/nl.js");
load("js/lang/de.js");

const Lang = global.window.Lang;
const DECK = global.window.__DECK;
const items = [];
const seen = new Set();
function add(voice, lang, text) {
  if (!text) return;
  const t = String(text).trim();
  if (!t) return;
  const k = `${voice}|${lang}|${t}`;
  if (seen.has(k)) return;
  seen.add(k);
  items.push({ voice, lang, text: t });
}

// Reader tokenisation — mirrors renderPassage() in app.js.
function readerTokens(para) {
  return para.split(/(\s+|[.,!?;:"'()])/).filter(
    (tok) => tok && !/^\s+$/.test(tok) && !/^[.,!?;:"'()]$/.test(tok)
  );
}

for (const cfg of Lang.list()) {
  if (cfg.hasSpeech === false) continue;      // Kurdish: no TTS yet
  const lang = cfg.id;
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
      readerTokens(para).forEach((tok) => add(V, lang, tok));
    });
  });
  // Drill answers that are generated (numbers 0-100, times on 5-min marks).
  for (let n = 0; n <= 100; n++) add(V, lang, cfg.numberToWord(n));
  for (let h = 1; h <= 12; h++) for (let m = 0; m < 60; m += 5) add(V, lang, cfg.timeToWord(h, m));
}

// Per-language "primary" pre-render voice (the pack default) — lets the runtime
// fall back to a pre-rendered clip even if the user picked a different voice.
const voices = {};
for (const cfg of Lang.list()) {
  if (cfg.hasSpeech !== false) voices[cfg.id] = cfg.defaultVoice;
}

process.stdout.write(JSON.stringify({ items, voices }));
process.stderr.write(`extracted ${items.length} unique items across ${Object.keys(voices).length} spoken languages\n`);
