/**
 * kouchao 创建于 2018/8/27
 */

import LaySwitch from "./src/switch";

/* istanbul ignore next */
LaySwitch.install = function(Vue) {
  Vue.component(LaySwitch.name, LaySwitch);
};

export default LaySwitch;
