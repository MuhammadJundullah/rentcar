/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const flowbite = require("flowbite-react/tailwind");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/preline/preline.js",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin"), flowbite.plugin()],
});
