import { ArrowRight, Download } from "lucide-react";
import { hero, site } from "@/content/profile";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-20 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container-site">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
            {hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={70}>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {site.designation} · {site.department}, {site.organisation}
          </p>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
            {hero.intro}
          </p>
        </Reveal>

        <Reveal delay={210}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={hero.primaryCta.href}
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Download className="h-4 w-4" />
              {hero.secondaryCta.label}
            </a>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {hero.facts.map((fact) => (
              <div key={fact.label} className="bg-card px-4 py-4 sm:px-5 sm:py-5">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
