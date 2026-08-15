export const site = {
  nav: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Token", href: "#token" },
    { label: "How to Buy", href: "#buy" },
    { label: "Community", href: "#community" },
    { label: "FAQ", href: "#faq" },
  ],
  token: {
    network: "Arc",
    ticker: "Economic OS",
    contract: "0x5c7404118e3f028d202f9fb78da2681bd68482cb",
    supply: null,
    dex: "https://radardex.pro/#0x5c7404118e3f028d202f9fb78da2681bd68482cb",
  } as Record<string, string | null>,
  links: {
    community: "https://t.me/EconomicOS_EOS",
    x: "https://x.com/Economic_OS",
    dex: "https://radardex.pro/#0x5c7404118e3f028d202f9fb78da2681bd68482cb",
  } as Record<string, string | null>,
  sources: { arc: "https://www.arc.network/", circle: "https://www.circle.com/" },
};
