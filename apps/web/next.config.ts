import type { NextConfig } from "next";
import { IMAGE_QUALITIES } from "./lib/image-policy";

/**
 * Static export — for GitHub Pages, or any host that only serves files.
 *
 * EXPORT=1 emits the whole site as plain HTML into out/. BASE_PATH is the
 * sub-path the site is served from: "/kaew" for https://<user>.github.io/kaew/,
 * empty when the site sits at the root of its domain. The workflow in
 * .github/workflows/pages.yml sets both, so nothing here names a repository.
 *
 * A file host has no image optimizer, so an exported site serves the original
 * image files. Every image on the site is a static import, which is why
 * basePath reaches them without help; a string `src` would need it by hand.
 */
const isExport = Boolean(process.env.EXPORT);
const basePath = process.env.BASE_PATH ?? "";

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

    /** No optimizer on a static host. */
    unoptimized: isExport,
  },

  ...(isExport
    ? {
        output: "export" as const,
        basePath,
        /** /edition/ → edition/index.html, which every static host resolves. */
        trailingSlash: true,
      }
    : {
        /** Response headers need a server; a static host sets its own. */
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
      }),
};

export default nextConfig;
