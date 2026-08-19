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
      lastExportAt: 0,    // ms epoch — used by the export-reminder banner
      seenScenarios: {},  // sId -> ms epoch last viewed
      seenGrammar: {},    // gId -> ms epoch last viewed
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

  // Returns the JSON string AND mutates state to record the export
  // timestamp. Caller must persist() afterwards.
  function exportJSON(state) {
    state.lastExportAt = Date.now();
    return JSON.stringify(state, null, 2);
  }

  function importJSON(text) {
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== "object") throw new Error("Invalid file");
    return { ...freshState(), ...parsed };
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
  };
})();
