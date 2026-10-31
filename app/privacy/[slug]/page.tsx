import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { displayName, getGame } from "@/lib/games";
import { supportEmail } from "@/lib/site";
import { FlagTrekPrivacy } from "./FlagTrekPrivacy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return { title: "Privacy" };

  return {
    title: `${displayName(game)} Privacy Policy`,
    description: `Privacy policy for ${displayName(game)} from Knowlly Games.`,
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

  // Flag Trek keeps its own, more detailed policy.
  if (game.slug === "geographica-flag-trek") return <FlagTrekPrivacy game={game} name={name} />;

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">{name} · Privacy Policy</p>
        {game.usageAnalytics ? (
          <>
            <h1>No account. No tracking. Anonymous stats only.</h1>
            <p className="lede">
              {name} is an offline puzzle game with no account, no ads, no tracking and no in-app purchases. It can send us anonymous gameplay statistics, and you can turn that off at any time in Settings.
            </p>
          </>
        ) : (
          <>
            <h1>We don&rsquo;t collect your data.</h1>
            <p className="lede">
              {name} is an offline puzzle game. It has no account, no ads, no tracking and no in-app purchases, and it does not send your data to Knowlly Games.
            </p>
          </>
        )}
      </section>

      <section className="legal-card">
        <p>Effective {game.privacyEffective}. This policy covers the {name} iOS app and this website.</p>

        <h2>Data stored on your device</h2>
        <p>
          The game saves {game.storedData}. This data stays on your device. It is not sent to us or to anyone else.
        </p>
        <p>
          You can delete it at any time by deleting the app.
        </p>

        {game.gameCenterData && (
          <>
            <h2>Game Center (optional)</h2>
            <p>
              If you sign in to Game Center, the game sends {game.gameCenterData} to Apple&rsquo;s Game Center service. Apple handles that data under its own privacy policy, and your Game Center settings control who can see your profile and leaderboard entries. The game works fully without Game Center.
            </p>
          </>
        )}

        {game.usageAnalytics ? (
          <>
            <h2>Anonymous usage statistics</h2>
            <p>
              To learn which puzzles players finish, find too hard or give up on, the game sends us anonymous gameplay events, such as a level being started, finished or reset, how long it took and whether a hint was used, together with the app version, the device type (iPhone or iPad), the iOS version and the app language.
            </p>
            <p>
              These events are tied only to a random identifier created when you first open the game. It is not your name, email, Apple ID, Game Center identity, advertising identifier or location, and it disappears when you delete the app. We do not use this data to identify you, build a profile of you or show you ads, and we do not sell it.
            </p>
            <p>
              Sharing is on by default. Turn off <strong>Share anonymous usage data</strong> in the game&rsquo;s Settings and it stops immediately. Events are processed for us by PostHog, our analytics provider, on servers in the European Union, without storing your IP address or a location derived from it.
            </p>

            <h2>Advertising and tracking</h2>
            <p>
              {name} shows no ads and does not track you across other companies&rsquo; apps or websites. It does not ask for tracking permission because it does not track.
            </p>
          </>
        ) : (
          <>
            <h2>Advertising, tracking and analytics</h2>
            <p>
              {name} shows no ads, does not track you across other apps or websites, and does not use third-party analytics. It does not ask for tracking permission because it does not track.
            </p>
          </>
        )}

        <h2>Purchases</h2>
        <p>{name} has no in-app purchases.</p>

        <h2>If you contact us</h2>
        <p>
          If you email us, we receive your email address and whatever you choose to include. We use it only to answer you, and we do not share it or add you to any mailing list.
        </p>

        <h2>This website</h2>
        <p>
          knowlly.games uses Vercel Web Analytics to count page views. It does not use cookies and does not follow you to other sites.
        </p>

        <h2>Children</h2>
        <p>{name} does not collect personal information from anyone, including children.</p>

        <h2>Changes</h2>
        <p>
          If this policy changes, for example because a future version adds a new feature that uses data, we will update this page and its effective date before that version is released.
        </p>

        <h2>Contact</h2>
        <p>
          Knowlly Games · <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </p>

        <p>
          <Link href={game.supportPath}>Support</Link> ·{" "}
          <Link href={`/games/${game.slug}`}>Game page</Link>
        </p>
      </section>
    </>
  );
}
