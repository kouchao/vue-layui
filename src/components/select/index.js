/**
 * kouchao 创建于 2018/8/27
 */

import LaySelect from './src/select';

/* istanbul ignore next */
LaySelect.install = function (Vue) {
  Vue.component(LaySelect.name, LaySelect);
};

export default LaySelect;
