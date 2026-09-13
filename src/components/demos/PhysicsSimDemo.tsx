"use client";

import { useRef, useState } from "react";
import { animate } from "@/lib/motion";
import { angleFromPivot } from "@/lib/interactive";
import DemoFrame from "./DemoFrame";

const VIEWBOX = { w: 220, h: 150 };
const PIVOT = { x: 110, y: 18 };
const MAX_ANGLE = 58;

export default function PhysicsSimDemo() {
  const svgRef = useRef<SVGSVGElement>(null);
  const armRef = useRef<SVGGElement>(null);
  const draggingRef = useRef(false);
  const [showChat, setShowChat] = useState(false);

  const setAngle = (deg: number) => {
    if (armRef.current) armRef.current.style.transform = `rotate(${deg}deg)`;
  };

  const angleFromPointer = (clientX: number, clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return 0;
    const rect = svg.getBoundingClientRect();
    const pivotScreen = {
      x: rect.left + (PIVOT.x / VIEWBOX.w) * rect.width,
      y: rect.top + (PIVOT.y / VIEWBOX.h) * rect.height,
    };
    const raw = angleFromPivot(pivotScreen, { x: clientX, y: clientY });
    return Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, raw));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    setShowChat(false);
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setAngle(angleFromPointer(e.clientX, e.clientY));
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    setAngle(angleFromPointer(e.clientX, e.clientY));
  };

  const release = () => {
    if (!draggingRef.current || !armRef.current) return;
    draggingRef.current = false;

    const current =
      Number(
        armRef.current.style.transform.match(/rotate\(([-\d.]+)deg\)/)?.[1] ?? 0,
      ) || 0;

    animate(armRef.current, {
      rotate: [
        { to: current, duration: 0 },
        { to: -current * 0.55, duration: 420, ease: "outSine" },
        { to: current * 0.28, duration: 380, ease: "inOutSine" },
        { to: -current * 0.12, duration: 320, ease: "inOutSine" },
        { to: 0, duration: 280, ease: "outQuad" },
      ],
      onComplete: () => setShowChat(true),
    });
  };

  return (
    <DemoFrame label="PENDULUM EXPERIMENT">
      <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VIEWBOX.w} ${VIEWBOX.h}`}
          className="h-36 w-full touch-none select-none sm:w-48"
          onPointerMove={onPointerMove}
          onPointerUp={release}
          onPointerLeave={release}
        >
          <line x1={20} y1={18} x2={200} y2={18} stroke="var(--ink)" strokeWidth={2.5} />
          <g ref={armRef} style={{ transformOrigin: `${PIVOT.x}px ${PIVOT.y}px` }}>
            <line x1={PIVOT.x} y1={PIVOT.y} x2={PIVOT.x} y2={128} stroke="var(--ink)" strokeWidth={2.5} />
            <circle
              cx={PIVOT.x}
              cy={128}
              r={13}
              fill="var(--rule)"
              stroke="var(--ink)"
              strokeWidth={3}
              className="cursor-grab active:cursor-grabbing"
              onPointerDown={onPointerDown}
            />
          </g>
          <circle cx={PIVOT.x} cy={PIVOT.y} r={4} fill="var(--ink)" />
        </svg>

        <div>
          <p className="text-xs font-bold text-ink-soft">
            Drag the bob and release — the swing decays the way the simulator&rsquo;s physics
            engine renders it, no real lab required.
          </p>
          <div
            className={`mt-4 border-[3px] border-ink bg-paper p-3 text-xs transition-opacity duration-300 ${
              showChat ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="kicker kicker--faint mb-1">ILLUSTRATIVE CHATBOT EXCHANGE</p>
            <p className="text-ink-soft">
              <span className="font-semibold text-ink">Q —</span> Why does the swing shrink each
              time?
            </p>
            <p className="mt-1 text-ink-soft">
              <span className="font-semibold text-ink">Gemini —</span> Energy bleeds off to
              friction and air resistance each pass, so amplitude decays toward rest.
            </p>
          </div>
        </div>
      </div>
    </DemoFrame>
  );
}
