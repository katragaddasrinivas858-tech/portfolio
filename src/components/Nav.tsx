"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { person } from "@/content/resume";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="kicker shrink-0 whitespace-nowrap">
            <span className="sm:hidden">K.S.K.</span>
            <span className="hidden sm:inline">{person.name}</span>
          </Link>

          <nav className="hidden items-center gap-2 sm:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-2 px-3 py-1 text-sm font-bold uppercase tracking-wide transition-colors ${
                    active
                      ? "border-ink bg-ink text-paper"
                      : "border-transparent text-ink-soft hover:border-ink hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <nav className="mt-3 flex gap-2 overflow-x-auto text-xs sm:hidden">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`shrink-0 whitespace-nowrap border-2 px-2 py-1 font-bold uppercase ${
                  active ? "border-ink bg-ink text-paper" : "border-transparent text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
