import Image from "next/image";
import artwork from "@/public/artwork/edition-one.jpg";

/**
 * Renders the pad as an object rather than as a picture.
 *
 * The image is direction art, not the finished edition — see the project brief.
 * Everything around it (edge highlight, contact shadow) is CSS standing in for a
 * photograph. Replace this component's internals with a real product photograph
 * once the shoot happens; the call sites should not need to change.
 */
export function PadMock({
  variant = "flat",
  priority = false,
  className = "",
}: {
  variant?: "flat" | "bleed" | "angled";
  priority?: boolean;
  className?: string;
}) {
  if (variant === "bleed") {
    return (
      <div className={`relative aspect-[490/430] w-full bg-night ${className}`}>
        <Image
          src={artwork}
          alt="Edition One — Guan Yu holding the Green Dragon Crescent Blade, jade green on black"
          fill
          priority={priority}
          quality={90}
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
        />
      </div>
    );
  }

  const pad = (
    <div
      className="relative aspect-[490/430] w-full overflow-hidden rounded-[6px] bg-night"
      style={{
        // Hairline along the polished chamfer, the 5 mm edge, and the contact shadow.
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(255,255,255,0.05), 0 3px 0 #060606, 0 22px 45px -18px rgba(0,0,0,0.5)",
      }}
    >
      <Image
        src={artwork}
        alt="Edition One — Guan Yu holding the Green Dragon Crescent Blade, jade green on black"
        fill
        priority={priority}
        quality={90}
        sizes="(max-width: 768px) 100vw, 900px"
        className="object-cover"
        placeholder="blur"
      />
      {/* The micro-etched surface, catching a little light off-axis. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0) 38%)",
        }}
      />
    </div>
  );

  if (variant === "angled") {
    // rotateX about the bottom edge leaves dead space above the pad equal to
    // height * (1 - cos 34deg). Pull it back so the caller's spacing is the
    // spacing you actually see.
    return (
      <div className={className} style={{ perspective: "1800px" }}>
        <div
          style={{
            transform: "rotateX(34deg)",
            transformOrigin: "50% 100%",
            marginTop: "-14.5%",
          }}
        >
          {pad}
        </div>
      </div>
    );
  }

  return <div className={className}>{pad}</div>;
}
