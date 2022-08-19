/*
 * Author  rhys.zhao
 * Date  2022-08-15 15:22:57
 * LastEditors  rhys.zhao
 * LastEditTime  2022-08-17 16:46:44
 * Description 入口文件
 */
import React from "react";
import { createRoot } from "react-dom/client";
import add from "lodash/add";

import Hello from "./components/Hello";
import Person from "./utils/calculator";

const result = add(4, 6);

console.log("object :>> result", result);

const jack = new Person("jack", 18);
jack.say();

console.log("dddddddddddddddddddddddddddddddddddddddddddddddddddddd");

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    你好。
    <Hello />
  </div>
);
