"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "../lib/config";

function Mark() { return <span className="mark"><i /><i /><i /></span> }
export function Header() {
  const [scrolled, setScrolled] = useState(false), [open, setOpen] = useState(false);
  useEffect(() => { const f=()=>setScrolled(scrollY>24); addEventListener("scroll",f,{passive:true}); f(); return()=>removeEventListener("scroll",f)},[]);
  return <header className={`${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}><a href="#top" className="brand"><Mark />Economic OS</a><nav aria-label="Main navigation">{site.nav.map(n=><a key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}</a>)}</nav><a href="#community" className="header-cta">Enter the OS <span>↗</span></a><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></header>
}
export function Footer() { return <footer><div><a className="brand" href="#top"><Mark />Economic OS</a><strong>$EOS</strong></div><nav>{site.nav.map(n=><a key={n.href} href={n.href}>{n.label}</a>)}</nav><p>“$EOS is an independent community meme token inspired by the Economic OS narrative. It is not affiliated with, issued by, sponsored by, or endorsed by Circle or Arc.”</p><small>INDEPENDENT CULTURE LAYER / 2026</small></footer> }
