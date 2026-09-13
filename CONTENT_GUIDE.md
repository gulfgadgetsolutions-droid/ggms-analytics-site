# Insights and Industries publishing guide

## What the pages contain

Insights are implementation guidance. They are not presented as first-hand client engagements. Sources explain the relevant technical concepts; proposed implementation checks are editorial recommendations. Industry pages describe possible starting scopes and objectives, not achieved results.

The three external customer stories are attributed to Microsoft. GGMS did not deliver those projects and must not place them under a GGMS client-results heading. Keep publisher attribution, source links, and the distinction between reported facts and editorial interpretation.

## Adding a GGMS case study

Collect the approved client name or approved anonymous description, business problem, project scope, systems involved, dates, GGMS contribution, baseline, measured result, measurement period, and publication permission. Name the reviewer who can substantiate the facts. An anonymous case still needs internal evidence. Do not turn a proposed use case or a demonstration dashboard into a client result.

Retain the original publication dates only if they match the publication record. The pre-existing September 2026 dates were preserved during this audit; they were not independently established from a publishing system. The September 9 modification date records this revision.

## Updating content

- Article text lives in `app/lib/insights.ts`; technical sources and practical checks live in `app/lib/editorial.ts`.
- Industry summaries live in `app/lib/industries.ts`; the sector-specific starting scopes are in `industryBriefs` in `app/lib/editorial.ts`.
- Change `dateModified` when the article receives a substantial revision. Reading time is calculated from the article text at approximately 200 words per minute.
- Update the displayed source-check date when references have actually been rechecked. Review links and vendor claims before each public release.
- Do not change an established slug just to make a headline shorter. If a URL must change, add a permanent redirect and update internal links.
- Ask a person with delivery knowledge to review technical recommendations before publication. Do not describe AI-assisted editing as verified human authorship.

## Checks before release

Run `npm run lint`, `npm run test:content`, and `npm run build`.

To test a running build from PowerShell:

```powershell
$env:AUDIT_BASE_URL = 'http://127.0.0.1:3000'
npm run test:content
Remove-Item Env:AUDIT_BASE_URL
```

The audit checks article/industry relationships, source presence, dates, sitemap behavior, headings, canonical and social URLs, structured-data syntax, internal links, anchors, and unknown-slug 404 responses. It does not verify the truth of future claims or substitute for browser and accessibility review.

## Public hosting and search

Set `NEXT_PUBLIC_SITE_URL` to the real HTTPS production origin in the hosting environment before building. Use an origin only, without a path or credentials. The Vercel production-domain variable is also supported. Never publish a build whose canonical URLs point at localhost.

Local/private origins and Vercel preview environments are marked noindex and excluded from the sitemap. This is intentional. These controls are indexing preferences, not access control. Preview sites containing confidential data still need authentication.

After deployment, inspect the real domain's canonical tags, robots.txt, sitemap.xml, response codes, mobile layout, and structured data. Submit the production sitemap in Google Search Console and inspect representative URLs. Neither a successful build nor structured data guarantees crawling, indexing, rich results, or ranking.

The audit did not deploy the site, configure DNS, submit a sitemap, or access Search Console. Third-party image availability, hosting performance, and evolving source material need ongoing review.

References: [Google's people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Google's AI-content guidance](https://developers.google.com/search/blog/2023/02/google-search-and-ai-content), [Sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
