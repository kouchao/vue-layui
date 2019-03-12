/**
 * kouchao 创建于 2018/8/31
 */

import LayCollapse from "./src/collapse";

/* istanbul ignore next */
LayCollapse.install = function(Vue) {
  Vue.component(LayCollapse.name, LayCollapse);
};

export default LayCollapse;
