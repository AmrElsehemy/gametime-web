import type { Metadata } from "next";
import { notFound } from "next/navigation";

const knownDevelopmentSlugs = new Set(["nine"]);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!knownDevelopmentSlugs.has(slug)) {
    return { title: "Game" };
  }

  return {
    title: "Game #001",
    description: "The first Knowlly Games title is in development.",
  };
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!knownDevelopmentSlugs.has(slug)) notFound();

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Game #001 · In development</p>
        <h1>Something tactile is taking shape.</h1>
        <p className="lede">
          This route is ready for the final game identity, screenshots, App Store link and support details once they are real. Nothing here pretends the game has launched.
        </p>
      </section>

      <section className="section">
        <div className="empty-state">
          Public title, launch artwork and store availability will appear here after the release gate is passed.
        </div>
      </section>
    </>
  );
}
