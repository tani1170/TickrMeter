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

    fontFamily: {
      heading: [
        "futura-pt, sans-serif",
      ],
      body: ["Raleway", "sans-serif"],
    },
    // "Font Family": {
    //   $type: "fontFamily",
    //   heading: {
    //     $value:
    //       "font-family: futura-pt, sans-serif",
    //   },
    //   body: {
    //     $value:
    //       "font-family: 'Raleway', sans-serif",
    //   },
    // },

    fontSize: {
      base: "1rem",
      md: "1.5rem",
      lg: "1.9rem",
      xl: "2.4rem",
    },

    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
