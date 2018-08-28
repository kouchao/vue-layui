import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Grid from './views/Grid.vue'
import Button from './views/Button.vue'
import Form from './views/Form.vue'

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
		}


	]
})
