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

The first game's public identity, store links, final privacy disclosures and launch assets are intentionally not fabricated before they exist.

## Not the backend

Operational APIs, remote configuration and kill switches belong in `gametime-backend`.

A lightweight authenticated `/admin` surface may be added here later if a browser UI is useful for operating the backend, but it is not required for v1.

## Deployment

Target: Vercel. No custom deployment configuration is required for the current bootstrap.

See `docs/WEB_SCOPE.md` for product boundaries.
