// 类型断言
// 案例一
const el = document.getElementById("why") as HTMLImageElement;
el.src = "url地址";

// 案例二
class Person {}
class Student extends Person {
  studing() {}
}

function sayHello(p: Person) {
  (p as Student).studing();
}

const stu = new Student();
sayHello(stu);

// 案例三 不推荐
const message = "Hello World";
const num: number = message as unknown as number;

export {};
