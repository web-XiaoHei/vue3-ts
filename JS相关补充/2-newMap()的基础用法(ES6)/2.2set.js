// 设置键名key对应的键值为value，然后返回整个 Map 结构

// 如果key已经有值，则键值会被更新，否则就新生成该键

// 同时返回的是当前Map对象，可采用链式写法

const m = new Map()
let fn = function () {

}

m.set("edition", 6)   // 键是字符串
m.set(fn, "standard") // 键是函数
m.set(undefined, "nah")   // 键是 undefined
m.set(1, 'a').set(2, 'b').set(3, 'c') // 链式操作

console.log(m);