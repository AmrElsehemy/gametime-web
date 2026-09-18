import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Terms</p>
        <h1>Terms of use.</h1>
        <p className="lede">The final release terms will be published before the first Knowlly Games title ships.</p>
      </section>
      <section className="legal-card">
        <p>This route is intentionally present before launch so release URLs are stable. It is not presented as final legal language.</p>
        <h2>Release gate</h2>
        <p>Final terms must reflect the actual game features, purchases, advertising and applicable store requirements before App Store submission.</p>
      </section>
    </>
  );
}
