type GlyphMarkProps = {
  kind: "builder" | "operator";
  className?: string;
};

/**
 * The site's only two decorative marks — drafting-style glyphs reused
 * everywhere a track needs identifying, instead of arbitrary icon-set icons.
 * Builder = a circled cross (assembly / construction mark).
 * Operator = a bracketed arrow (flow / process mark).
 */
export default function GlyphMark({ kind, className = "" }: GlyphMarkProps) {
  if (kind === "builder") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" />
        <path d="M12 6.5v11M6.5 12h11" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M6 4v6a2 2 0 0 0 2 2h8M12.5 8.5l3.5 3.5-3.5 3.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path d="M6 14v6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
    </svg>
  );
}
