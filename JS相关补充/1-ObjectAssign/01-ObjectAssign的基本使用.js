var target = {
    name: "Kobe",
    age: 18
}

var source = { state: "single" }

// var result = Object.assign(source, target)

// console.log(result, 'result');//  { state: 'single', name: 'Kobe', age: 18 }
console.log(source, 'source');//  { state: 'single', name: 'Kobe', age: 18 }
console.log(target, "target");//  { name: 'Kobe', age: 18 }

// source上的state属性合并到了target对象上 ，原对象也发生了改变
// 如果只是想将两个或多个对象的属性合并到一起，不改变原有对象的属性，可以用一个空的对象作为target对象。
var result2 = Object.assign({}, target, source)

console.log(result2, 'result');//  { state: 'single', name: 'Kobe', age: 18 }
console.log(source, 'source');//  { state: 'single' }
console.log(target, "target");//  { name: 'Kobe', age: 18 }