#!/usr/bin/env bash
# Launch with on-device Voxtral 4-bit TTS for Dutch (via Apple's MLX framework).
#
# First run: ~5 min — creates a venv, installs mlx-audio, downloads the ~2.5 GB
# Voxtral-4B-TTS-2603 4-bit weights from Hugging Face, and warms the model.
# Subsequent runs: ~30 s to load weights into memory.
#
# Usage: ./start-mlx.sh                # default ports (web 8123, tts 5500)
#        WEB_PORT=8000 TTS_PORT=5501 ./start-mlx.sh
#
# Architecture:
#   - mlx_audio.server runs at 127.0.0.1:$TTS_PORT, exposes OpenAI-compatible
#     POST /v1/audio/speech with permissive CORS.
#   - python -m http.server runs at 127.0.0.1:$WEB_PORT, serving the static SPA.
#   - The page detects the TTS server on load and routes Dutch text through it.

set -euo pipefail
cd "$(dirname "$0")"

WEB_PORT="${WEB_PORT:-8123}"
TTS_PORT="${TTS_PORT:-5500}"
MODEL="${MODEL:-mlx-community/Voxtral-4B-TTS-2603-mlx-4bit}"
STT_MODEL="${STT_MODEL:-mlx-community/whisper-large-v3-turbo-asr-fp16}"
PROBE_VOICE="${PROBE_VOICE:-nl_male}"
PREWARM_STT="${PREWARM_STT:-1}"   # set to 0 to skip the Whisper warm-up

# --- Pick installer/runner: prefer uv (handles standalone Pythons cleanly) ---
USE_UV=0
if command -v uv >/dev/null 2>&1; then
  USE_UV=1
  echo "      using uv $(uv --version 2>&1 | awk '{print $2}')"
fi

