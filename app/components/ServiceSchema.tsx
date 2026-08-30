import { getSiteUrl } from "../lib/site";

export default function ServiceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${url}/#service`, name, description, url, provider: { "@id": `${siteUrl}/#organization` }, areaServed: ["Oman", "United Arab Emirates", "Saudi Arabia"], serviceType: name },
      { "@type": "BreadcrumbList", "@id": `${url}/#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
        { "@type": "ListItem", position: 3, name, item: url },
      ] },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
