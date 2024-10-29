/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#40916C",
        secondary: "#B7E4C7",
        "btn-high": "#ba181b",
        "btn-medium": "#faa307",
        "btn-low": "#B7E4C7",
        "lb-priority-tsk": "#E0C86E",
        "lb-priority-proj": "#E0A25B",
        "bg-primary": "#40916C",
      }
    },
  },
  plugins: [],
}