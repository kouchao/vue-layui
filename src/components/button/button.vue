<template>
  <div class="layui-btn"
       :class="[
      type ? 'layui-btn-' + type : '',
      size ? 'layui-btn-' + size : '',
      {
        'layui-btn-radius': radius
      }]">
    <i v-if="icon && !right" class="left" :class="icon"></i>
    <slot></slot>
    <i v-if="icon && right" class="right" :class="icon"></i>
  </div>
</template>

<script>
  export default {
    name: 'layui-button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      radius: Boolean,
      icon: String,
      right: Boolean
    },
    data: function () {
      return {
        classList: 'layui-btn '
      }
    },
    mounted: function () {
      // ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      //   if (this[size] && this[size] < 12) {
      //     if (this.offset) {
      //       this.classList += `layui-col-${size + this[size]} `
      //       this.classList += `layui-col-${size + '-offset' + this.offset} `
      //     } else {
      //       this.classList += `layui-col-${size + this[size]} `
      //     }
      //   }
      // })
      // this.classList += `layui-btn-${this.type} `
      // if (this.size) {
      //   this.classList += `layui-btn-${this.size} `
      // }
    }
  }
</script>

<style scoped>
  i.left{
    padding-right: 5px;
  }
  i.right{
    padding-left: 5px;
  }
</style>
