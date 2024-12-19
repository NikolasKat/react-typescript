/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      screens: {
         phone: "320px",
         laptop: "480px",
         desktop: "768px",
         wider_desktop: "992px",
      },
   },
   plugins: [],
};
