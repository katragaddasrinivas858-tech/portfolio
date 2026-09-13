import GlyphMark from "./GlyphMark";
import RuleDivider from "./RuleDivider";

type ColumnHeaderProps = {
  track: "builder" | "operator";
  title: string;
  subtitle: string;
};

export default function ColumnHeader({ track, title, subtitle }: ColumnHeaderProps) {
  const trackColor = track === "builder" ? "bg-rule" : "bg-accent";
  const glyphColor = track === "builder" ? "text-paper" : "text-ink";

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className={`brutal-border brutal-shadow-sm flex h-12 w-12 shrink-0 items-center justify-center ${trackColor}`}>
          <GlyphMark kind={track} className={`h-6 w-6 ${glyphColor}`} />
        </div>
        <h2 className="font-display text-3xl leading-none tracking-tight text-ink sm:text-4xl">{title}</h2>
      </div>
      <p className="mt-3 text-sm font-bold text-ink-soft">{subtitle}</p>
      <RuleDivider weight="rule" color={track === "builder" ? "rule" : "accent"} className="mt-4" />
    </div>
  );
}
