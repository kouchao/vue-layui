<template>
  <li
    :key="index"
    class="layui-nav-item"
    :class="{
      'layui-nav-itemed': isActive
    }"
    @mouseleave="onMouseLeave"
    @mouseenter="onMouseEnter"
  >
    <a
      href="javascript:;"
      @click="handleClick"
    >
      <i
        v-if="icon"
        :class="'layui-icon layui-icon-' + icon"
      />
      {{ title }}

      <slot
        v-if="!title"
        name="title"
      />
      <span
        v-if="$slots.default"
        class="layui-nav-more"
      />
    </a>
    <dl
      v-if="$slots.default"
      class="layui-nav-child"
      :class="rootMenu.mode"
    >
      <slot />
    </dl>
  </li>
</template>

<script>
import eventHub from '@/mixins/eventHub';
export default {
  name: 'LayMenuItem',
  mixins: [eventHub],
  props: {
    index: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  inject: ['rootMenu'],
  computed: {
    isActive () {
      const isActive =
        this.rootMenu.openeds.findIndex(o => o == this.index) != -1;
      return isActive;
    },
    isVertical () {
      return this.rootMenu.mode == 'vertical';
    }
  },
  methods: {
    handleClick () {
      if (this.$slots.default && this.rootMenu.mode == 'vertical') {
        this.eventEmit('menu-item-click', this);
      }
    },
    onMouseEnter () {
      if (this.$slots.default && this.rootMenu.mode == 'horizontal') {
        this.eventEmit('menu-item-click', this);
      }
    },
    onMouseLeave () {
      if (this.$slots.default && this.rootMenu.mode == 'horizontal') {
        this.eventEmit('menu-item-click', this);
      }
    }
  }
};
</script>

<style scoped>
.layui-nav .layui-nav-item a.layui-nav-item-bar-l,
.layui-nav .layui-nav-item a.layui-nav-item-bar-b {
  transition-duration: 0s;
}
.layui-nav-item-bar-l:hover {
  border-left: 5px solid rgb(0, 150, 136);
  padding-left: 15px;
}
.layui-nav-item-bar-b:hover {
  border-bottom: 5px solid rgb(0, 150, 136);
  padding-top: 5px;
  line-height: 50px;
}

.layui-nav-itemed > .layui-nav-child.horizontal {
  background: #fff !important;
}

.layui-icon {
  margin-right: 5px;
}
</style>
