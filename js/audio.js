// Speech wrapper. Two backends:
//   1. MLX-Audio TTS server (local, on-device Voxtral 4-bit) — preferred for
//      the language being learned.
//   2. Web Speech API — used for English and as the target-language fallback.
//
// The target language (its BCP-47 code and its Voxtral voice) is configured by
// the app from Lang.cfg() via setTargetLang()/setTargetVoice(), so the same
// wrapper serves Dutch, German, or any other Voxtral language.
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
    if (prefix === "de") {
      v = voices.find((x) => x.name && /german|deutsch/i.test(x.name));
      if (v) return v;
    }
    if (prefix === "en") {
      v = voices.find((x) => x.name && /english/i.test(x.name));
      if (v) return v;
    }
    return null;
  }

  // --- local speech servers ---
  // TTS  = Supertonic-3 (on-device ONNX/CoreML), default :5510
  // STT  = Whisper via the mlx-audio server, default :5500
  const params = new URLSearchParams(location.search);
  const ttsBase =
    params.get("tts") ||
    localStorage.getItem("learn:tts") ||
    "http://127.0.0.1:5510";
  const sttBase =
    params.get("stt") ||
    localStorage.getItem("learn:stt") ||
    "http://127.0.0.1:5500";
  const TTS_MODEL = "supertonic-3";
  const blobCache = new Map(); // `${voice}|${lang}|${text}` -> ObjectURL
  const MAX_CACHE = 80;

  let mlxState = "unknown"; // 'unknown' | 'probing' | 'available' | 'unavailable'
  let probePromise = null;

  // ---------- concurrency control ----------
  // Race we're guarding against: speak() awaits an MLX fetch that may take
  // 1-2s. If a SECOND speak() arrives before the first finishes, we kick off
  // another fetch. When BOTH fetches resolve they each create an Audio
  // element; the older orphans become untrackable and play through to
  // completion alongside the new one — that's the "voxtral + system voice on
  // top of each other" overlap.
  //
  // Safeguards:
  //   1. speakGen — bumps on every cancel/new-call. Each in-flight coroutine
  //      captures its gen and bails out after each await if it's stale.
  //   2. activeAudios — every <audio> we ever create is tracked here so
  //      cancelCurrent() can stop them all, including orphaned ones.
  //   3. activeFetches — AbortControllers for every in-flight mlxFetch.
  let speakGen = 0;
  const activeAudios = new Set();
  const activeFetches = new Set();

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
    speakGen++;                                    // invalidate every in-flight coroutine
    if (supported) window.speechSynthesis.cancel(); // stop Web Speech if it's talking
    for (const ctrl of activeFetches) {            // abort outstanding mlxFetches
      try { ctrl.abort(); } catch (_) {}
    }
    activeFetches.clear();
    for (const el of activeAudios) {               // stop EVERY <audio> still playing
      try { el.pause(); el.src = ""; el.load(); } catch (_) {}
    }
    activeAudios.clear();
  }

  async function ttsFetch(text, voice, lang) {
    const key = `${voice}|${lang}|${text}`;
    if (blobCache.has(key)) return blobCache.get(key);
    const ctrl = new AbortController();
    activeFetches.add(ctrl);
    try {
      const res = await fetch(`${ttsBase}/v1/audio/speech`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: TTS_MODEL, input: text, voice, language: lang, response_format: "wav" }),
        signal: ctrl.signal,
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
    } finally {
      activeFetches.delete(ctrl);
    }
  }

  function playUrl(url, opts, gen) {
    return new Promise((resolve, reject) => {
      if (gen !== speakGen) { resolve(); return; }
      const el = new window.Audio(url);
      activeAudios.add(el);
      el.playbackRate = opts.rate != null ? opts.rate : 1;
      el.volume = opts.volume != null ? opts.volume : 1;
      el.onended = () => {
        activeAudios.delete(el);
        if (opts.onend) opts.onend();
        resolve();
      };
      el.onerror = () => {
        activeAudios.delete(el);
        reject(new Error("playback failed"));
      };
      el.play().catch((e) => {
        activeAudios.delete(el);
        reject(e);
      });
    });
  }

  // Voice mapping. Supertonic voices are speaker PRESETS (M1/M2/F1/F2) that are
  // language-agnostic — the language is sent separately. The target language
  // uses the configured target voice; English uses the English voice.
  let targetVoice = "M1";
  let defaultEnglishVoice = "M1";
  let defaultLang = "nl-NL";        // BCP-47 code of the target language
  let targetSpeech = true;          // false for languages with no TTS/STT yet (e.g. Kurdish)
  function setTargetVoice(v) { if (v) targetVoice = v; }
  function setEnglishVoice(v) { if (v) defaultEnglishVoice = v; }
  function setTargetLang(code) { if (code) defaultLang = code; }
  function setTargetSpeech(on) { targetSpeech = on !== false; }
  function voiceForLang(lang, prefVoice) {
    if (prefVoice) return prefVoice;
    const prefix = (lang || defaultLang).toLowerCase().slice(0, 2);
    if (prefix === "en") return defaultEnglishVoice;
    return targetVoice;
  }

  function webSpeak(text, opts) {
    if (!supported || !text) return false;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = opts.lang || defaultLang;
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

  // Normalise text before it reaches the TTS model. Collapsed whitespace + a
  // trailing sentence terminator reduces a model's tendency to prepend a
  // garbled lead-in syllable on bare words/fragments (e.g. a single vocab word).
  function cleanForTts(text) {
    let t = String(text).replace(/\s+/g, " ").trim();
    if (t && !/[.!?…:;,]$/.test(t)) t += ".";
    return t;
  }

  async function speak(text, opts = {}) {
    if (!text) return false;
    cancelCurrent();
    const myGen = speakGen;          // capture generation; bail if it changes
    const lang = opts.lang || defaultLang;
    const lang2 = lang.toLowerCase().slice(0, 2);
    // Languages without a speech model yet (Kurdish) stay silent for target-
    // language text rather than mispronouncing it with a wrong system voice.
    if (!targetSpeech && lang2 !== "en") return false;
    const voice = voiceForLang(lang, opts.voice);
    const clean = cleanForTts(text);

    // Route through the on-device Supertonic TTS server for the target language
    // (and English).
    if (voice) {
      const useTts = await probeMlx();
      if (myGen !== speakGen) return false;   // cancelled while probing
      if (useTts) {
        let url = null;
        try {
          url = await ttsFetch(clean, voice, lang2);
        } catch (e) {
          if (e.name === "AbortError") return false;        // expected on cancel
          // The FETCH failed (server down / cold-start) — no audio was produced,
          // so Web Speech is the right fallback. Mark unavailable; the next call
          // re-probes and recovers once the server is ready.
          console.warn("Supertonic TTS fetch failed, falling back to Web Speech:", e);
          mlxState = "unavailable";
        }
        if (myGen !== speakGen) return false; // cancelled while fetching
        if (url) {
          // We HAVE valid Supertonic audio. A play() failure here is
          // environmental (autoplay policy, device hiccup); Web Speech would
          // only garble with the wrong system voice, so give up quietly instead
          // of falling back — avoids the "system voice then real voice" double.
          try {
            await playUrl(url, opts, myGen);
            return true;
          } catch (e) {
            if (e.name === "AbortError") return false;
            console.warn("TTS audio playback failed:", e);
            return false;
          }
        }
      }
    }
    if (myGen !== speakGen) return false;     // don't double up via fallback
    return webSpeak(clean, opts);
  }

  function cancel() { cancelCurrent(); }

  // Speech-to-text via the mlx-audio server's OpenAI-compatible Whisper endpoint
  // (separate from the Supertonic TTS server).
  const STT_MODEL = "mlx-community/whisper-large-v3-turbo-asr-fp16";
  async function transcribe(blob, opts = {}) {
    if (!blob || !blob.size) throw new Error("empty audio");
    const fd = new FormData();
    fd.append("file", blob, opts.filename || "speech.webm");
    fd.append("model", opts.model || STT_MODEL);
    const lang = opts.lang || defaultLang.slice(0, 2);
    if (lang) fd.append("language", lang);
    let res;
    try {
      res = await fetch(`${sttBase}/v1/audio/transcriptions`, { method: "POST", body: fd });
    } catch (e) {
      throw new Error("STT server not running — start with ./start-mlx.sh");
    }
    if (!res.ok) throw new Error(`transcribe ${res.status}`);
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("json")) {
      const data = await res.json();
      return (data.text || "").trim();
    }
    return (await res.text()).trim();
  }

  function hasTargetVoice() { return !!pickVoice(defaultLang); }
  function hasEnglishVoice() { return !!pickVoice("en-US"); }
  function backend() {
    if (mlxState === "available") return "mlx";
    if (mlxState === "unavailable") return "web";
    return "unknown";
  }
  function setTtsBase(url) {
    localStorage.setItem("learn:tts", url);
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
    hasTargetVoice,
    hasEnglishVoice,
    supported,
    pickVoice,
    backend,
    probeMlx,
    setTtsBase,
    setTargetVoice,
    setEnglishVoice,
    setTargetLang,
    setTargetSpeech,
    ttsBase,
  };
})();
