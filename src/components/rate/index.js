/**
 * kouchao 创建于 2018/8/27
 */

import LayRate from './src/rate';
/* istanbul ignore next */
LayRate.install = function (Vue) {
  Vue.component(LayRate.name, LayRate);
};

export default LayRate;
