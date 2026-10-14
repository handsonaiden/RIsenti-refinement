import type { MetadataRoute } from "next";
import { AREAS, SITE } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now },
    { url: `${SITE.url}/contact`, lastModified: now },
    ...AREAS.map((a) => ({ url: `${SITE.url}/services/${a.slug}`, lastModified: now })),
  ];
}
