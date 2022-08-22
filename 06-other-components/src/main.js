import { createApp } from 'vue'
// import App from "./01-render函数的使用/App.vue"
// import App from "./03-自定义指令/App.vue"
import App from "./04-teleport内置组件/App.vue"
const app = createApp(App)


// 全局自定义指令
// app.directive("focus", {
//     mounted(el, bindings, vnode, prevnode) {
//         console.log("focus mounted");
//         el.focus();
//     },
// })
import registerDirectives from './direactives'
registerDirectives(app)

import pluginObject from './plugins/plugins_object'
app.use(pluginObject)
app.mount('#app')
