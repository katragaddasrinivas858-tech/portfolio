# K. Srinivas Karthik — Field Notes

Personal portfolio for K. Srinivas Karthik — AI & ML engineering student and Head of Operations
at Meta Developer Communities. Builder and operator, read as one record: every project ships
with a hand-built interactive demo of its real mechanism, every stat rolls up live from the
resume on file, and the two identities carry equal visual weight throughout.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and [anime.js v4](https://animejs.com)
for the motion system. Visual direction is neo-brutalist: raw borders, hard offset shadows, and a
press-on-click interaction on every card and button.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve the production build locally |
| `npm run lint` | ESLint |

## Project structure

```
src/
  app/                 Routes (App Router): home, /projects, /projects/[slug],
                        /leadership, /about, /contact, plus robots.ts, sitemap.ts,
                        opengraph-image.tsx, icon.svg
  components/          Shared UI (Nav, Footer, FindingCard, Reading, ContactTab, …)
  components/demos/    Bespoke interactive demo for each project
  content/resume.ts    Single source of truth for every fact on the site
  lib/motion.ts        Shared anime.js motion system (easing, durations, scroll reveals)
  lib/interactive.ts   Drag/pointer helpers used by the project demos
```

All factual content (education, experience, projects, skills, achievements) lives in
`src/content/resume.ts`. Update that file to change what the site says — no content is
hardcoded into page markup. Source material (resume PDF, project notes) is kept locally in
`references/`, which is gitignored since it can contain personal details not otherwise on
the public site (e.g. a phone number).

## Environment variables

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used for Open Graph tags, `sitemap.xml`, and `robots.txt` | `http://localhost:3000` |

Set `NEXT_PUBLIC_SITE_URL` to the real deployed URL (e.g. `https://your-domain.com`) in your
hosting provider's environment settings so social share cards and the sitemap resolve correctly.

## Deploying

This is a standard Next.js App Router project — it deploys with zero extra configuration to
[Vercel](https://vercel.com/new) (recommended: it's built by the Next.js team) or any Node.js
host that runs `npm run build && npm start`.

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Import it into Vercel (or your host of choice).
3. Set the `NEXT_PUBLIC_SITE_URL` environment variable to your production domain.
4. Deploy.

No database, API keys, or other external services are required — the site is fully static
content plus client-side interactivity.

## Design system

See [`DESIGN.md`](./DESIGN.md) for the full neo-brutalist design system (palette, type ramp,
component patterns, motion constants, and the do/don't rules that keep new work consistent).
