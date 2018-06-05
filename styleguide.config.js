const path = require("path");

module.exports = {
  ignore: [
    path.resolve(__dirname, "src/components/ads/index.js"),
    path.resolve(__dirname, "src/components/primitives/index.js"),
    path.resolve(__dirname, "src/components/primitives/Row.js"),
    path.resolve(__dirname, "src/components/primitives/Text.js"),
    path.resolve(__dirname, "src/components/primitives/View.js"),
    path.resolve(__dirname, "src/components/general/index.js"),
  ],
  sections: [
    {
      name: "Ad Components",
      components: "./src/components/ads/*.js",
    },
    {
      name: "Primitives",
      components: "./src/components/primitives/**/*.js",
    },
    // {
    //   name: "General App Components",
    //   components: "./src/components/general/*.js",
    // },
    {
      name: "Shared Module Components",
      components: "./src/components/modules/shared/*.js",
    },
    // {
    //   name: "Modules",
    //   components:
    //     "./src/components/modules/{*.js,!(shared)/**/*.js,!(shared)/*.js}",
    // },
  ],
};
