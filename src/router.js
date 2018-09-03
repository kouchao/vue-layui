import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Grid from './views/Grid.vue'
import Button from './views/Button.vue'
import Form from './views/Form.vue'
import Nav from './views/Nav.vue'
import Badge from './views/Badge.vue'
import Auxiliar from './views/Auxiliar.vue'
import Progress from './views/Progress.vue'
import Panel from './views/Panel.vue'
import Timeline from './views/Timeline.vue'
import Table from './views/Table.vue'
import Tabs from './views/Tabs.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/grid',
			name: 'grid',
			component: Grid
		},
		{
			path: '/button',
			name: 'button',
			component: Button
		},
		{
			path: '/form',
			name: 'form',
			component: Form
		},
		{
			path: '/nav',
			name: 'nav',
			component: Nav
		},
		{
			path: '/badge',
			name: 'badge',
			component: Badge
		},
		{
			path: '/auxiliar',
			name: 'auxiliar',
			component: Auxiliar
		},
		{
			path: '/progress',
			name: 'progress',
			component: Progress
		},
		{
			path: '/panel',
			name: 'panel',
			component: Panel
		},
		{
			path: '/timeline',
			name: 'timeline',
			component: Timeline
		},
		{
			path: '/table',
			name: 'table',
			component: Table
		},
		{
			path: '/tabs',
			name: 'tabs',
			component: Tabs
		}






	]
})
