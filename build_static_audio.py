#!/usr/bin/env python3
"""Pre-generate on-device Supertonic-3 audio for every spoken word/sentence so
the app can run as a fully static site (no TTS backend).

- Reads the item list produced by tools/extract_audio_items.js.
- For each {voice, lang, text}: cleans the text the SAME way the app does,
  hashes (voice|lang|clean) with SHA-256, and writes audio/<key>.mp3.
- CACHE: if audio/<key>.mp3 already exists it is left untouched — re-runs only
  synthesise genuinely new/changed content.
- Writes audio/manifest.json (the full key list) so the app knows what's
  available and can fetch it without hitting a server.

Parallelised across processes (each worker holds its own Supertonic model).

Usage: build_static_audio.py [items.json]      (default /tmp/audio_items.json)
Env:   AUDIO_WORKERS (default 6)
"""
import hashlib
import json
import os
import re
import sys
from concurrent.futures import ProcessPoolExecutor

import numpy as np
import lameenc

from supertonic import SUPPORTED_LANGUAGES

ROOT = os.path.dirname(os.path.abspath(__file__))
AUDIO_DIR = os.path.join(ROOT, "audio")
ITEMS = sys.argv[1] if len(sys.argv) > 1 else "/tmp/audio_items.json"
WORKERS = int(os.environ.get("AUDIO_WORKERS", "6"))
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


def main():
    data = json.load(open(ITEMS, encoding="utf-8"))
    if isinstance(data, dict):
        items = data.get("items", [])
        voices_map = data.get("voices", {})
    else:  # legacy: bare list of items
        items = data
        voices_map = {}
    tasks = {}  # key -> (voice, lang, clean)
    for it in items:
        clean = clean_for_tts(it["text"])
        if not clean:
            continue
        k = key_for(it["voice"], it["lang"], clean)
        tasks.setdefault(k, (it["voice"], it["lang"], clean))

    manifest_keys = sorted(tasks.keys())
    todo = [(k, *v) for k, v in tasks.items()
            if not os.path.exists(os.path.join(AUDIO_DIR, k + ".mp3"))]
    print(f"[audio] {len(tasks)} unique clips | {len(todo)} to generate | "
          f"{len(tasks) - len(todo)} cached | {WORKERS} workers", flush=True)

    if todo:
        with ProcessPoolExecutor(max_workers=WORKERS, initializer=_init_worker) as ex:
            for i, (k, err) in enumerate(ex.map(_work, todo, chunksize=4), 1):
                if err:
                    print(f"[audio] FAILED {k}: {err}", flush=True)
                if i % 100 == 0 or i == len(todo):
                    print(f"[audio]   {i}/{len(todo)}", flush=True)

    with open(os.path.join(AUDIO_DIR, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump({"keys": manifest_keys, "voices": voices_map}, f)

    total = sum(os.path.getsize(os.path.join(AUDIO_DIR, f))
                for f in os.listdir(AUDIO_DIR) if f.endswith(".mp3"))
    print(f"[audio] done. manifest: {len(manifest_keys)} clips | "
          f"on disk: {total/1e6:.1f} MB", flush=True)


if __name__ == "__main__":
    main()
