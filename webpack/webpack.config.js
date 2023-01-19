/*
 * Author  rhys.zhao
 * Date  2022-08-16 20:10:29
 * LastEditors  rhys.zhao
 * LastEditTime  2022-09-05 17:45:02
 * Description webpack配置
 */
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const devConfig = require("./webpack.config.dev");
const prodConfig = require("./webpack.config.prod");

module.exports = () => {
  if (process.env.NODE_ENV === "production") {
    return merge(commonConfig, prodConfig);
  }
  return merge(commonConfig, devConfig);
};
