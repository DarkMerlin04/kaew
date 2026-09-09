import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { edition, priceDisplay } from "@/content/edition";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms">
      <h2>The edition</h2>
      <p>
        An edition is {edition.runSize} pieces and no more. We do not reprint a sold-out
        edition, in any form, at any size. Numbers are assigned at random when your order
        is confirmed; we do not reserve low numbers for anyone, including ourselves.
      </p>

      <h2>Price</h2>
      <p className="text-muted">
        {priceDisplay}, and it does not go on sale. There is no discount code field at
        checkout because there are no discount codes.
      </p>

      <h2>Orders</h2>
      <p className="text-muted">
        An order is confirmed when payment clears. If two orders arrive for the last
        unit, the one that clears first gets it and the other is refunded in full.
      </p>

      <h2>The artwork</h2>
      <p className="text-muted">
        You own the object. The artist keeps copyright in the image. Photograph it,
        show it, resell your copy if you like — but the image itself is not licensed
        for reproduction.
      </p>

      <h2>Colour</h2>
      <p className="text-muted">
        Printing on glass is not the same as a screen. We proof on the real material
        and get very close, but a photograph of the pad is a photograph, and your
        monitor is not calibrated to ours.
      </p>
    </LegalPage>
  );
}
