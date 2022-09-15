let message: "Hello World" = "Hello World";

// message = "你好啊";

// 字面量类型和值一致
// 字面量类型的意义？就是必须结合联合类型

type Alignment = "left" | "right" | "center";
function changeAlign(align: Alignment) {
  console.log("修改方向：", align);
}

let align: Alignment = "left";
align = "right";
align = "center";

// align = "1111"

changeAlign("left");
