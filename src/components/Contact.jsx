import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "../data/profile";
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
          className="inline-block font-display text-[clamp(1.25rem,5.5vw,3.5rem)] leading-tight font-semibold tracking-[-0.02em] [overflow-wrap:anywhere] text-ink underline decoration-accent decoration-2 underline-offset-[0.25em] transition-colors hover:text-accent-text"
        >
          {profile.email}
        </a>

        {/* Other links. LinkedIn and Resume appear only when set in profile.js. */}
        <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <li>
            <ContactLink href={profile.github.url}>
              GitHub
              <span className="sr-only"> ({profile.github.username})</span>
            </ContactLink>
          </li>
          {profile.linkedin && (
            <li>
              <ContactLink href={profile.linkedin}>LinkedIn</ContactLink>
            </li>
          )}
          {profile.resumeUrl && (
            <li>
              <ContactLink href={profile.resumeUrl} download>
                Resume
                <span className="sr-only"> (PDF download)</span>
              </ContactLink>
            </li>
          )}
        </ul>
      </Reveal>
    </Section>
  );
}

/*
  Contact link.
  - Normal: opens the page in a new tab (arrow icon).
  - With "download": saves the file instead and keeps the visitor here (download icon).
*/
function ContactLink({ href, download = false, children }) {
  const linkProps = download
    ? { download: href.split("/").pop(), type: "application/pdf" }
    : { target: "_blank", rel: "noreferrer" };
  const Icon = download ? Download : ArrowUpRight;

  return (
    <a
      href={href}
      {...linkProps}
      className="inline-flex items-center gap-1.5 text-base font-medium text-ink underline decoration-line underline-offset-8 transition-colors hover:text-accent-text hover:decoration-accent"
    >
      {children}
      <Icon size={16} aria-hidden="true" />
    </a>
  );
}
