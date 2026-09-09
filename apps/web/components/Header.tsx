import Link from "next/link";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { nav, site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-[2px]">
      <Container wide className="flex h-16 items-center justify-between">
        <Link href="/" className="text-[1.05rem] font-medium tracking-[0.28em]">
          {site.name}
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-jade transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <Link href="/waitlist" className="text-sm hover:text-jade transition-colors">
            Waitlist
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
