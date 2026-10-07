import { site, footer, nav } from "@/content/profile";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Year from "@/components/Year";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/40">
      <div className="container-site flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {site.designation} · {site.department}, {site.organisation}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {nav.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-site flex flex-col gap-1 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <Year /> {site.name}. All rights reserved.
          </p>
          <p>{footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
