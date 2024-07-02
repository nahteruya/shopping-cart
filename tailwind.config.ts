import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "gray-100": "#F8F8F8",
      "gray-300": "#DFDFDF",
      "gray-500": "#9C9C9C",
      "gray-700": "#2E2E2E",
      pink: "#A31C76",
      green: "#18581B",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;
