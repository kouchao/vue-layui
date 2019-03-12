/**
 * kouchao 创建于 2018/9/7
 */

import LayCarousel from "./src/carousel";

/* istanbul ignore next */
LayCarousel.install = function(Vue) {
  Vue.component(LayCarousel.name, LayCarousel);
};

export default LayCarousel;
