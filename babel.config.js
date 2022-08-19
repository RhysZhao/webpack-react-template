/*
 * Author  rhys.zhao
 * Date  2022-08-16 10:08:22
 * LastEditors  rhys.zhao
 * LastEditTime  2022-08-17 16:41:47
 * Description
 */
module.exports = {
  presets: [["@babel/preset-env"], "@babel/preset-react"],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true
      }
    ]
  ]
};
