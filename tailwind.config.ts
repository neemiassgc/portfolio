import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{tsx,ts,js,jsx}"
  ],
  theme: {},
  plugins: [],
  presets: [require("./src\\ui/tailwind.config.js")]
} satisfies Config;
