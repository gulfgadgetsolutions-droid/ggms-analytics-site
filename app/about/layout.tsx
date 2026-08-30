import type { Metadata } from "next";
export const metadata: Metadata = { title: "About GGMS Analytics", description: "Meet GGMS Analytics, a growing Data and AI company headquartered in Oman with branches in the UAE and Saudi Arabia and a global vision.", alternates: { canonical: "/about" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
