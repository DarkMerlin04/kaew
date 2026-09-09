import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  "", "/edition", "/artist", "/object", "/archive", "/about", "/care",
  "/waitlist", "/legal", "/legal/shipping", "/legal/returns", "/legal/privacy", "/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
  }));
}
