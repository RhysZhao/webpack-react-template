/*
 * Author  rhys.zhao
 * Date  2022-08-16 10:14:56
 * LastEditors  rhys.zhao
 * LastEditTime  2023-01-29 14:12:01
 * Description webpack开发环境配置
 */
const { resolve } = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  output: {
    path: resolve(__dirname, "../dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: resolve(__dirname, "../src"),
        use: ["style-loader", "css-loader"],
        sideEffects: true
      },
      {
        test: /\.(scss|sass)$/i,
        include: resolve(__dirname, "../src"),
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            }
          },
          "sass-loader"
        ],
        sideEffects: true
      }
    ]
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: "../dist",
    open: true,
    compress: true,
    host: "127.0.0.1",
    port: 10000,
    // proxy: {
    //   "/api": "http://localhost:6000"
    // },
    // http2: true, // 开启带有默认证书的https
    // headers: {
    //   "X-Access-Token": "test123"
    // },
    // historyApiFallback: true,
    client: {
      overlay: false
    }
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "jsx"],
      exclude: "node_modules"
    })
  ],

  optimization: {
    usedExports: true
  },
  mode: "development"
});
