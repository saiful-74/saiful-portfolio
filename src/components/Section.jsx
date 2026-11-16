import Reveal from "./Reveal";

/*
  Section
  Shared wrapper for every section after the hero.
  It gives all sections the same spacing, top border, small label and big title.

  Usage:
    <Section id="about" label="About" title="About me"> ...content... </Section>
*/
export default function Section({ id, label, title, intro, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="container-page border-t border-line py-20 md:py-28"
    >
      <Reveal>
        <p className="label">{label}</p>
        <h2
          id={`${id}-title`}
          className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] text-ink md:text-6xl"
        >
          {title}
        </h2>
        {intro && (
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-muted">
            {intro}
          </p>
        )}
      </Reveal>

      <div className="mt-12 md:mt-16">{children}</div>
    </section>
  );
}
