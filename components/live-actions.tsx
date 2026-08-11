"use client";

import { Copy, ExternalLink, Send } from "lucide-react";
import { useState } from "react";
import { site } from "../lib/config";
import styles from "./live-actions.module.css";

export function LiveActions() {
  const [copied, setCopied] = useState(false);
  const copyContract = async () => {
    if (!site.token.contract) return;
    await navigator.clipboard.writeText(site.token.contract);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <section className={styles.bar} aria-label="$EOS live links">
      <span className={styles.label}>$EOS LIVE</span>
      <a href={site.links.dex ?? "#"} target="_blank" rel="noreferrer" className={styles.primary}>Buy $EOS <ExternalLink size={12} /></a>
      <a href={site.links.community ?? "#"} target="_blank" rel="noreferrer" className={styles.secondary}><Send size={12} /> Telegram</a>
      <a href={site.links.x ?? "#"} target="_blank" rel="noreferrer" className={styles.secondary}>X / Twitter <ExternalLink size={12} /></a>
      <button onClick={copyContract} className={styles.copy}><Copy size={12} /> {copied ? "Copied" : "Copy CA"}</button>
      <span className={styles.ca}>{site.token.contract}</span>
    </section>
  );
}

export function TokenLiveActions() {
  return (
    <section className={styles.tokenPanel} aria-label="$EOS trading links">
      <div className={styles.tokenInner}>
        <a href={site.links.dex ?? "#"} target="_blank" rel="noreferrer" className={styles.primary}>Buy $EOS <ExternalLink size={12} /></a>
        <a href={site.links.dex ?? "#"} target="_blank" rel="noreferrer" className={styles.secondary}>View on RadarDEX <ExternalLink size={12} /></a>
      </div>
    </section>
  );
}

export function CommunityLiveActions() {
  return (
    <section className={styles.community} aria-label="$EOS community links">
      <div className={styles.communityInner}>
        <a href={site.links.community ?? "#"} target="_blank" rel="noreferrer" className={styles.primary}><Send size={12} /> Join Telegram</a>
        <a href={site.links.x ?? "#"} target="_blank" rel="noreferrer" className={styles.secondary}>Follow on X <ExternalLink size={12} /></a>
      </div>
    </section>
  );
}
