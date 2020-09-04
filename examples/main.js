import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


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
