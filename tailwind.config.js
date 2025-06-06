module.exports = {
  content: [
    "./src/**/*.html",
    "./*.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#293479",
        primaryDark: "#1f2859",
        background: "#fcd4d7",
      },
      fontFamily: {
        heading: ['"Open Sans"', 'sans-serif'],
        body: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
