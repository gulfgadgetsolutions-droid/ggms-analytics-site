import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { companyContact } from "../lib/company";
import { getSiteUrl } from "../lib/site";

export default function Contact() {
  const siteUrl = getSiteUrl();
  const schema = {
    "@context": "https://schema.org", "@type": "ContactPage", "@id": `${siteUrl}/contact/#page`,
    name: "Contact GGMS Analytics", url: `${siteUrl}/contact`, mainEntity: {
      "@type": "Organization", "@id": `${siteUrl}/#organization`, telephone: companyContact.phone.label,
      email: companyContact.email[0].label, address: { "@type": "PostalAddress", streetAddress: "Office No. 103, Truckker Building", addressLocality: "Muscat", addressCountry: "OM" },
    },
  };

  return <main className="min-h-screen bg-white text-slate-950">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <Navbar />

    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 sm:py-28 lg:px-10 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Contact GGMS Analytics</p>
          <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl">Let&apos;s start with a conversation.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">Tell us what you are trying to improve, build, or understand. Our team will help direct your enquiry to the right Data and AI specialist.</p>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold"><a href={companyContact.phone.href} className="transition hover:text-cyan-700">{companyContact.phone.label}</a><a href={companyContact.email[0].href} className="transition hover:text-cyan-700">{companyContact.email[0].label}</a></div>
        </div>
        <div className="relative min-h-[430px] lg:min-h-full">
          <Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=88" alt="Business professionals meeting to discuss a project" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg"><span className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-700">Call</span><a href={companyContact.phone.href} className="mt-5 block text-xl font-semibold hover:text-cyan-700">{companyContact.phone.label}</a><p className="mt-3 text-sm leading-6 text-slate-600">For direct business and office enquiries.</p></article>
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg"><span className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-700">WhatsApp</span>{companyContact.whatsapp.map(item=><a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="mt-4 block font-semibold hover:text-cyan-700">{item.label}</a>)}<p className="mt-3 text-sm leading-6 text-slate-600">Start a quick conversation with our team.</p></article>
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg"><span className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-700">Email</span>{companyContact.email.map(item=><a key={item.href} href={item.href} className="mt-4 block break-all font-semibold hover:text-cyan-700">{item.label}</a>)}<p className="mt-3 text-sm leading-6 text-slate-600">Share documents or a detailed requirement.</p></article>
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg"><span className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-700">Visit</span><p className="mt-5 font-semibold leading-7">{companyContact.address}</p><a href={companyContact.mapUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800">Open in Google Maps →</a></article>
      </div>
    </section>

    <section id="project-enquiry" className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"><iframe title="GGMS Analytics office at Truckker Building in Muscat, Oman" src={companyContact.mapEmbedUrl} className="h-[560px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg sm:p-10"><p className="text-sm font-semibold uppercase tracking-[.2em] text-cyan-700">Start a project or make an enquiry</p><h2 className="mt-4 text-3xl font-semibold tracking-tight">Send a message to our team.</h2><p className="mt-4 mb-10 leading-7 text-slate-600">Use one form for a project discussion, consultation, partnership, proposal, career question, or general enquiry. Add enough context for us to connect you with the right person.</p><ContactForm /></div>
      </div>
    </section>

    <Footer />
  </main>;
}
