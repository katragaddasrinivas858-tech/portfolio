---
name: K. Srinivas Karthik — Field Notes
description: An academic research-poster world where builder and operator identities read as two equal-weight findings columns.
colors:
  paper: "#f4eee2"
  paper-raised: "#ece2cd"
  paper-deep: "#e4d7bc"
  ink: "#1c1916"
  ink-soft: "#625a4d"
  ink-faint: "#8a8172"
  findings-ink: "#1d2b53"
  oxide-amber: "#c1601f"
  hairline: "rgba(28, 25, 22, 0.16)"
  hairline-strong: "rgba(28, 25, 22, 0.32)"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.4rem, 5vw, 3.75rem)"
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
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.22em"
  readout:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 400
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
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px"
  contact-button:
    backgroundColor: "{colors.oxide-amber}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "6px 16px"
---

# Design System: K. Srinivas Karthik — Field Notes

## Overview

**Creative North Star: "The Findings Wall"**

The site is a conference research-poster board, not a marketing page: warm cream paper ground, ink-black rule lines, and one committed academic accent, holding two parallel tracks — Builder and Operator — at genuinely equal visual weight. Every section reads like a poster panel (kicker label → claim → evidence), and every number on the page is a physical instrument reading that rolls up to its true value rather than appearing pre-formed. The build refuses both the category-default portfolio (dark gradient hero, glassmorphic cards, generic fade-up) and its opposite (a static plain-text resume with no motion at all): motion exists, but it is disciplined — one shared scroll-clock governs every reveal, rule-draw, and counter, so the page moves as a single system rather than a pile of per-component effects.

No image-generation comp round preceded this build; the system below is read directly from shipped source (`globals.css`, `layout.tsx`, `lib/motion.ts`, and the component set), not from a design comp or a screenshot. No browser screenshots were taken this session (the screenshot tool was disconnected); every claim here traces to source code and the CSS/animation logic it produces, not to a rendered capture.

Two contract-fidelity gaps found at documentation time were corrected before this record was finalized: the direction contract's "fixed poster-style corner tab" for Contact had not been built (only an in-nav button existed) — added as `ContactTab.tsx`, mounted at the layout root; and `PageTransition.tsx` hardcoded its own easing/duration values instead of drawing from the shared clock — it now imports `TRANSITION_EASE`/`TRANSITION_SWEEP_DURATION`/etc. from `lib/motion.ts` alongside the existing `EASE`/`DURATION` constants.

**Key Characteristics:**
- Flat poster-board ground (warm cream), zero border-radius, hairline rules instead of shadows
- One serif display face (Fraunces) over a grotesk body and a mono label/data system — never a generic sans-everywhere stack
- A single shared scroll-clock (`src/lib/motion.ts`) drives every reveal, rule-draw, and counter roll-up
- Exactly two reused glyph marks (circle-plus for Builder, bracketed arrow for Operator) as the page's only decorative iconography
- Builder and Operator tracks always ship as equal-width, equal-rhythm parallel columns, collapsing to stacked sequence on mobile

## Colors

A three-tone paper system carries the ground; ink does the reading; two committed accents — a deep indigo rule-blue and a warm oxide-amber — are the entire color vocabulary beyond neutrals.

### Primary
- **Findings-Ink Blue** (`#1d2b53`): the poster's structural color — column rules, section dividers, active nav state, headline links, the route-change sweep bar. Never used as a large fill; always rules, text, or hairline-adjacent accents.

### Secondary
- **Oxide-Amber** (`#c1601f`): reserved for live/active/in-motion moments only — the "RESULTS" kicker variant, the Contact button, hover states on links and cards. Its rarity signals "this is moving or actionable."

### Neutral
- **Poster Cream** (`#f4eee2`): base page ground, `body` and default card background.
- **Raised Paper** (`#ece2cd`): the alternating section background and the Reading-card fill, used to separate poster "panels" without a shadow.
- **Deep Paper** (`#e4d7bc`): defined as a third ground step; reserved for a deeper recess than Raised Paper (not yet observed in a shipped surface — carry it as an available step, not an active use).
- **Ink** (`#1c1916`): primary text and headline color.
- **Soft Ink** (`#625a4d`): body copy, card descriptions, subtitle text.
- **Faint Ink** (`#8a8172`): tertiary/meta text (card `meta`, readout `detail` line).
- **Hairline** (`rgba(28,25,22,0.16)` / strong `rgba(28,25,22,0.32)`): every card border, section divider, and underline. This is the system's only "border" color; there is no separate gray-border token.

### Named Rules
**The Two-Accent Rule.** Only two committed colors ever act as accents: findings-ink blue (structural/permanent) and oxide-amber (live/active). No third accent hue is introduced.
**The No-Shadow Rule.** Depth is never conveyed with `box-shadow`; hairline borders and background-tone steps (`paper` → `paper-raised` → `paper-deep`) do that work instead.

## Typography

**Display Font:** Fraunces (with Georgia, serif fallback)
**Body Font:** Space Grotesk (with system-ui, sans-serif fallback)
**Label/Mono Font:** Space Mono (with ui-monospace, monospace fallback)

