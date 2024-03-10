import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "primary-linear-gradient": "linear-gradient(98deg, #712bda, #a45deb)",
        "primary-main-gradient": "linear-gradient(153deg, #712bda, #a45deb 100%);",
      },
      colors: {
        primary: {
          DEFAULT: "#712bda",
          10: "#a45deb",
          20: "rgba(148, 77, 230, 0.75)",
          30: "#b279ed",
          40: "#7b34dd",
        },
        white: {
          DEFAULT: "#fff",
          10: "#f8fafc",
          20: "#e2e8f0",
        },
        blue: {
          gray: {
            500: "#64748b",
          },
        },
        green: {
          DEFAULT: "#10b981",
        },
        dark: {
          DEFAULT: "#334155",
          10: "rgba(28, 28, 45, 0.9)",
        },
        yellow: {
          DEFAULT: "#f5b014",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
