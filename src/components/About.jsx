import { about } from "../data/about";
import Reveal from "./Reveal";
import Section from "./Section";

/*
  About
  - Desktop: large opening line on the left, paragraphs on the right.
  - Mobile: one column.
  Text comes from src/data/about.js
*/
export default function About() {
  return (
    <Section id="about" label="About" title="About me">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <p className="font-display text-2xl leading-snug font-medium tracking-[-0.01em] text-ink md:text-3xl">
            {about.lead}
          </p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* Shown only when openTo is set in about.js */}
          {about.openTo && (
            <p className="mt-8 flex items-center gap-3 text-base font-medium text-ink">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              {about.openTo}
            </p>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
