module.exports = {
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
  },
  theme: {
    extend: {
      colors: {
        zelda: {
          bgBlackTransparent: "rgba(0, 0, 0, 0.5)",
          blue: "#0290fe",
          darkGreen: "#0c1f0c",
          darkGray: "#2f3124",
          lightGray: "#616356",
          yellow: "#FFC800",
          lightYellow: "#FFFFBE",
          softYellow: "#f8f7d9",
        },
      },
      boxShadow: {
        yellow: "rgba(255, 255, 190, 0.4) 0px 0px 6px 2px",
      },
    },
  },
  variants: {
    margin: ["responsive", "even"],
  },
  plugins: [],
};
