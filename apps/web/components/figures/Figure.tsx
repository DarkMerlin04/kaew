import type { ReactNode } from "react";

export function Figure({
  children,
  caption,
  ratio = "4 / 3",
  tone = "light",
  pad = true,
  className = "",
}: {
  children: ReactNode;
  caption?: string;
  ratio?: string;
  tone?: "light" | "dark";
  pad?: boolean;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <figure className={className}>
      <div
        className={`flex items-center justify-center overflow-hidden border ${
          dark ? "border-neutral-800 bg-[#0b0b0b]" : "border-rule bg-wash"
        } ${pad ? "p-6 sm:p-8" : ""}`}
        style={{ aspectRatio: ratio }}
      >
        {children}
      </div>
      {caption && (
        <figcaption className={`mt-3 text-sm ${dark ? "text-neutral-500" : "text-muted"}`}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
