/*
 * Author  rhys.zhao
 * Date  2022-08-24 17:50:10
 * LastEditors  rhys.zhao
 * LastEditTime  2022-09-05 17:59:35
 * Description 404页面
 */
import React, { useEffect } from "react";
import styles from "./index.scss";

import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname, "enter");
    return () => {
      console.log(location.pathname, "leave");
    };
  }, [location.pathname]);

  return <div className={styles.notFound}>404</div>;
};

export default NotFound;
