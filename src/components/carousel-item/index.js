/**
 * kouchao 创建于 2018/9/7
 */

import LayCarouselItem from "../carousel/src/carousel-item";

/* istanbul ignore next */
LayCarouselItem.install = function(Vue) {
  Vue.component(LayCarouselItem.name, LayCarouselItem);
};

export default LayCarouselItem;
