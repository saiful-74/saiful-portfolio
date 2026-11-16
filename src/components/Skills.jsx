import { levels, skillGroups } from "../data/skills";
import Pending from "./Pending";
import Reveal from "./Reveal";
import Section from "./Section";

/*
  Skills
  Skills in groups. Each skill carries an honest level label instead of a rating bar.
  - Desktop and tablet: two columns of groups.
  - Mobile: one column.
  Data comes from src/data/skills.js
*/
export default function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="What I work with"
      intro="Each skill is labeled by how I have actually used it."
    >
      {/* Legend: explains the three levels */}
      <Reveal>
        <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-10">
          {Object.entries(levels).map(([key, level]) => (
            <li key={key} className="flex items-center gap-2.5 text-sm">
              <LevelDot level={key} />
              <span className="font-medium text-ink">{level.label}</span>
              <span className="text-muted">{level.description}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Groups */}
      <div className="mt-12 grid gap-x-16 gap-y-14 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={(index % 2) * 100}>
            <h3 className="font-display text-xl font-semibold text-ink">
              {group.title}
            </h3>

            <ul className="mt-4 border-t border-line">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between gap-4 border-b border-line py-3"
                >
                  <span className="text-base text-ink">{skill.name}</span>

                  {skill.level ? (
                    <span className="flex shrink-0 items-center gap-2 font-mono text-xs text-muted">
                      <LevelDot level={skill.level} />
                      {levels[skill.level].label}
                    </span>
                  ) : (
                    <Pending label="To confirm" />
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/*
  Small dot next to a level.
  The shape is different for each level (filled, outline, dashed outline),
  so the meaning does not depend on color alone. The text label is always shown too.
*/
function LevelDot({ level }) {
  const styles = {
    used: "bg-accent",
    learning: "border-2 border-accent",
    exploring: "border-2 border-dashed border-muted",
  };

  return (
    <span
      className={`h-2.5 w-2.5 shrink-0 rounded-full ${styles[level]}`}
      aria-hidden="true"
    />
  );
}
