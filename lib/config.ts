export const site = {
  nav: [{ label: "Vision", href: "#vision" }, { label: "Lore", href: "#lore" }, { label: "$EOS", href: "#token" }, { label: "Community", href: "#community" }],
  token: { network: "Arc", ticker: "$EOS", contract: null, supply: null, dex: null } as Record<string, string | null>,
  links: { community: null, x: null, dex: null } as Record<string, string | null>,
  sources: { arc: "https://www.arc.network/", circle: "https://www.circle.com/" },
};
