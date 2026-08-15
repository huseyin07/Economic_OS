"use client";

import { Check, Copy, ExternalLink, Globe2, Layers3, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import { site } from "../lib/config";

const coinArt = "/economic-os-coin.webp?v=20260815-arc2";

const xPosts = [
  ["Jeremy Allaire 01", "https://x.com/jerallaire/status/2001665450057285774?s=20"],
  ["Jeremy Allaire 02", "https://x.com/jerallaire/status/2019193724186841366?s=20"],
  ["Arc 01", "https://x.com/arc/status/2080729733600366955?s=20"],
  ["Arc 02", "https://x.com/arc/status/2044869288050475393?s=20"],
  ["Arc 03", "https://x.com/arc/status/2016647727032258622?s=20"],
  ["Arc 04", "https://x.com/arc/status/2001744965723099430?s=20"],
  ["Arc 05", "https://x.com/arc/status/2001381889983070641?s=20"],
  ["Arc 06", "https://x.com/arc/status/1989423088476295354?s=20"],
];

export function Hero() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    if (!site.token.contract) return;
    await navigator.clipboard.writeText(site.token.contract);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section className="hero-v2" id="top">
      <div className="hero-stars" />
      <div className="hero-v2-inner">
        <div className="hero-copy-v2">
          <span className="hero-kicker">THE ECONOMIC OS FOR THE INTERNET</span>
          <h1>Economic OS</h1>
          <p>Arc builds the infrastructure. Economic OS carries the culture.</p>
          <p className="hero-sub">A community meme inspired by Arc’s defining vision for a programmable internet economy.</p>
          <div className="hero-actions-v2">
            <a className="primary-btn" href={site.links.dex ?? "#token"} target="_blank" rel="noreferrer">View on RadarDEX <ExternalLink size={16} /></a>
            <button className="secondary-btn" onClick={copy}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "Copied" : "Contract Address"}</button>
          </div>
          <div className="hero-meta"><span>Network: <b>ARC</b></span><i /> <span>Token: <b>Economic OS</b></span></div>
        </div>

        <div className="hero-art-v2">
          <div className="coin-glow" />
          <img src={coinArt} alt="Economic OS artwork" />
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section-v2" id="about">
      <div className="section-heading-v2"><span>ABOUT</span><h2>What is Economic OS?</h2><p>Arc describes its vision as an Economic Operating System for the internet. Economic OS turns that idea into an independent community culture layer.</p></div>
      <div className="about-grid-v2">
        <div className="about-panel-v2"><h3>Arc builds the system.</h3><p>A stablecoin-native Layer 1 designed for money, markets, software and internet-native economic coordination.</p></div>
        <div className="about-panel-v2"><h3>Economic OS carries the signal.</h3><p>The meme, language and identity that forms around the idea of the internet having its own Economic OS.</p></div>
      </div>
      <div className="arc-vision-v2">
        <img src="https://cdn.prod.website-files.com/685311a976e7c248b5dfde95/69a89025ecef8ed387934993_arc-video.jpg" alt="Arc Economic OS vision" />
        <div><span>OFFICIAL ARC VISION</span><h3>The Economic OS for the internet.</h3><p>This official Arc narrative is shown for context. Economic OS remains an independent community meme and is not an Arc or Circle-issued asset.</p><a href={site.sources.arc} target="_blank" rel="noreferrer">View Arc source <ExternalLink size={14} /></a></div>
      </div>
      <div className="signals-v2"><span>OFFICIAL SIGNALS</span><div>{xPosts.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label}<ExternalLink size={11} /></a>)}</div></div>
    </section>
  );
}

