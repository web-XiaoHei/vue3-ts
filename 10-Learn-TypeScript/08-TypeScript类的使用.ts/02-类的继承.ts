class Person {
  name: string = "";
  age: number = 0;

  eating() {
    console.log("eating");
  }
}

class Student extends Person {
  sno: number = 0;
  studing() {
    console.log("studing");
  }
}

class Teacher extends Person {
  title: string = "";
  teaching() {
    console.log("teaching");
  }
}

const stu = new Student();
stu.name = "coderWhy";
stu.age = 18;
stu.eating();
