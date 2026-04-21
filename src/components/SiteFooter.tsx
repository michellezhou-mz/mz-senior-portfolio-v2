import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-background">
      <div className="container-editorial py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow text-muted-foreground">Signature</p>
            <p className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
              Meaningful products. <br />
              Stronger teams. Forward momentum.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="link-underline">Home</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:michelle.a.zhou@gmail.com" className="link-underline">
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/michellezhou-design"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/michelleful_lab"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p className="font-accent uppercase tracking-[0.18em]">
            © {new Date().getFullYear()} Michelle Zhou — Sydney
          </p>
          <p className="font-accent uppercase tracking-[0.18em]">
            Designing clearer futures
          </p>
        </div>
      </div>
    </footer>
  );
}
