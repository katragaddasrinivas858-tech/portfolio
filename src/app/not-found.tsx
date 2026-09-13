import Link from "next/link";
import Kicker from "@/components/Kicker";
import RuleDivider from "@/components/RuleDivider";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
      <Kicker chip="accent">ERRATUM</Kicker>
      <h1 className="mt-4 font-display text-5xl tracking-tight text-ink">No finding here</h1>
      <p className="mt-4 text-ink-soft">
        This page isn&rsquo;t on the record. It may have moved, or the citation was mistyped.
      </p>
      <RuleDivider weight="rule" className="mx-auto mt-8 max-w-xs" />
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-rule"
      >
        ← Back to the record
      </Link>
    </div>
  );
}
