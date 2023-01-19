/*
 * Author  rhys.zhao
 * Date  2022-08-22 13:14:53
 * LastEditors  rhys.zhao
 * LastEditTime  2022-09-05 17:58:27
 * Description 路由配置页面
 */
import React, { Suspense, lazy } from "react";
import BasicLayout from "../src/layout/BasicLayout";

const lazyLoad = (src) => <Suspense fallback={<>...</>}>{React.createElement(lazy(src))}</Suspense>;

const routes = [
  {
    path: "/",
    element: <BasicLayout />, // BasicLayout是基本布局，不必使用懒加载
    children: [
      {
        index: true,
        element: lazyLoad(() => import("../src/pages/Home"))
      },
      {
        path: "articleList",
        element: lazyLoad(() => import("../src/pages/ArticleList"))
      },
      {
        path: "articleList/:id",
        element: lazyLoad(() => import("../src/pages/Detail"))
      },
      {
        path: "*",
        element: lazyLoad(() => import("../src/pages/NotFound"))
      }
    ]
  }
];

export default routes;
