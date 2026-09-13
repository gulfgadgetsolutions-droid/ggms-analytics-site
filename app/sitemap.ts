import type { MetadataRoute } from "next";
import { getSiteUrl, isPublicSite } from "./lib/site";
import { industries } from "./lib/industries";
import { insightArticles } from "./lib/insights";

const routes = [
  ["", "weekly", 1], ["/services", "weekly", 0.9],
  ["/services/data-ai-strategy", "monthly", 0.85], ["/services/data-engineering", "monthly", 0.85],
  ["/services/data-analytics", "monthly", 0.85], ["/services/data-science", "monthly", 0.85],
  ["/services/ai-automation", "monthly", 0.85], ["/services/managed-data-ai", "monthly", 0.85],
  ["/industries", "monthly", 0.8], ["/technologies", "monthly", 0.7],
  ["/insights", "weekly", 0.75], ["/about", "monthly", 0.65],
  ["/contact", "yearly", 0.5], ["/lets-talk", "yearly", 0.55],
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!isPublicSite()) return [];
  const primaryRoutes = routes.map(([path, changeFrequency, priority]) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
  const insightRoutes = insightArticles.map((article) => ({
    url: `${siteUrl}/insights/${article.slug}`,
    lastModified: new Date(article.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));
  const industryRoutes = industries.map((industry) => ({
    url: `${siteUrl}/industries/${industry.slug}`,
    lastModified: new Date("2026-09-09"),
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...primaryRoutes, ...industryRoutes, ...insightRoutes];
}
