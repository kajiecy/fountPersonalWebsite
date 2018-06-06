import Main from '@/views/layout/Home.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
// export const loginRouter = {
//     path: '/login',
//     name: 'login',
//     meta: {
//         title: 'Login - 登录'
//     },
//     component: () => import('@/views/Login.vue')
// };



export const homeRouter = {
    path: '/home',
    name: 'home',
    component: Main,
    children:[
      {
        //home 界面 路由的 默认 显示界面
        path: '/',
        name: 'welcome',
        // component: resolve => require(['@/views/testviews/test1.vue'], resolve)
        // component: resolve => require(['@/views/chartsviews/ChartsCabinet.vue'], resolve)
        component: resolve => require(['@/views/Welcome.vue'], resolve)
      },
    ]
};
// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [

];
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    // redirect: '/charts/chartscabinet',
    redirect: '/home',
    component: Main,
    children: []
};
export const undefindRouter = {
    path: '/404',
    name: '404',
    meta: {
        title: '404 没有找到界面'
    },
    component: () => import('@/views/common/undefindPage.vue')
};
export const nullRouter = {
    path: '*',
    redirect: '/404'
};


// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    // loginRouter,
    ...appRouter,
    homeRouter,
    otherRouter,
    nullRouter,
    undefindRouter
];
