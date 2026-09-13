export const siteName = "GGMS Analytics";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const value = configuredUrl || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without credentials, a path, query, or fragment.");
  }
  return url.origin;
}

// Keep local builds and Vercel previews out of search results. Configure the
// real production origin before building a public release.
export function isPublicSite() {
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") return false;
  const { hostname } = new URL(getSiteUrl());
  return hostname !== "localhost" && !hostname.endsWith(".localhost") &&
    hostname !== "[::1]" && hostname !== "0.0.0.0" && !hostname.startsWith("127.") &&
    !hostname.startsWith("10.") && !hostname.startsWith("192.168.") &&
    !/^172\.(1[6-9]|2\d|3[01])\./.test(hostname);
}

export const siteDescription =
  "Enterprise data engineering, business intelligence, data science, AI automation, and managed data services across Oman, the UAE, and Saudi Arabia.";
