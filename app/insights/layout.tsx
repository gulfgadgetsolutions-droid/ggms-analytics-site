import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data, Analytics & AI Insights",
  description:
    "Original GGMS Analytics perspectives on data engineering, business intelligence, data strategy, data science, and responsible AI automation.",
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
  openGraph: {
    title: "Data, Analytics & AI Insights | GGMS Analytics",
    description:
      "Practical field notes, guides, and architecture perspectives for data-led organizations.",
    url: "/insights",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
