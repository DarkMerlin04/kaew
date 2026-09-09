/**
 * Top-down plan of the pad on a desk, drawn to true relative scale.
 *
 * The SVG user unit is one millimetre, so every rectangle here is the real
 * dimension of the thing it represents. If a size changes, change the number —
 * the drawing cannot drift out of scale.
 *
 * This is a drawing, not a stand-in for photography. It stays on the site after
 * the shoot, because it answers a question a photograph answers badly: how much
 * of the desk does this actually take up.
 */

const DESK = { w: 1400, d: 700 };
const PAD = { w: 490, d: 430, x: 760, y: 200 };
const KEYBOARD = { w: 360, d: 130, x: 340, y: 450 };
const MOUSE = { w: 70, d: 125, x: 1010, y: 400 };

const TICK = 12;

export function ScaleDrawing({ className = "" }: { className?: string }) {
  const padRight = PAD.x + PAD.w;
  const padBottom = PAD.y + PAD.d;
  const dimY = DESK.d - 20; // horizontal dimension line, inside the desk outline
  const dimX = padRight + 60; // vertical dimension line, right of the pad

  return (
    <figure className={className}>
      <svg
        viewBox="-40 -70 1560 840"
        className="w-full"
        role="img"
        aria-label={`Plan view: the pad is ${PAD.w} by ${PAD.d} millimetres, shown on a ${DESK.w} by ${DESK.d} millimetre desk beside a tenkeyless keyboard and a mouse, all at the same scale.`}
      >
        {/* Desk */}
        <rect
          x={0}
          y={0}
          width={DESK.w}
          height={DESK.d}
          fill="none"
          stroke="var(--color-rule)"
          strokeWidth={3}
        />
        <text x={0} y={-28} fontSize={26} className="text-muted" fill="currentColor">
          Desk, {DESK.w} × {DESK.d} mm
        </text>

        {/* Keyboard, tenkeyless */}
        <rect
          x={KEYBOARD.x}
          y={KEYBOARD.y}
          width={KEYBOARD.w}
          height={KEYBOARD.d}
          rx={8}
          fill="none"
          stroke="var(--color-rule)"
          strokeWidth={3}
        />

        {/* The pad — the subject, so it is the only filled shape */}
        <rect
          x={PAD.x}
          y={PAD.y}
          width={PAD.w}
          height={PAD.d}
          rx={6}
          fill="var(--color-wash)"
          stroke="var(--color-ink)"
          strokeWidth={4}
        />

        {/* Mouse, on the pad */}
        <rect
          x={MOUSE.x}
          y={MOUSE.y}
          width={MOUSE.w}
          height={MOUSE.d}
          rx={34}
          fill="none"
          stroke="var(--color-muted)"
          strokeWidth={3}
        />

        {/* Width dimension */}
        <g stroke="var(--color-muted)" strokeWidth={2}>
          <line x1={PAD.x} y1={dimY - TICK} x2={PAD.x} y2={dimY + TICK} />
          <line x1={padRight} y1={dimY - TICK} x2={padRight} y2={dimY + TICK} />
          <line x1={PAD.x} y1={dimY} x2={padRight} y2={dimY} />
        </g>
        <text
          x={(PAD.x + padRight) / 2}
          y={dimY - 20}
          fontSize={26}
          textAnchor="middle"
          className="text-muted"
          fill="currentColor"
        >
          {PAD.w} mm
        </text>

        {/* Depth dimension */}
        <g stroke="var(--color-muted)" strokeWidth={2}>
          <line x1={dimX - TICK} y1={PAD.y} x2={dimX + TICK} y2={PAD.y} />
          <line x1={dimX - TICK} y1={padBottom} x2={dimX + TICK} y2={padBottom} />
          <line x1={dimX} y1={PAD.y} x2={dimX} y2={padBottom} />
        </g>
        <text
          x={dimX + 34}
          y={(PAD.y + padBottom) / 2}
          fontSize={26}
          dominantBaseline="middle"
          className="text-muted"
          fill="currentColor"
        >
          {PAD.d} mm
        </text>
      </svg>

      <figcaption className="mt-6 flex flex-wrap gap-x-10 gap-y-2 text-sm text-muted">
        <span>Drawn to scale</span>
        <span>Keyboard shown tenkeyless, {KEYBOARD.w} × {KEYBOARD.d} mm</span>
        <span>Mouse {MOUSE.d} × {MOUSE.w} mm</span>
      </figcaption>
    </figure>
  );
}
