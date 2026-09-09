import localFont from "next/font/local";

/**
 * Self-hosted, no network at build or runtime, no request to Google.
 *
 * Three faces, each with one job:
 *
 *   Instrument Serif  display — edition names and page titles. High contrast,
 *                     editorial. This is the face that makes the site read as a
 *                     gallery rather than a shop.
 *   Anuphan           everything else. A loopless Thai + Latin family built on
 *                     IBM Plex, so แก้ว sets in the same voice as the English
 *                     instead of falling back to whatever the device has.
 *   Noto Serif TC     subset to the eight characters the site actually uses
 *                     (冷豔鋸關羽偃月刀). 1.35 MB of font reduced to 3 KB.
 *
 * Anuphan ships as separate Latin and Thai cuts of one variable font; they
 * cannot be merged (fontTools cannot merge variable fonts), so they are declared
 * separately and stacked. The browser picks per glyph, which is what a font stack
 * is for. All four files together are 78 KB.
 *
 * All three are SIL Open Font License — free to use commercially and to
 * redistribute, licences alongside the files. If a licensed face is bought later
 * (Söhne, Suisse Int'l, GT America), it replaces one entry here and nothing else.
 */

export const displaySerif = localFont({
  src: "./fonts/instrument-serif.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-display",
  // Instrument Serif runs small and narrow next to the fallback; these numbers
  // keep the fallback close enough that swapping in does not shift the page.
  fallback: ["Iowan Old Style", "Palatino", "Georgia", "serif"],
  adjustFontFallback: "Times New Roman",
});

export const textSans = localFont({
  src: "./fonts/anuphan-latin.woff2",
  weight: "100 700",
  style: "normal",
  display: "swap",
  variable: "--font-sans",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
  adjustFontFallback: "Arial",
});

export const textSansThai = localFont({
  src: "./fonts/anuphan-thai.woff2",
  weight: "100 700",
  style: "normal",
  display: "swap",
  variable: "--font-sans-thai",
  fallback: ["Noto Sans Thai", "system-ui", "sans-serif"],
  adjustFontFallback: false,
});

export const cjkSerif = localFont({
  src: "./fonts/kaew-cjk-serif.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-cjk",
  fallback: ["Songti TC", "Songti SC", "Noto Serif CJK TC", "serif"],
  adjustFontFallback: false,
});

export const fontVariables = [
  displaySerif.variable,
  textSans.variable,
  textSansThai.variable,
  cjkSerif.variable,
].join(" ");
