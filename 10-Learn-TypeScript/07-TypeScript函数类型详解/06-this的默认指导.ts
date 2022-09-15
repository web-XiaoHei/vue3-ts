// this是可以被推导出来 info对象（TypeScript推导出的）
const info = {
  name: "why",
  eating() {
    console.log(this.name + "Eatting");
  },
};

info.eating();

export {};
