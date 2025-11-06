/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        arz: {
          navy: "#0B1222",
          slate: "#0E1A30",
          sky: "#3AA6E9",
        },
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
};
