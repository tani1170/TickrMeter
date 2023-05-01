/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: "#0EB663",
      beige: "#ECE8E4",
      graylight: "#DCE2E4",
      graydark: "#2B2E27",
      bluedark: "#414559",
    },

    // fontFamily: {
    //   heading: [
    //     "futura-pt, sans-serif",
    //   ],
    //   body: ["Raleway", "sans-serif"],
    // },

    screens: {
      mobile: "390px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1440px",
    },

    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
