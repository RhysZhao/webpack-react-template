/*
 * Author  rhys.zhao
 * Date  2022-08-16 10:14:56
 * LastEditors  rhys.zhao
 * LastEditTime  2023-01-29 13:57:16
 * Description webpack通用环境配置
 */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: resolve(__dirname, "../dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        include: [resolve(__dirname, "../src"), resolve(__dirname, "../config")],
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: resolve(__dirname, "../src"),
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于10kB的图片内联
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        include: resolve(__dirname, "../src"),
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
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      "@": resolve(__dirname, "../src/")
    },
    mainFiles: ["index"], // 解析目录使用的文件名
    modules: [resolve(__dirname, "../src"), "node_modules"], // 解析模块时应该搜索的目录
    cacheWithContext: false,
    symlinks: false
  }
};
