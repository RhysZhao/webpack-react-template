/*
 * Author  rhys.zhao
 * Date  2022-08-19 17:53:30
 * LastEditors  rhys.zhao
 * LastEditTime  2022-09-05 17:56:03
 * Description 基本布局
 */
import React from "react";
import styles from "./index.scss";

import { Link, Outlet } from "react-router-dom";

const BasicLayout = () => {
  return (
    <div className={styles.basicLayout}>
      <div className={styles.nav}>
        <Link to='/'>Home</Link> | <Link to='articleList'>ArticleList</Link>
      </div>
      {/* Outlet相当于是子路由的占位符 */}
      <Outlet />
    </div>
  );
};
export default BasicLayout;
