const withSass = require("@zeit/next-sass");
const withSvgr = require("next-svgr");
const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM(
  withSvgr(
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
  )
);
