import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import times from '../packages/time/index'
import '../packages/theme-default/src/times.scss'

Vue.use(times)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
