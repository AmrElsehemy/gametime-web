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

  if (!game) return { title: "Game" };

  const name = displayName(game);
  return {
    title: name,
    description: game.shortDescription,
    openGraph: {
      title: `${name} · Knowlly Games`,
      description: game.shortDescription,
      type: "website",
    },
  };
}

export default async function GamePage({
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
      <section className="hero">
        <div>
          <p className="eyebrow">
            {name} · {game.status === "development" ? "In development" : game.status}
          </p>
          <h1>{game.publicName ?? "Something tactile is taking shape."}</h1>
          <p className="lede">{game.premise}</p>
          <div className="cta-row">
            {game.appStoreUrl ? (
              <a className="button primary" href={game.appStoreUrl}>Download on the App Store</a>
            ) : (
              <span className="button primary" aria-disabled="true">App Store link after release</span>
            )}
            <Link className="button" href={game.supportPath}>Support</Link>
          </div>
        </div>

        <div className="game-preview" aria-label="Abstract preview of the territory-placement game">
          <div className="preview-grid" aria-hidden="true">
            {Array.from({ length: 16 }, (_, index) => (
              index === 1 || index === 11 ? <i key={index} /> : <span key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The idea</p>
            <h2>Quiet rules. Tactile decisions.</h2>
          </div>
        </div>

        <div className="card-grid">
          <article className="card">
            <span className="tag">Place</span>
            <div>
              <h3>One pebble per territory</h3>
              <p>Every colored territory needs exactly one placement.</p>
            </div>
          </article>
          <article className="card">
            <span className="tag">Separate</span>
            <div>
              <h3>Rows and columns stay unique</h3>
              <p>No two pebbles can share the same row or column.</p>
            </div>
          </article>
          <article className="card">
            <span className="tag">Space</span>
            <div>
              <h3>No touching</h3>
              <p>Neighboring pebbles need breathing room, including diagonally.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="legal-card">
          <h3>Launch status</h3>
          {game.publicName ? (
            <p>{game.shortDescription}</p>
          ) : (
            <p>
              “Nine” is still the internal codename. The public title, final icon, screenshots and App Store URL are intentionally not fabricated before the visual/name release gate is complete.
            </p>
          )}
          <p>
            <Link href={game.supportPath}>Support</Link> ·{" "}
            <Link href={game.privacyPath}>Privacy</Link> ·{" "}
            <Link href="/">Knowlly Games</Link>
          </p>
        </div>
      </section>
    </>
  );
}
