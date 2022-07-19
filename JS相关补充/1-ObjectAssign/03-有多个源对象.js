var target = { name: 'target', age: 18 }
var source1 = { state: 'source1', age: 19 }
var source2 = { state: 'source2', age: 20 }
var result = Object.assign(target, source1, source2)

console.log(result);// name: 'target', age: 20, state: 'source2' }
console.log(source1, source2);

// { state: 'source1', age: 19 } { state: 'source2', age: 20 }
// source1,source2没有发生改变

// 有多个源对象情况也是和一个源对象一样的。没有同名的属性会直接复制到目标对象上，同名的属性后面的属性值会覆盖前面的同名属性值


// 注意：
// 1、Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象，继承属性和不可枚举属性是不能拷贝的。

// 2、针对深拷贝，需要使用其他办法，因为 Object.assign()拷贝的是属性值。假如源对象的属性值是一个对象的引用，那么它也只指向那个引用。

// 3、目标对象自身也会改变

// 4、异常会打断后续拷贝任务

