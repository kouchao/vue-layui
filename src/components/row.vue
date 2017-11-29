<template>
  <div :class="classList">
    <slot>123</slot>
  </div>
</template>

<script>
  export default {
    name: 'layui-row',
    props: {
      space: Number
    },
    data: function () {
      return {
        classList: 'layui-row '
      }
    },
    mounted: function () {
      if (this.space) {
        this.classList += `layui-col-space${this.space} `
      }
    }
  }
</script>

<style>

</style>
