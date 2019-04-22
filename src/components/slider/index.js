/**
 * kouchao 创建于 2018/9/5
 */

import LaySlider from './src/slider';
/* istanbul ignore next */
LaySlider.install = function (Vue) {
  Vue.component(LaySlider.name, LaySlider);
};

export default LaySlider;
