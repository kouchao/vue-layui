<template>
    <button :type="type" class="layui-btn"
         :class="[
      item ? 'layui-btn-' + item : '',
      size ? 'layui-btn-' + size : '',
      {
        'layui-btn-radius': radius
      }]">
    <i v-if="icon && !right" class="left" :class="icon"></i>
    <slot><span style="margin: -2px"></span></slot>
    <i v-if="icon && right"  class="right" :class="icon"></i>
  </button>

</template>

<script>
  export default {
    name: 'layui-btn',
    props: {
      item: {
        item: String,
        default: 'default'
      },
      size: String,
      radius: Boolean,
      icon: String,
      right: Boolean,
      type: String
    }
  }
</script>

<style scoped>
  i.right{
    padding-left: 4px;
  }

  i.left{
    padding-right: 4px;
  }

</style>
