import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EB5E28",
        secondary: "#252522",
        tertiary: "#403D39",
        light: "#D2DCE6",
      },
    },
  },
  plugins: [],
};
export default config;
