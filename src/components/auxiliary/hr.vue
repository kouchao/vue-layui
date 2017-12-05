<template>
  <div>
    <hr :class="className">
  </div>

</template>

<script>
  export default {
    name: 'layui-hr',
    props: {
      color: String
    },
    data: function () {
      return {
        className: 'layui-bg-' + this.color
      }
    }
  }
</script>

<style scoped>

</style>
