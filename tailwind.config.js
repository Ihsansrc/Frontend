/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "body-color": "#E0F4FF",
        dark: "#1e293b",
        light: "#64748b",
      },
      fontFamily: {
        inter: ['"Inter", "sans-serif"'],
      },
    },
  },
  plugins: [],
};
