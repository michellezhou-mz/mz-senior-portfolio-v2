import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Michelle Zhou" },
      {
        name: "description",
        content:
          "Selected case studies across AI, service design, enterprise and 0→1 product — evidence of solving meaningful problems in complex environments.",
      },
      { property: "og:title", content: "Work — Michelle Zhou" },
      {
        property: "og:description",
        content:
          "Case studies across AI, service design, enterprise and 0→1 product.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <section className="container-editorial py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="eyebrow text-muted-foreground">Work</p>
        <h1 className="display mt-4 text-4xl text-foreground md:text-6xl">
          Evidence of solving meaningful problems.
        </h1>
        <p className="mt-6 max-w-xl text-foreground/75 md:text-lg">
          A selection of work across AI, service design, enterprise platforms
          and 0→1 product — chosen for what they reveal about how I think and
          lead.
        </p>
      </div>

      <div className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-12">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to="/work/$slug"
            params={{ slug: p.slug }}
            className={`group block md:col-span-6 ${i % 2 === 1 ? "md:mt-24" : ""}`}
          >
            <div className="overflow-hidden rounded-sm bg-secondary">
              <img
                src={p.image}
                alt={p.title}
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {p.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 font-accent text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <h2 className="mt-4 font-serif text-3xl text-foreground transition-colors group-hover:text-primary md:text-4xl">
              {p.title}
            </h2>
            <p className="mt-3 max-w-md font-serif text-lg italic text-foreground/85">
              {p.subtitle}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/75">
              <span className="eyebrow mr-2 text-primary">Impact</span>
              {p.impact}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-accent text-xs uppercase tracking-[0.22em] text-foreground link-underline">
              View case study
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
