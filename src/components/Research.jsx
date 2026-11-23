import { research } from "../data/research";
import Reveal from "./Reveal";
import Section from "./Section";

/*
  Research
  Shows the current research topic and interests.
  The status badge ("In progress — not published") is always visible, so nobody
  mistakes this for a finished paper.
  - Desktop: topic on the left, interests on the right.
  - Mobile: one column.
  Data comes from src/data/research.js
*/
export default function Research() {
  return (
    <Section
      id="research"
      label="Research"
      title="Research and learning"
      intro={research.intro}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        {/* Current topic */}
        <Reveal className="lg:col-span-7">
          {/* Status badge */}
          <p className="inline-flex items-center gap-2.5 rounded-full border border-accent px-4 py-1.5 font-mono text-xs tracking-wide text-ink uppercase">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span className="sr-only">Status: </span>
            {research.status}
          </p>

          <p className="label mt-8">Current topic</p>
          <h3 className="mt-3 font-display text-2xl leading-snug font-semibold tracking-[-0.01em] text-ink md:text-3xl">
            {research.title}
          </h3>

          {/* Shown only when a summary is set in research.js */}
          {research.summary && (
            <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted">
              {research.summary}
            </p>
          )}
        </Reveal>

        {/* Interests */}
        <Reveal delay={100} className="lg:col-span-5">
          <h3 className="label">Research interests</h3>
          <ul className="mt-4 border-t border-line">
            {research.interests.map((interest) => (
              <li
                key={interest}
                className="border-b border-line py-3 text-base text-ink"
              >
                {interest}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
