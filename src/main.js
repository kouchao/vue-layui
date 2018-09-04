import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import layui from './index'

import '@/assets/layui.css'
import '@/assets/layer.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(layui)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
