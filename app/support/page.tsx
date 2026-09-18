import type { Metadata } from "next";

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
          Game-specific troubleshooting and contact details will live here as titles launch.
        </p>
      </section>

      <section className="section">
        <div className="legal-card">
          <h3>Before launch</h3>
          <p>
            There are no public Knowlly Games releases to support yet. This page exists now so the release pipeline has a stable support destination without inventing fake products or links.
          </p>
        </div>
      </section>
    </>
  );
}
