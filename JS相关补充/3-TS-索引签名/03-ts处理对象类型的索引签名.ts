const obj = {
  toString() {
    return "Hello";
  },
};

const foo: any = {};

//  ERROR: 索引签名必须为 string, number....
// foo[obj] = "world";

// FIX: TypeScript 强制你必须明确这么做：
foo[obj.toString()] = "World";
/* 
    强制用户必须明确的写出 toString() 的原因是：在对象上默认执行的 toString 方法是有害的。例如 v8 引擎上总是会返回 [object Object]
 */

// 这里实际上就是你存储的地方
console.log(foo["[object Object]"]); // World

/* 
    TIP
    TypeScript 的索引签名必须是 string 或者 number。
    symbols 也是有效的，TypeScript 支持它
*/

export {};
