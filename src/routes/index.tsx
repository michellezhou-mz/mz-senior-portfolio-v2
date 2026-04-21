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
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-editorial pt-16 pb-20 md:pt-24 md:pb-32">
          <div className="grid gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="eyebrow reveal text-muted-foreground">
                G'day — I'm Michelle
              </p>
              <h1 className="display reveal reveal-delay-1 mt-6 text-[2.75rem] text-foreground sm:text-6xl md:text-[5.25rem]">
                Shaping <span className="text-primary">meaningful products</span>,
                stronger teams, and{" "}
                <span className="italic text-foreground/80">clearer futures.</span>
              </h1>
              <p className="reveal reveal-delay-2 mt-10 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
                A strategic design leader shaping meaningful products, clearer
                futures, and stronger teams. I work across product, service and
                enterprise — turning ambiguity into elegant, human outcomes.
              </p>

              <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-5">
                <Link
                  to="/work"
                  className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 font-accent text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90"
                >
                  See selected work
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  to="/contact"
                  className="font-accent text-xs uppercase tracking-[0.2em] text-foreground link-underline"
                >
                  Start a conversation
                </Link>
              </div>
            </div>

            <div className="reveal reveal-delay-2 md:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-sm bg-secondary/60" />
                <img
                  src={heroImage}
                  alt="Editorial composition of warm light, stone and forest tones"
                  width={1536}
                  height={1280}
                  className="aspect-[4/5] w-full rounded-sm object-cover"
                  style={{ boxShadow: "var(--shadow-editorial)" }}
                />
              </div>
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

      {/* SELECTED WORK */}
      <section className="container-editorial py-24 md:py-32">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-muted-foreground">Selected Work</p>
            <h2 className="display mt-4 text-4xl text-foreground md:text-6xl">
              Operating across <br className="hidden md:inline" />
              ambiguity & scale.
            </h2>
          </div>
          <Link
            to="/work"
            className="hidden font-accent text-xs uppercase tracking-[0.2em] text-foreground link-underline md:inline-block"
          >
            All work →
          </Link>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-12">
          {featured.map((p, i) => (
            <article
              key={p.slug}
              className={`group md:col-span-6 ${i === 1 ? "md:mt-24" : ""}`}
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
              <div className="mt-6 flex items-center gap-3">
                <span className="eyebrow text-muted-foreground">{p.discipline}</span>
                <span className="h-px w-8 bg-border" />
                <span className="eyebrow text-muted-foreground">{p.year}</span>
              </div>
              <h3 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-md text-foreground/75">{p.tagline}</p>
            </article>
          ))}
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
                Start a conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
