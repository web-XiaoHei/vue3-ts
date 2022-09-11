var name: string = "why";
let age: number = 18;
const height: number = 1.88;

// string:小写 TypeScript中的字符串类型
// String:大写 JavaScript的字符串包装类的类型
const message: String = "Hello World";

// 默认情况下进行赋值时，会将赋值的值的类型，作为前面标识符的类型
// 这个过程称之为类型推导/推断
// foo没有添加类型注解
let foo = "foo";
// foo = 123;//不能将类型“number”分配给类型“string”。ts(2322)
// tslint
export {};
