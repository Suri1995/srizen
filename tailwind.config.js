/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "7xl": "80rem",
      },
      colors: {
        navy: {
          DEFAULT: "#1E2B7A",
          deep: "#10174A",
          50: "#EEF0FA",
          100: "#D7DBF1",
          400: "#3A4BA0",
          500: "#1E2B7A",
          600: "#182263",
          900: "#10174A",
        },
        teal: {
          DEFAULT: "#00B8CC",
          50: "#E6FAFC",
          100: "#CCF3F8",
          400: "#1ECBDC",
          500: "#00B8CC",
          600: "#0096A6",
        },
        emerald: {
          DEFAULT: "#00C896",
          50: "#E6FBF3",
          400: "#26D6A8",
          500: "#00C896",
          600: "#00A37A",
        },
        midblue: {
          DEFAULT: "#1A6FA8",
          400: "#2C86C2",
          500: "#1A6FA8",
          600: "#155A88",
        },
        ivory: "#F0F9FB",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "petal-glow":
          "radial-gradient(circle at 50% 0%, rgba(0,200,150,0.15), transparent 60%)",
        "navy-gradient":
          "linear-gradient(135deg, #10174A 0%, #1E2B7A 55%, #1A6FA8 100%)",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(30,43,122,0.35)",
        soft: "0 8px 30px rgba(30,43,122,0.10)",
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
