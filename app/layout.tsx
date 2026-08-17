import type { Metadata } from "next";
import "./globals.css";
import "./living-background.css";
import "./section-polish.css";
import "./economy-motion.css";
import "./hero-network.css";

export const metadata: Metadata = {
  title: "Economic OS ($EOS) | The Culture Layer",
  description: "Economic OS ($EOS) is an independent community meme inspired by Arc's vision of the Economic OS for the internet.",
  openGraph: { title: "Economic OS ($EOS) | The Culture Layer", description: "The independent culture layer inspired by Arc's Economic OS vision.", type: "website" },
  twitter: { card: "summary_large_image", title: "Economic OS ($EOS) | The Culture Layer", description: "The independent culture layer inspired by Arc's Economic OS vision." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
