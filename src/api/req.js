import router from './../router';
import store from './../store';
import {Notification} from 'element-ui'

// 配置API接口地址

// let root = 'http://localhost:8080/test/readExcel'                           // 接口项目路径
// let root = 'http://localhost:8080/'                           // 接口项目路径

// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj){
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 参数过滤函数
function filterNull (o){
    for (var key in o){
        if (o[key] === null){
            delete o[key]
        }
        if (toType(o[key]) === 'string'){
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'array'){
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'object'){
            o[key] = filterNull(o[key])
        }
    }
    return o
}
/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

function apiAxios (method, url, params, success, failure, page){

    if (params) {
        params = filterNull(params)
    }
    let reqParam = {};
    reqParam["param"] = params;
    let logintoken = localStorage.getItem('token');
    if(logintoken!=null){
        reqParam["token"]=logintoken;
    }
    if(page!=null){
        reqParam["page"]=page;
    }

    axios({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? reqParam : null,
        params: method === 'GET' || method === 'DELETE' ? reqParam : null,
        baseURL: store.state.app.rootURL,
        withCredentials: false,
    })
        .then(function (res) {
            if(res.data.respStatus==="SUCCESS"){
                if (success){
                    success(res.data.data,res.data.page)
                }
            }else{
                //如果没有登录 需要转跳到登录页
                if(res.data.errorCode==="CUSTOMER_TOKEN_ERROR"){
                    alert("暂未登录");
                    router.push('/login');
                }else{
                    if (failure){
                        failure(res.data)
                    } else {
                      console.log(res.data)
                        Notification.error({
                            title: '错误',
                            message: res.data.errorMsgCn
                        });
                        // window.alert('error: ' + res.data.errorMsg)
                    }
                }
            }
        })
        // .catch(function (err){
        //     // alert(2);
        //     let res = err.response
        //     if (err) {
        //         window.alert('api error, HTTP CODE:' + res.data.status)
        //     }
        // })
}
// function apiAxios2 (filename,method, url, success){
//
//     axios({
//         method: method,
//         url: url,
//         data: method === 'POST' || method === 'PUT' ? filename : null,
//         params: method === 'GET' || method === 'DELETE' ? filename : null,
//         baseURL: root,
//         withCredentials: false,
//     })
//         .then(function (res) {
//             success(res.data.data,res.data.page)
//         })
//         .catch(function (err){
//             // alert(2);
//             let res = err.response
//             if (err) {
//                 window.alert('api error, HTTP CODE:' + res.data.status)
//             }
//         })
// }
// 返回在vue模板中的调用接口
export default {
    get: function (url, params, success, failure) {
        return apiAxios('GET', url, params, success, failure)
    },
    post: function (url, params, success, failure) {
        return apiAxios('POST', url, params, success, failure)
    },
    postPage: function (url, params, page, success, failure) {
        return apiAxios('POST', url, params, success, failure, page)
    },
    put: function (url, params, success, failure) {
        return apiAxios('PUT', url, params, success, failure)
    },
    delete: function (url, params, success, failure) {
        return apiAxios('DELETE', url, params, success, failure)
    },
    // getToken:function (success) {
    //     return apiAxios2(null,'GET', "jsoncloud/common/qiNiu/get/uploadInfo", success)
    // },
    // getTokenWithName:function (filename,success) {
    //     return apiAxios2({name:filename},'GET', "jsoncloud/common/qiNiu/get/uploadInfo", success)
    // },

}




