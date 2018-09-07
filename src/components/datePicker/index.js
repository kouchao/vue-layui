/**
 * 朱大常 创建于 2018/9/7
 */

import LayDatePicker from './src/datePicker';

/* istanbul ignore next */
LayDatePicker.install = function(Vue) {
	Vue.component(LayDatePicker.name, LayDatePicker);
};

export default LayDatePicker;
