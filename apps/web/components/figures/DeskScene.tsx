import Image from "next/image";
import artwork from "@/public/artwork/edition-one.jpg";
import { IMAGE_QUALITY } from "@/lib/image-policy";

/**
 * A flat lay — the desk seen from directly above — rendered entirely in CSS.
 * The wood, the light and every object are gradients and shadows, not a photograph.
 *
 * The frame is 1200 x 900 mm of desk and every object is placed and sized in real
 * millimetres, so the pad, keyboard, mouse and mug are all to scale relative to one
 * another. Shot from above deliberately: it is a real photographic style, and it
 * avoids faking a perspective that would read as an illustration.
 *
 * Stand-in for the daylight desk shot in the brief. Delete when the photographs arrive.
 */

const FRAME = { w: 1200, d: 900 };

/** Key widths in units, tenkeyless. Only the silhouette matters at this size. */
const KEY_ROWS: number[][] = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.5],
  [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.25],
  [2.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.75],
  [1.25, 1.25, 1.25, 6.25, 1.25, 1.25, 1.25, 1.25],
];
const pct = (v: number, of: number) => `${(v / of) * 100}%`;

function Box({
  x,
  y,
  w,
  h,
  children,
  style,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="absolute"
      style={{
        left: pct(x, FRAME.w),
        top: pct(y, FRAME.d),
        width: pct(w, FRAME.w),
        height: pct(h, FRAME.d),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function DeskScene({
  time = "day",
  className = "",
}: {
  time?: "day" | "night";
  className?: string;
}) {
  const night = time === "night";

  const shadow = (blur: number, alpha: number) =>
    `-${blur * 0.35}px ${blur * 0.45}px ${blur}px rgba(${night ? "0,0,0" : "62,44,20"},${alpha})`;

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{
        background: night
          ? "linear-gradient(150deg, #24211d 0%, #1a1815 55%, #131211 100%)"
          : "linear-gradient(150deg, #ece0cb 0%, #e2d3ba 52%, #d3c2a5 100%)",
      }}
    >
      {/* Wood grain, running across the frame */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          opacity: night ? 0.3 : 0.34,
          background:
            "repeating-linear-gradient(178deg, rgba(96,64,26,0.13) 0 1.5px, rgba(0,0,0,0) 1.5px 13px), repeating-linear-gradient(181deg, rgba(96,64,26,0.08) 0 3px, rgba(0,0,0,0) 3px 47px)",
        }}
      />
      {/* Plank seams */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          opacity: night ? 0.4 : 0.22,
          background:
            "repeating-linear-gradient(179deg, rgba(70,46,18,0.30) 0 1px, rgba(0,0,0,0) 1px 168px)",
        }}
      />

      {/* Mug */}
      <Box x={130} y={190} w={96} h={96}>
        <div
          className="relative h-full w-full"
          style={{ filter: `drop-shadow(${shadow(16, night ? 0.6 : 0.3)})` }}
        >
          {/* handle, seen from above */}
          <div
            className="absolute right-[-19%] top-[31%] h-[38%] w-[30%] rounded-full"
            style={{
              border: `3.5px solid ${night ? "#43403a" : "#efe9df"}`,
              borderLeftColor: "transparent",
            }}
          />
          {/* ceramic */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: night
                ? "radial-gradient(circle at 70% 24%, #4d4941, #262420 82%)"
                : "radial-gradient(circle at 70% 24%, #ffffff, #dbd4c7 84%)",
            }}
          />
          {/* rim */}
          <div
            className="absolute inset-[11%] rounded-full"
            style={{
              background: night ? "#38352f" : "#f4efe6",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.18)",
            }}
          />
          {/* coffee */}
          <div
            className="absolute inset-[19%] rounded-full"
            style={{
              background: night
                ? "radial-gradient(circle at 66% 26%, #2b221a, #15100c 78%)"
                : "radial-gradient(circle at 66% 26%, #7a563a, #38230f 80%)",
              boxShadow: "inset 0 2px 6px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      </Box>

      {/* Keyboard, tenkeyless */}
      <Box x={120} y={560} w={360} h={130}>
        <div
          className="flex h-full w-full flex-col justify-between"
          style={{
            borderRadius: 5,
            padding: "3.2%",
            gap: "2.4%",
            background: night
              ? "linear-gradient(160deg, #35342f, #1f1e1b)"
              : "linear-gradient(160deg, #fbf9f5, #ded8cd)",
            boxShadow: shadow(16, night ? 0.6 : 0.28),
          }}
        >
          {KEY_ROWS.map((row, r) => (
            <div key={r} className="flex flex-1" style={{ gap: "1.6%" }}>
              {row.map((weight, k) => (
                <span
                  key={k}
                  style={{
                    flexGrow: weight,
                    flexBasis: 0,
                    borderRadius: 1.5,
                    background: night
                      ? "linear-gradient(#413f3a, #2c2b27)"
                      : "linear-gradient(#ffffff, #eae4da)",
                    boxShadow: night
                      ? "0 0.5px 0 rgba(0,0,0,0.55)"
                      : "0 0.5px 0 rgba(125,105,74,0.22)",
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </Box>

      {/* The pad */}
      <Box x={560} y={380} w={490} h={430}>
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            borderRadius: 4,
            boxShadow: `${shadow(20, night ? 0.7 : 0.38)}, inset 0 0 0 1px rgba(255,255,255,0.12)`,
          }}
        >
          <Image src={artwork} alt="" fill quality={IMAGE_QUALITY.standard} sizes="800px" className="object-cover" />
          {/* Daylight across the etched surface, coming from the upper right */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: night
                ? "linear-gradient(228deg, rgba(120,150,255,0.14) 0%, rgba(255,255,255,0) 46%)"
                : "linear-gradient(228deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.02) 52%)",
            }}
          />
        </div>
      </Box>

      {/* Mouse, on the pad */}
      <Box x={800} y={500} w={70} h={125}>
        <div
          className="h-full w-full"
          style={{
            borderRadius: "48% 48% 42% 42% / 34% 34% 28% 28%",
            background: night
              ? "radial-gradient(120% 90% at 72% 20%, #56565d, #1c1c20 74%)"
              : "radial-gradient(120% 90% at 72% 20%, #ffffff, #bfbab2 76%)",
            boxShadow: shadow(12, night ? 0.75 : 0.45),
          }}
        />
      </Box>

      {/* Daylight falling across the whole frame from the upper right */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: night
            ? "radial-gradient(74% 66% at 86% 8%, rgba(90,120,255,0.13), rgba(0,0,0,0) 72%)"
            : "radial-gradient(78% 70% at 86% 6%, rgba(255,253,246,0.62), rgba(255,253,246,0) 74%)",
          mixBlendMode: night ? "screen" : "soft-light",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: night
            ? "radial-gradient(120% 95% at 50% 46%, rgba(0,0,0,0) 34%, rgba(0,0,0,0.72) 100%)"
            : "radial-gradient(120% 95% at 55% 40%, rgba(0,0,0,0) 44%, rgba(60,42,20,0.26) 100%)",
        }}
      />
    </div>
  );
}
