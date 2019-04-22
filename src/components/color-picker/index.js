/**
 * kouchao 创建于 2018/9/10
 */

import LayColorPicker from './src/color-picker';

/* istanbul ignore next */
LayColorPicker.install = function (Vue) {
  Vue.component(LayColorPicker.name, LayColorPicker);
};

export default LayColorPicker;
