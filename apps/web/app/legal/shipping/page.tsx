import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { shipping } from "@/content/site";

export const metadata: Metadata = { title: "Shipping" };

export default function ShippingPage() {
  return (
    <LegalPage title="Shipping">
      <p>
        Everything ships from {shipping.from}, tracked and insured, in a drop-tested
        box. A pad weighs about 3.5 kg boxed, which is most of what you are paying for
        in freight.
      </p>
      <p>{shipping.note}</p>

      <table className="mt-8 w-full text-sm">
        <thead>
          <tr className="border-b border-rule text-left">
            <th className="eyebrow py-3 font-medium">Region</th>
            <th className="eyebrow py-3 font-medium">Estimate</th>
            <th className="eyebrow py-3 text-right font-medium">Transit</th>
          </tr>
        </thead>
        <tbody>
          {shipping.estimates.map((e) => (
            <tr key={e.region} className="border-b border-rule">
              <td className="py-3">{e.region}</td>
              <td className="py-3 text-muted">{e.cost}</td>
              <td className="py-3 text-right text-muted">{e.days}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Duties and taxes</h2>
      <p className="text-muted">
        Import duty and VAT, where your country charges them, are yours to pay and are
        not included in the price or the shipping. We declare the full value, because
        the parcel is insured for it.
      </p>

      <h2>Dispatch</h2>
      <p className="text-muted">
        Orders leave within five business days of the drop closing. You get a tracking
        number when it does.
      </p>
    </LegalPage>
  );
}
