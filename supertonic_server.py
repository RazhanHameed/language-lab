#!/usr/bin/env python3
"""Local Supertonic-3 text-to-speech server (on-device, ONNX Runtime + CoreML).

Exposes an OpenAI-style `POST /v1/audio/speech` so the web app can request
speech and get WAV audio back — no cloud call. This is TTS only; Whisper STT
stays on the mlx-audio server. Supertonic-3 covers 31 languages (incl. Dutch &
German) with fixed voice presets M1/M2 (male) and F1/F2 (female).

Usage: supertonic_server.py [port]   (default 5510)
"""
import io
import json
import sys
import threading
import wave

import numpy as np
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

from supertonic import TTS, SUPPORTED_LANGUAGES

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 5510
VOICES = ("M1", "M2", "F1", "F2")
DEFAULT_VOICE = "M1"
SAMPLE_RATE = 44100  # Supertonic-3 output rate (mono, 16-bit)

print("[supertonic] loading Supertonic-3 (downloads on first run)…", flush=True)
_tts = TTS(model="supertonic-3", auto_download=True)
_styles = {v: _tts.get_voice_style(voice_name=v) for v in VOICES}
_lock = threading.Lock()  # serialise inference (one ONNX session)
print("[supertonic] ready.", flush=True)


def synth_wav(text, voice, lang, speed):
    style = _styles.get(voice, _styles[DEFAULT_VOICE])
    lang = lang if lang in SUPPORTED_LANGUAGES else None
    with _lock:
        audio, _dur = _tts.synthesize(text, voice_style=style, lang=lang, speed=speed)
    a = np.clip(np.asarray(audio).squeeze(), -1.0, 1.0)
    pcm = (a * 32767.0).astype("<i2").tobytes()
    buf = io.BytesIO()
    with wave.open(buf, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SAMPLE_RATE)
        w.writeframes(pcm)
    return buf.getvalue()


class Handler(BaseHTTPRequestHandler):
    def log_message(self, *a):  # quiet
        pass

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        if self.path.startswith("/v1/models") or self.path == "/health":
            body = json.dumps({
                "object": "list",
                "data": [{"id": "supertonic-3", "object": "model", "owned_by": "supertone"}],
                "voices": list(VOICES),
                "languages": list(SUPPORTED_LANGUAGES),
            }).encode()
            self.send_response(200)
            self._cors()
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        else:
            self.send_response(404)
            self._cors()
            self.end_headers()

    def do_POST(self):
        if not self.path.startswith("/v1/audio/speech"):
            self.send_response(404)
            self._cors()
            self.end_headers()
            return
        try:
            n = int(self.headers.get("Content-Length", 0) or 0)
            data = json.loads(self.rfile.read(n) or b"{}")
            text = (data.get("input") or "").strip()
            voice = data.get("voice") or DEFAULT_VOICE
            lang = (data.get("language") or data.get("lang") or "en")[:2].lower()
            speed = float(data.get("speed", 1.05))
            if not text:
                self.send_response(400)
                self._cors()
                self.end_headers()
                return
            wav = synth_wav(text, voice, lang, speed)
            self.send_response(200)
            self._cors()
            self.send_header("Content-Type", "audio/wav")
            self.send_header("Content-Length", str(len(wav)))
            self.end_headers()
            self.wfile.write(wav)
        except Exception:
            import traceback
            traceback.print_exc()
            try:
                self.send_response(500)
                self._cors()
                self.end_headers()
            except Exception:
                pass


if __name__ == "__main__":
    print(f"[supertonic] Supertonic-3 TTS on http://127.0.0.1:{PORT}", flush=True)
    ThreadingHTTPServer(("127.0.0.1", PORT), Handler).serve_forever()
