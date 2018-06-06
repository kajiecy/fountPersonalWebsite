import Main from '@/views/layout/Home.vue';




// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        {path: 'home', title: {i18n: 'home'}, name: 'home', component: () => import('@/views/Welcome.vue')},

    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: 'test1',
                icon: 'lock-combination',
                title: 'test1界面2',
                name: 'test1',
                component: () => import('@/views/testviews/test1.vue')
            }
        ]
    },
    {
        path: '/',
        component: Main,
        children: [
            {
                path: 'test2',
                icon: 'lock-combination',
                title: 'test2界面2',
                name: 'test2',
                component: () => import('@/views/testviews/test2.vue')
            }
        ]
    },
    {
        path: '/',
        icon: 'lock-combination',
        title: 'test3界面1',
        component: Main,
        children: [
            {
                path: 'test3-1',
                title: 'test3-1界面2',
                name: 'test3-1',
                component: () => import('@/views/testviews/test3-1.vue')
            },
            {
                path: 'test3-2',
                title: 'test3-2界面2',
                name: 'test3-2',
                component: () => import('@/views/testviews/test3-2.vue')
            }
        ]
    }

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