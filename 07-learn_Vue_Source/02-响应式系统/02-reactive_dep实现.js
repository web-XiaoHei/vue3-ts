class Dep {
    constructor() {
        // subscribers订阅者
        this.subscribers = new Set()
    }

    addEffect(effect) {
        this.subscribers.add(effect)
    }

    notfiy() {
        this.subscribers.forEach(effect => {
            effect()
        })
    }
}

const info = { counter: 100 }

const dep = new Dep()

function dobleCounter() {
    console.log(info.counter * 2)
}
function powerCounter() {
    console.log(info.counter * info.counter)
}

dep.addEffect(dobleCounter)
dep.addEffect(powerCounter)



info.counter++
dep.notfiy()