type HeroLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function HeroLink({ href, children }: HeroLinkProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="tabular-mono border-b-2 border-ink pb-0.5 font-bold text-ink transition-colors hover:border-accent-ink hover:text-accent-ink"
    >
      {children}
    </a>
  );
}
