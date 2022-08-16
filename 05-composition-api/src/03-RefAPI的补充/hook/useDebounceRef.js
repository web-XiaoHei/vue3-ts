import { customRef } from "vue"

// 自定义ref
//  创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。
export default function (value) {
    let timer = null
    // customRef的两个参数分别是用于追踪的 track 与用于触发响应的 trigger
    return customRef((track, trigger) => {
        return {
            get() {
                track();
                return value
            },
            set(newValue) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    value = newValue
                    trigger()
                }, 3000)
            }
        }
    })

}