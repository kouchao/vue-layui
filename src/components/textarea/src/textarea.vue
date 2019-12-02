<template>
  <div :class="$parent.block ? 'layui-input-block' : 'layui-input-inline'">
    <textarea
      :type="type"
      :name="name"
      :placeholder="placeholder"
      class="layui-textarea"
      :value="value"
      :disabled="disabled"
      :class="{
        'layui-radio-disbaled layui-disabled': disabled
      }"
      @input="handleInput"
      @change="handleChange"
      @blur="handleBlur"
      @focus="handleFocus"
    />
  </div>
</template>

<script>
export default {
  name: 'LayTextarea',
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
    required: Boolean
  },
  data () {
    return {
      mName: 'LayTextarea'
    };
  },
  methods: {
    emit (event, e) {
      if (!this.disabled) {
        const value = e.target.value;
        this.$emit(event, value);
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
