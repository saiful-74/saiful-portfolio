import { ArrowUpRight, TriangleAlert } from "lucide-react";
import Pending from "./Pending";

/*
  ProjectCard
  One project, shown as a wide row:
  - Desktop: text on one side, screenshot on the other. Sides swap on every second card.
  - Mobile: screenshot first, then the text.
  Every missing detail shows a "To be added" label instead of made-up content.
*/
export default function ProjectCard({ project, flip = false }) {
  const { links } = project;

  return (
    <article className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
      {/* Screenshot */}
      {/*
        Desktop only (lg = 1024px and wider): the image stays in view ("sticky")
        while the longer text column scrolls past, then stops at the end of the card.
        top-24 = 96px, which keeps it below the 64px header.
      */}
      <div
        className={`lg:sticky lg:top-24 lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
      >
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={project.screenshotAlt}
            width="1280"
            height="800"
            loading="lazy"
            className="aspect-[16/10] w-full rounded-xl border border-line object-cover"
          />
        ) : (
          <ProjectPreview number={project.number} />
        )}
      </div>

      {/* Text */}
      <div className="lg:col-span-5">
        <p className="font-mono text-sm text-accent-text">{project.number}</p>

        <h3 className="mt-3 font-display text-2xl leading-tight font-semibold tracking-[-0.02em] text-ink md:text-3xl">
          {project.title}
        </h3>

        {/* Type and status */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.type ? (
            <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink">
              {project.type}
            </span>
          ) : (
            <Pending note="Project type" />
          )}
          {project.status ? (
            <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink">
              {project.status}
            </span>
          ) : (
            <Pending note="Status" />
          )}
        </div>

        {/* Details. Each row shows the real value, or a "To be added" label. */}
        <dl className="mt-8 border-t border-line">
          <Detail term="Problem">
            {project.problem ? <p>{project.problem}</p> : <Pending />}
          </Detail>

          <Detail term="My contribution">
            {project.contribution ? <p>{project.contribution}</p> : <Pending />}
          </Detail>

          <Detail term="Key features">
            {project.features.length > 0 ? (
              <ul className="list-disc space-y-1 pl-5 marker:text-accent-text">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            ) : (
              <Pending />
            )}
          </Detail>

          <Detail term="Tech stack">
            {project.stack.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-chip px-2.5 py-1 font-mono text-xs text-ink"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ) : (
              <Pending />
            )}
          </Detail>
        </dl>

        {/* Links. A real link appears only when a URL is set in projects.js. */}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-6">
          {links.live ? (
            <ProjectLink href={links.live} project={project.title}>
              Live site
            </ProjectLink>
          ) : (
            <Pending note="Live link" />
          )}

          {/* Two repositories: label them Frontend and Backend. One repository: "Source code". */}
          {links.source ? (
            <ProjectLink href={links.source} project={project.title}>
              {links.sourceBackend ? "Frontend code" : "Source code"}
            </ProjectLink>
          ) : (
            <Pending note="Source link" />
          )}
          {links.sourceBackend && (
            <ProjectLink href={links.sourceBackend} project={project.title}>
              Backend code
            </ProjectLink>
          )}
        </div>

        {/* Warning about the live site. Always visible while liveNote is set in projects.js. */}
        {links.live && links.liveNote && (
          <p
            role="note"
            className="mt-4 flex gap-3 rounded-lg border border-line border-l-2 border-l-accent bg-surface p-4 text-sm leading-relaxed text-ink"
          >
            <TriangleAlert
              size={18}
              className="mt-0.5 shrink-0 text-accent-text"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold">Live site notice: </strong>
              {links.liveNote}
            </span>
          </p>
        )}
      </div>
    </article>
  );
}

/*
  Shown in place of a screenshot until one is added in projects.js.
  It is a plain panel with a short label, so visitors never see setup instructions.
  The project name is not repeated here because it is the heading right beside it.
  The large faded number is decoration only. It is drawn with CSS (a ::before
  element that reads data-number), so it is not real page text and screen readers skip it.
*/
function ProjectPreview({ number }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-surface">
      {/* Label in the top-left corner, number in the bottom-right, so they never touch */}
      <p className="label absolute top-5 left-5 md:top-7 md:left-7">
        Screenshot coming soon
      </p>

      <span
        aria-hidden="true"
        data-number={number}
        className="pointer-events-none absolute -right-2 -bottom-8 font-display text-[9rem] leading-none font-bold text-line select-none before:content-[attr(data-number)] md:-right-3 md:-bottom-10 md:text-[15rem]"
      />
    </div>
  );
}

// One labeled row inside the details list
function Detail({ term, children }) {
  return (
    <div className="grid gap-2 border-b border-line py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
      <dt className="label pt-1">{term}</dt>
      <dd className="text-[0.9375rem] leading-relaxed text-ink">{children}</dd>
    </div>
  );
}

/*
  External link that opens in a new tab.
  The hidden project name helps screen reader users, who would otherwise hear
  "Live site" several times without knowing which project it belongs to.
*/
function ProjectLink({ href, project, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 py-1 text-sm font-medium text-ink underline decoration-line underline-offset-8 transition-colors hover:text-accent-text hover:decoration-accent"
    >
      {children}
      <span className="sr-only"> of {project}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
