/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "360px", // => 360px to 479px (mobile)
      // => @media (min-width: 640px) { ... }
      smd: "480px", // => 480px to 767px (mobile xl)
      // => @media (min-width: 640px) { ... }
      md: "768px", // => 768px to 1023px (tablet)
      // => @media (min-width: 768px) { ... }
      lg: "1024px", // => 1024px to 1439px (laptop)
      // => @media (min-width: 1024px) { ... }
      xl: "1440px", // => 1440px to 1919px (laptop xl)
      // => @media (min-width: 1280px) { ... }
      // xxl: "1920px", // => 1920px and up (4k)
    },
  },
  plugins: [
    {
      "@tailwindcss/postcss": {},
    },
    require("tailwindcss-animate"),
  ],
};

export default config;
