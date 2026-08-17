"use client";

import { Check, Copy, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "../lib/config";

const coinArt = "/economic-os-coin.webp?v=20260815-final";

function useSynchronizedTypewriter(texts: string[]) {
  const steps = 90;
  const [step, setStep] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const atFull = step >= steps && !deleting;
    const atEmpty = step <= 0 && deleting;
    const delay = atFull ? 2400 : atEmpty ? 700 : deleting ? 48 : 62;

    const timer = window.setTimeout(() => {
      if (atFull) return setDeleting(true);
      if (atEmpty) return setDeleting(false);
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
