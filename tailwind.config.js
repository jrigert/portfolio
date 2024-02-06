/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        contrast: "#120305",
        primary: "#30bced",
        secondary: "#4D8B31",
        loud: "#FF8427",
        white: '#FFFAFF'
      }
    }
  },
  plugins: []
};
