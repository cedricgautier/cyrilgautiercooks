/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#f8f4ee",
          100: "#f1e8db",
          200: "#e6d8c1",
          300: "#d4c09e"
        },
        espresso: {
          900: "#17130f",
          800: "#241d17",
          700: "#372c22"
        },
        gold: {
          400: "#b4945d",
          500: "#9c7c46",
          600: "#7f6233"
        }
      },
      fontFamily: {
        display: ['"Bodoni Moda"', "serif"],
        sans: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(54, 41, 23, 0.14)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(185, 152, 102, 0.22), transparent 35%), radial-gradient(circle at 85% 20%, rgba(122, 91, 52, 0.18), transparent 28%), linear-gradient(180deg, #f7f1e8 0%, #efe8dc 44%, #e9e0d2 100%)"
      }
    }
  },
  plugins: []
};
