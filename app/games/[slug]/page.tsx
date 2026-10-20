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

        {game.showPebblePreview && (
          <div className="game-preview" aria-label="Abstract preview of the territory-placement game">
            <div className="preview-grid" aria-hidden="true">
              {Array.from({ length: 16 }, (_, index) => (
                index === 1 || index === 11 ? <i key={index} /> : <span key={index} />
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The idea</p>
            <h2>{game.idea.heading}</h2>
          </div>
        </div>

        <div className="card-grid">
          {game.idea.cards.map((card) => (
            <article className="card" key={card.title}>
              <span className="tag">{card.tag}</span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="legal-card">
          <h3>Launch status</h3>
          {game.publicName ? (
            <p>{game.shortDescription}</p>
          ) : (
            <p>
              The public title and release details will appear here once approved. Store links are published only when a real listing exists.
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
