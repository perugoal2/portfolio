# CLAUDE.md

Guidance for agents working in this repository.

## Project

A static-export **Next.js 15** (Pages Router) + **Tailwind v4** + **TypeScript**
portfolio for Peru N (software architecture / cloud / security). Content (projects,
blog notes) is authored as Markdown under `content/` and rendered to static HTML.

- `npm run dev` — dev server (a `predev` step clears `.next` first to avoid the
  `routesManifest.dataRoutes is not iterable` error that occurs when an
  `output: export` build and the Turbopack dev server share `.next`).
- `npm run build` — static export to `out/`. **After a build, the next `npm run dev`
  auto-clears `.next` via `predev`.**

## Design Context

This is a **brand** surface (a portfolio — the design *is* the product). Two root docs
define the design; read them before changing any UI:

- **`PRODUCT.md`** — strategic: users, purpose, brand personality, anti-references,
  principles, accessibility target (WCAG AA).
- **`DESIGN.md`** — visual system ("The Blueprint Table"): tokens, typography,
  components, and named rules. `.impeccable/design.json` is its machine-readable sidecar.

**The five design principles** (from PRODUCT.md):
1. Show the work, not adjectives.
2. Distinctive, but disciplined (never flashy).
3. Rigor is the brand (precision in copy/contrast/spacing is the proof).
4. Skimmable depth (20-second gist for recruiters; real substance for peers).
5. Security-first framing.

**Hard anti-references:** the generic dark-neon dev site (slate-950 + cyan glow,
glassmorphism, radial gradient mesh) and over-designed / flashy spectacle. The visual
system is cobalt (`#3d63ff`) signal on warm ink — see DESIGN.md's Do's and Don'ts before
introducing new colors, shadows, rounded corners, or motion.
