import type { Metadata } from "next";
import Kicker from "@/components/Kicker";
import RuleDivider from "@/components/RuleDivider";
import RevealSection from "@/components/RevealSection";
import TiltLink from "@/components/TiltLink";
import ProjectGlyph from "@/components/ProjectGlyph";
import { projects } from "@/content/resume";

export const metadata: Metadata = {
  title: "Projects — K. Srinivas Karthik",
  description: "Robotics, IoT, full-stack, and simulation projects — method, evidence, result.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <RevealSection selector=".reveal-item">
        <Kicker className="reveal-item">FINDINGS — BUILDER TRACK</Kicker>
        <h1 className="reveal-item mt-4 max-w-2xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Four projects, four write-ups
        </h1>
        <p className="reveal-item mt-4 max-w-xl text-ink-soft">
          Every entry is method, iteration, and result — the way engineering actually happens, not
          a tools list. Open a finding for an interactive sketch of its actual mechanism, built
          from the same math, not a screenshot.
        </p>
        <RuleDivider className="reveal-item mt-8" />
      </RevealSection>

      <RevealSection className="mt-12 grid gap-6 md:grid-cols-2" selector=".reveal-card">
        {projects.map((project) => (
          <TiltLink key={project.slug} href={`/projects/${project.slug}`} className="reveal-card group p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="kicker mb-2">{project.award ? "AWARDED" : "PROJECT"}</p>
                <h2 className="font-display text-2xl text-ink">{project.name}</h2>
              </div>
              <ProjectGlyph slug={project.slug} className="h-9 w-9 shrink-0" />
            </div>
            <p className="mt-2 text-sm font-bold text-ink-soft">{project.summary}</p>
            <p className="mt-4 text-xs font-bold text-ink-faint">{project.stack.join(" · ")}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-rule">
              Open finding + try the demo
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </p>
          </TiltLink>
        ))}
      </RevealSection>
    </div>
  );
}
