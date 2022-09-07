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
        path: '/login',
        name: "Login",
        component: () => import(/*webpackChunkName:"about-chunk"*/"../pages/Login.vue")
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

// 动态添加路由
const categeoryRoute = {
    path: "/category",
    component: () => import('../pages/Category.vue')
}
// 添加顶级路由对象
router.addRoute(categeoryRoute);
// 添加二级路由对象
router.addRoute("Home", {
    path: "moment",
    component: () => import('../pages/HomeMoment.vue')
})


// 动态删除路由
// 方式一：添加一个name相同的路由

// router.addRoute({path:'/about',name:'about',component:About})
// router.addRoute({path:'/about',name:'about',component:Home})

// 方式二：通过removeRoute方法,传入路由的名称
// router.addRoute({
//     path: '/about',
//     name: 'About',
//     component: () => import(/*webpackChunkName:"about-chunk"*/"../pages/About.vue")
// })
// router.removeRoute('About')

// 方法三：通过addRoute方法的返回值回调
// const removeRoute = router.addRoute({
//     path: '/about',
//     name: 'About',
//     component: () => import(/*webpackChunkName:"about-chunk"*/"../pages/About.vue")
// })

// removeRoute()

// 路由的其他方法补充
// router.hasRoute():检查路由是否存在
// router.getRoutes():获取一个包含所有路有记录的数组


// 导航守卫
let counter = 0
// to:Route对象,即将跳转到的route对象
// from:Route对象,从哪一个导航跳转过来的route对象
// next 不推荐使用

/* 
    返回值问题：
    1.false:不进行导航
    2.undefined或者不写返回值，进行默认导航
    3.字符串：路径,跳转到对应的路径
    4.对象：router.push({path:"/login",query:{}})
*/
router.beforeEach((to, form) => {
    console.log(`进行了${++counter}次路由跳转`);
    // if (to.path.indexOf("/about") !== -1) {
    //     return '/login'
    // }

    if (to.path !== '/login') {
        const token = window.localStorage.getItem("token")
        if (!token) {
            return '/login'
        }
    }
})
export default router