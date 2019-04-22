<template>
  <div class="layui-collapse">
    <slot />
  </div>
</template>

<script>
import eventHub from '@/mixins/eventHub';
export default {
  name: 'LayCollapse',
  mixins: [eventHub],
  props: {
    defaultOpeneds: {
      type: Array,
      default () {
        return [];
      }
    },
    accordion: {
      type: Boolean,
      default () {
        return false;
      }
    }
  },
  data () {
    return {
      openeds: this.defaultOpeneds
    };
  },
  provide () {
    return {
      rootCollapse: this
    };
  },
  mounted () {
    this.eventOn('collapse-item-click', this.handleItemClick);
  },
  methods: {
    handleItemClick (item) {
      const { index } = item;
      const activeIndex = this.openeds.findIndex(o => o == index);
      if (activeIndex == -1) {
        this.accordion ? (this.openeds = [index]) : this.openeds.push(index);
      } else {
        this.openeds.splice(activeIndex, 1);
      }
    }
  }
};
</script>

<style></style>
