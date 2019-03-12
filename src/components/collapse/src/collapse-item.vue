<template>
  <div class="layui-colla-item">
    <h2 class="layui-colla-title" @click="handleClick">
      <slot name="title"></slot>
      <i
        class="layui-icon layui-colla-icon "
        :class="{
          'layui-icon-down': isActive,
          'layui-icon-right': !isActive
        }"
      ></i>
    </h2>
    <div
      class="layui-colla-content"
      :class="{
        'layui-show': isActive
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import eventHub from "@/mixins/eventHub";

export default {
  name: "LayCollapseItem",
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  mixins: [eventHub],
  data() {
    return {};
  },
  inject: ["rootCollapse"],
  methods: {
    handleClick() {
      this.eventEmit("collapse-item-click", this);
    }
  },
  computed: {
    isActive() {
      const isActive =
        this.rootCollapse.openeds.findIndex(o => o == this.index) != -1;
      return isActive;
    }
  }
};
</script>

<style scoped></style>
