/*
 * Author  rhys.zhao
 * Date  2022-08-15 15:22:57
 * LastEditors  rhys.zhao
 * LastEditTime  2022-09-05 17:34:01
 * Description 入口文件
 */
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";

import routes from "../config/router.config";

const App = () => <>{useRoutes(routes)}</>;

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
