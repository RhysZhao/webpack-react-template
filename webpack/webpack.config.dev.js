/*
 * Author  rhys.zhao
 * Date  2022-08-16 10:14:56
 * LastEditors  rhys.zhao
 * LastEditTime  2022-08-16 21:25:19
 * Description webpack开发环境配置
 */
module.exports = {
  output: {
    filename: "scripts/[name].js",
    assetModuleFilename: "images/[name][ext]"
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: "./dist",
    open: true,
    compress: true,
    host: "0.0.0.0",
    port: 10000,
    proxy: {
      "/api": "http://localhost:6000"
    },
    http2: true, // 开启带有默认证书的https
    headers: {
      "X-Access-Token": "test123"
    },
    historyApiFallback: true,
    client: {
      overlay: false
    }
  },
  mode: "development"
};
