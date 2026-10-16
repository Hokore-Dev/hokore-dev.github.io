#!/usr/bin/env bash
# 슬라이드 덱(index.html) → PDF. Chrome headless의 인쇄 경로를 그대로 사용한다.
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="$DIR/out/하민준_포트폴리오.pdf"

mkdir -p "$DIR/out"
"$CHROME" \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --allow-file-access-from-files \
  --virtual-time-budget=20000 \
  --print-to-pdf="$OUT" \
  "file://$DIR/index.html" 2>&1 | grep -vE '^\[|DevTools|Fontconfig' || true

echo "→ $OUT"
