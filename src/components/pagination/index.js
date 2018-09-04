/**
 * kouchao 创建于 2018/9/4
 */

import LayPagination from './src/pagination';

/* istanbul ignore next */
LayPagination.install = function(Vue) {
	Vue.component(LayPagination.name, LayPagination);
};

export default LayPagination;