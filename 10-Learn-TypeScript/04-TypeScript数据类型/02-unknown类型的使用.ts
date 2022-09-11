function foo() {
  return "abc";
}
function bar() {
  return 123;
}
// unknown类型只能赋值给any和unknown类型
// any类型可以赋值给任意类型
let flag = true;
let result: unknown;
if (flag) {
  result = foo();
} else {
  result = bar();
}

// let message: string = result;//不能将类型“unknown”分配给类型“string”。
// let num: number = result;

export {};
