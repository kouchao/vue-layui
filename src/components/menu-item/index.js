/**
 * kouchao 创建于
 */

import LayMenuItem from "../menu/src/menu-item";

/* istanbul ignore next */
LayMenuItem.install = function(Vue) {
  Vue.component(LayMenuItem.name, LayMenuItem);
};

export default LayMenuItem;
