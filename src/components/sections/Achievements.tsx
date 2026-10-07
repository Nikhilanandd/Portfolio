import { Trophy } from "lucide-react";
import { achievements } from "@/content/profile";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Achievements & recognition"
      description="Awards, appreciation and milestones I am comfortable sharing publicly."
    >
      <ul className="grid gap-4">
        {achievements.map((achievement, index) => (
          <li key={achievement.title}>
            <Reveal delay={index * 50}>
              <article className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                  <Trophy className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold text-foreground">
                      {achievement.title}
                    </h3>
                    <span className="text-sm font-medium text-primary">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
