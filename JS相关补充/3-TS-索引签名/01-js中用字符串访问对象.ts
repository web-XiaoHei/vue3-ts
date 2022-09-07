let foo: any = {};
foo["Hello"] = "world";

console.log(foo["Hello"]);

// 我们在键 Hello 下保存了一个字符串 World，除字符串外，它也可以保存任意的 JavaScript 对象，例如一个类的实例。

class Foo {
  constructor(public message: string) {}
  log() {
    console.log(this.message);
  }
}
foo["Hello"] = new Foo("world");
foo["Hello"].log();
