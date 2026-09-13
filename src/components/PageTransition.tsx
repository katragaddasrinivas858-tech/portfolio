"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  animate,
  stagger,
  prefersReducedMotion,
  EASE,
  TRANSITION_EASE,
  TRANSITION_SWEEP_DURATION,
  TRANSITION_SWEEP_FADE_DURATION,
  TRANSITION_REVEAL_DURATION,
  TRANSITION_REVEAL_START,
  TRANSITION_STAGGER_GAP,
} from "@/lib/motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (prefersReducedMotion()) return;

    if (sweepRef.current) {
      sweepRef.current.style.transform = "scaleX(0)";
      sweepRef.current.style.opacity = "1";
      animate(sweepRef.current, {
        scaleX: [0, 1],
        duration: TRANSITION_SWEEP_DURATION,
        ease: TRANSITION_EASE,
      });
      animate(sweepRef.current, {
        opacity: [1, 0],
        delay: TRANSITION_SWEEP_DURATION - 40,
        duration: TRANSITION_SWEEP_FADE_DURATION,
        ease: TRANSITION_EASE,
      });
    }

    if (containerRef.current) {
      const sections = containerRef.current.children;
      if (sections.length) {
        animate(sections, {
          opacity: [0, 1],
          translateY: [18, 0],
          duration: TRANSITION_REVEAL_DURATION,
          delay: stagger(TRANSITION_STAGGER_GAP, { start: TRANSITION_REVEAL_START }),
          ease: EASE,
        });
      }
    }
  }, [pathname]);

  return (
    <>
      <div
        ref={sweepRef}
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[5px] origin-left bg-highlight"
        style={{ transform: "scaleX(0)" }}
      />
      <div ref={containerRef} key={pathname}>
        {children}
      </div>
    </>
  );
}
