import Link from "next/link";
import { supportEmail, supportMailtoFor } from "@/lib/support";
import type { GameRecord } from "@/lib/games";

export function FlagTrekPrivacy({ game, name }: { game: GameRecord; name: string }) {
  const mailto = supportMailtoFor(name);
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">{name} · Privacy</p>
        <h1>Your privacy.</h1>
        <p className="lede">
          This policy explains how Knowlly Games handles information in {name}.
          Effective October 18, 2026.
        </p>
      </section>

      <section className="legal-card">
        <h2>Playing and saving on your device</h2>
        <p>
          No Knowlly account is required, and the game works offline. Your trek
          progress and stars, tutorial completion, sound and haptic preferences,
          and any Daily Challenge score waiting to be sent to Game Center are
          stored on your device. The app does not upload these records to a
          Knowlly server. Device backups may be managed separately by your Apple
          settings.
        </p>
        <h2>Game Center</h2>
        <p>
          The app asks Game Center to sign you in. You can decline and keep
          playing. When you are signed in, the score of your first Daily
          Challenge attempt each day is sent to Apple Game Center for the Daily
          Challenge leaderboard, associated with your Game Center player. Your
          score and Game Center profile may be visible to other players according
          to your Apple settings. We do not copy this information to a separate
          backend. Manage Game Center in your device settings. Apple’s handling
          of this information is described in its{" "}
          <a href="https://www.apple.com/legal/privacy/data/en/game-center/">Game Center privacy notice</a>.
        </p>
        <h2>Advertising and tracking</h2>
        <p>
          This version contains no advertising SDK and displays no ads. It does
          not access your advertising identifier, request tracking permission,
          or track you across other companies’ apps or websites.
        </p>
        <h2>Analytics and diagnostics</h2>
        <p>
          Gameplay events, such as which flags were answered correctly and how
          long a round took, carry a random per-attempt identifier and no
          personal information. In this version they are written only to the
          device log. There is no remote analytics service, crash-reporting SDK
          or automatic diagnostic upload. Apple may separately process
          diagnostics according to your device and TestFlight settings.
        </p>
        <h2>Purchases</h2>
        <p>
          This version has no in-app purchases and no paid features.
        </p>
        <h2>Contacting support</h2>
        <p>
          If you email us, we receive your email address, your message and any
          attachments you choose to send. We use them to respond, investigate the
          issue and handle privacy requests. Email providers process
          correspondence to deliver and store it. We keep support correspondence
          only as long as needed to handle the request and meet applicable legal
          obligations; you may request deletion by emailing{" "}
          <a href={mailto}>{supportEmail}</a>. Do not send passwords or
          payment-card details.
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
          Deleting the app removes its local data. Apple backups and Game Center
          records are managed separately through Apple. Contact us for access,
          correction or deletion of support correspondence and other privacy
          requests.
        </p>
        <h2>Policy updates</h2>
        <p>
          We update this policy when our data practices change and show the
          effective date above. For example, if we add advertising in a later
          version, this page will say so before that version is released.
          Privacy questions can be sent to <a href={mailto}>{supportEmail}</a>.
        </p>

        <p>
          <Link href={game.supportPath}>Support</Link> ·{" "}
          <Link href={`/games/${game.slug}`}>Game page</Link>
        </p>
      </section>
    </>
  );
}
