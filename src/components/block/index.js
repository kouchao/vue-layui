/**
 * kouchao 创建于 2018/8/27
 */

import LayBlock from "./src/block";

/* istanbul ignore next */
LayBlock.install = function(Vue) {
  Vue.component(LayBlock.name, LayBlock);
};

export default LayBlock;
