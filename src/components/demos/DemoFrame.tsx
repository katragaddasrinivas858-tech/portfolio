type DemoFrameProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

/** Shared shell for every project demo — keeps the "interactive sketch, not a screenshot" honesty label consistent. */
export default function DemoFrame({ label, children, className = "" }: DemoFrameProps) {
  return (
    <div className={`brutal-border brutal-shadow bg-paper p-5 sm:p-6 ${className}`}>
      <p className="kicker-chip kicker-chip--highlight mb-4">
        <span aria-hidden className="inline-block h-1.5 w-1.5 bg-ink" />
        INTERACTIVE SKETCH — {label}
      </p>
      {children}
      <p className="mt-4 text-xs font-bold text-ink-faint">
        Illustrative diagram of the mechanism described below — not a captured screenshot.
      </p>
    </div>
  );
}
