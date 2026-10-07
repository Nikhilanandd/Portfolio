"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/profile";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  /* Highlight the section currently in view. */
  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0 || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Close the mobile menu on Escape. */
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-header backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          aria-label="Back to top"
        >
          <span className="flex h-8 items-center rounded-md bg-primary px-2.5 text-[11px] font-semibold tracking-wide text-primary-foreground">
            {site.monogram}
          </span>
          <span className="hidden max-w-[13rem] truncate text-sm font-semibold sm:block">
            {site.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = activeId === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`inline-block rounded-md border-b-2 px-2.5 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                      active
                        ? "border-primary font-medium text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hidden h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <ThemeToggle />
          <a
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center rounded-lg border border-border px-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border/70 bg-background lg:hidden"
        >
          <ul className="container-site grid gap-1 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-2">
              <a
                href={site.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 flex-1 items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Resume
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground"
              >
                <GithubIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground"
              >
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
