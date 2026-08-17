export const site = {
  nav: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Build", href: "#build" },
    { label: "FAQ", href: "#faq" },
  ],
  token: {
    network: "Arc",
    ticker: "Economic OS",
    contract: "0x3f380813cb5045ff5b052583176ffa716e5cfec6",
    supply: null,
    dex: "https://radardex.pro/#0x3f380813cb5045ff5b052583176ffa716e5cfec6",
  } as Record<string, string | null>,
  links: {
    community: "https://t.me/EconomicOS_chat",
    x: "https://x.com/Economic_OS",
    dex: "https://radardex.pro/#0x3f380813cb5045ff5b052583176ffa716e5cfec6",
  } as Record<string, string | null>,
  sources: { arc: "https://www.arc.network/", circle: "https://www.circle.com/" },
};
