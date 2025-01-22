/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { colors: {
      squidRed: "#D62C2F",  // Custom Squid Game red
    },
    animation: {
      pulse: "pulse 1.5s ease-in-out infinite",  // Add custom animations
    }},
  },
  plugins: [],
}