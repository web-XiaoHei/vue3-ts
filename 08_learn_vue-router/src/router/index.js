import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'

// 配置映射关系
// const routes = [
//     { path: '/', redirect: '/home' },
//     { path: '/home', component: Home },
//     { path: '/about', component: About }
// ]

// 路由懒加载
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: "Home",
        component: () => import(/*webpackChunkName:"home-chunk"*/"../pages/Home.vue"),
        meta: {
            name: "why",
            age: 18,
            height: 1.88
        },
        children: [
            {
                path: "/",
                redirect: '/home/message'
            },
            {
                path: "product",
                component: () => import("../pages/HomeProduct.vue")
            },
            {
                path: "message",
                component: () => import("../pages/HomeMessage.vue")
            }
        ]
    },
    {
        path: '/about',
        name: "About",
        component: () => import(/*webpackChunkName:"about-chunk"*/"../pages/About.vue")
    },
    {
        path: '/user/:id/username/:username',
        name: "User",
        component: () => import(/*webpackChunkName:"user-chunk"*/"../pages/User.vue")
        /*
          匹配多个参数
          匹配模式                      匹配路径               $route.params
          /users/:id             =>  /users/123           =>   {id:'123'}
          /users/:id/info/:name  =>  /users/123/info/why  =>   {id:'123',name:'why'}
        */
    },
    {
        path: '/:pathMatch(.*)',
        name: "NotFound",
        component: () => import("../pages/NotFound.vue")
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})
// 创建一个路由对象router

export default router