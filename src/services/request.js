/*
 * Author  rhys.zhao
 * Date  2022-11-10 11:00:16
 * LastEditors  rhys.zhao
 * LastEditTime  2022-12-27 13:26:06
 * Description axios封装
 */

import axios from "axios";

const envData = import.meta.env;

const instance = axios.create({
  baseURL: envData.VITE_HTTP,
  timeout: 15 * 1000
});

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    console.log("object :>> 请求参数", config);
    return config;
  },
  (err) => Promise.reject(err)
);

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    console.log("object :>> 响应", res);
    return res;
  },
  (err) => Promise.reject(err)
);

export default instance;
