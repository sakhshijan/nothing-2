import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        heading: "3.625rem",
        body: "1.065rem",
      },
      fontFamily: {
        kalameh: ["KalamehWebFaNum"],
        ndot55: ["Ndot 55", "KalamehWebFaNum"],
      },
    },
  },
  plugins: [],
};
export default config;
