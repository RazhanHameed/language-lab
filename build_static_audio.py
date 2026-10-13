#!/usr/bin/env python3
"""Pre-generate on-device TTS audio for every spoken word/sentence so the app
can run as a fully static site (no TTS backend).

- Reads the item list produced by tools/extract_audio_items.js.
- For each {voice, lang, engine, text}: cleans the text the SAME way the app
  does, hashes (voice|lang|clean) with SHA-256, and writes audio/<key>.mp3.
- Engines: "supertonic" (Supertonic-3: nl, de, ...) and "omnivoice"
  (OmniVoice on GPU: Kurdish ckb/kmr — see omnivoice_tts.py). Each engine is
  imported only if it has clips to render, so a cached engine needs no install.
- CACHE: if audio/<key>.mp3 already exists it is left untouched — re-runs only
  synthesise genuinely new/changed content.
- Writes audio/manifest.json (the full key list) so the app knows what's
  available and can fetch it without hitting a server.

Supertonic is parallelised across processes (each worker holds its own
model); OmniVoice runs in-process on one GPU, batched.

Usage: build_static_audio.py [items.json]      (default /tmp/audio_items.json)
Env:   AUDIO_WORKERS (default 6)  AUDIO_ENGINES (e.g. "omnivoice": render only these)
       OMNIVOICE_BATCH (default 4)
"""
import hashlib
import json
import os
import re
import sys
from concurrent.futures import ProcessPoolExecutor

ROOT = os.path.dirname(os.path.abspath(__file__))
AUDIO_DIR = os.path.join(ROOT, "audio")
ITEMS = sys.argv[1] if len(sys.argv) > 1 else "/tmp/audio_items.json"
WORKERS = int(os.environ.get("AUDIO_WORKERS", "6"))
ENGINES = set(filter(None, os.environ.get("AUDIO_ENGINES", "").split(",")))  # empty = all
OV_BATCH = int(os.environ.get("OMNIVOICE_BATCH", "4"))
OV_TRIES = 4           # takes per clip before giving up on a whispered render
OV_MIN_VOICED = 0.15   # voiced-frame ratio below this = whispered / garbled
BITRATE = 48  # kbps, mono — plenty for speech

os.makedirs(AUDIO_DIR, exist_ok=True)
_PUNCT_END = re.compile(r"[.!?…:;,]$")


def clean_for_tts(text):  # mirror of cleanForTts() in js/audio.js
    t = re.sub(r"\s+", " ", str(text)).strip()
    if t and not _PUNCT_END.search(t):
        t += "."
    return t


def key_for(voice, lang, clean):
    return hashlib.sha256(f"{voice}|{lang}|{clean}".encode("utf-8")).hexdigest()[:20]


# --- per-process Supertonic model (created once per worker via initializer) ---
_G = {}


def _init_worker():
    from supertonic import TTS
    t = TTS(model="supertonic-3", auto_download=True, intra_op_num_threads=2)
    _G["tts"] = t
    _G["styles"] = {v: t.get_voice_style(voice_name=v) for v in ("M1", "M2", "F1", "F2")}


def _work(task):
    import numpy as np
    import lameenc
    from supertonic import SUPPORTED_LANGUAGES
    key, voice, lang, clean = task
    try:
        tts, styles = _G["tts"], _G["styles"]
        audio, _ = tts.synthesize(
            clean, voice_style=styles.get(voice, styles["M1"]),
            lang=(lang if lang in SUPPORTED_LANGUAGES else None),
        )
        a = np.clip(np.asarray(audio).squeeze(), -1.0, 1.0)
        pcm = (a * 32767.0).astype("<i2").tobytes()
        enc = lameenc.Encoder()
        enc.set_bit_rate(BITRATE)
        enc.set_in_sample_rate(44100)
        enc.set_channels(1)
        enc.set_quality(5)
        mp3 = enc.encode(pcm) + enc.flush()
        with open(os.path.join(AUDIO_DIR, key + ".mp3"), "wb") as f:
            f.write(mp3)
        return (key, None)
    except Exception as e:  # noqa
        return (key, str(e))


def render_supertonic(todo):
    with ProcessPoolExecutor(max_workers=WORKERS, initializer=_init_worker) as ex:
        for i, (k, err) in enumerate(ex.map(_work, todo, chunksize=4), 1):
            if err:
                print(f"[audio] FAILED {k}: {err}", flush=True)
            if i % 100 == 0 or i == len(todo):
                print(f"[audio]   supertonic {i}/{len(todo)}", flush=True)


