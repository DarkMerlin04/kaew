import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = { title: "Care & Warranty" };

export default function CarePage() {
  return (
    <Container className="py-24">
      <h1 className="title">Care &amp; Warranty</h1>

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        <section>
          <h2 className="eyebrow">Cleaning</h2>
          <div className="measure mt-4 space-y-4 leading-relaxed">
            <p>
              The microfibre cloth in the box, dry, handles almost everything. For
              fingerprints, breathe on the glass and wipe. For anything greasier, a
              little isopropyl alcohol on the cloth — not on the glass.
            </p>
            <p className="text-muted">
              Avoid ammonia glass cleaners and abrasive pads. Neither will reach the
              artwork, which is sealed underneath, but both will dull the etched surface
              you track on.
            </p>
          </div>
        </section>

        <section>
          <h2 className="eyebrow">What damages it</h2>
          <div className="measure mt-4 space-y-4 leading-relaxed">
            <p>
              Tempered glass is strong across its face and weak at its edges. A knock
              against a hard corner, or a heavy object dropped on it, is what breaks
              these. Do not use it as a cutting surface or a coaster for something hot.
            </p>
            <p className="text-muted">Keep it flat. Do not lean it against a wall.</p>
          </div>
        </section>

        <section className="border border-jade p-8">
          <h2 className="eyebrow text-jade">Damage guarantee</h2>
          <div className="measure mt-4 space-y-4 leading-relaxed">
            <p>
              If it arrives broken, we replace it. Send a photograph, keep the pieces
              or bin them — we do not ask for it back, and you do not pay shipping.
            </p>
            <p className="text-muted">
              This covers transit damage. It is not a warranty against dropping it later,
              though if something goes wrong that looks like a fault in the glass or the
              print, write to us.
            </p>
          </div>
        </section>

        <section>
          <h2 className="eyebrow">Returns</h2>
          <div className="measure mt-4 space-y-4 leading-relaxed">
            <p>
              Fourteen days, unopened and unused, for any reason. You pay return
              shipping. Once it is back with us and intact, we refund the full price.
            </p>
            <p className="text-muted">
              A returned unit goes back into the edition, so the number is released and
              the count on the site goes back up by one.
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}
