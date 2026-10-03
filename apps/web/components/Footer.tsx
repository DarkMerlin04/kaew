import Link from "next/link";
import { Container } from "./Container";
import { WaitlistForm } from "./WaitlistForm";
import { legalNav, nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-rule">
      <Container className="grid gap-16 py-20 md:grid-cols-2">
        <div>
          <p className="eyebrow">The next edition</p>
          <p className="measure mt-4 text-lede leading-relaxed">
            Fifty of each edition, then it is gone. The waitlist gets forty-eight hours
            before anyone else.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm md:justify-items-end">
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-ink transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/care" className="text-muted hover:text-ink transition-colors">
                Care &amp; Warranty
              </Link>
            </li>
          </ul>
          <ul className="space-y-3">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-ink transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-rule py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} — {site.nameThai}, Thai for glass. Bangkok.
        </p>
        <p>
          © {new Date().getFullYear()} · {site.credit}
        </p>
      </Container>
    </footer>
  );
}
