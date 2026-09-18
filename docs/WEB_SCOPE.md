# Knowlly Games Web Scope

## Purpose
`knowlly.games` is the public marketing, portfolio, support and legal presence for Knowlly Games.

## Initial routes
- `/` — studio homepage
- `/games` — portfolio
- `/games/[slug]` — individual title page
- `/support` — support hub
- `/privacy` — privacy
- `/terms` — terms
- `/press` — media/brand assets

## Per-game page content
- gameplay hero/clip
- one-sentence premise
- screenshots
- App Store CTA
- QR code on desktop
- support link
- privacy link where game-specific disclosure is needed

## Growth role
The website is also the landing surface for:
- social bios
- paid campaigns
- press/influencers
- cross-game discovery
- future universal/deep links

## Not this repo
Remote config, feature flags, kill switches and operational APIs belong in `gametime-backend`.

A lightweight authenticated admin UI may be added later if useful, but it is not v1 scope.

## Deployment
Target stack: Next.js on Vercel.
