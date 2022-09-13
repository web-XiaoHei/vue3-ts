// const info = {
//   name: "why",
//   age: 18,
// };

// info.name = "kobe";

type Method = "GET" | "POST";
function request(url: string, method: Method) {}

type Request = {
  url: string;
  method: Method;
};

// 解决方法一
// const options: Request = {
//   url: "http://www.baidu.com",
//   method: "POST",
// };

// 解决方法三 字面量推理
const options = {
  url: "http://www.baidu.com",
  method: "POST",
} as const;

// 解决方法二
// request(options.url, options.method as Method);

request(options.url, options.method);

export {};
