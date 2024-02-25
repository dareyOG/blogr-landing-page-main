/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    fontFamily: {
      overpass: ["Overpass"],
      ubuntu: ["Ubuntu"],
    },
    fontWeight: {
      light: "300",
      base: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      red: {
        100: "hsl(13, 100%, 72%)",
        200: "hsl(355, 100%, 74%)",
        300: "hsl(356, 100%, 66%)",
        400: "hsl(353, 100%, 62%)",
      },
      blue: {
        100: " hsl(240, 2%, 79%)",
        200: "hsl(207, 13%, 34%)",
        300: "hsl(208, 49%, 24%)",
        400: "hsl(237, 23%, 32%)",
        500: "hsl(237, 17%, 21%)",
        600: " hsl(240, 10%, 16%)",
      },
    },
    extend: {},
  },
  plugins: [],
};
