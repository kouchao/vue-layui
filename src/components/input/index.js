/**
 * kouchao 创建于 2018/8/27
 */

import LayInput from "./src/input";

/* istanbul ignore next */
LayInput.install = function(Vue) {
  Vue.component(LayInput.name, LayInput);
};

export default LayInput;
