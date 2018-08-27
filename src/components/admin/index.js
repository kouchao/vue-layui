/**
 * kouchao 创建于
 */

import LayAdmin from './src/admin';

/* istanbul ignore next */
LayAdmin.install = function(Vue) {
	Vue.component(LayAdmin.name, LayAdmin);
};

export default LayAdmin;