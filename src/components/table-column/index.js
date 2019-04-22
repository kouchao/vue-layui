/**
 * kouchao 创建于 2018/9/3
 */

import LayTableColumn from '../table/src/table-column';

/* istanbul ignore next */
LayTableColumn.install = function (Vue) {
  Vue.component(LayTableColumn.name, LayTableColumn);
};

export default LayTableColumn;
