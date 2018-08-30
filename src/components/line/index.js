/**
 * kouchao 创建于 2018/8/27
 */

import LayLine from './src/line';

/* istanbul ignore next */
LayLine.install = function(Vue) {
	Vue.component(LayLine.name, LayLine);
};

export default LayLine;