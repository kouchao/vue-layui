import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Grid from './views/Grid.md';
import Button from './views/Button.vue';
import Form from './views/Form.vue';
import Nav from './views/Nav.vue';
import Badge from './views/Badge.vue';
import Auxiliar from './views/Auxiliar.vue';
import Progress from './views/Progress.vue';
import Panel from './views/Panel.vue';
import Timeline from './views/Timeline.vue';
import Table from './views/Table.vue';
import Tabs from './views/Tabs.vue';
import Animation from './views/Animation.vue';
import Admin from './views/Admin.vue';
import Layer from './views/Layer.vue';
import Laypage from './views/Laypage.vue';
import Rate from './views/Rate.vue';
import Slider from './views/Slider.vue';
import Carousel from './views/Carousel.vue';
import ColorPicker from './views/ColorPicker.vue';
import DatePicker from './views/DatePicker.md';

Vue.use(Router);

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
    },
    {
      path: '/animation',
      name: 'animation',
      component: Animation
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/layer',
      name: 'layer',
      component: Layer
    },
    {
      path: '/laypage',
      name: 'laypage',
      component: Laypage
    },
    {
      path: '/rate',
      name: 'rate',
      component: Rate
    },
    {
      path: '/slider',
      name: 'slider',
      component: Slider
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/colorPicker',
      name: 'colorPicker',
      component: ColorPicker
    },
    {
      path: '/datePicker',
      name: 'datePicker',
      component: DatePicker
    }
  ]
});
