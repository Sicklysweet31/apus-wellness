import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://apuswellness.ro",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://apuswellness.ro/confidentialitate",
      lastModified: new Date("2026-11-26"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
