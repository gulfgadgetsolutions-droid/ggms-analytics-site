import Link from "next/link";
import {
  siAmazonwebservices,
  siApachespark,
  siDatabricks,
  siGooglebigquery,
  siGooglecloud,
  siLooker,
  siMongodb,
  siOpenai,
  siPython,
  siQlik,
  siSap,
  siScikitlearn,
  siTableau,
} from "simple-icons";

type IconData = {
  title: string;
  path: string;
  hex: string;
};

type Technology = {
  name: string;
  detail: string;
  icon?: IconData;
  customIcon?: "azure" | "excel" | "powerbi" | "sqlserver";
};

const technologyGroups: { label: string; description: string; technologies: Technology[] }[] = [
  {
    label: "Cloud & enterprise",
    description: "Connect established enterprise systems with scalable cloud foundations.",
    technologies: [
      { name: "Microsoft Azure", detail: "Cloud platform", customIcon: "azure" },
      { name: "AWS", detail: "Cloud & data services", icon: siAmazonwebservices },
      { name: "Google Cloud", detail: "Cloud platform", icon: siGooglecloud },
      { name: "SAP", detail: "ERP · HANA · Connectors", icon: siSap },
    ],
  },
  {
    label: "Data platforms",
    description: "Move, transform, model, and govern data across modern and existing estates.",
    technologies: [
      { name: "Databricks", detail: "Lakehouse platform", icon: siDatabricks },
      { name: "Apache Spark", detail: "PySpark processing", icon: siApachespark },
      { name: "SQL Server", detail: "Database & warehouse", customIcon: "sqlserver" },
      { name: "MongoDB", detail: "Document database", icon: siMongodb },
      { name: "BigQuery", detail: "Cloud data warehouse", icon: siGooglebigquery },
      { name: "Microsoft Excel", detail: "Business data source", customIcon: "excel" },
    ],
  },
  {
    label: "Analytics & AI",
    description: "Turn governed information into decisions, predictions, and intelligent workflows.",
    technologies: [
      { name: "Power BI", detail: "Analytics & semantic models", customIcon: "powerbi" },
      { name: "Tableau", detail: "Visual analytics", icon: siTableau },
      { name: "Qlik Sense", detail: "Business intelligence", icon: siQlik },
      { name: "Looker", detail: "Cloud analytics", icon: siLooker },
      { name: "Python", detail: "Data science & automation", icon: siPython },
      { name: "scikit-learn", detail: "Machine learning", icon: siScikitlearn },
      { name: "OpenAI", detail: "Generative AI", icon: siOpenai },
    ],
  },
];

function CustomMicrosoftIcon({ type }: { type: NonNullable<Technology["customIcon"]> }) {
  if (type === "azure") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <defs><linearGradient id="azure-mark" x1="3" y1="3" x2="21" y2="21"><stop stopColor="#0089d6" /><stop offset="1" stopColor="#0067b8" /></linearGradient></defs>
        <path fill="url(#azure-mark)" d="M13.7 2.2 6.8 8.3 2.5 16.4h4.3L13.7 2.2Zm1.1 2.2L8.4 18.5h8.5l2.3 3.3h3.1L14.8 4.4Z" />
      </svg>
    );
  }

  if (type === "powerbi") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="11" width="4" height="10" rx="1.3" fill="#f2c811" />
        <rect x="8.5" y="7" width="4" height="14" rx="1.3" fill="#eab308" />
        <rect x="14" y="3" width="4" height="18" rx="1.3" fill="#d9a400" />
        <rect x="19.5" y="1" width="2" height="20" rx="1" fill="#c28b00" />
      </svg>
    );
  }

  if (type === "sqlserver") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="7" ry="3" fill="#e5484d" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" fill="#c92f37" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6c0 1.7-3.1 3-7 3s-7-1.3-7-3Z" fill="#a61e2a" />
        <path d="M8 7.2c1.1.5 2.4.8 4 .8s2.9-.3 4-.8" fill="none" stroke="#fff" strokeOpacity=".72" strokeWidth="1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#107c41" d="M4 3h11v18H4z" />
      <path fill="#185c37" d="M13 5h8v14h-8z" />
      <path fill="#fff" d="m6.8 8 1.8 3 1.8-3h2.1l-2.8 4 3 4H10.5l-2-3.1L6.6 16H4.5l2.9-4-2.7-4h2.1Z" />
      <path stroke="#fff" strokeOpacity=".65" d="M15 8h4M15 11h4M15 14h4M15 17h4" />
    </svg>
  );
}

function TechnologyLogo({ technology }: { technology: Technology }) {
  return (
    <div className="home-tech-logo" aria-hidden="true">
      {technology.icon ? (
        <svg viewBox="0 0 24 24" fill={`#${technology.icon.hex}`}>
          <path d={technology.icon.path} />
        </svg>
      ) : technology.customIcon ? (
        <CustomMicrosoftIcon type={technology.customIcon} />
      ) : null}
    </div>
  );
}

export default function TechnologyEcosystem() {
  return (
    <section className="home-technology-ecosystem" aria-labelledby="technology-ecosystem-title">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="home-tech-eyebrow">Technology ecosystem</p>
            <h2 id="technology-ecosystem-title" className="home-tech-title">Built around the platforms your business already depends on.</h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              We connect enterprise systems, cloud platforms, data engineering, analytics, and AI into one maintainable environment—selecting technology for fit, not forcing a single vendor.
            </p>
            <Link href="/technologies" className="home-tech-link">Explore our technology approach <span aria-hidden="true">→</span></Link>
          </div>
        </div>

        <div className="home-tech-groups mt-14 grid gap-5 lg:grid-cols-3">
          {technologyGroups.map((group) => (
            <article key={group.label} className="home-tech-group">
              <div className="home-tech-group-heading">
                <span aria-hidden="true" />
                <div>
                  <h3>{group.label}</h3>
                  <p>{group.description}</p>
                </div>
              </div>
              <div className="home-tech-grid">
                {group.technologies.map((technology) => (
                  <div key={technology.name} className="home-tech-item">
                    <TechnologyLogo technology={technology} />
                    <div>
                      <strong>{technology.name}</strong>
                      <small>{technology.detail}</small>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="home-tech-principle mt-6">
          <span className="home-tech-principle-mark" aria-hidden="true">↔</span>
          <p><strong>Designed for interoperability.</strong> Sources, pipelines, warehouses, semantic models, dashboards, machine learning, and automation remain connected through a governed architecture.</p>
        </div>
      </div>
    </section>
  );
}
