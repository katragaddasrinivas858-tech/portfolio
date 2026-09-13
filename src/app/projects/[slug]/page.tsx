import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Kicker from "@/components/Kicker";
import RuleDivider from "@/components/RuleDivider";
import RevealSection from "@/components/RevealSection";
import ProjectDemo from "@/components/demos/ProjectDemo";
import { projects } from "@/content/resume";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — K. Srinivas Karthik`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <RevealSection selector=".reveal-item">
        <Link href="/projects" className="reveal-item text-sm text-ink-soft hover:text-rule">
          ← All findings
        </Link>
        <Kicker className="reveal-item mt-6">{project.award ? "AWARDED PROJECT" : "PROJECT FINDING"}</Kicker>
        <h1 className="reveal-item mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          {project.name}
        </h1>
        <p className="reveal-item mt-4 text-lg text-ink-soft">{project.summary}</p>
        {project.award && (
          <p className="reveal-item kicker-chip kicker-chip--accent mt-3 w-fit">{project.award}</p>
        )}
        <div className="reveal-item mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="tabular-mono border-2 border-ink px-2 py-1 text-xs font-bold text-ink-soft">
              {tech}
            </span>
          ))}
        </div>
        <RuleDivider weight="rule" className="reveal-item mt-8" />
      </RevealSection>

      <div className="mt-10">
        <ProjectDemo slug={project.slug} />
      </div>

      <RevealSection selector=".reveal-item" className="mt-10">
        <p className="kicker reveal-item mb-4">METHOD &amp; ITERATION</p>
        <div className="space-y-5">
          {project.bullets.map((bullet) => (
            <p key={bullet} className="reveal-item leading-relaxed text-ink-soft">
              {bullet}
            </p>
          ))}
        </div>
      </RevealSection>

      <RevealSection selector=".reveal-item" className="mt-16 border-t-[3px] border-ink pt-8">
        <p className="kicker reveal-item mb-3">NEXT FINDING</p>
        <Link href={`/projects/${next.slug}`} className="reveal-item group flex items-baseline justify-between gap-4">
          <span className="font-display text-2xl text-ink">{next.name}</span>
          <span className="text-sm font-semibold text-rule transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </RevealSection>
    </div>
  );
}
