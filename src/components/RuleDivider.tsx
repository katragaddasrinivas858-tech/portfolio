"use client";

import { useAnimeScope, drawRule } from "@/lib/motion";

type RuleDividerProps = {
  weight?: "hairline" | "rule";
  color?: "ink" | "rule" | "accent";
  className?: string;
};

const modifierClass: Record<string, string> = {
  ink: "rule-line--ink",
  rule: "rule-line--rule",
  accent: "rule-line--accent",
};

export default function RuleDivider({ weight = "hairline", color = "rule", className = "" }: RuleDividerProps) {
  const ref = useAnimeScope<HTMLDivElement>((root) => {
    drawRule(root, ".js-rule");
  });

  return (
    <div ref={ref} className={className}>
      <div className={`js-rule rule-line ${weight === "rule" ? modifierClass[color] : ""}`} />
    </div>
  );
}
