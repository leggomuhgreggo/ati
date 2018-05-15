const path = require("path");

module.exports = {
  require: [path.resolve(__dirname, "styleguide/setup.js")],
  sections: [
    {
      name: "Primitives",
      components: "./src/components/primitives/*.js",
    },
    {
      name: "Shared Module Components",
      components: "./src/components/modules/shared/*.js",
    },
    {
      name: "General App Components",
      components: "./src/components/general/*.js",
    },
    {
      name: "Ad Components",
      components: "./src/components/ads/*.js",
    },
    {
      name: "Modules",
      components:
        "./src/components/modules/{*.js,!(shared)/**/*.js,!(shared)/*.js}",
    },
  ],
};
