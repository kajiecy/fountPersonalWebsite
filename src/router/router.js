import Main from '@/views/layout/Home.vue';




// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        {path: 'home', title: {i18n: 'home'}, name: 'home', component: () => import('@/views/Welcome.vue')},
        {path: '/custom', title: {i18n: 'custom'}, name: 'custom', component: () => import('@/components/ShowIdComponents.vue')},

    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: 'solt-arithmetic',
                name: 'solt-arithmetic',
                meta:{
                    icon: 'el-icon-date',
                    title: '排序算法展示',
                },
                component: () => import('@/views/solt-arithmetic/index.vue')
            }
        ]
    },
    {
        path: '/',
        component: Main,
        children: [
            {
                path: 'div-move',
                name: 'div-move',
                meta:{
                    icon: 'el-icon-rank',
                    title: 'div拖拽Demo',
                },
                component: () => import('@/views/div-move/index.vue')
            }
        ]
    },
    {
        path: '/',
        component: Main,
        children: [
            {
                path: 'my-checkbox',
                name: 'my-checkbox',
                meta:{
                    icon: 'el-icon-news',
                    title: '高级CheckBox',
                },
                component: () => import('@/views/page/CheckBoxIndex.vue')
            }
        ]
    },


];
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
    name:'null',
    redirect: '/404'
};
// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    otherRouter,
    ...appRouter,
    undefindRouter,
    nullRouter
];