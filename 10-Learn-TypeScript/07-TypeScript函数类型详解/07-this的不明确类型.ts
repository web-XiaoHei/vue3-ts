type ThisType = { name: string };
function eating(this: ThisType, message: string) {
  console.log(this.name + " eating", message);
}

const info = {
  name: "why",
  eating: eating,
};

// 隐式绑定
info.eating("哈哈哈");

// 显式绑定
eating.call({ name: "kobe" }, "呵呵呵");
eating.apply({ name: "kobe" }, ["嘿嘿嘿"]);

export {};
