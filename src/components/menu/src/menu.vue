<template>
  <ul
    class="layui-nav"
    :class="classList"
    :style="styleList"
  >
    <slot />
  </ul>
</template>

<script>
import eventHub from '@/mixins/eventHub';

export default {
  name: 'LayMenu',
  mixins: [eventHub],
  props: {
    // horizontal / vertical
    mode: {
      type: String,
      default: 'vertical'
    },
    defaultOpeneds: {
      type: Array,
      default () {
        return [];
      }
    },
    uniqueOpened: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      openeds: this.defaultOpeneds,
      classList: [
        {
          'layui-nav-tree': this.mode == 'vertical'
        },
        'layui-bg-' + this.theme
      ],
      styleList: this.color ? 'background-color: ' + this.color : ''
    };
  },
  provide () {
    return {
      rootMenu: this
    };
  },
  mounted () {
    this.eventOn('menu-item-click', this.handleItemClick);
  },
  methods: {
    handleItemClick (item) {
      const { index } = item;
      const activeIndex = this.openeds.findIndex(o => o == index);
      if (activeIndex == -1) {
        this.uniqueOpened ? (this.openeds = [index]) : this.openeds.push(index);
      } else {
        this.openeds.splice(activeIndex, 1);
      }
    }
  }
};
</script>

<style scoped></style>
