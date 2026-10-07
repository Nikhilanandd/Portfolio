import { GraduationCap } from "lucide-react";
import { education } from "@/content/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Education"
      description="Academic qualifications and formal coursework."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <Reveal key={item.degree} delay={index * 60}>
            <article className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-primary">
                <GraduationCap className="h-4 w-4" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
              <p className="mt-2 text-sm font-medium text-primary">{item.period}</p>
              {item.details && (
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                  {item.details}
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
