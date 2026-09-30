import type { Metadata } from "next";
import Link from "next/link";
import { displayName, games } from "@/lib/games";
import { supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Support for Knowlly Games titles.",
};

export default function SupportPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Support</p>
        <h1>Need a hand?</h1>
        <p className="lede">
          Email <a href={`mailto:${supportEmail}`}>{supportEmail}</a> and a person will reply.
        </p>
      </section>

      <section className="section">
        <div className="legal-card">
          <h3>Game help</h3>
          <ul>
            {games.map((game) => (
              <li key={game.slug}>
                <Link href={game.supportPath}>{displayName(game)} support</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
