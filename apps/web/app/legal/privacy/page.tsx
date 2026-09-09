import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy">
      <p>
        We keep two things: the email address you give the waitlist, and the order
        details you give at checkout. That is all.
      </p>

      <h2>Waitlist</h2>
      <p className="text-muted">
        Your address is stored so we can write to you about editions. It is not sold,
        rented, or handed to anyone for their own use. Every email has an unsubscribe
        link, and unsubscribing deletes the record.
      </p>

      <h2>Orders</h2>
      <p className="text-muted">
        Payment is handled by Stripe. Your card details go to Stripe and never reach
        us. We hold your name, shipping address and what you bought, because we have to
        send it and because tax law requires us to keep the record.
      </p>

      <h2>Analytics</h2>
      <p className="text-muted">
        Aggregate page counts only. No cross-site tracking, no advertising pixels, no
        profile of you.
      </p>

      <h2>Your rights</h2>
      <p className="text-muted">
        Ask us what we hold and we will tell you. Ask us to delete it and we will,
        except for order records we are legally required to keep.
      </p>
    </LegalPage>
  );
}
