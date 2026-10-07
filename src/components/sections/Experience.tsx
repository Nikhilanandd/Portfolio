import { MapPin } from "lucide-react";
import { experience } from "@/content/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Professional experience"
      description="Roles and responsibilities across my career in the IT & Communications domain."
    >
      <ol className="relative space-y-10 pl-10 sm:pl-14">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[5px] w-px bg-border"
        />
        {experience.map((item, index) => (
          <li key={`${item.role}-${index}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-10 h-3 w-3 rounded-full bg-primary ring-4 ring-background sm:-left-14"
            />
            <Reveal delay={index * 60}>
              <article className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                  <span className="text-sm font-medium text-primary">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.organisation}
                  <span aria-hidden="true" className="mx-2 text-border">
                    ·
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                  {item.summary}
                </p>
                {item.highlights.length > 0 && (
                  <ul className="mt-4 grid gap-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
