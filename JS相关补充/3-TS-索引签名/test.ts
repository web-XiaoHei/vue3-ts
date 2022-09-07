type TTest = {
  (arg2: any, e: any): void;
  (arge: string): void;
};

const test1: TTest = (str: string) => {};
// const test2: TTest = (str: number) => { };

const fn = (
  a1: string,
  a2: number,
  a3: { (arg2: any, e: any): void; (arge: string): void }
) => {
  console.log("11111");
};

fn("string", 1, (e: string) => {
  console.log(e);
});

const test3: TTest = (e: string) => {};