**Character:** An academic-serif headline voice (Fraunces, used at its optical-size and soft-weight axes) paired with a precise grotesk body and a mono system reserved for labels, dates, and data — the poster's "caption register." No generic Inter-everywhere stack.

### Hierarchy
- **Display** (400, `clamp(2.4rem, 5vw, 3.75rem)`, line-height 1.08): hero headline and page `h1`s (`font-display`), always tight tracking.
- **Headline** (400, `text-2xl`–`text-3xl` / ~1.5–1.875rem): `ColumnHeader` track titles ("Builder" / "Operator") and `FindingCard` titles at `text-xl`.
- **Body** (400, `text-sm`–`text-base`, line-height ~1.6–1.75): paragraph copy inside cards, subtitles, hero support text (`text-ink-soft`).
- **Label/Kicker** (700, `0.6875rem`, tracked `0.22em`, uppercase, mono): the `.kicker` class — poster section labels (ABSTRACT / METHOD / FINDING / RESULTS), nav wordmark, card eyebrow labels.
- **Readout** (400, `text-3xl`–`text-4xl`, tabular-nums mono): the `Reading` component's live counter value — always monospaced with `font-variant-numeric: tabular-nums` so digits don't shift width as they roll.

### Named Rules
**The Poster-Caption Rule.** Every tracked-caps mono kicker is a structural section label the poster world itself specifies (ABSTRACT / METHOD / FINDING / EVIDENCE-style), not a decorative eyebrow invented per-surface. New surfaces may add a kicker only when it names a real poster section, never as pure ornament.

## Layout

Single content column at `max-w-6xl` (`max-w-3xl` on the narrower Contact page), horizontal padding `px-5` mobile / `sm:px-8` desktop. Sections stack full-bleed with `border-t border-hairline` and alternate ground tone (`bg-paper` / `bg-paper-raised/40`) to read as separate poster panels without shadows. Vertical section rhythm is `py-16`. The Builder/Operator split is a `grid gap-10 lg:grid-cols-2 lg:gap-16`: two genuinely equal-width columns at desktop (`lg:`), collapsing to a single stacked sequential column below `lg`. Card grids inside a track use `gap-4 sm:grid-cols-2` for paired readouts. Nav is a sticky top bar (`sticky top-0`, `bg-paper/90` with backdrop-blur) with a horizontally-scrolling link row on mobile instead of a collapsed menu.

## Elevation & Depth

The system is flat by construction: no `box-shadow` appears anywhere in the stylesheet or components. Depth and separation are conveyed entirely through hairline borders (`1px`, `rgba(28,25,22,0.16)`, strong variant `0.32`) and background-tone stepping between `paper`, `paper-raised`, and `paper-deep`. The one "raised" reading is a background-color shift, never a shadow.

### Named Rules
**The Flat Poster Rule.** Surfaces never lift on shadow. Separation comes from a hairline border or a one-step change in paper tone; if neither is present, the surface is meant to read as continuous with its section.

## Shapes

Every rectangle in the system — cards, buttons, nav links, the readout panel — ships with zero border-radius (`rounded: none`). Corners are square throughout; the only curvature on the page is in the two GlyphMark glyphs and the animated rule lines. Borders are uniformly `1px` hairline (`border-hairline`) except where a component intentionally upgrades to the `2px` findings-ink `rule-line--rule` for structural dividers (column headers, hero rule, contact-page rule).

## Components

### Buttons
- **Shape:** square corners, no radius.
- **Primary (Contact corner tab):** the direction contract's "fixed poster-style corner tab" — `ContactTab.tsx`, fixed `bottom-5 right-5` (`sm:bottom-6 sm:right-6`), `background-color: var(--accent)` / `border: 1px solid var(--accent)`, `color: var(--paper)`, uppercase, tracked (`tracking-[0.2em]`), `font-bold`, padding `px-3 py-2` (`sm:px-4 sm:py-2.5`), always mounted at the layout root so it persists across every route and scroll position.
- **Hover / Focus:** `translateY(-4px)` lift via `transition-transform`; no color change on hover, the lift alone signals interactivity.
- **Secondary:** none observed; all other actions are text links (`HeroLink`, footer links, "Read every project finding →") in findings-ink or hairline-underlined ink-soft.

### Cards / Containers
- **Corner Style:** square (no radius) on every card variant.
- **Background:** `FindingCard` = `paper`; `Reading` = `paper-raised/60`; contact channel card = `paper`.
- **Shadow Strategy:** none — see Elevation & Depth; separation is the `1px hairline` border alone.
- **Border:** `1px solid var(--hairline)` on all cards; upgrades to hover `border-rule` on interactive cards (contact channels).
- **Internal Padding:** `24px` (`p-6`) for `FindingCard`, `20px` (`p-5`) for `Reading`.

### Navigation
- **Style:** sticky top bar, `1px` hairline bottom border, translucent cream background with backdrop-blur. Wordmark rendered in the mono kicker style, not display serif. Contact is not a nav item — it lives permanently in the fixed corner tab (see Buttons) so it never competes with the route links.
- **Typography:** `text-sm` links; active route is `text-rule font-semibold`, inactive is `text-ink-soft` with `hover:text-ink`.
- **Mobile:** the desktop link row is replaced by a horizontally-scrolling `text-xs` row beneath the wordmark, not a hamburger/drawer pattern.

