// 通过axios-mock-adapter生成代理api地址
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// import { LoginUsers } from './data/user'
import {users} from './data/user'
import user from "../store/modules/user";

export default {
    init() {
        let mock = new MockAdapter(axios);

        // mock success request  模拟成功请求
        mock.onGet('/success').reply(200, {
            msg: 'success'
        });
        // mock error request  模拟失败请求
        mock.onGet('/error').reply(500, {
            msg: 'failure'
        })

        // login 模拟登录接口
        mock.onPost('/user/login').reply(config => {
            // 解析axios传过来的数据
            // console.log("reply param 'config' is",config.data)
            let {param:{name, pwd}} = JSON.parse(config.data);
            return new Promise((resolve, reject) => {
                // 先创建一个用户为空对象
                let user = null;
                setTimeout(() => {
                    // 判断模拟的假数据中是否有和传过来的数据匹配的
                    let hasUser = users.some(person => {
                        // console.log('some func data',person)
                        // console.log('input name is',name)
                        // console.log('input pwd is',pwd)

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
                        resolve([ 200, {respStatus:"SUCCESS", msg: '登录成功',data:{user:user}} ]);
                    } else {  // 如果没有这么一个人
                        resolve([ 200, {respStatus:"FAIL", errorMsgCn: '用户名密码不正确' }])
                    }
                }, 500);
            })
        });
        // getUserList
        mock.onPost('/user/getUserList').reply(config => {
            // 解析axios传过来的数据
            return new Promise((resolve, reject) => {
                // 先创建一个用户为空对象
                let userArray = null;
                setTimeout(() => {
                    // 判断模拟的假数据中是否有和传过来的数据匹配的
                    userArray = users;
                    resolve([ 200, {respStatus:"SUCCESS", msg: '登录成功',data:{userList:userArray}} ]);
                }, 500);
            })
        });
        mock.onPost('/user/addUser').reply(config => {
            console.log("config data is",config.data)
            let {param:user} = JSON.parse(config.data);
            // 解析axios传过来的数据
            return new Promise((resolve, reject) => {
                // 先创建一个用户为空对象
                setTimeout(() => {
                    // 判断模拟的假数据中是否有和传过来的数据匹配的
                    users.push(user);
                    resolve([ 200, {respStatus:"SUCCESS", msg: '登录成功',data:{}} ]);
                }, 300);
            })
        });
    }
}