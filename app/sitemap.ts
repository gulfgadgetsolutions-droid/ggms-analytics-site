import type { MetadataRoute } from "next";
import { getSiteUrl } from "./lib/site";

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
  const lastModified = new Date();
  return routes.map(([path, changeFrequency, priority]) => ({ url: `${siteUrl}${path}`, lastModified, changeFrequency, priority }));
}
