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
      @input="handleChange"
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
    handleChange: function () {
      if (!this.disabled) {
        this.$emit('input', event.target.value);
      }
    }
  }
};
</script>

<style></style>
