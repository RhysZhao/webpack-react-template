/*
 * Author  rhys.zhao
 * Date  2022-08-16 20:10:29
 * LastEditors  rhys.zhao
 * LastEditTime  2022-08-16 20:26:22
 * Description webpack配置
 */
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const devConfig = require("./webpack.config.dev");
const prodConfig = require("./webpack.config.prod");

module.exports = (env) => {
  if (env.production) {
    return merge(commonConfig, prodConfig);
  }
  return merge(commonConfig, devConfig);
};
