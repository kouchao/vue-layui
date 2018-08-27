/**
 * kouchao 创建于 2018/8/27
 */

import LayContainer from './src/container';

/* istanbul ignore next */
LayContainer.install = function(Vue) {
	Vue.component(LayContainer.name, LayContainer);
};

export default LayContainer;