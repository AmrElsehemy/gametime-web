# Exactly One Web Release Checklist

The web implementation can progress before every launch asset exists, but the public submission surfaces are not considered finished until each external dependency below is real and verified.

## Engineering complete in this workstream

- centralized game metadata/slug registry
- game landing route
- game-specific support route
- game-specific privacy route
- conditional App Store CTA (renders only when a real URL exists)
- generated Open Graph image
- internal cross-links between game/support/privacy/studio
- responsive shared shell from the web bootstrap

## Deliberately due before App Store submission

- [x] apply approved public name: **Exactly One** (App Store: **Exactly One: Logic Puzzle**)
- [x] replace development-only identity/codename copy
- [x] use `/games/exactly-one`, `/support/exactly-one`, and `/privacy/exactly-one` as public routes; permanently redirect the previous `nine` paths so existing app links remain valid
- [ ] add final app icon / hero treatment
- [ ] add real gameplay screenshots
- [ ] add launch gameplay video/preview if used
- [ ] insert verified App Store URL only after the listing exists
- [ ] publish a verified public support contact channel
- [ ] freeze final production SDK set on iOS
- [ ] make privacy copy match the shipping binary, SDK privacy manifests and App Store privacy answers
- [ ] review/finalize legal terms where required
- [ ] deploy to Vercel production/staging
- [ ] attach/verify `knowlly.games` only after domain ownership/DNS are confirmed
- [ ] verify all URLs from a phone and desktop
- [ ] use the final support/privacy URLs in App Store Connect

None of these items should be marked complete from assumptions. The site must never publish a fake App Store link, fake support address, or privacy claim for an SDK that has not actually shipped.
