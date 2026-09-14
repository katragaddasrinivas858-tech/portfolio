"use client";

import { useRef } from "react";
import { animate, type JSAnimation } from "@/lib/motion";
import { useTrackDrag } from "@/lib/interactive";
import DemoFrame from "./DemoFrame";

const THRESHOLD = 55;
const TANK_TOP = 44;
const TANK_BOTTOM = 88;
const TANK_FULL = TANK_TOP + 6;
const TANK_LOW = TANK_BOTTOM - 8;

export default function HumidifierDemo() {
  const handleRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const waterButtonRef = useRef<HTMLButtonElement>(null);
  const mistRef = useRef<SVGGElement>(null);
  const tankRef = useRef<SVGRectElement>(null);
  const loopRef = useRef<JSAnimation | null>(null);
  const activeRef = useRef<boolean | null>(null);
  const humidityRef = useRef(0);
  const waterLowRef = useRef(false);

  const setMist = (on: boolean) => {
    if (!mistRef.current) return;
    if (on) {
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

  const evaluate = () => {
    const pastThreshold = humidityRef.current >= THRESHOLD;
    const blocked = waterLowRef.current;
    const shouldActuate = pastThreshold && !blocked;

    if (shouldActuate === activeRef.current) return;
    activeRef.current = shouldActuate;

    if (statusRef.current) {
      if (shouldActuate) {
        statusRef.current.textContent = "ON";
        statusRef.current.style.color = "var(--accent-ink)";
      } else if (blocked && pastThreshold) {
        statusRef.current.textContent = "BLOCKED — LOW WATER";
        statusRef.current.style.color = "var(--accent-ink)";
      } else {
        statusRef.current.textContent = "OFF";
        statusRef.current.style.color = "var(--ink-soft)";
      }
    }

    setMist(shouldActuate);
  };

  const setWaterLow = (low: boolean) => {
    waterLowRef.current = low;
    if (waterButtonRef.current) {
      waterButtonRef.current.textContent = low ? "WATER: LOW — refill" : "WATER: OK";
    }
    if (tankRef.current) {
      animate(tankRef.current, {
        y: low ? TANK_LOW : TANK_FULL,
        height: low ? TANK_BOTTOM - TANK_LOW : TANK_BOTTOM - TANK_FULL,
        duration: 420,
        ease: "outQuad",
      });
    }
    evaluate();
  };

  const handleChange = (progress: number) => {
    const humidity = progress * 100;
    humidityRef.current = humidity;
    if (handleRef.current) handleRef.current.style.left = `${progress * 100}%`;
    if (valueRef.current) valueRef.current.textContent = `${humidity.toFixed(0)}%`;
    evaluate();
  };

  const { trackRef, onPointerDown, onPointerMove, onPointerUp } = useTrackDrag(handleChange);

  return (
    <DemoFrame label="THRESHOLD ACTUATION + SAFETY INTERLOCK">
      <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
        <svg viewBox="0 0 100 100" className="h-28 w-28 shrink-0" aria-hidden>
          <rect x={30} y={40} width={40} height={50} fill="none" stroke="var(--ink)" strokeWidth={3} />
          <rect
            ref={tankRef}
            x={33}
            y={TANK_FULL}
            width={34}
            height={TANK_BOTTOM - TANK_FULL}
            fill="var(--rule)"
            opacity={0.35}
          />
          <rect x={40} y={30} width={20} height={12} fill="var(--rule)" stroke="var(--ink)" strokeWidth={2} />
          <g ref={mistRef} style={{ opacity: 0, transform: "translateY(4px)" }}>
            <path d="M40 28c3-6 7-6 10 0" stroke="var(--accent)" strokeWidth={3} fill="none" strokeLinecap="round" />
            <path d="M46 22c3-6 7-6 10 0" stroke="var(--accent)" strokeWidth={3} fill="none" strokeLinecap="round" />
          </g>
        </svg>

        <div>
          <p className="text-xs font-bold text-ink-soft">
            Drag to simulate a DHT11 reading. Past the {THRESHOLD}% threshold, humidifier_control
            fires the relay — unless the float sensor reports low water, which interlocks the
            actuator regardless of humidity.
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

          <button
            ref={waterButtonRef}
            type="button"
            onClick={() => setWaterLow(!waterLowRef.current)}
            className="brutal-press mt-4 border-[3px] border-ink bg-paper px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-soft"
          >
            WATER: OK
          </button>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 tabular-mono text-sm font-bold">
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
