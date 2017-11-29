<template>
  <div :class="classList">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'layui-col',
    props: {
      xs: Number,
      sm: Number,
      md: Number,
      lg: Number,
      xl: Number
    },
    data: function () {
      return {
        classList: ''
      }
    },
    mounted: function () {
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
        if (this[size] && this[size] < 12) {
          if (this.offset) {
            this.classList += `layui-col-${size + this[size]} `
            this.classList += `layui-col-${size + '-offset' + this.offset} `
          } else {
            this.classList += `layui-col-${size + this[size]} `
          }
        }
      })
    }
  }
</script>

<style>

</style>
