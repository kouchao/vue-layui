<template>
  <div class="layui-colla-item">
    <h2
      class="layui-colla-title"
      @click="handleClick"
    >
      <slot name="title" />
      <i
        class="layui-icon layui-colla-icon "
        :class="{
          'layui-icon-down': isActive,
          'layui-icon-right': !isActive
        }"
      />
    </h2>
    <div
      class="layui-colla-content"
      :class="{
        'layui-show': isActive
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import eventHub from '@/mixins/eventHub';

export default {
  name: 'LayCollapseItem',
  mixins: [eventHub],
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {};
  },
  inject: ['rootCollapse'],
  computed: {
    isActive () {
      const isActive =
        this.rootCollapse.openeds.findIndex(o => o == this.index) != -1;
      return isActive;
    }
  },
  methods: {
    handleClick () {
      this.eventEmit('collapse-item-click', this);
    }
  }
};
</script>

<style scoped></style>
