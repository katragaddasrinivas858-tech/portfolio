"use client";

import { animate, createScope, onScroll, stagger, type Scope } from "animejs";
import { useEffect, useRef } from "react";

/**
 * Shared motion system — every reveal, counter, and rule-draw on the site
 * reads off these constants so the whole page moves as one grammar rather
 * than a pile of per-component effects.
 */
export const EASE = "outExpo";
export const EASE_SOFT = "outQuad";
export const DURATION = 820;
export const DURATION_SLOW = 1400;
export const STAGGER_GAP = 70;

// Route-transition timings — the same clock, tuned for a quicker one-shot
// wipe rather than a scroll-in reveal, but sourced from this one file.
export const TRANSITION_EASE = "inOutQuad";
export const TRANSITION_SWEEP_DURATION = 360;
export const TRANSITION_SWEEP_FADE_DURATION = 260;
export const TRANSITION_REVEAL_DURATION = DURATION;
export const TRANSITION_REVEAL_START = 140;
export const TRANSITION_STAGGER_GAP = STAGGER_GAP;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Standard scroll-in trigger: fires once, forward-only, slightly before the element clears the fold. */
export function revealTrigger(target: string | Element) {
  return onScroll({
    target,
    enter: "bottom-=6% top",
    leave: "top top",
    repeat: false,
  });
}

/** Creates an anime.js Scope bound to a React ref, auto-reverting on unmount. */
export function useAnimeScope<T extends HTMLElement>(
  setup: (root: T) => void,
  deps: React.DependencyList = [],
) {
  const rootRef = useRef<T | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    if (prefersReducedMotion()) return;
    const scope: Scope = createScope({ root: rootRef as unknown as { current: T } }).add(() => {
      setup(rootRef.current as T);
    });
    return () => scope.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rootRef;
}

/** Fades + lifts a group of elements into place, staggered, on scroll or mount. */
export function revealChildren(
  root: HTMLElement,
  selector: string,
  opts: { trigger?: boolean; delay?: number } = {},
) {
  const els = root.querySelectorAll<HTMLElement>(selector);
  if (!els.length) return;
  if (prefersReducedMotion()) {
    els.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }
  animate(els, {
    opacity: [0, 1],
    translateY: [26, 0],
    duration: DURATION,
    delay: stagger(STAGGER_GAP, { start: opts.delay ?? 0 }),
    ease: EASE,
    autoplay: opts.trigger === false ? true : revealTrigger(root),
  });
}

/** Draws a rule line in (scaleX 0 -> 1) on scroll or mount. */
export function drawRule(
  root: HTMLElement,
  selector: string,
  opts: { trigger?: boolean; delay?: number } = {},
) {
  const els = root.querySelectorAll<HTMLElement>(selector);
  if (!els.length) return;
  if (prefersReducedMotion()) {
    els.forEach((el) => {
      el.style.transform = "none";
    });
    return;
  }
  animate(els, {
    scaleX: [0, 1],
    duration: DURATION_SLOW * 0.7,
    delay: stagger(90, { start: opts.delay ?? 0 }),
    ease: EASE,
    autoplay: opts.trigger === false ? true : revealTrigger(root),
  });
}

export { animate, stagger, onScroll };
export type { JSAnimation } from "animejs";
