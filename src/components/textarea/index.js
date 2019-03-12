/**
 * kouchao 创建于 2018/8/27
 */

import LayTextarea from "./src/textarea";

/* istanbul ignore next */
LayTextarea.install = function(Vue) {
  Vue.component(LayTextarea.name, LayTextarea);
};

export default LayTextarea;
