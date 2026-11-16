import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import Pending from "./Pending";
import Reveal from "./Reveal";
import Section from "./Section";

/*
  Contact
  A large email link plus profile links.
  There is no contact form on purpose: a form needs a backend service to really
  send messages, and a form that only pretends to send would be dishonest.
  All values come from src/data/profile.js
*/
export default function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Get in touch"
      intro="Email is the best way to reach me."
    >
      <Reveal>
        {/* Email: opens the visitor's email app */}
        <a
          href={`mailto:${profile.email}`}
          className="inline-block font-display text-[clamp(1.25rem,5.5vw,3.5rem)] leading-tight font-semibold tracking-[-0.02em] [overflow-wrap:anywhere] text-ink underline decoration-accent decoration-2 underline-offset-[0.25em] transition-colors hover:text-accent"
        >
          {profile.email}
        </a>

        {/* Other links. A missing link shows a label instead of a fake link. */}
        <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <li>
            <ContactLink href={profile.github.url}>
              GitHub
              <span className="sr-only"> ({profile.github.username})</span>
            </ContactLink>
          </li>
          <li>
            {profile.linkedin ? (
              <ContactLink href={profile.linkedin}>LinkedIn</ContactLink>
            ) : (
              <Pending note="LinkedIn" />
            )}
          </li>
          <li>
            {profile.resumeUrl ? (
              <ContactLink href={profile.resumeUrl}>Resume</ContactLink>
            ) : (
              <Pending note="Resume" />
            )}
          </li>
        </ul>
      </Reveal>
    </Section>
  );
}

// External link that opens in a new tab
function ContactLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-base font-medium text-ink underline decoration-line underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
