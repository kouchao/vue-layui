<template>
  <div class="layui-card">
    <div
      v-if="$slots.header"
      class="layui-card-header"
    >
      <slot name="header" />
    </div>
    <div class="layui-card-body">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'LayCard'
};
</script>
