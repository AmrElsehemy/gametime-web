import type { Metadata } from "next";
import Link from "next/link";
import { displayName, games } from "@/lib/games";

export const metadata: Metadata = {
  title: "Games",
  description: "Games from Knowlly Games.",
};

export default function GamesPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Games</p>
        <h1>Small games. Built properly.</h1>
        <p className="lede">
          Our first title is in development. We will only publish store links when a game is actually available.
        </p>
      </section>

      <section className="section">
        <div className="card-grid">
          {games.map((game) => (
          <article className="card" key={game.slug}>
            <span className="tag">{game.status === "development" ? "In development" : game.status === "testflight" ? "TestFlight" : "Available"}</span>
            <div>
              <h3>{displayName(game)}</h3>
              <p>{game.shortDescription}</p>
              <Link className="button" href={`/games/${game.slug}`}>Explore the game</Link>
            </div>
          </article>
          ))}
        </div>
      </section>
    </>
  );
}
