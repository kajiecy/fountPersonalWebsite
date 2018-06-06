import {appRouter} from '@/router/router';


const app = {
    state: {
        isCollapse:false,
        logoImgUrl:'http://qiniu.kajie88.com/siteLOGO.PNG',
        logoImgSmallUrl:'http://qiniu.kajie88.com/siteLOGO-small.PNG',
        menuList:[],
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
            console.log("appRouter's data is",appRouter)
            for(let router of appRouter){
                let subMenu = {}

                if(router.children!=null&&router.children.length>1){
                    subMenu.icon = router.icon;
                    subMenu.title = router.title;
                    subMenu.index = router.name;
                    subMenu.subs = [];
                    for(let subRoute of router.children){
                        subMenu.subs.push({
                            index: subRoute.name,
                            title: subRoute.title
                        })

                    }

                }
            }
        },

    },
    mutations: {
        changeCollapse (state) {
            // 变更状态
            state.isCollapse=!state.isCollapse;
        }
    }
};

export default app;
