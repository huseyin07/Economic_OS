import { ExternalLink } from "lucide-react";

const signals = [
  { label: "Jeremy Allaire 01", source: "Circle CEO", href: "https://x.com/jerallaire/status/2001665450057285774?s=20" },
  { label: "Jeremy Allaire 02", source: "Circle CEO", href: "https://x.com/jerallaire/status/2019193724186841366?s=20" },
  { label: "Arc 01", source: "Official Arc", href: "https://x.com/arc/status/2080729733600366955?s=20" },
  { label: "Arc 02", source: "Official Arc", href: "https://x.com/arc/status/2044869288050475393?s=20" },
  { label: "Arc 03", source: "Official Arc", href: "https://x.com/arc/status/2016647727032258622?s=20" },
  { label: "Arc 04", source: "Official Arc", href: "https://x.com/arc/status/2001744965723099430?s=20" },
  { label: "Arc 05", source: "Official Arc", href: "https://x.com/arc/status/2001381889983070641?s=20" },
  { label: "Arc 06", source: "Official Arc", href: "https://x.com/arc/status/1989423088476295354?s=20" },
];

export function OfficialSignals() {
  return (
    <section aria-labelledby="official-signals-title" className="border-y border-[rgba(143,190,238,.14)] bg-[#06101f]/70">
      <div className="mx-auto flex w-[min(1180px,calc(100%-48px))] flex-col gap-4 py-7 md:flex-row md:items-center md:gap-7">
        <div className="shrink-0">
          <p id="official-signals-title" className="m-0 font-mono text-[9px] tracking-[.18em] text-[#68ddff]">OFFICIAL SIGNALS</p>
          <p className="mt-1 mb-0 text-[11px] text-[#6f8499]">Selected X references</p>
        </div>

        <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {signals.map((signal) => (
            <a
              key={signal.href}
              href={signal.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 border border-[rgba(143,190,238,.14)] bg-[#071426]/80 px-3 py-2 transition hover:border-[rgba(104,221,255,.45)] hover:bg-[#0a1b30]"
              aria-label={`${signal.label} on X`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#68ddff] shadow-[0_0_10px_rgba(104,221,255,.75)]" />
              <span className="font-mono text-[10px] text-[#b8c7d6] group-hover:text-white">{signal.label}</span>
              <span className="font-mono text-[8px] text-[#5f758b]">{signal.source}</span>
              <ExternalLink size={11} className="text-[#5f758b] transition group-hover:text-[#68ddff]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
