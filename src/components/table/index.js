/**
 * kouchao 创建于 2018/9/3
 */

import LayTable from "./src/table";

/* istanbul ignore next */
LayTable.install = function(Vue) {
  Vue.component(LayTable.name, LayTable);
};

export default LayTable;
