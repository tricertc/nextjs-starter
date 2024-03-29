const glass = {
  0: "rgba(255, 255, 255, )",
  5: "rgba(255, 255, 255, 0.05)",
  10: "rgba(255, 255, 255, 0.1)",
  20: "rgba(255, 255, 255, 0.2)",
  25: "rgba(255, 255, 255, 0.25)",
  30: "rgba(255, 255, 255, 0.3)",
  40: "rgba(255, 255, 255, 0.4)",
  50: "rgba(255, 255, 255, 0.5)",
  60: "rgba(255, 255, 255, 0.6)",
  70: "rgba(255, 255, 255, 0.7)",
  75: "rgba(255, 255, 255, 0.75)",
  80: "rgba(255, 255, 255, 0.8)",
  90: "rgba(255, 255, 255, 0.9)",
  95: "rgba(255, 255, 255, 0.95)",
  100: "rgba(255, 255, 255, 1)",
};

module.exports = {
  purge: ["src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        glass: glass,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
