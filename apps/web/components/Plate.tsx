/**
 * Photography placeholder.
 *
 * Nothing has been shot yet (brief §10). Rather than filling the site with stock
 * images that would set the wrong direction, each image slot states which shot
 * belongs there. Replace with <Image /> as the photography arrives.
 */
export function Plate({
  label,
  ratio = "4 / 3",
  tone = "light",
  className = "",
}: {
  label: string;
  ratio?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <figure
      className={`flex items-center justify-center border ${
        dark ? "border-neutral-800 bg-[#141414]" : "border-rule bg-wash"
      } ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <figcaption
        className={`eyebrow max-w-[24rem] px-6 text-center ${dark ? "text-neutral-500" : ""}`}
      >
        {label}
      </figcaption>
    </figure>
  );
}
