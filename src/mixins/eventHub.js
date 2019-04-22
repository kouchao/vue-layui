/**
 * kouchao 创建于 2018/8/27
 */
import Vue from 'vue';
const eventHub = new Vue();

export default {
  methods: {
    eventEmit (eventName, data, isGlobal) {
      const parent = isGlobal ? this.$root : this.$parent || this.$root;

      if (parent && parent._uid) {
        const uid = parent._uid;
        eventHub.$emit(eventName + uid, data);
      }
    },
    eventOn (eventName, cb) {
      eventHub.$on(eventName + this._uid, cb);
    },
    eventOnGlobal (eventName, cb) {
      const parent = this.$root;
      eventHub.$on(eventName + parent._uid, cb);
    },
    eventEmitGlobal (eventName, data) {
      this.eventEmit(eventName, data, true);
    }
  }
};
