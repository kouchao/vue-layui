import Vue from 'vue';
import layui from '@';
import App from './App.vue';
import router from './router';

import '@/assets/layui.css';
import '@/assets/layer.css';
import '@/assets/lay-date/laydate.css';
import '@/assets/vue-layui.css';
import 'highlight.js/styles/atom-one-dark.css';

import demoBlock from './components/demo-block.vue';
Vue.use(layui);
Vue.config.productionTip = false;
Vue.component('demo-block', demoBlock);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
