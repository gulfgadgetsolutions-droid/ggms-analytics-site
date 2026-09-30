export type EditorialSource = { title: string; url: string; context: string };

const modelling: EditorialSource = {
  title: "Microsoft Learn: star schema design in Power BI",
  url: "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema",
  context: "Technical reference for fact-table grain, dimensions, and historical changes. The implementation checks below are GGMS editorial recommendations.",
};
const events: EditorialSource = {
  title: "GS1: EPCIS and Core Business Vocabulary",
  url: "https://www.gs1.org/standards/epcis",
  context: "Reference for sharing supply-chain visibility events. Use the standard only where it fits your partners and systems.",
};
const aiRisk: EditorialSource = {
  title: "NIST: AI Risk Management Framework core",
  url: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/",
  context: "Reference for governing, mapping, measuring, and managing AI risk; it is not a certification or a substitute for applicable requirements.",
};
const commerce: EditorialSource = {
  title: "Google Analytics: measure ecommerce",
  url: "https://developers.google.com/analytics/devguides/collection/ga4/ecommerce",
  context: "Implementation reference for purchase and refund events and transaction identifiers. Analytics events still need reconciliation to order and payment records.",
};

const azureAgents: EditorialSource = {
  title: "Microsoft Learn: Microsoft Foundry Agent Service overview",
  url: "https://learn.microsoft.com/en-us/azure/ai-services/agents/overview",
  context: "Reference for managed AI agents, tools, deployment patterns, identity, and observability. The workflow patterns below are GGMS editorial recommendations.",
};
const azureRag: EditorialSource = {
  title: "Microsoft Learn: Retrieval-augmented generation in Azure AI Search",
  url: "https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview",
  context: "Technical reference for retrieval-augmented generation patterns using enterprise search and generative AI.",
};
const owaspLlm: EditorialSource = {
  title: "OWASP: Top 10 for Large Language Model Applications 2025",
  url: "https://genai.owasp.org/llm-top-10/",
  context: "Security reference for common LLM and generative AI application risks. It supports the checks around prompt injection, permissions, and unsafe actions.",
};

