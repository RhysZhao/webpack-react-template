/*
 * Author  rhys.zhao
 * Date  2022-08-24 17:48:42
 * LastEditors  rhys.zhao
 * LastEditTime  2022-09-05 17:57:15
 * Description 文章列表页面
 */
import React from "react";
import styles from "./index.scss";

import { useNavigate } from "react-router-dom";

const ArticleList = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.articleList}>
      这里是articleList页面
      <ul>
        <li onClick={() => navigate("/articleList/1?author=jack&age=18")}>文章1</li>
        <li onClick={() => navigate("/articleList/2")}>文章2</li>
        <li onClick={() => navigate("/articleList/3")}>文章3</li>
      </ul>
    </div>
  );
};

export default ArticleList;
