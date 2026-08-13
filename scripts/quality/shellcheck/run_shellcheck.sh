#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

if ! command -v shellcheck &>/dev/null; then
  echo "shellcheck requires the shellcheck CLI — install it to enable." >&2
  exit 1
fi

shellcheck shellcheckFixture.sh
