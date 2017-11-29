<template>
  <div :class="classList">
    <slot>123</slot>
  </div>
</template>

<script>
  export default {
    name: 'layui-container',
    props: {
      fluid: Boolean
    },
    data: function () {
      return {
        classList: 'layui-container'
      }
    },
    mounted: function () {
      this.fluid ? this.classList = `layui-fluid` : this.classList = `layui-container`
    }
  }
</script>

<style>

</style>
