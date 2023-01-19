/*
 * Author  rhys.zhao
 * Date  2022-08-18 10:36:52
 * LastEditors  rhys.zhao
 * LastEditTime  2023-01-19 10:55:31
 * Description eslint配置
 */
module.exports = {
  // 特定项目下，不再检索上级目录
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // eslint-config-prettier的缩写
    "prettier"
  ],
  plugins: ["react"],
  parser: "@babel/eslint-parser",
  // 解析器选项
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    // indent: "off",
    // camelcase: "warn", // 使用驼峰命名
    // semi: ["warn", "always"],
    // radix: "warn", // 必须指定parseInt的第二个参数，基数
    // eqeqeq: "error" // 必须使用三个=
    // "class-methods-use-this": "off",
    // "require-atomic-updates": "off",
    // "max-nested-callbacks": ["error", 6],
    // "no-undef": "error",
    // "no-tabs": "warn",
    // "no-console": ["warn", { allow: ["error"] }], // 警告未删除的console
    // "no-lone-blocks": "error",
    "no-unused-vars": "warn"
    // "no-useless-escape": "warn",
    // "no-mixed-spaces-and-tabs": "warn", // 禁止空格和tabs混用
    // "no-multi-spaces": "warn",
    // "no-new-func": "warn",
    // "no-multiple-empty-lines": "off",
    // "no-cond-assign": "error",
    // "no-multi-assign": "warn",
    // "no-unreachable": "warn",
    // // "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    // "react/jsx-key": "error"
  }
};
