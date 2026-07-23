#!/usr/bin/env bash
# Launch the local language-learning app (Dutch + German, switchable in-app).
# Usage: ./start.sh [port]
set -euo pipefail

cd "$(dirname "$0")"

PORT="${1:-8123}"
URL="http://localhost:${PORT}/"

# Pick a Python; bail with a helpful message if none.
if command -v python3 >/dev/null 2>&1; then
  PY=python3
elif command -v python >/dev/null 2>&1; then
  PY=python
else
  echo "Python 3 is required. Install it (brew install python) and rerun." >&2
  exit 1
fi

# If the port is busy, walk forward until we find one that isn't.
while lsof -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; do
  PORT=$((PORT + 1))
  URL="http://localhost:${PORT}/"
done

echo "🇳🇱  Leer Nederlands  /  🇩🇪  Lern Deutsch"
echo "   serving from $(pwd)"
echo "   open ${URL}"
echo "   (Ctrl+C to stop)"
echo

# Open the browser shortly after the server starts (macOS).
if command -v open >/dev/null 2>&1; then
  ( sleep 0.6 && open "$URL" ) &
fi

exec "$PY" -m http.server "$PORT" --bind 127.0.0.1
