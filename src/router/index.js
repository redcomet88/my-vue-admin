import Vue from "vue";
import VueRouter from "vue-router";


const User = ()=>import('../components/test/User')
const UserProfile = ()=>import('../components/test/UserProfile')

//如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
//const Foo = { template: '<div>foo</div>' }
//const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    // { path: '/foo', component: () => import('../components/HelloWorld')},
    { path: '/user/:id', component: User,
        children: [
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'profile',
                component: UserProfile
            }
        ]
    }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// // 4. 创建和挂载根实例。
// // 记得要通过 router 配置参数注入路由，
// // 从而让整个应用都有路由功能
// const app = new Vue({
//     router
// }).$mount('#app')

export default router;
