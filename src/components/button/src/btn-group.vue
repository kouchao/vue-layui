<template>
  <div class="layui-btn-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LayButtonGroup"
};
</script>

<style scoped>
i.left {
  padding-right: 5px;
}
i.right {
  padding-left: 5px;
}
</style>
