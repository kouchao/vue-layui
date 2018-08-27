/**
 * kouchao 创建于 2018/8/27
 */

import LayLogo from './src/logo';

/* istanbul ignore next */
LayLogo.install = function(Vue) {
	Vue.component(LayLogo.name, LayLogo);
};

export default LayLogo;