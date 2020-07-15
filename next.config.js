const withSass = require("@zeit/next-sass");
const withSvgr = require("next-svgr");

module.exports = withSvgr(
  withSass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
          },
        },
      });

      return config;
    },
  })
);
