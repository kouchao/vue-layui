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
      @input="handleInput"
      @change="handleChange"
      @blur="handleBlur"
      @focus="handleFocus"
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
  inject: ['formItem'],
  methods: {
    emit (event, e) {
      if (!this.disabled) {
        const value = e.target.value;
        this.$emit(event, this.number ? parseInt(value) || 0 : value);
        this.formItem && this.formItem.validate(event);
      }
    },
    handleChange (e) {
      this.emit('change', e);
    },
    handleInput (e) {
      this.emit('input', e);
    },
    handleBlur (e) {
      this.emit('blur', e);
    },
    handleFocus (e) {
      this.emit('focus', e);
    }
  }
};
</script>

<style></style>
