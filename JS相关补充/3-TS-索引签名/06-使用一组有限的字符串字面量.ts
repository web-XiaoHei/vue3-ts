// 一个索引签名可以通过映射类型来使索引字符串为联合类型中的一员
type Index = "a" | "b" | "c";
type FromIndex = { [k in Index]?: number };

// const good: FromIndex = { b: 1, c: 2 };

// const bad: FromIndex = { b: 1, c: 2, d: 3 }; //Error
// `{ b: 1, c: 2, d: 3 }` 不能分配给 'FromIndex'
// 对象字面量只能指定已知类型，'d' 不存在 'FromIndex' 类型上

type FromSomeIndex<K extends string> = { [key in K]: number };

export {};
