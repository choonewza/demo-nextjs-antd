const withCSS = require("@zeit/next-css");
const withLess = require("@zeit/next-less");

module.exports = withLess(
  withCSS({
    lessLoaderOptions: {
      javascriptEnabled: true
    },
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty"
      };

      return config;
    }
  })
);