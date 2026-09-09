import Link from "next/link";
import { Container } from "@/components/Container";
import { Plate } from "@/components/Plate";
import { Remaining } from "@/components/Remaining";
import { BuyAction } from "@/components/BuyAction";
import { edition, editionLabel, priceDisplay } from "@/content/edition";

export default function HomePage() {
  return (
    <>
      {/* Full-bleed artwork. This is the only colour on the page. */}
      <section>
        <Plate
          label="Full-bleed artwork — Edition One, at full width. The picture carries the page."
          ratio="490 / 300"
          tone="dark"
          className="border-x-0 border-t-0"
        />
      </section>

      <Container className="py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{editionLabel}</p>
            <h1 className="mt-4 text-title font-normal tracking-tight">
              {edition.name}
              <span className="ml-4 align-middle text-lg text-muted">{edition.nameZh}</span>
            </h1>
            <p className="mt-3 text-muted">
              {edition.artist.announced ? edition.artist.name : "Artist announced soon"} · {priceDisplay}
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <Remaining />
            <BuyAction />
          </div>
        </div>
      </Container>

      <Container className="grid gap-8 pb-8 md:grid-cols-3">
        <Plate label="Desk, daylight. Light wood, one mouse, one keyboard, a mug." />
        <Plate label="Hand at rest in the lower-right dark of the artwork." />
        <Plate label="Macro — print detail seen through 5 mm of glass." />
      </Container>

      <Container className="py-20">
        <div className="measure">
          <p className="text-lede leading-relaxed">
            KAEW is an editions label. Each edition is one artwork by one artist,
            printed under glass, made fifty times and never again. When it sells out
            it is not reprinted. A different artist makes the next one.
          </p>
          <p className="mt-6 text-muted">
            แก้ว — Thai for glass, and for something precious.
          </p>
          <Link href="/about" className="link-underline mt-8 inline-block text-sm">
            About the label
          </Link>
        </div>
      </Container>
    </>
  );
}
