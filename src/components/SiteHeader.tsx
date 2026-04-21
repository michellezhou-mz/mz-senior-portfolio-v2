import { Link } from "@tanstack/react-router";

const links = [
  { to: "/work" as const, label: "Work" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-editorial flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-tight text-foreground md:text-[1.35rem]">
            Michelle Zhou
          </span>
          <span className="eyebrow hidden text-muted-foreground sm:inline mx-0">
            Senior Designer
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-7 md:gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-accent text-sm font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
