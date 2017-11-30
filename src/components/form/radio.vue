<template>
  <span>
    <input type="radio"
           :value="label"
           :name="name">
    <div class="layui-unselect layui-form-radio"
         @click="handleClick"
         :class="{
           'layui-form-radioed': value == label,
           'layui-radio-disbaled layui-disabled': disabled
         }">
      <i v-if="value != label"
         class="layui-anim layui-icon layui-anim-scaleSpring"
         :class="{'layui-form-radioed': value != label}">&#xe63f;</i>
      <i v-if="value == label" class="layui-anim layui-icon layui-anim-scaleSpring" :class="{'layui-form-radioed': value == label}">&#xe643;</i>
      <span><slot></slot></span>
    </div>
  </span>

</template>

<script>
  export default {
    name: 'layui-radio',
    props: {
      value: [String, Number],
      label: [String, Number],
      disabled: Boolean,
      name: String
    },
    methods: {
      handleClick: function () {
        if (!this.disabled) {
          this.$emit('input', this.label)
        }
      }
    }
  }
</script>

<style>

</style>
