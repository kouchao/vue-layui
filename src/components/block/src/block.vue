<template>
  <fieldset
    v-if="title"
    class="layui-elem-field"
    :class="{
      'layui-field-title': !$slots.default
    }"
    :style="styleName"
  >
    <legend>{{ title }}</legend>
    <div
      v-if="$slots.default"
      class="layui-field-box"
    >
      <slot />
    </div>
  </fieldset>
  <blockquote
    v-else
    class="layui-elem-quote"
    :class="'layui-quote-' + theme"
    :style="styleName"
  >
    <slot />
  </blockquote>
</template>

<script>
export default {
  name: 'LayBlock',
  props: {
    color: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      styleName: {
        'border-color': this.color
      }
    };
  }
};
</script>

<style scoped>
/*.layui-elem-quote {*/
/*border-left: 5px solid #009688*/
/*}*/
</style>
