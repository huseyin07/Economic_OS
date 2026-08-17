import type { Metadata } from "next";
import "./globals.css";
import "./living-background.css";
import "./section-polish.css";
import "./economy-motion.css";
import "./hero-network.css";
import "./system-experience.css";
import "./final-polish.css";

export const metadata: Metadata = {
  title: "Economic OS | The Narrative on Arc",
  description: "Economic OS is an independent community token built around Arc's defining Economic OS for the internet narrative.",
  openGraph: { title: "Economic OS | The Narrative on Arc", description: "The phrase is the narrative. An independent community token built around Arc's Economic OS vision.", type: "website" },
  twitter: { card: "summary_large_image", title: "Economic OS | The Narrative on Arc", description: "The phrase is the narrative. An independent community token built around Arc's Economic OS vision." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
