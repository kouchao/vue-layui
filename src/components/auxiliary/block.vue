<template>
  <div style="margin: 10px">
    <blockquote v-if="!title" class="layui-elem-quote" :style="'border-left: 5px solid ' + color">
      <slot></slot>
    </blockquote>
    <fieldset v-if="title"
              class="layui-elem-field"
              :class="border ? '' : 'layui-field-title'"
              :style="styleName">
      <legend>{{title}}</legend>
      <div class="layui-field-box">
        <slot></slot>
      </div>
    </fieldset>
  </div>

</template>

<script>
  export default {
    name: 'layui-block',
    props: {
      color: String,
      title: String,
      border: Boolean
    },
    data: function () {
      return {
        styleName: {
          'border-color': this.color
        }
      }
    }
  }
</script>

<style scoped>

</style>
