import ButtonContainer from '../button/src/button-container';

/* istanbul ignore next */
ButtonContainer.install = function (Vue) {
  Vue.component(ButtonContainer.name, ButtonContainer);
};

export default ButtonContainer;
