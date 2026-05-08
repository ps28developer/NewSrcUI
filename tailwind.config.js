/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Outfit", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        navy: {
          950: "#070A12",
          900: "#0B1020",
          850: "#0E1430",
          800: "#121A39",
        },
      },
      boxShadow: {
        soft: "0 14px 50px rgba(2, 6, 23, 0.35)",
        glow: "0 0 0 1px rgba(99,102,241,0.15), 0 16px 60px rgba(99,102,241,0.25)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(24px, -18px) scale(1.08)" },
          "66%": { transform: "translate(-18px, 22px) scale(0.96)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        floaty: "floaty 5s ease-in-out infinite",
        blob: "blob 16s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
