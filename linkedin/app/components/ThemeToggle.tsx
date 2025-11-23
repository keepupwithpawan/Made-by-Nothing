"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if user has a preference stored or system preference
    const isLight = document.documentElement.classList.contains("light");
    setIsDark(!isLight);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("light");
      setIsDark(false);
    } else {
      html.classList.remove("light");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-5 rounded-full bg-nothing-border relative transition-colors hover:border-nothing-red border border-transparent"
      aria-label="Toggle Theme"
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-nothing-red transition-all duration-300 ${
          isDark ? "left-1" : "left-6"
        }`}
      />
    </button>
  );
}
