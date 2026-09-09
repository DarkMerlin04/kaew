import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Plate } from "@/components/Plate";
import { PadMock } from "@/components/PadMock";
import { ScaleDrawing } from "@/components/ScaleDrawing";
import { Remaining } from "@/components/Remaining";
import { BuyAction } from "@/components/BuyAction";
import { edition, editionLabel, priceDisplay } from "@/content/edition";
import { mice, sensorNote, liftOffNote, type Verdict } from "@/content/compatibility";
import { shipping } from "@/content/site";

export const metadata: Metadata = {
  title: `${editionLabel} — ${edition.name}`,
  description: edition.statement[0],
};

const verdictLabel: Record<Verdict, string> = {
  good: "Works",
  caution: "Usually works",
  poor: "Not recommended",
};

const verdictClass: Record<Verdict, string> = {
  good: "text-jade",
  caution: "text-ink",
  poor: "text-muted",
};

export default function EditionPage() {
  const untested = mice.some((m) => !m.tested);

  return (
    <>
      <PadMock variant="bleed" priority />

      <Container className="py-16">
        <div className="grid gap-16 md:grid-cols-[1fr_20rem]">
          <div>
            <p className="eyebrow">{editionLabel}</p>
            <h1 className="mt-4 text-title font-normal tracking-tight">
              {edition.name} <span className="text-muted">{edition.nameZh}</span>
            </h1>
            <div className="measure mt-8 space-y-5 text-lede leading-relaxed">
              {edition.statement.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <Link href="/artist" className="link-underline mt-8 inline-block text-sm">
              About the artist
            </Link>
          </div>

          {/* Buy column — price, count, guarantee, shipping, all in one place. */}
          <aside id="buy" className="h-fit border border-rule p-8 md:sticky md:top-24">
            <p className="text-title font-normal">{priceDisplay}</p>
            <Remaining className="mt-2" />
            <BuyAction className="mt-6 w-full text-center" />
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="eyebrow">Damage guarantee</dt>
                <dd className="mt-1 text-muted">
                  If it arrives broken we replace it. You do not need to send it back.
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Shipping</dt>
                <dd className="mt-1 text-muted">
                  From {shipping.from}. $35–60 to the US and EU for a 3.5 kg parcel,
                  tracked and insured. Calculated before you pay.
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Your number</dt>
                <dd className="mt-1 text-muted">
                  Assigned at random from the fifty. We do not hold back low numbers.
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>

      <Container>
        <PadMock variant="flat" />
        <p className="mt-4 text-sm text-muted">
          Direction art. The finished edition is drawn by the commissioned artist.
        </p>
      </Container>

      <Container className="mt-16 grid gap-8 md:grid-cols-2">
        <Plate label="Macro — ink under glass, showing depth." ratio="4 / 3" />
        <Plate label="Edge profile — 5 mm, chamfered and polished." ratio="4 / 3" />
        <Plate label="Numbering and certificate." ratio="4 / 3" />
        <Plate label="Full-coverage silicone base, pad turned over." ratio="4 / 3" />
      </Container>

      {/* Specifications */}
      <Container className="py-24">
        <h2 className="eyebrow">Specifications</h2>
        <dl className="mt-8 max-w-2xl">
          {edition.specs.map((s) => (
            <div key={s.label} className="flex justify-between gap-8 border-t border-rule py-4">
              <dt className="text-muted">{s.label}</dt>
              <dd className="text-right">{s.value}</dd>
            </div>
          ))}
        </dl>

        <h2 className="eyebrow mt-16">On a desk</h2>
        <ScaleDrawing className="mt-8 max-w-3xl" />

        <h2 className="eyebrow mt-16">In the box</h2>
        <ul className="mt-6 max-w-2xl space-y-3">
          {edition.inTheBox.map((item) => (
            <li key={item} className="border-t border-rule pt-3">
              {item}
            </li>
          ))}
        </ul>
      </Container>

      {/* Compatibility — stated openly, not buried */}
      <section className="border-y border-rule bg-wash">
        <Container className="py-24">
          <h2 className="text-title font-normal tracking-tight">Will my mouse work?</h2>
          <div className="measure mt-6 space-y-5 leading-relaxed">
            <p>{sensorNote}</p>
            <p>{liftOffNote}</p>
          </div>

          {untested && (
            <p className="mt-8 max-w-2xl border-l-2 border-jade pl-4 text-sm text-muted">
              Testing is still in progress. The list below is what we expect from the
              sensors, not what we have measured. It will be replaced with tested
              results before the edition goes on sale.
            </p>
          )}

          <table className="mt-10 w-full max-w-3xl text-sm">
            <thead>
              <tr className="border-b border-rule text-left">
                <th className="eyebrow py-3 font-medium">Mouse</th>
                <th className="eyebrow py-3 font-medium">Sensor</th>
                <th className="eyebrow py-3 text-right font-medium">On glass</th>
              </tr>
            </thead>
            <tbody>
              {mice.map((m) => (
                <tr key={`${m.brand}-${m.model}`} className="border-b border-rule align-top">
                  <td className="py-4 pr-4">
                    {m.brand} {m.model}
                    {m.note && <span className="mt-1 block text-muted">{m.note}</span>}
                  </td>
                  <td className="py-4 pr-4 text-muted">{m.sensor}</td>
                  <td className={`py-4 text-right ${verdictClass[m.verdict]}`}>
                    {verdictLabel[m.verdict]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </section>

      {/* Dark section — the proof shots. Bright above, dark here, and it stops here. */}
      <section className="bg-night text-neutral-300">
        <Container className="py-24">
          <h2 className="eyebrow text-neutral-500">In a dark room</h2>
          <p className="measure mt-4 text-neutral-400">
            The green is printed under the glass, so it holds its colour under coloured
            light instead of taking it on.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <Plate label="RGB-lit desk, low light." tone="dark" />
            <Plate label="Close, raking light across the etched surface." tone="dark" />
            <Plate label="Whole desk at night." tone="dark" />
          </div>
        </Container>
      </section>
    </>
  );
}
