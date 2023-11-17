/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        main: "#DCF3CA",
        gray: "#C6C6C6",
        subMain: "#F3F9FF",
        border: "#F1F8FF",
        errorm: "red-600",
        button: "blue-500",
      },
      screens: {
        xs: "475px",
      },
      fontFamily: {
        main: ["Public Sans", "sans-serif"],
        subMain: ["Montserrat", "sans-serif"],
        "h-4": "var(--h-4-font-family)",
        "h-6": "var(--h-6-font-family)",
        h1: "var(--h1-font-family)",
        h5: "var(--h5-font-family)",
        para: "var(--para-font-family)",
        "paragraph-body-text": "var(--paragraph-body-text-font-family)",
      },
    },
  },
  plugins: [],
};
