function loopFun(): never {
  while (true) {
    console.log("123");
  }
}

function loopErr(): never {
  throw new Error();
}

function handleMessage(message: number | string) {
  switch (typeof message) {
    case "string":
      console.log("foo");
      break;
    case "number":
      console.log("bar");
      break;
    default:
      const check: never = message;
  }
}
