// 当你声明一个索引签名时，所有明确的成员都必须符合索引签名：
interface Foo {
  [key: string]: number;
  x: number;
  y: number;
}

// interface Bar {
//   [key: string]: number;
//   x: number;
//   y: string; // Error: y 属性必须为number
//   // 类型“string”的属性“y”不能赋给“string”索引类型“number”。ts(2411)
// }

let foo: Foo = {
  x: 1,
  y: 2,
};

// 直接
foo["x"];
console.log(foo["x"]); // 1

// 间接
const x = "x";
console.log(foo[x]); // 1

export {};
