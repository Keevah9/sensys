/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./container/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(150px, 1fr))",
        "auto-fill": "repeat(auto-fit, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(4, 1fr))",
        "auto-fill": "repeat(auto-fit, minmax(0, 1fr))",
      },
      // animation: {
      //   "spin-slow": "marquee 15s linear infinite",
      // },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: " marquee 15s linear infinite",
      },
    },
  },
  plugins: [],
};
