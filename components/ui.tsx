"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .65 }}>{children}</motion.div>;
}
export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow"><span />{children}</p> }
export function Button({ children, href, secondary = false, disabled = false }: { children: ReactNode; href?: string | null; secondary?: boolean; disabled?: boolean }) {
  const cls = `button ${secondary ? "button-secondary" : ""} ${disabled || !href ? "disabled" : ""}`;
  return href && !disabled ? <a className={cls} href={href}>{children}<ArrowUpRight size={15} /></a> : <span className={cls} aria-disabled="true">{children}</span>;
}
export function SectionTitle({ label, title, copy }: { label: string; title: string; copy?: string }) { return <div className="section-head"><Eyebrow>{label}</Eyebrow><h2>{title}</h2>{copy && <p>{copy}</p>}</div> }
