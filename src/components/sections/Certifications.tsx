import { Award, BadgeCheck } from "lucide-react";
import { certifications, trainings } from "@/content/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications & training"
      description="Formal certifications and professional training programmes I have completed."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <Reveal key={cert.name} delay={index * 50}>
            <article className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-primary">
                  <Award className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-primary">{cert.year}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{cert.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              {cert.credential && (
                <p className="mt-3 break-words font-mono text-xs text-muted-foreground">
                  {cert.credential}
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 rounded-xl border border-border bg-card p-6">
          <h3 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <BadgeCheck className="h-4 w-4 text-primary" />
            {trainings.heading}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">{trainings.note}</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {trainings.items.map((training) => (
              <li
                key={training.name}
                className="flex items-center justify-between gap-4 rounded-lg border border-border bg-muted/50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{training.name}</p>
                  <p className="text-sm text-muted-foreground">{training.provider}</p>
                </div>
                <span className="shrink-0 text-xs uppercase tracking-wider text-muted-foreground">
                  {training.duration}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
