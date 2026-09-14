import Link from "next/link";
import Kicker from "@/components/Kicker";
import RuleDivider from "@/components/RuleDivider";
import ColumnHeader from "@/components/ColumnHeader";
import FindingCard from "@/components/FindingCard";
import Reading from "@/components/Reading";
import RevealSection from "@/components/RevealSection";
import HeroLink from "@/components/HeroLink";
import TiltLink from "@/components/TiltLink";
import ProjectGlyph from "@/components/ProjectGlyph";
import RoboticArmDemo from "@/components/demos/RoboticArmDemo";
import {
  person,
  projects,
  roles,
  builderReadings,
  operatorReadings,
  education,
  achievements,
} from "@/content/resume";

export default function Home() {
  const builderProjects = projects.slice(0, 3);
  const operatorRole = roles.find((r) => r.track === "operator")!;
  const builderRole = roles.find((r) => r.track === "builder")!;

  return (
    <div>
      {/* ABSTRACT */}
      <RevealSection as="section" selector=".reveal-item" className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          <div>
            <Kicker className="reveal-item">FIELD NOTES — AI/ML ENGINEERING &amp; OPERATIONS</Kicker>
            <h1 className="reveal-item mt-5 max-w-xl font-display text-[2.4rem] leading-[1.08] tracking-tight text-ink sm:text-6xl">
              {person.name.split(" ").slice(1).join(" ")} builds the models and runs the room.
            </h1>
            <p className="reveal-item mt-6 max-w-xl text-base text-ink-soft sm:text-lg">
              {person.role} at GITAM University, Head of Operations for a seven-domain student
              tech community, and a full-stack intern co-building a product end to end. This
              record reads both halves at equal weight — no résumé padding, no invented metrics.
            </p>

            <div className="reveal-item mt-8">
              <RuleDivider />
            </div>

            <div className="reveal-item mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <HeroLink href={`mailto:${person.email}`}>{person.email}</HeroLink>
              <HeroLink href={person.github}>{person.githubLabel}</HeroLink>
              <HeroLink href={person.linkedin}>{person.linkedinLabel}</HeroLink>
            </div>
          </div>

          <div className="reveal-item">
            <RoboticArmDemo />
          </div>
        </div>
      </RevealSection>

      {/* BUILDER / OPERATOR SPLIT */}
      <section className="border-t-[3px] border-ink bg-paper-raised/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Kicker>THE RECORD, IN TWO TRACKS</Kicker>
          <p className="mt-3 max-w-2xl text-sm text-ink-soft">
            Equal column width, equal weight. One tells you what he ships; the other tells you
            what he runs.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <RevealSection className="flex flex-col gap-6">
              <ColumnHeader
                track="builder"
                title="Builder"
                subtitle={`${builderRole.title} · ${builderRole.org}`}
              />
              <FindingCard kicker="METHOD" title="Current build" className="reveal-card">
                <ul>
                  {builderRole.bullets.map((b) => (
                    <li key={b.headline}>{b.detail}</li>
                  ))}
                </ul>
              </FindingCard>
              {builderProjects.map((p) => (
                <TiltLink key={p.slug} href={`/projects/${p.slug}`} className="reveal-card">
                  <FindingCard kicker="PROJECT" title={p.name} meta={p.stack.join(" · ")} framed={false} className="h-full">
                    <p>{p.summary}</p>
                    <p className="mt-3 flex items-center justify-between gap-3 text-xs font-bold text-rule">
                      Try the interactive demo →
                      <ProjectGlyph slug={p.slug} className="h-6 w-6 shrink-0" />
                    </p>
                  </FindingCard>
                </TiltLink>
              ))}
              <Link
                href="/projects"
                className="reveal-card group inline-flex items-center gap-2 text-sm font-semibold text-rule"
              >
                Read every project finding
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </RevealSection>

            <RevealSection className="flex flex-col gap-6">
              <ColumnHeader
                track="operator"
                title="Operator"
                subtitle={`${operatorRole.title} · ${operatorRole.org}`}
              />
              {operatorRole.bullets.map((b, i) => (
                <FindingCard
                  key={b.headline}
                  kicker={i === 0 ? "SCOPE" : i === 1 ? "CYCLE" : "INFRASTRUCTURE"}
                  title={b.headline}
                  className="reveal-card"
                >
                  <p>{b.detail}</p>
                </FindingCard>
              ))}
              <Link
                href="/leadership"
                className="reveal-card group inline-flex items-center gap-2 text-sm font-semibold text-rule"
              >
                Read the full operations record
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* READOUTS */}
      <section className="border-t-[3px] border-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Kicker chip="accent">RESULTS — MEASURED, NOT CLAIMED</Kicker>
          <p className="mt-3 max-w-2xl text-sm text-ink-soft">
            Every reading below rolls up to a number on the resume on file — nothing here is
            estimated.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="kicker mb-4">BUILD BANK</p>
              <div className="brutal-shadow grid grid-cols-1 gap-[3px] border-[3px] border-rule bg-rule p-[3px] sm:grid-cols-2">
                {builderReadings.map((r) => (
                  <Reading key={r.label} reading={r} track="builder" bordered={false} />
                ))}
              </div>
            </div>
            <div>
              <p className="kicker mb-4">OPS BANK</p>
              <div className="brutal-shadow grid grid-cols-1 gap-[3px] border-[3px] border-accent bg-accent p-[3px] sm:grid-cols-2">
                {operatorReadings.map((r) => (
                  <Reading key={r.label} reading={r} track="operator" bordered={false} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION + ACHIEVEMENTS */}
      <section className="border-t-[3px] border-ink bg-paper-raised/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <RevealSection className="grid gap-10 lg:grid-cols-2 lg:gap-16" selector=".reveal-card">
            <FindingCard kicker="EDUCATION" title={education[0].program} meta={education[0].period} className="reveal-card">
              <p>{education[0].institution}</p>
              <p className="font-semibold text-ink">{education[0].detail}</p>
              {education[0].notes.map((n) => (
                <p key={n}>{n}</p>
              ))}
            </FindingCard>
            <FindingCard kicker="ACHIEVEMENTS" title="On the record" className="reveal-card">
              <ul>
                {achievements.map((a) => (
                  <li key={a}>— {a}</li>
                ))}
              </ul>
            </FindingCard>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
