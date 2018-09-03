/**
 * kouchao 创建于 2018/9/3
 */

import LayTabPane from '../tabs/src/tab-pane';

/* istanbul ignore next */
LayTabPane.install = function(Vue) {
	Vue.component(LayTabPane.name, LayTabPane);
};

export default LayTabPane;