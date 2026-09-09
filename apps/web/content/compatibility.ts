/**
 * "Will my mouse work?" — the honest section, not a buried disclaimer.
 *
 * TODO: every entry below is marked `tested: false`. Compatibility testing has not
 * been done (project doc §7 / brief §10). Do not publish this list as fact until it has.
 * The `tested` flag is rendered on the page, so the site cannot quietly overclaim.
 */

export type Verdict = "good" | "caution" | "poor";

export interface MouseEntry {
  brand: string;
  model: string;
  sensor: string;
  verdict: Verdict;
  note?: string;
  tested: boolean;
}

export const sensorNote =
  "Glass gives an optical sensor very little to look at. Micro-etching gives it texture to track, which solves most of the problem — but not for every mouse. The PixArt PAW3395 and PAW3950 families are the most reliable on glass, and they are what most current flagship mice use.";

export const liftOffNote =
  "If the cursor jumps when you lift and reposition, set lift-off distance to its lowest setting in your mouse software and run the surface calibration if it has one. This fixes most of what people report as glass jitter.";

export const mice: MouseEntry[] = [
  { brand: "Logitech", model: "G Pro X Superlight 2", sensor: "HERO 2", verdict: "good", tested: false },
  { brand: "Razer", model: "Viper V3 Pro", sensor: "Focus Pro 35K (PAW3950)", verdict: "good", tested: false },
  { brand: "Razer", model: "DeathAdder V3 Pro", sensor: "Focus Pro 30K (PAW3395)", verdict: "good", tested: false },
  { brand: "Pulsar", model: "X2V2 / X2H", sensor: "PAW3395", verdict: "good", tested: false },
  { brand: "Endgame Gear", model: "OP1 8k", sensor: "PAW3395", verdict: "good", tested: false },
  { brand: "Lamzu", model: "Atlantis / Maya", sensor: "PAW3395", verdict: "good", tested: false },
  { brand: "Zowie", model: "EC2-CW", sensor: "PAW3395", verdict: "good", tested: false },
  { brand: "Glorious", model: "Model O 2 Pro", sensor: "PAW3395", verdict: "good", tested: false },
  { brand: "Logitech", model: "G502 X", sensor: "HERO 25K", verdict: "caution", note: "Usually fine once lift-off distance is lowered.", tested: false },
  { brand: "Razer", model: "Basilisk V3", sensor: "Focus+ 26K", verdict: "caution", note: "Reports vary. Lower lift-off distance first.", tested: false },
  { brand: "Apple", model: "Magic Mouse", sensor: "Proprietary", verdict: "poor", note: "Not designed for glass. Expect drift.", tested: false },
  { brand: "Any", model: "Laser or trackball", sensor: "Laser / optical trackball", verdict: "poor", note: "Laser sensors and glass do not agree.", tested: false },
];
