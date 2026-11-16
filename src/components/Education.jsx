import { education } from "../data/education";
import Pending from "./Pending";
import Reveal from "./Reveal";
import Section from "./Section";

/*
  Education
  One row per school or university.
  - Desktop: years on the left, details on the right.
  - Mobile: stacked.
  Data comes from src/data/education.js
*/
export default function Education() {
  return (
    <Section id="education" label="Education" title="Education">
      <ul className="border-t border-line">
        {education.map((item) => (
          <li key={item.institution} className="border-b border-line py-8">
            <Reveal className="grid gap-4 md:grid-cols-12 md:gap-8">
              {/* Years */}
              <div className="md:col-span-4">
                {item.period ? (
                  <p className="font-mono text-sm text-muted">{item.period}</p>
                ) : (
                  <Pending note="Years" />
                )}
              </div>

              {/* Details */}
              <div className="md:col-span-8">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">
                  {item.institution}
                </h3>
                <p className="mt-2 text-lg text-muted">{item.program}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {item.degree ? (
                    <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink">
                      {item.degree}
                    </span>
                  ) : (
                    <Pending note="Degree name" />
                  )}
                  {item.status && (
                    <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink">
                      {item.status}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
