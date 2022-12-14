/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    gridTemplateColumns: {
      "fill-auto": "repeat(auto-fill, minmax(200px, 1fr))",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
