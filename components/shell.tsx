"use client";
import { useEffect, useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";
import { site } from "../lib/config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
      <a href="#top" className="brand">
        <img src="/economic-os-coin.webp" alt="" />
        <span>Economic OS</span>
      </a>
      <nav aria-label="Main navigation">
        {site.nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="header-link" href={site.links.dex ?? "#token"} target="_blank" rel="noreferrer">View on RadarDEX <ExternalLink size={13} /></a>
        <a className="header-link" href={site.links.community ?? "#"} target="_blank" rel="noreferrer">Telegram</a>
        <a className="header-buy" href={site.links.x ?? "#"} target="_blank" rel="noreferrer">Join on X</a>
      </div>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <a className="brand" href="#top"><img src="/economic-os-coin.webp" alt="" /><span>Economic OS</span></a>
        <nav>
          <a href={site.links.dex ?? "#"} target="_blank" rel="noreferrer">RadarDEX</a>
          <a href={site.links.community ?? "#"} target="_blank" rel="noreferrer">Telegram</a>
          <a href={site.links.x ?? "#"} target="_blank" rel="noreferrer">X</a>
        </nav>
      </div>
      <p>Economic OS is an independent community meme inspired by Arc’s “Economic OS for the internet” narrative. It is not affiliated with, issued by, sponsored by, or endorsed by Circle or Arc.</p>
      <small>ECONOMIC OS / INDEPENDENT COMMUNITY CULTURE</small>
    </footer>
  );
}
