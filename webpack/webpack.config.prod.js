/*
 * Author  rhys.zhao
 * Date  2022-08-16 10:15:07
 * LastEditors  rhys.zhao
 * LastEditTime  2023-01-29 14:07:56
 * Description webpack生产环境配置
 */

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin; // 打包体积分析
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CompressionPlugin = require("compression-webpack-plugin");

const { resolve } = require("path");

module.exports = {
  output: {
    publicPath: "./",
    filename: "scripts/[name]-[contenthash:10].js",
    assetModuleFilename: "images/[name][contenthash:10][ext]"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: resolve(__dirname, "../src"),
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        sideEffects: true
      },
      {
        test: /\.(scss|sass)$/i,
        include: resolve(__dirname, "../src"),
        use: [
          MiniCssExtractPlugin.loader,
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
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.NODE_ENV === "analyzer" ? "server" : "disabled"
    }),
    new CompressionPlugin({
      algorithm: "gzip", // 使用gzip压缩
      test: /\.js$|\.html$|\.css$/, // 匹配文件名
      filename: "[path][base].gz", // 压缩后的文件名(保持原文件名，后缀加.gz)
      minRatio: 0.8, // 压缩率小于1才会压缩
      threshold: 1024 * 10, // 对超过10k的数据压缩
      deleteOriginalAssets: false // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
    })
  ],
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
        minify: TerserPlugin.esbuildMinify
        // terserOptions: {
        //   compress: {
        //     drop_console: true // 去除console
        //   }
        // }
      }),
      new MiniCssExtractPlugin({
        filename: "styles/[name]-[contenthash:10].css"
      })
    ]
  },
  mode: "production"
};
