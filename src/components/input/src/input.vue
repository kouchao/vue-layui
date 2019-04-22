<template>
  <div :class="$parent.block ? 'layui-input-block' : 'layui-input-inline'">
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      class="layui-input"
      :value="value"
      :disabled="disabled"
      :class="{
        'layui-radio-disbaled layui-disabled': disabled
      }"
      @input="handleChange"
    >
  </div>
</template>

<script>
export default {
  name: 'LayInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    required: Boolean,
    width: {
      type: Number,
      default: 0
    },
    number: Boolean
  },
  methods: {
    handleChange: function () {
      if (!this.disabled) {
        const value = event.target.value;

        this.$emit('input', this.number ? parseInt(value) || 0 : value);
      }
    }
  }
};
</script>

<style></style>
