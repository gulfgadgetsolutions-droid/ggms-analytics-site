/* Run with npm run test:content. Set AUDIT_BASE_URL to also check a running build. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cache = new Map();
function load(file) {
  file = path.resolve(__dirname, '..', file);
  if (cache.has(file)) return cache.get(file);
  const compiledModule = { exports: {} };
  cache.set(file, compiledModule.exports);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  new Function('require', 'module', 'exports', code)((name) => {
    assert(name.startsWith('.'), `Unexpected dependency ${name}`);
    return load(path.resolve(path.dirname(file), `${name}.ts`));
  }, compiledModule, compiledModule.exports);
  return compiledModule.exports;
}
const { insightArticles, insightCategories } = load('app/lib/insights.ts');
const { industries } = load('app/lib/industries.ts');
const { industryBriefs, publicStories, insightNotes } = load('app/lib/editorial.ts');
const { getSiteUrl, isPublicSite } = load('app/lib/site.ts');
const sitemap = load('app/sitemap.ts').default;
const robots = load('app/robots.ts').default;
const unique = (items, label) => assert.equal(new Set(items).size, items.length, `Duplicate ${label}`);
unique(insightArticles.map(a => a.slug), 'article slug');
unique(industries.map(a => a.slug), 'industry slug');
unique(insightArticles.map(a => a.title), 'article title');
assert.equal(Object.keys(insightNotes).length, insightArticles.length);
assert.equal(Object.keys(industryBriefs).length, industries.length);
for (const article of insightArticles) {
  assert(insightCategories.includes(article.category));
  assert(article.sources.length > 0, `${article.slug}: no sources`);
  assert(article.sections.every(s => s.paragraphs.length > 0));
  unique(article.sections.map(s => s.id), `section ID in ${article.slug}`);
  assert(article.sections.some(s => s.id === 'checks-before-release'));
  assert(Date.parse(article.dateModified) >= Date.parse(article.datePublished));
  assert(!JSON.stringify(article).match(/experience-informed|practitioner-led|lorem ipsum/i));
  article.sources.forEach(source => assert.equal(new URL(source.url).protocol, 'https:'));
}
for (const industry of industries) {
  const brief = industryBriefs[industry.slug];
  for (const key of ['question', 'data', 'firstDelivery', 'acceptance', 'measure']) assert(brief[key]?.length > 35, `${industry.slug}: missing ${key}`);
  assert(insightArticles.some(a => a.slug === brief.related), `${industry.slug}: broken related guide`);
}
for (const story of publicStories) {
  assert.equal(new URL(story.url).hostname, 'www.microsoft.com');
  story.insights.forEach(slug => assert(insightArticles.some(a => a.slug === slug)));
  story.industries.forEach(slug => assert(industries.some(a => a.slug === slug)));
}
const envKeys = ['NEXT_PUBLIC_SITE_URL', 'VERCEL_PROJECT_PRODUCTION_URL', 'VERCEL_ENV'];
const saved = Object.fromEntries(envKeys.map(key => [key, process.env[key]]));
try {
  envKeys.forEach(key => delete process.env[key]);
  assert.equal(isPublicSite(), false);
  assert.deepEqual(sitemap(), []);
  assert.equal(robots().rules.disallow, '/');
  process.env.NEXT_PUBLIC_SITE_URL = 'https://example.com';
  assert.equal(isPublicSite(), true);
  const entries = sitemap();
  assert.equal(entries.filter(e => e.url.includes('/insights/')).length, insightArticles.length);
  assert.equal(entries.filter(e => e.url.includes('/industries/')).length, industries.length);
  assert.equal(entries.find(e => e.url === 'https://example.com/services').lastModified, undefined);
  unique(entries.map(e => e.url), 'sitemap URL');
  process.env.VERCEL_ENV = 'preview';
  assert.equal(isPublicSite(), false);
  delete process.env.VERCEL_ENV;
  for (const origin of ['http://127.0.0.1:3000', 'http://10.0.0.1', 'http://192.168.1.1', 'http://[::1]:3000']) {
    process.env.NEXT_PUBLIC_SITE_URL = origin; assert.equal(isPublicSite(), false);
  }
  for (const invalid of ['ftp://example.com', 'https://example.com/path', 'https://user:secret@example.com']) {
    process.env.NEXT_PUBLIC_SITE_URL = invalid; assert.throws(getSiteUrl);
  }
} finally {
  envKeys.forEach(key => saved[key] === undefined ? delete process.env[key] : process.env[key] = saved[key]);
}
console.log(`PASS: ${insightArticles.length} articles, ${industries.length} industries, ${publicStories.length} attributed external stories; source, relationship, date, sitemap and preview-indexing checks.`);

async function checkRoutes() {
  const base = process.env.AUDIT_BASE_URL;
  if (!base) return;
  const routes = ['/insights', '/industries', ...insightArticles.map(a => `/insights/${a.slug}`), ...industries.map(a => `/industries/${a.slug}`)];
  const titles = [], canonicals = [], internal = new Set();
  for (const route of routes) {
    const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(30000) });
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: H1 count`);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert(title, `${route}: missing title`); titles.push(title);
    const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
    assert(canonical, `${route}: missing canonical`);
    assert.equal(new URL(canonical).pathname, route); canonicals.push(canonical);
    assert(/<meta name="description" content="[^"]+"/.test(html), `${route}: missing description`);
    const og = html.match(/<meta property="og:url" content="([^"]+)"/)?.[1];
    assert(og && new URL(og).pathname === route, `${route}: wrong social URL`);
    const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
    for (const match of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
      const href = match[1].replaceAll('&amp;', '&');
      if (href.startsWith('#')) assert(ids.has(href.slice(1)), `${route}: broken anchor ${href}`);
      if (href.startsWith('/')) internal.add(href.split('#')[0].split('?')[0]);
    }
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
    if (route.startsWith('/insights/')) assert(html.includes('Sources and further reading'));
    if (route.startsWith('/industries/')) assert(html.includes('Acceptance checks'));
  }
  unique(titles, 'rendered title'); unique(canonicals, 'rendered canonical');
  for (const route of internal) {
    if (routes.includes(route)) continue;
    const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(30000) });
    assert(response.ok, `Broken internal destination ${route}: ${response.status}`);
    await response.arrayBuffer();
  }
  for (const route of ['/insights/not-a-real-article', '/industries/not-a-real-industry']) {
    const response = await fetch(new URL(route, base));
    assert.equal(response.status, 404, route);
  }
  console.log(`PASS: ${routes.length} rendered pages; headings, unique metadata, canonical/social URLs, JSON-LD, anchors, ${internal.size} internal destinations and invalid-slug 404s.`);
}
checkRoutes().catch(error => { console.error(error); process.exitCode = 1; });
