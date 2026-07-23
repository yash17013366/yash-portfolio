import { Github, Linkedin, Mail } from "lucide-react";
export function Footer() {
  return (
    <footer className="relative border-t border-border/60 px-6 py-16 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-light text-silver-gradient">Yash Gaikwad</p>
          <p className="mt-1 text-xs font-light text-muted-foreground">
            AI & Analytics student building full-stack systems.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <IconLink href="https://github.com/yash17013366" label="GitHub">
            <Github className="h-4 w-4" />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/yash-gaikwad-468226283/" label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </IconLink>
          <IconLink href="mailto:yash99720@gmail.com" label="Email">
            <Mail className="h-4 w-4" />
          </IconLink>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-[10px] uppercase tracking-[0.35em] text-muted-foreground/70">
        © {new Date().getFullYear()} · All rights reserved.
      </p>
    </footer>
  );
}
function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-silver/60 hover:text-foreground"
    >
      {children}
    </a>
  );
}
