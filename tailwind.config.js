/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      phone: "420px",
    },
    extend: {
      backgroundImage: {
        "main-pattern": "url('/public/bg-vector.png')",
      },
      colors: {
        vendor: {
          github: "#171515",
          codepen: "#f00",
          linkedin: "#0e76a8",
        },
      },
    },
  },
  plugins: [],
};
