import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        graphite: "#27313F",
        slate: "#536171",
        mist: "#F4F7F8",
        porcelain: "#FAFBFA",
        navy: "#173B57",
        steel: "#2E617A",
        brass: "#B78A45",
        moss: "#2E6F67"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 24, 39, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
