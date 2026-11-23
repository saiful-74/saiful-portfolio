import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

/*
  Header
  Sticky top bar with the name and navigation.
  - Desktop (768px and up): links in a row.
  - Mobile: a menu button opens the links as a list.
*/
export default function Header() {
  // "open" remembers if the mobile menu is showing
  const [open, setOpen] = useState(false);

  // Keyboard users can close the mobile menu with the Escape key
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        {/* Wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {profile.firstName} {profile.lastName}
          <span className="text-accent-text">.</span>
        </a>

        {/* Right side: menu links (desktop), theme button, menu button (mobile) */}
        <div className="flex items-center gap-1 md:gap-5">
          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.9375rem] font-medium text-ink/85 transition-colors hover:text-accent-text"
              >
                {link.label}
              </a>
            ))}

            {/* Resume link appears only when a real file is set in profile.js */}
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download={profile.resumeUrl.split("/").pop()}
                type="application/pdf"
                className="rounded-full border border-line px-4 py-1.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent-text"
              >
                Resume
                <span className="sr-only"> (PDF download)</span>
              </a>
            )}
          </nav>

          {/* Sun/Moon button: switches between dark and light theme */}
          <ThemeToggle className="md:-mr-2" />

          {/* Mobile menu button */}
          <button
            type="button"
            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-bg md:hidden"
        >
          <ul className="container-page flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 font-display text-lg text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {profile.resumeUrl && (
              <li>
                <a
                  href={profile.resumeUrl}
                  download={profile.resumeUrl.split("/").pop()}
                  type="application/pdf"
                  className="block py-3 font-display text-lg text-accent-text"
                  onClick={() => setOpen(false)}
                >
                  Resume
                  <span className="sr-only"> (PDF download)</span>
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
