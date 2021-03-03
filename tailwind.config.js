module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "Segoe UI"],
      },
      colors: {
        primary: "#0074D9",
        secondary: "#A8DAFF",
        _1: "#333333", // text colour
        _2: "#71F79F", // success
        _3: "#BDBDBD", // gray 4
        _4: "#0074D9", // blue
        _5: "#e5e5e5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
