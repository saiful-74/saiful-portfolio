import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { profile } from "../data/profile";
import Placeholder from "./Placeholder";

/*
  Hero
  First screen of the site: name, role, short intro, main button and links.
  Layout:
  - Desktop: text on the left (8 of 12 columns), photo on the right (4 columns).
  - Mobile: one column, photo below the text, centered on phones.
*/
export default function Hero() {
  return (
    <section id="top" className="container-page pt-16 pb-16 md:pt-24 md:pb-24">
      <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left: text */}
        <div className="lg:col-span-8">
          <p className="label fade-up">{profile.role}</p>

          <h1
            className="fade-up mt-6 font-display text-[clamp(3.25rem,17vw,9rem)] leading-[0.92] font-bold tracking-[-0.04em] text-ink"
            style={{ animationDelay: "80ms" }}
          >
            {profile.firstName}
            <br />
            {profile.lastName}
            <span className="text-accent">.</span>
          </h1>

          <p
            className="fade-up mt-8 max-w-[52ch] text-lg leading-relaxed text-muted md:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            {profile.intro}
          </p>

          <div
            className="fade-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            style={{ animationDelay: "240ms" }}
          >
            {/* Main button */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              View projects
              <ArrowDown size={16} aria-hidden="true" />
            </a>

            {/* Profile links. LinkedIn shows only when set in profile.js */}
            <a
              href={profile.github.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 py-1 text-sm font-medium text-ink underline decoration-line underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
            >
              GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 py-1 text-sm font-medium text-ink underline decoration-line underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
              >
                LinkedIn
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 py-1 text-sm font-medium text-ink underline decoration-line underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
            >
              <Mail size={16} aria-hidden="true" />
              Email
            </a>
          </div>
        </div>

        {/* Right: photo, or a labeled placeholder until a photo is supplied */}
        <div
          className="fade-up lg:col-span-4"
          style={{ animationDelay: "320ms" }}
        >
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
              width="480"
              height="600"
              className="aspect-[4/5] w-full max-w-[14rem] rounded-xl border border-line object-cover max-sm:mx-auto lg:ml-auto lg:max-w-xs"
            />
          ) : (
            <Placeholder
              title="Photo"
              note="Optional. Set the photo path in src/data/profile.js"
              className="aspect-[4/5] w-full max-w-[14rem] max-sm:mx-auto lg:ml-auto lg:max-w-xs"
            />
          )}
        </div>
      </div>

      {/* Fact strip: three short facts in a row (stacked on mobile) */}
      <dl className="mt-16 grid border-t border-line md:mt-24 md:grid-cols-3">
        {profile.facts.map((fact) => (
          <div
            key={fact.label}
            className="border-b border-line py-6 md:border-b-0 md:pr-8"
          >
            <dt className="label">{fact.label}</dt>
            <dd className="mt-3 max-w-[34ch] text-base leading-snug text-ink">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
