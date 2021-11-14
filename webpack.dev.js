const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: ["./src/app.ts"],
  },
  context: __dirname + "",
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: __dirname + "/dist",
    sourceMapFilename: "bundle.map",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loader: "swc-loader",
        options: {},
      },
      {
        test: /\.html?$/,
        use: [
          {
            loader: "file-loader?name=[path][name].[ext]",
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              mimetype: "application/font-woff",
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: __dirname + "/index.ejs",
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: "./dist",
    compress: true,
    port: 9001,
  },
};
