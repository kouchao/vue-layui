/**
 * kouchao 创建于 2018/9/1
 */

import LayTimeline from './src/timeline';

/* istanbul ignore next */
LayTimeline.install = function (Vue) {
  Vue.component(LayTimeline.name, LayTimeline);
};

export default LayTimeline;
