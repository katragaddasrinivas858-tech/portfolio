"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "@/lib/motion";
import DemoFrame from "./DemoFrame";

const SNIPPET = `function scoreSubmission(output, expected) {
  return output.trim() === expected.trim();
}`;

const VIEWS = {
  teacher: [
    { label: "Submissions today", value: "128" },
    { label: "Avg. completion", value: "76%" },
  ],
  student: [
    { label: "Your progress", value: "9 / 12" },
    { label: "Last run", value: "Passed" },
  ],
} as const;

export default function CodeLearnDemo() {
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [view, setView] = useState<"teacher" | "student">("teacher");
  const outputRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(SNIPPET.slice(0, i));
      if (i >= SNIPPET.length) {
        clearInterval(id);
        setShowOutput(true);
      }
    }, 22);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (showOutput && outputRef.current) {
      animate(outputRef.current, {
        opacity: [0, 1],
        translateY: [8, 0],
        duration: 420,
        ease: "outQuad",
      });
    }
  }, [showOutput]);

  const switchView = (next: "teacher" | "student") => {
    if (next === view || !statsRef.current) {
      setView(next);
      return;
    }
    const el = statsRef.current;
    animate(el, {
      opacity: [1, 0],
      duration: 140,
      ease: "inQuad",
      onComplete: () => {
        setView(next);
        animate(el, { opacity: [0, 1], duration: 220, ease: "outQuad" });
      },
    });
  };

  return (
    <DemoFrame label="IN-BROWSER EXECUTION">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="border-[3px] border-ink bg-ink p-4">
          <p className="kicker kicker--accent mb-2">EDITOR</p>
          <pre className="tabular-mono min-h-[4.5rem] whitespace-pre-wrap text-xs leading-relaxed text-paper">
            {typed}
            <span className="animate-pulse text-highlight">▌</span>
          </pre>
        </div>
        <div ref={outputRef} className="border-[3px] border-ink bg-paper p-4" style={{ opacity: showOutput ? undefined : 0 }}>
          <p className="kicker kicker--faint mb-2">OUTPUT</p>
          <p className="tabular-mono text-xs font-bold text-ink-soft">
            {showOutput ? "✓ scoreSubmission(output, expected) → true" : ""}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        {(["teacher", "student"] as const).map((v) => (
          <button
            key={v}
            onClick={() => switchView(v)}
            className={`brutal-press border-[3px] px-3 py-1 text-xs font-bold uppercase tracking-widest ${
              view === v
                ? "border-ink bg-rule text-paper shadow-[3px_3px_0_0_var(--ink)]"
                : "border-ink bg-paper text-ink-soft hover:text-ink"
            }`}
          >
            {v} view
          </button>
        ))}
      </div>

      <div ref={statsRef} className="mt-4 flex gap-8 tabular-mono text-sm">
        {VIEWS[view].map((stat) => (
          <p key={stat.label}>
            {stat.label.toUpperCase()} <span className="text-ink">{stat.value}</span>
          </p>
        ))}
      </div>
    </DemoFrame>
  );
}
