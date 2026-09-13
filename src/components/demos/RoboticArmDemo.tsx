"use client";

import { useEffect, useRef } from "react";
import { animate, prefersReducedMotion } from "@/lib/motion";
import { useTrackDrag } from "@/lib/interactive";
import DemoFrame from "./DemoFrame";

const MAX_ANGLE = 42;
const PIVOT = { x: 110, y: 118 };
const FINGER_LENGTH = 78;

export default function RoboticArmDemo() {
  const leftFingerRef = useRef<SVGLineElement>(null);
  const rightFingerRef = useRef<SVGLineElement>(null);
  const rawRef = useRef<HTMLSpanElement>(null);
  const emaRef = useRef<HTMLSpanElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const smoothed = useRef({ v: 0 });

  const applyAngle = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const lx = PIVOT.x - Math.sin(rad) * FINGER_LENGTH;
    const ly = PIVOT.y - Math.cos(rad) * FINGER_LENGTH;
    const rx = PIVOT.x + Math.sin(rad) * FINGER_LENGTH;
    leftFingerRef.current?.setAttribute("x2", lx.toFixed(1));
    leftFingerRef.current?.setAttribute("y2", ly.toFixed(1));
    rightFingerRef.current?.setAttribute("x2", rx.toFixed(1));
    rightFingerRef.current?.setAttribute("y2", ly.toFixed(1));
    if (emaRef.current) emaRef.current.textContent = `${angleDeg.toFixed(1)}°`;
  };

  const handleChange = (progress: number) => {
    const angle = progress * MAX_ANGLE;
    if (rawRef.current) rawRef.current.textContent = `${angle.toFixed(1)}°`;
    if (handleRef.current) handleRef.current.style.left = `${progress * 100}%`;

    if (prefersReducedMotion()) {
      smoothed.current.v = angle;
      applyAngle(angle);
      return;
    }

    animate(smoothed.current, {
      v: angle,
      duration: 260,
      ease: "outQuad",
      onUpdate: () => applyAngle(smoothed.current.v),
    });
  };

  const { trackRef, onPointerDown, onPointerMove, onPointerUp } = useTrackDrag(handleChange);

  useEffect(() => {
    applyAngle(0);
  }, []);

  return (
    <DemoFrame label="APERTURE CALCULATION">
      <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
        <svg viewBox="0 0 220 140" className="h-32 w-full sm:w-44" aria-hidden>
          <line x1={0} y1={128} x2={220} y2={128} stroke="var(--ink)" strokeWidth={2.5} />
          <circle cx={PIVOT.x} cy={PIVOT.y} r={5} fill="var(--ink)" />
          <line
            ref={leftFingerRef}
            x1={PIVOT.x}
            y1={PIVOT.y}
            x2={PIVOT.x}
            y2={PIVOT.y - FINGER_LENGTH}
            stroke="var(--rule)"
            strokeWidth={6}
            strokeLinecap="square"
          />
          <line
            ref={rightFingerRef}
            x1={PIVOT.x}
            y1={PIVOT.y}
            x2={PIVOT.x}
            y2={PIVOT.y - FINGER_LENGTH}
            stroke="var(--rule)"
            strokeWidth={6}
            strokeLinecap="square"
          />
        </svg>

        <div>
          <p className="text-xs font-bold text-ink-soft">
            Drag to move the hand — the gripper follows a scale-invariant angle calculated from
            finger position.
          </p>
          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            className="relative mt-4 h-8 w-full cursor-ew-resize touch-none border-y-[3px] border-ink"
          >
            <div className="absolute inset-y-0 left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 bg-ink/20" />
            <div
              ref={handleRef}
              className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 border-[3px] border-ink bg-accent shadow-[3px_3px_0_0_var(--ink)]"
              style={{ left: "0%" }}
            />
          </div>

          <div className="mt-4 flex gap-6 tabular-mono text-sm font-bold">
            <p>
              RAW <span ref={rawRef} className="text-ink">0.0°</span>
            </p>
            <p>
              EMA-SMOOTHED <span ref={emaRef} className="text-accent-ink">0.0°</span>
            </p>
          </div>
        </div>
      </div>
    </DemoFrame>
  );
}
