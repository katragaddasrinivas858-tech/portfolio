"use client";

import { useEffect, useRef } from "react";
import { animate, revealTrigger, prefersReducedMotion, EASE, DURATION_SLOW } from "@/lib/motion";
import type { Reading as ReadingType } from "@/content/resume";

type ReadingProps = {
  reading: ReadingType;
  track: "builder" | "operator";
  /** When false, renders without its own border/shadow/background — for use inside a shared instrument panel. */
  bordered?: boolean;
};

export default function Reading({ reading, track, bordered = true }: ReadingProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const trackColor = track === "builder" ? "border-rule" : "border-accent";

  useEffect(() => {
    const card = cardRef.current;
    const valueEl = valueRef.current;
    if (!card || !valueEl) return;

    const format = (n: number) =>
      reading.decimals ? n.toFixed(reading.decimals) : Math.round(n).toString();

    if (prefersReducedMotion()) {
      valueEl.textContent = format(reading.value);
      return;
    }

    valueEl.textContent = format(0);
    const state = { val: 0 };
    const anim = animate(state, {
      val: reading.value,
      duration: DURATION_SLOW,
      ease: EASE,
      autoplay: revealTrigger(card),
      onUpdate: () => {
        valueEl.textContent = format(state.val);
      },
    });

    return () => {
      anim.revert();
    };
  }, [reading]);

  return (
    <div
      ref={cardRef}
      className={bordered ? `brutal-shadow-sm border-[3px] bg-ink p-5 ${trackColor}` : "bg-ink p-5"}
    >
      <p className="tabular-mono text-3xl font-bold leading-none text-highlight sm:text-4xl">
        {reading.prefix}
        <span ref={valueRef}>0</span>
        {reading.suffix}
      </p>
      <p className="mt-2 text-sm font-bold text-paper">{reading.label}</p>
      <p className="mt-1 text-xs text-paper/60">{reading.detail}</p>
    </div>
  );
}
