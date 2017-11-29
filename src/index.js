/**
 *  kouchao 创建于 2017/11/28
 */
import '../static/css/layui.css'

import row from './components/layout/row'
import col from './components/layout/col'
import container from './components/layout/container'

import button from './components/button/button'

const layui = {
  config: {},
  install: function (Vue) {
    Vue.prototype.testLayui = function () {
      console.log('ok')
    }
    let components = [
      row,
      col,
      container,
      button
    ]
    components.forEach(function (component) {
      Vue.component(component.name, component)
    })
    console.log('install layui ok')
  }
}

export default layui
