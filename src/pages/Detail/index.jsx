/*
 * Author  rhys.zhao
 * Date  2022-08-24 17:56:37
 * LastEditors  rhys.zhao
 * LastEditTime  2022-09-05 17:59:51
 * Description 文章详情页面
 */
import React from "react";
import styles from "./index.scss";

import { useParams, useSearchParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  console.log(searchParams.getAll("author")[0]);
  return <div className={styles.detail}>{`这里是文章${params.id}`}</div>;
};

export default Detail;
