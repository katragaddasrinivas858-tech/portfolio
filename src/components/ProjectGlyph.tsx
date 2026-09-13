type ProjectGlyphProps = {
  slug: string;
  className?: string;
};

/** A small static rest-state icon per project — the same visual language as that project's full interactive demo. */
export default function ProjectGlyph({ slug, className = "h-8 w-8" }: ProjectGlyphProps) {
  switch (slug) {
    case "vision-guided-robotic-arm":
      return (
        <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
          <circle cx={20} cy={30} r={3} fill="var(--ink)" />
          <line x1={20} y1={30} x2={11} y2={12} stroke="var(--rule)" strokeWidth={3.4} strokeLinecap="square" />
          <line x1={20} y1={30} x2={29} y2={12} stroke="var(--rule)" strokeWidth={3.4} strokeLinecap="square" />
        </svg>
      );
    case "iot-smart-humidifier":
      return (
        <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
          <rect x={12} y={18} width={16} height={18} stroke="var(--rule)" strokeWidth={3} />
          <rect x={16} y={11} width={8} height={5} fill="var(--ink)" />
          <path d="M16 9c1.5-3 3.5-3 5 0M20 5c1.5-3 3.5-3 5 0" stroke="var(--accent)" strokeWidth={2.6} strokeLinecap="square" />
        </svg>
      );
    case "codelearn":
      return (
        <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
          <path d="M14 14l-7 6 7 6M26 14l7 6-7 6M23 11l-6 18" stroke="var(--rule)" strokeWidth={3.2} strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
      );
    case "physics-lab-simulator":
      return (
        <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
          <line x1={8} y1={9} x2={32} y2={9} stroke="var(--ink)" strokeWidth={2.4} />
          <line x1={20} y1={9} x2={20} y2={26} stroke="var(--ink)" strokeWidth={2.4} />
          <circle cx={20} cy={30} r={6} fill="var(--rule)" />
          <circle cx={20} cy={9} r={2.5} fill="var(--ink)" />
        </svg>
      );
    default:
      return null;
  }
}
