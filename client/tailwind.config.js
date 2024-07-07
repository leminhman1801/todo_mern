/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: { 180: "11.25rem" },
      spacing: {},
      transitionDuration: {
        20: "20ms",
      },
      lineHeight: {
        "tight-ish": "1.2",
      },
    },
  },
  plugins: [],
};
