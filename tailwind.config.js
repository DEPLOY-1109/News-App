/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-brand-colors"),    
    require('tailwindcss-debug-screens'),  
  ],
}

