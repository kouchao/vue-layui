/**
 * kouchao 创建于 2018/8/27
 */

import LayCard from "./src/card";

/* istanbul ignore next */
LayCard.install = function(Vue) {
  Vue.component(LayCard.name, LayCard);
};

export default LayCard;
