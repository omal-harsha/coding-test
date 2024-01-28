/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ["Titillium Web", "sans-serif"],
        menuFont: ["Inter", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },

      colors: {
        BGdark: "#141414",
        BGblue: "#2a85ff",
        BGgray: "#f0f5fa",
      },
    },
    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};