export const insightNotes: Record<string, { heading: string; detail: string; checks: string[]; sources: EditorialSource[] }> = {
  "enterprise-ai-agent-workflows-human-in-the-loop": {
    heading: "Keep the agent inside an auditable workflow",
    detail: "Before giving an AI agent access to tools, define the task boundary, the data it may use, the action it may take, and the point where a human must approve the outcome. A useful first release should complete one repeatable workflow, cite its evidence, and record every decision instead of behaving like an open-ended chatbot.",
    checks: ["Test a request with missing evidence, conflicting documents, and instructions embedded inside a retrieved file.", "Verify that the agent cannot read or act outside the user permissions already granted in the business system.", "Log the input, retrieved evidence, tool calls, human approval, final action, and rollback path."],
    sources: [azureAgents, owaspLlm, aiRisk],
  },
  "rag-systems-for-enterprise-knowledge-workflows": {
    heading: "Treat RAG as an operating model, not a document upload",
    detail: "A RAG system is useful only when the knowledge base has owners, freshness rules, permission boundaries, retrieval tests, and a feedback loop. Begin with one business process, approved source documents, and answer-quality checks before expanding to every folder and policy in the company.",
    checks: ["Measure whether the correct document is retrieved before judging the generated answer.", "Preserve source permissions and show citations so users can verify the answer.", "Track unanswered questions, weak citations, stale documents, and repeated user corrections."],
    sources: [azureRag, azureAgents, owaspLlm, aiRisk],
  },
  "ai-automation-workflows-from-email-to-action": {
    heading: "Automate the hand-off, not only the message",
    detail: "Email, forms, PDFs, and spreadsheets can start a useful AI workflow, but the value comes from extraction, validation, routing, approval, and system update. Keep deterministic checks for numbers and policy thresholds, and let AI support classification, summarization, evidence discovery, and drafting.",
    checks: ["Test low-quality documents, duplicate submissions, missing fields, and values that cross approval thresholds.", "Separate AI-generated suggestions from the final approved system update.", "Record who approved the action, when it was completed, and which source evidence supported it."],
    sources: [azureAgents, azureRag, owaspLlm, aiRisk],
  },
  "trusted-finance-analytics-from-source-to-decision": {
    heading: "Reconcile one closed period before adding more charts",
    detail: "Start with one legal entity and one closed period. Keep ledger actuals and budget versions in separate facts at their own level of detail. Joining a monthly budget directly to journal lines can multiply the budget. Compare both through shared account, entity, and calendar dimensions, and retain the reconciliation signed off by the finance owner.",
    checks: ["Re-run the same extract: journal counts and totals must remain unchanged.", "Trace a reversal, a late posting, and an unmapped account through to the report.", "Show the currency, period status, source timestamp, and budget version beside the measures."],
    sources: [modelling],
  },
  "supply-chain-visibility-needs-an-operating-model": {
    heading: "Follow an order line through its hand-offs",
    detail: "Choose a single material flow before building a control tower. Retain the order line, promised date, shipment, receipt, quantity, unit, and event time. Keep the first promise as well as subsequent revisions. Otherwise a repeatedly postponed order can appear on time simply because its target moved.",
    checks: ["Test a partial shipment, split receipt, cancellation, and duplicate event.", "Separate event time from the time your platform received the event.", "Agree who resolves missing receipts and how long an exception can remain open."],
    sources: [events],
  },
  "distributor-analytics-decisions": {
    heading: "Balance stock before interpreting sales",
    detail: "At distributor, SKU, location, and reporting-period level, reconcile opening stock plus receipts, less sales, with returns and adjustments applied according to the agreed sign convention. Compare that calculated balance with the submitted closing stock. Show a missing distributor feed as missing; turning it into zero sales gives the commercial team the wrong problem to investigate.",
    checks: ["Normalize cases and individual units before aggregating quantities.", "Keep sell-in and sell-out in distinct measures with their own dates.", "Check whether target changes were approved before comparing territories."],
    sources: [modelling, events],
  },
  "airline-sales-analytics-beyond-route-performance": {
    heading: "Compare bookings at the same point before departure",
    detail: "Preserve dated booking snapshots. Compare a departure's bookings with an earlier comparable departure at the same number of days before travel. Comparing today's forward bookings with a previous flight's final passenger count mixes two different states. Keep booking records separate from flown activity, and make cancellations and itinerary changes traceable.",
    checks: ["Verify that a changed itinerary does not count the same sale twice.", "Retain booking date, departure date, and snapshot date as distinct fields.", "Ask the commercial owner which holidays, capacity changes, and route changes make comparisons unsuitable."],
    sources: [modelling],
  },
  "build-the-pipeline-before-the-prediction": {
    heading: "Prove that a failed load can be replayed safely",
    detail: "A useful first acceptance test is recovery. Interrupt a load after some records have landed, then replay it. Business keys and control totals should reconcile without duplicate records. Retain rejected records with a reason and an owner. For a prediction dataset, also record when each input became available so future information cannot silently enter historical training rows.",
    checks: ["Exercise schema changes, late files, and an empty but successful source response.", "Version transformations and record the exact input snapshot used for training.", "Compare a model with a simple baseline on data from a later period."],
    sources: [modelling, aiRisk],
  },
  "where-ai-automation-belongs-in-reporting": {
    heading: "Keep the first workflow small enough to audit",
    detail: "Start with a draft variance explanation that cites approved figures and waits for a reviewer. Use deterministic code for arithmetic and thresholds. Let the language model help with wording, then test whether each explanation is supported by the supplied evidence. If a source is missing or contradictory, route the item for review instead of manufacturing a reason.",
    checks: ["Test missing evidence, conflicting periods, and instructions embedded in retrieved documents.", "Ensure a user cannot retrieve records outside their existing permissions.", "Record reviewer corrections and prevent retries from sending duplicate notifications."],
    sources: [aiRisk],
  },
  "workforce-analytics-questions": {
    heading: "Agree who belongs in a headcount snapshot",
    detail: "Define the snapshot date and the treatment of contractors, leave, joiners, and leavers. Count people separately from full-time equivalents. Use effective-dated organizational assignments so a department transfer does not rewrite last year's results. Begin with aggregate planning measures; individual attrition scores require a separate assessment of purpose, access, fairness, and consequences.",
    checks: ["Reconcile the same dated population with the HR owner before comparing periods.", "Suppress small groups and check whether adjacent filters reveal the hidden individuals.", "Test access as a manager outside the employee's reporting line."],
    sources: [modelling, aiRisk],
  },
  "healthcare-operations-analytics-capacity": {
    heading: "Distinguish scheduled capacity from available capacity",
    detail: "For an operational scheduling report, keep booked slots, attended appointments, cancellations, and staffed availability separate. Agree the denominator with the service owner before presenting utilization. A room on an estate register does not establish that the room is staffed and usable. Keep this work scoped to service operations; clinical decisions need their own validation and oversight.",
    checks: ["Check rescheduled appointments and events recorded after the reporting cutoff.", "Show feed freshness so an incomplete day is not mistaken for falling demand.", "Limit identifiable records to the operational roles that need them."],
    sources: [modelling, aiRisk],
  },
  "social-media-analytics-beyond-vanity-metrics": {
    heading: "Keep platform measures comparable without pretending they match",
    detail: "Record the platform definition, extraction date, paid or organic status, and campaign identifier alongside each measure. Do not add reach from different platforms and call it unique people: the same person can appear in more than one source. Connect tagged visits and business events where measurement permits, and label the unobserved part of the journey.",
    checks: ["Check time zones and reporting windows before comparing exports.", "Separate a platform-reported conversion from a reconciled order.", "Test deleted content and revised platform totals without overwriting extraction history."],
    sources: [commerce],
  },
  "ecommerce-analytics-connect-demand-margin-fulfilment": {
    heading: "Make refunds traceable to the original transaction",
    detail: "Retain order-line and transaction identifiers through payments, shipments, and refunds. An order with several items may have more than one shipment or refund. Aggregate those events to the intended grain before joining them, or the join can inflate revenue and cost. Use the order and payment systems to reconcile the ledger; web analytics captures a different part of the journey.",
    checks: ["Test a partial refund, failed payment, duplicate purchase event, and split shipment.", "Display the treatment of tax, shipping, discounts, fees, and product cost.", "Reconcile event counts with the commerce backend and explain tracking gaps."],
    sources: [commerce, modelling],
  },
  "marketing-measurement-before-attribution": {
    heading: "Write down what would change the budget decision",
    detail: "Before commissioning a model, specify the decision, the cost data available, the outcome being measured, and what would count as useful evidence. A channel being credited for a purchase does not establish that the purchase would disappear without it. Distinguish descriptive attribution from a causal test and document the assumptions behind either approach.",
    checks: ["Reconcile campaign spend with finance and retain currency and fee treatment.", "Define purchase and refund tracking before comparing acquisition channels.", "Record uncertainty and other changes, such as pricing or stock availability, alongside the recommendation."],
    sources: [commerce],
  },
};

