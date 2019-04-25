import Vue from 'vue';
import Components from './toast.vue';
const Constructor = Vue.extend(Components);

export default () => {
  const instance = new Constructor().$mount();
  document.body.appendChild(instance.$el);
  return instance;
};
