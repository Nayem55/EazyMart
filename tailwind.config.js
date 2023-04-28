/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui:{
    themes: [
      {
        mytheme: {
          primary: "#1a396c",

          secondary: "#f2f4f8",

          accent: "#f3b61c",

          neutral: "#191D24",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#f62e36",
        },
      },
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
