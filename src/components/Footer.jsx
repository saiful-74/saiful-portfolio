import { ArrowUp } from "lucide-react";
import { profile } from "../data/profile";

/*
  Footer
  Bottom bar: copyright, a short build note, and a "Back to top" link.
  The year updates by itself.
*/
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.firstName} {profile.lastName}
        </p>

        <p>Built with React and Tailwind CSS.</p>

        <a
          href="#top"
          className="inline-flex items-center gap-1.5 py-1 font-medium text-ink transition-colors hover:text-accent"
        >
          Back to top
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
