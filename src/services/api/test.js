/*
 * Author  rhys.zhao
 * Date  2022-11-10 11:01:47
 * LastEditors  rhys.zhao
 * LastEditTime  2022-12-27 13:37:14
 * Description api示例，某个分类文件
 */
import request from "../request";

/**
 * 这个是get接口请求示例
 * @param {object} params
 */
export function getInfo(params) {
  return request.get("/api/getInfo", { params });
}

/**
 * 这个是post接口请求示例
 * @param {object} params
 */
export function changeInfo(params) {
  return request.post("/api/changeInfo", params);
}
