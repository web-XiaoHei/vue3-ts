// interface NestedCSS {
//   color?: string; // strictNullChecks=false 时索引签名可为 undefined
//   [selector: string]: string | NestedCSS;
// }

// const example: NestedCSS = {
//   color: "red",
//   ".subclass": {
//     color: "blue",
//   },
// };

interface NestedCSS {
  color?: string;
  nest?: {
    [selector: string]: NestedCSS;
  };
}

const example: NestedCSS = {
  color: "red",
  nest: {
    ".subclass": {
      color: "blue",
    },
  },
};

const failsSliently: NestedCSS = {
  color: "red", // TS Error: 未知属性 'colour'
};
