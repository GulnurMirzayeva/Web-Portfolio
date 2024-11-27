/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#00000B",
        light: "#E8E8EE",
        primary: "#627D8E",
        primaryDark: "#A9ACD1",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#E8E8EE 5px,#E8E8EE 100px)",

        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#00000B 8px,#00000B 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#E8E8EE 5px,#E8E8EE 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#00000B 8px,#00000B 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#E8E8EE 5px,#E8E8EE 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#00000B 6px,#00000B 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#E8E8EE 5px,#E8E8EE 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#00000B 4px,#00000B 40px)",

      }
    },
    screens: {
      "2xl": { max: "1535px" },

      "xl": { max: "1279px" },

      "lg": { max: "1023px" },

      "md": { max: "767px" },

      "sm": { max: "639px" },

      "xs": { max: "479px" },
    },
  },
  plugins: [],
}
