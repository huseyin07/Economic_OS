import { ExternalLink } from "lucide-react";
import { visuals } from "../lib/visuals";

export function HeroCoinVisual() {
  return (
    <div className="pointer-events-none relative z-[3] mx-auto h-0 w-[min(1180px,calc(100%-48px))]">
      <div className="absolute right-0 top-[-330px] hidden w-[210px] lg:block xl:w-[240px]">
        <div className="relative aspect-square overflow-hidden border border-[rgba(104,221,255,.22)] bg-[#061426]/70 shadow-[0_0_70px_rgba(35,140,255,.13)] backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(104,221,255,.08),transparent_68%)]" />
          <img src={visuals.coin} alt="Economic OS coin artwork" className="h-full w-full object-cover opacity-95" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#030a17] to-transparent" />
        </div>
      </div>
    </div>
  );
}

export function ArcVisionVisual() {
  return (
    <section className="mx-auto w-[min(1180px,calc(100%-48px))] pb-16 pt-2">
      <div className="grid overflow-hidden border border-[rgba(143,190,238,.14)] bg-[#06101f] md:grid-cols-[1.4fr_.8fr]">
        <div className="relative min-h-[240px] overflow-hidden bg-[#071426]">
          <img src={visuals.arcVision} alt="Arc Economic OS vision with Jeremy Allaire and Nikhil Chandhok" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#06101f]/35" />
        </div>
        <div className="flex flex-col justify-between gap-8 p-6 md:p-8">
          <div>
            <p className="m-0 font-mono text-[9px] tracking-[.18em] text-[#68ddff]">OFFICIAL ARC VISION</p>
            <h3 className="mt-5 text-3xl font-normal tracking-[-.04em] text-white">The Economic OS for the internet.</h3>
            <p className="mt-4 text-sm leading-6 text-[#91a4ba]">Arc’s own vision frames money, markets, and software as one programmable system. This image belongs to that official Arc narrative, separate from the independent $EOS community meme.</p>
          </div>
          <a href="https://www.arc.io/" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 font-mono text-[10px] text-[#8aa1b7] transition hover:text-[#68ddff]">
            View Arc source <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function TokenCoinVisual() {
  return (
    <section className="mx-auto -mt-20 mb-16 hidden w-[min(1180px,calc(100%-48px))] justify-end md:flex">
      <div className="flex items-center gap-4 border border-[rgba(143,190,238,.14)] bg-[#071426]/90 p-3 shadow-[0_20px_60px_rgba(0,0,0,.25)]">
        <img src={visuals.coin} alt="Economic OS coin artwork" className="h-16 w-16 object-cover" />
        <div className="pr-3">
          <p className="m-0 font-mono text-[8px] tracking-[.16em] text-[#5f758b]">CULTURE ASSET</p>
          <p className="mt-1 mb-0 text-sm text-[#dce8f2]">$EOS / Economic OS</p>
        </div>
      </div>
    </section>
  );
}
