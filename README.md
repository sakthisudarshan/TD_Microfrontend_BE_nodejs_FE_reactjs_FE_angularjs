# TD_Microfrontend_BE_nodejs_FE_reactjs_FE_angularjs

Micro-Frontend Platform project type. Each branch = one real Node.js
backend + React shell + Angular remote, at a specific version combo.

## Branch naming

`microfrontend_BE_nodejs<v>_FE_reactjs<v>_FE_angularjs<v>`

## Structure (per branch)

- `backend/` — minimal real Express API (`/api/widgets`, `/health`).
  Carries the full 13 JavaScript tool-trigger fixtures (`quality/`) —
  the single home for JS tooling in this branch.
- `frontend-react/` — minimal real Vite+React **shell**. Fetches from
  `backend/`'s API, and embeds `frontend-angular/`'s real built output
  live via `<iframe src="/angular-remote/index.html">`
  (`public/angular-remote/` holds Angular's own untouched build,
  `base href` rescoped to `/angular-remote/` since it's nested under the
  shell). This is what makes the branch a genuine micro-frontend, not
  just two apps that happen to share a backend — verified live in a
  browser: the React shell renders, and the embedded Angular app
  independently fetches from the same backend and renders inside the
  iframe, with zero console errors.
- `frontend-angular/` — minimal real Angular app (CLI-scaffolded,
  esbuild builder). Fetches from `backend/`'s API. Carries the full 21
  TypeScript tool-trigger fixtures (`quality/`) — a genuinely different
  toolset from JavaScript's, not a duplicate.

Every module is independently `npm install`-able and builds for real —
that's the verification bar, not full test-suite depth per branch.

## Why iframe, not Web Components

First attempt used `@angular/elements` (Custom Element, mounted directly
in React's own DOM tree) — architecturally cleaner, but hit a real,
reproducible bug: Angular's zone.js patches global async APIs, and when
its bundle co-existed on the same page as React's own module script,
loading order (even with `type="module"`, even loaded before React's
script) produced genuine runtime errors — not something to paper over.
iframe-based composition sidesteps this by giving Angular its own
window/global scope, still genuine live runtime composition, and is
itself a recognized real micro-frontend strategy (the one orgs reach
for specifically when strict isolation between frameworks matters).

## Version caveat

Angular versions here (16/17/18/19) are Angular's own real major
versions. The 21 TypeScript tool fixtures were adapted from this
session's existing TypeScript_V12-V26 fixture set (a different,
pre-existing labeling scheme tied to TypeScript's own version, not
Angular's) — same kind of version-label substitution used throughout
this session where a real donor at the exact target version didn't
exist. Each `quality/<tool>/trigger.yaml` documents its donor.
