class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log(this.name + " Eating");
  }
}

const p = new Person("why", 18);
console.log(p.age, p.name);

p.eating();

export {};
