import Popper from 'popper.js';

export default {
  methods: {
    createPopper () {
      const reference = this.$refs.reference;
      const popper = this.$refs.popper;
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
