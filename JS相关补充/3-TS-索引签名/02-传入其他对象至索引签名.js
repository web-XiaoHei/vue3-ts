const obj = {
  toString() {
    console.log("toString called");
    return "Hello";
  },
};

// 当你传入一个其他对象至索引签名时，JavaScript 会在得到结果之前会先调用 .toString 方法：

const foo = {};
foo[obj] = "world"; // toString called 

console.log(foo[obj]);// toString called, world

console.log(foo['Hello']);// world


/* 
  TIP
  只要索引位置使用了 obj，toString 方法都将会被调用。
*/


let foo1 = ['world']
console.log(foo1[0]); // world



