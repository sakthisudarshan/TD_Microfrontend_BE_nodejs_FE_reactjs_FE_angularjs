#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

if ! command -v checkov &>/dev/null; then
  echo "checkov requires the checkov CLI — install it to enable." >&2
  exit 1
fi

checkov -f checkovFixture.tf --compact --quiet --skip-download
