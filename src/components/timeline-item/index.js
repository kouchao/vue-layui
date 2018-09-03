/**
 * kouchao 创建于 2018/9/1
 */

import LayTimelineItem from '../timeline/src/timeline-item';

/* istanbul ignore next */
LayTimelineItem.install = function(Vue) {
	Vue.component(LayTimelineItem.name, LayTimelineItem);
};

export default LayTimelineItem;