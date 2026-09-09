import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { edition } from "@/content/edition";

export const metadata: Metadata = { title: "Archive" };

/**
 * Built in edition one even though it is empty. It announces that this is a series.
 * Over time this becomes the most persuasive page on the site.
 */
const past: { number: number; name: string; artist: string; year: number }[] = [];

export default function ArchivePage() {
  return (
    <Container className="py-24">
      <h1 className="title">Archive</h1>
      <p className="measure mt-6 leading-relaxed">
        Every edition, once it is gone. Fifty of each, numbered, never reprinted.
      </p>

      <div className="mt-16">
        {past.length === 0 && (
          <div className="border-t border-rule py-10">
            <p className="text-muted">
              Nothing here yet. Edition One is the first, and it has not been released.
            </p>
          </div>
        )}
        {past.map((e) => (
          <div key={e.number} className="flex items-baseline justify-between gap-8 border-t border-rule py-6">
            <div>
              <p className="eyebrow">Edition {e.number}</p>
              <p className="mt-2 lede">{e.name}</p>
              <p className="text-muted">{e.artist}</p>
            </div>
            <p className="eyebrow">Sold out · {e.year}</p>
          </div>
        ))}
        <div className="flex items-baseline justify-between gap-8 border-y border-rule py-6">
          <div>
            <p className="eyebrow">Edition One</p>
            <p className="mt-2 lede">{edition.name}</p>
            <p className="text-muted">Artist to be announced</p>
          </div>
          <p className="eyebrow">In progress · {edition.year}</p>
        </div>
      </div>
    </Container>
  );
}
