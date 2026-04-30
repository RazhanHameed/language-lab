// Speech wrapper. Two backends:
//   1. MLX-Audio TTS server (local, on-device Voxtral 4-bit) — preferred for Dutch.
//   2. Web Speech API — used for English and as Dutch fallback.
//
// The MLX server URL is auto-detected from a ?tts=URL query param (set by
// start-mlx.sh) or inferred from localhost:5500. If unreachable, we silently
// fall back to Web Speech.
//
// Named `Speech` (not `Audio`) so we don't shadow window.Audio (HTMLAudioElement).
window.Speech = (function () {
  const supported = typeof window.speechSynthesis !== "undefined";
  let cachedVoices = [];

  function refreshVoices() {
    if (!supported) return [];
    cachedVoices = window.speechSynthesis.getVoices();
    return cachedVoices;
  }
  if (supported) {
    refreshVoices();
    if (typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
      window.speechSynthesis.onvoiceschanged = refreshVoices;
    }
  }

  function pickVoice(lang) {
    if (!supported || !lang) return null;
    const voices = cachedVoices.length ? cachedVoices : refreshVoices();
    const prefix = lang.toLowerCase().slice(0, 2);
    let v = voices.find((x) => x.lang && x.lang.toLowerCase() === lang.toLowerCase());
    if (v) return v;
    v = voices.find((x) => x.lang && x.lang.toLowerCase().startsWith(prefix));
    if (v) return v;
    if (prefix === "nl") {
      v = voices.find((x) => x.name && /dutch|nederland/i.test(x.name));
      if (v) return v;
    }
    if (prefix === "en") {
      v = voices.find((x) => x.name && /english/i.test(x.name));
      if (v) return v;
    }
    return null;
  }

  // --- MLX server wiring ---
  const params = new URLSearchParams(location.search);
  const ttsBase =
    params.get("tts") ||
    localStorage.getItem("leer-nl:tts") ||
    "http://127.0.0.1:5500";
  const MLX_MODEL = "mlx-community/Voxtral-4B-TTS-2603-mlx-4bit";
  const blobCache = new Map(); // `${voice}|${text}` -> ObjectURL
  const MAX_CACHE = 80;

  let mlxState = "unknown"; // 'unknown' | 'probing' | 'available' | 'unavailable'
  let probePromise = null;
  let currentEl = null;     // currently playing HTMLAudioElement

  // Cache only the SUCCESS state. Failures stay un-cached so a transient
  // network glitch on first probe doesn't permanently disable MLX for the
  // session (the user might start the server right after the app loads).
  async function probeMlx() {
    if (mlxState === "available") return true;
    if (probePromise) return probePromise;
    mlxState = "probing";
    probePromise = (async () => {
      try {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 2500);
        const res = await fetch(`${ttsBase}/v1/models`, { signal: ctrl.signal });
        clearTimeout(timer);
        if (res.ok) mlxState = "available";
        else mlxState = "unavailable";
      } catch {
        mlxState = "unavailable";
      } finally {
        probePromise = null;
      }
      return mlxState === "available";
    })();
    return probePromise;
  }

  function cancelCurrent() {
    if (supported) window.speechSynthesis.cancel();
    if (currentEl) {
      try { currentEl.pause(); currentEl.src = ""; } catch (_) {}
      currentEl = null;
    }
  }

  async function mlxFetch(text, voice) {
    const key = `${voice}|${text}`;
    if (blobCache.has(key)) return blobCache.get(key);
    const res = await fetch(`${ttsBase}/v1/audio/speech`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: MLX_MODEL, input: text, voice, response_format: "wav" }),
    });
    if (!res.ok) throw new Error(`tts ${res.status}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    blobCache.set(key, url);
    if (blobCache.size > MAX_CACHE) {
      const oldest = blobCache.keys().next().value;
      const stale = blobCache.get(oldest);
      blobCache.delete(oldest);
      URL.revokeObjectURL(stale);
    }
    return url;
  }

  function playUrl(url, opts) {
    return new Promise((resolve, reject) => {
      const el = new window.Audio(url);
      currentEl = el;
      el.playbackRate = opts.rate != null ? opts.rate : 1;
      el.volume = opts.volume != null ? opts.volume : 1;
      el.onended = () => { if (opts.onend) opts.onend(); resolve(); };
      el.onerror = () => reject(new Error("playback failed"));
      el.play().catch(reject);
    });
  }

  // Voice mapping: every supported lang resolves to a Voxtral voice.
  // Voxtral 4B-TTS-2603 ships 9 languages; we expose en + nl in the UI.
  let defaultDutchVoice = "nl_male";
  let defaultEnglishVoice = "casual_female";
  function setDutchVoice(v) { defaultDutchVoice = v; }
  function setEnglishVoice(v) { defaultEnglishVoice = v; }
  function mlxVoiceForLang(lang, prefVoice) {
    if (prefVoice) return prefVoice;
    const prefix = (lang || "").toLowerCase().slice(0, 2);
    if (prefix === "nl") return defaultDutchVoice;
    if (prefix === "en") return defaultEnglishVoice;
    // Other supported Voxtral langs: fr, es, de, it, pt, ar, hi
    const fallback = { fr: "fr_male", es: "es_male", de: "de_male", it: "it_male", pt: "pt_male", ar: "ar_male", hi: "hi_male" };
    return fallback[prefix] || null;
  }

  function webSpeak(text, opts) {
    if (!supported || !text) return false;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = opts.lang || "nl-NL";
      u.rate = opts.rate != null ? opts.rate : 0.9;
      u.pitch = opts.pitch || 1;
      u.volume = opts.volume != null ? opts.volume : 1;
      const voice = pickVoice(u.lang);
      if (voice) u.voice = voice;
      if (opts.onend) u.onend = opts.onend;
      window.speechSynthesis.speak(u);
      return true;
    } catch (e) {
      console.warn("webSpeak failed", e);
      return false;
    }
  }

  async function speak(text, opts = {}) {
    if (!text) return false;
    cancelCurrent();
    const lang = opts.lang || "nl-NL";
    const voice = mlxVoiceForLang(lang, opts.voice);

    // Route through MLX for any language Voxtral supports (nl, en, fr, es, de,
    // it, pt, ar, hi). Falls back to Web Speech if MLX is offline or errors.
    if (voice) {
      const useMlx = await probeMlx();
      if (useMlx) {
        try {
          const url = await mlxFetch(text, voice);
          await playUrl(url, opts);
          return true;
        } catch (e) {
          console.warn("MLX TTS failed, falling back to Web Speech:", e);
          mlxState = "unavailable"; // don't keep retrying this session
        }
      }
    }
    return webSpeak(text, opts);
  }

  function cancel() { cancelCurrent(); }

  // Speech-to-text via mlx-audio's OpenAI-compatible Whisper endpoint.
  // First call triggers a 1-3 min model download server-side; subsequent
  // calls return in ~1-2 s for short utterances. Returns the transcript
  // string, or throws on failure (caller should toast a friendly error).
  const STT_MODEL = "mlx-community/whisper-large-v3-turbo-asr-fp16";
  async function transcribe(blob, opts = {}) {
    if (!blob || !blob.size) throw new Error("empty audio");
    const useMlx = await probeMlx();
    if (!useMlx) throw new Error("MLX server not running");
    const fd = new FormData();
    fd.append("file", blob, opts.filename || "speech.webm");
    fd.append("model", opts.model || STT_MODEL);
    if (opts.lang) fd.append("language", opts.lang);
    const res = await fetch(`${ttsBase}/v1/audio/transcriptions`, {
      method: "POST",
      body: fd,
    });
    if (!res.ok) throw new Error(`transcribe ${res.status}`);
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("json")) {
      const data = await res.json();
      return (data.text || "").trim();
    }
    return (await res.text()).trim();
  }

  function hasDutchVoice() { return !!pickVoice("nl-NL"); }
  function hasEnglishVoice() { return !!pickVoice("en-US"); }
  function backend() {
    if (mlxState === "available") return "mlx";
    if (mlxState === "unavailable") return "web";
    return "unknown";
  }
  function setTtsBase(url) {
    localStorage.setItem("leer-nl:tts", url);
    mlxState = "unknown";
  }

  // Probe once at startup so UI can reflect status without waiting for first click.
  if (typeof window !== "undefined") {
    setTimeout(probeMlx, 50);
  }

  return {
    speak,
    cancel,
    transcribe,
    hasDutchVoice,
    hasEnglishVoice,
    supported,
    pickVoice,
    backend,
    probeMlx,
    setTtsBase,
    setDutchVoice,
    setEnglishVoice,
    ttsBase,
  };
})();
