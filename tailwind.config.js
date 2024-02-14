/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        notebook: { raw: "(min-height: 800px)" },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "green-50x": "#11ed8c",
        "green-400x": "#7BD900",
        "green-900x": "#1D3400",
        "gray-100x": "#f6f6f6",
        "gray-55x": "#ECECEC",
        "gray-700x": "#818181",
        "red-500x": "#D82B2B",
        "neutral-800x": "#282828",
      },
      maxWidth: {
        600: "600px",
        1190: "1190px",
        1440: "1440px",
      },
    },
  },
  Inter: [],
};