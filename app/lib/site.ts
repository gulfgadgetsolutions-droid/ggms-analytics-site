export const siteName = "GGMS Analytics";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const value = configuredUrl || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");
  return value.replace(/\/$/, "");
}

export const siteDescription =
  "Enterprise data engineering, business intelligence, data science, AI automation, and managed data services across Oman, the UAE, and Saudi Arabia.";
