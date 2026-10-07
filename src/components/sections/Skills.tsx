import { skills } from "@/content/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical skills"
      description="Technologies, tools and disciplines I work with day to day."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 50}>
            <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-muted/70 px-3 py-1 text-sm text-foreground/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
