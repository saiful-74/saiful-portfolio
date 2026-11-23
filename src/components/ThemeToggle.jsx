import { useState } from "react";
import { Moon, Sun } from "lucide-react";

/*
  ThemeToggle
  The Sun/Moon button in the header. It switches between the dark and light theme.

  How themes work on this site:
  - Dark is the default. Every first visit starts in dark.
  - The theme is stored on the <html> element as data-theme="dark" or "light".
    The colors for each theme are in src/index.css.
  - When the visitor clicks this button, the choice is saved in the browser
    (localStorage), so the next visit opens in the same theme.
  - A small script in index.html applies the saved choice before the page is
    drawn, so the wrong theme never flashes.
*/

const STORAGE_KEY = "theme";

// Color of the mobile browser bar for each theme. Same values as --color-bg in index.css.
const BROWSER_BAR_COLOR = {
  dark: "#0e0e11",
  light: "#fafaf8",
};

// Reads the theme that is active right now
function getActiveTheme() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(getActiveTheme);

  function switchTheme() {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    // Soft fade for a moment (index.css turns this off for reduced motion)
    root.classList.add("theme-switching");
    window.setTimeout(() => root.classList.remove("theme-switching"), 300);

    // Apply the new theme
    root.dataset.theme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", BROWSER_BAR_COLOR[next]);

    // Remember the choice. Private browsing can block storage, so ignore errors.
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The theme still changes for this visit; it just is not remembered.
    }

    setTheme(next);
  }

  // The label says what the button will do, which is clearest for screen readers
  const label =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={switchTheme}
      aria-label={label}
      title={label}
      className={`flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:text-accent-text ${className}`}
    >
      {theme === "dark" ? (
        <Sun size={20} aria-hidden="true" />
      ) : (
        <Moon size={20} aria-hidden="true" />
      )}
    </button>
  );
}
