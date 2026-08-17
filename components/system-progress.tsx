"use client";

import { useEffect, useState } from "react";

const stages = [
  { label: "BOOT", selector: "#top" },
  { label: "CONTEXT", selector: "#about" },
  { label: "RUN", selector: ".economy-builder" },
  { label: "VERIFY", selector: "#faq" },
];

export function SystemProgress() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const viewportAnchor = window.scrollY + window.innerHeight * 0.44;
      const points = stages.map(({ selector }) => {
        const el = document.querySelector(selector) as HTMLElement | null;
        return el ? el.offsetTop : 0;
      });

      let current = 0;
      points.forEach((point, index) => {
        if (viewportAnchor >= point) current = index;
      });
      setActive(current);

      const start = points[current] ?? 0;
      const end = points[current + 1] ?? Math.max(document.documentElement.scrollHeight - window.innerHeight, start + 1);
      const local = Math.max(0, Math.min(1, (viewportAnchor - start) / Math.max(1, end - start)));
      const overall = ((current + local) / stages.length) * 100;
      setProgress(Math.max(0, Math.min(100, overall)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <aside className="system-progress" aria-label="System sequence progress">
      <div className="sequence-track"><div className="sequence-fill" style={{ height: `${progress}%` }} /></div>
      <div className="sequence-stages">
        {stages.map((stage, index) => (
          <a key={stage.label} href={stage.selector.startsWith("#") ? stage.selector : "#top"} className={index === active ? "stage active" : index < active ? "stage complete" : "stage"} aria-current={index === active ? "step" : undefined}>
            <span className="stage-dot" />
            <span className="stage-label">{stage.label}</span>
          </a>
        ))}
      </div>
      <style jsx>{`
        .system-progress{position:fixed;right:18px;top:50%;transform:translateY(-50%);z-index:45;width:76px;height:250px;pointer-events:none;opacity:.78;transition:opacity .25s ease}
        .system-progress:hover{opacity:1}.sequence-track{position:absolute;right:8px;top:8px;bottom:8px;width:1px;background:rgba(79,159,238,.16);overflow:hidden}.sequence-fill{position:absolute;left:0;top:0;width:100%;background:linear-gradient(180deg,#59b7ff,#1c75df);box-shadow:0 0 12px rgba(52,155,255,.6);transition:height .18s linear}
        .sequence-stages{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between}.stage{position:relative;height:26px;display:flex;align-items:center;justify-content:flex-end;gap:9px;color:#4d6b88;text-decoration:none;pointer-events:auto;font:7px ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.13em;transition:color .2s ease,opacity .2s ease}.stage-label{min-width:48px;text-align:right;opacity:.5;transform:translateX(2px);transition:.2s ease}.stage-dot{order:2;width:7px;height:7px;border-radius:50%;border:1px solid rgba(77,158,238,.38);background:#041427;box-shadow:0 0 0 3px rgba(3,14,28,.84);transition:.2s ease}.stage.complete{color:#6aa7dc}.stage.complete .stage-dot{background:#287fcf;border-color:#5db4ff}.stage.active{color:#bfe4ff}.stage.active .stage-label{opacity:1;transform:translateX(0)}.stage.active .stage-dot{width:9px;height:9px;background:#65c0ff;border-color:#9ad7ff;box-shadow:0 0 0 4px rgba(31,127,220,.13),0 0 14px rgba(68,167,255,.8);animation:sequencePulse 1.8s ease-in-out infinite}.stage:hover .stage-label{opacity:1;color:white}
        @keyframes sequencePulse{50%{box-shadow:0 0 0 6px rgba(31,127,220,.08),0 0 18px rgba(68,167,255,.9)}}
        @media(max-width:1080px){.system-progress{right:8px;width:24px}.stage-label{display:none}}
        @media(max-width:700px){.system-progress{display:none}}
        @media(prefers-reduced-motion:reduce){.stage.active .stage-dot{animation:none}.sequence-fill{transition:none}}
      `}</style>
    </aside>
  );
}
