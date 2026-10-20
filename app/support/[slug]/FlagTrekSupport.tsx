import Link from "next/link";
import { supportEmail, supportMailtoFor } from "@/lib/support";
import type { GameRecord } from "@/lib/games";

export function FlagTrekSupport({ game, name }: { game: GameRecord; name: string }) {
  const mailto = supportMailtoFor(name);
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">{name} · Support</p>
        <h1>Help with the game.</h1>
        <p className="lede">
          Get help with {name}, report a problem, or ask about your data.
        </p>
      </section>

      <section className="section">
        <div className="card-grid">
          <article className="card">
            <span className="tag">Fuel</span>
            <div>
              <h3>I ran out of fuel</h3>
              <p>
                A wrong answer costs fuel. When it runs out the round ends, and you can
                try the stop again.
              </p>
            </div>
          </article>

          <article className="card">
            <span className="tag">Daily Challenge</span>
            <div>
              <h3>How the daily works</h3>
              <p>
                Everyone gets the same ten flags each UTC day. Only your first attempt
                that day is posted to the leaderboard; practice rounds never are.
              </p>
            </div>
          </article>

          <article className="card">
            <span className="tag">Offline play</span>
            <div>
              <h3>No connection?</h3>
              <p>
                The whole game works offline. Game Center needs an internet connection
                for the leaderboard, but is not required to play.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="legal-card">
          <h3>Before contacting support</h3>
          <p>
            Include the app version, your iOS version and, if it is about a flag or
            answer, the flag’s country. Do not send passwords, payment-card details or
            other sensitive information.
          </p>
          <h2>Contact</h2>
          <p>
            Email <a href={mailto}>{supportEmail}</a> with the subject “{name} Support”.
            This is Knowlly’s public contact inbox. You can also use it for privacy and
            deletion requests.
          </p>
          <h2>Saved progress</h2>
          <p>
            Progress is stored on your device only. Deleting the app removes it, and it
            does not delete Game Center records, which are managed through Apple.
          </p>
          <p>
            <Link href={game.privacyPath}>Privacy details</Link> ·{" "}
            <Link href={`/games/${game.slug}`}>Game page</Link>
          </p>
        </div>
      </section>
    </>
  );
}
