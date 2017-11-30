<template>
  <div class="layui-form-item "
       :class="{
         'layui-form-pane': border
       }">
    <label v-if="label" class="layui-form-label">{{label}}</label>
    <div :class="block ? 'layui-input-block' : 'layui-input-inline'">
      <slot></slot>
    </div>
    <div v-if="wordAux" class="layui-form-mid layui-word-aux">{{wordAux}}</div>

  </div>
</template>

<script>
  export default {
    name: 'layui-form-item',
    props: {
      label: String,
      block: Boolean,
      wordAux: String,
      border: Boolean
    }
  }
</script>

<style>

</style>
