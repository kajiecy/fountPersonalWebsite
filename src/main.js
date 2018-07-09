import 'element-ui/lib/theme-chalk/index.css';    // 默认主题

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import store from './store'
import axios from 'axios';


// 引用API文件
import req from './api/req.js'
// 将API方法绑定到全局
Vue.prototype.$req = req


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
