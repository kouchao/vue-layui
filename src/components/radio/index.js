/**
 * kouchao 创建于 2018/8/27
 */

import LayRadio from './src/radio';

/* istanbul ignore next */
LayRadio.install = function (Vue) {
  Vue.component(LayRadio.name, LayRadio);
};

export default LayRadio;
