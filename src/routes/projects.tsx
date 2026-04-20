import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Michelle Zhou" },
      {
        name: "description",
        content:
          "An index of projects, explorations and experiments by Michelle Zhou.",
      },
      { property: "og:title", content: "Projects — Michelle Zhou" },
      {
        property: "og:description",
        content: "Projects, explorations and experiments.",
      },
    ],
  }),
  component: ProjectsPage,
});

const explorations = [
  {
    title: "Editorial Systems",
    tag: "Design Systems",
    note: "A pattern library for content-led product surfaces — typographic rhythm, modular blocks, and accessible defaults.",
    year: "2024",
  },
  {
    title: "Conversational Patterns",
    tag: "AI / UX",
    note: "Reusable interaction primitives for AI assistants that disclose, repair, and hand off gracefully.",
    year: "2024",
  },
  {
    title: "Service Blueprints, Lighter",
    tag: "Service Design",
    note: "A leaner template for service blueprints that teams will actually update after the workshop.",
    year: "2023",
  },
  {
    title: "Critique Rituals",
    tag: "Leadership",
    note: "Operating model for healthy design critique — psychological safety, structured feedback, growth loops.",
    year: "2023",
  },
];

function ProjectsPage() {
  return (
    <div className="container-editorial py-20 md:py-28">
      <header className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="eyebrow text-muted-foreground">Projects Index</p>
          <h1 className="display mt-6 text-5xl text-foreground md:text-7xl">
            An archive of <span className="italic">work, thought</span> & play.
          </h1>
        </div>
        <p className="text-foreground/75 md:col-span-4">
          Client projects sit alongside ongoing explorations — small bets,
          frameworks, and side investigations that sharpen the practice.
        </p>
      </header>

      {/* CASE STUDIES */}
      <section className="mt-20">
        <div className="flex items-end justify-between border-b border-border pb-5">
          <h2 className="font-serif text-2xl text-foreground">Case Studies</h2>
          <span className="font-accent text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {projects.length} Projects
          </span>
        </div>

        <ul className="divide-y divide-border">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <div className="group grid grid-cols-12 items-center gap-4 py-7 transition-colors hover:bg-secondary/40 md:gap-6 md:py-9">
                <span className="col-span-1 font-accent text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-11 font-serif text-2xl text-foreground transition-colors group-hover:text-primary md:col-span-4 md:text-3xl">
                  {p.title}
                </h3>
                <p className="col-span-8 text-sm text-foreground/75 md:col-span-4">
                  {p.tagline}
                </p>
                <span className="col-span-4 text-right font-accent text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3">
                  {p.discipline}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* EXPLORATIONS */}
      <section className="mt-24">
        <div className="flex items-end justify-between border-b border-border pb-5">
          <h2 className="font-serif text-2xl text-foreground">Explorations</h2>
          <span className="font-accent text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Ongoing
          </span>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {explorations.map((e) => (
            <article
              key={e.title}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition-all hover:border-primary"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-accent text-[11px] uppercase tracking-[0.22em] text-accent">
                  {e.tag}
                </span>
                <span className="font-accent text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {e.year}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-3xl text-foreground">
                {e.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                {e.note}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
