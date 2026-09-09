import Image from "next/image";
import artwork from "@/public/artwork/edition-one.jpg";
import { Figure } from "./Figure";
import { IMAGE_QUALITY } from "@/lib/image-policy";

/**
 * A real region of the artwork, enlarged.
 *
 * `zoom` is how many container widths the whole artwork spans, and `focus` is the
 * point of the artwork — as a fraction of its own width and height — that lands in
 * the middle of the frame. So focus {x: 0.13, y: 0.18} is the green fire, top left.
 */
export function ArtworkCrop({
  caption,
  zoom = 3,
  focus = { x: 0.5, y: 0.5 },
  ratio = "4 / 3",
  glass = true,
  tone = "light" as "light" | "dark",
  className = "",
}: {
  caption?: string;
  zoom?: number;
  focus?: { x: number; y: number };
  ratio?: string;
  glass?: boolean;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Figure caption={caption} ratio={ratio} tone={tone} pad={false} className={className}>
      <div className="relative h-full w-full overflow-hidden bg-night">
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            width: `${zoom * 100}%`,
            aspectRatio: "1429 / 1254",
            transform: `translate(-${focus.x * 100}%, -${focus.y * 100}%)`,
          }}
        >
          <Image
            src={artwork}
            alt=""
            fill
            quality={IMAGE_QUALITY.artwork}
            sizes="(max-width: 768px) 200vw, 1400px"
            className="object-cover"
          />
        </div>
        {glass && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 42%)",
            }}
          />
        )}
      </div>
    </Figure>
  );
}
