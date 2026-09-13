import Link from "next/link";

/**
 * The fixed poster-style corner tab the direction contract calls for:
 * a permanent, always-reachable index tab pinned to a viewport corner,
 * distinct from in-flow nav — like a folded index tab on a bound document.
 */
export default function ContactTab() {
  return (
    <Link
      href="/contact"
      className="brutal-press fixed bottom-5 right-5 z-50 flex items-center gap-2 border-[3px] border-ink bg-highlight px-4 py-2.5 text-ink shadow-[5px_5px_0_0_var(--ink)] sm:bottom-6 sm:right-6"
      aria-label="Contact"
    >
      <span className="text-xs font-bold uppercase tracking-[0.2em]">Contact</span>
      <span aria-hidden>→</span>
    </Link>
  );
}
