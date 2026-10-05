import type { MetadataRoute } from "next"
import { fichasPublicadas } from "@/lib/catalogo"
import { absoluteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/metodologia"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/control-doc"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/servicios"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...fichasPublicadas().map((f) => ({
      url: absoluteUrl(`/servicios/${f.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
