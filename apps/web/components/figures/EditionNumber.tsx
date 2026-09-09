import Image from "next/image";
import artwork from "@/public/artwork/edition-one.jpg";
import { Figure } from "./Figure";
import { edition } from "@/content/edition";
import { IMAGE_QUALITY } from "@/lib/image-policy";

/**
 * Shows how a number reads in the empty lower-right dark of the artwork.
 * `07` is a sample, not a reservation — numbers are assigned at random.
 */
export function EditionNumber({
  caption,
  ratio = "4 / 3",
  className = "",
}: {
  caption?: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <Figure caption={caption} ratio={ratio} tone="dark" pad={false} className={className}>
      <div className="relative flex h-full w-full items-end justify-end bg-night p-[9%]">
        <div className="absolute" style={{ left: "50%", top: "50%", width: "300%", aspectRatio: "1429 / 1254", transform: "translate(-82%, -70%)" }}>
          <Image src={artwork} alt="" fill quality={IMAGE_QUALITY.artwork} sizes="1200px" className="object-cover" />
        </div>
        {/* the polished chamfer catching a little light */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.14)" }}
        />
        <p
          className="relative text-[clamp(1.5rem,5vw,2.6rem)] font-light tracking-[0.22em]"
          style={{
            color: "rgba(255,255,255,0.52)",
            textShadow: "0 1px 0 rgba(255,255,255,0.16)",
          }}
        >
          07<span style={{ color: "rgba(255,255,255,0.3)" }}>/{edition.runSize}</span>
        </p>
      </div>
    </Figure>
  );
}
