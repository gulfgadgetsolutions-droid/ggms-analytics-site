import type { Metadata } from "next";
export const metadata: Metadata = { title: "Data & AI Insights", description: "Practical insights on data engineering, business intelligence, data science, AI automation, governance, and enterprise technology delivery.", alternates: { canonical: "/insights" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
