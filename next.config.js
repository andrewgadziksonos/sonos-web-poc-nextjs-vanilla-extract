const withPrefresh = require("@prefresh/next");
const preact = require("preact");
const withPreact = require("next-plugin-preact");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const {
  getGlobalCssLoader,
} = require("next/dist/build/webpack/config/blocks/css/loaders");

const MiniCssExtractPlugin = require("next/dist/compiled/mini-css-extract-plugin");

module.exports = withPreact({
  future: {
    webpack5: true,
  },
  webpack(config, options) {
    const { dev, isServer } = options;

    config.module.rules.push({
      test: /\.css$/i,
      sideEffects: true,
      use: dev
        ? getGlobalCssLoader(
            {
              assetPrefix: options.config.assetPrefix,
              future: {
                webpack5: true,
              },
              isClient: !isServer,
              isServer,
              isDevelopment: dev,
            },
            [],
            []
          )
        : [MiniCssExtractPlugin.loader, "css-loader"],
    });

    const plugins = [];

    plugins.push(new VanillaExtractPlugin({}));

    if (!dev) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: "static/css/[contenthash].css",
          chunkFilename: "static/css/[contenthash].css",
          ignoreOrder: true,
        })
      );
    }

    config.plugins.push(...plugins);

    return config;
  },
});
