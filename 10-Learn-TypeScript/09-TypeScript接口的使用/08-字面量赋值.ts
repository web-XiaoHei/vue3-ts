interface IPerson {
  name: string;
  age: number;
  height: number;
}

const info = {
  name: "why",
  age: 18,
  height: 1.88,
  address: "广州市",
};

// freshness擦除
const p: IPerson = info;
console.log(info);
console.log(p);

function printInfo(person: IPerson) {
  console.log(person);
}
// printInfo({
//   name: "why",
//   age: 18,
//   height: 1.88,
//   address: "广州市",
// });
// 对象文字可以只指定已知属性，并且“address”不在类型“IPerson”中

printInfo(info);

// 这是因为TypeScript在字面量直接赋值的过程中，为了进行类型推导会进行严格的类型限制
// 但是之后如果我们是将一个变量标识符赋值给其他变量是，会进行freshness擦除操作
export {};
