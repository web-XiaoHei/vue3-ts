// 当进行一些类型断言 as any
// 在不想给某些JavaScript添加具体的数据类型时（原生的Javascript代码是一样的）
let message: any = "Hello";

message = 22;
message = true;
message = {};

const arr: any[] = [];
