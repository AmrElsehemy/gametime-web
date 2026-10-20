import type { Metadata } from "next";
import { supportEmail, supportMailto } from "@/lib/support";
import Link from "next/link";
import { notFound } from "next/navigation";
import { displayName, getGame } from "@/lib/games";
import { FlagTrekPrivacy } from "./FlagTrekPrivacy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return { title: "Privacy" };

  return {
    title: `${displayName(game)} Privacy`,
    description: `Privacy information for ${displayName(game)} from Knowlly Games.`,
  };
}

export default async function GamePrivacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  const name = displayName(game);

  if (game.slug === "geographica-flag-trek") return <FlagTrekPrivacy game={game} name={name} />;

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">{name} · Privacy</p>
        <h1>Your privacy.</h1>
        <p className="lede">
          This policy explains how Knowlly Games handles information in {name}.
          Effective September 24, 2026.
        </p>
      </section>

      <section className="legal-card">
        <h2>Playing and saving on your device</h2>
        <p>
          No Knowlly account is required. Bundled puzzles work offline. Puzzle
          progress, the active puzzle, daily and streak progress, tutorial completion,
          sound and haptic preferences, and a first-open flag are stored on your
          device. The app does not upload these records to a Knowlly server.
          Device backups may be managed separately by your Apple settings.
        </p>
        <h2>Game Center</h2>
        <p>
          The app requests Game Center authentication when normal play starts.
          You can decline and continue playing. When connected, it sends completed
          achievements and daily puzzle completion times to Apple Game Center,
          associated with your Game Center player, and retrieves completed achievements.
          Scores and your Game Center profile may be visible according to your
          Apple settings. We do not copy this information to a separate backend.
          Manage Game Center in your device settings. Apple’s handling of this
          information is described in its <a href="https://www.apple.com/legal/privacy/data/en/game-center/">Game Center privacy notice</a>.
        </p>
        <h2>Advertising and tracking</h2>
        <p>
          This version contains no advertising SDK and displays no ads. It does
          not access your advertising identifier, request tracking permission,
          or track you across other companies’ apps or websites.
        </p>
        <h2>Analytics, diagnostics and replays</h2>
        <p>
          Gameplay events, timing, diagnostic breadcrumbs and puzzle replays are
          held locally in memory for the current session. The analytics event
          buffer keeps at most 200 events. Development builds can print events to
          the local console and export replay files locally. There is no remote
          analytics service, crash-reporting SDK or automatic diagnostic upload.
          Apple may separately process diagnostics according to your device and
          TestFlight settings.
        </p>
        <h2>Purchases</h2>
        <p>
          This version has no paid entitlements or in-app purchase flow. If you
          tap Restore Purchases, StoreKit asks Apple to synchronize purchase
          information. The app does not send receipts or purchase history to
          Knowlly and does not receive payment-card details.
        </p>
        <h2>Contacting support</h2>
        <p>
          Report a Problem opens our support website without attaching diagnostics.
          If you email us, we receive your email address, message and any attachments
          you choose to send. We use them to respond, investigate the issue and
          handle privacy requests. Email providers process correspondence to deliver
          and store it. We keep support correspondence only as long as needed to
          handle the request and meet applicable legal obligations; you may request
          deletion by emailing <a href={supportMailto}>{supportEmail}</a>.
          Do not send passwords or payment-card details.
        </p>
        <h2>Website visits</h2>
        <p>
          Opening a support or privacy link makes a separate website request.
          The hosting service receives connection information such as your IP
          address and browser details to deliver and protect the site. These
          pages contain no added advertising or analytics SDK.
        </p>
        <h2>Your choices and deletion</h2>
        <p>
          Settings → Reset Gameplay Data clears local gameplay and tutorial
          progress, while keeping sound and haptic preferences. It does not erase
          Game Center records or the first-open flag. Deleting the app removes
          its local app data; Apple backups and Game Center records are managed
          separately through Apple. Contact us for access, correction or deletion
          of support correspondence and other privacy requests.
        </p>
        <h2>Policy updates</h2>
        <p>
          We update this policy when our data practices change and show the
          effective date above. Privacy questions can be sent to
          {" "}<a href={supportMailto}>{supportEmail}</a>.
        </p>

        <p>
          <Link href={game.supportPath}>Support</Link> ·{" "}
          <Link href={`/games/${game.slug}`}>Game page</Link>
        </p>
      </section>
    </>
  );
}
