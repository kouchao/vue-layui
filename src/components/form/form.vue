<template>
  <form class="layui-form"
        :class="{
         'layui-form-pane': border
       }">
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'layui-form',
    props: {
      border: Boolean
    }
  }
</script>

<style>

</style>
