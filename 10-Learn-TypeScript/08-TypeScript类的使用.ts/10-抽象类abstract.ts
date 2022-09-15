function makeArea(shape: Shape) {
  return shape.getArea();
}

// 抽象方法：ts中没有具体实现的方法（没有方法体）
// 抽象方法,必须存在于抽象类中
// 抽象类是使用abstract声明的类
// 抽象类不能被实例（也就是不能被new创建）
// 抽象方法必须被子类实现，否则该类必须是一个抽象类
abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    super(); //派生类的构造函数必须包含 "super" 调用。
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  private r: number;
  constructor(r: number) {
    super();
    this.r = r;
  }

  getArea(): number {
    return this.r * this.r * 3.14;
  }
}

const rectangle = new Rectangle(20, 30);
const circle = new Circle(10);

console.log(makeArea(rectangle));
console.log(makeArea(circle));

// makeArea(new Shape())// 无法创建抽象类的实例
// makeArea(123)
// makeArea("123");
