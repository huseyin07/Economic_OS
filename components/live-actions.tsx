"use client";

import { Copy, ExternalLink, Send } from "lucide-react";
import { useState } from "react";
import { site } from "../lib/config";

export function LiveActions() {
  const [copied, setCopied] = useState(false);
  const copyContract = async () => {
    if (!site.token.contract) return;
    await navigator.clipboard.writeText(site.token.contract);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <section className="relative z-[6] mx-auto -mt-8 mb-8 w-[min(1180px,calc(100%-48px))]">
      <div className="flex flex-wrap items-center gap-2 border border-[rgba(143,190,238,.16)] bg-[rgba(5,17,34,.94)] p-3 shadow-[0_24px_70px_rgba(0,0,0,.28)] backdrop-blur-xl">
        <span className="mr-2 font-mono text-[9px] tracking-[.16em] text-[#6f8499]">$EOS LIVE</span>

        <a href={site.links.dex ?? "#"} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 bg-[#eaf7ff] px-4 font-mono text-[10px] font-bold tracking-[.06em] text-[#06101e] transition hover:bg-[#68ddff]">
          Buy $EOS <ExternalLink size={12} />
        </a>

        <a href={site.links.community ?? "#"} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 border border-[rgba(104,221,255,.24)] bg-[#071426] px-4 font-mono text-[10px] text-[#d8e6f2] transition hover:border-[rgba(104,221,255,.55)] hover:text-[#68ddff]">
          <Send size={12} /> Telegram
        </a>

        <a href={site.links.x ?? "#"} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 border border-[rgba(104,221,255,.24)] bg-[#071426] px-4 font-mono text-[10px] text-[#d8e6f2] transition hover:border-[rgba(104,221,255,.55)] hover:text-[#68ddff]">
          X / Twitter <ExternalLink size={12} />
        </a>

        <button onClick={copyContract} className="inline-flex min-h-10 items-center gap-2 border border-[rgba(143,190,238,.14)] bg-transparent px-4 font-mono text-[10px] text-[#8ca1b5] transition hover:text-white">
          <Copy size={12} /> {copied ? "Copied" : "Copy CA"}
        </button>

        <span className="ml-auto hidden max-w-[280px] truncate font-mono text-[8px] text-[#536b81] lg:block">{site.token.contract}</span>
      </div>
    </section>
  );
}
