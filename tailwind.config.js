/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "hsl(0 0% 100%)",
        },
        black: {
          DEFAULT: "hsl(0 0% 0%)",
        },
        gray: {
          25: "hsl(240 11% 98%)",
          50: "hsl(240 11% 94%)",
          100: "hsl(240 6% 90%)",
          200: "hsl(240 4% 85%)",
          250: "hsl(240 3% 77%)",
          300: "hsl(240 2% 68%)",
          400: "hsl(240 2% 60%)",
          500: "hsl(240 2% 52%)",
          600: "hsl(240 2% 43%)",
          700: "hsl(240 3% 35%)",
          750: "hsl(240 4% 26%)",
          800: "hsl(240 4% 18%)",
          850: "hsl(240 3% 14%)",
          900: "hsl(240 5.7% 10.4%)",
        },
        pink: {
          200: "hsl(343 98% 84%)",
          500: "hsl(343 98% 60%)",
          600: "hsl(343 65% 48%)",
          700: "hsl(343 65% 36%)",
        },
        red: {
          200: "hsl(1 100% 92%)",
          500: "hsl(3 100% 61%)",
          700: "hsl(0 82%  39%)",
        },
        orange: {
          200: "hsl(18 100% 88%)",
          500: "hsl(18 99%  70%)",
          700: "hsl(18 42%  42%)",
        },
        mint: {
          200: "hsl(177 56%  88%)",
          500: "hsl(178 54%  69%)",
          700: "hsl(179  24%  41%)",
        },
        purple: {
          200: "hsl(249 100%  88%)",
          500: "hsl(248 99%  70%)",
          700: "hsl(248 42%  42%)",
        },
        yellow: {
          200: "hsl(42 100%  88%)",
          500: "hsl(42 99%  70%)",
          700: "hsl(43 42%  42%)",
        },
        blue: {
          200: "hsl(217 100%  88%)",
          500: "hsl(216 99%  70%)",
          700: "hsl(216 42%  42%)",
        },
        secondary: {
          DEFAULT: "hsl(351 99% 66%)",
        },
      },
    },
  },
  plugins: [],
};