### Findings Wall column (signature component)
`ColumnHeader` + `FindingCard` + `RuleDivider` together form the site's core repeating unit: a `GlyphMark` (builder = circled cross, operator = bracketed arrow) beside a display-serif track title, a subtitle line, a self-drawing rule beneath it, then a sequence of `FindingCard`s that each open with a mono kicker (METHOD / PROJECT / SCOPE / CYCLE / INFRASTRUCTURE), a display-serif claim title, and a body of evidence. `Reading` is the sibling signature component: a bordered `paper-raised` panel whose mono, tabular-numeral value animates from `0` up to its true resume-sourced figure on scroll-in, driven by the same `EASE`/`DURATION_SLOW` constants that draw every rule line — one shared scroll-clock (`src/lib/motion.ts`: `EASE = "outExpo"`, `DURATION = 820`, `DURATION_SLOW = 1400`, `STAGGER_GAP = 70`, `revealTrigger`, `revealChildren`, `drawRule`) governs reveals, rule-draws, and counter roll-ups alike, so the page reads as one motion grammar rather than scattered effects.

### Interactive project demos (signature system)
Every project ships a bespoke, hand-built interactive diagram of its actual mechanism — never a screenshot, always framed by `DemoFrame` with the "INTERACTIVE SKETCH — [MECHANISM]" kicker and an "illustrative, not a captured screenshot" disclosure line. `src/components/demos/`: `RoboticArmDemo` (drag-driven aperture angle with a real EMA-style smoothing retarget on `animate()`), `HumidifierDemo` (drag-driven threshold actuation with a looping mist animation above the setpoint), `CodeLearnDemo` (typewriter-revealed code + output panel, teacher/student stat crossfade), `PhysicsSimDemo` (drag-and-release pendulum decaying through explicit rotate keyframes, settling into a labeled illustrative chatbot exchange). `ProjectDemo` maps a project slug to its demo; the same component renders full-size on `/projects/[slug]` and as a compact teaser in the home hero (`RoboticArmDemo`, the flagship). `ProjectGlyph` is the static rest-state icon (one per project, drawn from the same geometry as its demo) used on the `/projects` index cards and home previews. **Do** give any new project its own demo built from the resume's actual mechanism (a real calculation, threshold, or process), never a decorative animation with no connection to the claim. **Do** keep every demo's palette to ink/rule/accent/hairline — no new colors enter through a demo.

### Tilt-surface hover (signature interaction)
`useTilt` + `TiltLink`/`TiltDiv` (`src/lib/useTilt.ts`) give project-linking cards a subtle cursor-reactive tilt (±5°, `perspective(700px)`) and an amber radial spotlight following the pointer (`.tilt-surface` in `globals.css`, using `--accent-soft`), skipped entirely under `prefers-reduced-motion`. Used on every `/projects` index card and the three home-page project previews (which now link straight to their demo). **Do** reuse `TiltLink`/`TiltDiv` for any new card that links to a project; **Don't** stack "reveal-card" on both a `TiltLink` wrapper and the `FindingCard` it wraps — only the outer element carries the reveal class, or the scroll-reveal double-fires.

## Do's and Don'ts

### Do:
- **Do** keep Builder and Operator columns at identical width, gap, and card rhythm (`grid gap-10 lg:grid-cols-2 lg:gap-16`) — the site's core product commitment is equal visual weight for both tracks.
- **Do** drive every reveal, rule-draw, and counter through the shared constants in `src/lib/motion.ts` (`EASE`, `DURATION`, `DURATION_SLOW`, `revealTrigger`) rather than one-off animation values per component.
- **Do** render every stat as a live rolling counter (`Reading`) sourced from a real resume figure, in tabular-nums mono — never a static pre-set number.
- **Do** use the two existing `GlyphMark` glyphs (builder circle-plus, operator bracketed-arrow) as the only decorative marks; a new track or section reuses one of these two, it does not invent a third.
- **Do** respect `prefers-reduced-motion`: every reveal/rule-draw/counter has a static fallback that shows final state immediately (already implemented in `motion.ts` and `globals.css`).
- **Do** give every project a real, hand-built interactive demo of its actual mechanism (`src/components/demos/`) — the site's evidence is something a visitor can operate, not just read.

### Don't:
- **Don't** introduce `box-shadow` anywhere; depth is hairline-border and paper-tone-step only (see the Flat Poster Rule).
- **Don't** add border-radius to cards, buttons, or panels; the system is square-cornered throughout.
- **Don't** introduce a third accent color; findings-ink blue (structural) and oxide-amber (live/active) are the complete accent set.
- **Don't** add arbitrary icon-set icons (Lucide/Heroicons/glyph fonts); the only icons this system carries are the two hand-drawn `GlyphMark` SVGs.
- **Don't** treat the mono kicker as a free-floating decorative eyebrow; it only appears as a real poster section label (ABSTRACT/METHOD/FINDING/etc.), per the Poster-Caption Rule.
