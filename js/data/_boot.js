// Deck registry. Each language's data files register their arrays under
// window.__DECK.<lang>; Lang.use() then points the bare globals (VOCAB,
// SENTENCES, …) that the engine reads at the active language's deck.
window.__DECK = window.__DECK || {};
window.__DECK.nl = window.__DECK.nl || {};
window.__DECK.de = window.__DECK.de || {};
window.__DECK.ckb = window.__DECK.ckb || {};
window.__DECK.kmr = window.__DECK.kmr || {};
