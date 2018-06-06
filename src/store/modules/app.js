// import {routers,appRouter} from '@/router/router';


const app = {
    state: {
        isCollapse:false,
        logoImgUrl:'http://qiniu.kajie88.com/siteLOGO.PNG',
        logoImgSmallUrl:'http://qiniu.kajie88.com/siteLOGO-small.PNG',
    },
    mutations: {
        changeCollapse (state) {
            // 变更状态
            state.isCollapse=!state.isCollapse;
        }
    }
};

export default app;
