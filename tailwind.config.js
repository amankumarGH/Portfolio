/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-heavy": `rgba(0, 0, 0, 0.25) 0px 54px 55px,
                         rgba(0, 0, 0, 0.12) 0px -12px 30px,
                         rgba(0, 0, 0, 0.12) 0px 4px 6px,
                         rgba(0, 0, 0, 0.17) 0px 12px 13px,
                         rgba(0, 0, 0, 0.09) 0px -3px 5px`,
        "custom-elevated": `rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
                            rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
                            rgba(255, 255, 255, 0.08) 0px 1px 0px inset`,
      },
    },
  },
  plugins: [],
};
