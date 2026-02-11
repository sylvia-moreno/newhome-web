import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F1",
        ink: "#111111",
        brand: "#8C3526",
        white: "#FFFFFF",
      },
      borderRadius: {
        xl: "16px",
      },
    },
  },
  plugins: [],
} satisfies Config;
