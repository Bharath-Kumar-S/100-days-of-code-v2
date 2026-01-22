const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.tsx",

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
