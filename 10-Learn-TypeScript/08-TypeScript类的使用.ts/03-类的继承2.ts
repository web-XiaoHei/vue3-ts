class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  eating() {
    console.log(this.name + " eating");
  }
}

class Student extends Person {
  sno: number;
  constructor(name: string, age: number, sno: number) {
    //super调用父类的构造器
    super(name, age);
    this.sno = sno;
  }
  eating() {
    console.log("student eating");
    super.eating();
  }

  studing() {
    console.log("student studing");
  }
}

const stu = new Student("why", 18, 111);
console.log(stu);

stu.eating();

export {};
