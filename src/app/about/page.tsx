import type { Metadata } from "next";
import Kicker from "@/components/Kicker";
import RuleDivider from "@/components/RuleDivider";
import FindingCard from "@/components/FindingCard";
import RevealSection from "@/components/RevealSection";
import { education, achievements, courses, areasOfInterest, skills, person } from "@/content/resume";

export const metadata: Metadata = {
  title: "About — K. Srinivas Karthik",
  description: "Education, achievements, and the full technical skill set behind the record.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <RevealSection selector=".reveal-item">
        <Kicker className="reveal-item">THE FULL FILE</Kicker>
        <h1 className="reveal-item mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          About {person.name}
        </h1>
        <p className="reveal-item mt-4 max-w-2xl text-ink-soft">
          {person.role}, based in {person.location}. Areas of interest:{" "}
          {areasOfInterest.join(" · ")}.
        </p>
        <RuleDivider weight="rule" className="reveal-item mt-8" />
      </RevealSection>

      <RevealSection className="mt-10 grid gap-4" selector=".reveal-card">
        <p className="kicker mb-1">EDUCATION</p>
        {education.map((e) => (
          <FindingCard key={e.program} kicker="RECORD" title={e.program} meta={`${e.institution ? e.institution + " · " : ""}${e.period}`} className="reveal-card">
            <p className="font-semibold text-ink">{e.detail}</p>
            {e.notes.map((n) => (
              <p key={n}>{n}</p>
            ))}
          </FindingCard>
        ))}
      </RevealSection>

      <RevealSection className="mt-16" selector=".reveal-card">
        <p className="kicker mb-4">ACHIEVEMENTS</p>
        <FindingCard kicker="ON THE RECORD" title="Recognitions" className="reveal-card">
          <ul>
            {achievements.map((a) => (
              <li key={a}>— {a}</li>
            ))}
          </ul>
        </FindingCard>
      </RevealSection>

      <RevealSection className="mt-16" selector=".reveal-card">
        <p className="kicker mb-4">COURSES &amp; TRAINING</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {courses.map((c) => (
            <FindingCard key={c.name} kicker={c.period} title={c.name} meta={c.org} className="reveal-card">
              <p>{c.org}</p>
            </FindingCard>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="mt-16 border-t-[3px] border-ink pt-10" selector=".reveal-card">
        <p className="kicker mb-4">TECHNICAL SKILLS</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.group} className="reveal-card brutal-border brutal-shadow-sm bg-paper p-5">
              <p className="text-sm font-bold text-rule">{group.group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tabular-mono border-2 border-ink px-2 py-1 text-xs font-bold text-ink-soft">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RevealSection>
    </div>
  );
}
