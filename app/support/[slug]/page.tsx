import type { Metadata } from "next";
import { supportEmail, supportMailto } from "@/lib/support";
import Link from "next/link";
import { notFound } from "next/navigation";
import { displayName, getGame } from "@/lib/games";
import { FlagTrekSupport } from "./FlagTrekSupport";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return { title: "Support" };

  return {
    title: `${displayName(game)} Support`,
    description: `Help and support for ${displayName(game)} from Knowlly Games.`,
  };
}

export default async function GameSupportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  const name = displayName(game);

  if (game.slug === "geographica-flag-trek") return <FlagTrekSupport game={game} name={name} />;

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">{name} · Support</p>
        <h1>Help with the game.</h1>
        <p className="lede">
          Get help with {name}, report a puzzle problem, or ask about your data.
        </p>
      </section>

      <section className="section">
        <div className="card-grid">
          <article className="card">
            <span className="tag">Gameplay</span>
            <div>
              <h3>A puzzle feels stuck</h3>
              <p>
                Use Reset to return the current puzzle to its starting state, or Undo to reverse a move. Each puzzle has one solution.
              </p>
            </div>
          </article>

          <article className="card">
            <span className="tag">Offline play</span>
            <div>
              <h3>No connection?</h3>
              <p>
                You can play bundled puzzles offline. Game Center needs an internet connection for achievements and daily leaderboard submissions, but is not required to play.
              </p>
            </div>
          </article>

          <article className="card">
            <span className="tag">Report a problem</span>
            <div>
              <h3>Something is wrong</h3>
              <p>
                Open Settings → Report a Problem to return to this page, then email us below. The app does not automatically upload diagnostics or attach a replay.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="legal-card">
          <h3>Before contacting support</h3>
          <p>
            Include the app version, iOS version and puzzle number when available. Do not send passwords, payment-card details or other sensitive information.
          </p>
          <h2>Contact</h2>
          <p>
            Email <a href={supportMailto}>{supportEmail}</a> with the subject
            “Exactly One Support”. This is Knowlly’s existing public contact inbox.
            You can also use it for privacy and deletion requests.
          </p>
          <h2>Settings and saved progress</h2>
          <p>
            Settings includes sound and haptic controls. Reset Gameplay Data clears
            local puzzle, daily, streak and tutorial progress; it keeps sound and
            haptic preferences and does not delete Game Center achievements.
            This version has no paid entitlements. Restore Purchases performs an
            Apple account synchronization check.
          </p>
          <p>
            <Link href={game.privacyPath}>Privacy details</Link> ·{" "}
            <Link href={`/games/${game.slug}`}>Game page</Link>
          </p>
        </div>
      </section>
    </>
  );
}
