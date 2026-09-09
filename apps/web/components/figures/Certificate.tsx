import { Figure } from "./Figure";
import { edition, editionLabel } from "@/content/edition";

export function Certificate({
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
      <div
        className="flex h-full w-full flex-col justify-between border border-rule bg-white p-[7%]"
        style={{ boxShadow: "0 10px 24px -14px rgba(60,44,22,0.35)" }}
      >
        <div>
          <p className="eyebrow">Certificate of authenticity</p>
          <p className="mt-[6%] text-[1.05rem] tracking-[0.28em]">KAEW</p>
        </div>

        <div>
          <p className="text-[clamp(0.95rem,2.2vw,1.35rem)]">
            {edition.name} <span className="text-muted">{edition.nameZh}</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            {editionLabel} · Number 07 of {edition.runSize}
          </p>
        </div>

        <div className="flex items-end justify-between gap-6">
          <svg viewBox="0 0 200 44" className="h-[26px] w-[52%]" aria-hidden>
            <path
              d="M6 34 C 26 6, 40 40, 58 20 S 88 4, 104 26 S 132 40, 150 16 C 162 2, 178 22, 194 12"
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
          <p className="text-sm text-muted">{edition.year}</p>
        </div>
      </div>
    </Figure>
  );
}
