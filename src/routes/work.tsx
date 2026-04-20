import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Michelle Zhou" },
      {
        name: "description",
        content:
          "Selected work across product, service and enterprise — from AI assistants to compassionate banking journeys.",
      },
      { property: "og:title", content: "Work — Michelle Zhou" },
      {
        property: "og:description",
        content: "Selected work across product, service and enterprise design.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="container-editorial py-20 md:py-28">
      <header className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="eyebrow text-muted-foreground">Selected Work · 2021—2024</p>
          <h1 className="display mt-6 text-5xl text-foreground md:text-7xl">
            A body of work in <span className="text-primary">strategy</span>,
            systems & craft.
          </h1>
        </div>
        <p className="text-foreground/75 md:col-span-4 md:mt-4">
          A curated set of projects spanning conversational AI, financial
          services, marketplaces, learning, and service design — each shipped
          with a small team and a clear point of view.
        </p>
      </header>

      <div className="mt-20 space-y-28 md:space-y-40">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className={`grid gap-10 md:grid-cols-12 md:gap-14 ${
              i % 2 === 1 ? "md:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="md:col-span-7">
              <div className="overflow-hidden rounded-sm bg-secondary">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.tagline}`}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </figure>
            <div className="md:col-span-5 md:self-center">
              <p className="eyebrow text-muted-foreground">
                {String(i + 1).padStart(2, "0")} · {p.discipline}
              </p>
              <h2 className="mt-5 font-serif text-4xl text-foreground md:text-5xl">
                {p.title}
              </h2>
              <p className="mt-5 text-lg text-foreground/80">{p.tagline}</p>

              <dl className="mt-8 grid grid-cols-2 gap-y-4 border-t border-border pt-6 text-sm">
                <dt className="eyebrow text-muted-foreground">Context</dt>
                <dd className="text-foreground">{p.context}</dd>
                <dt className="eyebrow text-muted-foreground">Role</dt>
                <dd className="text-foreground">{p.role}</dd>
                <dt className="eyebrow text-muted-foreground">Year</dt>
                <dd className="text-foreground">{p.year}</dd>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
