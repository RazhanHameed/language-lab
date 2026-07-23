// Language manager. Holds the registry of learnable languages and the
// currently-active one. Each language config (js/lang/<id>.js) registers
// itself here; the engine (app.js, drills.js, audio.js) reads the active
// config via Lang.cfg() for everything language-specific — target-language
// code, voices, number/time spelling, error diagnosis, tips, calendar, etc.
//
// The bare data globals (VOCAB, SENTENCES, SCENARIOS, GRAMMAR, CONJUGATIONS,
// MINIMAL_PAIRS, CHUNKS, PASSAGES and the *_THEMES) are pointed at the active
// language's deck by Lang.use(), so the rest of the engine reads them
// unchanged.
window.Lang = (function () {
  const registry = {};   // id -> config
  const order = [];      // registration order (for the switcher)
  let activeId = null;

  const DECK_KEYS = [
    "VOCAB", "VOCAB_THEMES", "SENTENCES", "SENTENCE_THEMES",
    "SCENARIOS", "GRAMMAR", "CONJUGATIONS", "MINIMAL_PAIRS",
    "CHUNKS", "PASSAGES",
  ];

  function register(cfg) {
    registry[cfg.id] = cfg;
    if (!order.includes(cfg.id)) order.push(cfg.id);
  }

  // Point the bare data globals at the given language's deck.
  function applyDeck(id) {
    const deck = (window.__DECK && window.__DECK[id]) || {};
    for (const k of DECK_KEYS) window[k] = deck[k] || [];
  }

  function use(id) {
    if (!registry[id]) id = order[0];
    activeId = id;
    applyDeck(id);
    return registry[id];
  }

  function cfg() { return registry[activeId]; }
  function active() { return activeId; }
  function list() { return order.map((id) => registry[id]); }
  function has(id) { return !!registry[id]; }

  return { register, use, cfg, active, list, has };
})();
