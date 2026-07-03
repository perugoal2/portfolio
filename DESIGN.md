---
name: Peru N — Portfolio
description: A cobalt-on-ink engineering blueprint for an architecture / cloud / security portfolio.
colors:
  ink: "#0b0a0d"
  ink-2: "#100e12"
  panel: "#16141a"
  panel-2: "#1c1a21"
  bone: "#f1ece3"
  bone-dim: "#c7c0b4"
  bone-faint: "#948c7f"
  cobalt-signal: "#3d63ff"
  cobalt-soft: "#9db0ff"
  cobalt-deep: "#2138b8"
  cobalt-deep-hover: "#2c47d4"
  jade: "#35e0a0"
  violet: "#8b7cf6"
  violet-soft: "#b4a7ff"
  line: "#ece7dd1a"
  line-strong: "#ece7dd2e"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.9rem, 6vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.75rem, 3vw, 2.6rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.74rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.22em"
rounded:
  none: "0px"
  code: "3px"
spacing:
  section: "7rem"
  block: "2.5rem"
  gap: "1.5rem"
components:
  button-signal:
    backgroundColor: "{colors.cobalt-deep}"
    textColor: "#f4f6ff"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem"
    typography: "{typography.label}"
  button-signal-hover:
    backgroundColor: "{colors.cobalt-deep-hover}"
    textColor: "#f4f6ff"
  button-ghost:
    backgroundColor: "#00000000"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem"
    typography: "{typography.label}"
  pill:
    backgroundColor: "#00000000"
    textColor: "{colors.bone-dim}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.625rem"
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.bone-dim}"
    rounded: "{rounded.none}"
    padding: "1.5rem"
---

# Design System: Peru N — Portfolio

## 1. Overview

**Creative North Star: "The Blueprint Table"**

This is a portfolio drawn, not decorated — cobalt draughting ink laid over a warm
engineering sheet. The canvas is a near-black ink (`#0b0a0d`) carrying a two-layer
measurement grid and a fine film grain, lit from the top-left like a drafting lamp.
Type is set in a high-contrast serif for statements and a monospace for every
coordinate, label, and measurement. Architecture and threat-model diagrams are not
screenshots dropped into cards; they are framed **Plates**, captioned and registered
like sheets in a drawing set. The one live color is cobalt — it behaves like ink on a
blueprint: it marks signal, never fills space.

The system exists to prove engineering depth to technical recruiters and peers who are
allergic to marketing. Its discipline *is* the argument: exact spacing, measured
contrast, and a single restrained accent read as the same rigor the work claims. It
deliberately rejects the default AI dev-portfolio look — no `slate-950 + cyan` glow, no
glassmorphism, no radial gradient mesh — and it refuses spectacle: motion is one
orchestrated page-load reveal plus honest hover feedback, nothing that performs.

**Key Characteristics:**
- Warm-ink canvas with an ever-present engineering grid + grain (never a flat solid).
- Cobalt as *signal only*: accent strokes, active nav, the primary CTA, one italic word.
- Sharp corners everywhere; registration ticks instead of rounded cards.
- Monospace coordinate labels (`§00`, `Plate 01`) carry all metadata.
- Serif display statements over monospace scaffolding — contrast, not costume.

## 2. Colors

A duotone system: a warm bone type ramp on a near-black warm ink, with one cool cobalt
signal cutting through. Warm surface, cool ink — the tension is the point.

### Primary
- **Cobalt Signal** (`#3d63ff`): The live ink. Accent strokes in diagrams, active-nav
  underline, the single italic emphasis word, link and focus marks, the `§` markers.
  Held to roughly ≤10% of any screen — its rarity is what makes it read as *signal*.
- **Cobalt Deep** (`#2138b8`): The primary button fill. A grounded, darker cobalt so the
  CTA sits with weight rather than glowing; brightens to **Cobalt Deep Hover**
  (`#2c47d4`) on interaction.
- **Cobalt Soft** (`#9db0ff`): Light cobalt for project taglines and inline code — cobalt
  at reading weight where the full signal would shout.

### Neutral
- **Ink** (`#0b0a0d`): The body canvas; warm near-black. Also the diagram background, so
  plates blend seamlessly into the sheet.
- **Ink 2** (`#100e12`): Inset wells — the framed area *inside* a diagram plate.
- **Panel** (`#16141a`) / **Panel 2** (`#1c1a21`): Card and surface fills, always used at
  low opacity (`~40%`) over the grid so the blueprint reads through.
