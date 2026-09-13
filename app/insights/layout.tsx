import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data, Analytics & AI Insights",
  description:
    "GGMS Analytics implementation guides and sourced perspectives on data engineering, business intelligence, data strategy, data science, and responsible AI automation.",
  keywords: [
    "data analytics consulting",
    "data engineering",
    "business intelligence",
    "Power BI",
    "SAP analytics",
    "supply chain analytics",
    "finance analytics",
    "airline analytics",
    "data science",
    "AI automation",
  ],
  alternates: { canonical: "/insights" },
  twitter: { card: "summary_large_image", title: "Data, Analytics & AI Insights | GGMS Analytics", description: "Implementation guides, technical references, and attributed external case studies.", images: ["/images/home-data-journey.png"] },
  openGraph: {
    title: "Data, Analytics & AI Insights | GGMS Analytics",
    description:
      "Practical guides, external case studies, and architecture perspectives for data-led organizations.",
    url: "/insights",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
