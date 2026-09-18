import Link from "next/link";

const principles = [
  ["Native first", "Built for Apple devices with tight interaction, motion, sound and haptics."],
  ["Fast to learn", "Games should make sense by playing, not by reading an instruction wall."],
  ["Worth replaying", "Small sessions, clean challenge, satisfying feedback and no dark-pattern pressure."],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">Knowlly Games</p>
          <h1>Play something good.</h1>
          <p className="lede">
            Small, polished games designed around clear ideas, tactile interaction and the feeling that one more round is worth it.
          </p>
          <div className="cta-row">
            <Link className="button primary" href="/games">See the games</Link>
            <Link className="button" href="/support">Get support</Link>
          </div>
        </div>

        <div className="game-preview" aria-label="Abstract preview of the first Knowlly Games puzzle">
          <div className="preview-grid" aria-hidden="true">
            {Array.from({ length: 16 }, (_, index) => (
              index === 6 || index === 13 ? <i key={index} /> : <span key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How we build</p>
            <h2>Simple idea. Serious finish.</h2>
          </div>
        </div>
        <div className="card-grid">
          {principles.map(([title, body]) => (
            <article className="card" key={title}>
              <span className="tag">Principle</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
