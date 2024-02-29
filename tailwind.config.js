module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#e60012",
        secondary: "#d6f0fa",
        white: "#FFFFFF",
        blue: "#0b2b6b",
        light: "#efefef",
        heavy: "#434242",
        blacky: "#000",
        primaryHover: "#ac000d",
        rating: "#F8F8F8",
      },
      fontFamily: {
        sans: [
          "museo-sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      fontSize: {
        xxsm: "10px",
        xsm: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        xlg: "21px",
        xxl: "30px",
        xxxl: "40px",
        xxxxl: "50px",
        smr: "0.75rem",
        baseR: "1rem",
        lgr: "1.3125rem",
      },
      fontWeight: {
        regular: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
      container: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      lineHeight: {
        none: "16px",
        tight: "20px",
        snug: "22px",
        normal: "24px",
        relaxed: "26px",
        loose: "32px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
      },
      letterSpacing: {
        // Letter spacing values
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      keyframes: {
        growShrink: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        growShrink: "growShrink 0.3s ease-in-out",
      },
      top: {
        // Custom top values in percentages
        0: "0",
        1: "1.5%",
        2: "3%",
        3: "4.5%",
        6: "6%",
        5: "7.5%",
        9: "9%",
        12: "12%",
        14: "14%",
        15: "15%",
        18: "18%",
        24: "24%",
        30: "30%",
        36: "36%",
        48: "48%",
        40: "60%",
        72: "72%",
        84: "84%",
        96: "96%",
        100: "100%",
      },
      height: {
        700: "700px",
        440: "440px",
      },
      screens: {
        mobile: "776px",
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive", "group-hover", "group-focus", "group-active"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hidden-mobile": {
          display: "none",
        },
        ".visible-mobile": {
          display: "block",
        },
      };

      addUtilities(newUtilities, [
        "responsive",
        "group-hover",
        "group-focus",
        "group-active",
      ]);
    },
  ],
};
