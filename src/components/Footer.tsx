import { person } from "@/content/resume";

export default function Footer() {
  return (
    <footer className="border-t-[4px] border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="kicker-chip kicker-chip--highlight mb-4">END OF FILE</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-sm text-paper/70">
            Builder and operator, read as one record. Every figure on this site traces to the
            resume on file.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
            <a href={`mailto:${person.email}`} className="underline decoration-2 underline-offset-4 hover:text-highlight">
              {person.email}
            </a>
            <a href={person.github} target="_blank" rel="noreferrer" className="underline decoration-2 underline-offset-4 hover:text-highlight">
              {person.githubLabel}
            </a>
            <a href={person.linkedin} target="_blank" rel="noreferrer" className="underline decoration-2 underline-offset-4 hover:text-highlight">
              {person.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
