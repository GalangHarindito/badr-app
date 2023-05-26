/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#FF7B00',
        'sideBar': '#052A49',
        'activeSidebar': "#084577",
        'grayDisabled': "#D7DDE2",
        'grayScale2': "#828282",
        'grayScale4': "#E0E0E0",
        'blue-primary': "#1BA8DF",
        'blue-dark': "#052A49",
        'input-border': "#E0E0E0",
      },
    },
  },
  plugins: [],
}

