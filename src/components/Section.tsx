import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  /** Set to false for sections without a top border (e.g. the hero). */
  bordered?: boolean;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  bordered = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 md:py-24 ${bordered ? "border-t border-border/60" : ""}`}
    >
      <div className="container-site">
        <Reveal>
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>
            )}
          </div>
        </Reveal>
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}
