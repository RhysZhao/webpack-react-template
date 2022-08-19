/*
 * Author  rhys.zhao
 * Date  2022-08-16 13:54:48
 * LastEditors  rhys.zhao
 * LastEditTime  2022-08-16 13:55:58
 * Description
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log("说话");
  }
}
export default Person;
