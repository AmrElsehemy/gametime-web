import type { Metadata } from "next";
import { supportEmail } from "@/lib/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Terms</p>
        <h1>Terms of use.</h1>
        <p className="lede">Knowlly Games apps are distributed through Apple&rsquo;s App Store.</p>
      </section>
      <section className="legal-card">
        <h2>Apps</h2>
        <p>
          Our apps are licensed to you under Apple&rsquo;s{" "}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            Licensed Application End User License Agreement
          </a>
          .
        </p>
        <h2>This website</h2>
        <p>
          This website is provided for information about our games. Game names, artwork and text are owned by Knowlly Games.
        </p>
        <h2>Contact</h2>
        <p>
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </p>
      </section>
    </>
  );
}
