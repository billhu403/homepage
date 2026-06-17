import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeChime() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      className="theme-chime"
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <span className="theme-chime-cord" />
      <span className="theme-chime-bell" aria-hidden="true">
        <span className="theme-chime-rim" />
        <span className="theme-chime-clapper" />
        <span className="theme-chime-shine" />
      </span>
      <span className="theme-chime-paper" aria-hidden="true" />
      <span className="theme-chime-sparkle" aria-hidden="true" />
      <span className="theme-chime-label">{theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
