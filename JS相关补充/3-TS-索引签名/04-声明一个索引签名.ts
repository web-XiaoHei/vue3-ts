const foo: {
  [index: string]: { message: string };
} = {};

// 存储的东西必须符合结构
foo["a"] = { message: "some message" };

// Error，必须包含'message'
// foo["b"] = { messages: "some message" };

// 读取时，也会有类型检查
// ok
foo["a"].message;

// foo['b'].messages

/* 
    TIP
    索引签名的名称（如：{ [index: string]: { message: string } } 里的 index ）除了可读性外，并没有任何意义。例如：如果有一个用户名，你可以使用 { username: string}: { message: string }，这有利于下一个开发者理解你的代码。
    
    number 类型的索引也支持：{ [count: number]: 'SomeOtherTypeYouWantToStoreEgRebate' }

*/

export {};
