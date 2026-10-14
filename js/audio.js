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
    // Safari/iOS (and Chrome) load voices asynchronously: getVoices() is []
    // until "voiceschanged" fires. pickVoice() also re-reads when the cache is empty.
    try { window.speechSynthesis.addEventListener("voiceschanged", refreshVoices); }
    catch (_) { window.speechSynthesis.onvoiceschanged = refreshVoices; }
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
    for (const el of activeAudios) {               // stop the playing <audio>
      try {
        el.onended = el.onerror = null;
        el.pause();
        el.removeAttribute("src");                 // not src="" (fires a spurious error event)
        el.load();
      } catch (_) {}
    }
    activeAudios.clear();
  }

  // ---------- one persistent <audio> element + gesture unlock ----------
  // iOS Safari only lets an <audio> element play() if that element was started
  // inside a user gesture; speak() awaits fetches first, so a fresh
  // `new Audio(url).play()` there is rejected (NotAllowedError) and nothing
  // plays. Instead ONE element is created up front and "unlocked" on the first
  // tap/key press by playing a tiny silent clip; every later playback just
  // swaps its .src, which iOS then allows outside a gesture.
  const sharedEl = new window.Audio();
  sharedEl.preload = "auto";
  sharedEl.setAttribute("playsinline", "");
  let audioUnlocked = false;
  let unlocking = false;
  const SILENT_WAV = (function () {
    // 0.05 s of 8 kHz mono 8-bit silence
    const n = 400, b = new Uint8Array(44 + n);
    const dv = new DataView(b.buffer);
    const tag = (o, t) => { for (let i = 0; i < 4; i++) b[o + i] = t.charCodeAt(i); };
    tag(0, "RIFF"); dv.setUint32(4, 36 + n, true); tag(8, "WAVE"); tag(12, "fmt ");
    dv.setUint32(16, 16, true); dv.setUint16(20, 1, true); dv.setUint16(22, 1, true);
    dv.setUint32(24, 8000, true); dv.setUint32(28, 8000, true); dv.setUint16(32, 1, true);
    dv.setUint16(34, 8, true); tag(36, "data"); dv.setUint32(40, n, true);
    b.fill(128, 44);
    let bin = ""; for (let i = 0; i < b.length; i++) bin += String.fromCharCode(b[i]);
    return "data:audio/wav;base64," + btoa(bin);
  })();
  const UNLOCK_EVENTS = ["touchend", "pointerup", "click", "keydown"];
  function removeUnlockListeners() {
    UNLOCK_EVENTS.forEach((t) => document.removeEventListener(t, unlockAudio, true));
  }
  function unlockAudio() {
    if (audioUnlocked) { removeUnlockListeners(); return; }
    // Web Speech on iOS also needs a gesture-started first utterance.
    if (supported && !unlockAudio.spoke) {
      unlockAudio.spoke = true;
      try {
        const u = new SpeechSynthesisUtterance(" ");
        u.volume = 0;
        window.speechSynthesis.speak(u);
      } catch (_) {}
    }
    if (unlocking) return;
    if (activeAudios.size) return;               // real playback in flight; it unlocks on success
    unlocking = true;
    try {
      sharedEl.src = SILENT_WAV;
      const p = sharedEl.play();
      const done = (ok) => {
        unlocking = false;
        if (ok) {
          audioUnlocked = true;
          removeUnlockListeners();
          if (!activeAudios.size) { try { sharedEl.pause(); } catch (_) {} }
        }
      };
      if (p && p.then) p.then(() => done(true), () => done(false));
      else done(true);
    } catch (_) { unlocking = false; }
  }
  if (typeof document !== "undefined") {
    UNLOCK_EVENTS.forEach((t) => document.addEventListener(t, unlockAudio, { capture: true, passive: true }));
  }

  // --- pre-generated static audio (backendless deploy) ---
  // audio/manifest.json lists the available clip keys; each clip is
  // audio/<key>.mp3. When a clip exists we play it directly — no server needed.
  // Keys are SHA-256(voice|lang|cleanText)[:20], matching build_static_audio.py.
  const audioBase = params.get("audio") || "audio";
  let pregen = null;          // Set<key> once loaded
  let pregenVoices = {};      // lang -> the voice the clips were rendered with
  // "no-cache" = revalidate every load (a cheap 304 when unchanged). A cached
  // manifest from an older deploy would hide every clip added since.
  const pregenReady = fetch(`${audioBase}/manifest.json`, { cache: "no-cache" })
    .then((r) => (r.ok ? r.json() : null))
    .then((m) => {
      if (Array.isArray(m)) pregen = new Set(m);                       // legacy shape
      else if (m && m.keys) { pregen = new Set(m.keys); pregenVoices = m.voices || {}; }
      else pregen = new Set();
      return pregen;
    })
    .catch(() => { pregen = new Set(); return pregen; });

  async function clipKey(voice, lang, clean) {
    if (!(typeof crypto !== "undefined" && crypto.subtle)) return null;
    const data = new TextEncoder().encode(`${voice}|${lang}|${clean}`);
    const buf = await crypto.subtle.digest("SHA-256", data);
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 20);
  }

  async function staticFetch(key) {
    const ck = "static:" + key;
    if (blobCache.has(ck)) return blobCache.get(ck);
    const ctrl = new AbortController();
    activeFetches.add(ctrl);
    try {
      const res = await fetch(`${audioBase}/${key}.mp3`, { signal: ctrl.signal });
      if (!res.ok) throw new Error(`static ${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      blobCache.set(ck, url);
      if (blobCache.size > MAX_CACHE) {
        const oldest = blobCache.keys().next().value;
        URL.revokeObjectURL(blobCache.get(oldest));
        blobCache.delete(oldest);
      }
      return url;
    } finally {
      activeFetches.delete(ctrl);
    }
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
      const el = sharedEl;
      el.onended = el.onerror = null;
      activeAudios.add(el);
      const rate = opts.rate != null ? opts.rate : 1;
      el.src = url;                                   // setting src resets playbackRate...
      el.defaultPlaybackRate = rate;
      el.playbackRate = rate;                         // ...so set it after
      el.preservesPitch = true;
      el.webkitPreservesPitch = true;
      el.volume = opts.volume != null ? opts.volume : 1;
      el.onended = () => {
        el.onended = el.onerror = null;
        activeAudios.delete(el);
        if (opts.onend) opts.onend();
        resolve();
      };
      el.onerror = () => {
        el.onended = el.onerror = null;
        activeAudios.delete(el);
        reject(new Error("playback failed"));
      };
      let p;
      try { p = el.play(); } catch (e) { p = Promise.reject(e); }
      Promise.resolve(p).then(() => {
        audioUnlocked = true;
        if (el.playbackRate !== rate) el.playbackRate = rate;   // Safari can reset it on start
      }, (e) => {
        if (gen !== speakGen) { resolve(); return; }  // superseded; not an error
        el.onended = el.onerror = null;
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
  let targetSpeech = true;          // false for languages with no TTS at all
  let targetLive = true;            // false = pre-rendered clips only (e.g. Kurdish via OmniVoice)
  function setTargetVoice(v) { if (v) targetVoice = v; }
  function setEnglishVoice(v) { if (v) defaultEnglishVoice = v; }
  function setTargetLang(code) { if (code) defaultLang = code; }
  function setTargetSpeech(on) { targetSpeech = on !== false; }
  function setTargetLive(on) { targetLive = on !== false; }
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
    // Primary subtag: "nl-NL" -> "nl", "ckb" -> "ckb". Part of the clip key, so
    // it must match the `lang` the build script hashed with.
    const lang2 = lang.toLowerCase().split("-")[0];
    // Languages without a speech model stay silent for target-language text
    // rather than mispronouncing it with a wrong system voice.
    if (!targetSpeech && lang2 !== "en") return false;
    const voice = voiceForLang(lang, opts.voice);
    const clean = cleanForTts(text);

    // 1) Pre-generated static audio — works with no backend, so try it first.
    if (voice) {
      try { await pregenReady; } catch (_) {}
      if (myGen !== speakGen) return false;
      if (pregen && pregen.size) {
        let key = await clipKey(voice, lang2, clean);
        // Fall back to the voice the clips were rendered with, so any voice
        // choice still plays a pre-generated clip on the static site.
        if (key && !pregen.has(key) && pregenVoices[lang2] && pregenVoices[lang2] !== voice) {
          const alt = await clipKey(pregenVoices[lang2], lang2, clean);
          if (alt && (pregen.has(alt) || !targetLive)) key = alt;
        }
        if (myGen !== speakGen) return false;
        // Pre-rendered-only languages have nothing else to fall back to, so
        // try the clip even when the manifest doesn't list it (a stale
        // manifest, or a clip deployed after it) — a miss is just a 404.
        if (key && (pregen.has(key) || !targetLive)) {
          try {
            const url = await staticFetch(key);
            if (myGen !== speakGen) return false;
            await playUrl(url, opts, myGen);
            return true;
          } catch (e) {
            if (e.name === "AbortError") return false;
            // Autoplay blocked (no gesture yet): stay quiet, don't fall back to a system voice.
            if (e.name === "NotAllowedError") return false;
            // fall through to the live server / Web Speech
          }
        }
      }
    }

    // Pre-rendered-only languages (Kurdish: OmniVoice clips built offline) have
    // no live server and no usable system voice — stay silent on a cache miss.
    if (!targetLive && lang2 !== "en") return false;

    // 2) Route through the on-device Supertonic TTS server (local dev / new
    // content not yet pre-rendered), then Web Speech.
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
            if (e.name === "AbortError" || e.name === "NotAllowedError") return false;
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
  function isPlaying() {
    return activeAudios.size > 0 || (supported && window.speechSynthesis.speaking);
  }

  // Speech-to-text via the mlx-audio server's OpenAI-compatible Whisper endpoint
  // (separate from the Supertonic TTS server).
  const STT_MODEL = "mlx-community/whisper-large-v3-turbo-asr-fp16";
  async function transcribe(blob, opts = {}) {
    if (!blob || !blob.size) throw new Error("empty audio");
    const fd = new FormData();
    const ext = /mp4|aac|m4a/.test(blob.type) ? "m4a" : /ogg/.test(blob.type) ? "ogg" : /wav/.test(blob.type) ? "wav" : "webm";
    fd.append("file", blob, opts.filename || "speech." + ext);
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

  // MediaRecorder: Safari has no audio/webm;codecs=opus, so pick the first
  // type the browser says it can record (webm/opus, then mp4), else its default.
  function recorderOptions() {
    try {
      const t = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"]
        .find((m) => window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(m));
      return t ? { mimeType: t } : {};
    } catch (_) { return {}; }
  }
  function recordingSupported() {
    return !!(window.MediaRecorder && navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
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
    isPlaying,
    transcribe,
    recorderOptions,
    recordingSupported,
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
    setTargetLive,
    pregenReady,
    pregenCount: () => (pregen ? pregen.size : 0),
    ttsBase,
  };
})();
