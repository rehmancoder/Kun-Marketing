import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        variants: ["100", "200", "400", "700"],
      },
      colors: {
        primary: "#F3AD13",
      },
    },
  },
  plugins: [],
};
export default config;
