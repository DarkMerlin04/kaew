import Link from "next/link";
import { Container } from "@/components/Container";
import { Figure } from "@/components/figures/Figure";
import { DeskScene } from "@/components/figures/DeskScene";
import { ArtworkCrop } from "@/components/figures/ArtworkCrop";
import { CrossSection } from "@/components/figures/CrossSection";
import { PadMock } from "@/components/PadMock";
import { Remaining } from "@/components/Remaining";
import { BuyAction } from "@/components/BuyAction";
import { edition, editionLabel, priceDisplay } from "@/content/edition";

export default function HomePage() {
  return (
    <>
      {/* Full-bleed artwork. This is the only colour on the page. */}
      <section>
        <PadMock variant="bleed" priority />
      </section>

      <Container className="py-(--spacing-section)">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{editionLabel}</p>
            <h1 className="display mt-6">
              {edition.name}
              <span className="ml-5 align-middle text-[0.26em] tracking-normal text-muted">
                {edition.nameZh}
              </span>
            </h1>
            <p className="mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-2 text-muted">
              <span className="lede">
                {edition.artist.announced ? edition.artist.name : "Artist announced soon"}
              </span>
              <span className="figure-serif text-[1.75rem] leading-none text-ink">
                {priceDisplay}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 md:items-end">
            <Remaining />
            <BuyAction />
          </div>
        </div>
      </Container>

      <Container className="grid gap-10 pb-8 md:grid-cols-3">
        <Figure caption="On a desk, daylight." pad={false}>
          <DeskScene />
        </Figure>
        <ArtworkCrop
          caption="Print detail, seen through the glass."
          zoom={3.2}
          focus={{ x: 0.17, y: 0.24 }}
        />
        <CrossSection caption="Sealed under 5 mm of low-iron glass." />
      </Container>

      {/* The object itself, once the picture has done its work. */}
      <section className="mt-16 border-y border-rule bg-wash">
        <Container className="py-20">
          <div className="mx-auto max-w-[52rem]">
            <PadMock variant="angled" />
            <div className="mt-10 flex flex-wrap items-baseline justify-between gap-4">
              <p className="eyebrow">The object</p>
              <p className="text-muted">
                490 × 430 mm · 5 mm low-iron tempered glass · 2.5 kg
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-(--spacing-section)">
        <div className="measure-wide">
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
