import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./Container";
import { legalNav } from "@/content/site";

/**
 * NOTE: this copy is a plain-language draft, not reviewed by a lawyer. Thai
 * e-commerce rules, EU consumer distance-selling rights and UK/US requirements all
 * bite here. Have it reviewed before launch.
 */
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Container className="py-24">
      <div className="grid gap-16 md:grid-cols-[14rem_1fr]">
        <nav className="h-fit md:sticky md:top-24">
          <p className="eyebrow">Legal</p>
          <ul className="mt-4 space-y-2 text-sm">
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted hover:text-ink transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <article>
          <h1 className="title">{title}</h1>
          <div className="legal-body measure mt-8 space-y-5 leading-relaxed">
            {children}
          </div>
        </article>
      </div>
    </Container>
  );
}
