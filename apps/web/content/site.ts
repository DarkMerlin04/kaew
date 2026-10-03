export const site = {
  name: "KAEW",
  nameThai: "แก้ว",
  tagline: "Editions of fifty. One artist at a time.",
  description:
    "KAEW is an editions label. Each edition is one artwork by one artist, produced as fifty numbered glass pads, sold once.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Who made the site. The credit line closes the footer; the name goes in page metadata. */
  designer: "Raweeroj Thokaeo",
  credit: "UX/UI Design by Raweeroj Thokaeo, Coding with Claude.",
};

export const nav = [
  { href: "/edition", label: "The Edition" },
  { href: "/artist", label: "The Artist" },
  { href: "/object", label: "The Object" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
];

export const legalNav = [
  { href: "/legal/shipping", label: "Shipping" },
  { href: "/legal/returns", label: "Returns" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
];

export const shipping = {
  from: "Bangkok, Thailand",
  estimates: [
    { region: "Thailand", cost: "฿250", days: "2–4 business days" },
    { region: "Southeast Asia", cost: "$25–35", days: "5–10 business days" },
    { region: "United States", cost: "$35–60", days: "7–14 business days" },
    { region: "European Union / UK", cost: "$35–60", days: "7–14 business days" },
    { region: "Rest of world", cost: "$40–70", days: "10–21 business days" },
  ],
  note: "Every parcel is tracked and insured. The exact cost is calculated at checkout before you pay, so there is no surprise.",
};
