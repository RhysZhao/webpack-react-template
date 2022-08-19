/*
 * Author  rhys.zhao
 * Date  2022-08-16 10:14:56
 * LastEditors  rhys.zhao
 * LastEditTime  2022-08-17 16:47:08
 * Description webpack通用环境配置
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        include: path.resolve(__dirname, "../src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
          // 'eslint-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(scss|sass)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "sass-loader"
        ]
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
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src/")
    },
    mainFiles: ["index"], // 解析目录使用的文件名
    modules: ["node_modules"], // modules 模块对应的目录
    cacheWithContext: false,
    symlinks: false
  }
};