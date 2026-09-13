"use client";

import { useAnimeScope, revealChildren } from "@/lib/motion";

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  selector?: string;
  as?: "div" | "section";
};

/** Wraps a block of content and reveals its direct reveal-marked children on scroll-in. */
export default function RevealSection({
  children,
  className = "",
  selector = ".reveal-card, .reveal-item",
  as = "div",
}: RevealSectionProps) {
  const ref = useAnimeScope<HTMLDivElement>((root) => {
    revealChildren(root, selector);
  });

  const Tag = as;
  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