if [ "$USE_UV" = "0" ]; then
  # Fallback: detect a Python with working ensurepip
  PY=""
  for cand in python3.13 python3.12 python3.11 python3.10 python3; do
    if command -v "$cand" >/dev/null 2>&1; then
      ver=$("$cand" -c 'import sys; print("%d.%d" % sys.version_info[:2])' 2>/dev/null) || continue
      major=${ver%%.*}; minor=${ver##*.}
      if [ "${major:-0}" -ge 3 ] && [ "${minor:-0}" -ge 10 ] && \
         "$cand" -c 'import ensurepip' 2>/dev/null; then
        PY="$cand"
        break
      fi
    fi
  done
  if [ -z "$PY" ]; then
    echo "Need either:" >&2
    echo "  - uv  (recommended): brew install uv          # https://docs.astral.sh/uv/" >&2
    echo "  - Python 3.10+ with ensurepip: brew install python@3.12" >&2
    exit 1
  fi
  echo "      using $($PY --version 2>&1) at $(command -v "$PY")"
fi

# --- venv (rebuild if directory exists but is incomplete) ---
if [ -d ".venv" ] && [ ! -f ".venv/bin/activate" ]; then
  echo "      .venv looks broken — removing and rebuilding"
  rm -rf .venv
fi
if [ ! -d ".venv" ]; then
  echo "[1/4] creating venv..."
  if [ "$USE_UV" = "1" ]; then
    uv venv .venv --python 3.12 --quiet || uv venv .venv --quiet
  else
    "$PY" -m venv .venv
  fi
fi
if [ ! -f ".venv/bin/activate" ]; then
  echo "venv exists but .venv/bin/activate is still missing — aborting." >&2
  exit 1
fi
# shellcheck disable=SC1091
source .venv/bin/activate

# --- mlx-audio with server + tts extras
#     server: fastapi + uvicorn + webrtcvad (the OpenAI-compat API server)
#     tts:    mistral-common[audio] (Voxtral's tekken tokenizer)
# Voxtral's tokenizer carries a 'voice_num_audio_tokens' field that older
# mistral-common builds don't know. Pin to >= 1.11 to avoid that.
need_install=0
python -c "import mlx_audio" 2>/dev/null || need_install=1
python -c "import uvicorn, fastapi, webrtcvad" 2>/dev/null || need_install=1
python -c "import mistral_common, sys; sys.exit(0 if tuple(int(x) for x in mistral_common.__version__.split('.')[:2]) >= (1, 11) else 1)" 2>/dev/null || need_install=1
if [ "$need_install" = "1" ]; then
  echo "[2/4] installing mlx-audio[server,tts] + mistral-common>=1.11 (one-time, ~1-3 min)..."
  if [ "$USE_UV" = "1" ]; then
    uv pip install --quiet "mlx-audio[server,tts]" "mistral-common[audio]>=1.11"
  else
    python -m pip install --upgrade pip --quiet
    python -m pip install --quiet "mlx-audio[server,tts]" "mistral-common[audio]>=1.11"
  fi
fi

# --- pick free TTS port if busy ---
while lsof -iTCP:"$TTS_PORT" -sTCP:LISTEN >/dev/null 2>&1; do
  TTS_PORT=$((TTS_PORT + 1))
done

# --- start the TTS server ---
mkdir -p .logs
echo "[3/4] starting MLX-Audio server on :${TTS_PORT}..."
mlx_audio.server \
  --host 127.0.0.1 \
  --port "$TTS_PORT" \
  --log-dir .logs \
  --allowed-origins "*" \
  >.logs/server.stdout.log 2>.logs/server.stderr.log &
TTS_PID=$!

cleanup() {
  echo
  echo "shutting down..."
  kill "$TTS_PID" 2>/dev/null || true
  wait "$TTS_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

# Wait for server to come up
printf "      waiting for server"
for i in $(seq 1 30); do
  if curl -sf "http://127.0.0.1:${TTS_PORT}/v1/models" >/dev/null 2>&1; then
    echo " ready."
    break
  fi
  printf "."
  sleep 1
  if ! kill -0 "$TTS_PID" 2>/dev/null; then
    echo
    echo "TTS server died. Check .logs/server.stderr.log:" >&2
    tail -n 20 .logs/server.stderr.log >&2
    exit 1
  fi
done

# --- pre-warm Voxtral so the first user click is fast ---
echo "[4/4] pre-warming Voxtral TTS (downloads ~2.5 GB on first run)..."
echo "      → tail -f .logs/server.stderr.log if you want progress."
warm_started=$(date +%s)
if curl -sf -X POST "http://127.0.0.1:${TTS_PORT}/v1/audio/speech" \
     -H "Content-Type: application/json" \
     -d "{\"model\":\"${MODEL}\",\"input\":\"hallo\",\"voice\":\"${PROBE_VOICE}\"}" \
     -o /dev/null; then
  warm_secs=$(( $(date +%s) - warm_started ))
  echo "      → Voxtral ready in ${warm_secs}s."
else
  echo "      → Voxtral warm-up failed (model still loadable on first request)."
fi

# --- pre-warm Whisper STT so the first speaking-drill turn is fast ---
# Costs ~1-2 min download on first run, ~5-10 s to load weights on later runs.
# Skip with PREWARM_STT=0 ./start-mlx.sh if you don't plan to use Speaking.
if [ "$PREWARM_STT" = "1" ]; then
  echo "[4b]  pre-warming Whisper STT for Speaking drill..."
  # Build a tiny 1-sec silent WAV inline (needs no extra deps)
  python -c "
import struct
with open('.logs/silent.wav', 'wb') as f:
    sr = 16000; n = sr
    f.write(b'RIFF'); f.write(struct.pack('<I', 36+n*2)); f.write(b'WAVE')
    f.write(b'fmt '); f.write(struct.pack('<IHHIIHH', 16, 1, 1, sr, sr*2, 2, 16))
    f.write(b'data'); f.write(struct.pack('<I', n*2))
    f.write(b'\\x00' * (n*2))
"
  warm_started=$(date +%s)
  if curl -sf -X POST "http://127.0.0.1:${TTS_PORT}/v1/audio/transcriptions" \
       -F "file=@.logs/silent.wav" \
       -F "model=${STT_MODEL}" \
       -F "language=nl" \
       -o /dev/null --max-time 300; then
    warm_secs=$(( $(date +%s) - warm_started ))
    echo "      → Whisper ready in ${warm_secs}s."
  else
    echo "      → Whisper warm-up failed (will load lazily on first Speaking attempt)."
  fi
  rm -f .logs/silent.wav
fi

# --- pick free web port ---
while lsof -iTCP:"$WEB_PORT" -sTCP:LISTEN >/dev/null 2>&1; do
  WEB_PORT=$((WEB_PORT + 1))
done
URL="http://localhost:${WEB_PORT}/?tts=http://127.0.0.1:${TTS_PORT}"

echo
echo "🇳🇱  Leer Nederlands  +  Voxtral 4-bit"
echo "    web:  ${URL}"
echo "    tts:  http://127.0.0.1:${TTS_PORT}/v1/audio/speech"
echo "    Ctrl+C to stop both."
echo

if command -v open >/dev/null 2>&1; then
  ( sleep 0.6 && open "$URL" ) &
fi

exec python -m http.server "$WEB_PORT" --bind 127.0.0.1