export function Token() {
  const [copied, setCopied] = useState(false);
  return (
    <section className="section-v2 token-v2" id="token">
      <div className="section-heading-v2 centered"><span>THE ECONOMIC OS TOKEN</span><h2>Economic OS</h2><p>The cultural token of the Economic OS narrative on Arc.</p></div>
      <div className="token-card-v2">
        <div className="token-identity-v2"><img src={coinArt} alt="Economic OS artwork" /><div><span>ECONOMIC OS</span><h3>Economic OS</h3><p>Community. Culture. Internet-native identity.</p></div></div>
        <div className="token-stats-v2">
          <div><span>Token Name</span><b>Economic OS</b></div>
          <div><span>Ticker</span><b>Economic OS</b></div>
          <div><span>Network</span><b>ARC</b></div>
          <div><span>Contract</span><b className="contract-short">0x5c74...82cb</b></div>
        </div>
      </div>
      <div className="token-links-v2">
        <a className="primary-btn" href={site.links.dex ?? "#"} target="_blank" rel="noreferrer">Buy Economic OS <ExternalLink size={15} /></a>
        <a className="secondary-btn" href={site.links.dex ?? "#"} target="_blank" rel="noreferrer">View on RadarDEX <ExternalLink size={15} /></a>
        <button className="secondary-btn" onClick={async()=>{await navigator.clipboard.writeText(site.token.contract!);setCopied(true);window.setTimeout(()=>setCopied(false),1200)}}>{copied?<Check size={15}/>:<Copy size={15}/>} {copied?"Copied":"Copy Contract"}</button>
      </div>
    </section>
  );
}

export function Why() {
  const cards = [
    [Users, "Community First", "Built by the Arc community, for the community."],
    [Sparkles, "Cultural Power", "A narrative turned into a recognizable community signal."],
    [Globe2, "Internet Native", "Born from Arc’s vision of an Economic OS for the internet."],
    [ShieldCheck, "Transparent", "Contract and trading destination are visible and easy to verify."],
  ];
  return <section className="section-v2 why-v2"><div className="section-heading-v2 centered"><span>WHY ECONOMIC OS?</span><h2>Culture around infrastructure.</h2></div><div className="why-grid-v2">{cards.map(([Icon,title,copy]:any)=><div key={title}><Icon size={30}/><h3>{title}</h3><p>{copy}</p></div>)}</div></section>;
}

export function HowToBuy() {
  const steps = ["Open RadarDEX", "Connect an Arc-compatible wallet", "Verify the Economic OS contract", "Swap and confirm the transaction"];
  return <section className="section-v2 buy-v2" id="buy"><div className="section-heading-v2"><span>HOW TO BUY</span><h2>From Arc to Economic OS.</h2></div><div className="buy-grid-v2">{steps.map((step,i)=><div key={step}><b>0{i+1}</b><p>{step}</p></div>)}</div><a className="primary-btn" href={site.links.dex ?? "#"} target="_blank" rel="noreferrer">Open RadarDEX <ExternalLink size={15}/></a></section>;
}

export function Community() {
  return <section className="community-v2" id="community"><Layers3 size={34}/><span>COMMUNITY</span><h2>Economic OS is the culture layer.</h2><p>Follow the signal, join the conversation and build the meme with the community.</p><div><a className="primary-btn" href={site.links.community ?? "#"} target="_blank" rel="noreferrer">Join Telegram</a><a className="secondary-btn" href={site.links.x ?? "#"} target="_blank" rel="noreferrer">Follow on X <ExternalLink size={15}/></a></div></section>;
}

export function FAQ() {
  return <section className="section-v2 faq-v2" id="faq"><div className="section-heading-v2"><span>FAQ</span><h2>Know what you’re looking at.</h2></div><div className="faq-grid-v2"><div><h3>Is Economic OS an official Arc token?</h3><p>No. It is an independent community meme inspired by Arc’s Economic OS narrative.</p></div><div><h3>Where can I trade it?</h3><p>The site links directly to the configured RadarDEX market for the contract shown above.</p></div><div><h3>What network is it on?</h3><p>Arc.</p></div><div><h3>Where is the community?</h3><p>Telegram and X links are available throughout the site.</p></div></div></section>;
}
