<template>
  <li
    :key="index"
    class="layui-nav-item"
    :class="{
            'layui-nav-itemed': isActive && !isCollapse
        }"
    @mouseleave="onMouseLeave"
    @mouseenter="onMouseEnter"
  >
    <a
      @click="handleClick"
      :class="{
                'layui-nav-item-bar-l': isVertical,
                'layui-nav-item-bar-b': !isVertical,
           }"
      href="javascript:;"
    >
      <i v-if="icon" :class="'layui-icon layui-icon-' + icon"></i>
      {{!isCollapse ? title : ''}}
      
      <slot v-if="!title && !isCollapse" name="title"></slot>
      <span class="layui-nav-more" v-if="$slots.default"></span>
    </a>
    <dl class="layui-nav-child" :class="this.rootMenu.mode" v-if="$slots.default">
      <slot></slot>
    </dl>
  </li>
</template>

<script>
import eventHub from "@/mixins/eventHub";
export default {
  name: "LayMenuItem",
  props: {
    index: {
      type: Number,
      required: true
    },
    title: {
      type: String
    },
    icon: {
      type: String
    }
  },
  mixins: [eventHub],
  inject: ['rootMenu', 'admin'],
  methods: {
    handleClick() {
      if (this.$slots.default && this.rootMenu.mode == "vertical") {
        this.eventEmit("menu-item-click", this);
        this.eventEmitGlobal('change-collapse', false);
      }
    },
    onMouseEnter() {
      if (this.$slots.default && this.rootMenu.mode == "horizontal") {
        this.eventEmit("menu-item-click", this);
      }
    },
    onMouseLeave() {
      if (this.$slots.default && this.rootMenu.mode == "horizontal") {
        this.eventEmit("menu-item-click", this);
      }
    }
  },
  computed: {
    isActive() {
      const isActive = this.rootMenu.openeds.findIndex(o => o == this.index) != -1;
      return isActive;
    },
    isVertical() {
      return this.rootMenu.mode == "vertical";
    },
    isCollapse() {
      const admin = this.admin || {}
      return !this.isVertical ? false : admin.collapse;
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