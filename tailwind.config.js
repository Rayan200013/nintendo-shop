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
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        xxl: "30px",
        smr: "0.75rem",
      },
      fontWeight: {
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
