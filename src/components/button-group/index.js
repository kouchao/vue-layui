import ButtonGroup from '../button/src/button-group';

/* istanbul ignore next */
ButtonGroup.install = function (Vue) {
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;
