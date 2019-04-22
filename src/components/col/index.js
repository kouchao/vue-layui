/**
 * kouchao 创建于 2018/8/27
 */

import LayCol from './src/col';

/* istanbul ignore next */
LayCol.install = function (Vue) {
  Vue.component(LayCol.name, LayCol);
};

export default LayCol;