export type IndustryBrief = { question: string; data: string; firstDelivery: string; acceptance: string; measure: string; related: string };
export const industryBriefs: Record<string, IndustryBrief> = {
  "banking-financial-services-fintech": { question: "Which reconciliation exceptions need investigation before a reporting cutoff?", data: "Ledger entries, account and product mappings, entity calendars, balances, and approved adjustment records.", firstDelivery: "An exception register for one reporting stream, with traceable balances and a named finance owner.", acceptance: "Reconcile one closed period; test reversals, late postings, duplicate loads, and restricted account access. Risk or credit models require separate model validation.", measure: "Unresolved exceptions, age of exceptions, reconciliation time, and corrections after release.", related: "trusted-finance-analytics-from-source-to-decision" },
  insurance: { question: "Where are claims waiting, and which hand-off needs attention?", data: "Claim identifiers, status history, document requests, assignments, payments, and reopen events.", firstDelivery: "A claims operations view that separates queue time from active handling and shows the responsible team.", acceptance: "Trace reopened claims and partial payments. Agree how paused cases affect elapsed time. Keep the pilot separate from automated coverage or eligibility decisions.", measure: "Age of open claims, time between hand-offs, rework, and missing-document queues.", related: "where-ai-automation-belongs-in-reporting" },
  "government-public-sector": { question: "Which service queues are growing faster than the available capacity?", data: "Service requests, event timestamps, office and service identifiers, staffing availability, and closure reasons.", firstDelivery: "A service-level backlog view with agreed definitions for received, completed, withdrawn, and reopened requests.", acceptance: "Reconcile counts to source registers, test cross-agency permissions, and separate incomplete feeds from a true drop in demand.", measure: "Backlog age, completion time by service, reopened requests, and reporting completeness.", related: "build-the-pipeline-before-the-prediction" },
  "energy-oil-gas": { question: "Which capital projects have commitments that need a finance review?", data: "Approved expenditure, purchase-order commitments, invoices, change approvals, project identifiers, and reporting currency.", firstDelivery: "A project expenditure view separating approved budget, commitments, and actuals at a consistent cutoff.", acceptance: "Check cancelled orders, invoice-to-commitment relief, currency conversion, and approval revisions. Operational telemetry and safety systems stay under their own controls.", measure: "Unreconciled commitments, aged approvals, forecast changes, and time spent assembling the review pack.", related: "trusted-finance-analytics-from-source-to-decision" },
  "manufacturing-logistics-supply-chain": { question: "Which order lines are at risk of missing the original promise?", data: "Order lines, original and revised promises, shipment and receipt events, material masters, and units of measure.", firstDelivery: "A daily exception queue for one material flow with ownership for missing or delayed events.", acceptance: "Test split shipments, partial receipts, unit conversions, and event timestamps arriving out of sequence.", measure: "On-time delivery against an agreed promise, exception age, missing events, and time to acknowledgement.", related: "supply-chain-visibility-needs-an-operating-model" },
  "fmcg-consumer-products": { question: "Where is distributor inventory building up despite healthy primary sales?", data: "Sell-in, sell-out, returns, stock snapshots, SKU pack sizes, distributor mappings, and territory targets.", firstDelivery: "A distributor and SKU stock balance with visible feed gaps and a separate secondary-sales trend.", acceptance: "Reconcile stock movements; distinguish units from cases and missing submissions from zero sales.", measure: "Stock coverage, aged inventory, feed completeness, and reconciliation exceptions.", related: "distributor-analytics-decisions" },
  "retail-consumer": { question: "Which products generate sales but lose contribution after returns and fulfilment?", data: "Order lines, payments, discounts, returns, product cost, fulfilment fees, and availability history.", firstDelivery: "A reconciled product and channel view with explicit cost and return timing.", acceptance: "Test split shipments, partial returns, and duplicate purchase events. Agree which costs belong in the selected margin measure.", measure: "Return-adjusted contribution, refund rates, stock availability, and reconciliation differences.", related: "ecommerce-analytics-connect-demand-margin-fulfilment" },
  "automotive-mobility": { question: "Which parts and repair categories repeatedly return for warranty work?", data: "Repair orders, vehicle and part identifiers, warranty claims, repair dates, and dealer mappings.", firstDelivery: "A warranty operations view that separates repeat visits from multiple lines on one repair order.", acceptance: "Check vehicle identifier access, duplicate claims, replacement parts, and repeat-visit windows with the service owner.", measure: "Repeat repair frequency, claim age, part availability, and unmatched repair records.", related: "supply-chain-visibility-needs-an-operating-model" },
  "aviation-airlines-travel": { question: "Which departures are behind their comparable booking curve?", data: "Dated booking snapshots, departure dates, route and market mappings, cancellations, and capacity history.", firstDelivery: "A commercial view comparing departures at equivalent booking horizons, with capacity changes visible.", acceptance: "Test changed itineraries and cancellations; keep booking, departure, and snapshot dates separate. Agree comparable holiday and route periods.", measure: "Booking pace at an agreed horizon, cancellation movement, feed freshness, and unmapped segments.", related: "airline-sales-analytics-beyond-route-performance" },
  "healthcare-life-sciences": { question: "Where do appointment demand and staffed service capacity diverge?", data: "Appointment status events, service locations, staffed sessions, cancellations, and operational calendars.", firstDelivery: "An aggregate service planning view that distinguishes scheduled, staffed, booked, and attended capacity.", acceptance: "Check rescheduling and late events, restrict patient-level access, and agree utilization denominators with service owners. This scope supports operations, not clinical diagnosis.", measure: "Waiting time under an agreed definition, attendance, cancellation patterns, and feed completeness.", related: "healthcare-operations-analytics-capacity" },
  "human-resources-workforce": { question: "Which teams have a gap between approved positions and available capacity?", data: "Effective-dated assignments, approved positions, employment status, working patterns, and recruitment stages.", firstDelivery: "An aggregate workforce snapshot separating people, full-time equivalents, vacancies, and approved plans.", acceptance: "Reconcile a dated population with HR, test transfers and leave, and suppress small groups. Individual employment decisions need separate review.", measure: "Vacancy duration, headcount reconciliation differences, reporting time, and recruitment stage age.", related: "workforce-analytics-questions" },
  "real-estate-construction": { question: "Which project changes affect the approved cost and completion plan?", data: "Approved budgets, commitments, invoices, progress updates, change requests, and schedule versions.", firstDelivery: "A project controls register that retains the baseline and shows approved changes separately from pending requests.", acceptance: "Check revisions, cancelled commitments, duplicate invoices, and inconsistent progress dates with project controls.", measure: "Pending change age, forecast movement, unreconciled costs, and missing progress updates.", related: "trusted-finance-analytics-from-source-to-decision" },
};

