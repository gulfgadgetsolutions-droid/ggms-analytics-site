export type Industry = {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  imagePosition: string;
  description: string;
  priorities: string[];
  capabilities: { title: string; description: string }[];
  useCases: string[];
  technologies: string[];
  outcomes: string[];
};

export const industries: Industry[] = [
  {
    slug: "banking-financial-services-fintech",
    title: "Banking, Financial Services & Fintech",
    shortTitle: "Banking & Fintech",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=86",
    imagePosition: "center",
    description: "Create a governed view of customers, risk, finance, and operations so teams can respond faster without compromising control.",
    priorities: ["Fragmented customer and product data", "Fast-changing risk and compliance demands", "Slow finance and regulatory reporting", "Fraud signals hidden across channels"],
    capabilities: [
      { title: "Trusted financial data", description: "Unify core banking, payments, CRM, finance, and digital-channel data into controlled analytical models." },
      { title: "Risk and compliance intelligence", description: "Build transparent monitoring, exception workflows, and explainable analytics for stronger oversight." },
      { title: "Customer and commercial insight", description: "Connect behavior, products, interactions, and value to support relevant, responsible decisions." },
    ],
    useCases: ["Customer 360 and segmentation", "Credit and portfolio risk analytics", "Fraud and anomaly detection", "Regulatory and management reporting", "Revenue and profitability intelligence", "Branch and digital-channel performance"],
    technologies: ["Azure", "AWS", "Databricks", "Snowflake", "SQL Server", "Power BI", "Tableau", "Python"],
    outcomes: ["Faster controlled reporting", "Earlier risk visibility", "Consistent customer intelligence", "More reliable financial decisions"],
  },
  {
    slug: "insurance",
    title: "Insurance",
    shortTitle: "Insurance",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=86",
    imagePosition: "center 45%",
    description: "Connect policy, claims, customer, finance, and partner data to improve underwriting, service, and portfolio performance.",
    priorities: ["Long claims cycles and manual hand-offs", "Inconsistent policy and customer views", "Leakage, fraud, and reserving uncertainty", "Limited portfolio and broker visibility"],
    capabilities: [
      { title: "Claims intelligence", description: "Create a measurable claims journey with triage, leakage indicators, and operational visibility." },
      { title: "Underwriting analytics", description: "Bring risk attributes, history, pricing, and external signals into governed decision support." },
      { title: "Portfolio performance", description: "Track loss ratios, retention, profitability, channels, and emerging concentrations in one model." },
    ],
    useCases: ["Claims triage and severity prediction", "Fraud and leakage analytics", "Pricing and underwriting support", "Policyholder retention", "Broker and channel performance", "Reserving and portfolio reporting"],
    technologies: ["Azure", "AWS", "Databricks", "SQL", "Python", "Power BI", "Tableau", "Machine Learning"],
    outcomes: ["More efficient claims operations", "Clearer portfolio risk", "Stronger pricing insight", "Better policyholder experience"],
  },
  {
    slug: "government-public-sector",
    title: "Government & Public Sector",
    shortTitle: "Public Sector",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1600&q=86",
    imagePosition: "center",
    description: "Improve service performance, transparent reporting, evidence-based planning, and responsible data governance.",
    priorities: ["Siloed agency and service data", "Manual executive and statutory reporting", "Uneven data ownership and quality", "Rising expectations for digital public services"],
    capabilities: [
      { title: "Service performance", description: "Link demand, delivery, capacity, and outcome measures for a clearer operational picture." },
      { title: "Planning intelligence", description: "Support policy and resource planning with governed forecasts, scenarios, and geospatial insight." },
      { title: "Data governance", description: "Establish ownership, quality controls, cataloguing, access, and traceable public-sector reporting." },
    ],
    useCases: ["Executive performance dashboards", "Citizen-service analytics", "Budget and expenditure monitoring", "Demand and capacity forecasting", "Geospatial planning", "Data quality and governance monitoring"],
    technologies: ["Azure", "AWS", "Microsoft Fabric", "SQL Server", "Power BI", "Python", "GIS", "Data Catalogues"],
    outcomes: ["More transparent performance", "Better resource planning", "Trusted cross-agency reporting", "Stronger data accountability"],
  },
  {
    slug: "energy-oil-gas",
    title: "Energy, Oil & Gas",
    shortTitle: "Energy",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=86",
    imagePosition: "center",
    description: "Connect operational and financial data for expenditure control, forecasting, performance monitoring, and asset intelligence.",
    priorities: ["Disconnected asset and finance systems", "High downtime and maintenance exposure", "Complex production and cost forecasting", "Strict safety and environmental controls"],
    capabilities: [
      { title: "Asset intelligence", description: "Combine telemetry, maintenance, reliability, and cost histories to prioritize interventions." },
      { title: "Operational analytics", description: "Create governed production, utilization, downtime, and efficiency views across operations." },
      { title: "Planning and control", description: "Connect forecasts, expenditure, inventory, and project performance for timely decisions." },
    ],
    useCases: ["Predictive maintenance", "Production and yield analytics", "Asset reliability monitoring", "Energy demand forecasting", "Capital and operating expenditure control", "Safety and sustainability reporting"],
    technologies: ["AWS", "Azure", "SAP", "Databricks", "IoT", "Python", "Power BI", "Time-series Data"],
    outcomes: ["Improved asset availability", "Earlier operational warnings", "Clearer cost control", "More dependable planning"],
  },
  {
    slug: "manufacturing-logistics-supply-chain",
    title: "Manufacturing, Logistics & Supply Chain",
    shortTitle: "Supply Chain",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=86",
    imagePosition: "center",
    description: "Optimize planning, inventory, production, logistics, supplier performance, and anomaly detection across operations.",
    priorities: ["Limited end-to-end supply visibility", "Inventory imbalance and working-capital pressure", "Production delays and quality variation", "Disconnected supplier and logistics performance"],
    capabilities: [
      { title: "Planning control tower", description: "Connect demand, supply, inventory, orders, and logistics into a decision-ready operating view." },
      { title: "Factory intelligence", description: "Measure throughput, downtime, quality, yield, and material movement at the right level of detail." },
      { title: "Supplier performance", description: "Track reliability, lead time, cost, quality, and risk across the supplier ecosystem." },
    ],
    useCases: ["Demand and inventory forecasting", "Production and OEE analytics", "Supplier scorecards", "Logistics and route performance", "Material and asset tracking", "Quality and anomaly detection"],
    technologies: ["SAP", "SAP HANA", "Azure Data Factory", "Databricks", "PySpark", "SQL", "Power BI", "IoT"],
    outcomes: ["Balanced inventory", "More reliable production", "Improved supplier visibility", "Faster operational response"],
  },
  {
    slug: "fmcg-consumer-products",
    title: "FMCG & Consumer Products",
    shortTitle: "FMCG",
    image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=1600&q=86",
    imagePosition: "center",
    description: "Connect sell-in, sell-out, distributor, inventory, promotion, and consumer signals for faster commercial decisions.",
    priorities: ["Low visibility beyond primary sales", "Demand volatility and stock imbalance", "Promotion spend with unclear return", "Fragmented distributor and outlet performance"],
    capabilities: [
      { title: "Distributor analytics", description: "Unify orders, inventory, outlets, collections, and secondary sales into actionable territory views." },
      { title: "Revenue growth insight", description: "Measure price, mix, promotion, assortment, and channel performance with consistent definitions." },
      { title: "Demand sensing", description: "Blend history, seasonality, campaigns, and market signals to improve short-term planning." },
    ],
    useCases: ["Primary and secondary sales analytics", "Distributor and outlet performance", "Demand and replenishment forecasting", "Promotion effectiveness", "SKU and assortment intelligence", "Trade-spend and margin analytics"],
    technologies: ["SAP", "AWS", "Azure", "BigQuery", "Databricks", "SQL", "Power BI", "Machine Learning"],
    outcomes: ["Sharper demand visibility", "Better distributor decisions", "Reduced stock imbalance", "More accountable trade investment"],
  },
  {
    slug: "retail-consumer",
    title: "Retail & Consumer",
    shortTitle: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=86",
    imagePosition: "center",
    description: "Turn customer, demand, inventory, and pricing data into sharper decisions and more relevant consumer experiences.",
    priorities: ["Disconnected store and digital journeys", "Volatile demand and availability", "Margin pressure across products and channels", "Generic customer engagement"],
    capabilities: [
      { title: "Unified commerce insight", description: "Connect stores, e-commerce, loyalty, orders, inventory, and service interactions." },
      { title: "Merchandising analytics", description: "Understand assortment, pricing, promotion, availability, and space performance." },
      { title: "Customer intelligence", description: "Build responsible segmentation, propensity, lifetime-value, and retention models." },
    ],
    useCases: ["Customer 360 and loyalty analytics", "Demand and replenishment", "Pricing and promotion optimization", "Market-basket analysis", "Store and channel performance", "Personalized recommendations"],
    technologies: ["GCP", "BigQuery", "Looker", "AWS", "Databricks", "Python", "Power BI", "Customer Data Platforms"],
    outcomes: ["Improved product availability", "Clearer customer value", "Stronger margin decisions", "Consistent omnichannel insight"],
  },
  {
    slug: "automotive-mobility",
    title: "Automotive & Mobility",
    shortTitle: "Automotive",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1600&q=86",
    imagePosition: "center",
    description: "Unify plant, quality, dealer, vehicle, service, and customer data across the automotive value chain.",
    priorities: ["Complex multi-tier supply networks", "Quality issues detected too late", "Disconnected dealer and after-sales data", "Rapid transition to connected and electric mobility"],
    capabilities: [
      { title: "Manufacturing intelligence", description: "Connect production, quality, equipment, material, and labor data for plant-level decisions." },
      { title: "Dealer and sales analytics", description: "Create shared views of pipeline, inventory, conversion, incentives, and regional performance." },
      { title: "Connected service insight", description: "Use vehicle, warranty, maintenance, and customer histories to improve after-sales performance." },
    ],
    useCases: ["Production and quality analytics", "Warranty and defect intelligence", "Dealer and inventory performance", "Parts demand forecasting", "Predictive maintenance", "Customer and after-sales analytics"],
    technologies: ["Azure", "AWS", "SAP", "Databricks", "IoT", "Python", "Power BI", "Machine Learning"],
    outcomes: ["Earlier quality visibility", "More reliable production", "Optimized vehicle and parts inventory", "Stronger after-sales decisions"],
  },
  {
    slug: "aviation-airlines-travel",
    title: "Aviation, Airlines & Travel",
    shortTitle: "Aviation",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=86",
    imagePosition: "center 55%",
    description: "Unify passenger, flight, operational, and commercial data to improve planning, revenue decisions, and traveler experience.",
    priorities: ["Operational disruption across connected journeys", "Demand, capacity, and pricing volatility", "Fragmented passenger and commercial data", "High service and asset-utilization pressure"],
    capabilities: [
      { title: "Commercial analytics", description: "Connect bookings, fares, channels, routes, ancillaries, and demand for sharper revenue decisions." },
      { title: "Operational performance", description: "Measure turnaround, punctuality, disruption, capacity, and resource utilization." },
      { title: "Passenger intelligence", description: "Create governed journey and service views across touchpoints without losing customer trust." },
    ],
    useCases: ["Route and sales performance", "Demand and revenue forecasting", "On-time performance analytics", "Disruption and turnaround monitoring", "Passenger segmentation", "Ancillary revenue intelligence"],
    technologies: ["AWS", "Azure", "GCP", "Databricks", "Python", "SQL", "Power BI", "Streaming Data"],
    outcomes: ["Clearer route economics", "Faster disruption response", "Better capacity planning", "More relevant passenger experiences"],
  },
  {
    slug: "healthcare-life-sciences",
    title: "Healthcare & Life Sciences",
    shortTitle: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=86",
    imagePosition: "center 35%",
    description: "Enable governed analytics for operational reporting, capacity planning, forecasting, and better service outcomes.",
    priorities: ["Sensitive data across disconnected systems", "Capacity and workforce constraints", "Manual clinical and operational reporting", "Strict quality, privacy, and audit expectations"],
    capabilities: [
      { title: "Operational intelligence", description: "Connect demand, capacity, pathways, staffing, and service performance in controlled views." },
      { title: "Planning analytics", description: "Support resource, appointment, inventory, and service forecasts with transparent assumptions." },
      { title: "Governed data foundations", description: "Build quality, lineage, role-based access, and privacy controls into the analytical platform." },
    ],
    useCases: ["Capacity and utilization analytics", "Demand and staffing forecasts", "Patient-flow monitoring", "Supply and pharmacy analytics", "Quality and compliance reporting", "Population and service insights"],
    technologies: ["Azure", "AWS", "Databricks", "SQL", "Python", "Power BI", "FHIR", "Data Governance"],
    outcomes: ["More informed capacity planning", "Reliable operational reporting", "Stronger data governance", "Faster service decisions"],
  },
  {
    slug: "human-resources-workforce",
    title: "Human Resources & Workforce",
    shortTitle: "HR & Workforce",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=86",
    imagePosition: "center 45%",
    description: "Bring workforce, talent, attendance, payroll, learning, and performance data together for fairer and better-informed people decisions.",
    priorities: ["Workforce data spread across HR systems", "Reactive capacity and attrition planning", "Slow, manual workforce reporting", "Need for fair and explainable people analytics"],
    capabilities: [
      { title: "Workforce intelligence", description: "Create a consistent view of headcount, cost, capacity, skills, mobility, and organization structure." },
      { title: "Talent analytics", description: "Understand hiring, learning, performance, succession, engagement, and retention patterns responsibly." },
      { title: "Planning and automation", description: "Improve workforce forecasts and automate repeatable reports, alerts, and approval workflows." },
    ],
    useCases: ["Headcount and workforce cost", "Attrition and retention analytics", "Recruitment funnel performance", "Skills and learning intelligence", "Attendance and capacity planning", "Diversity and workforce reporting"],
    technologies: ["SAP SuccessFactors", "Workday", "Microsoft Fabric", "SQL", "Python", "Power BI", "Tableau", "Power Automate"],
    outcomes: ["Trusted workforce reporting", "Earlier talent signals", "Better capacity planning", "Responsible people decisions"],
  },
  {
    slug: "real-estate-construction",
    title: "Real Estate & Construction",
    shortTitle: "Real Estate",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=86",
    imagePosition: "center 45%",
    description: "Connect project, asset, cost, contractor, leasing, and facility data from development through operations.",
    priorities: ["Project data split across contractors and systems", "Cost, schedule, and risk surprises", "Limited portfolio and occupancy visibility", "Reactive asset and facility maintenance"],
    capabilities: [
      { title: "Project controls", description: "Bring schedule, cost, procurement, progress, change, and risk data into traceable executive views." },
      { title: "Portfolio intelligence", description: "Measure occupancy, leasing, revenue, valuation, service, and asset performance consistently." },
      { title: "Smart asset analytics", description: "Connect maintenance, energy, sensors, and work orders to improve building operations." },
    ],
    useCases: ["Project cost and schedule analytics", "Contractor and procurement performance", "Portfolio and occupancy dashboards", "Facility and energy monitoring", "Predictive asset maintenance", "Lease and revenue analytics"],
    technologies: ["Azure", "AWS", "SAP", "SQL", "Power BI", "IoT", "GIS", "BIM Data"],
    outcomes: ["Clearer project control", "Improved asset performance", "Better portfolio visibility", "Earlier delivery risk signals"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
