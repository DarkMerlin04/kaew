import { Figure } from "./Figure";

export function SiliconeBase({
  caption,
  ratio = "4 / 3",
  className = "",
}: {
  caption?: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <Figure caption={caption} ratio={ratio} pad={false} className={className}>
      <div className="flex h-full w-full items-center justify-center bg-wash p-[8%]">
        <div
          className="relative flex w-full items-center justify-center"
          style={{
            aspectRatio: "490 / 430",
            borderRadius: 5,
            background: "linear-gradient(150deg, #35342f, #24231f 60%, #1b1a17)",
            boxShadow: "0 14px 28px -16px rgba(40,30,14,0.6), inset 0 1px 0 rgba(255,255,255,0.07)",
          }}
        >
          {/* matte silicone texture */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              borderRadius: 5,
              opacity: 0.5,
              background:
                "repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.045) 0 1px, rgba(0,0,0,0) 1px 4px)",
            }}
          />
          <p
            className="text-[clamp(0.6rem,1.6vw,0.9rem)] tracking-[0.34em]"
            style={{ color: "rgba(255,255,255,0.28)", textShadow: "0 1px 0 rgba(255,255,255,0.08)" }}
          >
            KAEW
          </p>
        </div>
      </div>
    </Figure>
  );
}
