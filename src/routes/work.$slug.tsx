import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects, type Project, type CaseStudySection } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) {
      return {
        meta: [
          { title: "Case study not found — Michelle Zhou" },
          { name: "description", content: "This case study could not be found." },
        ],
      };
    }
    const title = `${project.title} — ${project.subtitle}`;
    return {
      meta: [
        { title: `${project.title} — Michelle Zhou` },
        { name: "description", content: project.caseStudy.heroSummary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.caseStudy.heroSummary },
        { property: "og:image", content: project.image },
        { name: "twitter:image", content: project.image },
      ],
    };
  },
  loader: ({ params }): { project: Project } => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  notFoundComponent: () => (
    <div className="container-editorial py-32 text-center">
      <p className="eyebrow text-muted-foreground">404</p>
      <h1 className="display mt-6 text-4xl text-foreground md:text-6xl">
        Case study not found.
      </h1>
      <Link
        to="/work"
        className="mt-10 inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 font-accent text-xs uppercase tracking-[0.2em] text-primary-foreground"
      >
        Back to all work →
      </Link>
    </div>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const data = Route.useLoaderData() as { project: Project };
  const { project } = data;
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article>
      {/* HERO */}
      <header className="container-editorial pt-20 pb-16 md:pt-28 md:pb-24">
        <Link
          to="/work"
          className="font-accent text-xs uppercase tracking-[0.22em] text-muted-foreground link-underline"
        >
          ← All work
        </Link>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((t: string) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 font-accent text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="display mt-6 text-4xl text-foreground md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl font-serif text-xl italic text-foreground/85 md:text-2xl">
              {project.subtitle}
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
              {project.caseStudy.heroSummary}
            </p>
          </div>
          <aside className="md:col-span-4 md:self-end">
            <dl className="grid grid-cols-2 gap-y-4 border-t border-border pt-6 text-sm">
              <dt className="eyebrow text-muted-foreground">Role</dt>
              <dd className="text-foreground">{project.role}</dd>
              <dt className="eyebrow text-muted-foreground">Context</dt>
              <dd className="text-foreground">{project.context}</dd>
              <dt className="eyebrow text-muted-foreground">Year</dt>
              <dd className="text-foreground">{project.year}</dd>
            </dl>
          </aside>
        </div>
      </header>

      {/* COVER */}
      <div className="container-editorial">
        <div className="overflow-hidden rounded-sm bg-secondary">
          <img
            src={project.image}
            alt={`${project.title} — cover`}
            width={1920}
            height={1080}
            className="aspect-[16/9] w-full object-cover"
            style={{ boxShadow: "var(--shadow-editorial)" }}
          />
        </div>
      </div>

      {/* SNAPSHOT */}
      <section className="container-editorial mt-20 md:mt-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">Snapshot</p>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              At a glance.
            </h2>
          </div>
          <dl className="grid gap-x-10 gap-y-6 md:col-span-8 md:grid-cols-2">
            {[
              ["Industry", project.caseStudy.snapshot.industry],
              ["Team", project.caseStudy.snapshot.teamSize],
              ["My role", project.caseStudy.snapshot.role],
              ["Scope", project.caseStudy.snapshot.scope],
              ["Constraints", project.caseStudy.snapshot.constraints],
            ].map(([label, value]) => (
              <div key={label} className="border-t border-border pt-4">
                <dt className="eyebrow text-muted-foreground">{label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-foreground/85">
                  {value}
                </dd>
              </div>
            ))}
            <div className="border-t border-primary/40 pt-4 md:col-span-2">
              <dt className="eyebrow text-primary">Impact</dt>
              <dd className="mt-2 font-serif text-lg text-foreground md:text-xl">
                {project.impact}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="container-editorial mt-20 md:mt-28">
        <div className="mx-auto max-w-3xl space-y-16 md:space-y-20">
          {project.caseStudy.sections.map((s: CaseStudySection, i: number) => (
            <div key={s.heading}>
              <p className="font-accent text-xs uppercase tracking-[0.22em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
                {s.heading}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-foreground/85 md:text-lg">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NEXT */}
      <section className="container-editorial mt-28 pb-24 md:mt-36 md:pb-32">
        <div className="flex items-end justify-between border-b border-border pb-5">
          <h2 className="font-serif text-2xl text-foreground">Continue reading</h2>
          <Link
            to="/work"
            className="font-accent text-xs uppercase tracking-[0.2em] text-foreground link-underline"
          >
            All work →
          </Link>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="overflow-hidden rounded-sm bg-secondary">
                <img
                  src={p.image}
                  alt={p.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="eyebrow mt-5 text-muted-foreground">
                {p.discipline}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-foreground transition-colors group-hover:text-primary md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/75">{p.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
