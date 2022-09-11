const tInfo: [string, number, number] = ["why", 18, 1.88];
const item1 = tInfo[0]; //why, 并且知道类型是string类型
const item2 = tInfo[1]; //18,并且知道类型是number类型
const item3 = tInfo[2];
// const item4 = tInfo[3]
// 那么tuple和数组有什么区别呢?
// 数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中(可以放在对象或者元组中)
// 元组中每个元素都有自己特性的类型，根据索引值获取到得到值可以确定对应的类型
const info: (string | number)[] = ["why", 18, 1.88];
const items1 = info[0]; // 不能确定类型

const tInfoItem: [string, number, number] = ["why", 18, 1.88];
const items2 = tInfoItem[0]; // 一定是string类型
