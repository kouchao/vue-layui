<template>
  <span class="layui-breadcrumb-item">
    <a
      href="javascript:void(0);"
      @click="handleClick"
    >
      <slot />
    </a>
    <span
      lay-separator=""
      class="separator"
    >{{
      layBreadcrumb.separator
    }}</span>
  </span>
</template>
<script>
export default {
  name: 'LayBreadcrumbItem',
  inject: ['layBreadcrumb'],
  props: {
    to: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleClick () {
      if (this.$route && this.to) {
        this.$router.push(this.to);
      }
    }
  }
};
</script>
