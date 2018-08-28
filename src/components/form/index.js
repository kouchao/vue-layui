/**
 * kouchao 创建于 2018/8/27
 */

import LayForm from './src/form';

/* istanbul ignore next */
LayForm.install = function(Vue) {
	Vue.component(LayForm.name, LayForm);
};

export default LayForm;