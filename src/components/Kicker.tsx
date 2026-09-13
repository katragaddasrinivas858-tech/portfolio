type KickerProps = {
  children: React.ReactNode;
  accent?: boolean;
  chip?: "ink" | "rule" | "accent" | "highlight";
  className?: string;
};

export default function Kicker({ children, accent, chip, className = "" }: KickerProps) {
  if (chip) {
    const chipClass =
      chip === "ink"
        ? ""
        : chip === "rule"
          ? "kicker-chip--rule"
          : chip === "accent"
            ? "kicker-chip--accent"
            : "kicker-chip--highlight";
    return <p className={`kicker-chip ${chipClass} ${className}`}>{children}</p>;
  }

  return <p className={`kicker ${accent ? "kicker--accent" : ""} ${className}`}>{children}</p>;
}
