import { createApp } from 'vue'
// import App from './01-组件的拆分和嵌套/App.vue'
// import App from './02-组件的css作用域/App.vue'

// import App from './03-父组件传递子组件/App.vue'
// import App from "./04-子组件传递父组件/App.vue"

// import App from "./05-商品页面的切换/App.vue"
// import App from "./06-Provide和Inject使用/App.vue"

// import App from "./07-事件总线的使用/App.vue"
// import App from "./08-插槽的基本使用/App.vue"

// import App from "./09-具名插槽的使用/App.vue"
// import App from "./10-作用域插槽的使用/App.vue"

// import App from "./11-动态组件的使用/App.vue"
import App from "./12-异步组件的使用/App.vue"

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.mount('#app')
