---
name: K. Srinivas Karthik — Field Notes
description: A neo-brutalist record where builder and operator identities read as two equal-weight, hard-bordered structural tracks.
colors:
  paper: "#faf9f4"
  paper-raised: "#efece2"
  paper-deep: "#e3ded0"
  ink: "#0b0b0c"
  ink-soft: "#333129"
  ink-faint: "#68645a"
  rule: "#1e3ff0"
  accent: "#ff5a1f"
  accent-ink: "#b8420e"
  highlight: "#ffd400"
typography:
  display:
    fontFamily: "Archivo Black, Arial Black, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.14em"
  labelChip:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.14em"
  readout:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  none: "0px"
spacing:
  card-padding: "24px"
  readout-padding: "20px"
  section-y: "64px"
  container-x: "20px"
  column-gap: "40px"
  column-gap-lg: "64px"
components:
  finding-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    padding: "24px"
  reading-card:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.highlight}"
    rounded: "{rounded.none}"
    padding: "20px"
  contact-tab:
    backgroundColor: "{colors.highlight}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  kicker-chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "5px 10px"
---

# Design System: K. Srinivas Karthik — Field Notes

## Overview

**Creative North Star: "The Load-Bearing Record"**

This is a redesign of the site's original "Findings Wall" academic-poster world, pinned by explicit user request: neo-brutalism, named directly rather than arrived at through a concept-seed roll. The off-white paper ground and the builder/operator two-track structure carry forward from the prior world (product truth is unchanged), but every surface now reads as a physically built object rather than a printed page — solid 3-4px black borders everywhere, hard offset shadows with zero blur that shrink and press flat on click, zero border-radius, and a third "live" yellow added to the inherited blue/orange accent pair.

This record is read directly from shipped source (`globals.css`, `layout.tsx`, the component set, `src/components/demos/`), not from a design comp or a rendered screenshot — no browser screenshots exist for this session. One shipped contrast defect was found and is called out rather than repaired or legitimized: see Do's and Don'ts.

**Key Characteristics:**
- Off-white paper ground (`#faf9f4`) with a fixed, low-opacity dot-grid texture (`radial-gradient` dots, 24px grid) — not the prior world's soft radial noise
- Every border is solid black (`#0b0b0c`), 3px standard / 4px on major dividers — no hairlines anywhere
- Every card and primary link/button carries a hard offset shadow (`.brutal-shadow`, `6px 6px 0 0` black, zero blur) that shrinks and presses toward the shadow on hover/click (`.brutal-press`) — the signature interaction, applied via `TiltLink`
- Zero border-radius throughout, carried over from the prior world
- Three-color system tied to product meaning: electric blue = Builder track (structural), bold orange = Operator track (structural), signal yellow = live/action/CTA only — never interchangeable
- Archivo Black (400-weight, but visually a single black-weight display face) replaces the prior serif for every headline; Space Grotesk (body) and Space Mono (kickers/data) are unchanged from the prior world

## Colors

A stark paper-and-ink base carries the ground and text; three committed accents — electric blue, bold orange, and signal yellow — divide strictly by product meaning, not by decorative rotation.

### Primary
- **Rule Blue** (`#1e3ff0`): the Builder track's structural color — column-header glyph tiles, rule dividers, card borders/accents tied to Builder content. Also used as plain kicker text color (`.kicker` default) directly on paper; confirmed legible at the sizes shipped (bold, tracked mono caps).

