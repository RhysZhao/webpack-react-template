/*
 * Author  rhys.zhao
 * Date  2022-08-16 11:10:57
 * LastEditors  rhys.zhao
 * LastEditTime  2022-08-16 11:12:35
 * Description 一个组件示例
 */
import React from "react";
import PropTypes from "prop-types";
import styles from "./index.scss";

const Hello = (props) => {
  const { name } = props;
  return <div className={styles.helloWrap}>Hello, {name} !</div>;
};
Hello.propTypes = {
  name: PropTypes.string.isRequired
};
Hello.defaultProps = {
  name: "Jack"
};

export default Hello;
