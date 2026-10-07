import { about } from "@/content/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={about.heading}
      description="A short introduction to who I am, how I work and what I care about."
    >
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <Reveal>
          <div className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="leading-relaxed text-foreground/85">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Quick facts
            </h3>
            <dl className="mt-5 space-y-4">
              {about.quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
