<template>
  <div class="layui-card">
    <div class="layui-card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="layui-card-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "LayCard"
};
</script>
