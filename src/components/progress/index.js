/**
 * kouchao 创建于 2018/8/31
 */

import LayProgress from './src/progress';

/* istanbul ignore next */
LayProgress.install = function(Vue) {
	Vue.component(LayProgress.name, LayProgress);
};

export default LayProgress;