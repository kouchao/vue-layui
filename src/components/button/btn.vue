<template>
  <div class="layui-btn"
       :class="[
      type ? 'layui-btn-' + type : '',
      size ? 'layui-btn-' + size : '',
      {
        'layui-btn-radius': radius
      }]">
    <i v-if="icon && !right" class="left" :class="icon"></i>
    <slot><span style="margin: -2px"></span></slot>
    <i v-if="icon && right"  class="right" :class="icon"></i>
  </div>
</template>

<script>
  export default {
    name: 'layui-btn',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      radius: Boolean,
      icon: String,
      right: Boolean
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
