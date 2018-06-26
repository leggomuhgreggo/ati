const path = require("path");

module.exports = {
  theme: {
    maxWidth: 2000,
  },
  ignore: [
    path.resolve(__dirname, "src/components/ads/index.js"),
    path.resolve(__dirname, "src/components/primitives/index.js"),
    path.resolve(__dirname, "src/components/primitives/Row/Row.js"),
    path.resolve(__dirname, "src/components/primitives/View/View.js"),
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
    {
      name: "Post Types",
      components: "./src/components/modules/shared/Post/*.js",
    },
    {
      name: "Modules",
      components: [
        "./src/components/modules/MostRecent/index.js",
        // "./src/components/modules/Tag*/index.js",
        "./src/components/modules/Trending/index.js",
        "./src/components/modules/Newsletter/index.js",
      ],
    },
  ],
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Libre+Baskerville|Work+Sans",
        },
      ],
    },
  },
};
