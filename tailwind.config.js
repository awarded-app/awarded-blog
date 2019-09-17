const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Asap", ...defaultTheme.fontFamily.sans],
        asap: "Asap"
      }
    }
  },
  variants: {},
  plugins: []
};
