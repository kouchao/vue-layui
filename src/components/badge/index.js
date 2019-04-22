/**
 * kouchao 创建于 2018/8/27
 */

import LayBadge from './src/badge';

/* istanbul ignore next */
LayBadge.install = function (Vue) {
  Vue.component(LayBadge.name, LayBadge);
};

export default LayBadge;
