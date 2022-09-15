type CalcFunc = (num1: number, num2: number) => void;

function calc(fn: CalcFunc) {
  console.log(fn(20, 30));
}

function sum(num1: number, num2: number) {
  return num1 + num2;
}

function mul(num1: number, num2: number) {
  return num1 * num2;
}

calc(sum);
calc(mul);

export {};
