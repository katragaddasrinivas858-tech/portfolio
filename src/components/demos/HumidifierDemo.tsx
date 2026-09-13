"use client";

import { useRef } from "react";
import { animate, type JSAnimation } from "@/lib/motion";
import { useTrackDrag } from "@/lib/interactive";
import DemoFrame from "./DemoFrame";

const THRESHOLD = 55;

export default function HumidifierDemo() {
  const handleRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const mistRef = useRef<SVGGElement>(null);
  const loopRef = useRef<JSAnimation | null>(null);
  const activeRef = useRef(false);

  const setActive = (active: boolean) => {
    if (active === activeRef.current) return;
    activeRef.current = active;

    if (statusRef.current) {
      statusRef.current.textContent = active ? "ON" : "OFF";
      statusRef.current.style.color = active ? "var(--accent)" : "var(--ink-soft)";
    }

    if (!mistRef.current) return;

    if (active) {
      loopRef.current = animate(mistRef.current, {
        translateY: [4, -6],
        opacity: [0.25, 0.9],
        duration: 900,
        ease: "inOutSine",
        loop: true,
        alternate: true,
      });
    } else {
      loopRef.current?.revert();
      mistRef.current.style.opacity = "0";
      mistRef.current.style.transform = "translateY(4px)";
    }
  };

  const handleChange = (progress: number) => {
    const humidity = progress * 100;
    if (handleRef.current) handleRef.current.style.left = `${progress * 100}%`;
    if (valueRef.current) valueRef.current.textContent = `${humidity.toFixed(0)}%`;
    setActive(humidity >= THRESHOLD);
  };

  const { trackRef, onPointerDown, onPointerMove, onPointerUp } = useTrackDrag(handleChange);

  return (
    <DemoFrame label="THRESHOLD ACTUATION">
      <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
        <svg viewBox="0 0 100 100" className="h-28 w-28 shrink-0" aria-hidden>
          <rect x={30} y={40} width={40} height={50} fill="none" stroke="var(--ink)" strokeWidth={3} />
          <rect x={40} y={30} width={20} height={12} fill="var(--rule)" stroke="var(--ink)" strokeWidth={2} />
          <g ref={mistRef} style={{ opacity: 0, transform: "translateY(4px)" }}>
            <path d="M40 28c3-6 7-6 10 0" stroke="var(--accent)" strokeWidth={3} fill="none" strokeLinecap="round" />
            <path d="M46 22c3-6 7-6 10 0" stroke="var(--accent)" strokeWidth={3} fill="none" strokeLinecap="round" />
          </g>
        </svg>

        <div>
          <p className="text-xs font-bold text-ink-soft">
            Drag to simulate a DHT11 reading. Past the {THRESHOLD}% threshold, actuation fires —
            the real unit persists this setpoint in NVS across restarts.
          </p>
          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            className="relative mt-4 h-8 w-full cursor-ew-resize touch-none border-y-[3px] border-ink"
          >
            <div className="absolute inset-y-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-ink/20" />
            <div
              className="absolute top-1/2 h-full w-[3px] -translate-y-1/2 bg-accent"
              style={{ left: `${THRESHOLD}%` }}
              aria-hidden
            />
            <div
              ref={handleRef}
              className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 border-[3px] border-ink bg-rule shadow-[3px_3px_0_0_var(--ink)]"
              style={{ left: "0%" }}
            />
          </div>

          <div className="mt-4 flex gap-6 tabular-mono text-sm font-bold">
            <p>
              HUMIDITY <span ref={valueRef} className="text-ink">0%</span>
            </p>
            <p>
              ACTUATOR <span ref={statusRef} className="text-ink-soft">OFF</span>
            </p>
          </div>
        </div>
      </div>
    </DemoFrame>
  );
}
