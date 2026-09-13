import type { Metadata } from "next";
import Kicker from "@/components/Kicker";
import RuleDivider from "@/components/RuleDivider";
import GlyphMark from "@/components/GlyphMark";
import FindingCard from "@/components/FindingCard";
import RevealSection from "@/components/RevealSection";
import Reading from "@/components/Reading";
import { roles, operatorReadings } from "@/content/resume";

export const metadata: Metadata = {
  title: "Leadership — K. Srinivas Karthik",
  description:
    "Head of Operations for Meta Developer Communities — recruitment, automation, and infrastructure for a seven-domain student tech community.",
};

const mdc = roles.find((r) => r.slug === "mdc")!;
const inframiq = roles.find((r) => r.slug === "inframiq")!;

const domains = [
  "Competitive Programming",
  "WebArcs",
  "DataVerse",
  "Design",
  "Photography",
  "Content",
  "PR",
];

export default function LeadershipPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <RevealSection selector=".reveal-item">
        <div className="reveal-item flex items-center gap-3">
          <GlyphMark kind="operator" className="h-7 w-7 text-accent-ink" />
          <Kicker>OPERATOR TRACK — FULL RECORD</Kicker>
        </div>
        <h1 className="reveal-item mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Running a seven-domain community, and a product&rsquo;s launch runway
        </h1>
        <p className="reveal-item mt-4 max-w-2xl text-ink-soft">
          {mdc.title} at {mdc.org} — {mdc.period}.
        </p>
        <RuleDivider weight="rule" className="reveal-item mt-8" />
      </RevealSection>

      <RevealSection className="mt-10 grid gap-4" selector=".reveal-card">
        <p className="kicker mb-1">SCOPE — SEVEN DOMAINS</p>
        <div className="reveal-card flex flex-wrap gap-2">
          {domains.map((d) => (
            <span key={d} className="tabular-mono border-2 border-ink bg-paper-raised px-3 py-1 text-xs font-bold text-ink-soft">
              {d}
            </span>
          ))}
        </div>

        {mdc.bullets.map((bullet, i) => (
          <FindingCard
            key={bullet}
            kicker={["SCOPE", "RECRUITMENT", "AUTOMATION", "INFRASTRUCTURE", "CONTENT & OPS", "WORKSHOP SUPPORT"][i] ?? "OPS"}
            title={bullet.split(",")[0].split(".")[0]}
            className="reveal-card"
          >
            <p>{bullet}</p>
          </FindingCard>
        ))}
      </RevealSection>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {operatorReadings.map((r) => (
          <Reading key={r.label} reading={r} track="operator" />
        ))}
      </div>

      <RevealSection className="mt-16 border-t-[3px] border-ink pt-10" selector=".reveal-card">
        <p className="kicker mb-4">ALSO ON THE RECORD</p>
        <FindingCard kicker="INTERNSHIP" title={inframiq.title} meta={`${inframiq.org} · ${inframiq.period}`} className="reveal-card">
          <ul>
            {inframiq.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </FindingCard>
        <FindingCard kicker="UNIVERSITY" title="Class Representative" meta="CSE (AI & ML) batch, GITAM University" className="reveal-card mt-4">
          <p>Elected to represent the batch, a standing responsibility alongside coursework and the MDC and Inframiq roles above.</p>
        </FindingCard>
      </RevealSection>
    </div>
  );
}