- **Bone** (`#f1ece3`): Primary text — headlines, statements, emphasis.
- **Bone Dim** (`#c7c0b4`): Body copy and descriptions. Verified for WCAG AA (≥4.5:1) on
  ink; do not drop the body ramp below this value.
- **Bone Faint** (`#948c7f`): Micro-labels, dates, coordinate metadata. Large/label use
  only — never long-form body.
- **Line** (`#ece7dd` @ 10%) / **Line Strong** (@ 18%): Hairline borders and dividers.
  Structure comes from these lines, not from shadow.

### Categorical (Domain)
A small, disciplined set of three cool hues that encode **which practice domain** a piece
of work belongs to — never decoration, always the same meaning site-wide. Cobalt is one
of the three (it doubles as the primary signal *and* the Cloud domain). All three clear
WCAG AA on ink (jade 11.6:1, violet-soft 9.3:1, cobalt-soft 9.5:1); a domain is always
paired with its text label, never color alone.

- **Jade** (`#35e0a0`) = **Product · AI**. Local-first AI, product, applied ML work.
- **Cobalt** (`#3d63ff`, text `#9db0ff`) = **Cloud**. Platforms, landing zones, infra.
- **Violet** (`#8b7cf6`, text `#b4a7ff`) = **Security**. Threat models, detection, zero-trust.

Applied in: the Capability legend (a literal color key), project-card and blog-card
domain chips, and card image indices. Derived from a piece's primary tag / category via
`domainOf()` in `lib/site.ts`.

### Named Rules
**The One Signal Rule.** Cobalt is signal, not decoration. As the primary accent it
appears on ≤10% of any screen — strokes, active state, the primary CTA, one emphasis
word. The categorical domain hues (jade/violet, and cobalt-as-Cloud) are the one
sanctioned exception, and only when color carries domain *meaning* — never to fill area.

**The Three-Domain Rule.** Jade / cobalt / violet mean Product · AI / Cloud / Security —
and nothing else. Exactly three hues, each with a fixed meaning, always accompanied by a
text label (color is never the sole signal). Do not add a fourth categorical hue, and do
not repurpose one of the three for decoration.

**The Warm-Ink Rule.** The neutral ramp is warm (bone → ink); the accent is cool
(cobalt). Never warm the accent or cool the neutrals to "match" — the temperature split
is the identity.

## 3. Typography

**Display Font:** Fraunces (with Georgia, serif)
**Body Font:** Archivo (with ui-sans-serif, system-ui)
**Label/Mono Font:** JetBrains Mono (with ui-monospace)

**Character:** A high-contrast, optically-sized serif for statements set against a
neutral technical grotesque for reading and a precise monospace for every measurement.
Contrast on a real axis (serif × grotesque × mono), never two lookalike sans. The root
scale is bumped (17.5px mobile / 18px desktop) so the whole rem system reads confident,
not cramped.

### Hierarchy
- **Display** (Fraunces 400, `clamp(2.9rem, 6vw, 4.6rem)`, lh 0.98, tracking -0.02em):
  Hero statements and page titles. One italic word may take Cobalt Signal for emphasis.
- **Headline** (Fraunces 500, `clamp(1.75rem, 3vw, 2.6rem)`, lh 1.05): Section titles,
  card and article headings.
- **Body** (Archivo 400, 1rem, lh 1.85): Prose and descriptions. Cap measure at ~70ch.
- **Label** (JetBrains Mono 500, 0.74rem, tracking 0.22em, UPPERCASE): Eyebrows,
  coordinates, dates, nav, plate captions, button text.

### Named Rules
**The Coordinate Label Rule.** All metadata is monospace, uppercase, wide-tracked, and
prefixed with a marker (`§00`, `Plate 01`, a two-digit index). Metadata never uses the
serif or the body sans.

**The One Italic Rule.** Emphasis in a display statement is a single Fraunces *italic*
word, optionally in cobalt. Never bold the serif for emphasis; never italicize a whole
line.

## 4. Elevation

Flat by structure. Depth is built from hairline borders, the layered engineering grid,
low-opacity panel fills over that grid, and the drafting-lamp bloom in the background —
not from drop shadows. Surfaces sit *on the sheet*, they don't float above it.

