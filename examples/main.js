import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import times from '../packages/index'
import '../packages/theme-default/src/times.scss'

// import upload from '../packages/upload/index'
// import '../packages/theme-default/src/upload.scss'

Vue.use(times)

//Vue.use(upload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
