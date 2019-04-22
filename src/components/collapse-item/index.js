/**
 * kouchao 创建于 2018/8/27
 */

import LayCollapseItem from '../collapse/src/collapse-item';

/* istanbul ignore next */
LayCollapseItem.install = function (Vue) {
  Vue.component(LayCollapseItem.name, LayCollapseItem);
};

export default LayCollapseItem;
