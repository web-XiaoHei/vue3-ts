class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  // 访问器setter /getter
  // setter
  set name(newName: string) {
    console.log("setter触发");

    this._name = newName;
  }

  // getter
  get name() {
    console.log("getter触发");

    return this._name;
  }
}

const p = new Person("why");
p.name = "coderwhy";
console.log(p.name);

export {};
