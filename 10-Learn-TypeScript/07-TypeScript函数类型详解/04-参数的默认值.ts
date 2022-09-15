// 代码习惯
// 必传参数 - 有默认值的参数 - 可选参数
function foo(y: number, x: number = 20, z?: number) {
  console.log(x, y, z);
}
foo(20);
foo(20, 30);
foo(20, 30, 40);
export {};
