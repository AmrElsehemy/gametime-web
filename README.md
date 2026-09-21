# Game Time Web

Public web presence for **Knowlly Games**.

This repository is the **marketing / portfolio / support / legal website** intended for `knowlly.games`.

## Current stack

- Next.js 16
- React 19
- TypeScript
- App Router
- GitHub Actions
- Vercel target deployment

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run build
```

## Routes

- `/` — studio homepage
- `/games` — game catalogue
- `/games/[slug]` — individual game landing route
- `/support` — support destination
- `/privacy` — privacy baseline
- `/terms` — terms baseline
- `/press` — press/media destination

The first game is **Exactly One**, a tactile logic puzzle from Knowlly Games. Its approved App Store title is **Exactly One: Logic Puzzle**, with subtitle **One pebble. Every territory.** The shared game registry supplies its name to landing, support, privacy, and Open Graph surfaces. Public routes use `exactly-one`; previous `nine` paths permanently redirect, including game image subpaths and support query strings. The internal engineering codename remains Nine.

Store links, final privacy disclosures and launch assets are intentionally not fabricated before they exist. Name approval does not establish App Store reservation, trademark clearance, or release availability.

## Not the backend

Operational APIs, remote configuration and kill switches belong in `gametime-backend`.

A lightweight authenticated `/admin` surface may be added here later if a browser UI is useful for operating the backend, but it is not required for v1.

## Deployment

Target: Vercel. No custom deployment configuration is required for the current bootstrap.

See `docs/WEB_SCOPE.md` for product boundaries.
