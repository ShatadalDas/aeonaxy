/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      reem_kufi_fun: "'Reem Kufi Fun', sans-serif",
    },
    extend: {
      fontSize: {
        clamp: "clamp(0.7rem, 2vw + 0.1rem, 1.2rem)",
      },
    },
  },
  plugins: [],
};
