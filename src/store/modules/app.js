import {appRouter} from '@/router/router';


const app = {
    state: {
        isCollapse:false,
        logoImgUrl:'http://qiniu.kajie88.com/siteLOGO.PNG',
        logoImgSmallUrl:'http://qiniu.kajie88.com/siteLOGO-small.PNG',
        menuList:[],
        breadcrumbArr:[{title:'首页',name:'home'}],
    },
    getters:{
        getMenuList(){
            //this getter is conevt appRouter to menuList
            //the  format of menuList is:
            /*[
                {
                    icon: 'el-icon-date',
                    index: 'home',
                    title: 'Dashboard'
                }
                {
                    icon: 'el-icon-setting',
                    index: 'company',
                    title: '公司管理',
                    subs: [
                        {
                            index: 'company_order_manager',
                            title: '订单管理'
                        }
                    ]
                }
            ];
            * */
            let menuList = [];
            // console.log("appRouter's data is",appRouter)
            for(let router of appRouter){
                let subMenu = {}

                if(router.children!=null&&router.children.length>1){
                    subMenu.icon = router.meta.icon;
                    subMenu.title = router.meta.title;
                    subMenu.index = router.name==null?"":router.name;
                    subMenu.subs = [];
                    for(let subRoute of router.children){
                        subMenu.subs.push({
                            index: subRoute.name,
                            title: subRoute.meta.title
                        })
                    }

                }else {
                    subMenu.icon = router.children[0].meta.icon;
                    subMenu.title = router.children[0].meta.title;
                    subMenu.index = router.children[0].name;
                }
                menuList.push(subMenu)
            }
            // console.log("menuList's data is",menuList)
            return menuList;
        },

    },
    mutations: {
        changeCollapse (state) {
            // 变更状态
            state.isCollapse=!state.isCollapse;
        },
        updateBreadcrumbArr(state,routerMatched){
            //路由每次变动修改面包屑
            let newBreadcrumb = [{title:'首页',name:'home'}];
            for(let item of routerMatched){
                if(item.meta.title!=null){
                    newBreadcrumb.push({title:item.meta.title,name:item.name,query:item.query})
                }
            }
            state.breadcrumbArr = newBreadcrumb;
        }
    }
};

export default app;
