<template>
  <div class="layui-logo" :class="{
        'is-collapse': admin.collapse
    }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LayLogo",
  inject: ['admin'],
};
</script>
<style scoped>
.layui-layout-admin .layui-logo.is-collapse {
  width: 60px;
  overflow: hidden;
}
</style>