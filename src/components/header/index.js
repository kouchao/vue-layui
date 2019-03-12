/**
 * kouchao 创建于 2018/8/27
 */

import LayHeader from "./src/header";

/* istanbul ignore next */
LayHeader.install = function(Vue) {
  Vue.component(LayHeader.name, LayHeader);
};

export default LayHeader;
