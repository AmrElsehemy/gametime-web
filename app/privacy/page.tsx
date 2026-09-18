import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy should be understandable.</h1>
        <p className="lede">This baseline will be expanded with game-specific disclosures before the first App Store submission.</p>
      </section>
      <section className="legal-card">
        <h3>Knowlly Games</h3>
        <p>Our games are designed to work without a proprietary account and without mandatory online connectivity.</p>
        <h2>Before the first release</h2>
        <p>Final analytics, advertising, Game Center, purchase and diagnostic disclosures will be published here only after the production SDK set is frozen and verified.</p>
        <h2>Contact</h2>
        <p>A production support contact will be added before submission. This placeholder page must not be used as final legal copy.</p>
      </section>
    </>
  );
}
