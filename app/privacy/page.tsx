import type { Metadata } from "next";
import Link from "next/link";
import { displayName, games } from "@/lib/games";
import { supportEmail } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy should be understandable.</h1>
        <p className="lede">
          Knowlly Games makes games that work without an account and without an internet connection. Each game has its own privacy policy describing exactly what it does.
        </p>
      </section>
      <section className="legal-card">
        <h3>Game privacy policies</h3>
        <ul>
          {games.map((game) => (
            <li key={game.slug}>
              <Link href={game.privacyPath}>{displayName(game)}</Link>
            </li>
          ))}
        </ul>
        <h2>This website</h2>
        <p>
          knowlly.games uses Vercel Web Analytics to count page views. It does not use cookies and does not follow you to other sites.
        </p>
        <h2>Contact</h2>
        <p>
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </p>
      </section>
    </>
  );
}
