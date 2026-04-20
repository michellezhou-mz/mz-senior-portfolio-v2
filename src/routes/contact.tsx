import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Michelle Zhou" },
      {
        name: "description",
        content:
          "Get in touch with Michelle Zhou for design leadership, product strategy, and collaboration.",
      },
      { property: "og:title", content: "Contact — Michelle Zhou" },
      {
        property: "og:description",
        content: "Let's chat about meaningful products and stronger teams.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container-editorial py-20 md:py-28">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-muted-foreground">Let's connect</p>
          <h1 className="display mt-6 text-5xl text-foreground md:text-[5.5rem]">
            Tangible.
            <br />
            <span className="text-primary">Visible.</span>
            <br />
            <span className="italic">Collaborative.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
            I'm focused on creating tangible, visible and collaborative
            outcomes from day one. Whether you're scoping a new product,
            building a design function, or hiring a senior designer stepping
            into lead, I'd love to talk.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {[
              {
                label: "Currently",
                value: "Open to lead roles",
              },
              {
                label: "Based in",
                value: "Sydney, Australia",
              },
              {
                label: "Working with",
                value: "Teams shipping at scale",
              },
              {
                label: "Response",
                value: "Within 1—2 days",
              },
            ].map((item) => (
              <div key={item.label} className="bg-background p-6">
                <p className="font-accent text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-2 font-serif text-xl text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="md:col-span-5">
          <div className="sticky top-28 rounded-sm bg-secondary p-8 md:p-10">
            <p className="eyebrow text-foreground/60">Direct</p>
            <a
              href="mailto:michelle.a.zhou@gmail.com"
              className="mt-5 block font-serif text-2xl text-foreground link-underline md:text-3xl"
            >
              michelle.a.zhou@gmail.com
            </a>

            <div className="mt-10 h-px w-full bg-foreground/15" />

            <p className="eyebrow mt-10 text-foreground/60">Elsewhere</p>
            <ul className="mt-5 space-y-4 text-base">
              <li>
                <a
                  href="https://www.linkedin.com/in/michellezhou-design"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-foreground/10 pb-3 font-serif text-xl text-foreground transition-colors hover:text-primary"
                >
                  LinkedIn
                  <span aria-hidden className="font-sans text-base transition-transform group-hover:translate-x-1">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/michelleful_lab"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-foreground/10 pb-3 font-serif text-xl text-foreground transition-colors hover:text-primary"
                >
                  Instagram
                  <span aria-hidden className="font-sans text-base transition-transform group-hover:translate-x-1">↗</span>
                </a>
              </li>
            </ul>

            <p className="mt-10 font-accent text-[11px] uppercase tracking-[0.22em] text-foreground/60">
              Designing clearer futures — together.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
