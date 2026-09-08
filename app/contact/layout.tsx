import type { Metadata } from "next";

const description = "Contact GGMS Analytics in Muscat, Oman. Find our office, call, email, or WhatsApp our team across Oman, the UAE, and Saudi Arabia.";

export const metadata: Metadata = {
  title: "Contact GGMS Analytics in Muscat",
  description,
  keywords: [
    "GGMS Analytics contact",
    "data analytics company Muscat",
    "data and AI consultancy Oman",
    "analytics services UAE",
    "AI consultancy Saudi Arabia",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact GGMS Analytics in Muscat",
    description,
    url: "/contact",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1758518730151-cf64fddb4f0a?auto=format&fit=crop&w=1600&q=85",
        width: 1600,
        height: 1067,
        alt: "Corporate professionals in a business discussion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact GGMS Analytics in Muscat",
    description,
    images: ["https://images.unsplash.com/photo-1758518730151-cf64fddb4f0a?auto=format&fit=crop&w=1600&q=85"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
