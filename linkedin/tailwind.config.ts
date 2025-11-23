import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nothing: {
          red: "var(--nothing-red)",
          bg: "var(--nothing-bg)",
          card: "var(--nothing-card)",
          text: "var(--nothing-text)",
          "text-muted": "var(--nothing-text-muted)",
          border: "var(--nothing-border)",
          input: "var(--nothing-input)",
        },
      },
      fontFamily: {
        ndot: ["var(--font-ndot)", "sans-serif"],
        ntype: ["var(--font-ntype)", "sans-serif"],
      },
      backgroundImage: {
        "dot-matrix":
          "radial-gradient(var(--nothing-text-muted) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
