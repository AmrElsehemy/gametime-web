import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Geographica",
  description: "Explore the world, one game at a time. A new collection of geography puzzles and daily challenges from Knowlly Games.",
  openGraph: {
    title: "Geographica · Knowlly Games",
    description: "Explore the world, one game at a time.",
  },
};

const ideas = [
  { icon: "🏳️", title: "Flag Finder", copy: "Recognize flags and discover the countries behind them." },
  { icon: "🗺️", title: "Country Shapes", copy: "Identify countries from nothing but their outlines." },
  { icon: "🏛️", title: "Capital Quest", copy: "Put your capital-city knowledge to the test." },
  { icon: "📍", title: "Where in the World?", copy: "Use clues to pinpoint places around the planet." },
  { icon: "🌎", title: "Map Master", copy: "Learn where countries sit and who their neighbors are." },
  { icon: "⚡", title: "Daily Geo Challenge", copy: "A bite-sized geography challenge to return to each day." },
] as const;

export default function GeographicaPage() {
  return (
    <>
      <section className="page-hero geo-hero">
        <p className="eyebrow">A Knowlly Games world · Coming soon</p>
        <div className="geo-globe" aria-hidden="true">🌍</div>
        <h1>Geographica.</h1>
        <p className="geo-headline">Explore the world, one game at a time.</p>
        <p className="lede">
          Flags, maps, capitals, countries and curious places—reimagined as playful,
          quick-to-learn geography challenges. We’re building a whole world of ways to play.
        </p>
        <div className="cta-row">
          <a className="button primary" href="#explore">Explore the collection</a>
          <Link className="button" href="/games">See our released games</Link>
        </div>
      </section>
      <section className="section" id="explore">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The collection</p>
            <h2>So many ways to see the world.</h2>
            <p>Concepts we're exploring. Individual games and App Store links will appear as they launch.</p>
          </div>
        </div>
        <div className="card-grid">
          {ideas.map((idea) => (
            <article className="card geo-card" key={idea.title}>
              <span className="geo-icon" aria-hidden="true">{idea.icon}</span>
              <div>
                <span className="tag">Planned concept</span>
                <h3>{idea.title}</h3>
                <p>{idea.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <p className="eyebrow">Made for curiosity</p>
        <h2>Small challenges. A bigger world.</h2>
        <p className="lede">
          Geographica is a growing geography universe from Knowlly Games.
          Follow the collection as new experiences arrive.
        </p>
        <Link className="button" href="/">Discover Knowlly Games</Link>
      </section>
    </>
  );
}
