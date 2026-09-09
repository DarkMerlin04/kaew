/**
 * The single source of truth for the current edition.
 *
 * Price and edition size are still open (see project doc §1). They live here so
 * changing them is one line, not a search-and-replace across the site.
 */

export type EditionStatus = "waitlist" | "early-access" | "live" | "sold-out";

export const edition = {
  number: 1,
  /** Display name. The blade's second name, from the snow battle. */
  name: "Frost Fair Blade",
  nameZh: "冷豔鋸",
  year: 2026,

  /** UNRESOLVED — see project doc §1. Config-driven on purpose. */
  priceUSD: 89,
  runSize: 50,

  /**
   * Pre-launch. The site opens on the waitlist, before the pads exist.
   * Launch sequence: waitlist → artist announcement → 48h early access → public drop.
   */
  status: "waitlist" as EditionStatus,

  /**
   * The real remaining count comes from the API once the backend exists.
   * Until then this is the full run, because nothing has sold. Never inflate it.
   */
  remaining: 50,

  artist: {
    // TODO: not commissioned yet (project doc §7). Nothing here is announced.
    announced: false,
    name: "To be announced",
    location: "",
    bio: "",
    links: [] as { label: string; href: string }[],
  },

  /** One paragraph on the piece. Gallery label card, not ad copy. */
  statement: [
    "Guan Yu, holding the Green Dragon Crescent Blade. The figure is still. Nothing in the picture is moving except the fire, and the fire is behind him.",
    "The face is not the opera vermilion the character is usually given. It is deep bronze, mostly in shadow, lit from below by the green off the steel. The brows are level. The eyes are half-lidded and looking somewhere off the edge of the frame.",
    "The blade carries a rime of frost along its cutting edge. This is not invention: the weapon's second name is 冷豔鋸, Frost Fair Blade, from a battle fought in snow where the blood froze on the steel.",
  ],

  specs: [
    { label: "Size", value: "490 × 430 mm" },
    { label: "Glass", value: "Low-iron tempered, 5 mm" },
    { label: "Print", value: "UV-printed on the underside, selective white ink backing" },
    { label: "Surface", value: "Micro-etched" },
    { label: "Base", value: "Full-coverage silicone" },
    { label: "Edges", value: "Chamfered and polished" },
    { label: "Weight", value: "approx. 2.5 kg — 3.5 kg boxed" },
    { label: "Edition", value: "50, numbered and signed" },
    { label: "Made in", value: "Thailand" },
  ],

  inTheBox: [
    "The pad",
    "Certificate of authenticity, signed and numbered by the artist",
    "Microfibre cloth",
  ],
} as const;

export const priceDisplay = `$${edition.priceUSD} USD`;
export const editionLabel = `Edition ${["", "One", "Two", "Three", "Four", "Five"][edition.number] ?? edition.number}`;
