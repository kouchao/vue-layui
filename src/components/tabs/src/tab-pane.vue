<template>
  <div
    class="layui-tab-item"
    :class="{
      'layui-show': name == $parent.value
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayTabPane',
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped></style>
