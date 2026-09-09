import { Figure } from "./Figure";

/**
 * The construction of the pad, cut through the edge.
 *
 * Layer thicknesses are drawn for legibility, not to scale: the glass is 5 mm and
 * the ink layers are microns, which cannot share one drawing at true scale.
 */
const L = 110;
const R = 760;
const GLASS_TOP = 96;
const GLASS_BOTTOM = 212;
const INK_BOTTOM = 223;
const WHITE_BOTTOM = 240;
const WHITE_RIGHT = 430;
const SILICONE_BOTTOM = 266;

const teeth: string[] = [];
for (let x = L; x <= R; x += 15) teeth.push(`${x},${GLASS_TOP} ${x + 7.5},${GLASS_TOP - 5}`);

const legend = [
  { fill: "#ffffff", stroke: "var(--color-ink)", text: "Micro-etched surface" },
  { fill: "#ffffff", stroke: "var(--color-ink)", text: "Low-iron tempered glass, 5 mm" },
  { fill: "var(--color-jade)", stroke: "var(--color-jade)", text: "UV colour, printed on the underside" },
  { fill: "#ffffff", stroke: "var(--color-ink)", text: "White ink, only where the picture needs it" },
  { fill: "var(--color-muted)", stroke: "var(--color-muted)", text: "Full-coverage silicone" },
];

export function CrossSection({
  caption,
  ratio = "4 / 3",
  className = "",
}: {
  caption?: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <Figure caption={caption} ratio={ratio} className={className}>
      <svg
        viewBox="60 60 840 560"
        className="w-full"
        role="img"
        aria-label="Cross-section of the pad: micro-etched glass surface, 5 mm low-iron tempered glass, UV colour printed on the underside, selective white ink backing, full-coverage silicone base."
      >
        <polygon
          points={`${L},${GLASS_TOP} ${R},${GLASS_TOP} ${R},${GLASS_BOTTOM} ${L},${GLASS_BOTTOM} 88,${GLASS_BOTTOM - 26} 88,${GLASS_TOP + 26}`}
          fill="#ffffff"
          stroke="var(--color-ink)"
          strokeWidth={2}
        />
        <polyline points={teeth.join(" ")} fill="none" stroke="var(--color-ink)" strokeWidth={1.6} />

        <rect x={L} y={GLASS_BOTTOM} width={R - L} height={INK_BOTTOM - GLASS_BOTTOM} fill="var(--color-jade)" />
        <rect
          x={L}
          y={INK_BOTTOM}
          width={WHITE_RIGHT - L}
          height={WHITE_BOTTOM - INK_BOTTOM}
          fill="#ffffff"
          stroke="var(--color-ink)"
          strokeWidth={1.4}
        />
        <rect x={L} y={WHITE_BOTTOM} width={R - L} height={SILICONE_BOTTOM - WHITE_BOTTOM} fill="var(--color-muted)" />

        {/* 5 mm across the glass */}
        <g stroke="var(--color-muted)" strokeWidth={1.8}>
          <line x1={794} y1={GLASS_TOP} x2={794} y2={GLASS_BOTTOM} />
          <line x1={786} y1={GLASS_TOP} x2={802} y2={GLASS_TOP} />
          <line x1={786} y1={GLASS_BOTTOM} x2={802} y2={GLASS_BOTTOM} />
        </g>
        <text x={812} y={GLASS_TOP + 68} fontSize={22} className="text-muted" fill="currentColor">
          5 mm
        </text>

        {/* Where the white ink stops */}
        <line
          x1={WHITE_RIGHT}
          y1={INK_BOTTOM}
          x2={WHITE_RIGHT}
          y2={330}
          stroke="var(--color-rule)"
          strokeWidth={1.5}
        />

        {/* Legend */}
        {legend.map((row, i) => (
          <g key={row.text} transform={`translate(110, ${368 + i * 52})`}>
            <rect width={38} height={20} fill={row.fill} stroke={row.stroke} strokeWidth={1.6} />
            <text x={60} y={16} fontSize={23} className="text-muted" fill="currentColor">
              {row.text}
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}
