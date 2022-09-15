class Person {
  static time: string = "20:00";

  static attendClass() {
    console.log("去学习~");
  }
}

console.log(Person.time);
Person.attendClass();

const p = new Person();
// p.time(); //属性“time”在类型“Person”上不存在。你的意思是改为访问静态成员“Person.time”吗?

// static只能有类调用

export {};
