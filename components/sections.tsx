"use client";

import { Check, Copy, ExternalLink, Globe2, Layers3, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "../lib/config";

const coinArt = "/economic-os-coin.webp?v=20260815-final";
const arcVideoPage = "https://www.arc.io/?wvideo=fz4nbb1lui";
const arcVideoEmbed = "https://fast.wistia.net/embed/iframe/fz4nbb1lui";

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

function shortContract(contract: string | null) {
  if (!contract) return "Not configured";
  return `${contract.slice(0, 6)}...${contract.slice(-4)}`;
}

function useTypewriter(text: string, speed = 55, pause = 1500) {
  const [value, setValue] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const doneTyping = value === text && !deleting;
    const doneDeleting = value === "" && deleting;
    const delay = doneTyping ? pause : doneDeleting ? 700 : deleting ? Math.max(45, speed * 0.72) : speed;

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }
      if (doneDeleting) {
        setDeleting(false);
        return;
      }
      setValue(deleting ? text.slice(0, Math.max(0, value.length - 1)) : text.slice(0, value.length + 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [value, deleting, text, speed, pause]);

  return value;
}

export function Hero() {
  const [copied, setCopied] = useState(false);
  const typedTitle = useTypewriter("Economic OS", 150, 2800);
  const typedLine = useTypewriter("Arc builds the infrastructure. Economic OS carries the culture.", 65, 2400);
  const typedSub = useTypewriter("A community meme inspired by Arc’s defining vision for a programmable internet economy.", 48, 2200);

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
          <h1 className="hero-title-nowrap"><span>{typedTitle}</span><i className="type-cursor" /></h1>
          <p className="typed-hero-line"><span>{typedLine}</span><i className="type-cursor small" /></p>
          <p className="hero-sub typed-hero-sub"><span>{typedSub}</span><i className="type-cursor small" /></p>
          <div className="hero-actions-v2">
            <a className="primary-btn" href={site.links.dex ?? "#token"} target="_blank" rel="noreferrer">View on RadarDEX <ExternalLink size={16} /></a>
            <button className="secondary-btn" onClick={copy}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "Copied" : "Contract Address"}</button>
          </div>
          <div className="hero-meta"><span>Network: <b>ARC</b></span><i /> <span>Token: <b>Economic OS</b></span></div>
        </div>

        <div className="hero-art-v2 hero-planet-scene">
          <div className="coin-glow" />
          <div className="planet-halo halo-a" />
          <div className="planet-halo halo-b" />
          <div className="planet-halo halo-c" />
          <div className="planet-halo halo-d" />
          <div className="ring-dust dust-a" />
          <div className="ring-dust dust-b" />
          <div className="hero-coin-core" role="img" aria-label="Economic OS artwork" style={{ backgroundImage: `url(${coinArt})` }} />
        </div>
      </div>
      <style jsx>{`
        .hero-title-nowrap{white-space:nowrap;font-size:clamp(48px,5.8vw,88px)!important;min-height:.95em;display:flex;align-items:center;gap:6px}
        .typed-hero-line{min-height:3.1em}.typed-hero-sub{min-height:5.1em}
        .type-cursor{display:inline-block;width:3px;height:.78em;background:#59b6ff;box-shadow:0 0 12px rgba(61,162,255,.65);animation:cursorBlink .8s steps(1) infinite;flex:none}
        .type-cursor.small{width:2px;height:1em;margin-left:4px;vertical-align:-.12em}.hero-planet-scene{isolation:isolate;perspective:1100px}
        .hero-coin-core{position:relative;z-index:6;width:min(470px,84%);aspect-ratio:1/1;border-radius:50%;background-size:cover;background-position:center;background-repeat:no-repeat;box-shadow:0 0 0 1px rgba(137,205,255,.4),0 0 90px rgba(34,132,255,.3),0 44px 100px rgba(0,0,0,.58);animation:heroFloat 6s ease-in-out infinite}
        .planet-halo{position:absolute;left:50%;top:50%;border-radius:50%;pointer-events:none;z-index:3;transform-style:preserve-3d}
        .halo-a{width:118%;height:34%;border:1px solid rgba(96,178,255,.5);transform:translate(-50%,-50%) rotateZ(-12deg) rotateX(68deg);box-shadow:0 0 22px rgba(60,145,255,.15);animation:ringOrbitA 14s linear infinite}
        .halo-b{width:106%;height:28%;border:2px solid rgba(53,135,235,.32);transform:translate(-50%,-50%) rotateZ(18deg) rotateX(72deg);animation:ringOrbitB 18s linear infinite reverse}
        .halo-c{width:92%;height:22%;border:1px solid rgba(129,201,255,.28);transform:translate(-50%,-50%) rotateZ(-32deg) rotateX(74deg);animation:ringOrbitC 11s linear infinite}
        .halo-d{width:128%;height:42%;border:1px dashed rgba(74,154,238,.18);transform:translate(-50%,-50%) rotateZ(7deg) rotateX(76deg);animation:ringOrbitD 24s linear infinite}
        .ring-dust{position:absolute;left:50%;top:50%;z-index:2;border-radius:50%;pointer-events:none;filter:blur(.2px)}
        .dust-a{width:124%;height:38%;transform:translate(-50%,-50%) rotateZ(-10deg) rotateX(70deg);background:radial-gradient(circle at 5% 50%,rgba(84,169,255,.9) 0 2px,transparent 2.8px),radial-gradient(circle at 23% 46%,rgba(84,169,255,.55) 0 1px,transparent 2px),radial-gradient(circle at 76% 54%,rgba(84,169,255,.7) 0 1.5px,transparent 2.3px),radial-gradient(circle at 94% 49%,rgba(84,169,255,.8) 0 1.8px,transparent 2.5px);animation:dustMove 9s linear infinite}
        .dust-b{width:112%;height:32%;transform:translate(-50%,-50%) rotateZ(22deg) rotateX(73deg);background:radial-gradient(circle at 11% 52%,rgba(130,202,255,.7) 0 1px,transparent 2px),radial-gradient(circle at 41% 48%,rgba(130,202,255,.55) 0 1.3px,transparent 2.2px),radial-gradient(circle at 68% 55%,rgba(130,202,255,.7) 0 1px,transparent 2px),radial-gradient(circle at 88% 45%,rgba(130,202,255,.5) 0 1.5px,transparent 2.3px);animation:dustMove 13s linear infinite reverse}
        @keyframes cursorBlink{50%{opacity:0}}@keyframes heroFloat{50%{transform:translateY(-10px)}}
        @keyframes ringOrbitA{to{transform:translate(-50%,-50%) rotateZ(348deg) rotateX(68deg)}}@keyframes ringOrbitB{to{transform:translate(-50%,-50%) rotateZ(378deg) rotateX(72deg)}}
        @keyframes ringOrbitC{to{transform:translate(-50%,-50%) rotateZ(328deg) rotateX(74deg)}}@keyframes ringOrbitD{to{transform:translate(-50%,-50%) rotateZ(367deg) rotateX(76deg)}}@keyframes dustMove{to{rotate:360deg}}
        @media(max-width:760px){.hero-title-nowrap{font-size:clamp(42px,12vw,62px)!important}.hero-coin-core{width:min(390px,78%)}.halo-a{width:112%}.halo-b{width:102%}.halo-c{width:90%}.halo-d{width:120%}.dust-a{width:118%}.dust-b{width:106%}}
        @media(prefers-reduced-motion:reduce){.hero-coin-core,.planet-halo,.ring-dust,.type-cursor{animation:none}}
      `}</style>
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
        <div className="arc-video-v2">
          <iframe src={arcVideoEmbed} title="Arc — The Economic OS for the internet" allow="autoplay; fullscreen" allowFullScreen loading="lazy" />
        </div>
        <div><span>OFFICIAL ARC VISION</span><h3>The Economic OS for the internet.</h3><p>This official Arc narrative is shown for context. Economic OS remains an independent community meme and is not an Arc or Circle-issued asset.</p><a href={arcVideoPage} target="_blank" rel="noreferrer">View original Arc video <ExternalLink size={14} /></a></div>
      </div>
      <div className="signals-v2"><span>OFFICIAL SIGNALS</span><div>{xPosts.map(([label, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{label}<ExternalLink size={11} /></a>)}</div></div>
      <style jsx>{`
        .arc-video-v2{position:relative;min-height:310px;background:#020914;overflow:hidden}
        .arc-video-v2 iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block}
        @media(max-width:760px){.arc-video-v2{aspect-ratio:16/9;min-height:0}}
      `}</style>
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
          <div><span>Token Name</span><b>Economic OS</b></div><div><span>Ticker</span><b>Economic OS</b></div><div><span>Network</span><b>ARC</b></div><div><span>Contract</span><b className="contract-short">{shortContract(site.token.contract)}</b></div>
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
  const cards = [[Users,"Community First","Built by the Arc community, for the community."],[Sparkles,"Cultural Power","A narrative turned into a recognizable community signal."],[Globe2,"Internet Native","Born from Arc’s vision of an Economic OS for the internet."],[ShieldCheck,"Transparent","Contract and trading destination are visible and easy to verify."]];
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
