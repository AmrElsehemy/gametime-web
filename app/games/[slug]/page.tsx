import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { displayName, getGame, statusLabel } from "@/lib/games";

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
            {name} · {statusLabel(game.status)}
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

        <div className="game-preview" aria-label={`Abstract preview of ${name}`}>
          {game.preview === "bottles" ? (
            <div className="preview-bottles" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
          ) : (
            <div className="preview-grid" aria-hidden="true">
              {Array.from({ length: 16 }, (_, index) => (
                index === 1 || index === 11 ? <i key={index} /> : <span key={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The idea</p>
            <h2>{game.rulesHeading}</h2>
          </div>
        </div>

        <div className="card-grid">
          {game.rules.map((rule) => (
            <article className="card" key={rule.tag}>
              <span className="tag">{rule.tag}</span>
              <div>
                <h3>{rule.title}</h3>
                <p>{rule.body}</p>
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
