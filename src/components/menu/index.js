/**
 * kouchao 创建于
 */

import LayMenu from "./src/menu";

/* istanbul ignore next */
LayMenu.install = function(Vue) {
  Vue.component(LayMenu.name, LayMenu);
};

export default LayMenu;
