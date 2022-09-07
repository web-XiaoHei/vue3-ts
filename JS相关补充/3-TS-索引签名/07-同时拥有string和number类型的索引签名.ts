/* 这并不是一个常见的用例，但是 TypeScript 支持它。
string 类型的索引签名比 number 类型的索引签名更严格。这是故意设计，它允许你有如下类型： */

interface Arrstr {
  [key: string]: string | number; //必须包括所用成员类型
  [index: number]: string; //字符串索引类型的子级

  // example
  length: number;
}

const foo: Arrstr = {
  x: 1,
  y: "why",
  1: "1",
  length: 100,
};
foo["y"];

export {};
