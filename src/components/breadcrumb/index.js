/**
 * kouchao 创建于 2018/8/27
 */

import LayBreadcrumb from "./src/breadcrumb";

/* istanbul ignore next */
LayBreadcrumb.install = function(Vue) {
  Vue.component(LayBreadcrumb.name, LayBreadcrumb);
};

export default LayBreadcrumb;
