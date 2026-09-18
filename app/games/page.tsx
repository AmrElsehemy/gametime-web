import type { Metadata } from "next";
import Link from "next/link";

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
          <article className="card">
            <span className="tag">Game #001 · In development</span>
            <div>
              <h3>Internal codename: Nine</h3>
              <p>A tactile territory-placement puzzle. Public name and App Store listing are not announced yet.</p>
              <Link className="button" href="/games/nine">Development page</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
