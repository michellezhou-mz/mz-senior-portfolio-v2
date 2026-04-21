import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michelle Zhou — Build what matters. Lead what's next." },
      {
        name: "description",
        content:
          "Strategic design leader shaping meaningful products, clearer futures, and stronger teams.",
      },
      { property: "og:title", content: "Michelle Zhou — Strategic Design Leader" },
      {
        property: "og:description",
        content: "Meaningful products. Stronger teams. Forward momentum.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = projects.slice(0, 3);

  const proofPoints = [
    { k: "01", t: "Design AI messaging at CommBank", d: "Shaping Ceba, an AI assistant serving 17m customers at Australia's largest bank." },
    { k: "02", t: "Delivered $1M annual savings", d: "Simplified a sensitive & complex journey to enable 90% straight-through processing." },
    { k: "03", t: "Unlocked $3M investment decision", d: "Turned customer insight and market opportunity into a board-backed product direction." },
    { k: "04", t: "Strategy, growth & execution", d: "Strong across discovery, monetisation, product design, and delivery." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-editorial pt-16 pb-20 md:pt-24 md:pb-32">
          <div className="grid gap-12 md:grid-cols-3 md:gap-10 md:items-center">
            <div className="md:col-span-2">
              <p className="eyebrow reveal text-muted-foreground">
                G'day — I'm Michelle
              </p>
              <h1 className="display reveal reveal-delay-1 mt-6 text-[2.75rem] text-foreground sm:text-6xl md:text-[5.25rem]">
                Shaping <span className="text-primary">meaningful products</span>,
                stronger teams, and{" "}
                <span className="italic text-foreground/80">clearer futures.</span>
              </h1>
              <p className="reveal reveal-delay-2 mt-10 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
                Located in Sydney, open to remote work globally.
              </p>

              <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="#selected-work"
                  className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 font-accent text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90"
                >
                  VIEW PROJECTS
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <Link
                  to="/contact"
                  className="font-accent text-xs uppercase tracking-[0.2em] text-foreground link-underline"
                >
                  Talk with Michelle
                </Link>
              </div>
            </div>

            <div className="reveal reveal-delay-2 md:col-span-1">
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-sm bg-secondary/60" />
                <img
                  src="/lovable-uploads/aa42ea2e-14e9-4084-903b-a2a3ac666c24.png"
                  alt="Editorial composition of warm light, stone and forest tones"
                  width={1536}
                  height={1280}
                  className="aspect-[4/5] w-full rounded-sm object-cover mt-0 mb-0 my-[32px]"
                  style={{ boxShadow: "var(--shadow-editorial)" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-border bg-secondary/40 py-5">
          <div className="marquee flex w-max items-center gap-12 whitespace-nowrap font-accent text-xs uppercase tracking-[0.32em] text-foreground/70">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span>Product Strategy</span>
                <span aria-hidden>✦</span>
                <span>Service Design</span>
                <span aria-hidden>✦</span>
                <span>Design Leadership</span>
                <span aria-hidden>✦</span>
                <span>Systems Thinking</span>
                <span aria-hidden>✦</span>
                <span>AI & Conversational UX</span>
                <span aria-hidden>✦</span>
                <span>Mentoring</span>
                <span aria-hidden>✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF / CREDIBILITY */}
      <section className="container-editorial py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">RESULTS</p>
            <h2 className="display mt-4 text-4xl text-foreground md:text-5xl">
              Real outcomes, <br className="hidden md:inline" />
              not just deliverables.
            </h2>
          </div>
          <div className="grid gap-8 md:col-span-8 md:grid-cols-2">
            {proofPoints.map((p) => (
              <div key={p.k} className="border-t border-foreground/15 pt-6">
                <p className="font-accent text-xs uppercase tracking-[0.22em] text-primary">
                  {p.k}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-foreground">
                  {p.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="selected-work" className="container-editorial py-24 md:py-32 scroll-mt-24">
        <div>
          <p className="eyebrow text-muted-foreground">Selected Work</p>
          <h2 className="display mt-4 text-4xl text-foreground md:text-6xl">
            Operating across <br className="hidden md:inline" />
            ambiguity & scale.
          </h2>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-12">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className={`group block md:col-span-6 ${i === 1 ? "md:mt-24" : ""}`}
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
              <h3 className="mt-4 font-serif text-3xl text-foreground transition-colors group-hover:text-primary md:text-4xl">
                {p.title}
              </h3>
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

        <div className="mt-16 flex justify-center">
          <Link
            to="/work"
            className="group inline-flex items-center gap-3 rounded-sm border border-foreground/20 px-6 py-4 font-accent text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Read more — view all work
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      {/* THINKING / LEADERSHIP */}
      <section className="bg-secondary/50">
        <div className="container-editorial py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow text-muted-foreground">Practice</p>
              <h2 className="display mt-4 text-4xl text-foreground md:text-5xl">
                How I lead.
              </h2>
              <p className="mt-6 max-w-md text-foreground/75">
                I am a high-judgment operator who turns complexity into
                clarity — aligning people, defining the work, and creating
                space for craft to thrive.
              </p>
            </div>

            <div className="grid gap-10 md:col-span-7 md:grid-cols-2">
              {[
                {
                  k: "01",
                  t: "Frame the right problem",
                  d: "I move teams from output to outcome — defining what's worth solving before we design how.",
                },
                {
                  k: "02",
                  t: "Lead through ambiguity",
                  d: "Strategy, systems, and stakeholders — I bring shape to messy spaces and momentum to stuck ones.",
                },
                {
                  k: "03",
                  t: "Grow people, not just products",
                  d: "I mentor designers into leaders, build healthy critique cultures, and protect craft.",
                },
                {
                  k: "04",
                  t: "Ship with taste & rigour",
                  d: "Editorial sensibility meets enterprise discipline — elegant outcomes that hold up at scale.",
                },
              ].map((b) => (
                <div key={b.k} className="border-t border-foreground/15 pt-6">
                  <p className="font-accent text-xs uppercase tracking-[0.22em] text-primary">
                    {b.k}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-foreground">
                    {b.t}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                    {b.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="container-editorial py-24 md:py-32">
        <figure className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-accent">Belief</p>
          <blockquote className="mt-8 font-serif text-3xl italic leading-tight text-foreground md:text-5xl">
            "Design is the discipline of turning intent into experience.
            Leadership is the discipline of turning intent into{" "}
            <span className="text-accent">collective momentum</span>."
          </blockquote>
          <figcaption className="mt-8 font-accent text-xs uppercase tracking-[0.22em] text-muted-foreground">
            — Michelle Zhou
          </figcaption>
        </figure>
      </section>

      {/* CTA */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="rounded-sm bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-24">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow opacity-70">Let's connect</p>
              <h2 className="display mt-4 text-4xl md:text-6xl">
                Building products <br /> the world needs.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-sm bg-warm-white/10 px-6 py-4 font-accent text-xs uppercase tracking-[0.22em] text-primary-foreground ring-1 ring-primary-foreground/30 backdrop-blur transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                Talk with Michelle →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
