/**
 * kouchao 创建于 2018/8/27
 */

import LaySide from './src/side';

/* istanbul ignore next */
LaySide.install = function(Vue) {
	Vue.component(LaySide.name, LaySide);
};

export default LaySide;