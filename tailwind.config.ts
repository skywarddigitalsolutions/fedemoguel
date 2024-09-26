/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    theme: {
      extend: {},
    },
    colors: {
      rojo: "#FF1717",
      bordo: "#8a2323",
      blanco: "#f1f1f1",
      negro: "#282828",
    }
  },
  plugins: [],
};
