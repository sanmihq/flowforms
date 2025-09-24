import { MetadataRoute } from "next";
import { appConfig } from "./lib/data/appConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || appConfig.url;

  const lastModified = new Date();

  // Define your static public pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: "daily" as "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}${appConfig.links.features}`,
      lastModified: lastModified,
      changeFrequency: "weekly" as "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}${appConfig.links.docs}`,
      lastModified: lastModified,
      changeFrequency: "monthly" as "monthly",
      priority: 0.5,
    },
  ];

  return staticPages;
}
