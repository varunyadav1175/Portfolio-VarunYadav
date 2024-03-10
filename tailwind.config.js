/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        custom: "#300924",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
