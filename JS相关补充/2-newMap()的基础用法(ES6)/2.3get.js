// get方法读取key对应的键值，如果找不到key，返回undefined
const m = new Map()
const hello = function () {
    console.log('hello');
}
m.set(hello, 'Hello ES6!') // 键是函数

console.log(m.get(hello)); //Hello ES6!
console.log(m.get('coderwhy')); // undefined