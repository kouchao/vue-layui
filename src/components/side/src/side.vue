<template>
  <div class="layui-side layui-bg-black" :class="{
        'is-collapse': admin.collapse
    }">
    <div class="layui-side-scroll">
      <slot></slot>
    </div>
  </div>
</template>
<script>

export default {
  name: "LaySide",
  inject: ['admin']
};
</script>
<style scoped>
.layui-layout-admin .layui-side {
  width: 200px;
  transition: 0.5s;
}

.layui-layout-admin .layui-side.is-collapse {
  width: 60px;
}
</style>
