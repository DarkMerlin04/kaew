import { Figure } from "./Figure";

const LABEL = 23;

/** Ordinary glass carries an iron-oxide cast. Low-iron does not. */
export function GlassTint({ caption, ratio = "3 / 2", className = "" }: { caption?: string; ratio?: string; className?: string }) {
  const patches = ["#ffffff", "#2fbf7f", "#8a6a3c", "#101010"];
  const panel = (x: number, tinted: boolean, label: string) => (
    <g key={label}>
      {patches.map((c, i) => (
        <rect key={c} x={x} y={70 + i * 46} width={310} height={46} fill={c} />
      ))}
      {tinted && (
        <rect x={x} y={70} width={310} height={184} fill="#7fa06a" opacity={0.34} />
      )}
      <rect x={x} y={70} width={310} height={184} fill="none" stroke="var(--color-ink)" strokeWidth={1.6} />
      <text x={x} y={292} fontSize={LABEL} className="text-muted" fill="currentColor">
        {label}
      </text>
    </g>
  );
  return (
    <Figure caption={caption} ratio={ratio} className={className}>
      <svg viewBox="40 40 820 290" className="w-full" role="img" aria-label="The same four colours seen through ordinary glass and through low-iron glass. Ordinary glass adds a green cast.">
        {panel(90, true, "Ordinary glass")}
        {panel(470, false, "Low-iron glass")}
      </svg>
    </Figure>
  );
}

/** Polished glass throws one hard reflection; etched glass scatters. */
export function EtchDiagram({ caption, ratio = "3 / 2", className = "" }: { caption?: string; ratio?: string; className?: string }) {
  const jag: string[] = [];
  for (let x = 500; x <= 820; x += 16) jag.push(`${x},250 ${x + 8},242`);

  return (
    <Figure caption={caption} ratio={ratio} className={className}>
      <svg viewBox="40 40 820 300" className="w-full" role="img" aria-label="On polished glass a single ray reflects away as glare. On micro-etched glass the same ray scatters in many directions.">
        {/* polished */}
        <line x1={90} y1={250} x2={410} y2={250} stroke="var(--color-ink)" strokeWidth={2} />
        <line x1={150} y1={100} x2={250} y2={250} stroke="var(--color-muted)" strokeWidth={2} />
        <line x1={250} y1={250} x2={350} y2={100} stroke="var(--color-jade)" strokeWidth={2.4} />
        <text x={90} y={296} fontSize={LABEL} className="text-muted" fill="currentColor">
          Polished — one hard reflection
        </text>

        {/* etched */}
        <polyline points={jag.join(" ")} fill="none" stroke="var(--color-ink)" strokeWidth={2} />
        <line x1={560} y1={100} x2={660} y2={250} stroke="var(--color-muted)" strokeWidth={2} />
        {[
          [575, 128],
          [630, 96],
          [700, 100],
          [762, 134],
        ].map(([x, y]) => (
          <line key={`${x}`} x1={660} y1={250} x2={x} y2={y} stroke="var(--color-jade)" strokeWidth={1.8} />
        ))}
        <text x={500} y={296} fontSize={LABEL} className="text-muted" fill="currentColor">
          Micro-etched — scattered
        </text>
      </svg>
    </Figure>
  );
}

/** Annealed glass breaks into shards; tempered breaks into granules. */
export function TemperDiagram({ caption, ratio = "3 / 2", className = "" }: { caption?: string; ratio?: string; className?: string }) {
  /** Cracks radiating from one impact, into a few large pieces. */
  const cracks = [
    "230,190 168,96 150,80",
    "230,190 300,120 344,80",
    "230,190 344,168 356,150",
    "230,190 286,286 302,320",
    "230,190 150,268 116,320",
    "230,190 104,206 92,212",
  ];
  const granules = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 11; c++) {
      granules.push(
        <rect
          key={`${r}-${c}`}
          x={500 + c * 23 + ((r % 2) * 5)}
          y={86 + r * 24}
          width={19}
          height={20}
          rx={3}
          fill="none"
          stroke="var(--color-muted)"
          strokeWidth={1.3}
        />,
      );
    }
  }
  return (
    <Figure caption={caption} ratio={ratio} className={className}>
      <svg viewBox="40 40 820 356" className="w-full" role="img" aria-label="Annealed glass breaks into large shards; tempered glass breaks into small blunt granules.">
        <rect x={92} y={80} width={264} height={240} fill="none" stroke="var(--color-ink)" strokeWidth={1.8} />
        {cracks.map((pts) => (
          <polyline key={pts} points={pts} fill="none" stroke="var(--color-ink)" strokeWidth={1.8} />
        ))}
        <text x={92} y={358} fontSize={LABEL} className="text-muted" fill="currentColor">
          Annealed — shards
        </text>

        {granules}
        <text x={500} y={358} fontSize={LABEL} className="text-muted" fill="currentColor">
          Tempered — blunt granules
        </text>
      </svg>
    </Figure>
  );
}

/** Chamfered edge, and silicone across the whole base rather than four feet. */
export function EdgeBaseDiagram({ caption, ratio = "3 / 2", className = "" }: { caption?: string; ratio?: string; className?: string }) {
  return (
    <Figure caption={caption} ratio={ratio} className={className}>
      <svg viewBox="40 40 820 320" className="w-full" role="img" aria-label="The edge is chamfered and polished. The base is a full sheet of silicone rather than four corner feet.">
        {/* Chamfered edge, enlarged */}
        <polygon
          points="150,110 400,110 400,210 150,210 110,186 110,134"
          fill="#ffffff"
          stroke="var(--color-ink)"
          strokeWidth={2}
        />
        <path d="M110 134 L150 110" stroke="var(--color-jade)" strokeWidth={3} fill="none" />
        <path d="M110 186 L150 210" stroke="var(--color-jade)" strokeWidth={3} fill="none" />
        <text x={110} y={262} fontSize={LABEL} className="text-muted" fill="currentColor">
          Chamfered and polished
        </text>
        <text x={110} y={294} fontSize={LABEL} className="text-muted" fill="currentColor" opacity={0.75}>
          Your wrist rests here
        </text>

        {/* Four feet vs full coverage */}
        <rect x={520} y={92} width={150} height={132} fill="none" stroke="var(--color-rule)" strokeWidth={1.8} />
        {[
          [538, 110],
          [652, 110],
          [538, 206],
          [652, 206],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={8} fill="var(--color-rule)" />
        ))}
        <text x={520} y={252} fontSize={LABEL} className="text-muted" fill="currentColor" opacity={0.75}>
          Corner feet
        </text>

        <rect x={700} y={92} width={150} height={132} fill="var(--color-muted)" />
        <text x={700} y={252} fontSize={LABEL} className="text-muted" fill="currentColor">
          Full coverage
        </text>
      </svg>
    </Figure>
  );
}
