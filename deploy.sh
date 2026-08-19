#!/usr/bin/env bash
# Build the pre-rendered audio and deploy the fully-static site to GitHub Pages.
#
# 1. Enumerates every spoken word/sentence (tools/extract_audio_items.js).
# 2. Pre-renders audio for any NEW/changed content only — existing audio/*.mp3
#    clips are kept (content-hash cache), so redeploys are fast.
# 3. Commits the site + audio and pushes; GitHub Pages redeploys from `main`.
#
# No backend is shipped: the deployed app plays audio/<hash>.mp3 clips listed in
# audio/manifest.json. (STT is intentionally not part of the static build.)
set -euo pipefail
cd "$(dirname "$0")"

PY=".venv/bin/python"
[ -x "$PY" ] || { echo "Run ./start-mlx.sh once first to create .venv (needs supertonic)." >&2; exit 1; }

echo "[1/3] enumerating spoken items…"
node tools/extract_audio_items.js > /tmp/audio_items.json

echo "[2/3] pre-rendering audio (new content only; existing clips cached)…"
"$PY" build_static_audio.py /tmp/audio_items.json

echo "[3/3] committing + pushing (GitHub Pages redeploys from main)…"
git add -A
if git diff --cached --quiet; then
  echo "      nothing changed — site already up to date."
else
  git commit -q -m "Deploy: refresh static site + pre-rendered audio"
  git push origin main
fi

echo
echo "✅  Deployed. Live at: https://razhanhameed.github.io/language-lab/"
