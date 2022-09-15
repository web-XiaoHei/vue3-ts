class Person {
  private name: string = "默认";

  // 封装了两个方法，通过方法来访问name
  getName() {
    return this.name;
  }

  setName(newName: string) {
    this.name = newName;
  }
}

const p = new Person();
// console.log(p.name);//属性“name”为私有属性，只能在类“Person”中访问。

console.log(p.getName());
p.setName("why");
console.log(p);

export {};
