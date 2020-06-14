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
          blue: "#0290fe",
          green: "#0c1f0c",
          gray: "#2f3124",
          yellow: "rgb(255, 255, 190)",
          triforce: "#FFC800",
          iconGray: "#616356",
          border: "#f8f7d9",
          bgTransparent: "rgba(0, 0, 0, 0.5)",
          bgModal: "rgba(0, 0, 0, 0.85)",
        },
      },
      boxShadow: {
        zelda: "rgba(255, 255, 190, 0.4) 0px 0px 6px 2px",
      },
    },
  },
  variants: {
    margin: ["responsive", "even"],
  },
  plugins: [],
};
