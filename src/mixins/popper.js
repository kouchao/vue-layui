import Popper from 'popper.js';

export default {
  methods: {

    getRef (key) {
      const dom = this.$refs[key];

      if (dom._isVue) {
        return dom.$refs[key];
      }

      return dom;
    },
    createPopper () {
      const reference = this.getRef('reference');
      const popper = this.getRef('popper');

      console.log(reference, popper);
      this.popper = new Popper(reference, popper, {
        placement: 'bottom'
      });
    },
    updatePopper () {
      const popper = this.popper;

      if (popper) {
        popper.update();
      }
    },

    destroyPopper () {
      const popper = this.popper;

      if (popper) {
        popper.destroy();
        this.popper = null;
      }
    }
  },
  beforeDestroy () {
    this.destroyPopper();
  }

};
