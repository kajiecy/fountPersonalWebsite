

import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
