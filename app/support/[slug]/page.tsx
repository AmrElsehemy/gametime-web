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

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">{name} · Support</p>
        <h1>Help with the game.</h1>
        <p className="lede">
          This is the stable support destination for {name}. Troubleshooting will stay short, practical and specific to the shipping build.
        </p>
      </section>

      <section className="section">
        <div className="card-grid">
          <article className="card">
            <span className="tag">Gameplay</span>
            <div>
              <h3>A puzzle feels stuck</h3>
              <p>
                Resetting a puzzle restores its starting state. Production levels are validated before release so normal shipped puzzles must have exactly one solution.
              </p>
            </div>
          </article>

          <article className="card">
            <span className="tag">Offline play</span>
            <div>
              <h3>No connection?</h3>
              <p>
                Core puzzles are designed to keep working offline. Optional online services should never be required to launch or complete normal bundled levels.
              </p>
            </div>
          </article>

          <article className="card">
            <span className="tag">Report a problem</span>
            <div>
              <h3>Something is wrong</h3>
              <p>
                The shipping app will expose a Report Problem flow with safe diagnostic details such as app version, puzzle version and replay reference.
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
          {game.status === "available" ? (
            <p>The production contact channel will be shown here.</p>
          ) : (
            <p>
              This title is not publicly released yet, so a public support inbox is intentionally not advertised. A verified contact channel is a release requirement before this page is used in App Store Connect.
            </p>
          )}
          <p>
            <Link href={game.privacyPath}>Privacy details</Link> ·{" "}
            <Link href={`/games/${game.slug}`}>Game page</Link>
          </p>
        </div>
      </section>
    </>
  );
}
