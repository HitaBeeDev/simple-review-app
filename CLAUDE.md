# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Goal

Modernize an Angular 20 review app — same features, no new ones.
The refactor upgrades patterns (Reactive Forms, Signals, `@if`/`@for` syntax, service abstraction) and adds a portfolio-quality UI.
Read `PROJECT_OVERVIEW.md` for the full plan and `PROJECT_CHECKLIST.md` for the phase-by-phase task list.

## Commands

```bash
npm start          # dev server → localhost:4200
npm run build      # production build
npm test           # Karma/Jasmine unit tests
```

## Current Architecture

Three standalone components, no shared services — all state flows through `localStorage` directly in components.

```
src/app/
├── models/reviews.ts        # Review interface
├── app.routes.ts            # / → Home, /new → ReviewForm, /list → ReviewList
├── home/                    # Landing page with hardcoded sample cards
├── review-form/             # Form + preview + confirm flow; writes to localStorage directly
└── review-list/             # Reads from localStorage directly on ngOnInit
```

Key behaviors to preserve throughout the refactor:
- `review-form` has a **three-step flow**: fill form → preview draft → confirm (saves) or edit (back to form)
- After confirming, a success state renders in-place (not a separate route) with links to Home and List
- `localStorage` key is `"reviews"` — a JSON array of `Review` objects
- `createdAt` stored as ISO string; must be parsed back to `Date` on read

## Target Architecture

Stack stays Angular 20 + Tailwind CSS v4. Modernization targets:

- **`ReviewService`** (`src/app/services/`) — all `localStorage` access moved here; exposes a `signal<Review[]>`
- **Reactive Forms** — `FormGroup` + `FormBuilder` replaces all `ngModel` in `review-form`
- **Zod schema** in `src/app/models/review.ts` — single source of truth for type + validation; wrapped as Angular `ValidatorFn`
- **`@if` / `@for`** block syntax replaces all `*ngIf` / `*ngFor` directives
- **`ReviewCardComponent`** — shared standalone component used in Home (samples), ReviewForm (preview), ReviewList
- **`NavbarComponent`** — persistent across all pages with `routerLinkActive` for active state
- **`@ng-icons/lucide`** replaces Google Material Icons CDN
