/**
 * kouchao 创建于 2018/8/27
 */

import LayRow from '@/components/row'
import LayCol from '@/components/col'
import LayContainer from '@/components/container'
import LayButton from '@/components/button'
import LayButtonGroup from '@/components/button-group'
import LayButtonContainer from '@/components/button-container'
import LayForm from '@/components/form'
import LayFormItem from '@/components/form-item'
import LayRadio from '@/components/radio'
import LayInput from '@/components/input'
import LayCheckbox from '@/components/checkbox'
import LaySelect from '@/components/select'
import LayTextarea from '@/components/textarea'
import LayTabs from '@/components/tabs'
import LayTabPane from '@/components/tab-pane'
import LayLine from '@/components/line'
import LayMenu from '@/components/menu'
import LayMenuItem from '@/components/menu-item'
import LayMenuChildItem from '@/components/menu-child-item'
import LayAdmin from '@/components/admin'
import LayHeader from '@/components/header'
import LayLogo from '@/components/logo'
import LaySide from '@/components/side'
import LayBody from '@/components/body'
import LayFooter from '@/components/footer'
import LayBlock from '@/components/block'
import LayBadge from '@/components/badge'
import LayBreadcrumb from '@/components/breadcrumb'
import LayBreadcrumbItem from '@/components/breadcrumb-item'
import LayProgress from '@/components/progress'
import LayCard from '@/components/card'
import LayCollapse from '@/components/collapse'
import LayCollapseItem from '@/components/collapse-item'
import LayTimeline from '@/components/timeline'
import LayTimelineItem from '@/components/timeline-item'
import LayTable from '@/components/table'
import LayTableColumn from '@/components/table-column'
import LayAlert from '@/components/alert'
import LaySwitch from '@/components/switch'
import LayPagination from '@/components/pagination'
import LayRate from '@/components/rate'

const layui = {
	config: {},
	install: function (Vue) {
		Vue.prototype.testLayui = function () {
			console.log('ok')
		}
		let components = [
			LayRow,
			LayCol,
			LayContainer,
			LayButton,
			LayButtonContainer,
			LayButtonGroup,
			LayForm,
			LayFormItem,
			LayRadio,
			LayInput,
			LayCheckbox,
			LaySelect,
			LayTextarea,
			LayTabs,
			LayTabPane,
			LayLine,
			LayMenu,
			LayMenuItem,
			LayMenuChildItem,
			LayAdmin,
			LayHeader,
			LayLogo,
			LaySide,
			LayBody,
			LayFooter,
			LayBlock,
			LayBadge,
			LayBreadcrumb,
			LayBreadcrumbItem,
			LayProgress,
			LayCard,
			LayCollapse,
			LayCollapseItem,
			LayTimeline,
			LayTimelineItem,
			LayTable,
			LayTableColumn,
			LayAlert,
			LaySwitch,
			LayPagination,
			LayRate
		]
		components.forEach(function (component) {
			Vue.component(component.name, component)
		})
		console.log('install layui ok')
	}
}

export default layui