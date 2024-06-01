/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
        "image-bmkg-dark": "url('/background/background-dark.svg')",
      },
      backgroundColor: {
        loading: "rgba(0, 0, 0, 0.888)",
      },
      colors: {
        timer: "#00ff00",
        facebook: "#1877F2",
        instagram: "#c32aa3",
        tailwind: "#38BDF8",
        react: "#3998B6",
        next: "#000000",
        reactIcon: "#be185d",
        whatsapp: "#16a34a",
        whatsappDark: "#075E54",
      },
      animation: {
        goyang: "goyang 1s ease-in-out infinite",
        swipe: "swipe 1s infinite ease-in-out",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        goyang: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        swipe: {
          "0%, 100%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(25%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
