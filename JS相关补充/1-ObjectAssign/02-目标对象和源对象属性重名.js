var target = { name: 'target', age: 18 }
var source = { state: 'source', age: 19 }
var result = Object.assign(target, source)

console.log(result);// { name: 'target', age: 19, state: 'source' }

// 可以看到如果有同名属性的话，后面的属性值会覆盖前面的属性值。