import type { Metadata } from "next";
import Kicker from "@/components/Kicker";
import RuleDivider from "@/components/RuleDivider";
import RevealSection from "@/components/RevealSection";
import GlyphMark from "@/components/GlyphMark";
import { person } from "@/content/resume";

export const metadata: Metadata = {
  title: "Contact — K. Srinivas Karthik",
  description: "Reach out by email, GitHub, or LinkedIn.",
};

const channels = [
  {
    label: "Email",
    value: person.email,
    href: `mailto:${person.email}`,
    note: "Fastest way to reach me — for roles, admissions, or collaboration.",
  },
  {
    label: "GitHub",
    value: person.githubLabel,
    href: person.github,
    note: "Source and project history.",
  },
  {
    label: "LinkedIn",
    value: person.linkedinLabel,
    href: person.linkedin,
    note: "Professional record and updates.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <RevealSection selector=".reveal-item">
        <Kicker className="reveal-item">CITATION</Kicker>
        <h1 className="reveal-item mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Get in touch
        </h1>
        <p className="reveal-item mt-4 max-w-xl text-ink-soft">
          Recruiter, committee, or collaborator — one channel reaches me directly, listed below
          exactly as on file.
        </p>
        <RuleDivider weight="rule" className="reveal-item mt-8" />
      </RevealSection>

      <RevealSection className="mt-10 grid gap-4" selector=".reveal-card">
        {channels.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noreferrer" : undefined}
            className="reveal-card brutal-press brutal-border brutal-shadow group flex items-center justify-between gap-4 bg-paper p-6"
          >
            <div className="flex items-center gap-4">
              <div className={`brutal-border flex h-11 w-11 shrink-0 items-center justify-center ${i % 2 === 0 ? "bg-rule" : "bg-accent"}`}>
                <GlyphMark kind={i % 2 === 0 ? "builder" : "operator"} className={`h-6 w-6 ${i % 2 === 0 ? "text-paper" : "text-ink"}`} />
              </div>
              <div>
                <p className="kicker mb-1">{c.label}</p>
                <p className="tabular-mono text-lg font-bold text-ink">{c.value}</p>
                <p className="mt-1 text-xs font-bold text-ink-faint">{c.note}</p>
              </div>
            </div>
            <span className="text-sm font-bold text-ink transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        ))}
      </RevealSection>
    </div>
  );
}
