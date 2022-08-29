// keys()：返回键名的遍历器
// values()：返回键值的遍历器
// entries()：返回所有成员的遍历器
// forEach()：遍历 Map 的所有成员

const map = new Map([
    ['F', 'no'],
    ['T', 'yes'],
]);

//keys()
for (let key of map.keys()) {
    console.log(key);       // "F"  "T"
}

//values()
for (let value of map.values()) {
    console.log(value);    // "no"  "yes"
}

// entries()
for (let item of map.entries()) {
    console.log(item[0], item[1]);
}
// "F" "no"  、"T" "yes"

// 或者
for (let [key, value] of map.entries()) {
    console.log(key, value);
}
// "F" "no" 、"T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
    console.log(key, value);
}
// "F" "no"  、 "T" "yes"

map.forEach(function (value, key, map) {
    console.log(key, value);    // "F" "no"  、 "T" "yes"
});