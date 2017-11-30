<template>
  <div class="layui-form-item">
    <label v-if="label" class="layui-form-label">{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'layui-form-item',
    props: {
      label: String
    }
  }
</script>

<style>

</style>
