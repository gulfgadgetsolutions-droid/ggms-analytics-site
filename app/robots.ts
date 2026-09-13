import type { MetadataRoute } from "next";
import { getSiteUrl, isPublicSite } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  if (!isPublicSite()) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
