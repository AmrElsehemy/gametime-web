import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { displayName, getGame } from "@/lib/games";
import { supportEmail, supportMailto } from "@/lib/site";

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
  const problemReport = supportMailto(
    `${name}: problem report`,
    [
      "What happened:",
      "",
      "What you expected:",
      "",
      ...game.problemReportFields,
      "App version and build (Settings → About):",
      "iPhone model and iOS version:",
    ].join("\n"),
  );

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">{name} · Support</p>
        <h1>Help with the game.</h1>
        <p className="lede">
          Questions, bugs or feedback: email us and a person will reply.
        </p>
        <div className="cta-row">
          <a className="button primary" href={supportMailto(`${name}: support`)}>
            Email {supportEmail}
          </a>
          <a className="button" href={problemReport}>
            Report a problem
          </a>
        </div>
      </section>

      <section className="section">
        <div className="card-grid">
          {game.supportCards.map((card) => (
            <article className="card" key={card.tag}>
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
          <h3>Reporting a problem</h3>
          <p>
            Tell us what happened, where in the game it happened, and the app version and build from Settings → About. Please don&rsquo;t send passwords or payment details.
          </p>
          <h2>Purchases</h2>
          <p>{name} has no ads and no in-app purchases, so there is nothing to buy or restore.</p>
          <h2>Contact</h2>
          <p>
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
          </p>
          <p>
            <Link href={game.privacyPath}>Privacy policy</Link> ·{" "}
            <Link href={`/games/${game.slug}`}>Game page</Link>
          </p>
        </div>
      </section>
    </>
  );
}
