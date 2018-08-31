// 通过axios-mock-adapter生成代理api地址
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import store from '@/store'

import {users,userMoreInfo} from './data/user'
import MockTools from './mocktools.js';




export default {
    init() {
        let mock = new MockAdapter(axios);
        let mockTools = new MockTools(mock);

        // login 模拟登录接口
        mockTools.doPost(store.state.app.interfaceURL.login,function ({name, pwd}) {
            let user = null;
            // 判断模拟的假数据中是否有和传过来的数据匹配的
            let hasUser = users.some(person => {
                // 如果存在这样的数据
                if (person.username === name && person.password === pwd) {
                    //wtf? 这里写的什么？脑子有回路？
                    //嗯。。。深拷贝666
                    user = JSON.parse(JSON.stringify(person));
                    user.password = undefined;
                    return true;
                }else {
                    //  如果没有这个person
                    return false
                }
            });
            // 如果有那么一个人
            if (hasUser) {
                return MockTools.resultData({user});
            } else {  // 如果没有这么一个人
                return MockTools.resultData({},'用户名密码不正确');
            }
        });
        mockTools.doPost(store.state.app.interfaceURL.getUserList,function (param) {
            return MockTools.resultData({userList:users});
        });
        mockTools.doPost(store.state.app.interfaceURL.addUser,function (user) {
            users.push(user);
            return MockTools.resultData({});
        });
        mockTools.doPost(store.state.app.interfaceURL.delUser,function ({id:delId}) {
            // 判断模拟的假数据中是否有和传过来的数据匹配的
            let userLength = users.length;
            let delFlag = false;
            while (userLength-->0){
                let {id} = users[userLength];
                if(id===delId){
                    users.splice(userLength,1);
                    delFlag = true;
                    break;
                }
            }
            if(delFlag===true){
                return MockTools.resultData({});
            }else {
                return MockTools.resultData({},"找到此用户");
            }
        })
        mockTools.doPost(store.state.app.interfaceURL.getUserMoreInfoList,function (param) {
            return MockTools.resultData({userMoreList:userMoreInfo});
        })
    }
}