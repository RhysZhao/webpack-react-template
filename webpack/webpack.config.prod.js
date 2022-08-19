/*
 * Author  rhys.zhao
 * Date  2022-08-16 10:15:07
 * LastEditors  rhys.zhao
 * LastEditTime  2022-08-17 16:34:44
 * Description webpack生产环境配置
 */
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin; // 打包体积分析

module.exports = {
  output: {
    publicPath: "./",
    filename: "scripts/[name]-[contenthash:10].js",
    assetModuleFilename: "images/[name][contenthash:10][ext]"
  },
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single", //将运行时代码拆分为单独的块
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    },
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true // 去除console
          }
        }
      })
    ]
  },
  mode: "production"
};
