import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Knowlly Games",
    template: "%s · Knowlly Games",
  },
  description: "Small, polished games built for one more good round.",
  applicationName: "Knowlly Games",
  openGraph: {
    title: "Knowlly Games",
    description: "Small, polished games built for one more good round.",
    siteName: "Knowlly Games",
    type: "website",
  },
};

const navItems = [
  ["Games", "/games"],
  ["Support", "/support"],
  ["Press", "/press"],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-frame">
          <header className="site-header">
            <Link className="brand" href="/" aria-label="Knowlly Games home">
              <span className="brand-mark" aria-hidden="true">K</span>
              <span>Knowlly Games</span>
            </Link>
            <nav aria-label="Primary navigation">
              {navItems.map(([label, href]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </nav>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <div>
              <strong>Knowlly Games</strong>
              <p>Play something good.</p>
            </div>
            <div className="footer-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/support">Support</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
