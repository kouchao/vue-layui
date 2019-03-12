/**
 * kouchao 创建于 2018/9/4
 */

import LayAlert from "./src/alert";

/* istanbul ignore next */
LayAlert.install = function(Vue) {
  Vue.component(LayAlert.name, LayAlert);
};

export default LayAlert;
