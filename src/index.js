/**
 * kouchao 创建于 2018/8/27
 */


import LayRow from '@/components/row'
import LayCol from '@/components/col'
import LayContainer from '@/components/container'

import btn from '@/components/button/btn'
import btnGroup from '@/components/button/btn-group'

import form from '@/components/form/form'
import formItem from '@/components/form/form-item'
import radio from '@/components/form/radio'
import input from '@/components/form/input'
import checkbox from '@/components/form/checkbox'
import select from '@/components/form/select'
import textarea from '@/components/form/textarea'

import tabs from '@/components/tabs/tabs'
import tabPane from '@/components/tabs/tab-pane'

import hr from '@/components/auxiliary/hr'

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
			btn,
			btnGroup,
			form,
			formItem,
			radio,
			input,
			checkbox,
			select,
			textarea,
			tabs,
			tabPane,
			hr,

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
		]
		components.forEach(function (component) {
			Vue.component(component.name, component)
		})
		console.log('install layui ok')
	}
}

export default layui