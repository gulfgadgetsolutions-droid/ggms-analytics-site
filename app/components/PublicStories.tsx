import { publicStories } from "../lib/editorial";

export default function PublicStories({ industry, insight }: { industry?: string; insight?: string }) {
  const stories = publicStories.filter((story) =>
    industry ? story.industries.includes(industry) : insight ? story.insights.includes(insight) : true,
  );
  if (!stories.length) return null;
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8" aria-label="Published external case studies">
      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">Published external case studies</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">What organizations have put into practice</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">These are Microsoft-published customer stories, not GGMS projects or client endorsements. Summaries describe the publisher’s account; the lessons are our interpretation. Follow the source for its full context.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {stories.map((story) => (
          <article key={story.name} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold text-cyan-800">{story.name}</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950">{story.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-700">{story.summary}</p>
            <p className="mt-4 border-l-2 border-cyan-600 pl-4 text-sm leading-7 text-slate-600">{story.lesson}</p>
            <a href={story.url} className="mt-6 inline-block font-semibold text-cyan-800 underline underline-offset-4">Read the Microsoft story about {story.name}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
