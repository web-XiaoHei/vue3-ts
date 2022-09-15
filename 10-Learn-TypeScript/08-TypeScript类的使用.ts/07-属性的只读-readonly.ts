class Person {
  // 1.只读属性是可以在构造器中赋值，赋值之后就不可以修改
  // 2.属性本身不能进行修改，但是如果它是对象类型，对象中的属性是可以修改
  readonly name: string;
  age?: number;
  readonly firend?: Person;
  constructor(name: string, firend?: Person) {
    this.name = name;
    this.firend = firend;
  }
}

const p = new Person("why", new Person("kobe"));
console.log(p.name);
console.log(p.firend);

// 不可以直接修改friend
// p.firend = new Person("james");

if (p.firend) {
  p.firend.age = 30;
}

// p.name = "123";

console.log(p);

export {};
