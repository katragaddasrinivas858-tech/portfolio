"use client";

import { useEffect, useRef } from "react";
import { animate, revealTrigger, prefersReducedMotion, EASE, DURATION_SLOW } from "@/lib/motion";
import type { Reading as ReadingType } from "@/content/resume";

export default function Reading({ reading, track }: { reading: ReadingType; track: "builder" | "operator" }) {
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
    <div ref={cardRef} className={`brutal-shadow-sm border-[3px] bg-ink p-5 ${trackColor}`}>
      <p className={`kicker mb-3 flex items-center gap-2 ${track === "operator" ? "kicker--accent" : ""}`}>
        {track === "builder" ? "BUILD READOUT" : "OPS READOUT"}
      </p>
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