### Shadow Vocabulary
- **Signal Bloom** (`box-shadow: 0 10px 28px -12px rgba(61,99,255,0.6)`): The only shadow
  in the system. Appears solely on `:hover` of the primary (cobalt) button, as a colored
  glow that reinforces the accent. Neutral drop shadows are not used anywhere.

### Named Rules
**The Flat-Sheet Rule.** Surfaces are flat at rest and separated by 1px lines, never by
shadow. The single exception is the cobalt Signal Bloom on primary-button hover. If a
neutral gray shadow appears, it's a bug.

## 5. Components

### Buttons
- **Shape:** Square (0px radius). Corners are never rounded.
- **Primary (Signal):** Cobalt Deep (`#2138b8`) fill, text `#f4f6ff`, a 1px cobalt-soft
  hairline border, monospace uppercase label, padding `0.75rem 1.25rem`.
- **Hover / Focus:** Brightens to `#2c47d4`, border strengthens, lifts `translateY(-1px)`
  with the Signal Bloom shadow. Focus must remain visibly keyboard-reachable.
- **Ghost:** Transparent fill, `line-strong` border, bone text. Hover shifts the border to
  cobalt and washes the fill `rgba(61,99,255,0.08)`.

### Chips (Pills)
- **Style:** Transparent with a 1px `line` border, monospace micro-label, a solid 1px
  **cobalt square** dot as the leading marker (never a bullet or rounded dot).
- **State:** Hover lifts border toward cobalt and text toward bone. Square corners.

### Cards / Containers
- **Corner Style:** Square (0px radius). Rounded cards are prohibited.
- **Background:** Panel at ~40% opacity over the grid, so the blueprint reads through.
- **Border:** 1px `line`, strengthening to `line-strong` on hover.
- **Registration Ticks:** Corner L-marks (`.ticks`) in the top-left / bottom-right, drawn
  in bone-dim and turning cobalt on hover — draughtsman crop marks, the signature detail.
- **Internal Padding:** `1.5rem` (block scale).

### Navigation
- **Style:** Monospace uppercase items, each with a two-digit index; a sticky top bar on a
  translucent ink background with a bottom hairline. Active/hover draws a cobalt underline
  that scales in from the left; the index digit turns cobalt when active.

### Diagram Plate (Signature Component)
- A framed `figure`: 1px `line` border, `Ink 2` inset well, the diagram rendered
  `object-contain` so the whole drawing shows and blends into the sheet, with a monospace
  caption line (`Plate 01 — Architecture`, `Trust boundaries · data flow`) and corner
  registration ticks. Diagrams are recolored into the duotone (ink/graphite/bone +
  cobalt) so they read as part of the system, not pasted in.

## 6. Do's and Don'ts

### Do:
- **Do** use jade / cobalt / violet *only* to mark domain (Product · AI / Cloud /
  Security), always paired with a text label — never color as the sole signal.
- **Do** keep the engineering grid + grain present on every page background; never ship a
  flat solid ink fill.
- **Do** hold cobalt to ≤10% of any screen — strokes, active state, primary CTA, one
  italic word (**The One Signal Rule**).
- **Do** set all metadata in monospace uppercase with a marker prefix (**The Coordinate
  Label Rule**).
- **Do** keep body text at Bone Dim (`#c7c0b4`) or brighter; verify ≥4.5:1 on ink before
  shipping any new muted text.
- **Do** frame diagrams as captioned Plates recolored into the duotone, with registration
  ticks.
- **Do** provide a `prefers-reduced-motion` fallback for every reveal and transition.

### Don't:
- **Don't** add a fourth categorical hue, repurpose jade/cobalt/violet for decoration, or
  let a domain color carry meaning without its text label (**The Three-Domain Rule**).
- **Don't** reintroduce the generic dark-neon dev site: `slate-950 + cyan` glow,
  glassmorphism panels, or radial gradient mesh. This is the named anti-reference.
- **Don't** add flashy, animation-heavy spectacle. Motion is one page-load reveal plus
  honest hover feedback — nothing that performs over the work.
- **Don't** round corners (except the 3px on inline code). No rounded cards, no pill
  radii.
- **Don't** use neutral gray drop shadows; separate surfaces with 1px lines (**The
  Flat-Sheet Rule**).
- **Don't** warm the cobalt accent or cool the bone/ink neutrals to "match" (**The
  Warm-Ink Rule**).
- **Don't** set metadata, eyebrows, or labels in the serif or body sans.
