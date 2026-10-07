import type { ComponentType } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { contact, site } from "@/content/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
};

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={contact.heading}
      description={contact.intro}
    >
      <Reveal>
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <a
                href={`mailto:${site.email}`}
                className="text-xl font-semibold break-all text-foreground transition-colors hover:text-primary sm:text-2xl"
              >
                {site.email}
              </a>
              {contact.emailNote && (
                <p className="mt-2 text-sm text-muted-foreground">{contact.emailNote}</p>
              )}
            </div>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Mail className="h-4 w-4" />
              Send an email
            </a>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contact.links.map((link) => {
              const Icon = icons[link.label];
              const external = link.href.startsWith("http");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex h-full items-center justify-between gap-3 rounded-xl border border-border bg-muted/50 px-4 py-3.5 transition-colors hover:border-primary/50 hover:bg-muted"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      {Icon ? (
                        <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                      ) : (
                        <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                      )}
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                          {link.label}
                        </span>
                        <span className="block truncate text-sm text-foreground">
                          {link.value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
