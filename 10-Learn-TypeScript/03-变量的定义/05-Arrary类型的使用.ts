// 确认一个事实:names是一个数组类型,但是数组中存放的是什么类型的元素呢?
// 不好的习惯：一个数组中在TypeScript开发中，最好存放的数据类型是固定的（eg:string）
// 类型注解：type annotation
const names = [];
// 写法一：不推荐
const names1: Array<string> = [];
// 写法二：推荐
const names2: string[] = [];
