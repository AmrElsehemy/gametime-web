import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { displayName, getGame } from "@/lib/games";
import { supportEmail } from "@/lib/site";

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

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">{name} · Privacy Policy</p>
        <h1>We don&rsquo;t collect your data.</h1>
        <p className="lede">
          {name} is an offline puzzle game. It has no account, no ads, no tracking and no in-app purchases, and it does not send your data to Knowlly Games.
        </p>
      </section>

      <section className="legal-card">
        <p>Effective 30 September 2026. This policy covers the {name} iOS app and this website.</p>

        <h2>Data stored on your device</h2>
        <p>
          The game saves your puzzle progress, your current puzzle, your daily streak, whether you have finished the introduction, and your sound and haptics settings. This data stays on your device. It is not sent to us or to anyone else.
        </p>
        <p>
          You can delete it at any time with Settings → Reset Gameplay Data, or by deleting the app.
        </p>

        <h2>Game Center (optional)</h2>
        <p>
          If you sign in to Game Center, achievements and daily-puzzle times are sent to Apple&rsquo;s Game Center service. Apple handles that data under its own privacy policy, and your Game Center settings control who can see your profile and leaderboard entries. The game works fully without Game Center.
        </p>

        <h2>Advertising, tracking and analytics</h2>
        <p>
          {name} shows no ads, does not track you across other apps or websites, and does not use third-party analytics. It does not ask for tracking permission because it does not track.
        </p>

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
