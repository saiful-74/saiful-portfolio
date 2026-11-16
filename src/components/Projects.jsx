import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import Section from "./Section";

/*
  Projects
  Lists the projects from src/data/projects.js, one ProjectCard each.
  A project with "hidden: true" in the data file is skipped. Its data stays in the
  file, so it can be shown again by changing that one value.
*/
export default function Projects() {
  const visibleProjects = projects.filter((project) => !project.hidden);

  return (
    <Section id="projects" label="Selected work" title="Projects">
      <div className="space-y-20 md:space-y-28">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.id}>
            {/* flip = true on every second card, so the image changes side */}
            <ProjectCard project={project} flip={index % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
