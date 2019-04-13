<template>
  <div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "LaySide"
};
</script>
<style scoped>
.layui-layout-admin .layui-side {
  width: 200px;
  transition: 0.5s;
}
</style>