### Secondary
- **Bold Orange / Accent** (`#ff5a1f`): the Operator track's structural fill color — glyph tiles, chip backgrounds, rule dividers, decorative SVG strokes on dark or filled surfaces. **Not used as text or icon color directly on the paper ground** — see the Accent-Ink Rule.
- **Accent-Ink** (`#b8420e`): a darkened rust variant of the accent, and the *only* sanctioned orange for text/icon use directly on `paper` (`HeroLink` hover state, `RoboticArmDemo`'s EMA readout, the operator `GlyphMark` on `/leadership`). Exists specifically because `#ff5a1f` fails WCAG contrast as small text/icon color on `#faf9f4`.

### Tertiary
- **Signal Yellow / Highlight** (`#ffd400`): reserved for live, active, or call-to-action moments only — the `ContactTab`'s fill, `PageTransition`'s route-change sweep bar, every `Reading` counter's numeral value (always on `bg-ink`, never on paper), the footer's "END OF FILE" chip, text-selection highlight. Never a structural/track color.

### Neutral
- **Paper** (`#faf9f4`): base page ground; default card and nav background.
- **Raised Paper** (`#efece2`): a lighter secondary ground step, available for panel separation.
- **Deep Paper** (`#e3ded0`): a deeper ground step, available for recessed panels.
- **Ink** (`#0b0b0c`): primary text color, every border color, and the Footer/Reading component's solid fill background (white/paper text and yellow numerals sit on ink, not the reverse).
- **Soft Ink** (`#333129`): body copy, card descriptions, inactive nav links.
- **Faint Ink** (`#68645a`): tertiary/meta text (demo disclosure lines, faint kickers).

### Named Rules
**The Accent-Ink Rule.** The bright accent orange (`#ff5a1f`) never appears as text or icon color directly on the paper ground — it fails WCAG contrast there. `accent-ink` (`#b8420e`) is the only sanctioned on-paper orange for that role; the bright accent is reserved for fills, backgrounds, and text/icons set on dark or filled surfaces.
**The Three-Color Meaning Rule.** Blue and orange are structural (Builder/Operator respectively, permanent, tied to which track a surface belongs to); yellow is exclusively live/action (counters, the fixed contact affordance, transition sweep). No accent is used outside its assigned meaning, and no fourth accent hue is introduced.

## Typography

**Display Font:** Archivo Black (with Arial Black, sans-serif fallback)
**Body Font:** Space Grotesk (with system-ui, sans-serif fallback)
**Label/Mono Font:** Space Mono (with ui-monospace, monospace fallback)

**Character:** A single-weight, blocky-loud display face (Archivo Black, shipped at its only available weight, 400, which renders visually black/heavy) replaces the prior world's academic serif entirely, paired with the same precise grotesk body and mono label/data system carried over unchanged. The pairing reads as built and unapologetic rather than refined.

### Hierarchy
- **Display** (400, `text-4xl`–`text-6xl` responsive, tight tracking): hero headline (`text-[2.4rem] sm:text-6xl` on home) and every page `h1` (`text-4xl sm:text-5xl`), `font-display`.
- **Headline** (400, `text-3xl`–`text-4xl`): `ColumnHeader` track titles ("Builder"/"Operator"); `FindingCard`/project titles run smaller (`text-lg`–`text-2xl`), all `font-display`.
- **Body** (400, `text-sm`–`text-base`, line-height ~1.6): paragraph copy inside cards, subtitles, hero support text (`text-ink-soft`).
- **Label/Kicker** (700, `0.75rem`, tracked `0.14em`, uppercase, mono): the `.kicker` class — section labels, nav wordmark, card eyebrows. A solid-chip variant (`.kicker-chip`, black/blue/orange/yellow background, one step down at `0.6875rem` — the `labelChip` type step) exists for higher-impact labels (`DemoFrame`'s "INTERACTIVE SKETCH", Footer's "END OF FILE", project award badges).
- **Readout** (700, `text-3xl`–`text-4xl`, tabular-nums mono, always `text-highlight` on `bg-ink`): the `Reading` component's live counter value.

### Named Rules
**The Chip-or-Plain Kicker Rule.** Every kicker is either the plain colored-text form (`.kicker`, used at nav/section-label frequency) or the solid chip form (`.kicker-chip`, used for higher-impact single labels like demo headers and award badges) — never a third invented treatment. Both forms only label a real structural section or a real earned fact (a project award, a demo type), never a decorative eyebrow invented per-surface.

## Layout

Single content column at `max-w-6xl` (`max-w-3xl`/`max-w-2xl` on narrower pages), horizontal padding `px-5` mobile / `sm:px-8` desktop. The Builder/Operator split remains a `grid gap-10 lg:grid-cols-2 lg:gap-16`: two equal-width columns at desktop, collapsing to a stacked sequence below `lg`. Nav is a sticky top bar (`sticky top-0`, `bg-paper`, solid `border-b-[3px]` black) with a horizontally-scrolling link row on mobile instead of a hamburger. `ContactTab` is fixed at `bottom-5 right-5` (`sm:bottom-6 sm:right-6`) across every route, unchanged in position from the prior world.

## Elevation & Depth

The system is structurally elevated, not flat: every card, the `ContactTab`, and every `TiltLink`-wrapped project card carries a hard, zero-blur offset shadow that functions as a physical drop-shadow of a solid object rather than an ambient glow. Depth is binary and mechanical — an element either sits flush (no shadow, a plain bordered box) or is "lifted" with a hard offset shadow that visibly shrinks and the element presses toward it on hover/active, simulating a physical card being pressed down.

### Shadow Vocabulary
- **`brutal-shadow-sm`** (`box-shadow: 4px 4px 0 0 var(--ink)`): smaller/secondary cards — `ColumnHeader`'s glyph tile, `Reading`.
- **`brutal-shadow`** (`box-shadow: 6px 6px 0 0 var(--ink)`): the standard card/link shadow — `TiltLink`, `DemoFrame`.
- **`brutal-shadow-lg`** (`box-shadow: 10px 10px 0 0 var(--ink)`): reserved for the largest/heaviest surfaces (declared, available for hero-level use).
- **`brutal-press` interaction**: on hover, shadow grows to `8px 8px 0 0` and the element translates `(-2px, -2px)` (lifts further from its shadow); on active/click it translates `(3px, 3px)` and the shadow shrinks to `2px 2px 0 0` (presses down into its shadow). Skipped entirely under `prefers-reduced-motion` (transition removed).

### Named Rules
**The Press-Toward-Shadow Rule.** Every interactive bordered surface (project card, contact tab, primary link) uses the hard-offset-shadow-plus-press pattern as its only elevation language; there is no soft/blurred shadow anywhere in the system, and no surface lifts without also carrying a solid border.

## Shapes

Every rectangle in the system — cards, buttons, nav links, the demo frame, the contact tab — ships with zero border-radius. Corners are square throughout, unchanged from the prior world. Borders are uniformly solid black and thick: `3px` (`.brutal-border`) is standard, `4px` (`.brutal-border-thick`) marks major dividers (Footer's top border, Nav's bottom border). There are no hairline (sub-2px, low-opacity) borders anywhere in this world — every border reads as a load-bearing line, not a subtle separator.

## Components

### Buttons / Contact Tab
- **Shape:** square corners, no radius, `3px` solid black border.
- **Primary (Contact corner tab):** `ContactTab.tsx`, fixed `bottom-5 right-5` (`sm:bottom-6 sm:right-6`), `bg-highlight` (signal yellow) with black border and a static `5px 5px 0 0` ink shadow, `brutal-press` on hover/active. Mounted at the layout root so it persists across every route.
- **Hover / Focus:** `brutal-press` — shadow grows and the element lifts away from it on hover, shrinks and presses toward it on click/active.
- **Secondary:** text links (`HeroLink`) in ink with `accent-ink` hover state (never the bright accent directly, per the Accent-Ink Rule).

### Chips
- **Style (`kicker-chip`):** solid ink background, paper text, `2px` ink border, mono uppercase tracked label. Variants swap the fill: `--rule` (blue bg, paper text), `--accent` (orange bg, ink text — chosen because orange-on-ink text fails contrast the other way), `--highlight` (yellow bg, ink text).
- **State:** static, no hover variant observed; used as a label, not an interactive control.

### Cards / Containers
- **Corner Style:** square (no radius) on every variant.
- **Background:** `FindingCard`/`TiltLink` = `paper`; `Reading` = solid `ink` (a reversal from the prior world's raised-paper tint); `DemoFrame` = `paper`.
- **Shadow Strategy:** see Elevation & Depth — `brutal-shadow` or `brutal-shadow-sm`, always paired with a solid border.
- **Border:** `3px solid ink` standard; track-colored border on `Reading` (`border-rule` for Builder, `border-accent` for Operator).
- **Internal Padding:** `24px` (`p-6`) for `FindingCard`, `20px` (`p-5`) for `Reading`, `20px`–`24px` (`p-5 sm:p-6`) for `DemoFrame`.

### Navigation
- **Style:** sticky top bar, solid `3px` black bottom border, opaque paper background (no translucency/backdrop-blur in the current build). Active route renders as a filled ink chip (`bg-ink text-paper border-ink`); inactive links are borderless `ink-soft` text with a black-border hover state.
- **Mobile:** desktop link row replaced by a horizontally-scrolling row of the same bordered-chip links, not a hamburger/drawer.

### Findings track (signature component)
`ColumnHeader` + `FindingCard` + `RuleDivider` form the site's core repeating unit: a `brutal-border brutal-shadow-sm` glyph tile (blue fill for Builder, orange fill for Operator) beside a display headline, a bold subtitle, a self-drawing thick rule beneath it, then a sequence of `FindingCard`s. `Reading` is the sibling signature component: now a solid-ink panel with a track-colored border, whose tabular-mono value renders in signal yellow and animates from `0` to its true resume-sourced figure on scroll-in via the shared motion clock (`src/lib/motion.ts`).

### Interactive project demos (signature system)
`src/components/demos/`: `RoboticArmDemo`, `HumidifierDemo`, `CodeLearnDemo`, `PhysicsSimDemo`, each re-skinned in place onto the brutalist visual language (hard-bordered `DemoFrame` shell, `kicker-chip--highlight` "INTERACTIVE SKETCH" label, solid ink/paper internal panels) while keeping the same underlying interaction logic (drag, threshold actuation, typewriter reveal, pendulum decay) from the prior world. **Do** keep every demo's palette to ink/rule/accent(-ink)/highlight — no new colors enter through a demo.

### Tilt-surface hover → Press-surface hover (signature interaction, changed)
The prior world's cursor-tilt-plus-spotlight interaction (`useTilt`) has been replaced: `TiltLink` (`src/components/TiltLink.tsx`) is now a `brutal-press brutal-border brutal-shadow` pressable card-link — thick border, hard shadow, lifts on hover, presses flat on click — with no tilt or spotlight glow. **Do** reuse `TiltLink` for any new card that links to a project.

## Do's and Don'ts

### Do:
- **Do** keep Builder and Operator columns at identical width, gap, and card rhythm (`grid gap-10 lg:grid-cols-2 lg:gap-16`) — equal visual weight for both tracks is a product-level commitment, not a per-surface choice.
- **Do** pair every bordered, interactive surface with the hard-offset-shadow-plus-press pattern (`brutal-border brutal-shadow brutal-press`); this is the system's only elevation language.
- **Do** keep every border solid black, `3px` standard / `4px` on major dividers — never a thin or low-opacity line.
- **Do** use `accent-ink` (`#b8420e`), never the bright `accent` (`#ff5a1f`), for orange text or icon color set directly on the paper ground.
- **Do** reserve signal yellow (`highlight`) for live/action moments only (counters, the contact tab, the transition sweep) — never as a structural track color.
- **Do** render every stat as a live rolling counter (`Reading`) sourced from a real resume figure, in tabular-nums mono on a solid-ink background.

### Don't:
- **Don't** add border-radius to any card, button, chip, or panel; the system is square-cornered throughout.
- **Don't** introduce a soft/blurred `box-shadow`; only zero-blur, hard-offset shadows (`brutal-shadow*`) appear anywhere in this world.
- **Don't** set the bright accent orange (`#ff5a1f`) as text or icon color directly on `paper` — this is the exact contrast failure `accent-ink` exists to prevent (see the Accent-Ink Rule).
- **Don't** introduce a fourth accent hue, or use yellow as anything other than a live/action signal.
- **Don't** add arbitrary icon-set icons (Lucide/Heroicons/glyph fonts); the only icons this system carries are the two hand-drawn `GlyphMark` SVGs plus the per-project `ProjectGlyph` marks drawn from the same geometry as their demos.

**Defect found and fixed:** `HumidifierDemo.tsx` set its "ACTUATOR ON" status text color inline to `var(--accent)` (`#ff5a1f`) on the `paper`-background `DemoFrame` panel — a live instance of exactly the low-contrast pattern the Accent-Ink Rule exists to forbid. Fixed to `var(--accent-ink)`, consistent with every other on-paper accent-orange text/icon use.
