import type { Metadata } from "next";

export const metadata: Metadata = { title: "Press" };

export default function PressPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Press</p>
        <h1>Knowlly Games press kit.</h1>
        <p className="lede">Brand assets, game artwork, screenshots and studio boilerplate will appear here as releases become public.</p>
      </section>
      <section className="section">
        <div className="empty-state">No downloadable press assets are published yet.</div>
      </section>
    </>
  );
}
