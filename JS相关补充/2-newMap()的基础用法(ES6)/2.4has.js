// has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中
const m = new Map()
m.set('edition', 6)
m.set(262, 'standard')
m.set(undefined, 'nah')

m.has('edition')     // true
m.has('years')       // false
m.has(undefined)     // true