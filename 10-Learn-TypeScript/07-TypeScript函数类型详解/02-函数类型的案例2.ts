function CalcFunc(
  num1: number,
  num2: number,
  fn: (num1: number, num2: number) => number
) {
  return fn(num1, num2);
}

const result1 = CalcFunc(20, 30, function (a1, a2) {
  return a1 + a2;
});
const result2 = CalcFunc(20, 30, function (a1, a2) {
  return a1 * a2;
});
export {};
