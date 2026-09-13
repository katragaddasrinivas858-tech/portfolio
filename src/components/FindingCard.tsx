type FindingCardProps = {
  kicker: string;
  title: string;
  children: React.ReactNode;
  meta?: string;
  className?: string;
  /** When false, renders without its own border/shadow/background — for use inside an already-framed wrapper like TiltLink. */
  framed?: boolean;
};

/** A brutalist "finding" panel: kicker label, claim, evidence body — same shell for every track. */
export default function FindingCard({
  kicker,
  title,
  children,
  meta,
  className = "",
  framed = true,
}: FindingCardProps) {
  return (
    <article
      className={`reveal-card p-6 ${framed ? "brutal-border bg-paper brutal-shadow-sm" : ""} ${className}`}
    >
      <p className="kicker mb-2">{kicker}</p>
      <h3 className="font-display text-lg leading-tight text-ink">{title}</h3>
      {meta && <p className="mt-1 text-xs font-bold uppercase tracking-wide text-ink-faint">{meta}</p>}
      <div className="mt-3 text-sm leading-relaxed text-ink-soft [&_p]:mb-2 [&_ul]:list-none [&_ul]:space-y-2">
        {children}
      </div>
    </article>
  );
}
