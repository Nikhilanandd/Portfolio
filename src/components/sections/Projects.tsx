import { ArrowUpRight, Briefcase } from "lucide-react";
import { projects } from "@/content/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Projects & technical work"
      description="Selected work I can discuss publicly — no internal systems, infrastructure or confidential details."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 60}>
            <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-primary">
                  <Briefcase className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {project.period}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold text-foreground">{project.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{project.role}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-muted/70 px-2 py-0.5 font-mono text-xs text-foreground/85"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80"
                >
                  {project.link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
