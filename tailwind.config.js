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
    colors: {
      CTA_text: "hsl(356, 100%, 66%)",
      CTA_hover_bg: "hsl(355, 100%, 74%)",
      headings: "hsl(208, 49%, 24%)",
      white: "hsl(0, 0%, 100%)",
      footer_text: "hsl(240, 2%, 79%)",
      body_copy: "hsl(207, 13%, 34%)",
      footer_bg: "hsl(240, 10%, 16%)",
      bg_gradient_very_light_red: "hsl(13, 100%, 72%)",
      bg_gradient_light_red: "hsl(353, 100%, 62%)",
      bg_grad_gray_blue: "hsl(237, 17%, 21%)",
      bg_grad_desat_blue: "hsl(237, 23%, 32%)",
    },
    extend: {
      backgroundImage: {
        "hero-pattern-mobile": "url('image/bg-pattern-intro-mobile.svg')",
        "hero-pattern-desktop": "url('image/bg-pattern-intro-desktop.svg')",
      },
    },
  },
  plugins: [],
};
