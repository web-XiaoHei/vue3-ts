// delete方法删除某个键，返回true。如果删除失败，返回false
const m = new Map();
m.set(undefined, 'nah');
m.has(undefined)     // true

m.delete(undefined)
m.has(undefined)       // false