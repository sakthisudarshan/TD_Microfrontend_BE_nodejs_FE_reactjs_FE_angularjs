# TD_Microfrontend_BE_nodejs_FE_reactjs_FE_angularjs

Micro-Frontend Platform project type. Each branch = one real Node.js
backend + React shell + Angular remote, at a specific version combo.

## Branch naming

`microfrontend_BE_nodejs<v>_FE_reactjs<v>_FE_angularjs<v>`

## Structure (per branch)

- `backend/` — minimal real Express API (`/api/widgets`, `/health`).
  Carries the full 13 JavaScript tool-trigger fixtures (`quality/`) —
  the single home for JS tooling in this branch.
- `frontend-react/` — minimal real Vite+React shell app. Fetches from
  `backend/`'s API rather than duplicating the same JS tool fixtures a
  second time.
- `frontend-angular/` — minimal real Angular app (CLI-scaffolded,
  esbuild builder). Fetches from `backend/`'s API. Carries the full 21
  TypeScript tool-trigger fixtures (`quality/`) — a genuinely different
  toolset from JavaScript's, not a duplicate.

Every module is independently `npm install`-able and builds for real —
that's the verification bar, not full test-suite depth per branch.

## Version caveat

Angular versions here (16/17/18/19) are Angular's own real major
versions. The 21 TypeScript tool fixtures were adapted from this
session's existing TypeScript_V12-V26 fixture set (a different,
pre-existing labeling scheme tied to TypeScript's own version, not
Angular's) — same kind of version-label substitution used throughout
this session where a real donor at the exact target version didn't
exist. Each `quality/<tool>/trigger.yaml` documents its donor.
