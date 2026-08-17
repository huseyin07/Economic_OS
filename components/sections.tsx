"use client";

import { Check, Copy, ExternalLink, Globe2, Layers3, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "../lib/config";

const coinArt = "/economic-os-coin.webp?v=20260815-final";
const arcVideoPage = "https://www.arc.io/?wvideo=fz4nbb1lui";
const arcVideoEmbed = "https://fast.wistia.net/embed/iframe/fz4nbb1lui";

const xPosts = [
  ["Jeremy Allaire", "https://x.com/jerallaire/status/2001665450057285774?s=20"],
  ["Jeremy Allaire", "https://x.com/jerallaire/status/2019193724186841366?s=20"],
  ["Arc", "https://x.com/arc/status/2080729733600366955?s=20"],
  ["Arc", "https://x.com/arc/status/2044869288050475393?s=20"],
  ["Arc", "https://x.com/arc/status/2016647727032258622?s=20"],
  ["Arc", "https://x.com/arc/status/2001744965723099430?s=20"],
  ["Arc", "https://x.com/arc/status/2001381889983070641?s=20"],
  ["Arc", "https://x.com/arc/status/1989423088476295354?s=20"],
];

function tweetId(href: string) {
  return href.match(/status\/(\d+)/)?.[1] ?? "";
}

function shortContract(contract: string | null) {
  if (!contract) return "Not configured";
  return `${contract.slice(0, 6)}...${contract.slice(-4)}`;
}

function useSynchronizedTypewriter(texts: string[]) {
  const steps = 90;
  const [step, setStep] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const atFull = step >= steps && !deleting;
    const atEmpty = step <= 0 && deleting;
    const delay = atFull ? 3300 : atEmpty ? 1100 : deleting ? 80 : 103;

    const timer = window.setTimeout(() => {
      if (atFull) {
        setDeleting(true);
        return;
      }
      if (atEmpty) {
        setDeleting(false);
        return;
      }
      setStep((current) => deleting ? Math.max(0, current - 1) : Math.min(steps, current + 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [step, deleting]);

  const progress = step / steps;
  return texts.map((text) => text.slice(0, Math.round(text.length * progress)));
}

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [typedTitle, typedLine, typedSub] = useSynchronizedTypewriter([
    "Economic OS",
    "Arc builds the infrastructure. Economic OS carries the culture.",
    "A community meme inspired by Arc’s defining vision for a programmable internet economy.",
  ]);

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

      <div className="signals-preview-v2">
        <div className="signals-head-v2"><span>OFFICIAL SIGNALS</span><p>Direct posts from Arc and Jeremy Allaire.</p></div>
        <div className="signals-track-v2">
          {xPosts.map(([label, href]) => {
            const id = tweetId(href);
            return (
              <article className="signal-card-v2" key={href}>
                <div className="signal-label-v2"><b>{label}</b><a href={href} target="_blank" rel="noreferrer">Open on X <ExternalLink size={11} /></a></div>
                <iframe src={`https://platform.twitter.com/embed/Tweet.html?id=${id}&theme=dark&dnt=true`} title={`${label} post on X`} loading="lazy" scrolling="no" />
              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .arc-video-v2{position:relative;min-height:310px;background:#020914;overflow:hidden}.arc-video-v2 iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block}
        .signals-preview-v2{margin-top:24px;padding:20px;border:1px solid rgba(83,163,244,.22);border-radius:16px;background:linear-gradient(180deg,rgba(5,19,37,.86),rgba(3,13,26,.9));box-shadow:0 18px 50px rgba(0,0,0,.18);overflow:hidden}
        .signals-head-v2{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-bottom:16px}.signals-head-v2>span{display:inline-flex;align-items:center;min-height:32px;padding:0 12px;border:1px solid rgba(91,181,255,.3);border-radius:999px;color:#55b4ff;font:9px monospace;letter-spacing:.1em}.signals-head-v2 p{margin:0;color:#7f95aa;font-size:11px}
        .signals-track-v2{display:flex;gap:14px;overflow-x:auto;padding:2px 2px 10px;scroll-snap-type:x proximity;scrollbar-width:thin;scrollbar-color:rgba(69,153,235,.32) transparent}.signal-card-v2{flex:0 0 310px;height:265px;border:1px solid rgba(79,159,238,.2);border-radius:13px;background:#061426;overflow:hidden;scroll-snap-align:start;box-shadow:0 12px 32px rgba(0,0,0,.2);transition:transform .22s ease,border-color .22s ease}.signal-card-v2:hover{transform:translateY(-3px);border-color:rgba(94,184,255,.4)}
        .signal-label-v2{height:42px;padding:0 12px;display:flex;align-items:center;justify-content:space-between;gap:10px;border-bottom:1px solid rgba(75,154,230,.14);background:rgba(7,24,44,.96)}.signal-label-v2 b{font-size:11px;color:#d8ebfb}.signal-label-v2 a{display:inline-flex;align-items:center;gap:5px;color:#6bb9f6;font-size:9px}.signal-card-v2 iframe{display:block;width:100%;height:223px;border:0;background:#000}
        @media(max-width:760px){.arc-video-v2{aspect-ratio:16/9;min-height:0}.signals-head-v2{align-items:flex-start;flex-direction:column;gap:8px}.signal-card-v2{flex-basis:285px;height:255px}.signal-card-v2 iframe{height:213px}}
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
        <div className="token-stats-v2"><div><span>Token Name</span><b>Economic OS</b></div><div><span>Ticker</span><b>Economic OS</b></div><div><span>Network</span><b>ARC</b></div><div><span>Contract</span><b className="contract-short">{shortContract(site.token.contract)}</b></div></div>
      </div>
      <div className="token-links-v2"><a className="primary-btn" href={site.links.dex ?? "#"} target="_blank" rel="noreferrer">Buy Economic OS <ExternalLink size={15} /></a><a className="secondary-btn" href={site.links.dex ?? "#"} target="_blank" rel="noreferrer">View on RadarDEX <ExternalLink size={15} /></a><button className="secondary-btn" onClick={async()=>{await navigator.clipboard.writeText(site.token.contract!);setCopied(true);window.setTimeout(()=>setCopied(false),1200)}}>{copied?<Check size={15}/>:<Copy size={15}/>} {copied?"Copied":"Copy Contract"}</button></div>
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
