import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: {
      "hues-primary": "#fffffe",
      "hues-secondary": "#f2f4f6",
    },
    textColor: {
      "hues-primary": "#00214d",
      "hues-secondary": "#1b2d45",
      "hues-highlight": "#ff5470"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
