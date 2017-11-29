/**
 *  kouchao 创建于 2017/11/28
 */
import row from './components/row'
import col from './components/col'
import container from './components/container'

const layui = {
  config: {},
  install: function (Vue) {
    Vue.prototype.testLayui = function () {
      console.log('ok')
    }
    Vue.component(row.name, row)
    Vue.component(col.name, col)
    Vue.component(container.name, container)
    console.log('install layui ok')
  }
}

export default layui
