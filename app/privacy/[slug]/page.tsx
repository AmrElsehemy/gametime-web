import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { displayName, getGame } from "@/lib/games";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return { title: "Privacy" };

  return {
    title: `${displayName(game)} Privacy`,
    description: `Privacy information for ${displayName(game)} from Knowlly Games.`,
  };
}

export default async function GamePrivacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  const name = displayName(game);

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">{name} · Privacy</p>
        <h1>Privacy, before release.</h1>
        <p className="lede">
          This page tracks the game-specific privacy surface while {name} is still in development. Final App Store disclosures will be frozen against the exact production SDK set before submission.
        </p>
      </section>

      <section className="legal-card">
        <h3>Current architecture</h3>
        <p>
          Core gameplay is designed to work offline and without a proprietary Knowlly Games account. Puzzle progress is local-first. The game does not require a Game Time backend connection to launch or complete normal bundled puzzles.
        </p>

        <h2>Optional platform services</h2>
        <p>
          Game Center, rewarded advertising, analytics, purchases and diagnostics are separate capabilities. They must be disclosed here and in App Store privacy metadata only when the production implementation is actually enabled.
        </p>

        <h2>Advertising</h2>
        <p>
          The current release plan allows optional rewarded advertising after onboarding, but the production advertising integration is not yet frozen. This page must be updated with the final provider, data practices and consent behavior before public release.
        </p>

        <h2>Diagnostics</h2>
        <p>
          The planned Report Problem flow is designed to share only the technical context needed to reproduce an issue, such as app version, puzzle version and a replay reference. Personal content should not be attached unless the player explicitly provides it.
        </p>

        <h2>Your choices</h2>
        <p>
          Core play must not depend on advertising personalization or tracking permission. Sound, haptics and local-data controls are part of the game settings roadmap.
        </p>

        <h2>Release gate</h2>
        <p>
          This is a pre-release transparency page, not the final legal notice. App Store submission is blocked until this text matches the shipping binary and production SDK privacy manifests.
        </p>

        <p>
          <Link href={game.supportPath}>Support</Link> ·{" "}
          <Link href={`/games/${game.slug}`}>Game page</Link>
        </p>
      </section>
    </>
  );
}
