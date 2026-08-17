"use client";

import { useEffect, useState } from "react";

const stages = [
  { selector: "#top", message: "booting economic layer..." },
  { selector: "#about", message: "loading context..." },
  { selector: ".economy-builder", message: "routing value..." },
  { selector: "#faq", message: "verifying signal..." },
];

export function SystemExperience() {
  const [message, setMessage] = useState("booting economic layer...");
  const [visible, setVisible] = useState(true);
  const [metrics, setMetrics] = useState({ block: 1842, flow: 67, routes: 3 });

  useEffect(() => {
    let last = -1;
    let hideTimer: number | undefined;
    const update = () => {
      const anchor = window.scrollY + window.innerHeight * .48;
      let current = 0;
      stages.forEach((stage, index) => {
        const el = document.querySelector(stage.selector) as HTMLElement | null;
        if (el && anchor >= el.offsetTop) current = index;
      });
      if (current !== last) {
        last = current;
        setMessage(stages[current].message);
        setVisible(true);
        if (hideTimer) window.clearTimeout(hideTimer);
        hideTimer = window.setTimeout(() => setVisible(false), 1800);
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => { window.removeEventListener("scroll", update); if (hideTimer) window.clearTimeout(hideTimer); };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setMetrics((m) => ({ block: m.block + 1, flow: 61 + Math.floor(Math.random() * 28), routes: 3 + Math.floor(Math.random() * 5) })), 2400);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
      document.documentElement.style.setProperty("--mouse-shift-x", `${(event.clientX / window.innerWidth - .5) * 10}px`);
      document.documentElement.style.setProperty("--mouse-shift-y", `${(event.clientY / window.innerHeight - .5) * 10}px`);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <>
    <div className="network-heartbeat" aria-label="Economic OS system status"><span><i /> SYSTEM ONLINE</span><b>BLOCK {metrics.block}</b><b>FLOW {metrics.flow}%</b><b>ROUTES {metrics.routes}</b></div>
    <div className={`boot-message ${visible ? "show" : ""}`}><i />{message}</div>
  </>;
}
