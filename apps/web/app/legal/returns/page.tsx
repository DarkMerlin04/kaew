import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Returns" };

export default function ReturnsPage() {
  return (
    <LegalPage title="Returns">
      <p>
        Fourteen days from delivery, unopened and unused, for any reason at all. Write
        to us and we will send return instructions. You pay the return shipping.
      </p>
      <p>
        When it reaches us intact we refund the full purchase price to the original
        payment method. Original shipping is not refunded.
      </p>
      <p className="text-muted">
        The unit goes back into the edition and its number is released, so the count on
        the site goes back up by one.
      </p>

      <h2>Not the same as damage</h2>
      <p className="text-muted">
        If your pad arrives broken, this page does not apply to you. That is the damage
        guarantee: we replace it, and you do not send anything back.
      </p>
    </LegalPage>
  );
}
