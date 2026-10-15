// Tiny localStorage wrapper. Keeps each language's app state in its own JSON
// blob so Dutch and German progress never mix. The active key is set by the
// app from Lang.cfg().storageKey before load().
window.Store = (function () {
  let KEY = "leer-nl:v1";
  function setKey(k) { KEY = k; }

  function freshState() {
    return {
      version: 1,
      cards: {},          // cardId -> SRS state { ef, interval, reps, due, lapses, lastQuality }
      sessions: [],       // [{ date: 'YYYY-MM-DD', reviewed, correct }]
      streak: 0,
      lastSessionDate: null,
      goals: [],          // Plan goals (see js/goals.js)
      newByDate: {},      // 'YYYY-MM-DD' -> number of cards met for the first time that day
      passagesRead: {},   // passage id -> ms epoch first opened
      lastExportAt: 0,    // ms epoch — used by the export-reminder banner
      seenScenarios: {},  // sId -> ms epoch last viewed
      seenGrammar: {},    // gId -> ms epoch last viewed
      coach: { seen: {}, dismissed: {} }, // onboarding tips: key -> times met / dismissed
      pronunciation: { last: null, read: {} }, // pronunciation guide: last section id, sectionId -> ms epoch first read
      bridge: {                                // bridge course (js/bridge.js): which Kurdish variety the learner already speaks
        known: { kmr: null, ckb: null },       // target -> "ckb" | "kmr" | null
        explainIn: "ku",                       // "ku" (learner's own variety) | "en"
        done: {},                              // frame id / "rule:<id>" / "view:<x>" / "read:<id>" -> ms epoch
        probe: {},                             // direction -> latest placement-probe result
        scriptLevel: { ckb: 0 },               // reading-guide fading: 0 shown, 1 tap, 2 hidden
        scriptHist: { ckb: [] },               // recent right/wrong (1/0) that drive the fading
      },
      settings: {
        theme: "auto",          // 'auto' | 'light' | 'dark'
        sessionSize: 16,        // cards per session
        dailyGoal: 20,          // target reviews per day
        prefRate: 0.9,          // TTS rate
        autoPlay: true,         // auto-pronounce on card flip
        ratingMode: "four",     // 'four' (Again/Hard/Good/Easy) | 'two' (Wrong/Right)
        targetVoice: null,      // MLX voice for the language being learned (filled from Lang default)
        englishVoice: "M1",     // Supertonic preset for English audio (M1/M2/F1/F2)
      },
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return freshState();
      const parsed = JSON.parse(raw);
      // Forward-compat: merge any missing keys from freshState.
      const fresh = freshState();
      return {
        ...fresh,
        ...parsed,
        settings: { ...fresh.settings, ...(parsed.settings || {}) },
      };
    } catch (e) {
      console.warn("State corrupted, resetting.", e);
      return freshState();
    }
  }

  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save state.", e);
    }
  }

  function reset() {
    localStorage.removeItem(KEY);
  }

  // Shared across languages: progress in the other variety bridges (js/bridge.js), so a
  // Hawrami or Zazaki course keeps its place whichever app language is active.
  // Shape: { v: 1, pairs: { "<pairId>": { done, probe, cards, explainIn } } }.
  const SHARED_KEY = "langlab:bridges:v1";
  function loadShared() {
    try {
      const raw = localStorage.getItem(SHARED_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return parsed && typeof parsed === "object" ? parsed : { v: 1, pairs: {} };
    } catch (e) {
      console.warn("Bridge progress unreadable, starting fresh.", e);
      return { v: 1, pairs: {} };
    }
  }
  function saveShared(obj) {
    try { localStorage.setItem(SHARED_KEY, JSON.stringify(obj)); } catch (e) { console.error("Failed to save bridge progress.", e); }
  }

  // Returns the JSON string AND mutates state to record the export
  // timestamp. Caller must persist() afterwards.
  // The backup also carries the shared bridge progress (as `sharedBridges`).
  function exportJSON(state) {
    state.lastExportAt = Date.now();
    return JSON.stringify({ ...state, sharedBridges: loadShared() }, null, 2);
  }

  function importJSON(text) {
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== "object") throw new Error("Invalid file");
    const { sharedBridges, ...rest } = parsed;
    if (sharedBridges && typeof sharedBridges === "object" && sharedBridges.pairs && typeof sharedBridges.pairs === "object") {
      // Never lose progress: per pair, keep whichever copy has more in it.
      const cur = loadShared();
      cur.pairs = cur.pairs && typeof cur.pairs === "object" ? cur.pairs : {};
      const size = (p) => (p && typeof p === "object") ? Object.keys(p.done || {}).length + Object.keys(p.cards || {}).length : -1;
      for (const [id, p] of Object.entries(sharedBridges.pairs)) if (size(p) > size(cur.pairs[id])) cur.pairs[id] = p;
      saveShared(cur);
    }
    return { ...freshState(), ...rest };
  }

  // Trigger a browser download of the current state. Used both by the
  // explicit Export button and by the periodic auto-checkpoint.
  function downloadBackup(state, prefix = "learn") {
    const blob = new Blob([exportJSON(state)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const today = new Date().toISOString().slice(0, 10);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${prefix}-backup-${today}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  // Days since the last successful export. Returns Infinity if never.
  function daysSinceExport(state) {
    if (!state.lastExportAt) return Infinity;
    return (Date.now() - state.lastExportAt) / (1000 * 60 * 60 * 24);
  }

  return {
    setKey, load, save, reset, exportJSON, importJSON, downloadBackup, daysSinceExport, freshState,
    loadShared, saveShared,
  };
})();