def render_omnivoice(todo):
    import omnivoice_tts as ov
    model = ov.load_model()
    groups = {}  # (lang, voice) -> [(key, clean)]
    for k, voice, lang, clean in todo:
        groups.setdefault((lang, voice), []).append((k, clean))
    done = 0
    for (lang, voice), rows in sorted(groups.items()):
        prompt = ov.load_voice(model, lang, voice)
        rows.sort(key=lambda r: len(r[1]))  # similar lengths batch efficiently
        for b in range(0, len(rows), OV_BATCH):
            batch = rows[b:b + OV_BATCH]
            # Sampling is stochastic, so a whispered take is re-sampled; keep the
            # most-voiced of up to OV_TRIES takes per clip.
            best = {}  # key -> (voiced ratio, audio)
            pending = batch
            for _ in range(OV_TRIES):
                try:
                    audios = ov.synthesize(model, [c for _, c in pending], lang, prompt=prompt)
                except Exception as e:  # noqa
                    print(f"[audio] FAILED batch {lang}/{voice}: {e}", flush=True)
                    break
                for (k, _), a in zip(pending, audios):
                    v = ov.voiced_ratio(a, model.sampling_rate)
                    if k not in best or v > best[k][0]:
                        best[k] = (v, a)
                pending = [r for r in pending if best[r[0]][0] < OV_MIN_VOICED]
                if not pending:
                    break
            for k, (v, a) in best.items():
                if v < OV_MIN_VOICED:
                    print(f"[audio] low-voicing clip kept ({v:.2f}) {lang}/{voice}: "
                          f"{dict(batch)[k]}", flush=True)
                with open(os.path.join(AUDIO_DIR, k + ".mp3"), "wb") as f:
                    f.write(ov.to_mp3(a, model.sampling_rate, BITRATE))
            done += len(batch)
            if done % 96 < len(batch) or done == len(todo):
                print(f"[audio]   omnivoice {done}/{len(todo)}", flush=True)


RENDERERS = {"supertonic": render_supertonic, "omnivoice": render_omnivoice}


def main():
    data = json.load(open(ITEMS, encoding="utf-8"))
    if isinstance(data, dict):
        items = data.get("items", [])
        voices_map = data.get("voices", {})
    else:  # legacy: bare list of items
        items = data
        voices_map = {}
    tasks = {}  # key -> (voice, lang, clean, engine)
    for it in items:
        clean = clean_for_tts(it["text"])
        if not clean:
            continue
        k = key_for(it["voice"], it["lang"], clean)
        tasks.setdefault(k, (it["voice"], it["lang"], clean, it.get("engine", "supertonic")))

    todo = {}  # engine -> [(key, voice, lang, clean)]
    for k, (voice, lang, clean, engine) in tasks.items():
        if not os.path.exists(os.path.join(AUDIO_DIR, k + ".mp3")):
            todo.setdefault(engine, []).append((k, voice, lang, clean))
    n_todo = sum(map(len, todo.values()))
    print(f"[audio] {len(tasks)} unique clips | {n_todo} to generate "
          f"({', '.join(f'{e}: {len(v)}' for e, v in todo.items()) or 'none'}) | "
          f"{len(tasks) - n_todo} cached", flush=True)

    for engine, rows in todo.items():
        if ENGINES and engine not in ENGINES:
            print(f"[audio] skipping {len(rows)} {engine} clips (AUDIO_ENGINES)", flush=True)
            continue
        RENDERERS[engine](rows)

    # Only list clips that actually exist, so the app never fetches a 404.
    manifest_keys = sorted(k for k in tasks if os.path.exists(os.path.join(AUDIO_DIR, k + ".mp3")))
    missing = len(tasks) - len(manifest_keys)
    if missing:
        print(f"[audio] WARNING: {missing} clips not rendered (not in manifest)", flush=True)
    with open(os.path.join(AUDIO_DIR, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump({"keys": manifest_keys, "voices": voices_map}, f)

    total = sum(os.path.getsize(os.path.join(AUDIO_DIR, f))
                for f in os.listdir(AUDIO_DIR) if f.endswith(".mp3"))
    print(f"[audio] done. manifest: {len(manifest_keys)} clips | "
          f"on disk: {total/1e6:.1f} MB", flush=True)


if __name__ == "__main__":
    main()