export const publicStories = [
  { name: "Kraft Heinz", title: "Giving sales teams a shared reporting foundation", summary: "Microsoft describes Kraft Heinz working with Microsoft and EY to move legacy reporting to Power BI on Azure. The story connects platform work with the sales team's need to identify opportunities across retail customers.", lesson: "Our reading: start with the sales review and the customer hierarchy before choosing dashboard layouts.", url: "https://www.microsoft.com/en/customers/story/1657967450160676822-kraftheinzcompany-consumer-goods-azure-en-united-states", industries: ["fmcg-consumer-products", "manufacturing-logistics-supply-chain"], insights: ["distributor-analytics-decisions", "supply-chain-visibility-needs-an-operating-model"] },
  { name: "NHS Property Services", title: "Connecting cleaning audits to operational reporting", summary: "Microsoft's customer story describes a Power Platform cleaning-audit application that schedules audits and sends submitted results into Power BI dashboards and reports.", lesson: "Our reading: capturing a structured event at the point of work can be as important as the report built on top of it.", url: "https://www.microsoft.com/en/customers/story/26033-nhs-property-services-ltd-power-apps", industries: ["healthcare-life-sciences", "real-estate-construction", "government-public-sector"], insights: ["healthcare-operations-analytics-capacity", "where-ai-automation-belongs-in-reporting"] },
  { name: "Marks & Spencer", title: "Making a shared data platform usable across retail", summary: "Microsoft describes M&S using Azure Synapse Analytics and Power BI, with its BEAM team opening access to relevant data across the business and automating pipelines and reports.", lesson: "Our reading: a shared platform needs an ownership and access model as well as data movement.", url: "https://www.microsoft.com/en/customers/story/1620068383237408887-marksandspencer-azuresynapseanalytics-unitedkingdom", industries: ["retail-consumer"], insights: ["ecommerce-analytics-connect-demand-margin-fulfilment", "build-the-pipeline-before-the-prediction"] },
];
