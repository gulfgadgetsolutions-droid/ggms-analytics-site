import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { companyContact } from "../lib/company";
import { getSiteUrl } from "../lib/site";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.1 2.8 4.5 4.2c-.8.4-1.2 1.3-1 2.2 1.3 6.8 6.6 12.1 13.4 13.4.9.2 1.8-.2 2.2-1l1.4-2.6c.4-.8.2-1.8-.6-2.3l-3-2a1.8 1.8 0 0 0-2.2.2l-1.5 1.5a13.3 13.3 0 0 1-3-3l1.5-1.5c.6-.6.7-1.5.2-2.2l-2-3c-.6-.8-1.7-1-2.8-.1Z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.8-1.1A8.5 8.5 0 1 0 12 3Z" />
      <path d="M8.5 8.1c.3 3.4 2 5.2 5.4 6.5l1.7-1.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function Contact() {
  const siteUrl = getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact/#page`,
    name: "Contact GGMS Analytics",
    description: "Direct contact details and Muscat office location for GGMS Analytics.",
    url: `${siteUrl}/contact`,
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "GGMS Analytics",
      telephone: companyContact.phone.label,
      email: companyContact.email.map((item) => item.label),
      areaServed: ["Oman", "United Arab Emirates", "Saudi Arabia"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No. 103, Truckker Building",
        addressLocality: "Muscat",
        addressCountry: "OM",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: companyContact.phone.label,
          contactType: "business enquiries",
          areaServed: ["OM", "AE", "SA"],
          availableLanguage: ["English"],
        },
      ],
    },
  };

  return (
    <main className="depth-page depth-contact contact-page min-h-screen text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <section className="contact-hero">
        <div className="contact-hero-grid mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-24">
          <div className="contact-hero-copy">
            <p className="contact-eyebrow">Contact GGMS Analytics</p>
            <h1>A direct line to the people moving data forward.</h1>
            <p className="contact-hero-intro">
              For company information, office directions, partnerships, or a direct conversation with our team, choose the channel that works best for you.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact-details" className="contact-primary-button">
                View contact details <span aria-hidden="true">↓</span>
              </a>
              <Link href="/lets-talk" className="contact-secondary-button">
                Start a project <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="contact-presence-line" aria-label="GGMS Analytics regional presence">
              <span><i /> Oman head office</span>
              <span><i /> UAE</span>
              <span><i /> Saudi Arabia</span>
            </div>
          </div>

          <div className="contact-visual" aria-label="Corporate professionals in a business discussion">
            <div className="contact-visual-backplate" aria-hidden="true" />
            <div className="contact-visual-frame">
              <Image
                src="https://images.unsplash.com/photo-1758518730151-cf64fddb4f0a?auto=format&fit=crop&w=1800&q=88"
                alt="Corporate professionals discussing business plans in a modern office"
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
              <div className="contact-visual-shade" aria-hidden="true" />
              <div className="contact-office-tag">
                <span className="contact-office-pulse" aria-hidden="true" />
                <span><small>Head office</small>Muscat, Oman</span>
              </div>
            </div>
            <div className="contact-quick-card">
              <span className="contact-quick-icon"><PhoneIcon /></span>
              <span><small>Direct business line</small><strong>{companyContact.phone.label}</strong></span>
            </div>
            <div className="contact-visual-orbit" aria-hidden="true"><span /></div>
          </div>
        </div>
      </section>

      <section id="contact-details" className="contact-channels scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="contact-eyebrow">Direct channels</p>
              <h2 className="contact-section-title">Choose the right way to reach us.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
              Contact is for direct communication and office information. If you already have a defined data, analytics, or AI initiative, use Start a Project so the right specialists receive the complete brief.
            </p>
          </div>

          <div className="contact-channel-grid mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article className="contact-channel-card">
              <span className="contact-channel-icon"><PhoneIcon /></span>
              <p className="contact-card-label">Call</p>
              <a href={companyContact.phone.href}>{companyContact.phone.label}</a>
              <p>Speak with us about company or business enquiries.</p>
              <span className="contact-card-arrow" aria-hidden="true">↗</span>
            </article>

            <article className="contact-channel-card">
              <span className="contact-channel-icon"><MessageIcon /></span>
              <p className="contact-card-label">WhatsApp</p>
              <div className="space-y-2">
                {companyContact.whatsapp.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
                ))}
              </div>
              <p>Start a convenient direct conversation with our team.</p>
              <span className="contact-card-arrow" aria-hidden="true">↗</span>
            </article>

            <article className="contact-channel-card">
              <span className="contact-channel-icon"><MailIcon /></span>
              <p className="contact-card-label">Email</p>
              <div className="space-y-2">
                {companyContact.email.map((item) => (
                  <a key={item.href} href={item.href}>{item.label}</a>
                ))}
              </div>
              <p>Send company information, documents, or a detailed enquiry.</p>
              <span className="contact-card-arrow" aria-hidden="true">↗</span>
            </article>

            <article className="contact-channel-card contact-channel-card-dark">
              <span className="contact-channel-icon"><PinIcon /></span>
              <p className="contact-card-label">Visit</p>
              <p className="contact-address">{companyContact.address}</p>
              <a href={companyContact.mapUrl} target="_blank" rel="noreferrer" className="contact-map-link">
                Open in Google Maps
              </a>
              <span className="contact-card-arrow" aria-hidden="true">↗</span>
            </article>
          </div>
        </div>
      </section>

      <section id="regional-presence" className="contact-regions scroll-mt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="contact-region-map" aria-label="GGMS Analytics presence across Oman, the UAE, and Saudi Arabia">
            <div className="contact-region-plane contact-region-plane-back" aria-hidden="true" />
            <div className="contact-region-plane contact-region-plane-front">
              <svg viewBox="0 0 680 400" role="img" aria-label="Stylised regional connection network">
                <defs>
                  <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#67e8f9" />
                    <stop offset="1" stopColor="#0284c7" />
                  </linearGradient>
                </defs>
                <path className="contact-region-line" d="M142 278 C260 172 375 168 525 106" />
                <path className="contact-region-line contact-region-line-soft" d="M142 278 C288 335 445 302 572 225" />
                <circle cx="142" cy="278" r="11" />
                <circle cx="525" cy="106" r="8" />
                <circle cx="572" cy="225" r="8" />
              </svg>
              <div className="contact-region-node contact-region-oman"><span /><small>Head office</small><strong>Muscat, Oman</strong></div>
              <div className="contact-region-node contact-region-uae"><span /><small>Regional presence</small><strong>United Arab Emirates</strong></div>
              <div className="contact-region-node contact-region-saudi"><span /><small>Regional presence</small><strong>Saudi Arabia</strong></div>
            </div>
          </div>

          <div>
            <p className="contact-eyebrow">Regional presence</p>
            <h2 className="contact-section-title">Based in Muscat. Connected across the region.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              GGMS Analytics is headquartered in Oman and works across the United Arab Emirates and Saudi Arabia, bringing data engineering, analytics, data science, and AI capability closer to regional organisations.
            </p>
            <div className="contact-region-list mt-9">
              <div id="oman-office" className="scroll-mt-32"><span>OM</span><p><strong>Oman</strong><small>Head office · Muscat</small></p></div>
              <div id="uae-presence" className="scroll-mt-32"><span>AE</span><p><strong>United Arab Emirates</strong><small>Regional presence</small></p></div>
              <div id="saudi-presence" className="scroll-mt-32"><span>SA</span><p><strong>Saudi Arabia</strong><small>Regional presence</small></p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-location">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:py-24 lg:grid-cols-[0.68fr_1.32fr] lg:px-8">
          <div className="contact-location-panel">
            <span className="contact-channel-icon"><PinIcon /></span>
            <p className="contact-eyebrow mt-8">Find our head office</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Meet us in Muscat.</h2>
            <address className="mt-6 not-italic text-lg leading-8 text-slate-300">{companyContact.address}</address>
            <a href={companyContact.mapUrl} target="_blank" rel="noreferrer" className="contact-location-button">
              Get directions <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-location-lines" aria-hidden="true"><span /><span /><span /></div>
          </div>
          <div className="contact-map-shell">
            <iframe
              title="GGMS Analytics office at Truckker Building in Muscat, Oman"
              src={companyContact.mapEmbedUrl}
              className="h-[500px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="contact-map-badge"><span>GG</span><p><small>GGMS Analytics</small>Muscat head office</p></div>
          </div>
        </div>
      </section>

      <section className="contact-final-cta">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="contact-eyebrow contact-eyebrow-light">Have a defined initiative?</p>
            <h2>Turn the first conversation into a clear project brief.</h2>
          </div>
          <Link href="/lets-talk" className="contact-cta-button">Start a project <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
