export default class MockTools {
    constructor(mock) {
        this.mock = mock;
    }
    //执行post 请求 传入 url ,处理方法
    //处理方法中 含参为 request中 的 param对象;
    //必须有返回值
    doPost(url, doFunc){
        // login 模拟登录接口
        this.mock.onPost(url).reply(config => {
            // 解析axios传过来的数据
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // console.log("reply param 'config' is",config.data)
                    let {param} = JSON.parse(config.data);
                    let result = doFunc(param);
                    console.log(result);
                    let {respStatus='SUCCESS',errorMsgCn='',respData={}} = result===undefined?{respStatus:"FAIL",errorMsgCn:'MockTools doPost 方法参数没有返回值'}:result;
                    console.log("respData",respData);
                    resolve([ 200, {respStatus:respStatus, errorMsgCn: errorMsgCn,data:respData} ]);
                }, 500);
            })
        });
    }
    //doFunc return 时用此方法进行数据标准化
    static resultData(paramData,errorMsgCn){
        //传来的Data数据深拷贝
        let respData = JSON.parse(JSON.stringify(paramData))
        //errorMsgCn存在就标记失败
        let respStatus = undefined;
        if(errorMsgCn){
            respStatus = "FAIL";
        }
        return {respData,respStatus="SUCCESS",errorMsgCn=""}={respData,respStatus,errorMsgCn}
    }
}