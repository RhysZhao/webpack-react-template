/*
 * Author  rhys.zhao
 * Date  2022-08-16 10:14:56
 * LastEditors  rhys.zhao
 * LastEditTime  2022-09-05 17:47:45
 * Description webpack开发环境配置
 */
const { resolve } = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  target: "web",
  output: {
    path: resolve(__dirname, "../dist"),
    clean: true,
    filename: "scripts/[name]-[contenthash:10].js",
    assetModuleFilename: "images/[name]-[contenthash:10][ext]"
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    // static: resolve(__dirname, "../public"),
    open: true,
    compress: true,
    host: "127.0.0.1",
    port: 10000,
    hot: true,
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
};
