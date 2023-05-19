/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "#FF3811",
        secondaryOrange: "#F98E79",
      },
    },
  },
  plugins: [require("daisyui")],
};
