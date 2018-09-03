/**
 * kouchao 创建于 2018/9/3
 */

import LayTabs from './src/tabs';

/* istanbul ignore next */
LayTabs.install = function(Vue) {
	Vue.component(LayTabs.name, LayTabs);
};

export default LayTabs;