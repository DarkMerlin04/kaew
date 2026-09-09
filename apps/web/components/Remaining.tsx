import { edition } from "@/content/edition";

/**
 * The count must be real and driven by actual sales. Never inflate it.
 * Before launch there is nothing to count, so it says so instead of showing a number.
 */
export function Remaining({ className = "" }: { className?: string }) {
  if (edition.status === "sold-out") {
    return <p className={`eyebrow ${className}`}>Sold out</p>;
  }
  if (edition.status === "waitlist") {
    return <p className={`eyebrow ${className}`}>Edition of {edition.runSize} — not yet released</p>;
  }
  return (
    <p className={`eyebrow ${className}`}>
      {edition.remaining} of {edition.runSize} remaining
    </p>
  );
}
