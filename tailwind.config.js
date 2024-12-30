/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/preline/preline.js"],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
});
