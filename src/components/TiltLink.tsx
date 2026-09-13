import Link from "next/link";

type TiltLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/** A brutalist pressable card-link: thick border, hard shadow, lifts on hover, presses flat on click. */
export default function TiltLink({ href, children, className = "" }: TiltLinkProps) {
  return (
    <Link
      href={href}
      className={`brutal-press brutal-border brutal-shadow block bg-paper ${className}`}
    >
      {children}
    </Link>
  );
}
