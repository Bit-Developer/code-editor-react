exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: true,
    historyApiFallback: true,
    proxy: {
      "/api": process.env.API_URL,
    },
  },
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,

        use: ["style-loader", "css-loader"],
      },
    ],
  },
});

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

exports.extractCSS = ({ include, exclude, use }) => {
  // Output extracted CSS to a file
  const plugin = new MiniCssExtractPlugin({
    filename: "./styles/[name].css",
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: [MiniCssExtractPlugin.loader].concat(use),
        },
      ],
    },
    plugins: [plugin],
  };
};

const PurgeCSSPlugin = require("purgecss-webpack-plugin");

exports.purgeCSS = ({ paths }) => ({
  plugins: [new PurgeCSSPlugin({ paths })],
});

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        include,
        exclude,
        use: {
          loader: "url-loader",
          options,
        },
      },
    ],
  },
});

exports.loadFonts = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        include,
        exclude,
        use: {
          loader: "url-loader",
          options,
        },
      },
    ],
  },
});

const CopyWebpackPlugin = require("copy-webpack-plugin");

exports.loadStatic = () => ({
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/_redirects",
          to: "./_redirects",
          toType: "file",
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/web.config",
          to: "./web.config",
          toType: "file",
        },
      ],
    }),
  ],
});

const webpack = require("webpack");

exports.loadEnv = (url) => ({
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        API_URL: JSON.stringify(url),
      },
    }),
  ],
});
