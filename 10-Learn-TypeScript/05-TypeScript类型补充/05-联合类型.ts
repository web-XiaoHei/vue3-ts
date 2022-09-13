// number | string联合类型
function printID(id: number | string) {
  console.log(id);
  // 使用联合类型的值时，需要特别的小心
  // narrow：缩小
  if (typeof id == "string") {
    // TypeScipt 帮助确定id一定是string类型
    id.toUpperCase();
  } else {
  }
}
printID(123);
printID("s12");

export {};
