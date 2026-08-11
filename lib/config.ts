export const site = {
  nav: [{ label: "Vision", href: "#vision" }, { label: "Lore", href: "#lore" }, { label: "$EOS", href: "#token" }, { label: "Community", href: "#community" }],
  token: {
    network: "Arc",
    ticker: "$EOS",
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
