import type { Metadata } from "next";
import "./globals.css";
import Chatbot from "./components/Chatbot";
import { getSiteUrl, siteDescription, siteName } from "./lib/site";
import { companyContact } from "./lib/company";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: "GGMS Analytics | Enterprise Data, Analytics & AI", template: "%s | GGMS Analytics" },
  description: siteDescription,
  applicationName: siteName,
  keywords: ["data engineering", "business intelligence", "Power BI", "data science", "AI automation", "managed data services", "Microsoft Azure", "Oman", "UAE", "Saudi Arabia"],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    type: "website", locale: "en_US", url: "/", siteName,
    title: "GGMS Analytics | Enterprise Data, Analytics & AI", description: siteDescription,
    images: [{ url: "/images/home-data-journey.png", width: 1200, height: 800, alt: "GGMS Analytics enterprise data and AI journey" }],
  },
  twitter: { card: "summary_large_image", title: "GGMS Analytics | Enterprise Data, Analytics & AI", description: siteDescription, images: ["/images/home-data-journey.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  category: "technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteUrl = getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: siteName, url: siteUrl, description: siteDescription, logo: `${siteUrl}/favicon.ico`, telephone: companyContact.phone.label, email: companyContact.email[0].label, address: { "@type": "PostalAddress", streetAddress: "Office No. 103, Truckker Building", addressLocality: "Muscat", addressCountry: "OM" }, areaServed: ["Oman", "United Arab Emirates", "Saudi Arabia"], parentOrganization: { "@type": "Organization", name: "GGMS Global IT Solutions SPC", url: "https://ggmsglobal.com/" }, knowsAbout: ["Data Engineering", "Business Intelligence", "Data Science", "Machine Learning", "Generative AI", "AI Automation", "Microsoft Azure"] },
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: siteName, description: siteDescription, publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en" },
    ],
  };

  return <html lang="en" data-scroll-behavior="smooth"><body className="font-sans antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />{children}<Chatbot /></body></html>;
}
