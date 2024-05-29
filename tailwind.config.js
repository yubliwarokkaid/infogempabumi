/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "24px",
      },
      screens: {
        xs: "480px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1440px",
      },
      boxShadow: {
        "3xl": "0 0 5px #bbb",
      },
      backgroundImage: {
        "image-bmkg": "url('/background/background.svg')",
      },
      colors: {
        timer: "#00ff00",
      },
    },
  },
  plugins: [],
};
