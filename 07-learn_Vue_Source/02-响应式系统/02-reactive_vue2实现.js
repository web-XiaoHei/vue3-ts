class Dep {
    constructor() {
        // subscribers订阅者
        this.subscribers = new Set()
    }

    // addEffect(effect) {
    //     this.subscribers.add(effect)
    // }
    depend() {
        if (activeEffect) {
            this.subscribers.add(activeEffect)
        }
    }
    notfiy() {
        this.subscribers.forEach(effect => {
            effect()
        })
    }
}

let activeEffect = null
function watchEffect(effect) {
    activeEffect = effect
    effect()
    activeEffect = null
}

// Map({key:value})：key是一个字符串
// WeakMap({key：value})：key是一个对象，弱引用
const targetMap = new WeakMap();
function getDep(target, key) {
    // 1.根据对象(target)取出对对应的map对象
    let depsMap = targetMap.get(target)
    // get方法读取key对应的键值，如果找不到key,返回undefined
    if (!depsMap) {
        depsMap = new Map()
        targetMap.set(target, depsMap)
        // set方法设置键名key对应的键值为value，然后返回整个 Map 结构
        // 如果key已经有值，则键值会被更新，否则就新生成该键
    }
    // 2.取出具体的dep对象
    let dep = depsMap.get(key)
    if (!dep) {
        dep = new Dep();
        depsMap.set(key, dep)
    }
    return dep
}
// vue2对raw进行数据劫持 Object.defineProperty
function reactive(raw) {
    Object.keys(raw).forEach(key => {
        // Object.keys() 返回一个表示给定对象的所有可枚举属性的字符串数组
        // var obj = { 0: 'a', 1: 'b', 2: 'c' };
        // console.log(Object.keys(obj)); // console: ['0', '1', '2']

        const dep = getDep(raw, key);
        let value = raw[key]

        Object.defineProperty(raw, key, {
            get() {
                dep.depend()
                return value
            },
            set(newValue) {
                if (value !== newValue) {
                    value = newValue
                    dep.notfiy()
                }
            }
        })
    })

    return raw
}


// 测试代码
const info = reactive({ counter: 100, name: "why" })
const foo = reactive({ height: 1.88 })

// watchEffect1
watchEffect(function () {
    console.log("watchEffect1", info.counter * 2, info.name)
})
// watchEffect2
watchEffect(function () {
    console.log("watchEffect2", info.counter * info.counter)

})
// watchEffect3
watchEffect(function () {
    console.log("watchEffect3", info.counter + 10, info.name)

})
// watchEffect4
watchEffect(function () {
    console.log("watchEffect4", foo.height)

})


// info.counter++
info.name = "why"

// foo.height = 2
