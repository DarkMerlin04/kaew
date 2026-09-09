/**
 * One image policy for the whole site.
 *
 * `next.config.ts` and every <Image> read their values from here, so it is not
 * possible to request a quality the optimizer refuses. Next.js validates the
 * `quality` prop against `images.qualities`, and on 15.x a value outside that
 * list throws at render time rather than falling back — which is exactly the
 * class of bug that hardcoding these numbers in two places produces.
 *
 * Each entry costs cache storage: Next caches every (size, format, quality)
 * combination separately. Two tiers is deliberate — do not add a third without
 * a reason.
 */
export const IMAGE_QUALITY = {
  /** Interface-scale renderings: the pad mock, the desk flat lay, thumbnails. */
  standard: 75,
  /** The artwork itself, at any size. Image quality is the product. */
  artwork: 90,
} as const;

/** The allowlist Next.js validates against. Derived, never written twice. */
export const IMAGE_QUALITIES: number[] = [...new Set(Object.values(IMAGE_QUALITY))].sort(
  (a, b) => a - b,
);
