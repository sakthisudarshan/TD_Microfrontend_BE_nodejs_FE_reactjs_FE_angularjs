#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

if ! command -v tflint &>/dev/null; then
  echo "tflint requires the tflint CLI — install it to enable." >&2
  exit 1
fi

tflint --chdir="$ROOT"
