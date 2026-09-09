import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { WaitlistForm } from "@/components/WaitlistForm";
import { edition } from "@/content/edition";

export const metadata: Metadata = { title: "Waitlist" };

export default function WaitlistPage() {
  return (
    <Container className="py-32">
      <h1 className="text-title font-normal tracking-tight">Waitlist</h1>
      <div className="measure mt-8 space-y-5 text-lede leading-relaxed">
        <p>
          Edition One is {edition.runSize} pieces. The waitlist gets forty-eight hours
          before the public drop, which is usually how a fifty-piece edition is decided.
        </p>
        <p className="text-muted">
          We write when there is something to say: the artist announcement, the early
          access window, and the drop. Nothing else. Unsubscribe in one click.
        </p>
      </div>
      <div className="mt-12">
        <WaitlistForm />
      </div>
    </Container>
  );
}
