/*
 * Author  rhys.zhao
 * Date  2022-08-16 10:14:56
 * LastEditors  rhys.zhao
 * LastEditTime  2022-09-05 17:47:08
 * Description webpack通用环境配置
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob"); // 文件匹配模式

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        sideEffects: true
      },
      {
        test: /\.(scss|sass)$/i,
        exclude: /node_modules/,
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
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于10kB的图片内联
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[contenthash:10].png"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "测试",
      template: "./public/index.html"
    }),
    new HtmlWebpackTagsPlugin({
      append: false,
      scripts: ["config/env.config.js"]
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "config/env.config.js", to: "config/env.config.js" }]
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name]-[contenthash:10].css"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "../src/")
    },
    mainFiles: ["index"], // 解析目录使用的文件名
    modules: [path.resolve(__dirname, "../src"), "node_modules"], // 解析模块时应该搜索的目录
    cacheWithContext: false,
    symlinks: false
  }
};
