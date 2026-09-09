import type { NextConfig } from "next";
import { IMAGE_QUALITIES } from "./lib/image-policy";

const nextConfig: NextConfig = {
  images: {
    /**
     * AVIF first, WebP as the fallback. Next.js documentation recommends WebP
     * for most sites, because AVIF costs roughly 50% more encode time and
     * doubles the cache footprint. This site is the exception: it serves a
     * handful of images, one of which is a full-bleed artwork that has to stay
     * fast on mobile, so paying encode time once for ~20% smaller files is the
     * right trade here.
     */
    formats: ["image/avif", "image/webp"],

    /**
     * The only qualities any <Image> may request. Single source of truth in
     * lib/image-policy.ts. Next.js 16 makes this field required and defaults it
     * to [75]; setting it explicitly now means the upgrade changes nothing.
     */
    qualities: IMAGE_QUALITIES,

    /**
     * Optimized images are cached for a year. Static imports are content-hashed,
     * so a changed artwork gets a new URL and this can be safely long.
     */
    minimumCacheTTL: 31_536_000,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  // Set EXPORT=1 to emit a static snapshot into out/ for visual review.
  ...(process.env.EXPORT ? { output: "export" as const, images: { unoptimized: true } } : {}),
};

export default nextConfig;
