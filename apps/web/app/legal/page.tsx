import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { legalNav } from "@/content/site";

export const metadata: Metadata = { title: "Legal" };

export default function LegalIndex() {
  return (
    <Container className="py-24">
      <h1 className="text-title font-normal tracking-tight">Legal</h1>
      <ul className="mt-10 max-w-xl">
        {legalNav.map((l) => (
          <li key={l.href} className="border-t border-rule">
            <Link href={l.href} className="block py-5 hover:text-jade transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
