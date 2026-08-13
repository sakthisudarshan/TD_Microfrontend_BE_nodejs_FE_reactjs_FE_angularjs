#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

if ! command -v shfmt &>/dev/null; then
  echo "shfmt requires the shfmt CLI — install it to enable." >&2
  exit 1
fi

shfmt -d shfmtFixture.sh
