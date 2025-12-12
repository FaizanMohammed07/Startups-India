export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0F172A", // dark slate
        accent: "#0ea5e9", // light blue accent
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        script: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
