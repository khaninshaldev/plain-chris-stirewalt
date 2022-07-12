const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: [
    "./source/**/*.php",
    "./template-parts/**/*.php",
    "./page-templates/**/*.php",
    "./*.php",
    "./source/**/*.js",
    "./**/*.html",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#111111",
      white: "#F7F7F7",
      red: {
        100: "#FFB4B4",
        200: "#CA533B",
        300: "#942913",
      },
      orange: {
        100: "#FFC7B4",
        200: "#FF9774",
        300: "#E55422",
      },
      plum: {
        100: "#F2A5DB",
        200: "#CB5AAA",
        300: "#7A377C",
      },
      brown: {
        100: "#D8BEAC",
        200: "#A6856E",
        300: "#57472C",
      },
      blue: {
        100: "#B2CAE1",
        200: "#7393C5",
        300: "#2B4772",
      },
      lightBlue: {
        100: "#C7EAFF",
        200: "#A0DBFD",
        300: "#3395CD",
      },
      green: {
        100: "#B1F4D4",
        200: "#6BC299",
        300: "#3D5B4D",
      },
      gray: {
        100: "#C4C4C4",
      },
      brand: {
        black: "#000000", // Source https://colors.artyclick.com/color-name-finder/
        "cloud-burst-blue": "#1A2A55",
        "regent-grey": "#8793B4",
        "vivid-burgundy": "#9E2037",
        "mirage-blue": "#0F1A2A",
        "iron-grey": "#CBD4E1",
        "greyish-blue": "#6C7BA2",
        "wildrice-yellow": "#F9DD8D",
        "egg-white": "#FFEFC2",
        "coral-tree": "#AF5D6C",
        "natural-black": "#000014",
        "natural-grey": "#494F56",
      },
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1080px",
      // => @media (min-width: 1300px) { ... } // Max-width 1040px + ( 20px left + 20px right ) = 1080
      xl: "1340px",
      // => @media (min-width: 1300px) { ... } // Max-width 1300px + ( 20px left + 20px right ) = 1340
      "2xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        minion: ["MinionPro", "Helvetica", "Arial", "sans-serif"],
        lato: ["Lato", "Helvetica", "Verdana", "Tahoma", "sans-serif"],
        "lato-bold": [
          "Lato Bold",
          "Helvetica",
          "Verdana",
          "Tahoma",
          "sans-serif",
        ],
        "lato-heavy": [
          "Lato Heavy",
          "Helvetica",
          "Verdana",
          "Tahoma",
          "sans-serif",
        ],
        "lato-heavy-italic": [
          "Lato Heavy Italic",
          "Helvetica",
          "Verdana",
          "Tahoma",
          "sans-serif",
        ],
      },
      fontSize: {
        mi: ".65rem",
        md: ".9375rem",
        1.7: "17px",
        2.2: "22px",
        2.4: "24px",
        "2.5xl": "28px",
        3.2: "32px",
        "4.5xl": "42px",
        "5.5xl": ["3.5rem", "1"],
        "6.5xl": ["4rem", "1.10"],
        "7.5xl": ["5rem", "1.5"],
        "8.5xl": ["6.5rem", "1.5"],
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(90deg, #C7EAFF 0%, #B1F4D4 90.07%)",
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "9px": "9px",
        "10px": "10px",
        "11px": "11px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "21px": "21px",
        "22px": "22px",
        "23px": "23px",
        "24px": "24px",
        "25px": "25px",
        "26px": "26px",
        "27px": "27px",
        "28px": "28px",
        "29px": "29px",
        "30px": "30px",
        "33px": "33px",
        "34px": "34px",
        "36px": "36px",
        "40px": "40px",
        "43px": "43px",
        "44px": "44px",
        "48px": "48px",
        "50px": "50px",
        "52px": "52px",
        "56px": "56px",
        "60px": "60px",
        "72px": "72px",
        "74px": "74px",
        "80px": "80px",
        "85px": "85px",
        "92px": "92px",
        "117px": "117px",
        "142px": "142px",
      },
      maxWidth: {
        xxs: "132px",
        156: "156px",
        228: "228px",
        340: "340px",
        708: "708px",
        wm: "1440px",
        "5.5xl": "1250px",
      },
      width: {
        228: "228px",
        276: "276px",
        340: "340px",
        570: "570px",
        708: "708px",
        816: "816px",
      },
      height: {
        276: "276px",
      },
      keyframes: {
        swing: {
          "0%": { transform: "translateY(4px)" },
          "100%": { transform: "translateY(-4px)" },
        },
        "spin-wm": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1600px",
        wrap: "1250px",
      },
      gridTemplateColumns: {
        menu: "56px 1fr",
        "menu-level-2": "1fr 570px",
      },
      letterSpacing: {
        theme: ".0625em",
      },
      lineHeight: {
        26: "26px",
        38: "38px",
        58: "58px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".content-visibility": {
          contentVisibility: "auto",
        },
        ".animate-zoom": {
          transformOrigin: "left bottom",
          transition: "transform .3s ease",
          "&:hover": {
            transform: "scale( 1.2 )",
          },
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    }),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
    }),
  ],
};
