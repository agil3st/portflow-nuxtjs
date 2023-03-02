module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        serif: ["Playfair Display"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
