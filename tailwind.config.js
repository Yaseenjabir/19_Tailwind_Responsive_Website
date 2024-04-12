/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        google: "url('../Logos/Google.png')",
        facebook: "url('../Logos/Facebook.png')",
        linkedIn: "url('../Logos/LinkedIn.png')",
        pinterest: "url('../Logos/Pinterest.png')",
      }),
    },
  },
  plugins: [],
};
