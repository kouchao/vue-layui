/**
 * kouchao 创建于 2018/8/27
 */

import LayBreadcrumbItem from '../breadcrumb/src/breadcrumb-item';

/* istanbul ignore next */
LayBreadcrumbItem.install = function(Vue) {
	Vue.component(LayBreadcrumbItem.name, LayBreadcrumbItem);
};

export default LayBreadcrumbItem;