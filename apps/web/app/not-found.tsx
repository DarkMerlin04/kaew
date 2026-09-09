import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-32">
      <h1 className="title">Nothing here.</h1>
      <p className="measure mt-6 leading-relaxed text-muted">
        The page you were looking for does not exist. If you followed a link to an
        edition, it may have sold out and moved to the archive.
      </p>
      <div className="mt-10 flex gap-8 text-sm">
        <Link href="/" className="link-underline">Home</Link>
        <Link href="/archive" className="link-underline">Archive</Link>
      </div>
    </Container>
  );
}
