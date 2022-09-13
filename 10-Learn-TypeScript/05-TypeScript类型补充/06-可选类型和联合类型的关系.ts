// 让一个参数本身是可选的
// 让一个参数一个可选类型的时候，它其实类似这个参数是 类型|undefined的联合类型
// function foo(message?: string) {
//   console.log(message);
// }

function foo(message: string | undefined) {
  console.log(message);
}

foo(undefined);

export {};
