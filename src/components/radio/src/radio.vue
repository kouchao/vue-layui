<template>
  <span>
    <input
      type="radio"
      :value="label"
      :name="name"
    >
    <div
      class="layui-unselect layui-form-radio"
      :class="{
        'layui-form-radioed': value == label,
        'layui-radio-disbaled layui-disabled': disabled
      }"
      @click="handleClick"
    >
      <i
        v-if="value != label"
        class="layui-anim layui-icon layui-anim-scaleSpring"
        :class="{ 'layui-form-radioed': value != label }"
      >&#xe63f;</i>
      <i
        v-if="value == label"
        class="layui-anim layui-icon layui-anim-scaleSpring"
        :class="{ 'layui-form-radioed': value == label }"
      >&#xe643;</i>
      <span><slot /></span>
    </div>
  </span>
</template>

<script>
export default {
  name: 'LayRadio',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: [String, Number],
      default: ''
    },
    disabled: Boolean,
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick: function () {
      if (!this.disabled) {
        this.$emit('input', this.label);
      }
    }
  }
};
</script>

<style></style>
