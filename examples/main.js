import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入初始化样式表
import './assets/css/lib/reset';


//引入ElementUI
import ElementUI from 'element-ui';
Vue.use(ElementUI);


import bms from '../packages'
import '../packages/theme-default/src/times.scss'
import '../packages/theme-default/src/upload.scss'

Vue.use(bms)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
