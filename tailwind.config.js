/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tealBlue: "#0e7490",   // primary
        deepBlue: "#0b4f63",   // accent
        tigerGold: "#FC6A03",  // highlight / buttons / icons
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',   // slow spin for logo
        'bounce-slow': 'bounce 2s infinite',       // gentle bounce
        'pulse-slow': 'pulse 3s ease-in-out infinite', // optional pulse
      },
      keyframes: {
        // optional: custom spin in case you want direction change
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};

