<template>
  <div>
    <hr :class="className">
  </div>
</template>

<script>
export default {
  name: 'LayLine',
  props: {
    theme: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      className: 'layui-bg-' + this.theme
    };
  }
};
</script>

<style scoped></style>
