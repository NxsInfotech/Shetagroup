/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeUp:
          "fadeUp var(--tw-animate-duration, 5s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        flipdown:
          "flipdown var(--tw-animate-duration,2s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",

        scaleSlow: "scaleSlow 5s ease-in-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        flipdown: {
          "0%": {
            transform: "rotateX(-90deg)",
            transformOrigin: "top",
          },
          "100%": {
            transform: "rotateX(0)",
            transformOrigin: "top",
          },
        },
        scaleSlow: {
          "0%": {
            transform: "scale(1) translateY(0)",
          },
          "100%": {
            transform: "scale(0.95) translateY(10px)",
          },
        },
      },
    },
  },
  plugins: [],
};
