import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/about-portrait.jpg";
import workspace from "@/assets/about-workspace.jpg";
import life from "@/assets/about-life.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Michelle Zhou — Senior Designer" },
      {
        name: "description",
        content:
          "A senior designer turning complex problems into products people trust and enjoy using — across product, service, and enterprise.",
      },
      { property: "og:title", content: "About Michelle Zhou" },
      {
        property: "og:description",
        content:
          "Strategic clarity, human understanding, quality & craft, collaborative leadership.",
      },
      { property: "og:image", content: portrait },
      { name: "twitter:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    k: "01",
    t: "Strategic clarity",
    d: "I bring structure to complexity and help teams make better decisions, faster.",
  },
  {
    k: "02",
    t: "Human understanding",
    d: "I care deeply about real customer needs and design things people actually enjoy using.",
  },
  {
    k: "03",
    t: "Quality & craft",
    d: "Thoughtful execution, strong taste, and a quiet insistence on raising the bar.",
  },
  {
    k: "04",
    t: "Collaborative leadership",
    d: "I mentor, empower, and create the conditions for teams to do their best work.",
  },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-editorial pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-sm bg-secondary/60" />
              <img
                src={portrait}
                alt="Michelle Zhou — portrait in warm natural light"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-sm object-cover"
                style={{ boxShadow: "var(--shadow-editorial)" }}
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="eyebrow text-muted-foreground">About Michelle</p>
            <h1 className="display mt-6 text-[2.5rem] leading-[1.05] text-foreground sm:text-5xl md:text-[4.25rem]">
              I help turn complex problems into{" "}
              <span className="text-primary">products people trust</span> and
              enjoy using.
            </h1>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
              Over the past several years, I've worked across product, service
              and enterprise environments — helping teams bring clarity to
              ambiguity and create thoughtful outcomes that genuinely matter.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 font-accent text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90"
              >
                Connect
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/work"
                className="font-accent text-xs uppercase tracking-[0.2em] text-foreground link-underline"
              >
                See selected work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="bg-secondary/50">
        <div className="container-editorial py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow text-muted-foreground">Practice</p>
              <h2 className="display mt-4 text-4xl text-foreground md:text-5xl">
                How I work.
              </h2>
              <p className="mt-6 max-w-sm text-foreground/75">
                Four principles that quietly shape every project, team, and
                decision I'm part of.
              </p>
            </div>

            <div className="grid gap-8 md:col-span-8 md:grid-cols-2">
              {principles.map((p) => (
                <div
                  key={p.k}
                  className="rounded-sm border border-foreground/10 bg-background/60 p-7 transition-colors hover:border-primary/40"
                >
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
        </div>
      </section>

      {/* CURRENTLY DRAWN TO */}
      <section className="container-editorial py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-sm bg-secondary">
              <img
                src={workspace}
                alt="A calm modern workspace at golden hour"
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow text-muted-foreground">Currently drawn to</p>
            <h2 className="display mt-4 text-4xl text-foreground md:text-5xl">
              What's <span className="italic text-foreground/80">next.</span>
            </h2>
            <p className="mt-6 max-w-md text-foreground/80">
              I'm energised by what's next — startups, lead roles, AI-enabled
              products, mission-driven work, and opportunities to shape
              meaningful products early.
            </p>

            <ul className="mt-8 grid gap-3 font-accent text-xs uppercase tracking-[0.22em] text-foreground/70">
              {[
                "Early-stage product",
                "AI-native experiences",
                "Mission-driven teams",
                "Lead & principal roles",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OUTSIDE OF WORK */}
      <section className="bg-secondary/40">
        <div className="container-editorial py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">Outside of work</p>
            <h2 className="display mt-4 text-4xl text-foreground md:text-5xl">
              How I see <br className="hidden md:inline" />
              the world.
            </h2>
            <p className="mt-6 text-foreground/80">
              Travel, design objects, cities, movement, nature, culture and
              wellbeing all shape how I think. I'm interested in how spaces,
              systems and small details quietly influence how people feel.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-7 overflow-hidden rounded-sm bg-secondary">
              <img
                src={life}
                alt="Architectural arches in warm stone"
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="col-span-5 grid gap-4 md:gap-6">
              <div className="overflow-hidden rounded-sm bg-secondary">
                <img
                  src={workspace}
                  alt="Notebook and warm light"
                  width={640}
                  height={480}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-end rounded-sm border border-foreground/10 bg-background/70 p-6">
                <p className="font-accent text-xs uppercase tracking-[0.22em] text-primary">
                  Lately
                </p>
                <p className="mt-3 font-serif text-lg italic text-foreground/85">
                  Slow walks, ceramics, long-form essays, and the architecture
                  of small Italian towns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="container-editorial py-24 md:py-32">
        <figure className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-accent">Point of view</p>
          <blockquote className="mt-8 font-serif text-3xl italic leading-tight text-foreground md:text-5xl">
            "Good design creates clarity, momentum, and{" "}
            <span className="text-accent">trust</span>."
          </blockquote>
        </figure>
      </section>

      {/* FINAL CTA */}
      <section className="container-editorial pb-24 md:pb-32">
        <div className="rounded-sm bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-24">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow opacity-70">Let's connect</p>
              <h2 className="display mt-4 text-4xl md:text-6xl">
                Let's build something <br /> meaningful.
              </h2>
              <p className="mt-6 max-w-xl text-primary-foreground/85">
                If you're looking for a designer who brings strategic thinking,
                calm momentum and thoughtful execution — I'd love to connect.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-sm bg-warm-white/10 px-6 py-4 font-accent text-xs uppercase tracking-[0.22em] text-primary-foreground ring-1 ring-primary-foreground/30 backdrop-blur transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                Connect →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
