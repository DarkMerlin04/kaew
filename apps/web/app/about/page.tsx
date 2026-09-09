import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Container className="py-24">
      <h1 className="text-title font-normal tracking-tight">About</h1>

      <div className="measure mt-10 space-y-6 text-lede leading-relaxed">
        <p>
          KAEW is an editions label. We commission one artist, print their work under
          glass, make fifty, and stop. The edition is numbered and signed. When it is
          gone we do not make more of it, and the next edition is by someone else.
        </p>
        <p>
          The object underneath is a desk pad, and it is a good one — low-iron glass,
          micro-etched, sealed print. But the object is not the point. There are
          perfectly good glass pads for forty dollars. What you are buying here is a
          picture, made once, by a person we name.
        </p>
        <p>
          แก้ว is the Thai word for glass. It is also used for something precious, and
          it is a common name for a daughter.
        </p>
        <p className="text-muted">
          We are in Bangkok. The glass is made here, printed here, and packed here.
        </p>
      </div>

      <div className="mt-16 border-t border-rule pt-10">
        <p className="eyebrow">The next edition</p>
        <div className="mt-6">
          <WaitlistForm />
        </div>
      </div>
    </Container>
  );
}
