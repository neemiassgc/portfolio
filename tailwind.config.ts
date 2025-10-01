import type { Config } from "tailwindcss";
import presets from "./src/ui/tailwind.config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{tsx,ts,js,jsx}"
  ],
  theme: {},
  plugins: [],
  presets: [presets]
} satisfies Config;
