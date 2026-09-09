import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Artwork quality is the product: allow large, high-quality renditions.
    deviceSizes: [640, 828, 1080, 1200, 1920, 2560, 3840],
    qualities: [75, 90, 95],
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
