import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Plate } from "@/components/Plate";
import { WaitlistForm } from "@/components/WaitlistForm";
import { edition, editionLabel } from "@/content/edition";

export const metadata: Metadata = { title: "The Artist" };

export default function ArtistPage() {
  if (!edition.artist.announced) {
    return (
      <Container className="py-32">
        <p className="eyebrow">{editionLabel}</p>
        <h1 className="mt-4 text-title font-normal tracking-tight">
          The artist has not been announced.
        </h1>
        <div className="measure mt-8 space-y-5 leading-relaxed">
          <p>
            One artist makes one edition. We announce who it is before the edition
            goes on sale, and this page becomes theirs — who they are, what else they
            make, and why they made this piece.
          </p>
          <p className="text-muted">
            The waitlist hears first, and gets forty-eight hours before the public drop.
          </p>
        </div>
        <div className="mt-10">
          <WaitlistForm />
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-24">
      <p className="eyebrow">{editionLabel}</p>
      <h1 className="mt-4 text-title font-normal tracking-tight">{edition.artist.name}</h1>
      <p className="mt-2 text-muted">{edition.artist.location}</p>
      <div className="mt-12 grid gap-16 md:grid-cols-[1fr_20rem]">
        <div className="measure space-y-5 leading-relaxed">
          <p>{edition.artist.bio}</p>
        </div>
        <div>
          <Plate label="Portrait of the artist." ratio="4 / 5" />
          <ul className="mt-6 space-y-2 text-sm">
            {edition.artist.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline" rel="noopener noreferrer" target="_blank">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link href="/edition" className="link-underline mt-16 inline-block text-sm">
        See the edition
      </Link>
    </Container>
  );
}
