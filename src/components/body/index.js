/**
 * kouchao 创建于 2018/8/27
 */

import LayBody from "./src/body";

/* istanbul ignore next */
LayBody.install = function(Vue) {
  Vue.component(LayBody.name, LayBody);
};

export default LayBody;
