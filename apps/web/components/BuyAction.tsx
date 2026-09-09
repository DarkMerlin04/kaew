import Link from "next/link";
import { edition, priceDisplay } from "@/content/edition";

/**
 * One call to action. Which one depends on where the edition is in the launch
 * sequence — before the drop there is nothing to buy, and saying otherwise would
 * be the first dishonest thing on the site.
 */
export function BuyAction({ className = "" }: { className?: string }) {
  const soldOut = edition.status === "sold-out";
  const buyable = edition.status === "live" || edition.status === "early-access";

  if (soldOut) {
    return (
      <Link
        href="/waitlist"
        className={`inline-block border border-rule px-8 py-4 text-sm text-muted transition-colors hover:border-ink hover:text-ink ${className}`}
      >
        Sold out — join the waitlist for the next edition
      </Link>
    );
  }

  if (!buyable) {
    return (
      <Link
        href="/waitlist"
        className={`inline-block bg-ink px-8 py-4 text-sm text-paper transition-colors hover:bg-jade-deep ${className}`}
      >
        Join the waitlist
      </Link>
    );
  }

  return (
    <Link
      href="/edition#buy"
      className={`inline-block bg-ink px-8 py-4 text-sm text-paper transition-colors hover:bg-jade-deep ${className}`}
    >
      Buy — {priceDisplay}
    </Link>
  );
}
