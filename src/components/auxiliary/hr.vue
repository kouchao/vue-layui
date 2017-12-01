<template>
  <div>
    <hr v-if="!title" :class="className">

    <fieldset v-if="title" class="layui-elem-field layui-field-title" :style="styleName">
      <legend>{{title}}</legend>
    </fieldset>
  </div>

</template>

<script>
  export default {
    name: 'layui-hr',
    props: {
      color: String,
      title: String
    },
    data: function () {
      return {
        className: 'layui-bg-' + this.color,
        styleName: {
          'border-color': this.color
        }
      }
    }
  }
</script>

<style scoped>

</style>
